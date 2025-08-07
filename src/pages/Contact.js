import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // hidden field
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Invalid email address.';
    }
    if (!form.subject.trim()) errs.subject = 'Subject is required.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((errs) => ({ ...errs, [e.target.name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple honeypot check
    if (form.honeypot) {
      // silently fail / treat as spam
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Compose mailto link
    const to = 'kodekampng@gmail.com';
    const subject = encodeURIComponent(form.subject);
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      '',
      'Message:',
      form.message,
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    // Open user's email client
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <div className="container py-5 mt-5" style={{ maxWidth: 800 }}>
      <h1 className="text-center text-primary mb-4"></h1>
      <p className="lead text-center text-muted">
        Have questions, want to collaborate, or support our work? Send us a message and we’ll get back to you.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot - hidden from users */}
        <div style={{ display: 'none' }}>
          <label>
            Leave this field empty:
            <input
              name="honeypot"
              value={form.honeypot}
              onChange={handleChange}
              autoComplete="off"
            />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
            value={form.subject}
            onChange={handleChange}
            placeholder="What is this about?"
          />
          {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="form-label">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here..."
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg">
            Send Message
          </button>
        </div>

        {submitted && (
          <div className="alert alert-info text-center mt-4">
            Your email client should have opened. If it didn't, please copy and send your message manually to{' '}
            <a href="mailto:kodekampng@gmail.com">kodekampng@gmail.com</a>.
          </div>
        )}
      </form>
    </div>
  );
}
