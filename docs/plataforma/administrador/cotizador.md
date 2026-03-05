---
sidebar_position: 3
title: Cotizador
---

# Cotizador

Ruta en Turboship Web: `/admin/quote`

El Cotizador permite comparar tarifas entre proveedores según origen,
destino, peso y dimensiones para elegir la mejor opción comercial.

Está pensado para proteger margen y velocidad de respuesta en ventas:
cotizas rápido, ajustas rentabilidad y tomas decisiones con datos.

## Qué puedes hacer aquí

- Simular costos por paquetería con datos de un envío real.
- Evaluar diferencia de precio entre servicios económicos y exprés.
- Ajustar `% de ganancia` para validar precio de venta final.
- Confirmar zonas y restricciones antes de prometer tiempos/costo.

## Prerrequisitos

- Usuario con permisos de administración.
- Acceso al módulo `/admin/quote`.
- Datos mínimos para cotizar: origen, destino, peso y dimensiones.

## Recorrido de interfaz

1. Campos de origen y destino (código postal).
2. Selector de embalaje.
3. Campos de dimensiones y peso.
4. Campo de `% de ganancia`.
5. Botón `Cotizar` para obtener ofertas.
6. Tabla de resultados por servicio/proveedor.

## Flujo recomendado de uso

1. Captura CP origen y destino.
2. Define embalaje, medidas y peso real.
3. Configura margen comercial con `% de ganancia`.
4. Ejecuta `Cotizar` y revisa resultados.
5. Selecciona opción balanceando costo, tiempos y proveedor.

## Capturas de referencia

### Formulario de cotización

![Cotizador formulario](/img/plataforma/administrador/cotizador/cotizador-01-formulario.png)

### Resultados por proveedor y servicio

![Cotizador resultados](/img/plataforma/administrador/cotizador/cotizador-02-resultado.png)

## Buenas prácticas

- Cotiza con peso/dimensiones reales para evitar sobrecostos.
- Compara al menos 2 alternativas antes de decidir.
- Usa margen consistente por tipo de cliente/producto.
