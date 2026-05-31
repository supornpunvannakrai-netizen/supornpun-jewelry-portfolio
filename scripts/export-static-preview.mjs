import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const output = new URL("../outputs/Supornpun Wannakrai Portfolio.html", import.meta.url);
const css = (await readFile(new URL("../app/globals.css", import.meta.url), "utf8"))
  .replace('@import "tailwindcss";', "");

await mkdir(dirname(fileURLToPath(new URL("../outputs/media/hero-motion.mp4", import.meta.url))), { recursive: true });
await copyFile(new URL("../public/media/hero-motion.mp4", import.meta.url), new URL("../outputs/media/hero-motion.mp4", import.meta.url));

const work = [
  ["portfolio-bracelet.png", "Gemstone Bracelet", "Product Retouching"],
  ["diamond-model-campaign.jpg", "Diamond Model Visual", "Campaign Visual"],
  ["portfolio-ruby-ring.jpg", "Ruby Ring Packshot", "E-commerce Visual"],
  ["portfolio-earrings-0323.jpg", "Diamond Earrings", "Product Retouching"],
  ["portfolio-gold-ring.jpg", "Gold Ring", "Packshot Retouching"],
  ["portfolio-emerald-earrings.jpg", "Emerald Earrings", "Catalog Image"],
  ["white-gold-sapphire-ring.jpg", "White Gold Sapphire Ring", "Packshot Retouching"],
  ["portfolio-ring-3062.jpg", "Diamond Ring", "Product Visual"],
  ["portfolio-earrings-pink.jpg", "Pink Gem Earrings", "Jewelry Photography"],
  ["portfolio-ring-em-2.jpg", "Emerald Ring", "Product Retouching"],
  ["portfolio-ring-em-3.jpg", "Emerald Diamond Ring", "E-commerce Visual"],
  ["portfolio-before-after-earrings.jpg", "Earring Retouch Study", "Before / After"],
];

const services = [
  ["01", "Jewelry Retouching & E-commerce Visuals", "1245645.jpg", "image", "contain", "High-end jewelry image enhancement for e-commerce, catalogs, and digital marketing.", ["White background packshots", "Diamond & gemstone enhancement", "Metal polishing", "Dust, scratch, shadow & reflection refinement", "Clipping path & background cleanup", "E-commerce ready image delivery"], "Jewelry brands / Online stores / Marketplaces / Catalog production"],
  ["02", "AI Campaign Visuals", "diamond-model-campaign.jpg", "image", "cover", "Luxury AI-generated advertising visuals designed to elevate product presentation and brand perception.", ["Product lifestyle visuals", "Marble, stone & luxury packaging scenes", "Editorial and seasonal displays", "Jewelry-on-model campaign concepts", "Luxury brand advertisements", "Social media campaign assets"], "Product launches / Advertising / Social media / Website banners / Lookbooks"],
  ["03", "AI Video Production", "0531.mp4", "video", "cover", "Transforming static visuals into engaging cinematic content using advanced AI video production.", ["Product showcase videos", "Jewelry motion videos", "Social media reels", "Cinematic product presentations", "AI fashion & lifestyle videos", "Advertising motion content"], "Instagram Reels / Facebook Ads / TikTok / Website hero videos / Digital campaigns"],
];

const creativePackages = [
  ["Package A", "AI Campaign Visuals", "Luxury AI-generated advertising images for social media, websites, and marketing campaigns.", ["Send your product image", "We create AI advertising visuals", "Receive campaign-ready still images"], ["AI Product Visuals", "AI Model Campaigns", "Social Media Assets"]],
  ["Package B", "AI Campaign Visuals + AI Video", "A complete creative package including luxury campaign visuals and cinematic AI video content.", ["Send your product image", "We create AI advertising visuals", "We produce the AI video", "Receive still images + video"], ["AI Product Visuals", "AI Model Campaigns", "Social Media Assets", "AI Motion Video", "Reels & Advertising Content"]],
];

const retouch = [
  ["Jewelry Retouching 2 Images", "$5", "2-day delivery", "2 revisions", ["2 images", "Source file included", "Printable resolution", "Commercial use", "White background cleanup", "Natural shadow correction"]],
  ["Jewelry Retouching 5 Images", "$10", "3-day delivery", "3 revisions", ["5 images", "Source file included", "Printable resolution", "Commercial use", "Advanced multi-product cleanup", "Consistent product-set tone"]],
  ["Jewelry Retouching 10 Images", "$20", "5-day delivery", "4 revisions", ["10 images", "Source file included", "Printable resolution", "Commercial use", "Batch packshot direction", "Catalog-ready consistency"]],
];

const ai = [
  ["Starter AI Jewelry Visual", "$25", "2-day delivery", "2 revisions", ["1 AI jewelry image", "Luxury model direction", "Professional skin retouching", "Realistic jewelry lighting", "Image enhancement", "Commercial-use concept"]],
  ["AI Jewelry Social Set", "$50", "3-day delivery", "3 revisions", ["2 AI jewelry images", "Luxury model styling", "Social ad mood and tone", "Background refinement", "Upscale and polish", "Brand-ready visual set"]],
  ["AI Jewelry Campaign Set", "$75", "5-day delivery", "4 revisions", ["4 AI jewelry visuals", "Campaign mood direction", "Model/background options", "High-end sparkle and lighting", "Social-ready layouts", "Commercial-use concepts"]],
];

const title = (eyebrow, heading, copy = "") => `
  <div class="editorial-heading">
    <p class="eyebrow">${eyebrow}</p>
    <h2>${heading}</h2>
    ${copy ? `<p class="section-copy">${copy}</p>` : ""}
  </div>`;

const tabs = (prefix, label, description, href, packages) => `
  <div class="pricing-tabs">
    <input id="${prefix}-basic" name="${prefix}-package" type="radio" checked />
    <input id="${prefix}-standard" name="${prefix}-package" type="radio" />
    <input id="${prefix}-premium" name="${prefix}-package" type="radio" />
    <div class="pricing-tab-labels">
      <label for="${prefix}-basic">Basic</label>
      <label for="${prefix}-standard">Standard</label>
      <label for="${prefix}-premium">Premium</label>
    </div>
    <div class="pricing-panels">
      ${packages.map(([name, price, delivery, revisions, features]) => `
        <div class="pricing-panel">
          <div>
            <p class="eyebrow">${label}</p>
            <h3>${name}</h3>
            <p class="pricing-value">${price}</p>
            <p class="pricing-desc">${description}</p>
            <div class="pricing-meta"><span>${delivery}</span><span>${revisions}</span></div>
          </div>
          <div class="pricing-side">
            <ul class="pricing-list">${features.map((feature) => `<li>+ ${feature}</li>`).join("")}</ul>
            <a class="text-link" href="${href}">Continue on Fiverr <span>+</span></a>
          </div>
        </div>`).join("")}
    </div>
  </div>`;

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Supornpun Wannakrai | Jewelry Visual Production Specialist</title>
    <style>
${css}
      img, video { display: block; max-width: 100%; }
      .hero { background: #33302d url("media/diamond-model-campaign.jpg") center / cover no-repeat; }
      .portfolio-grid img { width: 100%; height: 100%; object-fit: contain; padding: 7%; }
      .service-image-card > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
      .service-image-card.is-contain > img { object-fit: contain; object-position: center top; padding: 18px; background: white; }
      .packshot-banner > img { width: 100%; height: 100%; object-fit: cover; }
      @media (max-width: 860px) {
      }
    </style>
  </head>
  <body>
    <div class="jewel-scene" aria-hidden="true">
      <div class="css-jewel"><span></span><span></span><span></span><span></span></div>
      <div class="diamond-rain"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
    </div>
    <div class="site-layer">
      <header class="site-header">
        <nav class="wide-shell nav-inner">
          <a href="#hero" class="wordmark"><span>Supornpun Wannakrai</span><small>Jewelry Visual Production</small></a>
          <div class="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#packages">Packages</a><a href="#contact">Contact</a></div>
          <a class="nav-cta" href="#offer">Free Trial</a>
        </nav>
      </header>
      <main>
        <section id="hero" class="hero">
          <video class="hero-video" src="media/hero-motion.mp4" poster="media/white-gold-sapphire-ring.jpg" autoplay muted loop playsinline></video>
          <div class="hero-shade"></div>
          <div class="wide-shell hero-content">
            <p class="hero-kicker">Jewelry Visual Production Specialist</p>
            <h1>Supornpun<br />Wannakrai</h1>
            <p class="hero-note">Retouching / Photography / Campaign Visuals / AI Creation</p>
          </div>
          <a class="hero-scroll" href="#work">Scroll to view work</a>
        </section>

        <section id="work" class="wide-shell work-section">
          <div class="work-intro">
            ${title("Selected Work", "Jewelry imagery with a precise visual point of view.", "A portfolio of retouching, product imagery, campaign visuals, and social-ready creative direction.")}
            <p class="work-index">01 / Portfolio</p>
          </div>
          <div class="portfolio-grid">
            ${work.map(([src, name, type]) => `
              <article class="portfolio-item">
                <div class="portfolio-media"><img src="media/${src}" alt="${name}" /></div>
                <div class="portfolio-caption"><h3>${name}</h3><p>${type}</p></div>
              </article>`).join("")}
          </div>
        </section>

        <section id="about" class="editorial-band">
          <div class="wide-shell about-grid">
            <p class="section-index">02</p>
            ${title("About", "A specialist eye for the detail that makes jewelry feel exceptional.")}
            <div class="about-copy">
              <p>Supornpun Wannakrai brings 15+ years of jewelry-industry experience to every image, balancing gemstone brilliance, polished metal surfaces, product clarity, and an elevated brand mood.</p>
              <p>Available independently for jewelry retouching, product photography, luxury campaign visuals, e-commerce imagery, AI image and video concepts, and display graphics.</p>
            </div>
          </div>
        </section>

        <section id="services" class="wide-shell services-section">
          <div class="services-head">${title("Services", "A focused visual practice for jewelry brands.")}<p class="section-index">03</p></div>
          <div class="service-image-grid">
            ${services.map(([number, name, media, mediaType, fit, intro, items, idealFor]) => `
              <article class="service-image-card ${fit === "contain" ? "is-contain" : ""}">
                <div class="service-media">
                  ${mediaType === "video"
                    ? `<video src="media/${media}" autoplay muted loop playsinline></video>`
                    : `<img src="media/${media}" alt="${name} service example" />`}
                </div>
                <div class="service-hover-content">
                  <span>${number}</span>
                  <h3>${name}</h3>
                  <p>${intro}</p>
                  <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
                  <small>Ideal for: ${idealFor}</small>
                </div>
              </article>`).join("")}
          </div>
          <div class="package-structure-head">
            <p class="eyebrow">Package Structure</p>
            <h2>Choose still imagery or a complete visual + motion package.</h2>
          </div>
          <div class="creative-package-grid">
            ${creativePackages.map(([label, name, copy, steps, deliverables]) => `
              <article class="creative-package">
                <p class="eyebrow">${label}</p>
                <h3>${name}</h3>
                <p class="creative-package-copy">${copy}</p>
                <ol class="workflow-list">${steps.map((step) => `<li>${step}</li>`).join("")}</ol>
                <div class="deliverables">
                  <p>Deliverables</p>
                  <ul>${deliverables.map((item) => `<li>+ ${item}</li>`).join("")}</ul>
                </div>
              </article>`).join("")}
          </div>
        </section>

        <section class="wide-shell banner-section">
          <div class="packshot-banner">
            <img src="media/packshot-sample-banner.png" alt="White-background jewelry packshot retouching with realistic shadows starting from one US dollar per image" />
            <a href="#offer" class="banner-link banner-sample" aria-label="Try free sample"></a>
            <a href="https://www.fiverr.com/supornpunwnk/do-jewelry-photo-retouch-with-hd-quality" class="banner-link banner-fiverr" aria-label="View Fiverr gig"></a>
          </div>
        </section>

        <section id="packages" class="packages-section">
          <div class="wide-shell">
            <div class="packages-head">
              ${title("Service Packages", "Straightforward options for product and campaign imagery.", "Select Basic, Standard, or Premium to compare the service scope. Final details can be confirmed directly on Fiverr.")}
              <p class="section-index">04</p>
            </div>
            <div class="package-stack">
              ${tabs("retouch", "Jewelry Retouching", "Clean, commercial jewelry retouching with refined metal, gemstone, background, and shadow finishing.", "https://www.fiverr.com/supornpunwnk/do-jewelry-photo-retouch-with-hd-quality", retouch)}
              ${tabs("ai", "AI Jewelry Visuals", "High-end AI jewelry photography with luxury models, realistic lighting, skin retouching, and campaign mood direction.", "https://www.fiverr.com/supornpunwnk/create-high-end-ai-jewelry-photography-with-luxury-models", ai)}
            </div>
          </div>
        </section>

        <section id="offer" class="trial-section">
          <div class="wide-shell trial-grid">
            <div class="trial-image"><img src="media/complimentary-trial-visual-2.png" alt="Complimentary jewelry visual direction trial" /></div>
            <div>
              ${title("Complimentary Trial", "Start with one product image.", "Share one jewelry packshot and a short creative brief. The trial includes one complimentary retouched image and one complimentary social-ad visual concept.")}
              <form class="trial-form" id="trial-form">
                <label>Company name<input type="text" name="company" placeholder="Brand or company name" /></label>
                <label>Contact name<input type="text" name="contact" placeholder="Your name" /></label>
                <label>Email / Line / WhatsApp<input type="text" name="contactInfo" placeholder="Best way to contact you" /></label>
                <label>Product image<input type="file" name="productImage" accept="image/*" /></label>
                <label class="full-field">Desired mood & tone<textarea name="brief" placeholder="Tell us the visual direction you want to explore."></textarea></label>
                <button type="submit">Request Free Trial</button>
                <p class="form-note" id="trial-note" hidden></p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" class="footer">
        <div class="wide-shell footer-grid">
          <div><p class="eyebrow">Contact</p><h2>Let the jewelry hold the attention.</h2></div>
          <div class="footer-info"><p>Supornpun Wannakrai</p><p>Jewelry Visual Production Specialist</p><p>Independent Jewelry Visual Services</p><a href="mailto:supornpunvannakrai@gmail.com">Start a project <span>+</span></a></div>
        </div>
        <div class="wide-shell contact-strip" aria-label="Contact details">
          <a class="contact-item" href="mailto:supornpunvannakrai@gmail.com"><span class="contact-icon" aria-hidden="true">@</span><span><strong>Email</strong><em>supornpunvannakrai@gmail.com</em></span></a>
          <a class="contact-item" href="tel:+66843302202"><span class="contact-icon" aria-hidden="true">P</span><span><strong>Phone</strong><em>+66 84 330 2202</em></span></a>
          <div class="contact-item"><span class="contact-icon" aria-hidden="true">L</span><span><strong>Location</strong><em>Bangkok, Thailand<br />Remote Worldwide</em></span></div>
          <div class="contact-item contact-connect"><span><strong>Connect</strong><em>Professional profile</em></span><a class="social-dot" href="https://www.linkedin.com/in/supornpun-wannakrai-1a33728b/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">in</a><a class="social-dot" href="mailto:supornpunvannakrai@gmail.com" aria-label="Email Supornpun Wannakrai">@</a></div>
        </div>
      </footer>
    </div>
    <script>
      (() => {
        const update = () => {
          const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
          const progress = scrollY / max;
          document.documentElement.style.setProperty("--scroll-spin", (progress * 190) + "deg");
          document.documentElement.style.setProperty("--scroll-tilt", (progress * 64) + "deg");
          document.documentElement.style.setProperty("--diamond-fall", (progress * 540) + "px");
        };
        addEventListener("scroll", update, { passive: true });
        addEventListener("resize", update);
        update();
      })();
      (() => {
        const form = document.querySelector("#trial-form");
        if (!form) return;
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          const data = new FormData(form);
          const image = data.get("productImage");
          const fileName = image && image.name ? image.name : "Not selected";
          const body = [
            "Free Trial Request",
            "",
            "Company name: " + (data.get("company") || ""),
            "Contact name: " + (data.get("contact") || ""),
            "Email / Line / WhatsApp: " + (data.get("contactInfo") || ""),
            "Product image file: " + fileName,
            "",
            "Desired mood & tone:",
            data.get("brief") || "",
            "",
            "Note: Please attach the product image file before sending this email."
          ].join("\\n");
          location.href = "mailto:supornpunvannakrai@gmail.com?subject=" + encodeURIComponent("Free Trial Request") + "&body=" + encodeURIComponent(body);
          const note = document.querySelector("#trial-note");
          if (note) {
            note.hidden = false;
            note.textContent = "Your email app will open with the request details. Please attach the product image before sending.";
          }
        });
      })();
    </script>
  </body>
</html>`;

await writeFile(output, html, "utf8");
console.log(`Static preview written to ${output.pathname}`);
