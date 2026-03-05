---
sidebar_position: 8
title: Recolecciones
---

# Recolecciones

Ruta en Turboship Web: `/admin/pickups`

Recolecciones organiza solicitudes por negocio, proveedor y estatus para
coordinar rutas y ventanas de atención de forma más predecible.

Esto ayuda a reducir incumplimientos, mejorar tiempos de respuesta y
mantener una experiencia consistente para clientes y operadores.

## Qué puedes hacer aquí

- Visualizar solicitudes por estado (`Pendientes`, `Aprobadas/Confirmadas`,
  `Rechazadas/Canceladas`).
- Identificar qué negocio y proveedor requiere atención inmediata.
- Revisar fechas de servicio y datos operativos de cada solicitud.
- Confirmar o rechazar solicitudes según capacidad y reglas.
- Monitorear trazabilidad de decisiones en la misma pantalla.

## Prerrequisitos

- Usuario con permisos de administración.
- Acceso al módulo `/admin/pickups`.
- Negocios con recolección habilitada y solicitudes cargadas.

## Recorrido de interfaz

1. Pestañas de estatus para gestión por cola operativa.
2. Filtros y búsqueda para localizar solicitudes específicas.
3. Tabla con negocio, proveedor, ventana y estatus.
4. Acciones por fila para confirmar o rechazar.
5. Elementos de contexto para priorizar casos críticos.

## Flujo recomendado de uso

1. Inicia en `Pendientes` para priorizar solicitudes abiertas.
2. Confirma disponibilidad de proveedor y fecha comprometida.
3. Aprueba/confirmar cuando la operación pueda ejecutarse.
4. Rechaza/cancela cuando no cumpla condiciones operativas.
5. Revisa `Aprobadas/Confirmadas` y `Rechazadas/Canceladas` para cierre.

## Capturas de referencia

### Solicitudes pendientes

![Recolecciones pendientes](/img/plataforma/administrador/recolecciones/recolecciones-01-pendientes.png)

### Solicitudes aprobadas o confirmadas

![Recolecciones aprobadas](/img/plataforma/administrador/recolecciones/recolecciones-02-aprobadas-confirmadas.png)

### Solicitudes rechazadas o canceladas

![Recolecciones rechazadas](/img/plataforma/administrador/recolecciones/recolecciones-03-rechazadas-canceladas.png)

## Buenas prácticas

- Confirma ventanas y capacidad antes de aprobar en lote.
- Mantén razones de rechazo claras para soporte y negocio.
- Monitorea pendientes diariamente para evitar acumulaciones.
