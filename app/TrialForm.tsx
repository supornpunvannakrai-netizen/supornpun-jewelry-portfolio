"use client";

import { FormEvent, useState } from "react";

const recipient = "supornpunvannakrai@gmail.com";

export default function TrialForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const image = data.get("productImage");
    const fileName = image instanceof File && image.name ? image.name : "Not selected";
    const body = [
      "Free Trial Request",
      "",
      `Company name: ${data.get("company") || ""}`,
      `Contact name: ${data.get("contact") || ""}`,
      `Email / Line / WhatsApp: ${data.get("contactInfo") || ""}`,
      `Product image file: ${fileName}`,
      "",
      "Desired mood & tone:",
      `${data.get("brief") || ""}`,
      "",
      "Note: Please attach the product image file before sending this email.",
    ].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent("Free Trial Request")}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app will open with the request details. Please attach the product image before sending.");
  }

  return (
    <form className="trial-form" onSubmit={handleSubmit}>
      <label>Company name<input type="text" name="company" placeholder="Brand or company name" /></label>
      <label>Contact name<input type="text" name="contact" placeholder="Your name" /></label>
      <label>Email / Line / WhatsApp<input type="text" name="contactInfo" placeholder="Best way to contact you" /></label>
      <label>Product image<input type="file" name="productImage" accept="image/*" /></label>
      <label className="full-field">Desired mood & tone<textarea name="brief" placeholder="Tell us the visual direction you want to explore." /></label>
      <button type="submit">Request Free Trial</button>
      {status ? <p className="form-note">{status}</p> : null}
    </form>
  );
}
