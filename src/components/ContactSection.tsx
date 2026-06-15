import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from '../i18n';
import dofarBg from "../assets/images/dofarbg.png";

const BudgetChips = ({ selected, onChange, isRTL }: { selected: string, onChange: (val: string) => void, isRTL: boolean }) => {
  const options = isRTL ? [
    { label: "< ٢ ألف ر.ع.", value: "under_2k" },
    { label: "٢ - ٥ آلاف ر.ع.", value: "2k_5k" },
    { label: "٥ - ١٥ ألف ر.ع.", value: "5k_15k" },
    { label: "١٥ ألف+ ر.ع.", value: "15k_plus" }
  ] : [
    { label: "< 2k OMR", value: "under_2k" },
    { label: "2k - 5k OMR", value: "2k_5k" },
    { label: "5k - 15k OMR", value: "5k_15k" },
    { label: "15k+ OMR", value: "15k_plus" }
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-1">
      {options.map((opt) => {
        const isSelected = selected === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={cn(
              "text-[10px] md:text-xs px-3.5 py-1.5 rounded-full border transition-all duration-300 font-light cursor-pointer",
              isSelected 
                ? "bg-slate-900 text-white border-slate-900 shadow-[0_4px_12px_rgba(0,0,0,0.15)] scale-[1.03]" 
                : "bg-white/30 border-white/60 text-slate-700 hover:bg-white/50 hover:text-slate-900"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};

const TimelineChips = ({ selected, onChange, isRTL }: { selected: string, onChange: (val: string) => void, isRTL: boolean }) => {
  const options = isRTL ? [
    { label: "عاجل جداً", value: "urgent" },
    { label: "١-٢ شهر", value: "medium" },
    { label: "مرن", value: "flexible" }
  ] : [
    { label: "Urgent", value: "urgent" },
    { label: "1-2 Months", value: "medium" },
    { label: "Flexible", value: "flexible" }
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-1">
      {options.map((opt) => {
        const isSelected = selected === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={cn(
              "text-[10px] md:text-xs px-3.5 py-1.5 rounded-full border transition-all duration-300 font-light cursor-pointer",
              isSelected 
                ? "bg-slate-900 text-white border-slate-900 shadow-[0_4px_12px_rgba(0,0,0,0.15)] scale-[1.03]" 
                : "bg-white/30 border-white/60 text-slate-700 hover:bg-white/50 hover:text-slate-900"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};

const ContactForm = ({ isRTL }: { isRTL: boolean }) => {
  const [formData, setFormData] = useState({ phone: '', email: '', description: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.email || !formData.description) return;
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@rewan.ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          phone: formData.phone,
          email: formData.email,
          description: formData.description,
          _captcha: "false",
          _subject: "Archi Platform - New Project Brief"
        })
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ phone: '', email: '', description: '' });
      } else {
        alert(isRTL ? "حدث خطأ ما، يرجى المحاولة مرة أخرى." : "Something went wrong, please try again.");
      }
    } catch (error) {
      console.error(error);
      alert(isRTL ? "فشل إرسال النموذج. يرجى التحقق من اتصالك." : "Failed to submit form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-12 space-y-4"
      >
        <div className="w-12 h-12 rounded-full bg-slate-900/5 border border-slate-900/10 flex items-center justify-center text-slate-900 shadow-sm shrink-0">
          <svg className="w-6 h-6 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-light text-slate-900">
            {isRTL ? "تم إرسال رسالتك بنجاح!" : "Message Sent Successfully!"}
          </h4>
          <p className="text-xs text-slate-650 max-w-xs leading-relaxed font-light">
            {isRTL ? "شكراً لتواصلك. سيتواصل خبراؤنا معك قريباً لرسم خارطة الطريق." : "Thank you for reaching out. Our experts will contact you shortly to blueprint your roadmap."}
          </p>
        </div>
        <button 
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="text-xs text-slate-900 hover:text-slate-700 underline underline-offset-4 pt-4 font-light transition-colors cursor-pointer"
        >
          {isRTL ? "إرسال رسالة أخرى" : "Send another message"}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-7">
      {/* Phone Number Input */}
      <div className="flex flex-col gap-2 text-start">
        <label className="text-[10px] uppercase tracking-wider text-slate-700 font-semibold px-1">
          {isRTL ? "رقم الهاتف" : "Phone Number"}
        </label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+968 7662 6636"
          dir="ltr"
          className="bg-white/40 border border-white/60 rounded-full px-6 py-4 text-xs md:text-sm text-slate-950 placeholder:text-slate-500 font-light w-full focus:bg-white/60 focus:border-white focus:ring-1 focus:ring-sky-500/20 focus:outline-none transition-all duration-300 text-left"
        />
      </div>

      {/* Business Email Input */}
      <div className="flex flex-col gap-2 text-start">
        <label className="text-[10px] uppercase tracking-wider text-slate-700 font-semibold px-1">
          {isRTL ? "البريد الإلكتروني للعمل" : "Business Email"}
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="yourname@company.com"
          dir="ltr"
          className="bg-white/40 border border-white/60 rounded-full px-6 py-4 text-xs md:text-sm text-slate-950 placeholder:text-slate-500 font-light w-full focus:bg-white/60 focus:border-white focus:ring-1 focus:ring-sky-500/20 focus:outline-none transition-all duration-300 text-left"
        />
      </div>

      {/* Description Textarea */}
      <div className="flex flex-col gap-2 text-start">
        <label className="text-[10px] uppercase tracking-wider text-slate-700 font-semibold px-1">
          {isRTL ? "حدثنا عن فكرة تطبيقك" : "Tell us about your app idea"}
        </label>
        <textarea
          required
          rows={5}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder={isRTL ? "أريد بناء تطبيق لـ..." : "I want to build a platform for..."}
          className="bg-white/40 border border-white/60 rounded-2xl px-6 py-4 text-xs md:text-sm text-slate-950 placeholder:text-slate-500 font-light resize-none h-40 leading-relaxed w-full focus:bg-white/60 focus:border-white focus:ring-1 focus:ring-sky-500/20 focus:outline-none transition-all duration-300"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-6 rounded-full bg-slate-900 text-white hover:bg-slate-800 text-xs md:text-sm font-semibold h-12 md:h-14 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)] hover:scale-[1.01]"
      >
        {isSubmitting ? (
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {isRTL ? "إرسال المتطلبات" : "Send Requirements"}
            <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180 mr-1' : 'ml-1'}`} />
          </>
        )}
      </button>
    </form>
  );
};

export const ContactSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      dir={isRTL ? 'rtl' : 'ltr'} 
      className="w-full py-20 md:py-28 relative overflow-hidden px-4 md:px-6 lg:px-8 bg-white"
      style={{ 
        backgroundImage: `url(${dofarBg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle vignette/fade to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/10 pointer-events-none" />

      {/* Top white gradient to blend seamlessly with the white section above */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white via-white/85 to-transparent pointer-events-none z-[1]" />

      {/* Bottom white gradient to blend seamlessly with the white footer below */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none z-[1]" />

      <div className="w-full max-w-[1200px] mx-auto relative z-10 flex flex-col items-center gap-12">
        
        {/* Centered Heading */}
        <div className="text-center space-y-4 max-w-2xl relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0284c7]"
          >
            {isRTL ? 'تواصل معنا' : 'Contact Us'}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 leading-tight tracking-tight"
          >
            {isRTL ? "دعنا نبني فكرتك" : "Let's build your idea"}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-650 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto font-light"
          >
            {isRTL 
              ? "أرسل متطلباتك وسيقوم خبراؤنا التقنيون بالتواصل معك لرسم خارطة الطريق البرمجية لمشروعك." 
              : "Send your brief and our technical experts will reach out to blueprint your software roadmap."}
          </motion.p>
        </div>

        {/* Centered Form Wrapper */}
        <div className="relative w-full max-w-2xl z-10">
          {/* The light glassmorphic card itself */}
          <div className="bg-white/20 border border-white/50 rounded-[28px] p-6 sm:p-8 md:p-10 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden backdrop-blur-md">
            {/* Inset highlight layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <ContactForm isRTL={isRTL} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
