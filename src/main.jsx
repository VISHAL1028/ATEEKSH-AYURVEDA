import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Check, ChevronDown, Leaf, Menu, Sprout, X } from 'lucide-react'
import './styles.css'

const expertise = [
  'Herbal Immunomodulators',
  'Rasayana & Herbal Tonics',
  'Nutraceuticals',
  'Pain Management Remedies',
  'Hair Care & Herbal Remedies',
  'Skin Care & Herbal Remedies',
  'Traditional Ayurvedic Wellness Formulations',
]

const products = [
  { name: 'Rudraprash', label: 'Classical wellness', tone: 'forest', mark: 'R' },
  { name: 'Brahma Rasayan', label: 'Traditional rasayana', tone: 'gold', mark: 'B' },
  { name: 'Pain Oil', label: 'Herbal external care', tone: 'earth', mark: 'P' },
  { name: 'Amalaki Powder', label: 'Single-herb essential', tone: 'sage', mark: 'A' },
]

function BotanicalMark({ small = false }) {
  return (
    <span className={`botanical-mark ${small ? 'small' : ''}`} aria-hidden="true">
      <span className="stem" />
      <span className="leaf leaf-a" />
      <span className="leaf leaf-b" />
      <span className="leaf leaf-c" />
      <span className="leaf leaf-d" />
    </span>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className={scrolled ? 'scrolled' : ''}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Ateeksh Ayurveda home">
          <BotanicalMark small />
          <span><b>ATEEKSH</b><em>AYURVEDA</em></span>
        </a>
        <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#expertise" onClick={closeMenu}>Expertise</a>
          <a href="#products" onClick={closeMenu}>Products</a>
          <a href="#wellness" onClick={closeMenu}>Panchakarma</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Connect with us <ArrowRight size={15} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-copy reveal">
          <div className="eyebrow"><span /> ESTABLISHED 2018</div>
          <h1>Wellness, rooted<br />in <i>tradition.</i></h1>
          <p>Bringing classical Ayurvedic wisdom and contemporary herbal research together—for thoughtful, natural wellbeing.</p>
          <div className="hero-actions">
            <a className="button primary" href="#expertise">Explore our work <ArrowRight size={18} /></a>
            <a className="text-link" href="#about">Our philosophy <span>↘</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Botanical illustration">
          <div className="sun-disc" />
          <div className="arch"><BotanicalMark /></div>
          <div className="annotation note-one">Traditional<br /><b>knowledge</b></div>
          <div className="annotation note-two">Conscious<br /><b>formulation</b></div>
        </div>
        <a className="scroll-cue" href="#about">Discover <ChevronDown size={16} /></a>
      </section>

      <section className="intro section" id="about">
        <div className="section-index">01 / ABOUT</div>
        <div className="intro-main">
          <p className="kicker">Rooted in Ayurveda. Shaped for today.</p>
          <h2>We believe ancient insight and modern thinking can grow <i>beautifully together.</i></h2>
        </div>
        <div className="intro-side">
          <p>Ateeksh Ayurveda works across marketing, consulting, research and development in herbal remedies and Ayurveda. We connect the journey from medicinal herb cultivation to considered formulation and wellness.</p>
          <div className="signatures">
            <span>Developed in consultation with</span>
            <b>Vaidya H. P. Sharma</b>
            <b>Vaidya Dilip Trivedi</b>
          </div>
        </div>
      </section>

      <section className="expertise section" id="expertise">
        <div className="section-heading">
          <div><div className="section-index light">02 / OUR EXPERTISE</div><h2>Nature-led.<br /><i>Research-minded.</i></h2></div>
          <p>Focused areas of formulation and development, guided by experienced Ayurvedic physicians and experts.</p>
        </div>
        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <article className="expertise-item" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item}</h3>
              <Leaf size={20} strokeWidth={1.5} />
            </article>
          ))}
        </div>
      </section>

      <section className="products section" id="products">
        <div className="products-top">
          <div><div className="section-index">03 / KEY PRODUCTS</div><h2>Herbal essentials,<br /><i>thoughtfully made.</i></h2></div>
          <p>A focused collection grounded in time-honoured Ayurvedic traditions and attentive sourcing.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div className={`product-visual ${product.tone}`}>
                <div className="product-sun" />
                <div className="bottle"><span className="bottle-cap" /><b>{product.mark}</b><small>ATEEKSH<br />AYURVEDA</small></div>
                <span className="product-count">0{index + 1}</span>
              </div>
              <div className="product-meta"><span>{product.label}</span><h3>{product.name}</h3></div>
            </article>
          ))}
        </div>
      </section>

      <section className="wellness section" id="wellness">
        <div className="wellness-visual">
          <div className="water-rings"><span /><span /><span /></div>
          <BotanicalMark />
          <div className="floating-leaf leaf-float-a" />
          <div className="floating-leaf leaf-float-b" />
        </div>
        <div className="wellness-copy">
          <div className="section-index">04 / AYURVEDIC WELLNESS</div>
          <p className="kicker">Restore your natural rhythm</p>
          <h2>Panchakarma,<br /><i>with considered care.</i></h2>
          <p>Traditional Ayurvedic wellness therapies based on classical principles, offered through supervised professional care in a calm and supportive setting.</p>
          <a className="button dark" href="#contact">Enquire about wellness <ArrowRight size={18} /></a>
        </div>
      </section>

      <section className="approach section">
        <div className="section-index">05 / OUR APPROACH</div>
        <div className="approach-line">
          {['Cultivation', 'Sourcing', 'Research', 'Formulation'].map((step, i) => (
            <React.Fragment key={step}>
              <div className="approach-step"><span>{i + 1}</span><b>{step}</b></div>
              {i < 3 && <ArrowRight size={18} />}
            </React.Fragment>
          ))}
        </div>
        <div className="approach-copy">
          <h2>From the soil<br />to <i>wellbeing.</i></h2>
          <p>Our integrated approach brings together quality raw materials, sustainable herbal practices, research, consulting and marketing—while respecting the classical foundations of Ayurveda.</p>
          <ul>
            <li><Check size={16} /> Attentive ingredient sourcing</li>
            <li><Check size={16} /> Expert-led development</li>
            <li><Check size={16} /> Contemporary consumer needs</li>
          </ul>
        </div>
      </section>

      <section className="contact section" id="contact">
        <Sprout size={32} strokeWidth={1.2} />
        <p className="kicker">Let’s grow something meaningful</p>
        <h2>Interested in our herbal products,<br />research or <i>Ayurvedic wellness?</i></h2>
        <a className="button cream" href="mailto:hello@ateekshayurveda.com">Start a conversation <ArrowRight size={18} /></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><BotanicalMark small /><span><b>ATEEKSH</b><em>AYURVEDA</em></span></a>
        <p>Traditional Wisdom • Herbal Research • Natural Wellness</p>
        <div className="footer-links"><a href="#about">About</a><a href="#products">Products</a><a href="#wellness">Wellness</a></div>
        <small>© {new Date().getFullYear()} Ateeksh Ayurveda. All rights reserved.</small>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
