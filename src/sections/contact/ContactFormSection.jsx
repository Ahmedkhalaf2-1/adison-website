import { useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import GlassSurface from "../../components/glass/GlassSurface";
import GlassInput from "../../components/glass/GlassInput";
import GlassTextarea from "../../components/glass/GlassTextarea";
import GlassSelect from "../../components/glass/GlassSelect";
import { useContent } from "../../hooks/useContent";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Safe EmailJS initialization from Vite environment variables
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
if (emailJsPublicKey) {
  emailjs.init({
    publicKey: emailJsPublicKey,
    blockHeadless: true,
    limitRate: {
      throttle: 10000, // Throttles sending to once every 10 seconds to prevent spam
    },
  });
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18, filter: "blur(7px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] },
});

function Field({ label, children, span2 = false, error = "" }) {
  return (
    <div className={span2 ? "sm:col-span-2" : ""}>
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-white/90">
        {label}
      </p>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-400 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}

function StepDot({ active }) {
  return (
    <span
      className={`inline-block h-1.5 w-1.5 rounded-full transition-all duration-300 ${active ? "bg-white/70 scale-125" : "bg-white/20"
        }`}
    />
  );
}

export default function ContactFormSection() {
  const { form, closing, tNumber } = useContent("contact");
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Track progress based on required fields only for better UX
  const requiredFields = ["name", "email", "inquiry", "message"];
  const filled = requiredFields.filter((key) => formData[key]?.trim()).length;
  const total = requiredFields.length;

  if (!form) return null;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear errors when the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (errors.general) {
      setErrors((prev) => ({ ...prev, general: "" }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setErrors({});

    // Trim all form values for sanitization
    const trimmedFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      company: formData.company.trim(),
      inquiry: formData.inquiry.trim(),
      message: formData.message.trim(),
    };

    // Client-side validation checks
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedFormData.name) {
      validationErrors.name = isAr ? "الاسم مطلوب." : "Name is required.";
    }
    if (!trimmedFormData.email) {
      validationErrors.email = isAr ? "البريد الإلكتروني مطلوب." : "Email is required.";
    } else if (!emailRegex.test(trimmedFormData.email)) {
      validationErrors.email = isAr ? "يرجى إدخال بريد إلكتروني صالح." : "Please enter a valid email address.";
    }
    if (!trimmedFormData.inquiry) {
      validationErrors.inquiry = isAr ? "نوع الاستفسار مطلوب." : "Inquiry type is required.";
    }
    if (!trimmedFormData.message) {
      validationErrors.message = isAr ? "الرسالة مطلوبة." : "Message is required.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: trimmedFormData.name,
          email: trimmedFormData.email,
          phone: trimmedFormData.phone,
          company: trimmedFormData.company,
          inquiry: trimmedFormData.inquiry,
          message: trimmedFormData.message,
        },
        publicKey
      )
      .then(() => {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          inquiry: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EMAILJS ERROR:", error);
        setErrors({
          general: isAr
            ? "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقاً."
            : "Failed to send message. Please try again later.",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <section className="section-pad">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...fadeUp(0)}>
            <GlassSurface className="relative h-full overflow-hidden rounded-[32px] px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="relative">
                <SectionHeader
                  eyebrow={form.eyebrow}
                  title={form.title}
                  description={form.description}
                  align="left"
                />

                <div className="mt-10 rounded-[20px] border border-white/[0.09] bg-white/[0.04] p-5 sm:p-6">
                  <div className="mb-4 flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                      {form.availableNow}
                    </p>
                  </div>

                  <p className="text-sm font-semibold leading-snug text-white/80 sm:text-base">
                    {closing.title}
                  </p>

                  <p className="mt-3 text-sm leading-[1.8] text-white/80 sm:text-[0.9375rem]">
                    {closing.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3">
                  <div className="flex shrink-0 items-center justify-center">
                    <svg className="h-5 w-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white/90">
                    {form.responseTime}{" "}
                    <span className="font-semibold text-white/90">
                      {form.responseHours}
                    </span>
                  </p>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-4">
                  <a
                    href="https://wa.me/16478094804"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-[#25D366] transition-all duration-300 hover:scale-[0.98] hover:bg-white/[0.07] hover:text-white hover:border-[#25D366]/40 shadow-sm"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                      {form.chatOnWhatsApp}
                    </span>
                  </a>
                </div>
              </div>
            </GlassSurface>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <form onSubmit={handleSubmit} noValidate>
              <GlassSurface className="relative overflow-hidden rounded-[32px] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="mb-8 flex items-center gap-4">
                  <div className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
                    <motion.div
                      className="absolute left-0 top-0 h-full rounded-full bg-white/30"
                      animate={{ width: `${(filled / total) * 100}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>

                  <div className="flex items-center gap-1.5">
                    {Object.keys(formData).map((_, i) => (
                      <StepDot key={i} active={i < filled} />
                    ))}
                  </div>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center gap-5 py-16 text-center"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
                      <svg
                        className="h-6 w-6 text-white/90"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-white">
                        {form.successTitle}
                      </p>
                      <p className="mt-2 text-sm text-white/80">
                        {form.successDescription}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    {/* General Error Message Block */}
                    {errors.general && (
                      <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
                        {errors.general}
                      </div>
                    )}

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label={form.labels.name} span2 error={errors.name}>
                        <GlassInput
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={form.placeholders.name}
                        />
                      </Field>

                      <Field label={form.labels.email} error={errors.email}>
                        <GlassInput
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={form.placeholders.email}
                        />
                      </Field>

                      <Field label={form.labels.phone}>
                        <GlassInput
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={form.placeholders.phone}
                        />
                      </Field>

                      <Field label={form.labels.company}>
                        <GlassInput
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={form.placeholders.company}
                        />
                      </Field>

                      <Field label={form.labels.inquiry} error={errors.inquiry}>
                        <GlassSelect
                          name="inquiry"
                          value={formData.inquiry}
                          onChange={handleChange}
                        >
                          <option
                            value=""
                            disabled
                            className="bg-[#0a0d18] text-white/80"
                          >
                            {form.placeholders.inquiry}
                          </option>
                          {form.inquiryOptions.map((option) => (
                            <option
                              key={option}
                              value={option}
                              className="bg-[#0a0d18] text-white"
                            >
                              {option}
                            </option>
                          ))}
                        </GlassSelect>
                      </Field>

                      <Field label={form.labels.message} span2 error={errors.message}>
                        <GlassTextarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={form.placeholders.message}
                          maxLength={3000}
                          rows={4}
                        />

                        <p className="text-[11px] text-white/90 mt-2 text-right">
                          {tNumber(formData.message.length)} / {tNumber(3000)}
                        </p>
                      </Field>
                    </div>

                    <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                      <p className="max-w-xs text-sm leading-[1.8] text-white/90">
                        {form.sharePrompt}
                      </p>

                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {loading ? form.sending : form.submitLabel}
                      </button>
                    </div>
                  </>
                )}
              </GlassSurface>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
