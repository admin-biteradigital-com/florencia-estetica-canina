import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navbar Minimalista */}
      <nav className={`${styles.nav} glass`}>
        <div className="container">
          <div className={styles.navContent}>
            <span className={styles.logo}>Florencia.</span>
            <div className={styles.navLinks}>
              <a href="#about">Sobre Mí</a>
              <a href="#portfolio">Mis Clientes</a>
              <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={`${styles.heroContent} animate-fade-in`}>
            <h1>
              Estética Canina con <br />
              <span className="gradient-text">Pasión y Amor</span>
            </h1>
            <p>
              Soy Florencia Papasso, Auxiliar Veterinaria. Transformo la rutina de higiene de tus perritos en un momento de juego, diversión y mucho cuidado.
            </p>
            <div className={styles.heroActions}>
              <a href="#contact" className="btn btn-primary">Agendar Turno</a>
              <a href="#portfolio" className="btn btn-secondary">Ver mis cortes</a>
            </div>
          </div>
          <div className={`${styles.heroImageContainer} animate-float`}>
            <div className={styles.blob}></div>
            {/* Note: User must provide a photo of themselves or a main dog photo here */}
            <div className={`${styles.heroImageWrapper} glass`}>
              <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--secondary)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
                <Image src="/hero.png" alt="Florencia Estética Canina" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / CV Section */}
      <section id="about" className={styles.about}>
        <div className="container">
          <div className={`${styles.aboutCard} card`}>
            <h2>Sobre Mi Formación</h2>
            <div className={styles.cvGrid}>
              <div className={styles.cvInfo}>
                <h3 className="gradient-text">Auxiliar Veterinario & Peluquera Canina Senior</h3>
                <p>
                  Especialización en estética canina con más de 9 años de experiencia en el sector.
                  Transformo la rutina de higiene de tus perritos en un momento de juego, diversión y mucho cuidado.
                </p>
                <div className={styles.experienceSection} style={{ marginTop: '2rem' }}>
                  <h4>Experiencia Destacada</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                    <li><strong>Veterinaria Laika (2024 - Presente):</strong> Peluquera Canina Senior. Estética de alto nivel con especialización en razas y referente técnica del área de grooming.</li>
                    <li><strong>Veterinaria Cavia - La Tahona (2022 - 2024):</strong> Peluquera Canina & Auxiliar. Servicios completos de peluquería, asistencia veterinaria en clínica y ventas.</li>
                    <li><strong>Perro Berro (2017 - 2022):</strong> Encargada de Peluquería Canina y Petshop. Gestión integral, coordinación de agenda y atención al cliente.</li>
                  </ul>
                </div>

                <div className={styles.educationSection} style={{ marginTop: '2rem' }}>
                  <h4>Formación</h4>
                  <ul className={styles.skillsList}>
                    <li>✓ Técnico Asistente Veterinario (UDE)</li>
                    <li>✓ Peluquería Canina & Especialización</li>
                    <li>✓ Seminario Comportamiento Animal</li>
                    <li>✓ Primeros Auxilios en Animales</li>
                    <li>✓ Licenciatura en Letras (UdelaR)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={styles.portfolio}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Mis <span className="gradient-text">Clientes Estrellas</span></h2>
            <p>Un poco de mi trabajo diario llenando de estilo a mis amigos de cuatro patas.</p>
          </div>

          <div className={styles.galleryGrid}>
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className={`${styles.galleryItem} card`}>
                <div className={styles.imagePlaceholder}>
                  <Image src={`/images/dog${num}.jpeg`} alt={`Corte canino ${num}`} width={300} height={300} style={{ objectFit: 'cover' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className="container">
          <div className={`${styles.contactWrapper} glass`}>
            <div className={styles.contactInfo}>
              <h2>Hablemos de tu perrito</h2>
              <p>¿Listo para un cambio de look inolvidable? Escríbeme y agendemos.</p>

              <div className={styles.contactLinks}>
                <a href="https://wa.me/59891209824" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <div className={styles.iconBox}>📱</div>
                  <div>
                    <strong>WhatsApp / Teléfono</strong>
                    <span>091 209 824</span>
                  </div>
                </a>

                <a href="mailto:flopapasso@gmail.com" className={styles.contactItem}>
                  <div className={styles.iconBox}>✉️</div>
                  <div>
                    <strong>Email</strong>
                    <span>flopapasso@gmail.com</span>
                  </div>
                </a>

                <a href="https://maps.app.goo.gl/DajyB2fFstnrvFXq5" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <div className={styles.iconBox}>📍</div>
                  <div>
                    <strong>Ubicación</strong>
                    <span>Buzon del Tiempo esq. Gilda Meir<br />Lomas de Solymar, Canelones</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <p>© {new Date().getFullYear()} Florencia Papasso - Estética Canina. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
