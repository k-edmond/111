'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles, Droplets, Sun, Leaf, Scale, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

const icons: Record<string, React.ElementType> = {
  '1': Sparkles,
  '2': Droplets,
  '3': Sun,
  '4': Leaf,
  '5': Scale,
  '6': Shield,
};

const productImages: Record<string, string> = {
  '1': 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F0419-4-2.png&nonce=3354e5de-dd4e-47b2-ad04-208df5a500ed&project_id=7626603365904056360&sign=3b7274cdd70e821c91737339b135457d24b43113a3f22618c642790fb0ff25ae',
  '2': 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F0419-4-1-C.png&nonce=bc13e73f-5019-4881-aaa2-9fec24a7f61d&project_id=7626603365904056360&sign=f3431c6ac06cdddb2dcbdb2bf4a981d22c70bf66f7b70d7ec0092c3f03edf414',
  '3': 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F0422-4.png&nonce=70e07925-936a-4e4a-8061-de1a5ace2b9b&project_id=7626603365904056360&sign=30a5d133d67bb69cd3a19378be83cbaba7692f54bd3db37aae9150cb3add5f98',
  '4': 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F0419-4-3-C.png&nonce=22f0152e-f259-4b84-875f-f7f6326fb27a&project_id=7626603365904056360&sign=c5960b1a611cecde9e1b5db21fbfe1e3e69ca7304984edfa803859bc5d2596cb',
};

export default function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const { t } = useLanguage();

  const product = {
    name: t(`product.${id}.name`),
    subtitle: t(`product.${id}.desc`),
    description: t(`product.${id}.desc2`) || t(`product.${id}.desc`),
    tag: t(`product.${id}.tag`),
    icon: icons[id] || Sparkles,
    image: productImages[id],
    features: [
      t(`product.${id}.features.1`),
      t(`product.${id}.features.2`),
    ].filter(Boolean),
    mechanism: t(`product.${id}.mechanism`),
    target: [
      t(`product.${id}.target.1`),
      t(`product.${id}.target.2`),
    ].filter(Boolean),
    ingredients: [
      t(`product.${id}.ingredients.1`),
      t(`product.${id}.ingredients.2`),
      t(`product.${id}.ingredients.3`),
      t(`product.${id}.ingredients.4`),
    ].filter(Boolean),
    usage: [
      t(`product.${id}.usage.1`),
      t(`product.${id}.usage.2`),
      t(`product.${id}.usage.3`),
    ].filter(Boolean),
  };

  if (!product.name || product.name.includes('product.')) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('productDetail.notFound')}</h1>
          <Link href="/products">
            <Button className="bg-[#0ABAB5] hover:bg-[#08A5A1] text-white">
              {t('productDetail.back')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = product.icon;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16" style={{ backgroundImage: 'url(/background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/products" 
            className="inline-flex items-center text-gray-500 hover:text-[#0ABAB5] mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('productDetail.back')}
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl serum-texture flex items-center justify-center overflow-hidden bg-white">
                {product.image ? (
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                ) : (
                  <div className="w-40 h-52 rounded-2xl bg-gradient-to-b from-[#0ABAB5]/20 to-[#0ABAB5]/5 border border-[#0ABAB5]/20 flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-[#0ABAB5]/60" />
                  </div>
                )}
              </div>
              {product.tag && (
                <span className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#0ABAB5] shadow-sm">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-[#0ABAB5] font-medium mb-4">{product.description}</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {product.subtitle}
              </p>
              <Link href="/contact">
                <Button className="bg-[#0ABAB5] hover:bg-[#08A5A1] text-white px-8 py-6 text-base rounded-full">
                  {t('productDetail.inquire')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Key Features */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('productDetail.keyFeatures')}</h2>
              <div className="space-y-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#0ABAB5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('productDetail.howItWorks')}</h2>
                <p className="text-gray-600 leading-relaxed">{product.mechanism}</p>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('productDetail.idealFor')}</h2>
                <ul className="space-y-3">
                  {product.target.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-[#0ABAB5] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Ingredients */}
              <div className="bg-gradient-to-br from-[#0ABAB5]/5 to-white rounded-2xl p-6 border border-[#0ABAB5]/10">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('productDetail.keyIngredients')}</h3>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                      <Sparkles className="h-3 w-3 text-[#0ABAB5]" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Usage */}
              <div className="bg-gradient-to-br from-[#0ABAB5]/5 to-white rounded-2xl p-6 border border-[#0ABAB5]/10">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('productDetail.howToUse')}</h3>
                <ol className="space-y-3">
                  {product.usage.map((step, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#0ABAB5] text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 tiffany-gradient text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t('productDetail.cta.title')}
          </h2>
          <p className="text-white/90 mb-8">
            {t('productDetail.cta.desc')}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[#0ABAB5] hover:bg-white/90 px-10 py-6 text-base rounded-full">
              {t('productDetail.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
