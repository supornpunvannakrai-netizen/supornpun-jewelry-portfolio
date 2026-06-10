import Image from "next/image";
import TrialForm from "./TrialForm";

const serviceCards = [
  {
    number: "01",
    title: "Jewelry Retouching & E-commerce Visuals",
    image: "/media/1245645.jpg",
    fit: "contain",
    intro: "High-end jewelry image enhancement for e-commerce, catalogs, and digital marketing.",
    items: [
      "White background packshots",
      "Diamond & gemstone enhancement",
      "Metal polishing",
      "Dust, scratch, shadow & reflection refinement",
      "Clipping path & background cleanup",
      "E-commerce ready image delivery",
    ],
    idealFor: "Jewelry brands / Online stores / Marketplaces / Catalog production",
  },
  {
    number: "02",
    title: "AI Campaign Visuals",
    image: "/media/diamond-model-campaign.jpg",
    intro: "Luxury AI-generated advertising visuals designed to elevate product presentation and brand perception.",
    items: [
      "Product lifestyle visuals",
      "Marble, stone & luxury packaging scenes",
      "Editorial and seasonal displays",
      "Jewelry-on-model campaign concepts",
      "Luxury brand advertisements",
      "Social media campaign assets",
    ],
    idealFor: "Product launches / Advertising / Social media / Website banners / Lookbooks",
  },
  {
    number: "03",
    title: "AI Video Production",
    video: "/media/0531.mp4",
    intro: "Transforming static visuals into engaging cinematic content using advanced AI video production.",
    items: [
      "Product showcase videos",
      "Jewelry motion videos",
      "Social media reels",
      "Cinematic product presentations",
      "AI fashion & lifestyle videos",
      "Advertising motion content",
    ],
    idealFor: "Instagram Reels / Facebook Ads / TikTok / Website hero videos / Digital campaigns",
  },
];

const creativePackages = [
  {
    label: "Package A",
    title: "AI Campaign Visuals",
    copy: "Luxury AI-generated advertising images for social media, websites, and marketing campaigns.",
    steps: ["Send your product image", "We create AI advertising visuals", "Receive campaign-ready still images"],
    deliverables: ["AI Product Visuals", "AI Model Campaigns", "Social Media Assets"],
  },
  {
    label: "Package B",
    title: "AI Campaign Visuals + AI Video",
    copy: "A complete creative package including luxury campaign visuals and cinematic AI video content.",
    steps: ["Send your product image", "We create AI advertising visuals", "We produce the AI video", "Receive still images + video"],
    deliverables: ["AI Product Visuals", "AI Model Campaigns", "Social Media Assets", "AI Motion Video", "Reels & Advertising Content"],
  },
];

const retouchPackages = [
  ["Jewelry Retouching 2 Images", "$5", "2-day delivery", "2 revisions", ["2 images", "Source file included", "Printable resolution", "Commercial use", "White background cleanup", "Natural shadow correction"]],
  ["Jewelry Retouching 5 Images", "$10", "3-day delivery", "3 revisions", ["5 images", "Source file included", "Printable resolution", "Commercial use", "Advanced multi-product cleanup", "Consistent product-set tone"]],
  ["Jewelry Retouching 10 Images", "$20", "5-day delivery", "4 revisions", ["10 images", "Source file included", "Printable resolution", "Commercial use", "Batch packshot direction", "Catalog-ready consistency"]],
];

const aiPackages = [
  ["Starter AI Jewelry Visual", "$25", "2-day delivery", "2 revisions", ["1 AI jewelry image", "Luxury model direction", "Professional skin retouching", "Realistic jewelry lighting", "Image enhancement", "Commercial-use concept"]],
  ["AI Jewelry Social Set", "$50", "3-day delivery", "3 revisions", ["2 AI jewelry images", "Luxury model styling", "Social ad mood and tone", "Background refinement", "Upscale and polish", "Brand-ready visual set"]],
  ["AI Jewelry Campaign Set", "$75", "5-day delivery", "4 revisions", ["4 AI jewelry visuals", "Campaign mood direction", "Model/background options", "High-end sparkle and lighting", "Social-ready layouts", "Commercial-use concepts"]],
];

function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="editorial-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function PackageTabs({
  prefix,
  label,
  description,
  href,
  packages,
}: {
  prefix: string;
  label: string;
  description: string;
  href: string;
  packages: (string | string[])[][];
}) {
  return (
    <div className="pricing-tabs">
      <input id={`${prefix}-basic`} name={`${prefix}-package`} type="radio" defaultChecked />
      <input id={`${prefix}-standard`} name={`${prefix}-package`} type="radio" />
      <input id={`${prefix}-premium`} name={`${prefix}-package`} type="radio" />
      <div className="pricing-tab-labels">
        <label htmlFor={`${prefix}-basic`}>Basic</label>
        <label htmlFor={`${prefix}-standard`}>Standard</label>
        <label htmlFor={`${prefix}-premium`}>Premium</label>
      </div>
      <div className="pricing-panels">
        {packages.map(([title, price, delivery, revisions, features]) => (
          <div className="pricing-panel" key={title as string}>
            <div>
              <p className="eyebrow">{label}</p>
              <h3>{title as string}</h3>
              <p className="pricing-value">{price as string}</p>
              <p className="pricing-desc">{description}</p>
              <div className="pricing-meta">
                <span>{delivery as string}</span>
                <span>{revisions as string}</span>
              </div>
            </div>
            <div className="pricing-side">
              <ul className="pricing-list">
                {(features as string[]).map((feature) => (
                  <li key={feature}>+ {feature}</li>
                ))}
              </ul>
              <a href={href} className="text-link">
                Continue on Fiverr <span aria-hidden="true">+</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="site-layer">
        <header className="site-header">
          <nav className="wide-shell nav-inner">
            <a href="#hero" className="wordmark">
              <span>Supornpun Wannakrai</span>
              <small>Jewelry Visual Production</small>
            </a>
            <div className="nav-links">
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#packages">Packages</a>
              <a href="#contact">Contact</a>
            </div>
            <a className="nav-cta" href="#offer">Free Trial</a>
          </nav>
        </header>

        <section id="hero" className="hero">
          <video
            className="hero-video"
            src="/media/hero-motion.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="hero-shade" />
          <div className="wide-shell hero-content">
            <p className="hero-kicker">Jewelry Visual Production Specialist</p>
            <h1>Supornpun<br />Wannakrai</h1>
            <p className="hero-note">Retouching / Photography / Campaign Visuals / AI Creation</p>
          </div>
          <a className="hero-scroll" href="#work">Scroll to view work</a>
        </section>

        <section id="work" className="wide-shell work-section">
          <div className="work-intro">
            <SectionTitle
              eyebrow="Selected Work"
              title="Jewelry imagery with a precise visual point of view."
              copy="A portfolio of retouching, product imagery, campaign visuals, and social-ready creative direction."
            />
            <p className="work-index">01 / Portfolio</p>
          </div>
          <article className="portfolio-feature">
            <div className="portfolio-feature-media">
              <Image
                src="/media/campaign-model-feature-v3.png"
                alt="Luxury jewelry model campaign visual"
                fill
                sizes="(max-width: 860px) calc(100vw - 28px), min(1440px, calc(100vw - 48px))"
                className="portfolio-feature-image portfolio-feature-image-base"
                priority
              />
              <Image
                src="/media/campaign-model-feature-product.jpg"
                alt="Luxury jewelry model campaign visual with original product references"
                fill
                sizes="(max-width: 860px) calc(100vw - 28px), min(1440px, calc(100vw - 48px))"
                className="portfolio-feature-image portfolio-feature-image-product"
              />
            </div>
            <div className="portfolio-diptych">
              <div className="portfolio-diptych-media">
                <Image
                  src="/media/campaign-bangle-model-v2.png"
                  alt="Luxury gold diamond bangle styling on model"
                  fill
                  sizes="(max-width: 860px) calc(100vw - 28px), min(708px, calc((100vw - 64px) / 2))"
                  className="portfolio-diptych-image"
                />
              </div>
              <div className="portfolio-diptych-media">
                <Image
                  src="/media/campaign-bangle-product-v2.png"
                  alt="Luxury gold diamond bangle product visual"
                  fill
                  sizes="(max-width: 860px) calc(100vw - 28px), min(708px, calc((100vw - 64px) / 2))"
                  className="portfolio-diptych-image"
                />
              </div>
            </div>
            <div className="portfolio-wide-media">
              <Image
                src="/media/campaign-diamond-ring-prop.jpg"
                alt="Diamond ring styled with ivory props"
                width={2304}
                height={1556}
                sizes="(max-width: 860px) calc(100vw - 28px), min(1440px, calc(100vw - 48px))"
                className="portfolio-wide-image"
              />
            </div>
          </article>
        </section>

        <section id="about" className="editorial-band">
          <div className="wide-shell about-grid">
            <p className="section-index">02</p>
            <SectionTitle eyebrow="About" title="A specialist eye for the detail that makes jewelry feel exceptional." />
            <div className="about-copy">
              <p>
                Supornpun Wannakrai brings 15+ years of jewelry-industry
                experience to every image, balancing gemstone brilliance,
                polished metal surfaces, product clarity, and an elevated brand
                mood.
              </p>
              <p>
                Available independently for jewelry retouching, product
                photography, luxury campaign visuals, e-commerce imagery, AI
                image and video concepts, and display graphics.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="wide-shell services-section">
          <div className="services-head">
            <SectionTitle eyebrow="Services" title="A focused visual practice for jewelry brands." />
            <p className="section-index">03</p>
          </div>
          <div className="service-image-grid">
            {serviceCards.map((service) => (
              <article className={`service-image-card ${"fit" in service ? "is-contain" : ""}`} key={service.number}>
                <div className="service-media">
                  {"video" in service ? (
                    <video src={service.video} autoPlay muted loop playsInline />
                  ) : (
                    <Image
                      src={service.image}
                      alt={`${service.title} service example`}
                      fill
                      sizes="(max-width: 860px) 100vw, 33vw"
                    />
                  )}
                </div>
                <div className="service-hover-content">
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.intro}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <small>Ideal for: {service.idealFor}</small>
                </div>
              </article>
            ))}
          </div>
          <div className="package-structure-head">
            <p className="eyebrow">Package Structure</p>
            <h2>Choose still imagery or a complete visual + motion package.</h2>
          </div>
          <div className="creative-package-grid">
            {creativePackages.map((item) => (
              <article className="creative-package" key={item.label}>
                <p className="eyebrow">{item.label}</p>
                <h3>{item.title}</h3>
                <p className="creative-package-copy">{item.copy}</p>
                <ol className="workflow-list">
                  {item.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <div className="deliverables">
                  <p>Deliverables</p>
                  <ul>
                    {item.deliverables.map((deliverable) => (
                      <li key={deliverable}>+ {deliverable}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="wide-shell banner-section">
          <div className="packshot-banner">
            <Image
              src="/media/packshot-sample-banner.png"
              alt="White-background jewelry packshot retouching with realistic shadows starting from one US dollar per image"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <a href="#offer" className="banner-link banner-sample" aria-label="Try free sample" />
            <a
              href="https://www.fiverr.com/supornpunwnk/do-jewelry-photo-retouch-with-hd-quality"
              className="banner-link banner-fiverr"
              aria-label="View Fiverr gig"
            />
          </div>
        </section>

        <section id="packages" className="packages-section">
          <div className="wide-shell">
            <div className="packages-head">
              <SectionTitle
                eyebrow="Service Packages"
                title="Straightforward options for product and campaign imagery."
                copy="Select Basic, Standard, or Premium to compare the service scope. Final details can be confirmed directly on Fiverr."
              />
              <p className="section-index">04</p>
            </div>
            <div className="package-stack">
              <PackageTabs
                prefix="retouch"
                label="Jewelry Retouching"
                description="Clean, commercial jewelry retouching with refined metal, gemstone, background, and shadow finishing."
                href="https://www.fiverr.com/supornpunwnk/do-jewelry-photo-retouch-with-hd-quality"
                packages={retouchPackages}
              />
              <PackageTabs
                prefix="ai"
                label="AI Jewelry Visuals"
                description="High-end AI jewelry photography with luxury models, realistic lighting, skin retouching, and campaign mood direction."
                href="https://www.fiverr.com/supornpunwnk/create-high-end-ai-jewelry-photography-with-luxury-models"
                packages={aiPackages}
              />
            </div>
          </div>
        </section>

        <section id="offer" className="trial-section">
          <div className="wide-shell trial-grid">
            <div className="trial-image">
              <Image
                src="/media/complimentary-trial-visual-2.png"
                alt="Complimentary jewelry visual direction trial"
                width={1536}
                height={1536}
                className="h-auto w-full"
              />
            </div>
            <div>
              <SectionTitle eyebrow="Complimentary Trial" title="Start with one product image." copy="Share one jewelry packshot and a short creative brief. The trial includes one complimentary retouched image and one complimentary social-ad visual concept." />
              <TrialForm />
            </div>
          </div>
        </section>

        <footer id="contact" className="footer">
          <div className="wide-shell footer-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let the jewelry hold the attention.</h2>
            </div>
            <div className="footer-info">
              <p>Supornpun Wannakrai</p>
              <p>Jewelry Visual Production Specialist</p>
              <p>Independent Jewelry Visual Services</p>
              <a href="#offer">Start a project <span aria-hidden="true">+</span></a>
            </div>
          </div>
          <div className="wide-shell contact-strip" aria-label="Contact details">
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">@</span>
              <span>
                <strong>Email</strong>
                <em>supornpunvannakrai@gmail.com</em>
              </span>
            </div>
            <a className="contact-item" href="tel:+66843302202">
              <span className="contact-icon" aria-hidden="true">P</span>
              <span>
                <strong>Phone</strong>
                <em>+66 84 330 2202</em>
              </span>
            </a>
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">L</span>
              <span>
                <strong>Location</strong>
                <em>Bangkok, Thailand<br />Remote Worldwide</em>
              </span>
            </div>
            <div className="contact-item contact-connect">
              <span>
                <strong>Connect</strong>
                <em>Professional profile</em>
              </span>
              <a
                className="social-dot"
                href="https://www.linkedin.com/in/supornpun-wannakrai-1a33728b/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                in
              </a>
              <a className="social-dot" href="#offer" aria-label="Start a free trial request">
                @
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
