'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FlaskConical, Dna, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const products = [
  {
    id: 1,
    name: 'ELEGENN PDRN Revital Booster',
    subtitle: 'High-concentration PDRN formula designed to support skin regeneration and recovery.',
    tag: 'Main / Bestseller',
    image: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F0419-4-2.png&nonce=3354e5de-dd4e-47b2-ad04-208df5a500ed&project_id=7626603365904056360&sign=3b7274cdd70e821c91737339b135457d24b43113a3f22618c642790fb0ff25ae',
  },
  {
    id: 2,
    name: 'ELEGENN Hydra 10 Peptide Booster',
    subtitle: 'Advanced moisture and elasticity solution powered by Peptide complex and HA.',
    tag: 'Hydration',
    image: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F0419-4-1-C.png&nonce=bc13e73f-5019-4881-aaa2-9fec24a7f61d&project_id=7626603365904056360&sign=f3431c6ac06cdddb2dcbdb2bf4a981d22c70bf66f7b70d7ec0092c3f03edf414',
  },
  {
    id: 3,
    name: 'ELEGENN Radiance Booster',
    subtitle: 'Radiance-enhancing solution for hydrated, luminous, even-toned skin.',
    tag: 'Brightening',
    image: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F0422-4.png&nonce=70e07925-936a-4e4a-8061-de1a5ace2b9b&project_id=7626603365904056360&sign=30a5d133d67bb69cd3a19378be83cbaba7692f54bd3db37aae9150cb3add5f98',
  },
  {
    id: 4,
    name: 'ELEGENN Scalp Revital Booster',
    subtitle: 'Intensive scalp care solution for a healthy foundation.',
    tag: 'Scalp Care',
    image: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F0419-4-3-C.png&nonce=22f0152e-f259-4b84-875f-f7f6326fb27a&project_id=7626603365904056360&sign=c5960b1a611cecde9e1b5db21fbfe1e3e69ca7304984edfa803859bc5d2596cb',
  },
  {
    id: 5,
    name: 'ELEGENN Meso Sculpt Booster',
    subtitle: 'Advanced contouring solution for refined face & body silhouette.',
    tag: 'Contouring',
  },
  {
    id: 6,
    name: 'ELEGENN Post Procedure Ampoule',
    subtitle: 'Soothing and barrier care solution for sensitive, post-treatment skin.',
    tag: 'Post-Procedure',
  },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section with Model Image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0ABAB5]/5 via-white to-[#0ABAB5]/10" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#0ABAB5]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#0ABAB5]/5 rounded-full blur-3xl" />
        
        {/* Hero Content - Left Side */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <p className="text-[#0ABAB5] font-bold tracking-widest text-base sm:text-lg uppercase mb-4">
                {t('hero.tagline')}
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {t('hero.title')}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <Link href="/products">
                <Button 
                  size="lg" 
                  className="bg-[#0ABAB5] hover:bg-[#08A5A1] text-white px-8 py-5 text-base rounded-full shadow-lg shadow-[#0ABAB5]/25"
                >
                  {t('hero.button')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            {/* Model Image - Right Side (Desktop only) */}
            <div className="hidden lg:flex relative justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="ELEGENN GLOBAL Model"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Model Image (Mobile only) */}
        <div className="lg:hidden relative w-full max-w-sm mx-auto aspect-[3/4] mt-4 px-4">
          <Image
            src="/logo.png"
            alt="ELEGENN GLOBAL Model"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-[#0ABAB5] font-bold tracking-widest text-base sm:text-lg uppercase mb-4">
                {t('story.label')}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                <img src="/elegann-logo-gold.png" alt="ELEGENN" className="h-12 mb-2 inline-block" /><br />
                <span className="block tiffany-text-gradient text-lg sm:text-xl">{t('story.titleAccent')}</span>
              </h2>
              <p className="text-base sm:text-base text-gray-600 leading-relaxed mb-6">
                {t('story.desc1')}
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                {t('story.desc2')}
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-[#0ABAB5] text-[#0ABAB5] hover:bg-[#0ABAB5] hover:text-white px-8 rounded-full">
                  {t('story.button')}
                </Button>
              </Link>
            </div>
            <div className="relative flex justify-center lg:justify-start">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#0ABAB5]/10 max-w-md w-full">
                <Image
                  src="/products-banner.png"
                  alt="ELEGENN Products"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Section */}
      <section className="py-24 serum-texture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#0ABAB5] font-bold tracking-widest text-base sm:text-lg uppercase mb-4">
              {t('tech.label')}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('tech.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('tech.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: '/pdrn.png',
                title: t('tech.pdrn.title'),
                subtitle: t('tech.pdrn.subtitle'),
                description: t('tech.pdrn.desc'),
                detail: t('tech.pdrn.detail'),
              },
              {
                image: '/peptide.png',
                title: t('tech.peptide.title'),
                subtitle: t('tech.peptide.subtitle'),
                description: t('tech.peptide.desc'),
                detail: t('tech.peptide.detail'),
              },
              {
                image: '/hyaluronic-acid.png',
                title: t('tech.ha.title'),
                subtitle: t('tech.ha.subtitle'),
                description: t('tech.ha.desc'),
                detail: t('tech.ha.detail'),
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                  <img src={tech.image} alt={tech.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{tech.title}</h3>
                <p className="text-xs text-[#0ABAB5] font-medium mb-4">{tech.subtitle}</p>
                <p className="text-base font-medium text-gray-800 mb-4">{tech.description}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{tech.detail}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/about#technology">
              <Button variant="outline" className="border-[#0ABAB5] text-[#0ABAB5] hover:bg-[#0ABAB5] hover:text-white px-8 rounded-full">
                {t('tech.button')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Products Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#0ABAB5] font-bold tracking-widest text-base sm:text-lg uppercase mb-4">
              {t('products.label')}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('products.title')}
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#0ABAB5]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] serum-texture flex items-center justify-center relative">
                  {product.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#0ABAB5]">
                      {product.tag}
                    </span>
                  )}
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4" />
                  ) : (
                    <div className="w-20 h-28 mx-auto rounded-xl bg-gradient-to-b from-[#0ABAB5]/20 to-[#0ABAB5]/5 border border-[#0ABAB5]/20 flex items-center justify-center">
                      <span className="text-[#0ABAB5]/50 font-bold">{index + 1}</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0ABAB5] transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {product.subtitle}
                  </p>
                  <div className="flex items-center text-[#0ABAB5] text-sm font-medium">
                    {t('products.viewDetails')}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button className="bg-[#0ABAB5] hover:bg-[#08A5A1] text-white px-10 py-6 text-base rounded-full shadow-lg shadow-[#0ABAB5]/25">
                {t('products.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 tiffany-gradient text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-white text-[#0ABAB5] hover:bg-white/90 px-10 py-6 text-base rounded-full">
                {t('cta.button1')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0ABAB5] px-10 py-6 text-base rounded-full">
                {t('cta.button2')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
