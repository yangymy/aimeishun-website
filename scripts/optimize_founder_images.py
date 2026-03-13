#!/usr/bin/env python3
"""
Optimize founder photos: sharpen, adjust color/contrast, resize to 800x800, and save as high-quality JPG.
Backs up originals to founder/backup/ before processing. Enhanced files are saved next to the
originals with a "_enhanced" suffix and a .jpg extension.
"""

import os
import sys
import shutil
from pathlib import Path

try:
    from PIL import Image, ImageFilter, ImageEnhance
except Exception:
    # Lazily install Pillow if not present
    import subprocess

    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageFilter, ImageEnhance


def ensure_dir(p: Path) -> None:
    p.mkdir(parents=True, exist_ok=True)


def process_image(in_path: Path, out_path: Path) -> None:
    with Image.open(in_path) as im:
        im = im.convert("RGB") if im.mode != "RGB" else im.copy()

        w, h = im.size
        side = min(w, h)
        left = (w - side) // 2
        top = (h - side) // 2
        im = im.crop((left, top, left + side, top + side))

        # Sharpen and enhance color/contrast
        im = im.filter(ImageFilter.UnsharpMask(radius=2, percent=150, threshold=3))
        im = ImageEnhance.Color(im).enhance(1.15)
        im = ImageEnhance.Contrast(im).enhance(1.25)

        # Resize to 800x800 with a Pillow-compatible resampling filter
        if hasattr(Image, "Resampling"):
            resample = Image.Resampling.LANCZOS
        else:
            resample = 3
        im = im.resize((800, 800), resample)

        out_path.parent.mkdir(parents=True, exist_ok=True)
        im.save(out_path, format="JPEG", quality=90, optimize=True, progressive=True)


def main() -> int:
    # Project layout: D:/OpenCode/my-app/public/images/founder
    base_dir = Path(__file__).resolve().parents[2]  # go up to D:/OpenCode
    founder_dir = base_dir / "my-app" / "public" / "images" / "founder"
    backup_dir = founder_dir / "backup"

    ensure_dir(backup_dir)

    supported = (".jpg", ".jpeg", ".png", ".bmp", ".gif")
    if not founder_dir.exists():
        print(f"Founder directory not found: {founder_dir}")
        return 1

    files = []
    for name in sorted(founder_dir.iterdir()):
        if name.is_file() and name.suffix.lower() in supported:
            if "_enhanced" in name.stem:
                continue
            files.append(name.name)

    if not files:
        print("No founder images found to optimize.")
        return 0

    processed = 0
    for fname in files:
        in_path = founder_dir / fname
        base = Path(fname).stem
        enhanced_name = base + "_enhanced.jpg"
        enhanced_path = founder_dir / enhanced_name

        backup_path = backup_dir / fname
        if not backup_path.exists():
            shutil.copy2(in_path, backup_path)

        if enhanced_path.exists():
            try:
                enhanced_path.unlink()
            except Exception:
                pass

        try:
            process_image(in_path, enhanced_path)
            print(f"[OK] {fname} -> {enhanced_path.name}")
            processed += 1
        except Exception as e:
            print(f"[ERR] failed to process {fname}: {e}")

    print(f"Total images processed: {processed}/{len(files)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
