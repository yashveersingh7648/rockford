
import { useState } from "react";

const REQUIREMENTS = [
  "Product Branding",
  "Personal Branding",
  "Content Creation",
  "Advisory & Consulting",
  "GTM Strategy",
];

// Add your Formspree/Getform endpoint here.
// Leave empty to open the user's email application.
const FORM_ENDPOINT = "";
const TO_EMAIL = "consult@roakfield.com";

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  website: "",
  requirement: "",
};

// Fixed: use a normal JavaScript string instead of a multiline template literal.
const inputClass =
  "w-full rounded-xl border border-[#D9DEE7] bg-white px-4 py-3.5 text-[15px] text-[#01295C] outline-none transition-all duration-300 placeholder:text-[#A7A9AC] hover:border-[#A7A9AC] focus:border-[#01295C] focus:ring-2 focus:ring-[#01295C]/10";

const labelClass =
  "mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#01295C]";

export default function LetsConnectForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setStatus("idle");

    const name = form.name.trim();
    const phone = form.phone.trim();
    const email = form.email.trim();
    const website = form.website.trim();

    // Required field validation
    if (!name || !email || !form.requirement) {
      setError("Please fill in all required fields.");
      return;
    }

    // Contact number validation
    const digits = phone.replace(/\D/g, "");

    if (digits.length < 10 || digits.length > 15) {
      setError(
        "Please enter a valid contact number (10 to 15 digits)."
      );
      return;
    }

    const payload = {
      Name: name,
      "Contact Number": phone,
      "Email ID": email,
      Website: website || "Not provided",
      Requirement: form.requirement,
    };

    // Fallback: open the user's email application
    if (!FORM_ENDPOINT) {
      const body = Object.entries(payload)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");

      const mailto = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
        "New enquiry from website"
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailto;
      return;
    }

    // Submit to configured form endpoint
    try {
      setStatus("sending");

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form.");
      }

      setStatus("success");
      setForm(EMPTY);
    } catch (err) {
      console.error("Contact form submission error:", err);

      setStatus("error");
      setError(
        "Something went wrong. Please try again or email us directly."
      );
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-white px-5 py-16 text-[#01295C] sm:px-8 sm:py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left content */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#D9DEE7] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#01295C]">
              Let's talk business
            </span>

            <h2 className="mt-6 text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Let’s
              <br />
              connect<span className="text-[#EB2226]">.</span>
            </h2>

            <p className="mt-6 max-w-md text-[16px] leading-7 text-[#6B7280]">
              Tell us what you need and our team will get back to you.
              Let’s build something meaningful together.
            </p>
          </div>

          <div className="mt-10 border-t border-[#E5E7EB] pt-5 lg:mt-16">
            <p className="text-xs uppercase tracking-[0.16em] text-[#A7A9AC]">
              Have a project in mind?
            </p>

            <a
              href={`mailto:${TO_EMAIL}`}
              className="mt-2 inline-block text-sm text-[#01295C] transition-colors duration-300 hover:text-[#EB2226]"
            >
              {TO_EMAIL}
            </a>
          </div>
        </div>

        {/* Right form card */}
        <div className="rounded-2xl border border-[#E0E5EC] bg-white p-5 shadow-[0_12px_45px_rgba(1,41,92,0.06)] sm:p-8 lg:p-10">
          <div className="mb-8 border-b border-[#E5E7EB] pb-5">
            <h3 className="text-xl font-medium tracking-tight">
              Tell us about your project
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#7A8493]">
              Fill in your details below and we’ll be in touch.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6">
            {/* Name */}
            <div>
              <label htmlFor="lc-name" className={labelClass}>
                Name <span className="text-[#EB2226]">*</span>
              </label>

              <input
                id="lc-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                maxLength={100}
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={inputClass}
              />
            </div>

            {/* Contact number and email */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="lc-phone" className={labelClass}>
                  Contact Number{" "}
                  <span className="text-[#EB2226]">*</span>
                </label>

                <input
                  id="lc-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={20}
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="lc-email" className={labelClass}>
                  Email ID <span className="text-[#EB2226]">*</span>
                </label>

                <input
                  id="lc-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  maxLength={254}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Optional website */}
            <div>
              <label htmlFor="lc-website" className={labelClass}>
                Website{" "}
                <span className="normal-case tracking-normal text-[#A7A9AC]">
                  (optional)
                </span>
              </label>

              <input
                id="lc-website"
                name="website"
                type="url"
                autoComplete="url"
                maxLength={2048}
                value={form.website}
                onChange={handleChange}
                placeholder="https://yourwebsite.com"
                className={inputClass}
              />
            </div>

            {/* Requirement dropdown */}
            <div>
              <label htmlFor="lc-requirement" className={labelClass}>
                Requirement <span className="text-[#EB2226]">*</span>
              </label>

              <select
                id="lc-requirement"
                name="requirement"
                required
                value={form.requirement}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" disabled>
                  Select your requirement
                </option>

                {REQUIREMENTS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Error message */}
            {error && (
              <p
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-[#EB2226]"
              >
                {error}
              </p>
            )}

            {/* Success message */}
            {status === "success" && (
              <p
                role="status"
                className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm leading-6 text-green-800"
              >
                Thank you! Your enquiry has been submitted successfully.
                We will contact you soon.
              </p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#01295C] px-6 py-4 text-xs font-medium uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#EB2226] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? "Sending..." : "Submit enquiry"}

              {status !== "sending" && (
                <span aria-hidden="true">↗</span>
              )}
            </button>

            <p className="text-xs leading-5 text-[#8B95A3]">
              By submitting this form, you agree to be contacted regarding
              your enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
