---
slug: newsletter-abril-2026
title: 'Newsletter Abril 2026'
authors: [equipo-turboship]
---

Abril fue un mes enfocado en operaciones masivas y en profundizar nuestras integraciones. Ampliamos PaqueteExpress con soporte multi-pieza y rastreo end-to-end, lanzamos descarga masiva de guías, avanzamos en la integración con Kommo CRM y aceleramos significativamente la búsqueda de envíos en el panel de administración.

<!-- truncate -->

## Lo más importante de abril

### PaqueteExpress: multi-pieza, rastreo y mejoras de guía

Reforzamos la integración con PaqueteExpress en varios frentes. Ahora puedes cotizar y generar guías para envíos de varias piezas, dar seguimiento end-to-end al envío desde la plataforma, y las guías se imprimen en formato 4x6 con el nombre y notas del destinatario incluidos como referencia.

**Cómo te impacta:**
- Cotización y generación de guías multi-pieza con PaqueteExpress.
- Rastreo del envío disponible directamente desde el panel.
- Guías con mejor formato e información del destinatario para facilitar la entrega.

### Descarga masiva de guías

Lanzamos la opción de **Descargar Guías Masivas** desde la sección de envíos. Además, agregamos soporte para guías replicadas: cuando un negocio tiene configurado un multiplicador de réplicas de etiquetas, las guías relacionadas se agrupan mediante un nuevo modelo interno (OrderLink) y se descargan juntas en un solo PDF.

**Cómo te impacta:**
- Descarga de múltiples guías en una sola acción, sin abrirlas una por una.
- Las guías replicadas de un mismo pedido se entregan agrupadas.
- Menos clicks y tiempo en la operación diaria de embarque.

### Kommo CRM: campos de lead poblados desde el envío

La integración con Kommo CRM ahora rellena automáticamente los campos personalizados del lead con datos del envío al momento de generar la guía. Esto cierra el ciclo entre operación de envíos y seguimiento comercial.

Kommo CRM está disponible pero requiere activación individual por cliente durante esta fase temprana. Si te interesa habilitarlo para alguno de tus negocios, contacta a soporte.

**Cómo te impacta:**
- Tus leads en Kommo se enriquecen automáticamente con la información de cada envío.
- Tu equipo comercial tiene contexto poscompra sin trabajo manual adicional.
- Menos fricción entre la operación logística y el seguimiento al cliente.

### Mejoras en órdenes y catálogos

Hicimos varios ajustes para que el flujo de captura y gestión de órdenes sea más ágil:

- **Cantidad por pieza:** las órdenes ahora soportan un campo de cantidad por ítem, visible en la tabla de piezas del envío.
- **Búsqueda de remitentes y destinatarios en servidor:** los selectores ahora buscan en servidor por código postal, estado y ciudad, sin limitarse a los primeros resultados.
- **Detección automática de delimitador en CSV:** la carga masiva de órdenes detecta automáticamente si tu archivo usa coma, punto y coma u otro separador.

**Cómo te impacta:**
- Capturas órdenes con más detalle por ítem.
- Encuentras remitentes y destinatarios guardados aunque tengas catálogos extensos.
- Menos errores al subir órdenes desde Excel u otros sistemas.

### Búsqueda de envíos más rápida en el panel de administración

Optimizamos la búsqueda de envíos del panel de administración para que los resultados aparezcan mucho más rápido, incluso al trabajar con grandes volúmenes de información.

**Cómo te impacta:**
- Resultados visiblemente más rápidos al buscar envíos.
- Mejor experiencia del equipo de operaciones y soporte al consultar grandes volúmenes.

### Filtros y exportación enriquecida en envíos

Agregamos combo box para filtrar envíos por **paquetería** y por **estado de rastreo** desde la página de envíos. Adicionalmente, las exportaciones CSV ahora incluyen la columna de **URL de rastreo de la paquetería**, lista para compartir con clientes finales.

**Cómo te impacta:**
- Encuentras envíos por estado y proveedor con un par de clicks.
- Tus exportaciones ya traen el enlace de rastreo listo para usar.

### Estafeta APIMPro: nuevo proveedor directo con soporte LTL

Sumamos **Estafeta APIMPro** como nuevo proveedor directo en Turboship, conectado a la versión más reciente del API de Estafeta. Durante abril terminamos de estabilizar la integración para operación productiva, incluyendo cotización y generación de guías para envíos **LTL** (carga consolidada), además de validaciones claras y mensajes de error en español cuando los datos del envío no cumplen los límites del proveedor.

**Cómo te impacta:**
- Acceso a la última versión del API de Estafeta como proveedor directo.
- Cotización y generación de guías LTL con Estafeta desde la plataforma.
- Menos guías rechazadas y errores comprensibles cuando hay datos por corregir.

### MBE: guías multi-pieza en un solo PDF

Para envíos multi-pieza vía Mail Boxes Etc. (MBE), ahora consolidamos todas las etiquetas de las piezas en un único PDF. Antes se generaban archivos separados por pieza.

**Cómo te impacta:**
- Una sola impresión por envío multi-pieza.
- Menos manipulación de archivos al preparar embarques.

### Administración de usuarios admin desde Configuración

Ya puedes agregar y eliminar usuarios administradores directamente desde la sección de Configuración, sin necesidad de involucrar a soporte. La eliminación pide confirmación explícita para evitar borrados accidentales.

**Cómo te impacta:**
- Gestionas tu equipo administrador de forma autónoma.
- Control directo sobre quién tiene acceso al panel.

### Estabilidad y diagnóstico

Sumamos un botón de vista previa de logs en formato JSON en la página de cotizaciones del admin para facilitar el diagnóstico de cotizaciones con comportamiento inesperado. También resolvimos el caso de guías cifradas que no se incluían correctamente en las descargas masivas: ahora se rasterizan e integran sin perder información.

**Cómo te impacta:**
- Soporte puede diagnosticar cotizaciones más rápido cuando algo no cuadra.
- Las descargas masivas funcionan también para guías con cifrado del proveedor.

## Objetivos de mayo

En mayo estamos enfocados en:
- Lanzar **tarifas de servicio por defecto** configurables desde administración, que se sembrarán automáticamente en los negocios nuevos.
- Ampliar la cobertura de Kommo CRM y reducir los pasos necesarios para activarlo por cliente.
- Continuar puliendo las operaciones masivas (descarga de guías, carga de órdenes) con base en lo aprendido en abril.

## Cierre

Abril dejó la plataforma más rápida, con operaciones masivas más completas y con integraciones más profundas. Gracias por seguir construyendo con nosotros.
