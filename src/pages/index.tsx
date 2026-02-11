import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const sections = [
  {
    title: 'Manual de Uso',
    description:
      'Guia practica para operar la plataforma con claridad y eficiencia.',
    to: '/docs/plataforma/introduccion',
    action: 'Ver manual',
  },
  {
    title: 'Documentacion de Integraciones',
    description:
      'Requisitos y pasos para habilitar integraciones de forma segura.',
    to: '/docs/integraciones/mercadopago',
    action: 'Ver integraciones',
  },
  {
    title: 'Novedades de Producto',
    description:
      'Actualizaciones oficiales sobre mejoras y cambios relevantes para su operacion.',
    to: '/newsletter',
    action: 'Ver newsletter',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title='Inicio'
      description='Portal de carriers Turboship con documentacion y newsletter de producto.'>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroBackdrop} aria-hidden='true' />
          <div className='container'>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>Portal oficial para carriers de Turboship</p>
              <Heading as='h1' className={styles.heroTitle}>
                Turboship Carriers
              </Heading>
              <p className={styles.heroSubtitle}>
                Su centro de operacion para carriers: documentacion, integraciones y novedades de producto.
              </p>
              <div className={styles.heroActions}>
                <Link className='button button--primary button--lg' to='/docs/intro'>
                  Ir a documentacion
                </Link>
                <Link className='button button--secondary button--lg' to='/newsletter'>
                  Ver Newsletter
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sections}>
          <div className='container'>
            <div className={styles.cardGrid}>
              {sections.map((section) => (
                <article className={styles.infoCard} key={section.title}>
                  <Heading as='h2' className={styles.cardTitle}>
                    {section.title}
                  </Heading>
                  <p className={styles.cardDescription}>{section.description}</p>
                  <Link className={styles.cardLink} to={section.to}>
                    {section.action}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
