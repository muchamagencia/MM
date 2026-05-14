# Mucha M - Agencia de Talentos

## Descripción
Página web profesional para una agencia de actores y actrices con características avanzadas de búsqueda y filtrado.

## Características

### ✅ Galería de Talentos
- Galería interactiva de 40 actores y actrices
- Diseño minimalista y profesional
- Perfiles individuales enlazados

### ✅ Sistema de Filtros
- Filtrado por categorías:
  - Actores
  - Actrices
  - Cara Nueva
  - Infantil
  - Internacional

### ✅ Buscador Avanzado
- Búsqueda por nombre y palabras clave
- Filtro por rango de edad
- Filtro por sexo
- Filtro por procedencia

### ✅ Formularios de Contacto
- Formulario general en página principal
- Formulario específico en cada perfil de talento
- Integración con WhatsApp

### ✅ Diseño Responsivo
- Totalmente adaptable a dispositivos móviles
- Interfaz intuitiva y fácil de usar
- Carga rápida y optimizada

## Estructura de Archivos

```
MM/
├── index.html           # Página principal
├── talent.html          # Página de perfil de talento
├── css/
│   ├── styles.css       # Estilos principales
│   └── talent.css       # Estilos de página de talento
├── js/
│   ├── data.js          # Base de datos de talentos
│   ├── script.js        # JavaScript principal
│   └── talent.js        # JavaScript de página de talento
└── README.md            # Este archivo
```

## Configuración

### Números de WhatsApp
Edita el número de WhatsApp en los archivos `index.html` y `talent.html`:
```html
<a href="https://wa.me/34XXXXXXXXX" class="whatsapp-btn">
```
Reemplaza `34XXXXXXXXX` con tu número de teléfono con código de país.

### Agregar/Modificar Talentos
Edita el archivo `js/data.js` para agregar o modificar la información de talentos.

## Cómo Usar

1. **Descarga los archivos** a tu servidor
2. **Configura el número de WhatsApp** en los archivos HTML
3. **Personaliza los datos de talentos** en `js/data.js`
4. **Abre `index.html`** en tu navegador

## Funcionalidades JavaScript

- ✅ Filtrado dinámico por categoría
- ✅ Búsqueda en tiempo real
- ✅ Gestión de formularios
- ✅ Navegación suave
- ✅ Validación básica de formularios

## Próximas Mejoras

- [ ] Cargar imágenes de talentos
- [ ] Base de datos backend
- [ ] Sistema de login admin
- [ ] Panel de administración
- [ ] Galerías de proyectos por talento
- [ ] Sistema de reservas

## Notas

- Esta es una versión de desarrollo gratuita
- El sitio está listo para ser migrado a un hosting de pago
- El diseño es minimalista y profesional
- Todos los datos se manejan en el cliente (localStorage para versiones futuras)

## Soporte

Para soporte o actualizaciones, contacta con el equipo de Mucha Magia.

---

**© 2026 Mucha M - Agencia de Talentos**
