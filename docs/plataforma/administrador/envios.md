---
sidebar_position: 7
title: Envíos
---

# Envíos

Ruta en Turboship Web: `/admin/shipments`

Envíos es el módulo principal para monitoreo, filtrado masivo y control de
estatus logístico por guía.

## Qué puedes hacer aquí

- Filtrar por rango de fechas, negocio, tracking status, paquetería,
  proveedor y estado de la orden.
- Buscar por número de guía, orden o identificadores de origen.
- Actualizar estatus de rastreo en bloque (`Actualizar Rastreo`).
- Exportar resultados a CSV (`Exportar CSV`) con base en filtros aplicados.
- Revisar costo real vs cobrado por envío y detectar margen por guía.
- Abrir acciones por envío: ver orden, ver rastreo, descargar guía y cancelar
  guía (cuando aplique).

## Prerrequisitos

- Usuario con permisos de administrador.
- Acceso al módulo de envíos (`/admin/shipments`).
- Para exportación CSV: rango de fechas permitido y reportes habilitados.

## Recorrido de interfaz

1. Botones de acción superior:
   `Actualizar Rastreo` y `Exportar CSV`.
2. Columna izquierda de filtros con `Resetear Filtros`.
3. Tabla principal con columnas:
   `Servicio`, `Rastreo`, `Negocio`, `Costos`, `Creado`.
4. Menú de acciones por fila para gestión puntual de la guía.
5. Paginación al final del listado.

## Flujo recomendado de uso

1. Define primero el periodo de análisis (`Rango de fechas`).
2. Aplica filtros por negocio, carrier y estado para aislar la operación que
   te interesa.
3. Ordena prioridad revisando estatus de rastreo y antigüedad (`Creado`).
4. Para incidencias masivas, usa `Actualizar Rastreo` con lista de guías.
5. Exporta CSV para conciliación o análisis externo.

## Reglas de exportación CSV

- Sin filtro de negocio: máximo `31` días por exportación.
- Con negocio específico: máximo `93` días por exportación.

## Capturas de referencia

### Lista principal de envíos

![Envíos lista](/img/plataforma/administrador/envios/envios-01-lista.png)

### Panel de filtros

![Envíos filtros](/img/plataforma/administrador/envios/envios-02-filtros.png)

## Buenas prácticas

- Mantén periodos cortos cuando investigues incidencias para reducir ruido.
- Usa `Resetear Filtros` antes de comenzar un nuevo análisis.
- Valida diferencias de costo/cobro antes de exportar para evitar retrabajo en
  conciliación.
