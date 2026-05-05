# SP Components — Sitio de documentación

[![Astro](https://img.shields.io/badge/Built%20with-Astro-bc52ee?logo=astro&logoColor=white)](https://astro.build)
[![Deploy](https://img.shields.io/badge/Deploy-GitLab%20Pages-orange?logo=gitlab)](https://gitlab.com/wisftock/page-libreria-component)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

Sitio de documentación oficial de [SP Components](https://gitlab.com/wisftock/sp-component) — librería de más de 100 Web Components construidos con Lit 3, compatibles con cualquier framework o HTML puro.

---

## Características

- **108 componentes documentados** con demos en vivo, tabla de API, eventos y slots
- **Búsqueda instantánea** por nombre y descripción
- **Demo interactivo** — cada componente se renderiza usando el bundle CDN real
- **Sin framework de UI** — solo Astro + CSS nativo, sitio 100% estático
- **Carga ultra rápida** — generación estática (SSG) con Astro

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
# → http://localhost:4321

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## Estructura del proyecto

```
page-libreria-component/
├── public/
│   ├── sp-component.min.js   # Bundle CDN de la librería (actualizar con cada release)
│   └── favicon.svg
├── src/
│   ├── components/           # Componentes Astro de la UI del sitio
│   │   ├── ApiTable.astro    # Tabla de props/API
│   │   ├── DemoCard.astro    # Card de demo en vivo
│   │   ├── SearchModal.astro # Búsqueda global
│   │   ├── Sidebar.astro     # Navegación lateral
│   │   └── TOC.astro         # Tabla de contenidos
│   ├── data/
│   │   ├── components.ts     # Registro de todos los componentes (slug, tag, categoría)
│   │   ├── docs.ts           # Demos y ejemplos de uso por componente
│   │   └── api.ts            # Definiciones de props/API por componente
│   ├── layouts/
│   │   └── BaseLayout.astro  # Layout base con nav y estructura global
│   ├── pages/
│   │   ├── index.astro       # Página principal con catálogo
│   │   └── components/
│   │       └── [slug].astro  # Página dinámica por componente
│   └── styles/
│       ├── global.css        # Estilos globales del sitio
│       └── tokens.css        # Tokens de diseño (colores, tipografía, spacing)
└── astro.config.mjs
```

---

## Actualizar el bundle CDN

Cuando se publique una nueva versión de `sp-component`:

```bash
# En el directorio de la librería
npm run build:cdn

# Copiar el bundle generado al sitio de docs
cp ../libreria-component/dist-cdn/sp-component.min.js public/sp-component.min.js
```

---

## Agregar o actualizar documentación de un componente

### 1. Registrar el componente (`src/data/components.ts`)

```ts
{ slug: "mi-componente", tag: "sp-mi-componente", label: "Mi Componente",
  category: "Formularios", desc: "Descripción corta del componente.",
  indexId: "mi-componente" }
```

### 2. Agregar el demo (`src/data/docs.ts`)

```ts
"mi-componente": {
  usage: `<sp-mi-componente label="Ejemplo"></sp-mi-componente>`,
  demo: `<div style="padding:24px;">
    <sp-mi-componente label="Demo en vivo"></sp-mi-componente>
  </div>`,
  events: [
    { name: "sp-change", detail: "{ value: string }", desc: "Al cambiar el valor" },
  ],
  slots: [
    { name: "default", desc: "Contenido del componente" },
  ],
},
```

### 3. Documentar la API (`src/data/api.ts`)

```ts
"mi-componente": [
  { name: "label",    type: "string",  default: "—",      desc: "Etiqueta visible" },
  { name: "disabled", type: "boolean", default: "false",  desc: "Deshabilita el componente" },
],
```

---

## Deploy

El sitio genera HTML estático y puede desplegarse en cualquier hosting:

### GitLab Pages

Agrega `.gitlab-ci.yml` en la raíz:

```yaml
pages:
  image: node:20
  script:
    - npm ci
    - npm run build
    - mv dist public
  artifacts:
    paths:
      - public
  only:
    - master
```

### Netlify / Vercel

| Campo | Valor |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | `20` |

---

## Relación con la librería

| Repositorio | Descripción |
|---|---|
| [`sp-component`](https://gitlab.com/wisftock/sp-component) | Librería de Web Components (fuente, tests, npm) |
| `page-libreria-component` | Este sitio — documentación y demos |

---

## Licencia

MIT © 2026 wisftock
