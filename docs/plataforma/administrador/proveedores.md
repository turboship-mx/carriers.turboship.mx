---
sidebar_position: 12
title: Proveedores
---

# Proveedores

Ruta en Turboship Web: `/admin/providers`

Proveedores concentra la gestión de integraciones logísticas:
conexión, configuración de servicios, monitoreo y revisión de logs.

Ayuda a mantener continuidad operativa, comparar desempeño real y tomar
acciones rápidas cuando un proveedor se degrada.

## Qué puedes hacer aquí

- Consultar el catálogo de proveedores activos y su estado.
- Revisar métricas operativas y señales de salud de integración.
- Abrir detalle de un proveedor para ajustes y diagnóstico.
- Consultar logs/historial para investigar fallas de cotización o guía.
- Detectar degradaciones antes de que impacten masivamente.

## Prerrequisitos

- Usuario con permisos de administración técnica.
- Acceso al módulo `/admin/providers`.
- Integraciones de proveedores ya configuradas en entorno.

## Recorrido de interfaz

1. Vista principal con lista de proveedores.
2. Indicadores de estado y acciones por proveedor.
3. Acceso a detalle/configuración desde la fila seleccionada.
4. Sección de logs para revisar eventos y errores.
5. Controles de filtrado por proveedor o tipo de evento.

## Flujo recomendado de uso

1. Revisa estado general de proveedores activos.
2. Abre el proveedor con incidencia reportada.
3. Consulta logs para confirmar error y patrón temporal.
4. Ajusta configuración o escala con evidencia técnica.
5. Valida recuperación operativa después del cambio.

## Capturas de referencia

### Lista de proveedores

![Proveedores lista](/img/plataforma/administrador/proveedores/proveedores-01-lista.png)

### Vista de logs

![Proveedores logs](/img/plataforma/administrador/proveedores/proveedores-02-logs.png)

## Buenas prácticas

- Prioriza revisión de logs en ventanas donde cayó la conversión.
- Documenta cambios de configuración por proveedor.
- Evita cambios simultáneos en múltiples integraciones sin monitoreo.
