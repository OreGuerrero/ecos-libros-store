# Ecos Libros Store

E-commerce de libros desarrollado con React, Vite y Firebase. El catálogo se consulta desde Cloud Firestore, la sesión se administra con Firebase Authentication y las compras se guardan como órdenes asociadas al usuario.

## Tecnologías

- React 19 y Vite
- React Router
- Firebase Authentication (email y contraseña)
- Cloud Firestore
- React Icons

## Requisitos

- Node.js y npm
- Un proyecto de Firebase con Cloud Firestore y el proveedor Email/Password habilitados

## Instalación y ejecución

```bash
npm install
```

Copiá `.env.example` a `.env` y completá los valores de la aplicación web de Firebase. No publiques `.env`.

```bash
npm run dev
```

Para validar el proyecto:

```bash
npm run lint
npm run build
```

## Configuración de Firebase

1. Creá un proyecto en Firebase y registrá una aplicación web.
2. Copiá los campos de configuración del SDK a las variables `VITE_FIREBASE_*` de `.env`.
3. En Authentication, habilitá el proveedor **Email/Password**.
4. Creá Cloud Firestore en modo producción y publicá las reglas de `firestore.rules` desde la consola de Firebase.
5. Creá manualmente documentos en la colección `items` usando el esquema de abajo. `category` debe coincidir exactamente con uno de estos nombres para que aparezcan en el filtro: `Obras Clásicas`, `Historia y Arqueología`, `Fantasía y Aventuras` o `Ciencia Ficción`.

El archivo [`.env.example`](.env.example) enumera las variables requeridas sin incluir credenciales. La configuración se centraliza en `src/firebase/config.js`.

## Despliegue en Vercel

1. En Vercel, elegí **Add New → Project**, conectá GitHub e importá el repositorio `OreGuerrero/ecos-libros-store`.
2. Usá la raíz del repositorio como **Root Directory**. Vercel detecta Vite; verificá que el comando de build sea `npm run build` y el directorio de salida `dist`.
3. En **Project Settings → Environment Variables**, cargá las seis variables de `.env.example` y asignales los entornos **Production** y **Preview**. Guardá los cambios y volvé a desplegar para que surtan efecto.
4. El primer despliegue crea la versión de producción. Después, cada push a una rama que no sea la rama de producción y cada actualización de un Pull Request genera un **Preview Deployment** con una URL independiente. Al fusionar el PR en `main`, Vercel genera el despliegue de producción.

Las variables con prefijo `VITE_` se incorporan al bundle del navegador: no las uses para secretos privados, tokens de servidor ni credenciales administrativas. La configuración web de Firebase, incluida su API key, es identificadora y visible en el cliente; protegé los datos con reglas de Firestore y Authentication. Para pruebas de Preview, preferí un proyecto Firebase separado con datos de prueba. Las variables de Vercel se administran por entorno y solo se aplican a despliegues nuevos.

El archivo [`vercel.json`](vercel.json) reescribe las rutas de la SPA a `index.html`, para que URLs como `/checkout` o `/item/ID` funcionen al abrirlas o recargarlas directamente.

Más información: [Preview Deployments](https://vercel.com/docs/deployments/environments#preview-environment-pre-production), [Variables de entorno](https://vercel.com/docs/environment-variables) y [Vite en Vercel](https://vercel.com/docs/frameworks/frontend/vite).

## Colecciones de Firestore

### `items`

El ID del documento se utiliza como ID del producto en las rutas. Ejemplo de documento:

```json
{
  "name": "Don Quijote de la Mancha",
  "description": "Edición ilustrada de la obra de Miguel de Cervantes.",
  "price": 34000,
  "img": "https://example.com/don-quijote.jpg",
  "category": "Obras Clásicas",
  "stock": 12,
  "autor": "Miguel de Cervantes"
}
```

El listado consulta todos los documentos o filtra por `category` en Firestore. El detalle consulta un documento por su ID.

### `orders`

Se crea un documento al confirmar una compra. La aplicación guarda una estructura equivalente a:

```json
{
  "userId": "UID de Firebase Authentication",
  "userEmail": "cliente@example.com",
  "buyer": {
    "name": "Nombre y apellido",
    "phone": "Teléfono",
    "address": "Dirección",
    "city": "Ciudad",
    "notes": "Información adicional"
  },
  "items": [
    {
      "productId": "don-quijote",
      "name": "Don Quijote de la Mancha",
      "unitPrice": 34000,
      "quantity": 1
    }
  ],
  "total": 34000,
  "createdAt": "serverTimestamp()"
}
```

`createdAt` se escribe con `serverTimestamp()`. El ID asignado por Firestore se muestra como confirmación; el carrito se vacía únicamente después de guardar la orden correctamente.

## Rutas principales

- `/` y `/productos`: catálogo
- `/category/:categoryId`: catálogo filtrado
- `/item/:id`: detalle del producto
- `/cart`: carrito
- `/register` y `/login`: autenticación
- `/checkout`: checkout, disponible solo para usuarios autenticados y con productos en el carrito

La sesión se sincroniza con `onAuthStateChanged`. Las reglas permiten la lectura pública del catálogo y solo permiten crear órdenes a usuarios autenticados, asociadas a su propio UID.
