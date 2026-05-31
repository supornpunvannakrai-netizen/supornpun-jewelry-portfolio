import { NextResponse } from "next/server";

export const runtime = "nodejs";

const recipient = "supornpunvannakrai@gmail.com";
const maxImageSize = 3 * 1024 * 1024;

function text(value: FormDataEntryValue | null) {
  return String(value ?? "").trim();
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "The email service is not configured yet. Please contact us directly by email." },
        { status: 503 },
      );
    }

    const data = await request.formData();

    // Bots often complete this hidden field. Quietly accept the request without sending it.
    if (text(data.get("website"))) {
      return NextResponse.json({ ok: true });
    }

    const company = text(data.get("company"));
    const contact = text(data.get("contact"));
    const contactInfo = text(data.get("contactInfo"));
    const brief = text(data.get("brief"));
    const image = data.get("productImage");

    if (!company || !contact || !contactInfo || !brief || !(image instanceof File) || !image.size) {
      return NextResponse.json({ error: "Please complete every field and attach one product image." }, { status: 400 });
    }

    if (!image.type.startsWith("image/")) {
      return NextResponse.json({ error: "Please attach an image file." }, { status: 400 });
    }

    if (image.size > maxImageSize) {
      return NextResponse.json({ error: "Please attach an image smaller than 3 MB." }, { status: 400 });
    }

    const imageContent = Buffer.from(await image.arrayBuffer()).toString("base64");
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Supornpun Studio <trial@supornpunstudio.com>",
        to: [recipient],
        subject: `Free Trial Request - ${company}`,
        html: `
          <h2>Free Trial Request</h2>
          <p><strong>Company name:</strong> ${escapeHtml(company)}</p>
          <p><strong>Contact name:</strong> ${escapeHtml(contact)}</p>
          <p><strong>Email / Line / WhatsApp:</strong> ${escapeHtml(contactInfo)}</p>
          <p><strong>Desired mood &amp; tone:</strong></p>
          <p>${escapeHtml(brief).replace(/\n/g, "<br />")}</p>
        `,
        attachments: [{ filename: image.name || "product-image", content: imageContent }],
      }),
    });

    if (!emailResponse.ok) {
      console.error("Resend email error:", await emailResponse.text());
      return NextResponse.json(
        { error: "Unable to send your request right now. Please try again or contact us directly by email." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Free trial request error:", error);
    return NextResponse.json(
      { error: "Unable to send your request right now. Please try again or contact us directly by email." },
      { status: 500 },
    );
  }
}
