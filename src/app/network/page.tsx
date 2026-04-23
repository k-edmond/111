'use client';

import { Globe, Users, Award, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NetworkPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Global Network Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-lg mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              {t('network.hero.label')}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              {t('network.hero.title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
              {t('network.hero.desc')}
            </p>
          </div>

          {/* Globe Image */}
          <div className="relative w-full max-w-5xl mx-auto mb-16">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2Fglobal-%EA%B0%80%EB%A1%9C.png&nonce=82477269-6705-4dbd-b4ed-c5079b027699&project_id=7626603365904056360&sign=27fad9b896d09d901de3d015ae2955b93f2f460d508318366c47253c244b655e"
                alt="Elegenn Global Network"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0ABAB5]/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                {t('network.pillar1.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t('network.pillar1.desc')}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0ABAB5]/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                {t('network.pillar2.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t('network.pillar2.desc')}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0ABAB5]/10 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                {t('network.pillar3.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t('network.pillar3.desc')}
              </p>
            </div>
          </div>

          {/* Vision for the Future */}
          <div className="bg-gradient-to-r from-[#0ABAB5] to-[#08A5A1] rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <Rocket className="h-12 w-12 mx-auto mb-6 opacity-90" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {t('network.vision.title')}
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto leading-relaxed text-lg">
                {t('network.vision.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
