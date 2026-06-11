import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n';

interface ServiceItem {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  price: string;
  priceAr: string;
  tag: string;
  tagAr: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Smart Interview Engine',
    titleAr: 'محرك المقابلة الذكية',
    description: 'Our AI analyst conducts a deep discovery interview to uncover your real business requirements and lock down scope before a single line of code is written.',
    descriptionAr: 'يجري المحلل الذكي مقابلة استكشافية عميقة لكشف متطلبات عملك الحقيقية وتحديد النطاق قبل كتابة سطر واحد من الكود.',
    price: 'Included in all plans',
    priceAr: 'مضمّن في جميع الخطط',
    tag: 'AI-Powered',
    tagAr: 'مدعوم بالذكاء الاصطناعي',
  },
  {
    id: 2,
    title: 'Automated Blueprint Generation',
    titleAr: 'إنشاء المخططات التلقائية',
    description: 'Archi converts your verified ideas instantly into developer-ready tasks, visual roadmaps, Kanban boards, and technical specifications — in minutes, not months.',
    descriptionAr: 'يحوّل أركي أفكارك المعتمدة فوراً إلى مهام جاهزة للمطورين ومخططات مرئية ولوحات كانبان ومواصفات تقنية — في دقائق لا أشهر.',
    price: 'Starting at OMR 500/project',
    priceAr: 'يبدأ من 500 ريال عُماني / مشروع',
    tag: 'Instant Output',
    tagAr: 'نتائج فورية',
  },
  {
    id: 3,
    title: 'Full-Stack Code Compilation',
    titleAr: 'تجميع الكود الكامل',
    description: 'Archi Dev compiles your locked roadmap into a fast, secure, production-ready application — including UI, databases, auth layers, and automated safety tests.',
    descriptionAr: 'يقوم Archi Dev بتجميع خارطة طريقك المعتمدة إلى تطبيق سريع وآمن وجاهز للإنتاج — يشمل الواجهة وقواعد البيانات وطبقات المصادقة واختبارات السلامة التلقائية.',
    price: 'Custom pricing per scope',
    priceAr: 'تسعير مخصص حسب النطاق',
    tag: 'Production Ready',
    tagAr: 'جاهز للإنتاج',
  },
  {
    id: 4,
    title: 'Enterprise Security & Compliance',
    titleAr: 'الأمان والامتثال المؤسسي',
    description: 'Ministry-certified and fully compliant with Oman\'s digital governance standards. Automated background screening, encrypted data layers, and sovereign cloud deployment.',
    descriptionAr: 'معتمد من الوزارة ومتوافق تماماً مع معايير الحوكمة الرقمية في عُمان. فحص آلي وطبقات بيانات مشفرة ونشر سيادي على السحابة.',
    price: 'Enterprise tier',
    priceAr: 'الخطة المؤسسية',
    tag: 'Gov Certified',
    tagAr: 'معتمد حكومياً',
  },
  {
    id: 5,
    title: 'Dedicated AI Dev Team',
    titleAr: 'فريق تطوير ذكاء اصطناعي مخصص',
    description: '182 specialized AI experts — from business analysts to cybersecurity engineers — working in parallel to deliver flawless, elite-grade software at unprecedented speed.',
    descriptionAr: '182 خبير ذكاء اصطناعي متخصص — من محللي الأعمال إلى مهندسي الأمن السيبراني — يعملون بالتوازي لتسليم برمجيات خالية من الأخطاء بسرعة غير مسبوقة.',
    price: 'Available on request',
    priceAr: 'متاح عند الطلب',
    tag: '182 Specialists',
    tagAr: '182 متخصص',
  },
];

export function ServicesAccordion() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { isRTL } = useLanguage();

  return (
    <section dir={isRTL ? 'rtl' : 'ltr'} className="w-full bg-[#f5f4f2] py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header row */}
        <div className={`flex flex-col lg:flex-row justify-between items-start gap-6 mb-14 md:mb-20 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          <div className="flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400"
            >
              {isRTL ? 'الخدمات' : 'Services'}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="text-[2.8rem] sm:text-[3.5rem] md:text-[4.2rem] font-[300] text-[#111111] leading-[1.05] tracking-[-0.025em]"
            >
              {isRTL ? (
                <>
                  رعاية خبيرة
                  <br />
                  <span className="text-slate-400 font-[200]">لكل فكرة</span>
                </>
              ) : (
                <>
                  Expert care
                  <br />
                  <span className="text-slate-400 font-[200]">for every idea</span>
                </>
              )}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`text-slate-500 text-[14px] md:text-[15px] leading-[1.75] font-light max-w-[340px] lg:pt-14 ${isRTL ? 'text-right' : ''}`}
          >
            {isRTL
              ? 'من الفكرة إلى الإنتاج — نغطي كل مرحلة من رحلة تطوير برمجياتك بدقة وإتقان.'
              : 'From the idea to production — we cover every phase of your software journey with precision and craft.'}
          </motion.p>
        </div>

        {/* Accordion list */}
        <div className="w-full flex flex-col">
          {services.map((service, index) => {
            const isOpen = hoveredId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative border-t border-[#d1cfc9] last:border-b cursor-pointer"
              >
                {/* Hover background fill — slides up from bottom */}
                <motion.div
                  initial={false}
                  animate={{
                    scaleY: isOpen ? 1 : 0,
                    originY: 1,
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-[#111111] origin-bottom pointer-events-none rounded-sm"
                  style={{ transformOrigin: 'bottom' }}
                />

                <div className={`relative z-10 flex items-start justify-between gap-6 px-0 py-6 md:py-7 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {/* Left: number + title */}
                  <div className={`flex items-start gap-5 md:gap-8 flex-1 min-w-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {/* Index number */}
                    <motion.span
                      animate={{ color: isOpen ? 'rgba(255,255,255,0.25)' : 'rgba(100,106,115,0.5)' }}
                      transition={{ duration: 0.3 }}
                      className="text-[12px] font-mono font-light tracking-widest mt-1 shrink-0 w-8"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.span>

                    {/* Title + expanded content */}
                    <div className="flex flex-col flex-1 min-w-0">
                      <motion.h3
                        animate={{ color: isOpen ? '#ffffff' : '#111111' }}
                        transition={{ duration: 0.3 }}
                        className="text-[1.15rem] sm:text-[1.35rem] md:text-[1.55rem] font-[350] leading-[1.2] tracking-[-0.01em]"
                      >
                        {isRTL ? service.titleAr : service.title}
                      </motion.h3>

                      {/* Expanded content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 pb-1 flex flex-col md:flex-row md:items-end justify-between gap-4">
                              <div className="flex flex-col gap-3 max-w-[520px]">
                                <p className="text-[13px] md:text-[14px] text-white/65 leading-[1.75] font-light">
                                  {isRTL ? service.descriptionAr : service.description}
                                </p>
                                <div className="flex items-center gap-2">
                                  <span className="text-[11px] text-white/40 font-light">
                                    {isRTL ? 'السعر:' : 'Price:'}
                                  </span>
                                  <span className="text-[12px] text-[#38bdf8] font-mono">
                                    {isRTL ? service.priceAr : service.price}
                                  </span>
                                </div>
                              </div>

                              {/* CTA button */}
                              <motion.button
                                initial={{ opacity: 0, scale: 0.9, y: 6 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="shrink-0 bg-white text-[#111111] px-5 py-2.5 rounded-full text-[11px] font-semibold tracking-widest uppercase hover:bg-[#38bdf8] hover:text-white transition-colors duration-200 whitespace-nowrap"
                              >
                                {isRTL ? 'احجز استشارة' : 'Book a Consultation'}
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Right: tag + arrow */}
                  <div className={`flex items-center gap-3 shrink-0 mt-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {/* Tag pill */}
                    <AnimatePresence initial={false} mode="wait">
                      {!isOpen ? (
                        <motion.span
                          key="tag-closed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="hidden sm:inline-flex text-[10px] font-medium tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full"
                        >
                          {isRTL ? service.tagAr : service.tag}
                        </motion.span>
                      ) : (
                        <motion.span
                          key="tag-open"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="hidden sm:inline-flex text-[10px] font-medium tracking-wider text-[#38bdf8] bg-[#38bdf8]/10 px-2.5 py-1 rounded-full border border-[#38bdf8]/20"
                        >
                          {isRTL ? service.tagAr : service.tag}
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {/* Animated arrow */}
                    <motion.div
                      animate={{
                        rotate: isOpen ? -45 : 0,
                        color: isOpen ? '#38bdf8' : '#9ca3af',
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="w-7 h-7 flex items-center justify-center"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        className="stroke-current"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3.5 14.5L14.5 3.5M14.5 3.5H6.5M14.5 3.5V11.5" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
