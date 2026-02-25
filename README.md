# Residencias Kiwy - Aplicación React

Aplicación web moderna para Residencias Kiwy construida con React, Vite y Tailwind CSS. Incluye un panel administrativo completo para gestionar el contenido del sitio.

## 🚀 Características

- **Página Principal Funcional**
  - Hero section con animaciones
  - Sección de ubicación con mapa interactivo
  - Galería de imágenes con efectos hover
  - Ofertas destacadas
  - Navegación suave entre secciones
  - Integración con WhatsApp
  - Diseño responsive

- **Panel Administrativo**
  - Autenticación segura
  - Gestión de contenido general (WhatsApp, dirección, email, textos)
  - Gestión de ofertas (crear, editar, eliminar, activar/desactivar)
  - Gestión de galería (agregar, editar, eliminar imágenes)
  - Persistencia de datos en localStorage

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

## 🔐 Acceso al Panel Administrativo

- URL: `/admin/login`
- Usuario: `admin`
- Contraseña: `kiwy2024`

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **React Router** - Navegación
- **Tailwind CSS** - Estilos
- **Material Symbols** - Iconos

## 📁 Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Location.jsx
│   ├── Gallery.jsx
│   ├── Offers.jsx
│   ├── Footer.jsx
│   └── AdminContent.jsx
├── pages/           # Páginas principales
│   ├── Home.jsx
│   ├── AdminLogin.jsx
│   └── AdminDashboard.jsx
├── context/         # Context API
│   ├── AuthContext.jsx
│   └── ContentContext.jsx
├── App.jsx          # Componente principal
├── main.jsx         # Punto de entrada
└── index.css        # Estilos globales
```

## 🎨 Personalización

El contenido del sitio se puede gestionar desde el panel administrativo. Los cambios se guardan automáticamente en localStorage.

## 📱 Responsive

La aplicación está completamente optimizada para dispositivos móviles, tablets y desktop.

## 🚀 Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

