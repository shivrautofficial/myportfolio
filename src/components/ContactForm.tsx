import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowUpRight, Copy } from 'lucide-react';
import { profile } from '../data/portfolio';

/** Opens the visitor's email app with a drafted message. Nothing is sent or stored by the site. */
export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const copyMessage = async () => {
    const body = `Hi ${profile.name},\n\n${message}\n\nFrom: ${name}${email ? ` (${email})` : ''}`;
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt('Copy your message:', body);
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          <span>Your name</span>
          <input value={name} onChange={(event) => setName(event.target.value)} name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Your email</span>
          <input value={email} onChange={(event) => setEmail(event.target.value)} name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} name="message" rows={4} required />
      </label>
      <p className="form-notice">Submitting opens your email application with this message drafted. It is not sent or stored by this website.</p>
      <div className="form-actions">
        <button className="button button-primary" type="submit">Draft email <ArrowUpRight size={17} aria-hidden="true" /></button>
        <button className="button button-quiet" type="button" onClick={copyMessage}>
          <Copy size={15} aria-hidden="true" /> {copied ? 'Copied message' : 'Copy message'}
        </button>
      </div>
      <p className="sr-only" aria-live="polite">{copied ? 'Message copied to clipboard' : ''}</p>
    </form>
  );
}
