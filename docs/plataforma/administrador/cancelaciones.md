---
sidebar_position: 10
title: Cancelaciones
---

# Cancelaciones

Ruta en Turboship Web: `/admin/cancellations`

Cancelaciones estandariza la atención de solicitudes con vistas por
estatus (pendiente, aprobada y rechazada) y opciones de procesamiento
masivo.

Su enfoque es reducir fricción operativa y dar respuesta más rápida ante
excepciones que impactan costos y satisfacción del cliente.

## Qué puedes hacer aquí

- Revisar solicitudes en pestañas por estatus operativo.
- Aplicar filtros de búsqueda por guía, negocio o usuario.
- Validar contexto de la solicitud antes de decidir.
- Aprobar o rechazar solicitudes de forma individual.
- Ejecutar acciones masivas cuando hay picos operativos.

## Prerrequisitos

- Usuario con permisos de administración.
- Acceso al módulo `/admin/cancellations`.
- Solicitudes de cancelación disponibles para análisis.

## Recorrido de interfaz

1. Pestañas por estado: `Pendientes`, `Aprobadas`, `Rechazadas`.
2. Barra de búsqueda para reducir la lista de trabajo.
3. Tabla con datos clave de solicitud, guía y negocio.
4. Acciones por fila para aprobar/rechazar y resolver casos.
5. Controles de procesamiento masivo para cierres por lote.

## Flujo recomendado de uso

1. Inicia por `Pendientes` y ordena por antigüedad/prioridad.
2. Revisa guía y contexto del negocio antes de resolver.
3. Si procede, aprueba y confirma el cambio de estatus.
4. Si no procede, rechaza con criterio uniforme y trazable.
5. Cierra el ciclo validando en pestañas `Aprobadas`/`Rechazadas`.

## Capturas de referencia

### Solicitudes pendientes

![Cancelaciones pendientes](/img/plataforma/administrador/cancelaciones/cancelaciones-01-pendientes.png)

### Solicitudes aprobadas

![Cancelaciones aprobadas](/img/plataforma/administrador/cancelaciones/cancelaciones-02-aprobadas.png)

### Solicitudes rechazadas

![Cancelaciones rechazadas](/img/plataforma/administrador/cancelaciones/cancelaciones-03-rechazadas.png)

## Buenas prácticas

- Define criterios homogéneos para aprobación y rechazo.
- Evita procesar en lote sin validar casos atípicos.
- Da seguimiento diario a pendientes para no acumular rezagos.
