import { useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import GlassSurface from "../../components/glass/GlassSurface";
import GlassInput from "../../components/glass/GlassInput";
import GlassTextarea from "../../components/glass/GlassTextarea";
import GlassSelect from "../../components/glass/GlassSelect";
import { contactContent } from "../../content/contactContent";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18, filter: "blur(7px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] },
});

function Field({ label, children, span2 = false }) {
  return (
    <div className={span2 ? "sm:col-span-2" : ""}>
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-white/90">
        {label}
      </p>
      {children}
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
  const { form, closing } = contactContent;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const filled = Object.values(formData).filter(Boolean).length;
  const total = Object.keys(formData).length;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMIT FIRED");

    if (loading) return;
    setLoading(true);

    emailjs
      .send(
        "service_p9f2itf",
        "template_95f6nd7",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          inquiry: formData.inquiry,
          message: formData.message,
        },
        "zc2KkQfTFzx1l5x0D"
      )
      .then((result) => {
        console.log("EMAILJS SUCCESS:", result);
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiry: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EMAILJS ERROR:", error);
        alert("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <section className="section-pad">
      <Container>
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
                      Available Now
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
                    Typical response within{" "}
                    <span className="font-semibold text-white/90">
                      24 hours
                    </span>
                  </p>
                </div>
              </div>
            </GlassSurface>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <form onSubmit={handleSubmit}>
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
                        Message received
                      </p>
                      <p className="mt-2 text-sm text-white/80">
                        We'll be in touch within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full Name" span2>
                        <GlassInput
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={form.placeholders.name}
                          required
                        />
                      </Field>

                      <Field label="Email Address">
                        <GlassInput
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={form.placeholders.email}
                          required
                        />
                      </Field>

                      <Field label="Phone Number">
                        <GlassInput
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={form.placeholders.phone}
                        />
                      </Field>

                      <Field label="Inquiry Type" span2>
                        <GlassSelect
                          name="inquiry"
                          value={formData.inquiry}
                          onChange={handleChange}
                          required
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

                      <Field label="Message" span2>
                        <GlassTextarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={form.placeholders.message}
                          maxLength={3000}
                          required
                        />

                        <p className="text-[11px] text-white/90 mt-2 text-right">
                          {formData.message.length} / 3000
                        </p>
                      </Field>
                    </div>

                    <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                      <p className="max-w-xs text-sm leading-[1.8] text-white/90">
                        Share your idea, your project, or the kind of support
                        you are looking for.
                      </p>

                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {loading ? "Sending..." : form.submitLabel}
                      </button>
                    </div>
                  </>
                )}
              </GlassSurface>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
