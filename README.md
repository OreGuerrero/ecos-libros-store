# E-Commerce React Store

Este repositorio contiene la estructura base para el proyecto final de e-commerce desarrollado en el curso de React.

## 🛠️ Tecnologías Utilizadas

- **React 19**
- **Vite**
- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **React Icons**

## 🧱 Estructura de Componentes

El proyecto sigue una arquitectura modular en la carpeta `src/components`:

- **`Navbar.jsx`**: Barra de navegación superior con branding, navegación por categorías de productos reales (*Obras Clásicas*, *Historia y Arqueología*, *Filosofía Antigua*, *Ediciones Ilustradas*) e integración del contenedor del carrito.
- **`CartWidget.jsx`**: Componente hijo de la `Navbar` que incluye el ícono del carrito de compras y un indicador numérico estático de productos.
- **`ItemListContainer.jsx`**: Componente contenedor para la vista principal que recibe un mensaje de bienvenida personalizado a través de `props` (`greeting`).

## 🚀 Instrucciones de Instalación y Ejecución

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/OreGuerrero/ecos-libros-store.git](https://github.com/OreGuerrero/ecos-libros-store.git)

   ## Sincronización con `useEffect` y Array de Dependencias

En este proyecto se utiliza el Hook `useEffect` dentro de `ItemListContainer` para simular la carga asíncrona de datos desde una fuente externa (utilizando `setTimeout`).

### ¿Por qué se utiliza un array de dependencias vacío `[]`?
- **Ejecución única:** El array de dependencias vacío `[]` le indica a React que el efecto debe ejecutarse **únicamente una vez**, al momento de montar el componente en el DOM.
- **Problema que resuelve:** Si se omitiera el array de dependencias, el `useEffect` se dispararía en cada re-renderizado del componente. Al actualizar los estados (`setItems` y `setLoading`), el componente se volvería a renderizar, acumulando múltiples llamadas a `setTimeout` y generando un bucle infinito con comportamiento errático.