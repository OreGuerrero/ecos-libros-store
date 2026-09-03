# 📚 Ecos Libros Store - E-Commerce de Literatura Clásica

Este repositorio contiene la estructura base y la arquitectura modular para el proyecto final de e-commerce desarrollado en el curso de React.

## 🛠️ Tecnologías Utilizadas

- **React 19**
- **Vite**
- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **React Icons**

## 🧱 Estructura de Componentes

El proyecto sigue una arquitectura modular dentro de la carpeta `src/components`:

- **`Navbar.jsx`**: Barra de navegación superior con branding, navegación por categorías de productos reales (*Obras Clásicas*, *Historia y Arqueología*, *Filosofía Antigua*, *Ediciones Ilustradas*) e integración del contenedor del carrito.
- **`CartWidget.jsx`**: Componente independiente que incluye el ícono del carrito de compras (`FaShoppingCart`) y un indicador numérico de productos.
- **`ItemListContainer.jsx`**: Componente contenedor para la vista principal que recibe un mensaje de bienvenida personalizado a través de `props` (`greeting`) y gestiona la carga dinámica de libros.
- **`Item.jsx`**: Tarjeta de producto individual utilizada para exhibir las obras destacadas de la tienda.

## 🌐 Consumo de Datos Asíncronos con `fetch` y `useEffect`

En este proyecto se utiliza el Hook `useEffect` dentro de `ItemListContainer` para obtener el catálogo de productos mediante una petición HTTP asíncrona a la API pública **Fake Store API** (`https://fakestoreapi.com/products`).

### Características del flujo de datos:
- **Petición HTTP real:** Se utiliza `fetch` junto con sintaxis `async/await` para gestionar la comunicación asíncrona.
- **Manejo de Estados HTTP:** Se evalúa la propiedad `response.ok` y se capturan fallos mediante bloques `try/catch/finally` para mostrar avisos de error legibles en la interfaz (`error`).
- **Estados de Carga:** Se utiliza un estado booleano (`isLoading`) para mostrar un mensaje de carga mientras se obtienen los datos.
- **Transformación de datos:** Los datos devueltos por la API son adaptados en el cliente para mostrar títulos en español de la literatura clásica universal y valores en **Pesos Argentinos ($ ARS)**.
- **Array de dependencias vacío `[]`:** Le indica a React que la petición a la API debe ejecutarse **únicamente una vez**, al momento en que el componente se monta en el DOM, evitando bucles infinitos de re-renderizado.

## 🚀 Instrucciones de Instalación y Ejecución

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/OreGuerrero/ecos-libros-store.git](https://github.com/OreGuerrero/ecos-libros-store.git)