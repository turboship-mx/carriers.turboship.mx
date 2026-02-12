---
sidebar_position: 1
title: Introduccion a la plataforma
---

# Introduccion a la plataforma

Esta guia explica como esta organizada la plataforma y para que sirve cada
bloque funcional en la operacion diaria.

El objetivo es que puedas ubicar rapido donde se configura el negocio,
donde se ejecuta la operacion y donde se monitorea el resultado.

## Que resuelve esta plataforma

La plataforma integra el ciclo completo de envios B2B:

- cotizacion y seleccion de servicios
- gestion de ordenes y creacion de guias
- seguimiento operativo de envios y cancelaciones
- control financiero (saldo, recargas y movimientos)
- administracion de clientes, proveedores e integraciones

## Estructura funcional

La documentacion se divide en dos vistas principales:

### Administrador

Pensada para gobierno, configuracion central y monitoreo de toda la operacion.

- [Cotizador](./administrador/cotizador): validacion operativa y comercial de tarifas.
- [Negocios](./administrador/negocios): alta y gestion de cuentas empresariales.
- [Usuarios](./administrador/usuarios): control de accesos y trazabilidad.
- [Ordenes](./administrador/ordenes): seguimiento del flujo de pedidos.
- [Envios](./administrador/envios): control de guias y rastreo.
- [Scanner](./administrador/scanner): actualizacion de estatus en campo.
- [Recolecciones](./administrador/recolecciones): coordinacion de pickups.
- [Cancelaciones](./administrador/cancelaciones): resolucion de excepciones.
- [Facturacion](./administrador/facturacion): conciliacion administrativa.
- [Proveedores](./administrador/proveedores): gestion de integraciones logisticas.
- [Codigos Postales](./administrador/codigos-postales): validacion de cobertura.
- [Configuracion](./administrador/configuracion): parametros globales del sistema.

### Negocio

Orientada a la operacion del cliente final: venta, logistica y finanzas.

- [Cotizador](./negocio/cotizador): comparacion de opciones para proteger margen.
- [Ordenes](./negocio/ordenes): creacion y seguimiento de pedidos.
- [Envios](./negocio/envios): monitoreo de cumplimiento de entrega.
- [Finanzas](./negocio/finanzas): saldo, recargas y movimientos.
- [Catalogos](./negocio/catalogos): remitentes, destinatarios y productos.
- [Integraciones](./negocio/integraciones): conexion con Shopify y WooCommerce.

## Flujo operativo recomendado

1. Configurar base operativa desde Administrador
   (proveedores, codigos postales, reglas y permisos).
2. Habilitar al cliente desde Negocio
   (catalogos, integraciones y configuracion financiera).
3. Ejecutar la operacion diaria
   (cotizar, crear ordenes, embarcar y dar seguimiento a envios).
4. Monitorear resultados y excepciones
   (recolecciones, cancelaciones, reportes y ajustes continuos).

## Requisitos y permisos

- El perfil Administrador controla configuracion global y acceso transversal.
- El perfil Negocio opera solo sobre su cuenta y su informacion.
- La correcta asignacion de permisos evita errores operativos y de seguridad.

## Siguientes guias

Para profundizar, continua con:

- [Introduccion de Administrador](./administrador/introduccion)
- [Introduccion de Negocio](./negocio/introduccion)
