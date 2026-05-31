"use client";

import { FormEvent, useState } from "react";

const maxFileSize = 3 * 1024 * 1024;

export default function TrialForm() {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const image = data.get("productImage");

    if (!(image instanceof File) || !image.name) {
      setStatus("Please attach one product image.");
      setStatusType("error");
      return;
    }

    if (!image.type.startsWith("image/")) {
      setStatus("Please attach an image file.");
      setStatusType("error");
      return;
    }

    if (image.size > maxFileSize) {
      setStatus("Please attach an image smaller than 3 MB.");
      setStatusType("error");
      return;
    }

    setIsSending(true);
    setStatus("");
    setStatusType("");

    try {
      const response = await fetch("/api/free-trial", { method: "POST", body: data });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Unable to send your request.");

      form.reset();
      setStatus("Thank you. Your free trial request has been sent successfully.");
      setStatusType("success");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to send your request. Please try again.");
      setStatusType("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="trial-form" onSubmit={handleSubmit}>
      <label>Company name<input type="text" name="company" placeholder="Brand or company name" required /></label>
      <label>Contact name<input type="text" name="contact" placeholder="Your name" required /></label>
      <label>Email / Line / WhatsApp<input type="text" name="contactInfo" placeholder="Best way to contact you" required /></label>
      <label>Product image<input type="file" name="productImage" accept="image/*" required /></label>
      <label className="full-field">Desired mood & tone<textarea name="brief" placeholder="Tell us the visual direction you want to explore." required /></label>
      <label className="hp-field" aria-hidden="true">Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      <button type="submit" disabled={isSending}>{isSending ? "Sending..." : "Request Free Trial"}</button>
      {status ? <p className={`form-note is-${statusType}`} aria-live="polite">{status}</p> : null}
    </form>
  );
}
