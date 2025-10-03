// Updated App.js with blog detail navigation + responsive navbar (hamburger menu)
import React, { useState } from "react";
import "./App.css";

const blogPosts = [
  {
    id: 1,
    title: "👉 Privatumzüge in Deutschland: Stressfrei, günstig und professionell umziehen",
    image: "/image11.png",
    content: `Ein Wohnungswechsel ist oft mit Stress und viel Organisation verbunden. Mit einem professionellen Umzugsunternehmen wird der Umzug jedoch deutlich einfacher und sicherer. Bei einem Privatumzug stehen vor allem die sorgfältige Verpackung, pünktliche Lieferung und ein zuverlässiger Versicherungsschutz im Vordergrund. Ob innerhalb einer Stadt oder deutschlandweit – unsere erfahrenen Teams sorgen dafür, dass Ihr Umzug reibungslos und stressfrei verläuft. Vertrauen Sie auf unsere Expertise und genießen Sie einen entspannten Neuanfang.`,
    hashtags: "#Privatumzug Deutschland, Umzug stressfrei, günstige Umzugsfirma, professioneller Umzug"
  },
  {
    id: 2,
    title: "👉 Firmenumzüge leicht gemacht: Effizient und ohne Arbeitsausfall umziehen",
    image: "/image22.png",
    content: `Ein Firmenumzug bedeutet mehr als nur Möbel zu transportieren – er beeinflusst den gesamten Geschäftsablauf. Deshalb ist eine präzise Planung entscheidend, damit der Betrieb ohne Unterbrechung weiterläuft. Büroeinrichtungen, Computer, sensible Daten und technische Geräte müssen mit besonderer Sorgfalt transportiert werden. Wir bieten Unternehmen maßgeschneiderte Lösungen, um einen schnellen, sicheren und effizienten Umzug zu garantieren.`,
    hashtags: "#Firmenumzug Deutschland, Büro umziehen, Umzugsservice für Unternehmen, professioneller Büroumzug"
  },
  {
    id: 3,
    title: "👉 Express-Transporte in Deutschland: Schnell, sicher und zuverlässig liefern",
    image: "/image33.png",
    content: `Manchmal zählt jede Minute – ob wichtige Dokumente, Messeausstattung oder dringende Warenlieferungen. In solchen Fällen sind Express-Transporte die beste Lösung. Unser Service garantiert schnelle, flexible und sichere Lieferungen in ganz Deutschland.`,
    hashtags: "#Express Transport Deutschland, schnelle Lieferung, zuverlässiger Transport, 24h Express-Umzug"
  }
];

function App() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [navOpen, setNavOpen] = useState(false);

  const handleBlogClick = (id) => {
    const blog = blogPosts.find((post) => post.id === id);
    setSelectedBlog(blog);
  };

  const handleBack = () => setSelectedBlog(null);

  return (
    <div className="App">
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <Hero />
      <Services />
      <FAQ />
      {selectedBlog ? (
        <BlogDetail blog={selectedBlog} onBack={handleBack} />
      ) : (
        <Blog blogPosts={blogPosts} onBlogClick={handleBlogClick} />
      )}
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

function Header({ navOpen, setNavOpen }) {
  return (
    <header className="header">
      <div className="logo-with-image">
        <img src="/logo.png" alt="MöbelTaxi Logo" className="logo-img" />
        <span className="logo-text">Möbel Taxi & Umzug Berlin</span>
      </div>
      <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
        ☰
      </div>
      <nav className={`nav ${navOpen ? "open" : ""}`}>
        <a href="#hero">Home</a>
        <a href="#services">Dienstleistungen</a>
        <a href="#faq">FAQ</a>
        <a href="#blog">Blog</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
    </header>
  );
}

function Blog({ blogPosts, onBlogClick }) {
  return (
    <section className="section blog-section" id="blog">
      <h1 className="faq-heading">Blog & Neuigkeiten</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="blog-preview-card fade-in"
            onClick={() => onBlogClick(post.id)}
          >
            <img src={post.image} alt={post.title} className="blog-preview-img" />
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-readmore">Weiterlesen →</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BlogDetail({ blog, onBack }) {
  return (
    <section className="section blog-detail-section">
      <button className="back-button" onClick={onBack}>
        ← Zurück zur Übersicht
      </button>
      <h1 className="faq-heading">{blog.title}</h1>
      <img src={blog.image} className="blog-img" alt={blog.title} />
      <p>{blog.content}</p>
      <p className="hashtags">{blog.hashtags}</p>
    </section>
  );
}

function Hero() {
  return (
    <section
      className="hero"
      id="hero"
      style={{
        backgroundImage: `url("/truck-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative"
      }}
    >
      <div className="hero-overlay">
        <h1>MöbelTaxi Umzug</h1>
        <p>Ihr Logistik- und Umzugspartner</p>
        <a href="#kontakt" className="cta-button">
          Jetzt Kontakt Aufnehmen
        </a>
        <p className="phone-display">Telefon: +49 111 111</p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <h1 className="services-heading">🚚 Unsere Leistungen</h1>
      <div className="services-grid">
        <div className="service-card fade-in">
          <h2>🏠 Umzüge</h2>
          <p>(Wohnung, WG, Pflegeheim, Büro)</p>
        </div>
        <div className="service-card fade-in">
          <h2>🛋️ Möbeltransporte & Mini-Umzüge</h2>
          <p>Schnell und sicher – auch kleine Transporte.</p>
        </div>
        <div className="service-card fade-in">
          <h2>♻️ Entrümpelung & Sperrmüllentsorgung</h2>
          <p>Fachgerechte Entsorgung von Sperrmüll und Entrümpelung.</p>
        </div>
        <div className="service-card fade-in">
          <h2>🔧 Möbelmontage & Demontage</h2>
          <p>Wir bauen Ihre Möbel ab und wieder auf.</p>
        </div>
        <div className="service-card fade-in">
          <h2>🏡 Gartenarbeiten</h2>
          <p>Rasenmähen, Laub sammeln, Gartenabfälle entsorgen, Müllentsorgung.</p>
        </div>
        <div className="service-card fade-in">
          <h2>🛒 Lieferung & Aufbau</h2>
          <p>Ihre Einkäufe von IKEA, Poco, Höffner & Co. liefern & aufbauen.</p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <h1 className="faq-heading">Häufig gestellte Fragen</h1>
      <div className="faq-item fade-in">
        <h2>1. Was für Transportdienstleistungen bietet Ihr Unternehmen an?</h2>
        <p>
          MöbelTaxi bietet eine Vielzahl von Transportdienstleistungen in Berlin
          an, einschließlich Möbeltransporte, Büroumzüge, Transport und
          Entsorgung von Sperrgut.
        </p>
        <p>
          <strong>Was kostet ein Möbeltransport mit MöbelTaxi in Berlin?</strong>
          <br />
          Die Kosten werden individuell pro Auftrag berechnet. Nach Ihrer Anfrage
          erhalten Sie umgehend ein individuelles Angebot.
        </p>
      </div>
      <div className="faq-item fade-in">
        <h2>2. Wie wird der Transportpreis berechnet?</h2>
        <p>
          Der Preis hängt von verschiedenen Faktoren ab: Entfernung, Menge und
          Größe der Möbel sowie eventuellen Zusatzleistungen wie Verpackung oder
          Montage.
        </p>
      </div>
      <div className="faq-item fade-in">
        <h2>3. Wie kann ich einen Möbeltransport-Termin reservieren?</h2>
        <p>
          Sie können Ihren Möbeltransport ganz einfach über unsere Website, per
          Telefon oder per E-Mail buchen.
        </p>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section whyus-section" id="whyus">
      <h1 className="services-heading">Warum wir?</h1>
      <div className="services-grid">
        <div className="service-card fade-in">✅ Schnell, zuverlässig & preiswert</div>
        <div className="service-card fade-in">✅ Flexible Termine – auch kurzfristig möglich</div>
        <div className="service-card fade-in">✅ Freundlicher Service & tatkräftiges Team</div>
        <div className="service-card fade-in">
          ✅ Transporte mit eigenen Fahrzeugen in ganz Berlin
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="kontakt">
      <h1>Kontakt & Standort</h1>
      <div className="contact-info">
        <p>
          <strong>📍 Adresse:</strong> Zeppelinstraße 75, 13583 Berlin
        </p>
        <p>
          <strong>📧 E-Mail:</strong>{" "}
          <a href="mailto:moebeltaxiumzug@gmail.com">
            moebeltaxiumzug@gmail.com
          </a>
        </p>
        <p>
          <strong>📞 Telefon:</strong>{" "}
          <a href="tel:+49111111">+49 111 111</a>
        </p>
        <p>
          <strong>📷 Instagram:</strong>{" "}
          <a
            href="https://instagram.com/mobeltaxiumzug"
            target="_blank"
            rel="noreferrer"
          >
            @mobeltaxiumzug
          </a>
        </p>
      </div>
      <div style={{ height: "2rem" }}></div>
      <div className="map-container">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.5807414939085!2d13.191869376477303!3d52.55013347200782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851db189e411d%3A0x85b3c1ea83fe33a9!2sZeppelinstra%C3%9Fe%2075%2C%2013583%20Berlin%2C%20Germany!5e0!3m2!1str!2str!4v1696069698439!5m2!1str!2str"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <img src="/logo.png" alt="MöbelTaxi Logo Footer" className="footer-logo" />
      <p>&copy; 2025 MöbelTaxi Umzug. Alle Rechte vorbehalten.</p>
    </footer>
  );
}

export default App;