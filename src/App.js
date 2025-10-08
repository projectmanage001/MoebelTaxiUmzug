import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./App.css";

// Blog verileri
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

// Referenzen verileri
const reviews = [
  { name: "Anna K.", text: "Der Umzug verlief super schnell und stressfrei! Das Team war pünktlich, freundlich und hat sehr sorgfältig gearbeitet. Absolut empfehlenswert!" },
  { name: "Markus L.", text: "Ich bin aus meiner alten WG in eine neue Wohnung gezogen. MöbelTaxi hat alles in nur drei Stunden erledigt – top organisiert!" },
  { name: "Julia S.", text: "Ich musste nur ein Sofa transportieren – das Team kam noch am selben Tag und hat alles sicher gemacht. Wirklich zuverlässig!" },
  { name: "Tobias F.", text: "Kleiner Umzug, aber große Hilfe! Sehr nette Mitarbeiter und keine versteckten Kosten." },
  { name: "Elena P.", text: "Meine Kellerentrümpelung war in zwei Stunden erledigt. Alles wurde sauber hinterlassen. Perfekter Service!" },
  { name: "Daniel H.", text: "Professionell, schnell und fairer Preis. Das Team hat sogar beim Trennen von Elektroschrott geholfen." },
  { name: "Lisa M.", text: "Ich habe ein großes IKEA-Bett gekauft – die Monteure haben es in kürzester Zeit aufgebaut. Sehr freundlich und präzise!" },
  { name: "Sven T.", text: "Top-Service! Sie haben alle Möbel abgebaut, transportiert und in der neuen Wohnung perfekt wieder aufgebaut." }
];

function App() {
  return (
    <Router>
      <div className="app">
         <StickyBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ueber-uns" element={<AboutUs />} />
          <Route path="/dienstleistungen" element={<ServicesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/referenzen" element={<References />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/datenschutzerklaerung" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

/* === 🧩 STICKY BAR === */
function StickyBar() {
  return (
    <div className="sticky-bar">
      {/* Sol Kısım - Telefon ve Form */}
      <div className="sticky-item">
        <span>📞 Click & Call | Mo–Fr 9–18 Uhr</span>
        <a href="tel:+4915771677034" className="sticky-btn call-btn">
          +49 1577 1677034
        </a>
        <Link to="/kontakt" className="sticky-btn form-btn">
          Zum Anfrageformular
        </Link>
      </div>

      {/* Orta Kısım - WhatsApp */}
      <div className="sticky-item">
        <span>💬 Click & Chat | WhatsApp 24/7</span>
        <a
          href="https://wa.me/4915771677034"
          target="_blank"
          rel="noreferrer"
          className="sticky-btn whatsapp-btn"
        >
          WhatsApp
        </a>
      </div>

      {/* Sağ Kısım - Sosyal İkonlar */}
      <div className="sticky-socials">
        {/* Gmail */}
        <a
          href="mailto:moebeltaxiumzug@gmail.com"
          title="E-Mail senden"
          className="social-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ color: "#EA4335" }}
          >
            <path d="M12 13.5l8-6V18H4V7.5l8 6zm0-3L4 6h16l-8 4.5z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/mobeltaxiumzug"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
          className="social-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ color: "#E1306C" }}
          >
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1CXApsKjjC/?mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
          className="social-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ color: "#1877F2" }}
          >
            <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.01 3.66 9.17 8.44 9.93v-7.02H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.9h-2.32V22c4.78-.76 8.44-4.92 8.44-9.93z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

// Header (Navbar)
function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="header">
      <div className="logo-with-image">
        <img src="/logo.png" alt="MöbelTaxi Logo" className="logo-img" />
        <Link to="/" className="logo-text">Möbel Taxi & Umzug Berlin</Link>
      </div>
      <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>☰</div>
      <nav className={`nav ${navOpen ? "open" : ""}`}>
        <Link to="/">Startseite</Link>
        <Link to="/ueber-uns">Über Uns</Link>
        <Link to="/dienstleistungen">Dienstleistungen</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/referenzen">Referenzen</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>
    </header>
  );
}

// Ana Sayfa
function Home() {
  return (
    <>
      <Hero />
      <ContactFormSection />
    </>
  );
}

function Hero() {
  return (
    <section
      className="hero"
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
        <Link to="/kontakt" className="cta-button">Jetzt Kontakt Aufnehmen</Link>
        <p className="phone-display">
          <a href="tel:+4915771677034" style={{ color: "#fff", textDecoration: "none", fontSize: "1.2rem", fontWeight: "bold" }}>
            📞 +49 1577 1677034
          </a>
        </p>
      </div>
    </section>
  );
}

// Ortak İletişim Formu Bileşeni (Hem Home’da hem Kontakt sayfasında kullanılacak)
function ContactFormSection() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [checked, setChecked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!checked) {
      alert("Bitte bestätigen Sie die Datenschutzerklärung.");
      return;
    }
    emailjs
      .sendForm(
        "service_m5e9zfv",
        "template_fk75mjp",
        form.current,
        "m8spZLGqXBIEqNGr0"
      )
      .then(() => {
        setSent(true);
        form.current.reset();
        setChecked(false);
      })
      .catch(() => alert("Fehler beim Senden."));
  };

  return (
    <section className="section contact-section">
      <h2 style={{ marginTop: "2rem" }}>Kontaktformular</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Vorname<input type="text" name="vorname" required /></label>
        <label>Nachname<input type="text" name="nachname" required /></label>
        <label>E-Mail *<input type="email" name="email" required /></label>
        <label>Telefonnummer *<input type="tel" name="telefonnummer" required /></label>
        <p>Wenn Sie einen Rückruf wünschen, bitte ausfüllen.</p>
        <label>Bitte wählen Sie eine Option *
          <select name="dienstleistung" required>
            <option value="">-- Bitte wählen --</option>
            <option>Umzüge</option><option>Möbeltransporte</option>
            <option>Entrümpelung</option><option>Montage</option>
            <option>Gartenarbeiten</option><option>Lieferung</option>
          </select>
        </label>
        <label>Wie viele Träger benötigen Sie? *<input type="number" name="traeger" required /></label>
        <label>Menge der Güter *<textarea name="menge" required></textarea></label>
        <label>Von welchem Stockwerk abholen? *<input type="text" name="abholstock" required /></label>
        <label>In welches Stockwerk liefern? *<input type="text" name="lieferstock" required /></label>
        <label>Gibt es einen Aufzug im Gebäude? *
          <select name="aufzug" required>
            <option value="">-- Bitte wählen --</option>
            <option>Ja</option><option>Nein</option>
          </select>
        </label>
        <label>Abholadresse *<textarea name="abholadresse" required></textarea></label>
        <label>Lieferadresse *<textarea name="lieferadresse" required></textarea></label>
        <label>Kommentar oder Nachricht *<textarea name="nachricht" required></textarea></label>

        <label className="checkbox-label highlighted-checkbox">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            required
          />
          Ich habe die{" "}
          <a href="/datenschutzerklaerung" target="_blank" rel="noreferrer">Datenschutzerklärung</a>{" "}
          gelesen und stimme zu.
        </label>

        <button type="submit" className="cta-button">Absenden</button>
        {sent && <p style={{ color: "green" }}>Nachricht erfolgreich gesendet ✅</p>}
      </form>
    </section>
  );
}

// Über Uns
function AboutUs() {
  return (
    <section className="section about-section">
      <h1 className="services-heading">Über Uns / Warum wir?</h1>
      <div className="services-grid">
        <div className="service-card fade-in">✅ Schnell, zuverlässig & preiswert</div>
        <div className="service-card fade-in">✅ Flexible Termine – auch kurzfristig möglich</div>
        <div className="service-card fade-in">✅ Freundlicher Service & tatkräftiges Team</div>
        <div className="service-card fade-in">✅ Transporte mit eigenen Fahrzeugen in ganz Berlin</div>
        <div className="service-card fade-in">✅ Individuelle Beratung & maßgeschneiderte Angebote</div>
        <div className="service-card fade-in">✅ Pünktlichkeit und Transparenz bei allen Aufträgen</div>
        <div className="service-card fade-in">✅ Nachhaltige Lösungen – umweltfreundliche Materialien & Fahrzeuge</div>
        <div className="service-card fade-in">✅ Kundenzufriedenheit steht bei uns an erster Stelle</div>
      </div>
    </section>
  );
}

// Dienstleistungen
function ServicesPage() {
  return (
    <section className="section services-section">
      <h1 className="services-heading">🚚 Unsere Leistungen</h1>
      <div className="services-grid">
        {[
          {icon:"🏠",title:"Umzüge",desc:"(Wohnung, WG, Pflegeheim, Büro)"},
          {icon:"🛋️",title:"Möbeltransporte & Mini-Umzüge",desc:"Schnell und sicher – auch kleine Transporte."},
          {icon:"♻️",title:"Entrümpelung",desc:"Fachgerechte Entsorgung von Sperrmüll und Entrümpelung."},
          {icon:"🔧",title:"Möbelmontage & Demontage",desc:"Wir bauen Ihre Möbel ab und wieder auf."},
          {icon:"🏡",title:"Gartenarbeiten",desc:"Rasenmähen, Laub sammeln, Gartenabfälle entsorgen, Müllentsorgung."},
          {icon:"🛒",title:"Lieferung & Aufbau",desc:"Ihre Einkäufe von IKEA, Poco, Höffner & Co. liefern & aufbauen."},
        ].map((s,i)=>(
          <div key={i} className="service-card fade-in">
            <h2>{s.icon} {s.title}</h2>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// FAQ
function FAQPage() {
  return (
    <section className="section faq-section">
      <h1 className="faq-heading">Häufig gestellte Fragen</h1>
      <div className="faq-item fade-in">
        <h2>1. Was für Transportdienstleistungen bietet Ihr Unternehmen an?</h2>
        <p>MöbelTaxi bietet eine Vielzahl von Transportdienstleistungen in Berlin an, einschließlich Möbeltransporte, Büroumzüge, Transport und Entsorgung von Sperrgut.</p>
      </div>
      <div className="faq-item fade-in">
        <h2>2. Wie wird der Transportpreis berechnet?</h2>
        <p>Der Preis hängt von verschiedenen Faktoren ab: Entfernung, Menge und Größe der Möbel sowie eventuellen Zusatzleistungen wie Verpackung oder Montage.</p>
      </div>
      <div className="faq-item fade-in">
        <h2>3. Wie kann ich einen Möbeltransport-Termin reservieren?</h2>
        <p>Sie können Ihren Möbeltransport ganz einfach über unsere Website, per Telefon oder per E-Mail buchen.</p>
      </div>
    </section>
  );
}

// Blog Liste
function Blog() {
  return (
    <section className="section blog-section">
      <h1 className="faq-heading">Blog & Neuigkeiten</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="blog-preview-card fade-in">
            <img src={post.image} alt={post.title} className="blog-preview-img" />
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-readmore">Weiterlesen →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Blog Detay
function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find((b) => b.id === parseInt(id));
  if (!blog) return <p>Blog nicht gefunden</p>;
  return (
    <section className="section blog-detail-section">
      <button className="back-button" onClick={() => navigate("/blog")}>← Zurück</button>
      <h1 className="faq-heading">{blog.title}</h1>
      <img src={blog.image} className="blog-img" alt={blog.title} />
      <p>{blog.content}</p>
      <p className="hashtags">{blog.hashtags}</p>
    </section>
  );
}

// Referenzen
function References() {
  return (
    <section className="section references-section">
      <h1 className="services-heading">Kundenreferenzen</h1>
      <div className="reviews-grid">
        {reviews.map((r,i)=>(
          <div key={i} className="review-card">
            <div className="review-avatar">{r.name[0]}</div>
            <div className="review-content">
              <h3>{r.name}</h3>
              <p>{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ✉️ K O N T A K T  (EmailJS + Form + Tıklanabilir Adres / Mail / Telefon / WhatsApp)
function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [checked, setChecked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!checked) {
      alert("Bitte bestätigen Sie die Datenschutzerklärung.");
      return;
    }
    emailjs
      .sendForm(
        "service_m5e9zfv",
        "template_fk75mjp",
        form.current,
        "m8spZLGqXBIEqNGr0"
      )
      .then(() => {
        setSent(true);
        form.current.reset();
        setChecked(false);
      })
      .catch(() => alert("Fehler beim Senden."));
  };

  return (
    <section className="section contact-section">
      <h1>Kontakt</h1>

      {/* 📍 Adres ve Sosyal Bilgiler */}
      <div className="contact-info">
        <p>
          📍 <strong>Adresse:</strong>{" "}
          <a
            href="https://maps.google.com/?q=Zeppelinstraße+75,+13583+Berlin"
            target="_blank"
            rel="noreferrer"
            className="map-link"
          >
            Zeppelinstraße 75, 13583 Berlin
          </a>
        </p>
        <p>
          📧 <strong>E-Mail:</strong>{" "}
          <a href="mailto:moebeltaxiumzug@gmail.com" className="mail-link">
            moebeltaxiumzug@gmail.com
          </a>
        </p>
        <p>
          📞 <strong>Telefon:</strong>{" "}
          <a href="tel:+4915771677034" className="phone-link">
            +49 1577 1677034
          </a>
        </p>
        <p>
          💬 <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/4915771677034"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-link"
          >
            Jetzt über WhatsApp schreiben
          </a>
        </p>
        <p>
          📷 <strong>Instagram:</strong>{" "}
          <a
            href="https://www.instagram.com/mobeltaxiumzug"
            target="_blank"
            rel="noreferrer"
          >
            @mobeltaxiumzug
          </a>
        </p>
      </div>

      {/* 🗺️ Canlı Google Haritası */}
      <div className="map-container">
        <iframe
          title="MöbelTaxi Umzug Berlin Standort"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.895904438589!2d13.184738577094033!3d52.53743827203902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85d8c7d7b3ddf%3A0x1d4e5de3e7e35b9!2sZeppelinstra%C3%9Fe%2075%2C%2013583%20Berlin%2C%20Almanya!5e0!3m2!1str!2str!4v1728307899827!5m2!1str!2str"
          width="100%"
          height="400"
          style={{
            border: 0,
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* 📬 İletişim Formu */}
      <h2 style={{ marginTop: "2rem" }}>Kontaktformular</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Vorname<input type="text" name="vorname" required /></label>
        <label>Nachname<input type="text" name="nachname" required /></label>
        <label>E-Mail *<input type="email" name="email" required /></label>
        <label>Telefonnummer *<input type="tel" name="telefonnummer" required /></label>
        <p>Wenn Sie einen Rückruf wünschen, bitte ausfüllen.</p>
        <label>Bitte wählen Sie eine Option *
          <select name="dienstleistung" required>
            <option value="">-- Bitte wählen --</option>
            <option>Umzüge</option><option>Möbeltransporte</option>
            <option>Entrümpelung</option><option>Montage</option>
            <option>Gartenarbeiten</option><option>Lieferung</option>
          </select>
        </label>
        <label>Wie viele Träger benötigen Sie? *<input type="number" name="traeger" required /></label>
        <label>Menge der Güter *<textarea name="menge" required></textarea></label>
        <label>Von welchem Stockwerk abholen? *<input type="text" name="abholstock" required /></label>
        <label>In welches Stockwerk liefern? *<input type="text" name="lieferstock" required /></label>
        <label>Gibt es einen Aufzug im Gebäude? *
          <select name="aufzug" required>
            <option value="">-- Bitte wählen --</option>
            <option>Ja</option><option>Nein</option>
          </select>
        </label>
        <label>Abholadresse *<textarea name="abholadresse" required></textarea></label>
        <label>Lieferadresse *<textarea name="lieferadresse" required></textarea></label>
        <label>Kommentar oder Nachricht *<textarea name="nachricht" required></textarea></label>

        <label className="checkbox-label highlighted-checkbox">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            required
          />
          Ich habe die{" "}
          <a
            href="/datenschutzerklaerung"
            target="_blank"
            rel="noreferrer"
          >
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme zu.
        </label>

        <button type="submit" className="cta-button">Absenden</button>
        {sent && (
          <p style={{ color: "green" }}>
            Nachricht erfolgreich gesendet ✅
          </p>
        )}
      </form>
    </section>
  );
}

// Footer
// Footer
function Footer() {
  return (
    <footer className="footer">
      {/* 1️⃣ Logo */}
      <div className="footer-section footer-logo-area">
        <img
          src="/logo.png"
          alt="MöbelTaxi Logo Footer"
          className="footer-logo"
        />

        {/* 🔗 Sosyal ikonlar (Instagram & Facebook) */}
        <div
          className="footer-social"
          style={{
            display: "flex",
            gap: "14px",
            marginTop: "10px",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* Instagram */}
          <a
            href="https://www.instagram.com/mobeltaxiumzug"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
            style={{ display: "inline-flex" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ color: "#E1306C" }}
            >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1CXApsKjjC/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            title="Facebook"
            style={{ display: "inline-flex" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ color: "#1877F2" }}
            >
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.01 3.66 9.17 8.44 9.93v-7.02H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.9h-2.32V22c4.78-.76 8.44-4.92 8.44-9.93z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* 2️⃣ Fragen Sie Uns */}
      <div className="footer-section footer-contact-invite">
        <h2 className="footer-heading">FRAGEN SIE UNS</h2>
        <p className="footer-text">
          Setzen Sie sich mit uns in Verbindung! Füllen Sie das Anfrageformular aus und lassen Sie sich ein individuelles und unverbindliches Angebot zukommen.
        </p>
        
      </div>

      {/* 3️⃣ Kontaktbilgiler */}
      <div className="footer-section footer-contact-info">
        <h2 className="footer-heading">KONTAKT</h2>
        <p><strong>Büro- & Sprechzeiten:</strong><br/>
        Mo. – Fr.: 8:00 – 22:00 Uhr<br/>
        Sa.: 9:00 – 20:00 Uhr</p>

        <p>
          📞 <strong>Telefon:</strong>{" "}
          <a href="tel:+4915771677034" className="footer-link">
            +49 1577 1677034
          </a>
        </p>

        <p>
          💬 <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/4915771677034"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            MöbelTaxi Whatsapp – Click & Chat (24/7)
          </a>
        </p>

        <p>🕒 <strong>24/7 Terminvergabe</strong></p>
      </div>

      {/* Telif hakkı */}
      <div className="footer-bottom">
        <p>&copy; 2025 MöbelTaxi Umzug. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}


function PrivacyPolicy() {
  return (
    <section className="section privacy-section">
      <h1>Datenschutzerklärung</h1>

      <p>
        Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen.
        Datenschutz hat einen besonders hohen Stellenwert für die
        Geschäftsleitung von <strong>MöbelTaxi Umzug Berlin</strong>. Eine
        Nutzung der Internetseiten von MöbelTaxi Umzug Berlin ist grundsätzlich
        ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene
        Person besondere Services unseres Unternehmens über unsere Internetseite
        in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung
        personenbezogener Daten erforderlich werden.
      </p>

      <p>
        Ist die Verarbeitung personenbezogener Daten erforderlich und besteht
        für eine solche Verarbeitung keine gesetzliche Grundlage, holen wir
        generell eine Einwilligung der betroffenen Person ein. Die Verarbeitung
        personenbezogener Daten, beispielsweise des Namens, der Anschrift,
        E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt
        stets im Einklang mit der Datenschutz-Grundverordnung (DS-GVO) und in
        Übereinstimmung mit den für MöbelTaxi Umzug Berlin geltenden
        landesspezifischen Datenschutzbestimmungen.
      </p>

      <p>
        Mittels dieser Datenschutzerklärung möchte unser Unternehmen die
        Öffentlichkeit über Art, Umfang und Zweck der von uns erhobenen,
        genutzten und verarbeiteten personenbezogenen Daten informieren. Ferner
        werden betroffene Personen mittels dieser Datenschutzerklärung über die
        ihnen zustehenden Rechte aufgeklärt.
      </p>

      <h2>1. Begriffsbestimmungen</h2>
      <p>
        Die Datenschutzerklärung von MöbelTaxi Umzug Berlin beruht auf den
        Begrifflichkeiten, die durch den Europäischen Richtlinien- und
        Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DS-GVO)
        verwendet wurden. Unsere Datenschutzerklärung soll sowohl für die
        Öffentlichkeit als auch für unsere Kunden und Geschäftspartner einfach
        lesbar und verständlich sein. Um dies zu gewährleisten, möchten wir
        vorab die verwendeten Begrifflichkeiten erläutern:
      </p>
      <ul>
        <li>
          <strong>a) personenbezogene Daten:</strong> Alle Informationen, die
          sich auf eine identifizierte oder identifizierbare natürliche Person
          beziehen.
        </li>
        <li>
          <strong>b) betroffene Person:</strong> Jede identifizierte oder
          identifizierbare natürliche Person, deren personenbezogene Daten
          verarbeitet werden.
        </li>
        <li>
          <strong>c) Verarbeitung:</strong> Jeder mit oder ohne Hilfe
          automatisierter Verfahren ausgeführte Vorgang im Zusammenhang mit
          personenbezogenen Daten.
        </li>
        <li>
          <strong>d) Verantwortlicher:</strong> Die natürliche oder juristische
          Person, Behörde, Einrichtung oder andere Stelle, die allein oder
          gemeinsam über die Zwecke und Mittel der Verarbeitung entscheidet.
        </li>
      </ul>

      <h2>2. Name und Anschrift des Verantwortlichen</h2>
      <p>
        <strong>MöbelTaxi Umzug Berlin</strong>
        <br />
        Zeppelinstraße 75<br />
        13583 Berlin<br />
        E-Mail: moebeltaxiumzug@gmail.com<br />
        Telefon: +49 1577 1677034
      </p>

      <h2>3. Erfassung von allgemeinen Daten und Informationen</h2>
      <p>
        Die Internetseite von MöbelTaxi Umzug Berlin erfasst mit jedem Aufruf
        durch eine betroffene Person oder ein automatisiertes System eine Reihe
        von allgemeinen Daten und Informationen. Diese allgemeinen Daten und
        Informationen werden in den Logfiles des Servers gespeichert. Erfasst
        werden können:
      </p>
      <ul>
        <li>Browsertyp und Version</li>
        <li>verwendetes Betriebssystem</li>
        <li>Internetseite, von der der Zugriff erfolgt (Referrer)</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>IP-Adresse</li>
        <li>Internet-Service-Provider des zugreifenden Systems</li>
      </ul>
      <p>
        Bei der Nutzung dieser allgemeinen Daten zieht MöbelTaxi Umzug Berlin
        keine Rückschlüsse auf die betroffene Person. Diese Informationen werden
        benötigt, um die Inhalte korrekt auszuliefern, die Funktionsfähigkeit zu
        gewährleisten und im Falle von Angriffen Strafverfolgungsbehörden die
        erforderlichen Informationen bereitzustellen.
      </p>

      <h2>4. Kontaktmöglichkeit über die Internetseite</h2>
      <p>
        Die Internetseite von MöbelTaxi Umzug Berlin enthält Angaben, die eine
        schnelle elektronische Kontaktaufnahme sowie eine unmittelbare
        Kommunikation mit uns ermöglichen. Sofern eine betroffene Person per
        E-Mail oder über ein Kontaktformular den Kontakt mit uns aufnimmt,
        werden die übermittelten personenbezogenen Daten automatisch gespeichert.
      </p>
      <p>
        Solche auf freiwilliger Basis übermittelten Daten werden zum Zwecke der
        Bearbeitung oder Kontaktaufnahme gespeichert. Eine Weitergabe dieser
        personenbezogenen Daten an Dritte erfolgt nicht.
      </p>

      <h2>5. Routinemäßige Löschung und Sperrung von personenbezogenen Daten</h2>
      <p>
        MöbelTaxi Umzug Berlin verarbeitet und speichert personenbezogene Daten
        nur für den Zeitraum, der zur Erreichung des Speicherungszwecks
        erforderlich ist, oder sofern dies durch Gesetze oder Vorschriften
        vorgesehen wurde. Nach Ablauf der Frist werden die entsprechenden Daten
        routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder
        Vertragsanbahnung erforderlich sind.
      </p>

      <h2>6. Rechte der betroffenen Person</h2>
      <ul>
        <li>Recht auf Auskunft über gespeicherte Daten</li>
        <li>Recht auf Berichtigung unrichtiger Daten</li>
        <li>Recht auf Löschung („Recht auf Vergessenwerden“)</li>
        <li>Recht auf Einschränkung der Verarbeitung</li>
        <li>Recht auf Datenübertragbarkeit</li>
        <li>Recht auf Widerspruch gegen die Verarbeitung</li>
      </ul>
      <p>
        Zur Geltendmachung dieser Rechte kann sich die betroffene Person
        jederzeit an uns wenden.
      </p>

      <h2>7. Datenschutzbestimmungen zu Einsatz und Verwendung von Google Maps</h2>
      <p>
        Auf dieser Webseite wird Google Maps API verwendet, um geographische
        Informationen visuell darzustellen. Bei der Nutzung von Google Maps
        werden von Google Daten über die Nutzung der Kartenfunktionen durch
        Besucher erhoben, verarbeitet und genutzt. Nähere Informationen über die
        Datenverarbeitung durch Google können den Datenschutzhinweisen von
        Google entnommen werden:{" "}
        <a
          href="https://www.google.com/intl/de_de/help/terms_maps.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.google.com/intl/de_de/help/terms_maps.html
        </a>
      </p>

      <h2>8. Rechtsgrundlage der Verarbeitung</h2>
      <p>
        Art. 6 Abs. 1 lit. a DS-GVO dient MöbelTaxi Umzug Berlin als
        Rechtsgrundlage für Verarbeitungsvorgänge, bei denen eine Einwilligung
        eingeholt wird. Ist die Verarbeitung zur Erfüllung eines Vertrags
        erforderlich, basiert sie auf Art. 6 Abs. 1 lit. b DS-GVO.
      </p>

      <h2>9. Dauer der Speicherung personenbezogener Daten</h2>
      <p>
        Das Kriterium für die Dauer der Speicherung personenbezogener Daten ist
        die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf dieser Frist
        werden die entsprechenden Daten gelöscht, sofern sie nicht mehr zur
        Vertragserfüllung erforderlich sind.
      </p>

      <h2>10. Sicherheit der Verarbeitung</h2>
      <p>
        MöbelTaxi Umzug Berlin hat technische und organisatorische Maßnahmen
        getroffen, um einen möglichst lückenlosen Schutz der über diese
        Internetseite verarbeiteten personenbezogenen Daten sicherzustellen.
        Dennoch können internetbasierte Datenübertragungen grundsätzlich
        Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht
        gewährleistet werden kann.
      </p>

      <h2>11. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        MöbelTaxi Umzug Berlin behält sich vor, diese Datenschutzerklärung bei
        Bedarf anzupassen, um sie stets den aktuellen rechtlichen Anforderungen
        oder Änderungen unserer Dienstleistungen anzupassen. Für Ihren erneuten
        Besuch gilt dann die neue Datenschutzerklärung.
      </p>

      <p>
        <strong>Stand:</strong> Oktober 2025 <br />
        <strong>Verantwortlich:</strong> MöbelTaxi Umzug Berlin, Zeppelinstraße
        75, 13583 Berlin
      </p>
    </section>
  );
}

export default App;