# 📚 Ecos Libros Store - E-Commerce de Literatura Clásica

Este repositorio contiene la arquitectura modular, el catálogo dinámico, la abstracción con Custom Hooks y la vista de detalle de productos para el proyecto de e-commerce desarrollado en el curso de React en Coderhouse.

## 🛠️ Tecnologías Utilizadas

- **React 19**
- **Vite**
- **JavaScript (ES6+)**
- **CSS3 (Flexbox & Grid / Modular CSS)**
- **React Icons**

---

## 🧱 Arquitectura y Separación de Responsabilidades

El proyecto está estructurado dentro de la carpeta `src/` aplicando una estricta separación de responsabilidades y modularización de componentes (*Smart vs. Dumb Components*):

```text
src/
 ├── components/       # Componentes de UI (Dumb) y contenedores (Smart)
 ├── hooks/            # Custom Hooks para desacoplar la lógica asíncrona
 ├── mock/             # Simulación de servidor y base de datos local (asyncMock)
 └── styles/           # Archivos CSS independientes por componenteestión explícita de carga (`isLoading`) y errores de búsqueda mediante bloques `try/catch` y `.then()/.catch()`.

Instrucciones de Instalación y Ejecución
Sigue estos pasos para clonar y ejecutar el proyecto localmente:

Clonar el repositorio:

Bash
git clone [https://github.com/OreGuerrero/ecos-libros-store.git](https://github.com/OreGuerrero/ecos-libros-store.git)
Instalar dependencias del proyecto:

Bash
npm install
Iniciar el servidor local de desarrollo con Vite:

Bash
npm run dev