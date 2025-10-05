import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
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
        </Routes>
        <Footer />
      </div>
    </Router>
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

// Home page
function Home() {
  return <Hero />;
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
        <Link to="/kontakt" className="cta-button">
          Jetzt Kontakt Aufnehmen
        </Link>
        <p className="phone-display">
          <a href="tel:+4915771677034" style={{color:"#fff", textDecoration:"none", fontSize:"1.2rem", fontWeight:"bold"}}>
            📞
            <span style={{animation: "blink 1s infinite", color:"#ffd32a", marginLeft:"0.5rem"}}>📱</span>
            +49 1577 1677034
          </a>
        </p>
      </div>
    </section>
  );
}

// Dienstleistungen sayfası
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

// FAQ sayfası
function FAQPage() {
  return (
    <section className="section faq-section">
      <h1 className="faq-heading">Häufig gestellte Fragen</h1>
      <div className="faq-item fade-in">
        <h2>1. Was für Transportdienstleistungen bietet Ihr Unternehmen an?</h2>
        <p>MöbelTaxi bietet eine Vielzahl von Transportdienstleistungen in Berlin an, einschließlich Möbeltransporte, Büroumzüge, Transport und Entsorgung von Sperrgut.
Was kostet ein Möbeltransport mit MöbelTaxi in Berlin?
Die Kosten werden individuell pro Auftrag berechnet. Nach Ihrer Anfrage erhalten Sie umgehend ein individuelles Angebot.</p>
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

// Über Uns sayfası
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

// Blog liste sayfası
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

// Referenzen sayfası
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

// Blog detay sayfası
function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find((b) => b.id === parseInt(id));
  if (!blog) return <p>Blog nicht gefunden</p>;
  return (
    <section className="section blog-detail-section">
      <button className="back-button" onClick={() => navigate("/blog")}>
        ← Zurück zur Übersicht
      </button>
      <h1 className="faq-heading">{blog.title}</h1>
      <img src={blog.image} className="blog-img" alt={blog.title} />
      <p>{blog.content}</p>
      <p className="hashtags">{blog.hashtags}</p>
    </section>
  );
}

// Kontakt sayfası
function Contact() {
  return (
    <section className="section">
      <h1>Kontakt & Standort</h1>
      <div className="contact-info">
        <p><strong>📍 Adresse:</strong> Zeppelinstraße 75, 13583 Berlin</p>
        <p><strong>📧 E-Mail:</strong> <a href="mailto:moebeltaxiumzug@gmail.com">moebeltaxiumzug@gmail.com</a></p>
        <p><strong>📞 Telefon/ Whatsapp:</strong> <a href="tel:+4915771677034">+49 1577 1677034</a></p>
        <p><strong>📷 Instagram:</strong> <a href="https://instagram.com/mobeltaxiumzug" target="_blank" rel="noreferrer">@mobeltaxiumzug</a></p>
      </div>
      <div style={{ height: "2rem" }}></div>
      <div className="map-container">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.5807414939085!2d13.191869376477303!3d52.55013347200782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851db189e411d%3A0x85b3c1ea83fe33a9!2sZeppelinstra%C3%9Fe%2075%2C%2013583%20Berlin%2C%20Germany!5e0!3m2!1str!2str!4v1696069698439!5m2!1str!2str"
          width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"
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