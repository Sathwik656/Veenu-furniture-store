import { FormEvent, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { CheckCircle2 } from 'lucide-react';
import { SITE } from '../data';

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [field]: e.target.value });

  const validate = (): Errors => {
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = 'Please enter your name.';
    if (!form.email.trim()) errs.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.';
    if (!form.message.trim()) errs.message = 'Please enter a message.';
    return errs;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const lines = [
      `Hello Veenu Furnitures! New enquiry from the website.`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : '',
      ``,
      form.message,
    ].filter(Boolean);

    window.open(SITE.whatsapp(lines.join('\n')), '_blank', 'noopener');
    setSubmitted(true);
  };

  const inputClass = (hasError?: string) =>
    `w-full border bg-white px-4 py-3.5 text-sm text-brand-900 placeholder:text-brand-800/35 transition-colors focus:outline-none ${
      hasError ? 'border-red-400 focus:border-red-500' : 'border-brand-200 focus:border-brand-500'
    }`;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {submitted && (
        <div
          role="status"
          className="flex items-start gap-3 border border-green-200 bg-green-50 p-4 text-sm text-green-900"
        >
          <CheckCircle2 className="mt-0.5 w-5 h-5 shrink-0" />
          <p>
            Thank you! We&rsquo;ve opened WhatsApp with your enquiry ready to send. If it didn&rsquo;t open,
            call us at{' '}
            <a href={SITE.phoneHref} className="underline font-medium">
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-brand-800/70">
            Name *
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={update('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'cf-name-error' : undefined}
            className={inputClass(errors.name)}
            placeholder="Your full name"
          />
          {errors.name && <p id="cf-name-error" className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="cf-phone" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-brand-800/70">
            Phone
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update('phone')}
            className={inputClass()}
            placeholder="+91"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-email" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-brand-800/70">
          Email *
        </label>
        <input
          id="cf-email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={update('email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'cf-email-error' : undefined}
          className={inputClass(errors.email)}
          placeholder="you@example.com"
        />
        {errors.email && <p id="cf-email-error" className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-brand-800/70">
          Message *
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={form.message}
          onChange={update('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
          className={`${inputClass(errors.message)} resize-none`}
          placeholder="How can we help you?"
        />
        {errors.message && <p id="cf-message-error" className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        <FaWhatsapp className="w-4 h-4" />
        Send via WhatsApp
      </button>
      <p className="text-xs leading-relaxed text-brand-800/50">
        Your enquiry opens in WhatsApp so our team can reply instantly. Prefer email? Write to us at{' '}
        <a href={`mailto:${SITE.email}`} className="underline">
          {SITE.email}
        </a>
        .
      </p>
    </form>
  );
}
