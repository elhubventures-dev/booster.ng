import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Shield, ArrowUpRight } from 'lucide-react';
import { BOOSTER_CONFIG } from '../data/boosterContent';

/**
 * PRESERVED COMPONENT FOR FUTURE PHASES:
 * Full interactive contact form with client-side validation, error handling,
 * and future backend API integration contract (POST /api/v1/inquiries).
 */
export interface ContactFormFutureProps {
  selectedPlanCode?: string;
  onClearSelectedPlan?: () => void;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacyAccepted: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
  privacyAccepted?: string;
}

export const ContactFormFuture: React.FC<ContactFormFutureProps> = ({
  selectedPlanCode,
  onClearSelectedPlan,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    subject: selectedPlanCode ? `Inquiry regarding Booster Land Banking Plan ${selectedPlanCode}` : '',
    message: '',
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionCompleted, setSubmissionCompleted] = useState(false);

  React.useEffect(() => {
    if (selectedPlanCode) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry regarding Booster Land Banking Plan ${selectedPlanCode}`,
        message: prev.message || `Hello Booster Team, I am interested in reviewing official documentation and term disclosures for Plan ${selectedPlanCode}. Please contact me with further details.`,
      }));
    }
  }, [selectedPlanCode]);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Full name must be at least 3 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g., name@domain.com).';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter an inquiry subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide your message or inquiry details.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters of detail.';
    }

    if (!formData.privacyAccepted) {
      errs.privacyAccepted = 'You must acknowledge the privacy notice to proceed.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionCompleted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      privacyAccepted: false,
    });
    setErrors({});
    setSubmissionCompleted(false);
    if (onClearSelectedPlan) onClearSelectedPlan();
  };

  const mailtoLink = `mailto:${BOOSTER_CONFIG.contactEmail}?subject=${encodeURIComponent(
    formData.subject || 'Booster Land Banking Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="rounded-3xl bg-[#032111]/95 border border-[#087A32]/60 p-6 sm:p-10 shadow-2xl">
      {submissionCompleted ? (
        <div className="py-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#087A32]/30 border border-[#24B84A]/40 text-[#24B84A] flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="font-display font-black italic uppercase text-2xl text-white">
              Inquiry Validated Successfully
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Your inquiry details have been
              formatted and validated.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={mailtoLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase font-display italic text-[#032111] bg-gradient-to-r from-[#C5A059] to-[#DFBF7C] hover:brightness-110 rounded-xl shadow-md transition-all"
            >
              <span>Open In Your Email Client</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="border-b border-white/10 pb-4 mb-2">
            <h3 className="font-display font-bold text-xl uppercase italic text-white">
              Submit an Investment Inquiry
            </h3>
          </div>

          <div>
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
              Full Name <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Olawale Adeyemi"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder-neutral-500"
            />
            {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                Email Address <span className="text-amber-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="investor@example.ng"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder-neutral-500"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+234 ..."
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder-neutral-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
              Subject <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder-neutral-500"
            />
            {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
              Message <span className="text-amber-400">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder-neutral-500"
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.privacyAccepted}
                onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                className="mt-1 rounded bg-black/40 border-white/20 text-[#087A32]"
              />
              <span className="text-xs text-neutral-300">
                I acknowledge that Booster is sponsored by Beyond Borders Real Estate Limited.
              </span>
            </label>
            {errors.privacyAccepted && <p className="mt-1 text-xs text-red-400">{errors.privacyAccepted}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-xl font-display font-black uppercase italic text-sm text-[#032111] bg-gradient-to-r from-[#C5A059] to-[#DFBF7C] hover:brightness-110 shadow-lg flex items-center justify-center gap-2"
          >
            {isSubmitting ? <span>Validating...</span> : <span>Submit Inquiry</span>}
          </button>
        </form>
      )}
    </div>
  );
};
