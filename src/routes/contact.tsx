import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { Mail, MapPin, Phone, Upload, CheckCircle2 } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Request a Quote | Mannock Granite" },
      {
        name: "description",
        content:
          "Request a quote for granite, quartz, marble or porcelain worktops. Tell us about your project, upload plans and we'll be in touch within one working day.",
      },
      { property: "og:title", content: "Request a Quote — Mannock Granite" },
      {
        property: "og:description",
        content: "Tell us about your project. We'll reply within one working day.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional(),
  postcode: z.string().trim().min(2, "Postcode helps with service area").max(20),
  projectType: z.string().min(1),
  material: z.string().min(1),
  budget: z.string().min(1),
  notes: z.string().trim().max(2000).optional(),
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojodqbj";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formspreeError, setFormspreeError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormspreeError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        next[issue.path[0] as string] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const body = await response.json().catch(() => ({}));
        setFormspreeError(
          body.error || "Something went wrong sending your enquiry. Please try again.",
        );
      }
    } catch {
      setFormspreeError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Begin the conversation."
        subtitle="Tell us about your project. We'll respond within one working day with a route forward — a studio appointment, a site visit, or an initial quote range."
      />

      <section className="px-6 lg:px-12 pb-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <Reveal>
            <div className="glass-strong p-8 md:p-12">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-20 text-center"
                >
                  <CheckCircle2 className="mx-auto h-12 w-12 text-gold" strokeWidth={1.25} />
                  <h2 className="mt-6 font-display text-4xl">Thank you.</h2>
                  <p className="mt-4 text-foreground/70 max-w-md mx-auto">
                    Your enquiry is with the studio. Anna or David will be in touch within one
                    working day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} method="POST" className="space-y-8" noValidate>
                  <Group label="Project Type">
                    <RadioRow
                      name="projectType"
                      options={["Kitchen", "Bathroom", "Commercial", "Bespoke"]}
                      disabled={isSubmitting}
                    />
                  </Group>

                  <Group label="Material Interest">
                    <RadioRow
                      name="material"
                      options={["Granite", "Quartz", "Marble", "Porcelain", "Undecided"]}
                      disabled={isSubmitting}
                    />
                  </Group>

                  <Group label="Budget Range">
                    <RadioRow
                      name="budget"
                      options={["Under £5k", "£5–10k", "£10–20k", "£20–30k", "£30k+"]}
                      disabled={isSubmitting}
                    />
                  </Group>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field
                      name="name"
                      label="Your Name"
                      error={errors.name}
                      required
                      disabled={isSubmitting}
                    />
                    <Field
                      name="email"
                      label="Email"
                      type="email"
                      error={errors.email}
                      required
                      disabled={isSubmitting}
                    />
                    <Field
                      name="phone"
                      label="Phone (optional)"
                      type="tel"
                      disabled={isSubmitting}
                    />
                    <Field
                      name="postcode"
                      label="Postcode"
                      error={errors.postcode}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="eyebrow mb-3 block">Project Notes</label>
                    <textarea
                      name="notes"
                      rows={5}
                      maxLength={2000}
                      disabled={isSubmitting}
                      placeholder="Tell us about the space, your timeline, your designer or any references you've gathered."
                      className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors resize-none disabled:opacity-40"
                    />
                  </div>

                  {formspreeError && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-destructive bg-destructive/10 border border-destructive/20 px-4 py-3"
                    >
                      {formspreeError}
                    </motion.div>
                  )}

                  <div className="border border-dashed border-white/15 p-6 flex items-center gap-4 text-sm text-foreground/65">
                    <Upload className="h-5 w-5 text-gold shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Upload plans (optional)</div>
                      <div className="text-xs mt-1">
                        PDF, DWG or images — share via email after submitting, or attach below.
                      </div>
                    </div>
                    <input
                      type="file"
                      name="plans"
                      disabled={isSubmitting}
                      className="ml-auto text-xs text-foreground/60 max-w-[180px] disabled:opacity-40"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-primary-foreground px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold-soft transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending…" : "Submit Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-8">
              <div>
                <Eyebrow>Studio</Eyebrow>
                <h2 className="mt-4 font-display text-3xl">Visit the workshop.</h2>
                <p className="mt-3 text-foreground/70 text-sm leading-relaxed">
                  By appointment, Monday to Saturday. Walk the slab yard, see live fabrication and
                  pair materials with samples in our viewing gallery.
                </p>
              </div>

              <ul className="space-y-5 text-sm text-foreground/80">
                <li className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-0.5 text-gold shrink-0" />
                  <span>
                    Unit 4, Stone Yard
                    <br />
                    United Kingdom
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-gold shrink-0" />
                  <a href="tel:+441234567890" className="hover:text-gold transition-colors">
                    +44 1234 567 890
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-gold shrink-0" />
                  <a
                    href="mailto:studio@mannockgranite.co.uk"
                    className="hover:text-gold transition-colors"
                  >
                    studio@mannockgranite.co.uk
                  </a>
                </li>
              </ul>

              <div className="overflow-hidden aspect-[4/3] glass">
                <iframe
                  title="Studio location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.2,51.45,0.0,51.55&layer=mapnik"
                  className="w-full h-full grayscale-[80%] contrast-110 opacity-90"
                  loading="lazy"
                />
              </div>

              <div>
                <Eyebrow>Service Area</Eyebrow>
                <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
                  London and the Home Counties for residential commissions. UK-wide for commercial
                  and bespoke architectural work, with phased install programmes available.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="eyebrow mb-3 block">{label}</label>
      {children}
    </div>
  );
}

function RadioRow({
  name,
  options,
  disabled,
}: {
  name: string;
  options: string[];
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o}
          className={`cursor-pointer ${disabled ? "opacity-40 pointer-events-none" : ""}`}
        >
          <input
            type="radio"
            name={name}
            value={o}
            disabled={disabled}
            className="peer sr-only"
            defaultChecked={options[0] === o}
          />
          <span className="block px-4 py-2.5 text-xs tracking-[0.2em] uppercase border border-white/15 text-foreground/70 transition-all peer-checked:border-gold peer-checked:text-gold peer-checked:bg-gold/5 hover:border-white/40">
            {o}
          </span>
        </label>
      ))}
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
  required,
  disabled,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow mb-3 block">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        maxLength={255}
        className="w-full bg-transparent border-b border-white/15 px-0 py-2.5 text-sm focus:border-gold focus:outline-none transition-colors disabled:opacity-40"
      />
      {error && <div className="mt-2 text-xs text-destructive">{error}</div>}
    </div>
  );
}
