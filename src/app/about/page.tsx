'use client';

import { useState, useEffect, useRef } from 'react';
import { Target, Eye, TrendingUp, FlaskConical, Shield, Globe, Handshake, Microscope, Droplets } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Scroll Animation Hook
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Animated Section Component
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();

  const coreValues = [
    { number: '01', title: t('about.values.pf.title'), icon: TrendingUp, description: t('about.values.pf.detail') },
    { number: '02', title: t('about.values.sa.title'), icon: FlaskConical, description: t('about.values.sa.detail') },
    { number: '03', title: t('about.values.qa.title'), icon: Shield, description: t('about.values.qa.detail') },
    { number: '04', title: t('about.values.gm.title'), icon: Globe, description: t('about.values.gm.detail') },
    { number: '05', title: t('about.values.tp.title'), icon: Handshake, description: t('about.values.tp.detail') },
  ];

  const businessAreas = [
    { number: '01', title: t('about.business.skincare'), icon: Microscope },
    { number: '02', title: t('about.business.ampoule'), icon: Droplets },
    { number: '03', title: t('about.business.distribution'), icon: Globe },
  ];

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #f8fbfc 0%, #ffffff 50%, #f0f7fa 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Hero Section */}
      <section className="relative pt-20 pb-8">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <AnimatedSection>
            <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-base mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              {t('about.hero.label')}
            </p>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              {t('about.hero.title1')}
            </h1>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tiffany-text-gradient mb-3 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              {t('about.hero.titleAccent')}
            </h1>
            <p className="text-xs text-gray-500 max-w-xl font-light" style={{ fontFamily: 'Georgia, serif' }}>
              {t('about.hero.desc')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-12">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* 1. Company Overview & 2. CEO Message - Two Columns */}
          <AnimatedSection className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left - Company Overview */}
              <div>
                <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-base mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  {t('about.overview.label')}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  {t('about.overview.title')}
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed font-light">
                  <p>
                    {t('about.overview.desc1')}
                  </p>
                  <p>
                    {t('about.overview.desc2')}
                  </p>
                </div>
              </div>

              {/* Right - CEO Message */}
              <div>
                <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-base mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  {t('about.ceo.label')}
                </p>
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <p className="text-lg text-gray-700 italic mb-6">
                    {t('about.ceo.quote')}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('about.ceo.desc1')}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('about.ceo.desc2')}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('about.ceo.desc3')}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0ABAB5] to-[#08A5A1] flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-sm">EG</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">ELEGENN GLOBAL</p>
                      <p className="text-sm text-gray-500">CEO & Representative</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 3. Vision & 4. Mission */}
          <AnimatedSection delay={200} className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0ABAB5]/20 to-[#0ABAB5]/10 flex items-center justify-center">
                    <Eye className="h-7 w-7 text-[#0ABAB5]" />
                  </div>
                  <div>
                    <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-base" style={{ fontFamily: 'Georgia, serif' }}>{t('about.vm.vision.title')}</p>
                    <h3 className="text-lg font-bold text-gray-800">{t('about.vm.vision.title')}</h3>
                  </div>
                </div>
                <p className="text-xl font-medium text-gray-800 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  {t('about.vm.vision.text')}
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0ABAB5]/20 to-[#0ABAB5]/10 flex items-center justify-center">
                    <Target className="h-7 w-7 text-[#0ABAB5]" />
                  </div>
                  <div>
                    <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-base" style={{ fontFamily: 'Georgia, serif' }}>{t('about.vm.mission.title')}</p>
                    <h3 className="text-lg font-bold text-gray-800">{t('about.vm.mission.title')}</h3>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    t('about.vm.mission.item1'),
                    t('about.vm.mission.item2'),
                    t('about.vm.mission.item3'),
                    t('about.vm.mission.item4'),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-[#0ABAB5] mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* 5. Core Values - Icons Grid */}
          <AnimatedSection delay={300} className="mb-20">
            <div className="text-center mb-12">
              <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-base mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {t('about.values.label')}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-300" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
                  {t('about.values.title')}
                </h2>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-300" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {coreValues.map((value, index) => (
                <AnimatedSection key={index} delay={400 + index * 100}>
                  <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#0ABAB5]/30 transition-all duration-300 h-full">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0ABAB5]/10 to-[#0ABAB5]/5 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-[#0ABAB5]" />
                    </div>
                    <div className="text-3xl font-bold text-gray-300 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {value.number}
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 mb-2">{value.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* 6. Business Areas */}
          <AnimatedSection delay={500}>
            <div className="text-center mb-12">
              <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-base mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {t('about.business.label')}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-300" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
                  {t('about.business.title')}
                </h2>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-300" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessAreas.map((item, index) => (
                <AnimatedSection key={index} delay={600 + index * 100}>
                  <div className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#0ABAB5]/30 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0ABAB5]/10 to-[#0ABAB5]/5 flex items-center justify-center mx-auto mb-6">
                      <item.icon className="h-10 w-10 text-[#0ABAB5]" />
                    </div>
                    <div className="text-2xl font-bold text-gray-300 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                      {item.number}
                    </div>
                    <h3 className="text-base font-bold text-gray-800">{item.title}</h3>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
