import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Shield, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F6]">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <Badge 
              variant="secondary" 
              className="bg-[#D4A574]/10 text-[#D4A574] border-[#D4A574]/20 px-4 py-1.5"
            >
              爱美舜 · AIMEISHUN
            </Badge>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#4A4A48] leading-tight">
              品质生活
              <span className="text-[#7A9E8C]">从这里开始</span>
            </h1>
            
            <p className="text-xl text-[#6A6A68] max-w-2xl mx-auto leading-relaxed">
              爱美舜致力于为您提供优质的产品与服务，<br />
              让美好生活触手可及
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg"
                className="bg-[#7A9E8C] hover:bg-[#5F7D6E] text-white px-8"
              >
                探索产品
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-[#7A9E8C] text-[#7A9E8C] hover:bg-[#7A9E8C]/10"
              >
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-[#E8E2DB] bg-[#F5F1ED]/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#7A9E8C]/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-[#7A9E8C]" />
                </div>
                <CardTitle className="font-serif text-xl text-[#4A4A48]">创新设计</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6A6A68]">融合现代美学与实用功能，打造独具匠心的产品体验</p>
              </CardContent>
            </Card>

            <Card className="border-[#E8E2DB] bg-[#F5F1ED]/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#D4A574]/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#D4A574]" />
                </div>
                <CardTitle className="font-serif text-xl text-[#4A4A48]">品质保证</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6A6A68]">严选优质材料，严格品控流程，确保每件产品都值得信赖</p>
              </CardContent>
            </Card>

            <Card className="border-[#E8E2DB] bg-[#F5F1ED]/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#7A9E8C]/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-[#7A9E8C]" />
                </div>
                <CardTitle className="font-serif text-xl text-[#4A4A48]">贴心服务</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6A6A68]">专业团队全程陪伴，用心倾听您的需求，提供个性化解决方案</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#7A9E8C]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            开启您的美好生活之旅
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            加入爱美舜，与众多追求品质生活的用户一起，探索更多可能
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="bg-[#F5F1ED] text-[#4A4A48] hover:bg-white"
          >
            立即体验
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#4A4A48] text-[#E8E2DB]">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm">© 2026 爱美舜 AIMEISHUN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
