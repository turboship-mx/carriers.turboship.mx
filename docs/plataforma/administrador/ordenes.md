---
sidebar_position: 5
title: Órdenes
---

# Órdenes

Ruta en Turboship Web: `/admin/orders`

Órdenes centraliza el estado comercial-operativo de cada pedido y permite
pasar rápido de un identificador (`orderId` o guía) a la ejecución.

## Qué puedes hacer aquí

- Cambiar entre pestañas: `Todas`, `Pendientes`, `Envíadas`.
- Buscar por `Número de orden o rastreo`.
- Revisar contexto por fila: negocio, origen/destino, dimensiones y peso.
- Validar estatus de envío:
  - `Pendiente` cuando no existe guía.
  - `Guía Generada` cuando ya existe embarque.
- Abrir `Ver Orden` para ir al detalle operativo del pedido.
- Desde el menú de acciones, abrir rastreo externo y accesos rápidos del
  negocio relacionado.

## Prerrequisitos

- Usuario con permisos de administrador.
- Acceso al módulo de órdenes (`/admin/orders`).
- Identificador de orden o tracking cuando quieras hacer búsqueda puntual.

## Recorrido de interfaz

1. Barra superior de pestañas para segmentar el backlog.
2. Buscador para localizar pedido por `orderId` o guía.
3. Tabla con columnas `Orden`, `Dirección`, `Paquete` y `Estatus`.
4. Acción `Ver Orden` para abrir el pedido en nueva pestaña.
5. Menú contextual por fila para rastreo y navegación administrativa.

## Flujo recomendado de uso

1. Inicia en `Pendientes` para detectar pedidos sin guía.
2. Busca por identificador cuando soporte o cliente reporten un caso puntual.
3. En cada fila, valida primero dirección y dimensiones para detectar errores
   de captura antes de cotizar/reexpedir.
4. Pasa a `Envíadas` para confirmar generación de guía y número de rastreo.
5. Si hay incidencia, abre `Ver Orden` y gestiona desde el detalle del negocio.

## Capturas de referencia

### Vista de todas las órdenes

![Órdenes todas](/img/plataforma/administrador/ordenes/ordenes-01-todas.png)

### Vista de pendientes

![Órdenes pendientes](/img/plataforma/administrador/ordenes/ordenes-02-pendientes.png)

### Vista de enviadas

![Órdenes enviadas](/img/plataforma/administrador/ordenes/ordenes-03-enviadas.png)

## Buenas prácticas

- Usa la pestaña `Pendientes` como tablero diario de liberación.
- Evita depender solo del nombre del negocio; trabaja con `orderId` o guía para
  precisión operativa.
- Antes de escalar un problema de entrega, confirma que la orden tenga guía y
  carrier correcto.
