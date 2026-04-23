'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const productImages: Record<number, string> = {
  1: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F0419-4-2.png&nonce=3354e5de-dd4e-47b2-ad04-208df5a500ed&project_id=7626603365904056360&sign=3b7274cdd70e821c91737339b135457d24b43113a3f22618c642790fb0ff25ae',
  2: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F0419-4-1-C.png&nonce=bc13e73f-5019-4881-aaa2-9fec24a7f61d&project_id=7626603365904056360&sign=f3431c6ac06cdddb2dcbdb2bf4a981d22c70bf66f7b70d7ec0092c3f03edf414',
  3: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F0422-4.png&nonce=70e07925-936a-4e4a-8061-de1a5ace2b9b&project_id=7626603365904056360&sign=30a5d133d67bb69cd3a19378be83cbaba7692f54bd3db37aae9150cb3add5f98',
  4: 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F0419-4-3-C.png&nonce=22f0152e-f259-4b84-875f-f7f6326fb27a&project_id=7626603365904056360&sign=c5960b1a611cecde9e1b5db21fbfe1e3e69ca7304984edfa803859bc5d2596cb',
};

const productRatings: Record<number, number> = {
  1: 4.9,
  2: 4.8,
  3: 4.7,
  4: 4.6,
  5: 4.8,
  6: 4.9,
};

const featuredProducts = [1, 2];

export default function ProductsPage() {
  const { t } = useLanguage();

  const getProduct = (id: number) => ({
    name: t(`product.${id}.name`),
    tagline: t(`product.${id}.tagline`),
    description: t(`product.${id}.desc`),
    tag: t(`product.${id}.tag`),
    rating: productRatings[id] || 4.5,
    image: productImages[id] || null,
    featured: featuredProducts.includes(id),
  });

  const products = [1, 2, 3, 4, 5, 6].map(getProduct);

  return (
    <>
      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {t('products.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products
              .filter((p) => p.featured)
              .map((product, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[#0ABAB5]/5 to-white rounded-3xl p-8 md:p-10 border border-[#0ABAB5]/10 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {product.tag && (
                      <span className="px-3 py-1 bg-[#0ABAB5] text-white text-xs font-medium rounded-full">
                        {product.tag}
                      </span>
                    )}
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[#0ABAB5] text-[#0ABAB5]" />
                      <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-[#0ABAB5] font-medium mb-4">{product.tagline}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                  <div className="flex items-center gap-4">
                    <Link href={`/products/${idx + 1}`}>
                      <Button className="bg-[#0ABAB5] hover:bg-[#08A5A1] text-white px-6 rounded-full">
                        {t('products.viewDetails')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="border-[#0ABAB5] text-[#0ABAB5] hover:bg-[#0ABAB5] hover:text-white px-6 rounded-full">
                        {t('cta.button2')}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-24 serum-texture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {t('products.viewMore')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#0ABAB5]/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[4/3] serum-texture flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#0ABAB5]/5 to-white">
                  {product.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#0ABAB5] z-10">
                      {product.tag}
                    </span>
                  )}
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  ) : (
                    <div className="w-20 h-28 mx-auto rounded-xl bg-gradient-to-b from-[#0ABAB5]/20 to-[#0ABAB5]/5 border border-[#0ABAB5]/20 flex items-center justify-center">
                      <span className="text-[#0ABAB5]/50 font-bold text-2xl">{idx + 1}</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 fill-[#0ABAB5] text-[#0ABAB5]" />
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0ABAB5] transition-colors mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#0ABAB5] font-medium mb-3">{product.tagline}</p>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {product.description}
                  </p>
                  <Link href={`/products/${idx + 1}`}>
                    <Button variant="outline" className="w-full border-[#0ABAB5] text-[#0ABAB5] hover:bg-[#0ABAB5] hover:text-white rounded-full">
                      {t('products.viewDetails')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
