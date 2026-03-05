---
sidebar_position: 8
title: Scanner
---

# Scanner

Ruta en Turboship Web: `/scanner`

Scanner agiliza la operación en campo con lectura de códigos QR para
actualizar estatus de rastreo en tiempo real.

Permite registrar ubicación y, cuando aplica, firma de entrega, elevando
la evidencia operativa y la confianza del cliente.

## Qué puedes hacer aquí

- Configurar el estatus de rastreo que se aplicará al escaneo.
- Definir una descripción/concepto para trazabilidad del evento.
- Capturar eventos logísticos desde la interfaz de escaneo.
- Centralizar evidencia operativa de movimientos en campo.

## Prerrequisitos

- Usuario con permisos de administración u operación.
- Acceso a `/scanner`.
- Cámara disponible y permisos habilitados en navegador/dispositivo.

## Recorrido de interfaz

1. Vista principal con mapa y barra de acción inferior.
2. Botón `Iniciar Escaneo` para abrir la configuración inicial.
3. Modal `Configurar Escaneo` con:
   - estatus de rastreo
   - descripción/concepto
   - opciones avanzadas
4. Flujo de continuación para iniciar lectura de códigos.

## Flujo recomendado de uso

1. Abre `Iniciar Escaneo`.
2. Selecciona estatus de rastreo correcto para el evento.
3. Captura descripción breve y útil para soporte al cliente.
4. Continúa al flujo de lectura QR.
5. Verifica que los eventos quedaron registrados en tracking/historial.

## Capturas de referencia

### Vista principal del scanner

![Scanner vista principal](/img/plataforma/administrador/scanner/scanner-01-vista.png)

### Modal de configuración de escaneo

![Scanner configurar escaneo](/img/plataforma/administrador/scanner/scanner-02-iniciar-escaneo.png)

## Buenas prácticas

- Define estatus y concepto antes de escanear en lote.
- Usa descripciones claras para evitar ambigüedad en incidencias.
- Valida permisos de cámara al iniciar cada jornada operativa.
