# 📚 Ecos Libros Store - E-Commerce de Literatura Clásica

Este repositorio contiene la estructura base y la arquitectura modular para el proyecto final de e-commerce desarrollado en el curso de React.

## 🛠️ Tecnologías Utilizadas

- **React 19**
- **Vite**
- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **React Icons**

# 📚 Ecos Libros Store - E-Commerce de Literatura Clásica

Este repositorio contiene la arquitectura modular, el catálogo dinámico y la vista de detalle de productos para el proyecto final de e-commerce desarrollado en el curso de React en Coderhouse.

## 🛠️ Tecnologías Utilizadas

- **React 19**
- **Vite**
- **JavaScript (ES6+)**
- **CSS3 (Flexbox & Grid)**
- **React Icons**

## 🧱 Arquitectura y Separación de Responsabilidades

El proyecto está estructurado dentro de `src/components` y `src/mock` siguiendo una estricta división entre componentes contenedores (*Smart Components*) y componentes de presentación (*Dumb Components*):

- **`src/mock/asyncMock.js`**: Módulo que simula la base de datos externa. Exporta las funciones asíncronas `getProducts()` y `getProductById(productId)` que retornan `Promises` locales resueltas tras un retardo simulado mediante `setTimeout`.
- **`Navbar.jsx` & `CartWidget.jsx`**: Barra de navegación superior con branding, navegación por categorías de productos reales (*Obras Clásicas*, *Historia y Arqueología*, *Filosofía Antigua*, *Ediciones Ilustradas*) e indicador numérico de ítems.
- **`ItemListContainer.jsx`**: Componente contenedor que ejecuta la promesa `getProducts()`, administra los estados de carga (`isLoading`) y error (`error`), y delega el renderizado al listado.
- **`ItemList.jsx`**: Componente de presentación encargado de recorrer la colección de libros mediante `.map()` y asignar las `key` únicas requeridas.
- **`Item.jsx`**: Tarjeta individual para exhibir la información resumida de cada obra en la cuadrícula general.
- **`ItemDetailContainer.jsx`**: Contenedor de la vista de detalle que consume `getProductById(id)`, maneja la asincronía y entrega el producto encontrado por props.
- **`ItemDetail.jsx`**: Componente de presentación que renderiza la vista ampliada del libro (portada, descripción extendida, categoría, precio y stock disponible).
- **`ItemCount.jsx`**: Componente reutilizable para la selección de unidades. Controla límites de stock dinámicos y no permite cantidades negativas.

## 🌐 Flujo de Datos Asíncronos con Promesas y `useEffect`

Tanto el catálogo general como el detalle de producto utilizan Hooks de React para gestionar el ciclo de vida de los datos:
- **Ejecución en Montaje:** Uso de `useEffect` con array de dependencias vacío `[]` para disparar la carga de datos únicamente una vez al montar los componentes.
- **Simulación de Latencia:** Uso de `setTimeout` dentro de Promesas nativas para imitar los tiempos de respuesta de un servidor real.
- **Manejo de Estados:** Gestión explícita de carga (`isLoading`) y errores de búsqueda mediante bloques `try/catch` y `.then()/.catch()`.

## 🚀 Instrucciones de Instalación y Ejecución

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/OreGuerrero/ecos-libros-store.git](https://github.com/OreGuerrero/ecos-libros-store.git)