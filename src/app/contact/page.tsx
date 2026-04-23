'use client';

import { useState } from 'react';
import { Mail, Send, MessageCircle, User, Building, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitted(true);
      setFormData({ name: '', company: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #f8fbfc 0%, #ffffff 50%, #f0f7fa 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Hero Image */}
      <section className="relative pt-16 pb-6">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[3/1] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2FInquiry.png&nonce=5a8a637f-484a-4c07-9d3a-cb60019d24e1&project_id=7626603365904056360&sign=301ef7efff59a4b508b202b2dfc4a49fe691b3ffc64f91977eeeb4cf44dbb0e2"
              alt="Elegenn Contact"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-8">
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Second Image */}
          <div className="mb-10">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-50">
              <img
                src="https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2Fcontact+0418.png&nonce=cffa46dd-497b-4a8b-8c87-6aeaaed6695d&project_id=7626603365904056360&sign=18a51f5b4c5d11afb327377055fceb222d1580535a5b34d39007022f745ba2fe"
                alt="Elegenn Contact"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          {/* Form Only */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>Send Us a Message</h2>
            <p className="text-gray-500 mb-8 text-sm">We typically respond within 24 hours.</p>

            {submitted ? (
              <div className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm">
                <MessageCircle className="h-16 w-16 text-[#0ABAB5] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('contact.form.success.title')}</h3>
                <p className="text-gray-600">{t('contact.form.success.desc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      name="name"
                      placeholder={t('contact.form.name')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-12 h-14 rounded-xl border-gray-200 focus:border-[#0ABAB5] focus:ring-[#0ABAB5] bg-white/80"
                    />
                  </div>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      name="company"
                      placeholder={t('contact.form.company')}
                      value={formData.company}
                      onChange={handleChange}
                      className="pl-12 h-14 rounded-xl border-gray-200 focus:border-[#0ABAB5] focus:ring-[#0ABAB5] bg-white/80"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      name="email"
                      placeholder={t('contact.form.email')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-12 h-14 rounded-xl border-gray-200 focus:border-[#0ABAB5] focus:ring-[#0ABAB5] bg-white/80"
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <Textarea
                      name="message"
                      placeholder={t('contact.form.message')}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="pl-12 rounded-xl border-gray-200 focus:border-[#0ABAB5] focus:ring-[#0ABAB5] resize-none bg-white/80"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0ABAB5] hover:bg-[#08A5A1] text-white h-14 rounded-xl text-base"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t('contact.form.sending')}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      Submit
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
