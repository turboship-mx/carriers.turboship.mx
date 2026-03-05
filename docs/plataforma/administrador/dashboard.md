---
sidebar_position: 2
title: Dashboard
---

# Dashboard

Ruta en Turboship Web: `/admin/dashboard`

Dashboard concentra indicadores operativos y financieros para seguimiento
ejecutivo de la plataforma.

Permite analizar comportamiento por periodo y por negocio, y comparar
resultados por paquetería y proveedor sin salir del mismo módulo.

## Qué puedes hacer aquí

- Revisar `Ventas Brutas`, `Costos` y `Ganancias` del periodo seleccionado.
- Filtrar por rango de fechas.
- Filtrar por negocio específico.
- Cambiar entre pestañas: `General`, `Paqueterías`, `Negocios`, `Proveedores`.
- En la pestaña General, filtrar estatus de envíos: `Todos`, `Activos`,
  `Cancelados`.
- Exportar desglose en pestañas de análisis (`Paqueterías`, `Negocios`,
  `Proveedores`).

## Prerrequisitos

- Usuario con permisos de administrador.
- Acceso al módulo Dashboard (`ADMIN_DASHBOARD`).
- Datos cargados en el periodo para visualizar métricas representativas.

## Recorrido de interfaz

1. Selector de fechas (calendario y atajos: hoy, ayer, semana/mes actual y
anterior).
2. Filtro de negocio para aislar análisis por cuenta.
3. Tarjetas resumen de resultados financieros.
4. Pestañas de análisis para cambiar el enfoque del tablero.
5. Gráficas y tablas de desglose según la pestaña activa.

## Flujo recomendado de uso

1. Define el rango de fechas.
2. Aplica filtro de negocio si vas a revisar una cuenta puntual.
3. Valida primero las tarjetas financieras superiores.
4. En `General`, revisa tendencia y distribución de estatus de envíos.
5. Cambia a `Paqueterías` y `Proveedores` para detectar variaciones de margen.
6. Exporta la tabla cuando necesites compartir análisis con operación o
finanzas.

## Capturas de referencia

### Vista general

![Dashboard general](/img/plataforma/administrador/dashboard/dashboard-01-general.png)

### Pestaña Paqueterías

![Dashboard paqueterías](/img/plataforma/administrador/dashboard/dashboard-02-paqueterias.png)

### Pestaña Negocios

![Dashboard negocios](/img/plataforma/administrador/dashboard/dashboard-04-negocios.png)

### Pestaña Proveedores

![Dashboard proveedores](/img/plataforma/administrador/dashboard/dashboard-03-proveedores.png)

## Buenas prácticas

- Mantén periodos comparables (por ejemplo, semana contra semana).
- Evita interpretar márgenes con periodos muy cortos o sin volumen suficiente.
- Verifica consistencia entre vista global y vista por negocio antes de
escalar incidencias.
