import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const sections = [
  {
    title: 'Guias por integracion',
    description:
      'Documentacion operativa para activar integraciones y mantener flujos de cobro, envio y notificaciones.',
    to: '/docs/integraciones/mercadopago',
    action: 'Ver integraciones',
  },
  {
    title: 'Base de conocimiento',
    description:
      'Estructura central de la plataforma para carriers y white labels. Cada guia se publica por modulo.',
    to: '/docs/plataforma/introduccion',
    action: 'Abrir plataforma',
  },
  {
    title: 'Product changelog',
    description:
      'Newsletter con mejoras, cambios operativos y actualizaciones del portal para clientes carriers.',
    to: '/newsletter',
    action: 'Ir al newsletter',
  },
];

const quickLinks = [
  {label: 'Empezar por introduccion', to: '/docs/intro'},
  {label: 'Ver seccion plataforma', to: '/docs/plataforma/introduccion'},
  {label: 'Consultar Mercado Pago', to: '/docs/integraciones/mercadopago'},
  {label: 'Revisar changelog', to: '/newsletter'},
];

const carriers = [
  {name: 'DHL', src: '/img/carriers/dhl.svg'},
  {name: 'Estafeta', src: '/img/carriers/estafeta.svg'},
  {name: 'FedEx', src: '/img/carriers/fedex.svg'},
  {name: 'UPS', src: '/img/carriers/ups.svg'},
  {name: 'Paquetexpress', src: '/img/carriers/paquetexpress.svg'},
  {name: 'JT Express', src: '/img/carriers/jtexpress.svg'},
  {name: 'Entrega', src: '/img/carriers/entrega.svg'},
  {name: 'iMile', src: '/img/carriers/imile.svg'},
];

export default function Home(): ReactNode {
  return (
    <Layout
      title='Inicio'
      description='Portal de carriers Turboship con documentacion y changelog de producto.'>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroBackdrop} aria-hidden='true' />
          <div className='container'>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>Portal oficial para carriers de Turboship</p>
              <Heading as='h1' className={styles.heroTitle}>
                Documentacion breve y util para operar tu plataforma white label.
              </Heading>
              <p className={styles.heroSubtitle}>
                Este portal concentra guias, changelog y recursos para carriers que operan Turboship.
                El enfoque es simple: resolver tareas rapido y mantener visibilidad de cambios.
              </p>
              <div className={styles.heroActions}>
                <Link className='button button--primary button--lg' to='/docs/intro'>
                  Ir a documentacion
                </Link>
                <Link className='button button--secondary button--lg' to='/newsletter'>
                  Ver changelog
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

        <section className={styles.carriers}>
          <div className='container'>
            <div className={styles.carrierHeader}>
              <Heading as='h2' className={styles.carrierTitle}>
                Carrier ecosystem
              </Heading>
              <p className={styles.carrierSubtitle}>
                El portal evoluciona para documentar integraciones y mejores practicas por proveedor.
              </p>
            </div>
            <ul className={styles.carrierGrid}>
              {carriers.map((carrier) => (
                <li className={styles.carrierItem} key={carrier.name}>
                  <img src={carrier.src} alt={`Logo ${carrier.name}`} loading='lazy' />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.quickStart}>
          <div className='container'>
            <div className={styles.quickStartCard}>
              <Heading as='h2' className={styles.quickStartTitle}>
                Atajos de navegacion
              </Heading>
              <ul className={styles.quickStartList}>
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
