# 📚 Ecos Libros Store

E-commerce de literatura clásica desarrollado con React y Vite como parte del curso de React en Coderhouse.

El proyecto permite visualizar un catálogo de productos obtenido de forma dinámica mediante una API, gestionar los estados de carga y error, y mostrar la información de los productos mediante componentes reutilizables.

## 🛠️ Tecnologías utilizadas

* React
* Vite
* JavaScript (ES6+)
* CSS3
* React Icons
* Fake Store API

## 📁 Estructura del proyecto

La aplicación está organizada mediante componentes y archivos separados según su responsabilidad:

```text
src/
├── components/
│   ├── Item/
│   ├── ItemList/
│   └── ItemListContainer/
│
├── hooks/
│   └── useProducts.js
│
├── mock/
│   └── asyncMock.js
│
└── styles/
    └── archivos CSS
```

Esta organización permite mantener el código dividido en diferentes componentes y facilita su mantenimiento y reutilización.

## 🔄 Consumo de datos

El catálogo de productos se obtiene utilizando **Fake Store API**:

```text
https://fakestoreapi.com/products
```

Para realizar la petición se utiliza `fetch` junto con `async/await`.

La lógica de obtención de productos se encuentra separada de los componentes mediante el Custom Hook `useProducts`.

## ⏳ Manejo de carga y errores

La aplicación contempla diferentes estados durante la consulta de los productos.

Se utiliza:

* `isLoading` para indicar que los productos están siendo cargados.
* `error` para informar cuando ocurre un problema durante la petición.
* `try/catch` para controlar posibles errores.
* `response.ok` para verificar que la respuesta de la API sea correcta.

De esta manera, la interfaz puede mostrar información diferente dependiendo del estado de la petición.

## 🧩 Componentes

### Item

Se encarga de representar individualmente cada producto del catálogo.

### ItemList

Recibe la lista de productos y utiliza `.map()` para generar un componente `Item` por cada producto.

Cada elemento utiliza su identificador como `key`:

```jsx
key={product.id}
```

Esto permite que React identifique correctamente cada elemento de la lista.

### ItemListContainer

Funciona como contenedor de la lista de productos y coordina la información que se muestra en la interfaz.

## 🪝 Custom Hook

El proyecto utiliza el Custom Hook:

```text
useProducts
```

Su objetivo es separar la lógica relacionada con la obtención de productos de los componentes visuales.

Esto permite mantener los componentes más simples y reutilizar la lógica cuando sea necesario.

## 🎨 Estilos

Los estilos de la aplicación están organizados en archivos CSS independientes para mantener separada la estructura de los componentes de su presentación visual.

Se utilizan propiedades de CSS como:

* Flexbox
* Grid
* Márgenes y espaciados
* Tipografías
* Diseño responsive

## 🚀 Instalación y ejecución

Para ejecutar el proyecto de manera local:

### 1. Clonar el repositorio

```bash
git clone https://github.com/OreGuerrero/ecos-libros-store.git
```

### 2. Ingresar a la carpeta del proyecto

```bash
cd ecos-libros-store
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

### 5. Abrir la aplicación

Vite indicará en la terminal la dirección local donde se encuentra disponible la aplicación.

Habitualmente es:

```text
http://localhost:5173/
```

## 📋 Criterios trabajados

En este proyecto se trabajaron los siguientes conceptos:

* Componentes funcionales de React.
* Props.
* Renderizado dinámico de listas.
* Uso de `.map()`.
* Uso de `key` para identificar elementos.
* `useState`.
* `useEffect`.
* Consumo de APIs mediante `fetch`.
* Programación asíncrona con `async/await`.
* Manejo de errores con `try/catch`.
* Custom Hooks.
* Separación de responsabilidades.
* Modularización de componentes.
* Organización de estilos CSS.

## 👨‍💻 Autor

**Orestes Guerrero**

Proyecto realizado como parte del curso de React en Coderhouse.
