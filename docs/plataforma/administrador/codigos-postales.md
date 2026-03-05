---
sidebar_position: 13
title: Códigos Postales
---

# Códigos Postales

Ruta en Turboship Web: `/admin/postal-codes`

Códigos Postales permite validar cobertura y características de zona
antes de cotizar o confirmar operaciones.

Esto reduce incidencias por datos incorrectos y mejora la precisión en
costos, promesas de entrega y planeación logística.

## Qué puedes hacer aquí

- Consultar información de cobertura por código postal.
- Ver estado, municipio y asentamiento del CP.
- Revisar tipo de zona para evaluar restricciones/costos.
- Filtrar resultados rápidamente para soporte comercial u operativo.

## Prerrequisitos

- Usuario con permisos de administración.
- Acceso al módulo `/admin/postal-codes`.
- CP a validar desde solicitud, orden o guía.

## Recorrido de interfaz

1. Barra de búsqueda por código postal.
2. Tabla con columnas de localidad y tipo de zona.
3. Paginación para navegar grandes volúmenes de registros.
4. Contador de resultados para validar coincidencias del filtro.

## Flujo recomendado de uso

1. Ingresa el código postal a validar.
2. Confirma estado/municipio/asentamiento.
3. Verifica tipo de zona para considerar impacto operativo.
4. Si no hay coincidencia, solicita corrección de datos al solicitante.

## Capturas de referencia

### Vista general del catálogo postal

![Códigos postales lista](/img/plataforma/administrador/codigos-postales/codigos-postales-01-lista.png)

### Búsqueda filtrada por código postal

![Códigos postales filtro](/img/plataforma/administrador/codigos-postales/codigos-postales-02-filtro.png)

## Buenas prácticas

- Valida CP antes de cotizar o generar guía.
- Usa la búsqueda exacta para evitar falsos positivos.
- Documenta correcciones recurrentes para mejorar captura de datos.
