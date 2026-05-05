export interface EventDef {
  name: string;
  detail: string;
  desc: string;
}

export interface SlotDef {
  name: string;
  desc: string;
}

export interface ComponentDoc {
  usage?: string;
  /** Self-contained live demo HTML (scripts allowed). Overrides usage for the live preview. */
  demo?: string;
  events?: EventDef[];
  slots?: SlotDef[];
}

export const docs: Record<string, ComponentDoc> = {

  // ── Botones & Acciones ────────────────────────────────────────────────────

  button: {
    usage: `<sp-button variant="primary">Guardar</sp-button>
<sp-button variant="secondary">Cancelar</sp-button>
<sp-button variant="ghost">Ver más</sp-button>
<sp-button variant="destructive">Eliminar</sp-button>
<sp-button loading>Cargando…</sp-button>
<sp-button href="/inicio">Enlace</sp-button>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Variantes</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <sp-button variant="primary">Primary</sp-button>
      <sp-button variant="secondary">Secondary</sp-button>
      <sp-button variant="ghost">Ghost</sp-button>
      <sp-button variant="destructive">Destructive</sp-button>
      <sp-button variant="outline">Outline</sp-button>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Tamaños</p>
    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;">
      <sp-button size="xs">XS</sp-button>
      <sp-button size="sm">SM</sp-button>
      <sp-button size="md">MD</sp-button>
      <sp-button size="lg">LG</sp-button>
      <sp-button size="xl">XL</sp-button>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Estados</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <sp-button id="demo-btn-load" variant="primary">Simular carga</sp-button>
      <sp-button disabled>Deshabilitado</sp-button>
      <sp-button variant="secondary" disabled>Secundario off</sp-button>
      <sp-button variant="destructive" disabled>Destructive off</sp-button>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Con iconos</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <sp-button variant="primary">
        <svg slot="prefix" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Guardar
      </sp-button>
      <sp-button variant="secondary">
        Descargar
        <svg slot="suffix" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      </sp-button>
      <sp-button variant="ghost">
        <svg slot="prefix" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Nuevo
      </sp-button>
      <sp-button variant="destructive">
        <svg slot="prefix" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
        Eliminar
      </sp-button>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Enlace y ancho completo</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-button href="https://example.com" target="_blank" variant="secondary">Abrir enlace externo ↗</sp-button>
      <sp-button variant="primary" style="width:100%;">Botón ancho completo</sp-button>
    </div>
  </div>
</div>
<script>
(function(){
  var btn = document.getElementById('demo-btn-load');
  btn.addEventListener('click', function() {
    btn.setAttribute('loading', '');
    setTimeout(function() { btn.removeAttribute('loading'); }, 2000);
  });
})();
</script>`,
    events: [
      { name: "click", detail: "—", desc: "Evento nativo del navegador; no se emite si disabled o loading" },
    ],
    slots: [
      { name: "(default)", desc: "Texto o contenido del botón" },
      { name: "prefix", desc: "Icono o elemento antes del texto" },
      { name: "suffix", desc: "Icono o elemento después del texto" },
    ],
  },

  "copy-button": {
    usage: `<sp-copy-button text="npm install sp-component"></sp-copy-button>
<sp-copy-button text="pnpm add sp-component" label="Copiar" variant="secondary"></sp-copy-button>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:520px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Básico — copiar comando</p>
    <div style="display:flex;align-items:center;gap:8px;background:var(--sp-bg-subtle);border:1px solid var(--sp-border);border-radius:8px;padding:10px 14px;">
      <code style="flex:1;font-size:13px;font-family:var(--font-mono);">npm install sp-component</code>
      <sp-copy-button text="npm install sp-component"></sp-copy-button>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Variantes de botón</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <sp-copy-button text="primary" variant="primary" label="Primary"></sp-copy-button>
      <sp-copy-button text="secondary" variant="secondary" label="Secondary"></sp-copy-button>
      <sp-copy-button text="ghost" variant="ghost" label="Ghost"></sp-copy-button>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Tamaños</p>
    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;">
      <sp-copy-button text="xs" size="xs" label="XS"></sp-copy-button>
      <sp-copy-button text="sm" size="sm" label="SM"></sp-copy-button>
      <sp-copy-button text="md" size="md" label="MD"></sp-copy-button>
      <sp-copy-button text="lg" size="lg" label="LG"></sp-copy-button>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Texto largo multilinea</p>
    <div style="background:var(--sp-bg-subtle);border:1px solid var(--sp-border);border-radius:8px;padding:12px 14px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;">
        <pre style="margin:0;font-size:12px;font-family:var(--font-mono);white-space:pre-wrap;">import { SpButton } from 'sp-component/button';
import { SpInput } from 'sp-component/input';</pre>
        <sp-copy-button id="demo-cpbtn-multi" text="import { SpButton } from 'sp-component/button';"></sp-copy-button>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Deshabilitado</p>
    <div style="display:flex;gap:8px;">
      <sp-copy-button text="deshabilitado" disabled label="No disponible"></sp-copy-button>
      <sp-copy-button text="icon only" icon-only></sp-copy-button>
    </div>
  </div>
</div>`,
    events: [
      { name: "sp-copy", detail: "{ text: string }", desc: "Emitido al copiar correctamente al portapapeles" },
    ],
  },

  // ── Formularios ───────────────────────────────────────────────────────────

  input: {
    usage: `<sp-input label="Email" type="email" placeholder="tu@correo.com"></sp-input>
<sp-input label="Contraseña" type="password" clearable></sp-input>
<sp-input label="Solo lectura" value="valor fijo" readonly></sp-input>
<sp-input label="Con error" error="Este campo es requerido"></sp-input>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:440px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Tipos de input</p>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <sp-input label="Texto" placeholder="Escribe algo..." clearable></sp-input>
      <sp-input label="Email" type="email" placeholder="tu@correo.com" clearable></sp-input>
      <sp-input label="Contraseña" type="password" clearable></sp-input>
      <sp-input label="Número" type="number" placeholder="0"></sp-input>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con hint y error</p>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <sp-input label="Usuario" hint="Mínimo 3 caracteres" placeholder="nombre_usuario"></sp-input>
      <sp-input label="Con error" error="Este campo es requerido" value="abc"></sp-input>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Estados</p>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <sp-input label="Solo lectura" value="Valor fijo" readonly></sp-input>
      <sp-input label="Deshabilitado" value="No editable" disabled></sp-input>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Tamaños</p>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <sp-input label="Small" size="sm" placeholder="Tamaño pequeño"></sp-input>
      <sp-input label="Medium (default)" placeholder="Tamaño normal"></sp-input>
      <sp-input label="Large" size="lg" placeholder="Tamaño grande"></sp-input>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Con prefijos y sufijos</p>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <sp-input label="Búsqueda" placeholder="Buscar..." clearable>
        <svg slot="prefix" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      </sp-input>
      <sp-input label="Precio" placeholder="0.00">
        <span slot="prefix" style="font-size:13px;color:var(--sp-text-muted);">€</span>
      </sp-input>
      <sp-input label="Dominio" placeholder="miapp" value="miapp">
        <span slot="suffix" style="font-size:13px;color:var(--sp-text-muted);">.com</span>
      </sp-input>
    </div>
  </div>
</div>`,
    events: [
      { name: "sp-change", detail: "{ value: string }", desc: "Emitido cuando el valor cambia y el campo pierde foco" },
      { name: "sp-input",  detail: "{ value: string }", desc: "Emitido en cada pulsación de tecla" },
      { name: "sp-clear",  detail: "—", desc: "Emitido al hacer clic en el botón de limpiar" },
    ],
  },

  textarea: {
    usage: `<sp-textarea label="Descripción" placeholder="Escribe aquí…" rows="4"></sp-textarea>
<sp-textarea label="Con contador" maxlength="200" auto-resize></sp-textarea>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:480px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Básico con placeholder</p>
    <sp-textarea label="Descripción" placeholder="Escribe una descripción detallada…" rows="3"></sp-textarea>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con contador de caracteres</p>
    <sp-textarea label="Comentario" maxlength="200" hint="Máximo 200 caracteres" placeholder="Escribe tu comentario…" rows="3"></sp-textarea>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Auto-resize al escribir</p>
    <sp-textarea label="Notas (auto-resize)" auto-resize placeholder="Empieza a escribir y el campo crecerá…" rows="2"></sp-textarea>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Con error y validación</p>
    <sp-textarea label="Requerido" error="Este campo no puede estar vacío" rows="3" value=""></sp-textarea>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Readonly y deshabilitado</p>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <sp-textarea label="Solo lectura" value="Este contenido no se puede editar pero sí seleccionar." readonly rows="2"></sp-textarea>
      <sp-textarea label="Deshabilitado" value="Campo deshabilitado." disabled rows="2"></sp-textarea>
    </div>
  </div>
</div>`,
    events: [
      { name: "sp-change", detail: "{ value: string }", desc: "Emitido al cambiar el valor y perder foco" },
      { name: "sp-input",  detail: "{ value: string }", desc: "Emitido en cada pulsación" },
    ],
  },

  select: {
    usage: `<sp-select label="País" placeholder="Selecciona un país…" id="sel"></sp-select>
<script>
  document.getElementById('sel').options = [
    { value: 'es', label: 'España' },
    { value: 'mx', label: 'México' },
    { value: 'ar', label: 'Argentina' },
    { value: 'co', label: 'Colombia' },
    { value: 'cl', label: 'Chile' },
    { value: 'pe', label: 'Perú' },
    { value: 'us', label: 'Estados Unidos' },
  ];
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:420px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Selección simple</p>
    <sp-select id="demo-sel1" label="País de residencia" placeholder="Selecciona un país…" style="display:block;"></sp-select>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Selección múltiple</p>
    <sp-select id="demo-sel2" label="Frameworks favoritos" placeholder="Selecciona uno o más…" multiple style="display:block;"></sp-select>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con hint y error</p>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <sp-select id="demo-sel3" label="Rol de usuario" placeholder="Asigna un rol…" hint="El rol determina los permisos del usuario." style="display:block;"></sp-select>
      <sp-select id="demo-sel4" label="Categoría" placeholder="Selecciona…" error="Este campo es obligatorio." style="display:block;"></sp-select>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Tamaños</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-select id="demo-sel-sm" size="sm" label="Pequeño (sm)" placeholder="Selecciona…" style="display:block;"></sp-select>
      <sp-select id="demo-sel-md" size="md" label="Mediano (md)" placeholder="Selecciona…" style="display:block;"></sp-select>
      <sp-select id="demo-sel-lg" size="lg" label="Grande (lg)" placeholder="Selecciona…" style="display:block;"></sp-select>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Deshabilitado</p>
    <sp-select id="demo-sel-dis" label="Estado" disabled style="display:block;"></sp-select>
  </div>
</div>
<script>
(function(){
  var countries = [
    { value: 'es', label: 'España' },
    { value: 'mx', label: 'México' },
    { value: 'ar', label: 'Argentina' },
    { value: 'co', label: 'Colombia' },
    { value: 'cl', label: 'Chile' },
    { value: 'pe', label: 'Perú' },
    { value: 'us', label: 'Estados Unidos' },
    { value: 'br', label: 'Brasil' },
    { value: 'de', label: 'Alemania' },
    { value: 'fr', label: 'Francia' },
  ];
  var frameworks = [
    { value: 'react',   label: 'React' },
    { value: 'vue',     label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte',  label: 'Svelte' },
    { value: 'solid',   label: 'SolidJS' },
    { value: 'astro',   label: 'Astro' },
    { value: 'next',    label: 'Next.js' },
    { value: 'nuxt',    label: 'Nuxt' },
  ];
  var roles = [
    { value: 'admin',   label: 'Administrador' },
    { value: 'editor',  label: 'Editor' },
    { value: 'viewer',  label: 'Lector' },
    { value: 'billing', label: 'Facturación' },
  ];
  document.getElementById('demo-sel1').options  = countries;
  document.getElementById('demo-sel2').options  = frameworks;
  document.getElementById('demo-sel3').options  = roles;
  document.getElementById('demo-sel4').options  = [{ value: 'a', label: 'Tecnología' },{ value: 'b', label: 'Negocios' },{ value: 'c', label: 'Diseño' }];
  document.getElementById('demo-sel-sm').options = roles;
  document.getElementById('demo-sel-md').options = roles;
  document.getElementById('demo-sel-lg').options = roles;
  document.getElementById('demo-sel-dis').options = roles;
  document.getElementById('demo-sel-dis').value  = 'admin';
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string | string[] }", desc: "Emitido al cambiar la selección" },
    ],
  },

  combobox: {
    usage: `<sp-combobox label="Framework" placeholder="Selecciona o escribe…" id="cb" style="max-width:380px;display:block;"></sp-combobox>
<script>
  document.getElementById('cb').options = [
    { value: 'react',   label: 'React',    description: 'Meta — UI library' },
    { value: 'vue',     label: 'Vue',      description: 'Progressive framework' },
    { value: 'angular', label: 'Angular',  description: 'Google — Full framework' },
    { value: 'svelte',  label: 'Svelte',   description: 'Compiler-based' },
    { value: 'solid',   label: 'SolidJS',  description: 'Fine-grained reactivity' },
    { value: 'astro',   label: 'Astro',    description: 'Islands architecture' },
  ];
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:420px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Básico con descripción en opciones</p>
    <sp-combobox id="demo-cb1" label="Framework" placeholder="Selecciona o escribe…" clearable style="display:block;"></sp-combobox>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Selección múltiple</p>
    <sp-combobox id="demo-cb2" label="Tecnologías del stack" placeholder="Añade tecnologías…" multiple clearable style="display:block;"></sp-combobox>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Crear nueva opción (free-solo)</p>
    <sp-combobox id="demo-cb3" label="Etiqueta del proyecto" placeholder="Selecciona o crea una etiqueta…" free-solo clearable style="display:block;"></sp-combobox>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Con hint y error</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-combobox id="demo-cb4" label="País principal" placeholder="Escribe para filtrar…" hint="Puedes escribir el nombre del país." style="display:block;"></sp-combobox>
      <sp-combobox id="demo-cb5" label="Herramienta (requerida)" placeholder="Selecciona…" error="Debes elegir al menos una herramienta." style="display:block;"></sp-combobox>
    </div>
  </div>
</div>
<script>
(function(){
  var frameworks = [
    { value: 'react',   label: 'React',    description: 'Meta — UI library' },
    { value: 'vue',     label: 'Vue',      description: 'Progressive framework' },
    { value: 'angular', label: 'Angular',  description: 'Google — Full framework' },
    { value: 'svelte',  label: 'Svelte',   description: 'Compiler-based' },
    { value: 'solid',   label: 'SolidJS',  description: 'Fine-grained reactivity' },
    { value: 'astro',   label: 'Astro',    description: 'Islands architecture' },
    { value: 'lit',     label: 'Lit',      description: 'Web Components library' },
    { value: 'next',    label: 'Next.js',  description: 'React meta-framework' },
    { value: 'nuxt',    label: 'Nuxt',     description: 'Vue meta-framework' },
  ];
  var stack = [
    { value: 'ts',     label: 'TypeScript' },
    { value: 'node',   label: 'Node.js' },
    { value: 'docker', label: 'Docker' },
    { value: 'pg',     label: 'PostgreSQL' },
    { value: 'redis',  label: 'Redis' },
    { value: 'gql',    label: 'GraphQL' },
    { value: 'rest',   label: 'REST API' },
    { value: 'ci',     label: 'GitHub Actions' },
  ];
  var labels = [
    { value: 'bug',     label: '🐛 Bug' },
    { value: 'feature', label: '✨ Feature' },
    { value: 'docs',    label: '📝 Docs' },
    { value: 'perf',    label: '⚡ Performance' },
    { value: 'refactor',label: '♻️ Refactor' },
  ];
  var countries = [
    { value: 'es', label: 'España' }, { value: 'mx', label: 'México' },
    { value: 'ar', label: 'Argentina' }, { value: 'co', label: 'Colombia' },
    { value: 'cl', label: 'Chile' }, { value: 'pe', label: 'Perú' },
    { value: 'us', label: 'Estados Unidos' }, { value: 'br', label: 'Brasil' },
  ];
  var tools = [
    { value: 'vs',    label: 'VS Code' },
    { value: 'idea',  label: 'IntelliJ IDEA' },
    { value: 'vim',   label: 'Vim/Neovim' },
    { value: 'atom',  label: 'Atom' },
  ];
  document.getElementById('demo-cb1').options = frameworks;
  document.getElementById('demo-cb2').options = stack;
  document.getElementById('demo-cb3').options = labels;
  document.getElementById('demo-cb4').options = countries;
  document.getElementById('demo-cb5').options = tools;
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string | string[] }", desc: "Emitido al seleccionar una opción" },
      { name: "sp-input",  detail: "{ value: string }", desc: "Emitido al escribir en el campo de búsqueda" },
    ],
  },

  checkbox: {
    usage: `<sp-checkbox label="Acepto los términos" value="terms"></sp-checkbox>
<sp-checkbox label="Estado intermedio" indeterminate></sp-checkbox>
<sp-checkbox label="Deshabilitado" disabled checked></sp-checkbox>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:400px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Estados básicos</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-checkbox label="Sin marcar (default)"></sp-checkbox>
      <sp-checkbox label="Marcado" checked></sp-checkbox>
      <sp-checkbox label="Indeterminado" indeterminate></sp-checkbox>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con hint y error</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-checkbox label="Acepto los términos y condiciones" hint="Requerido para continuar"></sp-checkbox>
      <sp-checkbox label="Con error" error="Debes aceptar para continuar"></sp-checkbox>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Deshabilitados</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-checkbox label="Deshabilitado sin marcar" disabled></sp-checkbox>
      <sp-checkbox label="Deshabilitado marcado" disabled checked></sp-checkbox>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Tamaños</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-checkbox label="Small" size="sm" checked></sp-checkbox>
      <sp-checkbox label="Medium (default)" checked></sp-checkbox>
      <sp-checkbox label="Large" size="lg" checked></sp-checkbox>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Interactivo — seleccionar todos</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-checkbox id="demo-cb-all" label="Seleccionar todos" indeterminate></sp-checkbox>
      <div style="padding-left:20px;display:flex;flex-direction:column;gap:6px;">
        <sp-checkbox class="demo-cb-item" label="Opción A" checked></sp-checkbox>
        <sp-checkbox class="demo-cb-item" label="Opción B" checked></sp-checkbox>
        <sp-checkbox class="demo-cb-item" label="Opción C"></sp-checkbox>
      </div>
    </div>
  </div>
</div>
<script>
(function(){
  var all = document.getElementById('demo-cb-all');
  var items = document.querySelectorAll('.demo-cb-item');
  function syncAll() {
    var checked = Array.from(items).filter(function(i){ return i.checked; }).length;
    all.indeterminate = checked > 0 && checked < items.length;
    all.checked = checked === items.length;
  }
  items.forEach(function(item){ item.addEventListener('sp-change', syncAll); });
  all.addEventListener('sp-change', function(){
    items.forEach(function(item){ item.checked = all.checked; });
  });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ checked: boolean, indeterminate: boolean }", desc: "Emitido al cambiar el estado" },
    ],
  },

  "checkbox-group": {
    usage: `<sp-checkbox-group label="Lenguajes favoritos" id="langs"></sp-checkbox-group>
<script>
  const group = document.getElementById('langs');
  ['JavaScript','TypeScript','Python','Rust'].forEach(lang => {
    const cb = document.createElement('sp-checkbox');
    cb.label = lang;
    cb.value = lang.toLowerCase();
    group.appendChild(cb);
  });
  group.values = 'javascript,typescript';
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:480px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Selección múltiple básica</p>
    <sp-checkbox-group id="demo-cbg1" label="Frameworks favoritos">
      <sp-checkbox value="react" label="React" checked></sp-checkbox>
      <sp-checkbox value="vue" label="Vue"></sp-checkbox>
      <sp-checkbox value="angular" label="Angular"></sp-checkbox>
      <sp-checkbox value="svelte" label="Svelte" checked></sp-checkbox>
    </sp-checkbox-group>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Orientación horizontal</p>
    <sp-checkbox-group label="Tallas disponibles" orientation="horizontal">
      <sp-checkbox value="xs" label="XS"></sp-checkbox>
      <sp-checkbox value="s" label="S" checked></sp-checkbox>
      <sp-checkbox value="m" label="M" checked></sp-checkbox>
      <sp-checkbox value="l" label="L"></sp-checkbox>
      <sp-checkbox value="xl" label="XL"></sp-checkbox>
    </sp-checkbox-group>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con límite de selección (max=2)</p>
    <sp-checkbox-group label="Elige hasta 2 opciones" max="2" id="demo-cbg3">
      <sp-checkbox value="a" label="Frontend"></sp-checkbox>
      <sp-checkbox value="b" label="Backend"></sp-checkbox>
      <sp-checkbox value="c" label="DevOps"></sp-checkbox>
      <sp-checkbox value="d" label="Mobile"></sp-checkbox>
    </sp-checkbox-group>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Con ítems deshabilitados</p>
    <sp-checkbox-group label="Permisos del sistema">
      <sp-checkbox value="read" label="Leer" checked></sp-checkbox>
      <sp-checkbox value="write" label="Escribir" checked></sp-checkbox>
      <sp-checkbox value="delete" label="Eliminar (restringido)" disabled></sp-checkbox>
      <sp-checkbox value="admin" label="Administrar (restringido)" disabled></sp-checkbox>
    </sp-checkbox-group>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Resultado de selección</p>
    <sp-checkbox-group id="demo-cbg5" label="Categorías de notificaciones">
      <sp-checkbox value="email" label="Email" checked></sp-checkbox>
      <sp-checkbox value="push" label="Push" checked></sp-checkbox>
      <sp-checkbox value="sms" label="SMS"></sp-checkbox>
      <sp-checkbox value="slack" label="Slack"></sp-checkbox>
    </sp-checkbox-group>
    <div id="demo-cbg5-out" style="margin-top:8px;font-size:12px;color:var(--sp-text-muted);font-family:var(--font-mono);"></div>
  </div>
</div>
<script>
(function(){
  var g = document.getElementById('demo-cbg5');
  var out = document.getElementById('demo-cbg5-out');
  function show(){ out.textContent = 'Seleccionado: [' + (g.values||[]).join(', ') + ']'; }
  show();
  g.addEventListener('sp-change', show);
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ values: string[] }", desc: "Emitido cuando la selección cambia" },
    ],
    slots: [
      { name: "(default)", desc: "Elementos sp-checkbox del grupo" },
    ],
  },

  switch: {
    usage: `<sp-switch label="Notificaciones"></sp-switch>
<sp-switch label="Modo oscuro" checked on-label="ON" off-label="OFF"></sp-switch>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:400px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Básicos</p>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <sp-switch label="Notificaciones push"></sp-switch>
      <sp-switch label="Modo oscuro" checked></sp-switch>
      <sp-switch label="Sincronización automática" checked></sp-switch>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con etiquetas ON/OFF</p>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <sp-switch label="Activar servicio" on-label="Activo" off-label="Inactivo" checked></sp-switch>
      <sp-switch label="Modo mantenimiento" on-label="ON" off-label="OFF"></sp-switch>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Tamaños</p>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <sp-switch label="Small" size="sm" checked></sp-switch>
      <sp-switch label="Medium (default)" checked></sp-switch>
      <sp-switch label="Large" size="lg" checked></sp-switch>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Deshabilitados</p>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <sp-switch label="Deshabilitado (off)" disabled></sp-switch>
      <sp-switch label="Deshabilitado (on)" disabled checked></sp-switch>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Ajustes de usuario</p>
    <div style="display:flex;flex-direction:column;gap:10px;border:1px solid var(--sp-border);border-radius:8px;padding:14px;">
      <sp-switch id="demo-sw-email" label="Correos de marketing" checked></sp-switch>
      <sp-switch id="demo-sw-2fa" label="Autenticación en dos pasos"></sp-switch>
      <sp-switch id="demo-sw-pub" label="Perfil público" checked></sp-switch>
      <sp-switch id="demo-sw-sound" label="Sonidos de la app" checked></sp-switch>
    </div>
    <p id="demo-sw-out" style="font-size:12px;color:var(--sp-text-muted);margin-top:8px;font-family:var(--font-mono);"></p>
  </div>
</div>
<script>
(function(){
  var switches = ['demo-sw-email','demo-sw-2fa','demo-sw-pub','demo-sw-sound'];
  var out = document.getElementById('demo-sw-out');
  function show(){
    var on = switches.filter(function(id){ return document.getElementById(id).checked; });
    out.textContent = on.length + ' de 4 opciones activadas';
  }
  show();
  switches.forEach(function(id){ document.getElementById(id).addEventListener('sp-change', show); });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ checked: boolean }", desc: "Emitido al cambiar el estado del toggle" },
    ],
  },

  radio: {
    usage: `<sp-radio-group label="Talla" name="talla">
  <sp-radio value="s">S</sp-radio>
  <sp-radio value="m">M</sp-radio>
  <sp-radio value="l">L</sp-radio>
  <sp-radio value="xl">XL</sp-radio>
</sp-radio-group>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:440px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Grupo vertical (default)</p>
    <sp-radio-group label="Plan de suscripción" name="plan">
      <sp-radio value="free">Free — Sin coste</sp-radio>
      <sp-radio value="pro" checked>Pro — 9€/mes</sp-radio>
      <sp-radio value="enterprise">Enterprise — Contactar</sp-radio>
    </sp-radio-group>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Orientación horizontal</p>
    <sp-radio-group label="Talla" name="talla" orientation="horizontal">
      <sp-radio value="s">S</sp-radio>
      <sp-radio value="m" checked>M</sp-radio>
      <sp-radio value="l">L</sp-radio>
      <sp-radio value="xl">XL</sp-radio>
    </sp-radio-group>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con ítems deshabilitados</p>
    <sp-radio-group label="Método de pago" name="payment">
      <sp-radio value="card" checked>Tarjeta de crédito</sp-radio>
      <sp-radio value="paypal">PayPal</sp-radio>
      <sp-radio value="crypto" disabled>Criptomoneda (próximamente)</sp-radio>
    </sp-radio-group>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Grupo deshabilitado</p>
    <sp-radio-group label="Configuración (bloqueada)" name="config" disabled>
      <sp-radio value="auto" checked>Automático</sp-radio>
      <sp-radio value="manual">Manual</sp-radio>
    </sp-radio-group>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Con resultado dinámico</p>
    <sp-radio-group id="demo-radio-sel" label="Zona horaria" name="tz">
      <sp-radio value="utc">UTC+0 — Londres</sp-radio>
      <sp-radio value="cet" checked>UTC+1 — Madrid</sp-radio>
      <sp-radio value="est">UTC-5 — Nueva York</sp-radio>
      <sp-radio value="pst">UTC-8 — Los Ángeles</sp-radio>
    </sp-radio-group>
    <p id="demo-radio-out" style="margin-top:8px;font-size:12px;color:var(--sp-text-muted);">Seleccionado: UTC+1 — Madrid</p>
  </div>
</div>
<script>
(function(){
  var rg = document.getElementById('demo-radio-sel');
  var out = document.getElementById('demo-radio-out');
  rg.addEventListener('sp-change', function(e){ out.textContent = 'Seleccionado: ' + e.detail.value; });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string }", desc: "Emitido al seleccionar un radio" },
    ],
    slots: [
      { name: "(default)", desc: "Elementos sp-radio del grupo" },
    ],
  },

  slider: {
    usage: `<sp-slider label="Volumen" min="0" max="100" value="50" show-value></sp-slider>
<sp-slider label="Rango de precio" min="0" max="1000" step="10"></sp-slider>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:480px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Básico con valor visible</p>
    <sp-slider label="Volumen" min="0" max="100" value="65" show-value></sp-slider>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con paso y marcas</p>
    <sp-slider label="Velocidad de reproducción" min="0.5" max="2" step="0.25" value="1" show-value marks></sp-slider>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Rango dual</p>
    <sp-slider label="Precio (€)" min="0" max="500" value-start="50" value-end="300" show-value range></sp-slider>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Deshabilitado</p>
    <sp-slider label="Configuración del sistema (bloqueada)" min="0" max="100" value="40" disabled></sp-slider>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Control de brillo</p>
    <sp-slider id="demo-sl-bright" label="Brillo de pantalla" min="10" max="100" value="80" show-value></sp-slider>
    <div id="demo-sl-preview" style="margin-top:10px;height:48px;border-radius:8px;background:linear-gradient(135deg,#6366f1,#a855f7);opacity:0.8;transition:opacity .2s;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:600;">Vista previa de brillo</div>
  </div>
</div>
<script>
(function(){
  var sl = document.getElementById('demo-sl-bright');
  var preview = document.getElementById('demo-sl-preview');
  sl.addEventListener('sp-input', function(e){ preview.style.opacity = e.detail.value / 100; });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: number }", desc: "Emitido al soltar el thumb" },
      { name: "sp-input",  detail: "{ value: number }", desc: "Emitido mientras se arrastra" },
    ],
  },

  rating: {
    usage: `<sp-rating value="3"></sp-rating>
<sp-rating value="4.5" max="5" size="lg"></sp-rating>
<sp-rating value="3" readonly></sp-rating>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:440px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Básico interactivo</p>
    <sp-rating id="demo-rat-basic" value="3"></sp-rating>
    <p id="demo-rat-basic-out" style="font-size:12px;color:var(--sp-text-muted);margin-top:6px;">Puntuación: 3 / 5</p>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con medias estrellas</p>
    <sp-rating value="3.5" allow-half></sp-rating>
    <sp-rating value="4.5" allow-half></sp-rating>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Tamaños</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-rating value="4" size="sm"></sp-rating>
      <sp-rating value="4" size="md"></sp-rating>
      <sp-rating value="4" size="lg"></sp-rating>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Solo lectura y deshabilitado</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-rating value="4.5" allow-half readonly></sp-rating>
      <sp-rating value="2" disabled></sp-rating>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Distribución de opiniones</p>
    <div style="display:flex;flex-direction:column;gap:4px;">
      <div style="display:flex;align-items:center;gap:8px;">
        <sp-rating value="5" max="5" readonly size="sm"></sp-rating><span style="font-size:12px;color:var(--sp-text-muted);">142 reseñas</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <sp-rating value="4" max="5" readonly size="sm"></sp-rating><span style="font-size:12px;color:var(--sp-text-muted);">87 reseñas</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <sp-rating value="3" max="5" readonly size="sm"></sp-rating><span style="font-size:12px;color:var(--sp-text-muted);">34 reseñas</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <sp-rating value="2" max="5" readonly size="sm"></sp-rating><span style="font-size:12px;color:var(--sp-text-muted);">12 reseñas</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <sp-rating value="1" max="5" readonly size="sm"></sp-rating><span style="font-size:12px;color:var(--sp-text-muted);">5 reseñas</span>
      </div>
    </div>
  </div>
</div>
<script>
(function(){
  var rat = document.getElementById('demo-rat-basic');
  var out = document.getElementById('demo-rat-basic-out');
  rat.addEventListener('sp-change', function(e){ out.textContent = 'Puntuación: ' + e.detail.value + ' / 5'; });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: number }", desc: "Emitido al hacer clic en una estrella" },
      { name: "sp-hover",  detail: "{ value: number }", desc: "Emitido al pasar el cursor sobre una estrella" },
    ],
  },

  "number-input": {
    usage: `<sp-number-input label="Cantidad" min="1" max="99" value="1"></sp-number-input>
<sp-number-input label="Precio" min="0" step="0.01" hint="En euros"></sp-number-input>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:400px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Cantidad básica</p>
    <sp-number-input label="Unidades" min="1" max="99" value="1"></sp-number-input>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Precio con decimales</p>
    <sp-number-input label="Precio (€)" min="0" step="0.01" value="9.99" hint="IVA no incluido"></sp-number-input>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con paso grande</p>
    <sp-number-input label="Años de experiencia" min="0" max="50" step="5" value="5"></sp-number-input>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Deshabilitado</p>
    <sp-number-input label="Versión del sistema" value="2024" disabled></sp-number-input>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Carrito de compra</p>
    <div style="display:flex;align-items:center;gap:12px;border:1px solid var(--sp-border);border-radius:8px;padding:12px;">
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:600;">Camiseta Premium</div>
        <div style="font-size:12px;color:var(--sp-text-muted);">29.99 €/ud</div>
      </div>
      <sp-number-input id="demo-ni-qty" min="1" max="10" value="1" size="sm" style="width:100px;"></sp-number-input>
      <div id="demo-ni-total" style="font-size:14px;font-weight:700;color:var(--sp-primary);min-width:60px;text-align:right;">29.99 €</div>
    </div>
  </div>
</div>
<script>
(function(){
  var ni = document.getElementById('demo-ni-qty');
  var total = document.getElementById('demo-ni-total');
  ni.addEventListener('sp-change', function(e){
    total.textContent = (e.detail.value * 29.99).toFixed(2) + ' €';
  });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: number }", desc: "Emitido al cambiar el valor" },
      { name: "sp-input",  detail: "{ value: number }", desc: "Emitido en cada pulsación" },
    ],
  },

  "otp-input": {
    usage: `<sp-otp-input length="6"></sp-otp-input>
<sp-otp-input length="4" input-type="numeric" size="lg"></sp-otp-input>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:500px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · 6 dígitos numéricos</p>
    <sp-otp-input id="demo-otp1" length="6" input-type="numeric"></sp-otp-input>
    <p id="demo-otp1-out" style="font-size:12px;color:var(--sp-text-muted);margin-top:8px;">Escribe el código recibido por SMS</p>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · 4 dígitos grande (PIN)</p>
    <sp-otp-input id="demo-otp2" length="4" input-type="numeric" size="lg"></sp-otp-input>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Alfanumérico y enmascarado</p>
    <sp-otp-input length="6" input-type="alphanumeric" masked></sp-otp-input>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">4 · Con valor precargado</p>
    <sp-otp-input id="demo-otp4" length="6" value="123456"></sp-otp-input>
    <sp-button size="sm" variant="secondary" id="demo-otp4-clear" style="margin-top:8px;">Limpiar</sp-button>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">5 · Verificación con temporizador</p>
    <sp-otp-input id="demo-otp5" length="6" input-type="numeric"></sp-otp-input>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;">
      <span id="demo-otp5-timer" style="font-size:12px;color:var(--sp-text-muted);">Código válido por: 60s</span>
      <sp-button size="xs" variant="ghost" id="demo-otp5-resend" disabled>Reenviar</sp-button>
    </div>
  </div>
</div>
<script>
(function(){
  var otp1 = document.getElementById('demo-otp1');
  var out1 = document.getElementById('demo-otp1-out');
  otp1.addEventListener('sp-complete', function(e){ out1.textContent = 'Código completo: ' + e.detail.value; out1.style.color='var(--sp-success)'; });
  otp1.addEventListener('sp-change', function(e){ if(e.detail.value.length<6){ out1.textContent='Escribe el código recibido por SMS'; out1.style.color=''; }});

  document.getElementById('demo-otp4-clear').addEventListener('click', function(){ document.getElementById('demo-otp4').value=''; });

  var secs = 60;
  var timer = document.getElementById('demo-otp5-timer');
  var resend = document.getElementById('demo-otp5-resend');
  var iv = setInterval(function(){
    secs--;
    timer.textContent = 'Código válido por: ' + secs + 's';
    if(secs <= 0){ clearInterval(iv); timer.textContent='Código expirado'; resend.removeAttribute('disabled'); }
  }, 1000);
  resend.addEventListener('click', function(){ secs=60; resend.setAttribute('disabled',''); iv=setInterval(function(){ secs--; timer.textContent='Código válido por: '+secs+'s'; if(secs<=0){ clearInterval(iv); timer.textContent='Código expirado'; resend.removeAttribute('disabled'); }},1000); });
})();
</script>`,
    events: [
      { name: "sp-complete", detail: "{ value: string }", desc: "Emitido cuando todos los dígitos están completados" },
      { name: "sp-change",   detail: "{ value: string }", desc: "Emitido al cambiar cualquier dígito" },
    ],
  },

  "tag-input": {
    usage: `<sp-tag-input label="Tecnologías" placeholder="Añadir…" id="ti"></sp-tag-input>
<script>
  document.getElementById('ti').values = ['JavaScript', 'TypeScript'];
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:480px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Básico — añadir con Enter</p>
    <sp-tag-input id="demo-ti1" label="Habilidades" placeholder="Escribe y pulsa Enter…"></sp-tag-input>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con valores precargados</p>
    <sp-tag-input id="demo-ti2" label="Tecnologías favoritas" placeholder="Añadir tecnología…"></sp-tag-input>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Límite de tags (max=3)</p>
    <sp-tag-input id="demo-ti3" label="Hasta 3 etiquetas" placeholder="Añadir etiqueta…" max="3" hint="Máximo 3 etiquetas"></sp-tag-input>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Solo lectura</p>
    <sp-tag-input id="demo-ti4" label="Categorías asignadas" readonly></sp-tag-input>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Resultado de cambios</p>
    <sp-tag-input id="demo-ti5" label="Palabras clave" placeholder="Añadir keyword…"></sp-tag-input>
    <div id="demo-ti5-out" style="margin-top:8px;font-size:12px;color:var(--sp-text-muted);font-family:var(--font-mono);"></div>
  </div>
</div>
<script>
(function(){
  var t2 = document.getElementById('demo-ti2');
  t2.values = ['JavaScript','TypeScript','Lit'];
  var t3 = document.getElementById('demo-ti3');
  t3.values = ['Frontend'];
  var t4 = document.getElementById('demo-ti4');
  t4.values = ['Design System','Web Components','Accesibilidad'];
  var t5 = document.getElementById('demo-ti5');
  var out = document.getElementById('demo-ti5-out');
  t5.values = ['sp-button'];
  function show(){ out.textContent = 'Tags: [' + (t5.values||[]).join(', ') + ']'; }
  show();
  t5.addEventListener('sp-change', show);
})();
</script>`,
    events: [
      { name: "sp-add",    detail: "{ value: string }",  desc: "Emitido al añadir un tag" },
      { name: "sp-remove", detail: "{ value: string }",  desc: "Emitido al eliminar un tag" },
      { name: "sp-change", detail: "{ values: string[] }", desc: "Emitido tras cualquier cambio" },
    ],
  },

  autocomplete: {
    usage: `<sp-autocomplete label="País" placeholder="Busca un país…" clearable id="ac-single" style="max-width:380px;display:block;"></sp-autocomplete>
<script>
  document.getElementById('ac-single').options = [
    { value: 'us', label: 'United States', group: 'Americas' },
    { value: 'ca', label: 'Canada', group: 'Americas' },
    { value: 'mx', label: 'Mexico', group: 'Americas' },
    { value: 'br', label: 'Brazil', group: 'Americas' },
    { value: 'gb', label: 'United Kingdom', group: 'Europe' },
    { value: 'de', label: 'Germany', group: 'Europe' },
    { value: 'fr', label: 'France', group: 'Europe' },
    { value: 'es', label: 'Spain', group: 'Europe' },
    { value: 'jp', label: 'Japan', group: 'Asia' },
    { value: 'cn', label: 'China', group: 'Asia' },
    { value: 'in', label: 'India', group: 'Asia' },
  ];
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
  <sp-autocomplete id="demo-ac" label="País" placeholder="Busca un país…" clearable style="display:block;"></sp-autocomplete>
  <sp-autocomplete id="demo-ac-multi" label="Tecnologías" placeholder="Selecciona varias…" multiple clearable style="display:block;"></sp-autocomplete>
</div>
<script>
(function(){
  var COUNTRIES = [
    { value: 'us', label: 'United States', group: 'Americas' },
    { value: 'ca', label: 'Canada', group: 'Americas' },
    { value: 'mx', label: 'Mexico', group: 'Americas' },
    { value: 'br', label: 'Brazil', group: 'Americas' },
    { value: 'gb', label: 'United Kingdom', group: 'Europe' },
    { value: 'de', label: 'Germany', group: 'Europe' },
    { value: 'fr', label: 'France', group: 'Europe' },
    { value: 'es', label: 'Spain', group: 'Europe' },
    { value: 'jp', label: 'Japan', group: 'Asia' },
    { value: 'cn', label: 'China', group: 'Asia' },
    { value: 'in', label: 'India', group: 'Asia' },
  ];
  var TECH = [
    { value: 'ts',      label: 'TypeScript',  description: 'Typed JavaScript' },
    { value: 'react',   label: 'React',       description: 'UI library' },
    { value: 'vue',     label: 'Vue',         description: 'Progressive framework' },
    { value: 'svelte',  label: 'Svelte',      description: 'Compiler-based framework' },
    { value: 'astro',   label: 'Astro',       description: 'Islands architecture' },
    { value: 'node',    label: 'Node.js',     description: 'JavaScript runtime' },
    { value: 'deno',    label: 'Deno',        description: 'Secure runtime' },
    { value: 'lit',     label: 'Lit',         description: 'Web Components library' },
  ];
  document.getElementById('demo-ac').options = COUNTRIES;
  document.getElementById('demo-ac-multi').options = TECH;
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string | string[] }", desc: "Emitido al seleccionar una opción" },
      { name: "sp-input",  detail: "{ value: string }", desc: "Emitido al escribir en el campo" },
      { name: "sp-create", detail: "{ value: string }", desc: "Emitido al crear una opción nueva (creatable=true)" },
    ],
  },

  "file-upload": {
    usage: `<sp-file-upload label="Sube tu CV" accept=".pdf,.doc,.docx" hint="Máx. 5 MB"></sp-file-upload>
<sp-file-upload label="Imágenes" accept="image/*" multiple></sp-file-upload>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:520px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Básico drag & drop</p>
    <sp-file-upload label="Sube un archivo" hint="Arrastra o haz clic para seleccionar"></sp-file-upload>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Solo imágenes (con preview)</p>
    <sp-file-upload label="Foto de perfil" accept="image/*" preview hint="PNG, JPG, GIF hasta 2 MB"></sp-file-upload>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Múltiples archivos</p>
    <sp-file-upload label="Documentos del proyecto" accept=".pdf,.doc,.docx,.xlsx" multiple hint="Máx. 5 archivos, 10 MB cada uno"></sp-file-upload>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Con límite de tamaño</p>
    <sp-file-upload label="Avatar" accept="image/*" max-size="1048576" hint="Máximo 1 MB"></sp-file-upload>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Deshabilitado</p>
    <sp-file-upload label="Adjuntar archivos (inactivo)" disabled hint="Sube archivos cuando sea necesario"></sp-file-upload>
  </div>
</div>`,
    events: [
      { name: "sp-change",  detail: "{ files: File[] }", desc: "Emitido al seleccionar o soltar archivos" },
      { name: "sp-remove",  detail: "{ file: File }",    desc: "Emitido al quitar un archivo de la lista" },
      { name: "sp-invalid", detail: "{ file: File, reason: string }", desc: "Emitido cuando un archivo no pasa la validación" },
    ],
  },

  "form-field": {
    usage: `<sp-form-field label="Nombre completo">
  <input type="text" placeholder="Juan García" />
</sp-form-field>
<sp-form-field label="Descripción" hint="Máx. 500 caracteres" error="Este campo es requerido">
  <textarea></textarea>
</sp-form-field>`,
    demo: `<div style="display:flex;flex-direction:column;gap:16px;max-width:440px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Input nativo con label flotante</p>
    <sp-form-field label="Nombre completo">
      <input type="text" placeholder="Juan García" style="width:100%;border:1px solid var(--sp-border);border-radius:6px;padding:10px 12px;font-size:14px;outline:none;background:var(--sp-bg);color:var(--sp-text);" />
    </sp-form-field>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con hint</p>
    <sp-form-field label="Nombre de usuario" hint="Solo letras, números y guion bajo">
      <input type="text" placeholder="mi_usuario" style="width:100%;border:1px solid var(--sp-border);border-radius:6px;padding:10px 12px;font-size:14px;outline:none;background:var(--sp-bg);color:var(--sp-text);" />
    </sp-form-field>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con error</p>
    <sp-form-field label="Email" error="El email no es válido">
      <input type="email" value="no-es-email" style="width:100%;border:1px solid var(--sp-error);border-radius:6px;padding:10px 12px;font-size:14px;outline:none;background:var(--sp-bg);color:var(--sp-text);" />
    </sp-form-field>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Textarea con contador</p>
    <sp-form-field label="Descripción" hint="Máx. 200 caracteres">
      <textarea rows="3" placeholder="Escribe una descripción…" style="width:100%;border:1px solid var(--sp-border);border-radius:6px;padding:10px 12px;font-size:14px;outline:none;background:var(--sp-bg);color:var(--sp-text);resize:vertical;"></textarea>
    </sp-form-field>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Requerido y deshabilitado</p>
    <sp-form-field label="Campo requerido *" required>
      <input type="text" placeholder="Obligatorio" style="width:100%;border:1px solid var(--sp-border);border-radius:6px;padding:10px 12px;font-size:14px;outline:none;background:var(--sp-bg);color:var(--sp-text);" />
    </sp-form-field>
    <sp-form-field label="Campo deshabilitado" style="margin-top:10px;" disabled>
      <input type="text" value="No editable" disabled style="width:100%;border:1px solid var(--sp-border);border-radius:6px;padding:10px 12px;font-size:14px;outline:none;background:var(--sp-bg-muted);color:var(--sp-text-muted);" />
    </sp-form-field>
  </div>
</div>`,
    slots: [
      { name: "(default)", desc: "El input, textarea u otro control del formulario" },
    ],
  },

  "time-picker": {
    usage: `<sp-time-picker label="Hora de inicio" format="24"></sp-time-picker>
<sp-time-picker label="Cita" format="12" show-seconds min="08:00" max="20:00"></sp-time-picker>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:380px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Formato 24h</p>
    <sp-time-picker label="Hora de inicio" format="24" style="display:block;"></sp-time-picker>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Formato 12h (AM/PM)</p>
    <sp-time-picker label="Hora de la cita" format="12" style="display:block;"></sp-time-picker>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con segundos y rango horario</p>
    <sp-time-picker label="Turno laboral" format="24" show-seconds min="08:00" max="20:00" step="900" style="display:block;"></sp-time-picker>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Con valor precargado</p>
    <sp-time-picker label="Reunión diaria" value="09:30" format="24" style="display:block;"></sp-time-picker>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Resultado en tiempo real</p>
    <sp-time-picker id="demo-tp-live" label="Selecciona una hora" format="24" style="display:block;"></sp-time-picker>
    <p id="demo-tp-out" style="font-size:12px;color:var(--sp-text-muted);margin-top:8px;">Sin selección</p>
  </div>
</div>
<script>
(function(){
  var tp = document.getElementById('demo-tp-live');
  var out = document.getElementById('demo-tp-out');
  tp.addEventListener('sp-change', function(e){ out.textContent = 'Hora seleccionada: ' + e.detail.value; });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string }", desc: "Emitido al seleccionar una hora (formato HH:mm[:ss])" },
    ],
  },

  "color-picker": {
    usage: `<sp-color-picker value="#3b82f6"></sp-color-picker>
<sp-color-picker value="rgb(59,130,246)" format="rgb" show-alpha id="cp"></sp-color-picker>
<script>
  document.getElementById('cp').swatches = ['#ef4444','#f97316','#eab308','#22c55e','#3b82f6','#8b5cf6'];
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:480px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Básico HEX</p>
    <sp-color-picker id="demo-cp1" value="#6366f1" label="Color primario"></sp-color-picker>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Con canal alfa (transparencia)</p>
    <sp-color-picker value="#3b82f680" show-alpha label="Color con transparencia"></sp-color-picker>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Formato RGB</p>
    <sp-color-picker value="#22c55e" format="rgb" label="Color en RGB"></sp-color-picker>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">4 · Con swatches predefinidos</p>
    <sp-color-picker id="demo-cp4" value="#ef4444" label="Color de marca"></sp-color-picker>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">5 · Vista previa en tiempo real</p>
    <sp-color-picker id="demo-cp5" value="#6366f1" label="Personaliza el color"></sp-color-picker>
    <div id="demo-cp5-preview" style="margin-top:12px;height:60px;border-radius:10px;background:#6366f1;transition:background .2s;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:600;font-family:var(--font-mono);">#6366f1</div>
  </div>
</div>
<script>
(function(){
  var cp4 = document.getElementById('demo-cp4');
  cp4.swatches = ['#ef4444','#f97316','#eab308','#22c55e','#3b82f6','#8b5cf6','#ec4899','#06b6d4'];
  var cp5 = document.getElementById('demo-cp5');
  var preview = document.getElementById('demo-cp5-preview');
  cp5.addEventListener('sp-change', function(e){
    preview.style.background = e.detail.value;
    preview.textContent = e.detail.value;
  });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string }", desc: "Emitido al cambiar el color" },
      { name: "sp-input",  detail: "{ value: string }", desc: "Emitido mientras se arrastra el selector" },
    ],
  },

  "inline-edit": {
    usage: `<!-- Texto que se edita al hacer clic -->
<sp-inline-edit value="Mi título editable"></sp-inline-edit>

<!-- Confirmación con Enter, cancelación con Esc -->
<sp-inline-edit value="42" type="number" empty-text="Haz clic para añadir"></sp-inline-edit>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:480px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Texto editable (haz clic)</p>
    <sp-inline-edit id="demo-ie1" value="Título del proyecto"></sp-inline-edit>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Campo numérico</p>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="font-size:13px;color:var(--sp-text-muted);">Presupuesto: </span>
      <sp-inline-edit id="demo-ie2" value="2500" type="number"></sp-inline-edit>
      <span style="font-size:13px;color:var(--sp-text-muted);">€</span>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Vacío con placeholder</p>
    <sp-inline-edit id="demo-ie3" empty-text="Haz clic para añadir descripción…"></sp-inline-edit>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Solo lectura</p>
    <sp-inline-edit value="Este valor no se puede editar" readonly></sp-inline-edit>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Lista de tareas editable</p>
    <div style="display:flex;flex-direction:column;gap:6px;">
      <div style="display:flex;align-items:center;gap:8px;padding:6px;border:1px solid var(--sp-border);border-radius:6px;background:var(--sp-bg);">
        <input type="checkbox" style="width:14px;height:14px;accent-color:var(--sp-primary);" checked>
        <sp-inline-edit value="Diseñar sistema de colores" style="flex:1;"></sp-inline-edit>
      </div>
      <div style="display:flex;align-items:center;gap:8px;padding:6px;border:1px solid var(--sp-border);border-radius:6px;background:var(--sp-bg);">
        <input type="checkbox" style="width:14px;height:14px;accent-color:var(--sp-primary);">
        <sp-inline-edit value="Implementar dark mode" style="flex:1;"></sp-inline-edit>
      </div>
      <div style="display:flex;align-items:center;gap:8px;padding:6px;border:1px solid var(--sp-border);border-radius:6px;background:var(--sp-bg);">
        <input type="checkbox" style="width:14px;height:14px;accent-color:var(--sp-primary);">
        <sp-inline-edit value="Escribir documentación" style="flex:1;"></sp-inline-edit>
      </div>
    </div>
    <p style="font-size:11px;color:var(--sp-text-muted);margin-top:6px;">Haz clic en cualquier texto para editarlo</p>
  </div>
</div>`,
    events: [
      { name: "sp-change",      detail: "{ value: string }", desc: "Emitido al confirmar la edición con Enter o blur" },
      { name: "sp-edit-start",  detail: "—", desc: "Emitido cuando comienza la edición" },
      { name: "sp-edit-cancel", detail: "—", desc: "Emitido al cancelar la edición con Esc" },
    ],
  },

  mention: {
    usage: `<sp-mention label="Mensaje" placeholder="Escribe @ para mencionar…" id="m"></sp-mention>
<script>
  document.getElementById('m').items = [
    { id: 'alice',   label: 'Alice Johnson',  description: 'Frontend Dev' },
    { id: 'bob',     label: 'Bob Smith',      description: 'Backend Dev' },
    { id: 'carol',   label: 'Carol Williams', description: 'Designer' },
  ];
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:480px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Básico — escribe @ para mencionar</p>
    <sp-mention id="demo-men1" label="Comentario" placeholder="Escribe @ para mencionar a alguien…" style="display:block;"></sp-mention>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con # para hashtags</p>
    <sp-mention id="demo-men2" label="Post" placeholder="Usa # para etiquetar un tema…" trigger="#" style="display:block;"></sp-mention>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con avatares en la lista</p>
    <sp-mention id="demo-men3" label="Asignar tarea" placeholder="Escribe @ para asignar…" style="display:block;"></sp-mention>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Resultado de la mención</p>
    <sp-mention id="demo-men4" label="Mensaje" placeholder="Escribe @ para mencionar…" style="display:block;"></sp-mention>
    <p id="demo-men4-out" style="font-size:12px;color:var(--sp-text-muted);margin-top:8px;font-family:var(--font-mono);">Sin menciones</p>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Deshabilitado</p>
    <sp-mention label="Comentarios cerrados" disabled placeholder="Los comentarios están deshabilitados" style="display:block;"></sp-mention>
  </div>
</div>
<script>
(function(){
  var TEAM = [
    { id: 'alice', label: 'Alice Johnson', description: 'Frontend Dev' },
    { id: 'bob', label: 'Bob Smith', description: 'Backend Dev' },
    { id: 'carol', label: 'Carol Williams', description: 'Designer' },
    { id: 'david', label: 'David Lee', description: 'DevOps' },
    { id: 'emma', label: 'Emma Davis', description: 'Product Manager' },
  ];
  var TAGS = [
    { id: 'frontend', label: 'frontend' }, { id: 'backend', label: 'backend' },
    { id: 'bug', label: 'bug' }, { id: 'feature', label: 'feature' },
    { id: 'urgent', label: 'urgent' },
  ];
  document.getElementById('demo-men1').items = TEAM;
  document.getElementById('demo-men2').items = TAGS;
  document.getElementById('demo-men3').items = TEAM;
  var m4 = document.getElementById('demo-men4');
  var out = document.getElementById('demo-men4-out');
  m4.items = TEAM;
  m4.addEventListener('sp-mention', function(e){ out.textContent = 'Mencionado: @' + e.detail.label + ' (id: ' + e.detail.id + ')'; });
})();
</script>`,
    events: [
      { name: "sp-change",  detail: "{ value: string }", desc: "Emitido al cambiar el texto del input" },
      { name: "sp-mention", detail: "SpMentionItem",     desc: "Emitido al seleccionar una mención de la lista" },
    ],
  },

  "phone-input": {
    usage: `<sp-phone-input label="Teléfono" country="ES" hint="+34 600 000 000"></sp-phone-input>
<sp-phone-input label="Móvil" country="MX" required error="Número inválido"></sp-phone-input>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:420px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · España (default)</p>
    <sp-phone-input label="Teléfono" country="ES" hint="+34 600 000 000" style="display:block;"></sp-phone-input>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · México</p>
    <sp-phone-input label="Móvil" country="MX" style="display:block;"></sp-phone-input>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Estados Unidos</p>
    <sp-phone-input label="Phone number" country="US" style="display:block;"></sp-phone-input>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Con error de validación</p>
    <sp-phone-input label="Teléfono" country="ES" error="Número de teléfono inválido" value="12345" style="display:block;"></sp-phone-input>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Resultado en tiempo real</p>
    <sp-phone-input id="demo-ph-live" label="Ingresa tu número" country="ES" style="display:block;"></sp-phone-input>
    <p id="demo-ph-out" style="font-size:12px;color:var(--sp-text-muted);margin-top:8px;font-family:var(--font-mono);">Sin número</p>
  </div>
</div>
<script>
(function(){
  var ph = document.getElementById('demo-ph-live');
  var out = document.getElementById('demo-ph-out');
  ph.addEventListener('sp-change', function(e){ out.textContent = 'Completo: ' + (e.detail.full || '—') + ' | País: ' + e.detail.country; });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string, dialCode: string, country: string, full: string }", desc: "Emitido al cambiar el número o el país" },
      { name: "sp-input",  detail: "{ value: string }", desc: "Emitido en cada pulsación de tecla" },
    ],
  },

  "rich-text-editor": {
    usage: `<sp-rich-text-editor label="Descripción del producto" min-height="200"></sp-rich-text-editor>
<sp-rich-text-editor
  label="Comentario"
  placeholder="Escribe tu comentario…"
  maxlength="500">
</sp-rich-text-editor>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Editor completo con toolbar</p>
    <sp-rich-text-editor id="demo-rte1" label="Descripción" min-height="180" placeholder="Escribe aquí con formato…" style="display:block;"></sp-rich-text-editor>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Toolbar mínima</p>
    <sp-rich-text-editor label="Comentario rápido" toolbar="bold,italic,underline,link" min-height="120" placeholder="Solo formato básico…" style="display:block;"></sp-rich-text-editor>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con contenido inicial</p>
    <sp-rich-text-editor id="demo-rte3" label="Notas del proyecto" min-height="150" style="display:block;"></sp-rich-text-editor>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Con límite de caracteres</p>
    <sp-rich-text-editor label="Reseña" min-height="120" maxlength="300" hint="Máx. 300 caracteres" placeholder="Escribe tu reseña…" style="display:block;"></sp-rich-text-editor>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Solo lectura</p>
    <sp-rich-text-editor id="demo-rte5" label="Contenido del artículo" readonly min-height="120" style="display:block;"></sp-rich-text-editor>
  </div>
</div>
<script>
(function(){
  var rte3 = document.getElementById('demo-rte3');
  if(rte3) rte3.value = '<p>Este es el <strong>estado actual</strong> del proyecto:</p><ul><li>Fase 1 completada al <em>100%</em></li><li>Fase 2 en progreso</li><li>Fase 3 pendiente</li></ul>';
  var rte5 = document.getElementById('demo-rte5');
  if(rte5) { rte5.value = '<h2>Introducción a SP Components</h2><p>Una librería de <strong>Web Components</strong> construida con <em>Lit</em>. Compatible con cualquier framework.</p>'; }
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string, html: string }", desc: "Emitido al cambiar el contenido y perder foco" },
      { name: "sp-input",  detail: "{ value: string, html: string }", desc: "Emitido en cada cambio de contenido" },
    ],
  },

  "segmented-control": {
    usage: `<sp-segmented-control id="sc" value="month"></sp-segmented-control>
<script>
  document.getElementById('sc').options = [
    { value: 'day',   label: 'Día' },
    { value: 'week',  label: 'Semana' },
    { value: 'month', label: 'Mes' },
    { value: 'year',  label: 'Año' },
  ];
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:560px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Selector de período</p>
    <sp-segmented-control id="demo-sc1" value="month"></sp-segmented-control>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Tipo de vista</p>
    <sp-segmented-control id="demo-sc2" value="grid"></sp-segmented-control>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Con ítems deshabilitados</p>
    <sp-segmented-control id="demo-sc3" value="free"></sp-segmented-control>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">4 · Tamaño small</p>
    <sp-segmented-control id="demo-sc4" value="asc" size="sm"></sp-segmented-control>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">5 · Con resultado dinámico</p>
    <sp-segmented-control id="demo-sc5" value="bar"></sp-segmented-control>
    <div id="demo-sc5-preview" style="margin-top:12px;height:80px;border:1px solid var(--sp-border);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;color:var(--sp-text-muted);">Gráfico de barras</div>
  </div>
</div>
<script>
(function(){
  var sc1 = document.getElementById('demo-sc1');
  sc1.options = [{value:'day',label:'Día'},{value:'week',label:'Semana'},{value:'month',label:'Mes'},{value:'year',label:'Año'}];
  var sc2 = document.getElementById('demo-sc2');
  sc2.options = [{value:'list',label:'Lista'},{value:'grid',label:'Cuadrícula'},{value:'map',label:'Mapa'}];
  var sc3 = document.getElementById('demo-sc3');
  sc3.options = [{value:'free',label:'Free'},{value:'pro',label:'Pro'},{value:'enterprise',label:'Enterprise',disabled:true}];
  var sc4 = document.getElementById('demo-sc4');
  sc4.options = [{value:'asc',label:'A→Z'},{value:'desc',label:'Z→A'},{value:'date',label:'Fecha'}];
  var sc5 = document.getElementById('demo-sc5');
  var prev = document.getElementById('demo-sc5-preview');
  var labels = {bar:'Gráfico de barras',line:'Gráfico de líneas',pie:'Gráfico circular',area:'Gráfico de área'};
  sc5.options = [{value:'bar',label:'Barras'},{value:'line',label:'Líneas'},{value:'pie',label:'Circular'},{value:'area',label:'Área'}];
  sc5.addEventListener('sp-change', function(e){ prev.textContent = labels[e.detail.value] || e.detail.value; });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string }", desc: "Emitido al seleccionar una opción" },
    ],
  },

  signature: {
    usage: `<sp-signature label="Firma aquí" width="500" height="200"></sp-signature>
<sp-signature pen-color="#1d4ed8" pen-width="3" show-controls></sp-signature>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:600px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Básico</p>
    <sp-signature label="Tu firma" width="500" height="160" style="display:block;max-width:100%;"></sp-signature>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con controles (lápiz, borrador, deshacer)</p>
    <sp-signature label="Firma con herramientas" show-controls width="500" height="160" style="display:block;max-width:100%;"></sp-signature>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Color personalizado</p>
    <sp-signature label="Firma en azul" pen-color="#2563eb" pen-width="2" width="500" height="140" style="display:block;max-width:100%;"></sp-signature>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Trazo grueso</p>
    <sp-signature label="Firma gruesa" pen-width="5" show-controls width="500" height="140" style="display:block;max-width:100%;"></sp-signature>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Con exportación PNG</p>
    <sp-signature id="demo-sig5" label="Firma (exportable)" show-controls width="500" height="160" style="display:block;max-width:100%;"></sp-signature>
    <div style="display:flex;gap:8px;margin-top:8px;">
      <sp-button size="sm" variant="secondary" id="demo-sig5-export">Exportar PNG</sp-button>
      <sp-button size="sm" variant="ghost" id="demo-sig5-clear">Limpiar</sp-button>
    </div>
    <img id="demo-sig5-img" style="display:none;margin-top:8px;border:1px solid var(--sp-border);border-radius:6px;max-width:100%;" />
  </div>
</div>
<script>
(function(){
  var sig = document.getElementById('demo-sig5');
  var img = document.getElementById('demo-sig5-img');
  document.getElementById('demo-sig5-export').addEventListener('click', function(){
    var url = sig.toDataURL ? sig.toDataURL() : null;
    if(url){ img.src = url; img.style.display = 'block'; }
  });
  document.getElementById('demo-sig5-clear').addEventListener('click', function(){
    sig.clear && sig.clear();
    img.style.display = 'none';
  });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ dataUrl: string, isEmpty: boolean }", desc: "Emitido al terminar cada trazo" },
      { name: "sp-clear",  detail: "—", desc: "Emitido al borrar el canvas" },
    ],
  },

  "select-root": {
    usage: `<sp-select-root>
  <sp-select-trigger placeholder="Selecciona una opción…"></sp-select-trigger>
  <sp-select-content>
    <sp-select-item value="react">React</sp-select-item>
    <sp-select-item value="vue">Vue</sp-select-item>
    <sp-select-item value="angular">Angular</sp-select-item>
    <sp-select-group label="Meta">
      <sp-select-item value="next">Next.js</sp-select-item>
      <sp-select-item value="nuxt">Nuxt</sp-select-item>
    </sp-select-group>
  </sp-select-content>
</sp-select-root>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:380px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Básico</p>
    <sp-select-root>
      <sp-select-trigger placeholder="Selecciona un país…"></sp-select-trigger>
      <sp-select-content>
        <sp-select-item value="es">España</sp-select-item>
        <sp-select-item value="mx">México</sp-select-item>
        <sp-select-item value="ar">Argentina</sp-select-item>
        <sp-select-item value="co">Colombia</sp-select-item>
        <sp-select-item value="cl">Chile</sp-select-item>
      </sp-select-content>
    </sp-select-root>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con grupos</p>
    <sp-select-root>
      <sp-select-trigger placeholder="Selecciona un framework…"></sp-select-trigger>
      <sp-select-content>
        <sp-select-group label="Frontend">
          <sp-select-item value="react">React</sp-select-item>
          <sp-select-item value="vue">Vue</sp-select-item>
          <sp-select-item value="svelte">Svelte</sp-select-item>
        </sp-select-group>
        <sp-select-group label="Meta-framework">
          <sp-select-item value="next">Next.js</sp-select-item>
          <sp-select-item value="nuxt">Nuxt</sp-select-item>
          <sp-select-item value="astro">Astro</sp-select-item>
        </sp-select-group>
      </sp-select-content>
    </sp-select-root>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con ítems deshabilitados</p>
    <sp-select-root>
      <sp-select-trigger placeholder="Selecciona un plan…"></sp-select-trigger>
      <sp-select-content>
        <sp-select-item value="free">Free</sp-select-item>
        <sp-select-item value="pro">Pro</sp-select-item>
        <sp-select-item value="enterprise" disabled>Enterprise (próximamente)</sp-select-item>
      </sp-select-content>
    </sp-select-root>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Con valor seleccionado</p>
    <sp-select-root value="vue">
      <sp-select-trigger placeholder="Framework…"></sp-select-trigger>
      <sp-select-content>
        <sp-select-item value="react">React</sp-select-item>
        <sp-select-item value="vue">Vue</sp-select-item>
        <sp-select-item value="angular">Angular</sp-select-item>
      </sp-select-content>
    </sp-select-root>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Resultado dinámico</p>
    <sp-select-root id="demo-sr5">
      <sp-select-trigger placeholder="Selecciona un rol…"></sp-select-trigger>
      <sp-select-content>
        <sp-select-item value="admin">Administrador</sp-select-item>
        <sp-select-item value="editor">Editor</sp-select-item>
        <sp-select-item value="viewer">Lector</sp-select-item>
        <sp-select-item value="guest">Invitado</sp-select-item>
      </sp-select-content>
    </sp-select-root>
    <p id="demo-sr5-out" style="font-size:12px;color:var(--sp-text-muted);margin-top:8px;">Sin selección</p>
  </div>
</div>
<script>
(function(){
  var sr5 = document.getElementById('demo-sr5');
  var out = document.getElementById('demo-sr5-out');
  sr5.addEventListener('sp-change', function(e){ out.textContent = 'Seleccionado: ' + e.detail.value; });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string }", desc: "Emitido al seleccionar un item" },
    ],
    slots: [
      { name: "(default)", desc: "sp-select-trigger y sp-select-content" },
    ],
  },

  form: {
    usage: `<sp-form id="myForm">
  <sp-input name="email" label="Email" type="email" required></sp-input>
  <sp-input name="password" label="Contraseña" type="password" required></sp-input>
  <sp-button type="submit">Iniciar sesión</sp-button>
</sp-form>
<script>
  document.getElementById('myForm').addEventListener('sp-submit', (e) => {
    const data = Object.fromEntries(e.detail.formData);
    console.log(data); // { email: '…', password: '…' }
  });
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:480px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Login</p>
    <sp-form id="demo-form1" style="display:flex;flex-direction:column;gap:12px;">
      <sp-input name="email" label="Email" type="email" required placeholder="tu@correo.com"></sp-input>
      <sp-input name="password" label="Contraseña" type="password" required clearable></sp-input>
      <sp-checkbox name="remember" label="Recordarme"></sp-checkbox>
      <sp-button type="submit" variant="primary" style="width:100%;">Iniciar sesión</sp-button>
    </sp-form>
    <div id="demo-form1-out" style="display:none;margin-top:10px;padding:10px;background:var(--sp-success-bg);border-radius:6px;font-size:12px;color:var(--sp-success);font-family:var(--font-mono);"></div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Registro con validación</p>
    <sp-form id="demo-form2" style="display:flex;flex-direction:column;gap:12px;">
      <sp-input name="name" label="Nombre completo" required placeholder="Juan García"></sp-input>
      <sp-input name="email" label="Email" type="email" required placeholder="tu@correo.com"></sp-input>
      <sp-input name="password" label="Contraseña" type="password" required hint="Mínimo 8 caracteres"></sp-input>
      <sp-checkbox name="terms" label="Acepto los términos y condiciones" required></sp-checkbox>
      <div style="display:flex;gap:8px;">
        <sp-button type="submit" variant="primary" style="flex:1;">Crear cuenta</sp-button>
        <sp-button type="reset" variant="secondary">Limpiar</sp-button>
      </div>
    </sp-form>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Perfil de usuario</p>
    <sp-form id="demo-form3" style="display:flex;flex-direction:column;gap:12px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <sp-input name="first" label="Nombre" value="María" required></sp-input>
        <sp-input name="last" label="Apellido" value="García" required></sp-input>
      </div>
      <sp-input name="bio" label="Bio" placeholder="Cuéntanos sobre ti…"></sp-input>
      <sp-button type="submit" variant="primary">Guardar cambios</sp-button>
    </sp-form>
  </div>
</div>
<script>
(function(){
  var f1 = document.getElementById('demo-form1');
  var out1 = document.getElementById('demo-form1-out');
  f1.addEventListener('sp-submit', function(e){
    var data = {};
    e.detail.formData.forEach(function(v,k){ data[k]=v; });
    out1.textContent = 'Datos: ' + JSON.stringify(data);
    out1.style.display = 'block';
  });
})();
</script>`,
    events: [
      { name: "sp-submit",  detail: "{ formData: FormData }", desc: "Emitido al enviar el formulario cuando es válido" },
      { name: "sp-invalid", detail: "—", desc: "Emitido al intentar enviar un formulario inválido" },
      { name: "sp-reset",   detail: "—", desc: "Emitido al resetear el formulario" },
    ],
    slots: [
      { name: "(default)", desc: "Controles del formulario (sp-input, sp-select, sp-checkbox, etc.)" },
    ],
  },

  // ── Navegación ────────────────────────────────────────────────────────────

  tabs: {
    usage: `<sp-tabs>
  <sp-tab panel="inicio">Inicio</sp-tab>
  <sp-tab panel="perfil">Perfil</sp-tab>
  <sp-tab panel="config" disabled>Config</sp-tab>

  <sp-tab-panel name="inicio">Contenido de inicio</sp-tab-panel>
  <sp-tab-panel name="perfil">Contenido del perfil</sp-tab-panel>
  <sp-tab-panel name="config">Configuración</sp-tab-panel>
</sp-tabs>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Tabs básicas</p>
    <sp-tabs>
      <sp-tab panel="t1">General</sp-tab>
      <sp-tab panel="t2">Seguridad</sp-tab>
      <sp-tab panel="t3">Notificaciones</sp-tab>
      <sp-tab-panel name="t1" style="padding:12px 0;font-size:14px;">Configuración general de la cuenta.</sp-tab-panel>
      <sp-tab-panel name="t2" style="padding:12px 0;font-size:14px;">Contraseña, 2FA y sesiones activas.</sp-tab-panel>
      <sp-tab-panel name="t3" style="padding:12px 0;font-size:14px;">Preferencias de notificaciones y alertas.</sp-tab-panel>
    </sp-tabs>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con tab deshabilitada</p>
    <sp-tabs>
      <sp-tab panel="d1">Activa</sp-tab>
      <sp-tab panel="d2" disabled>Deshabilitada</sp-tab>
      <sp-tab panel="d3">Otra</sp-tab>
      <sp-tab-panel name="d1" style="padding:12px 0;font-size:14px;">Contenido visible.</sp-tab-panel>
      <sp-tab-panel name="d2" style="padding:12px 0;font-size:14px;">No se puede acceder.</sp-tab-panel>
      <sp-tab-panel name="d3" style="padding:12px 0;font-size:14px;">Otro contenido disponible.</sp-tab-panel>
    </sp-tabs>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Tabs con iconos</p>
    <sp-tabs>
      <sp-tab panel="i1">🏠 Inicio</sp-tab>
      <sp-tab panel="i2">📊 Estadísticas</sp-tab>
      <sp-tab panel="i3">⚙️ Ajustes</sp-tab>
      <sp-tab-panel name="i1" style="padding:12px 0;font-size:14px;">Panel de inicio con resumen de actividad.</sp-tab-panel>
      <sp-tab-panel name="i2" style="padding:12px 0;font-size:14px;">Gráficos y métricas del sistema.</sp-tab-panel>
      <sp-tab-panel name="i3" style="padding:12px 0;font-size:14px;">Opciones de configuración avanzadas.</sp-tab-panel>
    </sp-tabs>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Navegación dinámica</p>
    <sp-tabs id="demo-tabs-dyn">
      <sp-tab panel="p1">Resumen</sp-tab>
      <sp-tab panel="p2">Actividad</sp-tab>
      <sp-tab panel="p3">Archivos</sp-tab>
      <sp-tab-panel name="p1" style="padding:12px 0;font-size:14px;">Mostrando tab: <strong id="demo-tabs-label">Resumen</strong></sp-tab-panel>
      <sp-tab-panel name="p2" style="padding:12px 0;font-size:14px;">Historial de actividad reciente.</sp-tab-panel>
      <sp-tab-panel name="p3" style="padding:12px 0;font-size:14px;">Archivos y documentos del proyecto.</sp-tab-panel>
    </sp-tabs>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Muchas tabs (scroll horizontal)</p>
    <sp-tabs>
      <sp-tab panel="m1">Enero</sp-tab>
      <sp-tab panel="m2">Febrero</sp-tab>
      <sp-tab panel="m3">Marzo</sp-tab>
      <sp-tab panel="m4">Abril</sp-tab>
      <sp-tab panel="m5">Mayo</sp-tab>
      <sp-tab panel="m6">Junio</sp-tab>
      <sp-tab-panel name="m1" style="padding:12px 0;font-size:14px;">Datos de Enero.</sp-tab-panel>
      <sp-tab-panel name="m2" style="padding:12px 0;font-size:14px;">Datos de Febrero.</sp-tab-panel>
      <sp-tab-panel name="m3" style="padding:12px 0;font-size:14px;">Datos de Marzo.</sp-tab-panel>
      <sp-tab-panel name="m4" style="padding:12px 0;font-size:14px;">Datos de Abril.</sp-tab-panel>
      <sp-tab-panel name="m5" style="padding:12px 0;font-size:14px;">Datos de Mayo.</sp-tab-panel>
      <sp-tab-panel name="m6" style="padding:12px 0;font-size:14px;">Datos de Junio.</sp-tab-panel>
    </sp-tabs>
  </div>
</div>
<script>
(function(){
  var tabs = document.getElementById('demo-tabs-dyn');
  var label = document.getElementById('demo-tabs-label');
  if (tabs && label) {
    tabs.addEventListener('sp-tab-show', function(e) {
      var names = { p1: 'Resumen', p2: 'Actividad', p3: 'Archivos' };
      label.textContent = names[e.detail.name] || e.detail.name;
    });
  }
})();
</script>`,
    events: [
      { name: "sp-tab-show", detail: "{ name: string }", desc: "Emitido cuando una pestaña se activa" },
      { name: "sp-tab-hide", detail: "{ name: string }", desc: "Emitido cuando una pestaña se desactiva" },
    ],
  },

  breadcrumb: {
    usage: `<sp-breadcrumb separator="›">
  <sp-breadcrumb-item href="/">Inicio</sp-breadcrumb-item>
  <sp-breadcrumb-item href="/productos">Productos</sp-breadcrumb-item>
  <sp-breadcrumb-item>Detalle</sp-breadcrumb-item>
</sp-breadcrumb>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Básico</p>
    <sp-breadcrumb>
      <sp-breadcrumb-item href="#">Inicio</sp-breadcrumb-item>
      <sp-breadcrumb-item href="#">Productos</sp-breadcrumb-item>
      <sp-breadcrumb-item>Detalle del producto</sp-breadcrumb-item>
    </sp-breadcrumb>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Separador personalizado</p>
    <sp-breadcrumb separator="›">
      <sp-breadcrumb-item href="#">Dashboard</sp-breadcrumb-item>
      <sp-breadcrumb-item href="#">Usuarios</sp-breadcrumb-item>
      <sp-breadcrumb-item>Perfil</sp-breadcrumb-item>
    </sp-breadcrumb>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con iconos</p>
    <sp-breadcrumb separator="/">
      <sp-breadcrumb-item href="#">🏠 Inicio</sp-breadcrumb-item>
      <sp-breadcrumb-item href="#">📁 Proyectos</sp-breadcrumb-item>
      <sp-breadcrumb-item href="#">🗂️ Web App</sp-breadcrumb-item>
      <sp-breadcrumb-item>📄 index.astro</sp-breadcrumb-item>
    </sp-breadcrumb>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Ruta larga (muchos niveles)</p>
    <sp-breadcrumb separator="›">
      <sp-breadcrumb-item href="#">Empresa</sp-breadcrumb-item>
      <sp-breadcrumb-item href="#">División</sp-breadcrumb-item>
      <sp-breadcrumb-item href="#">Departamento</sp-breadcrumb-item>
      <sp-breadcrumb-item href="#">Equipo</sp-breadcrumb-item>
      <sp-breadcrumb-item>Miembro</sp-breadcrumb-item>
    </sp-breadcrumb>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Un solo nivel</p>
    <sp-breadcrumb>
      <sp-breadcrumb-item href="#">Inicio</sp-breadcrumb-item>
      <sp-breadcrumb-item>Acerca de</sp-breadcrumb-item>
    </sp-breadcrumb>
  </div>
</div>`,
    slots: [
      { name: "(default)", desc: "Elementos sp-breadcrumb-item" },
    ],
  },

  pagination: {
    usage: `<sp-pagination id="pag" page="1" total="250" page-size="20"></sp-pagination>
<script>
  document.getElementById('pag').addEventListener('sp-page-change', e => {
    console.log('Página:', e.detail.page);
  });
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Paginación básica</p>
    <sp-pagination page="1" total="100" page-size="10"></sp-pagination>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Muchas páginas (con elipsis)</p>
    <sp-pagination page="5" total="500" page-size="10"></sp-pagination>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con selector de tamaño de página</p>
    <sp-pagination page="1" total="200" page-size="20" show-page-size></sp-pagination>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Interactiva con resultado</p>
    <sp-pagination id="demo-pag-live" page="1" total="150" page-size="15"></sp-pagination>
    <div id="demo-pag-info" style="margin-top:8px;padding:8px 12px;background:var(--sp-bg-muted);border-radius:6px;font-size:13px;color:var(--sp-text-muted);">Página actual: <strong>1</strong> de 10</div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Última página activa</p>
    <sp-pagination page="8" total="80" page-size="10"></sp-pagination>
  </div>
</div>
<script>
(function(){
  var pag = document.getElementById('demo-pag-live');
  var info = document.getElementById('demo-pag-info');
  if (pag && info) {
    pag.addEventListener('sp-page-change', function(e) {
      var total = Math.ceil(150 / 15);
      info.innerHTML = 'Página actual: <strong>' + e.detail.page + '</strong> de ' + total;
    });
  }
})();
</script>`,
    events: [
      { name: "sp-page-change",      detail: "{ page: number }",     desc: "Emitido al cambiar de página" },
      { name: "sp-page-size-change", detail: "{ pageSize: number }",  desc: "Emitido al cambiar el tamaño de página" },
    ],
  },

  stepper: {
    usage: `<sp-stepper id="st" linear show-progress></sp-stepper>
<script>
  const st = document.getElementById('st');
  st.steps = [
    { label: 'Datos personales', description: 'Nombre, email y teléfono' },
    { label: 'Dirección',        description: 'Dirección de envío' },
    { label: 'Pago',             description: 'Método de pago' },
    { label: 'Confirmación',     description: 'Revisar y confirmar' },
  ];
  st.activeStep = 1;
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:32px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 14px;">1 · Checkout vertical lineal — interactivo</p>
    <sp-stepper id="demo-stepper1" orientation="vertical" linear></sp-stepper>
    <div id="demo-step1-content" style="margin-top:12px;padding:14px 16px;border:1px solid var(--sp-border,#e5e7eb);border-radius:8px;font-size:14px;color:var(--sp-text,#374151);min-height:44px;"></div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:10px;">
      <sp-button id="demo-back1" variant="secondary" size="sm">Atrás</sp-button>
      <sp-button id="demo-next1" variant="primary" size="sm">Siguiente</sp-button>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 14px;">2 · Onboarding horizontal — navegación libre</p>
    <sp-stepper id="demo-stepper2" orientation="horizontal" show-progress></sp-stepper>
    <div id="demo-step2-content" style="margin-top:14px;padding:14px 16px;border:1px solid var(--sp-border,#e5e7eb);border-radius:8px;font-size:14px;color:var(--sp-text,#374151);min-height:44px;"></div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:10px;">
      <sp-button id="demo-back2" variant="secondary" size="sm">Atrás</sp-button>
      <sp-button id="demo-next2" variant="primary" size="sm">Siguiente</sp-button>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 14px;">3 · Estado de progreso (solo visualización)</p>
    <sp-stepper id="demo-stepper3" orientation="horizontal" show-progress></sp-stepper>
  </div>
</div>
<script>
(function(){
  /* --- Stepper 1: Checkout vertical lineal --- */
  var CHECKOUT = [
    { label: 'Datos personales', description: 'Nombre, email y teléfono' },
    { label: 'Dirección',        description: 'Dirección de envío' },
    { label: 'Pago',             description: 'Método de pago' },
    { label: 'Confirmación',     description: 'Revisar y confirmar' },
  ];
  var a1 = 0;
  var s1 = document.getElementById('demo-stepper1');
  var c1 = document.getElementById('demo-step1-content');
  var b1b = document.getElementById('demo-back1');
  var b1n = document.getElementById('demo-next1');
  s1.steps = CHECKOUT;
  function upd1() {
    s1.activeStep = a1;
    c1.innerHTML = '<strong>' + CHECKOUT[a1].label + '</strong> — ' + CHECKOUT[a1].description;
    b1b.disabled = a1 === 0;
    b1n.textContent = a1 === CHECKOUT.length - 1 ? '✓ Finalizar' : 'Siguiente';
  }
  b1b.addEventListener('click', function(){ if (a1 > 0) { a1--; upd1(); } });
  b1n.addEventListener('click', function(){ if (a1 < CHECKOUT.length - 1) { a1++; upd1(); } });
  upd1();

  /* --- Stepper 2: Onboarding horizontal, libre --- */
  var ONBOARD = [
    { label: 'Bienvenida',   description: 'Introducción a la plataforma' },
    { label: 'Perfil',       description: 'Completa tus datos' },
    { label: 'Preferencias', description: 'Configura tu experiencia' },
    { label: 'Equipo',       description: 'Invita colaboradores' },
    { label: 'Listo',        description: '¡Empieza a usar la app!' },
  ];
  var a2 = 1;
  var s2 = document.getElementById('demo-stepper2');
  var c2 = document.getElementById('demo-step2-content');
  var b2b = document.getElementById('demo-back2');
  var b2n = document.getElementById('demo-next2');
  s2.steps = ONBOARD;
  function upd2() {
    s2.activeStep = a2;
    c2.innerHTML = '<strong>' + ONBOARD[a2].label + '</strong> — ' + ONBOARD[a2].description;
    b2b.disabled = a2 === 0;
    b2n.textContent = a2 === ONBOARD.length - 1 ? '✓ Finalizar' : 'Siguiente';
  }
  b2b.addEventListener('click', function(){ if (a2 > 0) { a2--; upd2(); } });
  b2n.addEventListener('click', function(){ if (a2 < ONBOARD.length - 1) { a2++; upd2(); } });
  upd2();

  /* --- Stepper 3: Solo visualización, paso 2 completado --- */
  var s3 = document.getElementById('demo-stepper3');
  s3.steps = [
    { label: 'Revisión',     description: 'Código revisado' },
    { label: 'CI / CD',      description: 'Tests y build pasados' },
    { label: 'Staging',      description: 'Deploy en staging' },
    { label: 'Producción',   description: 'Pendiente de aprobación' },
  ];
  s3.activeStep = 2;
})();
</script>`,
    events: [
      { name: "sp-step-click", detail: "{ step: number }", desc: "Emitido al hacer clic en un paso" },
    ],
  },

  menu: {
    usage: `<sp-menu>
  <sp-menu-trigger>Acciones</sp-menu-trigger>
  <sp-menu-item value="edit">Editar</sp-menu-item>
  <sp-menu-item value="duplicate">Duplicar</sp-menu-item>
  <sp-menu-separator></sp-menu-separator>
  <sp-menu-item value="delete" danger>Eliminar</sp-menu-item>
</sp-menu>`,
    demo: `<div style="display:flex;flex-wrap:wrap;gap:24px;max-width:640px;align-items:flex-start;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Básico</p>
    <sp-menu>
      <sp-menu-trigger>Opciones</sp-menu-trigger>
      <sp-menu-item value="edit">Editar</sp-menu-item>
      <sp-menu-item value="duplicate">Duplicar</sp-menu-item>
      <sp-menu-item value="archive">Archivar</sp-menu-item>
    </sp-menu>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con separador y peligro</p>
    <sp-menu>
      <sp-menu-trigger>Acciones</sp-menu-trigger>
      <sp-menu-item value="edit">✏️ Editar</sp-menu-item>
      <sp-menu-item value="copy">📋 Copiar</sp-menu-item>
      <sp-menu-separator></sp-menu-separator>
      <sp-menu-item value="delete" danger>🗑️ Eliminar</sp-menu-item>
    </sp-menu>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con item deshabilitado</p>
    <sp-menu>
      <sp-menu-trigger>Más</sp-menu-trigger>
      <sp-menu-item value="export">Exportar CSV</sp-menu-item>
      <sp-menu-item value="pdf" disabled>Exportar PDF (Premium)</sp-menu-item>
      <sp-menu-separator></sp-menu-separator>
      <sp-menu-item value="share">Compartir</sp-menu-item>
    </sp-menu>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Trigger personalizado</p>
    <sp-menu>
      <sp-button slot="trigger" variant="ghost" size="sm">⋯</sp-button>
      <sp-menu-item value="edit">Editar</sp-menu-item>
      <sp-menu-item value="move">Mover</sp-menu-item>
      <sp-menu-item value="delete" danger>Eliminar</sp-menu-item>
    </sp-menu>
  </div>
  <div style="width:100%;">
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Con resultado de selección</p>
    <div style="display:flex;align-items:center;gap:12px;">
      <sp-menu id="demo-menu-result">
        <sp-menu-trigger>Seleccionar acción</sp-menu-trigger>
        <sp-menu-item value="guardar">💾 Guardar</sp-menu-item>
        <sp-menu-item value="publicar">🚀 Publicar</sp-menu-item>
        <sp-menu-item value="borrador">📝 Borrador</sp-menu-item>
        <sp-menu-separator></sp-menu-separator>
        <sp-menu-item value="descartar" danger>🗑️ Descartar</sp-menu-item>
      </sp-menu>
      <span id="demo-menu-info" style="font-size:13px;color:var(--sp-text-muted);">Selecciona una acción</span>
    </div>
  </div>
</div>
<script>
(function(){
  var menu = document.getElementById('demo-menu-result');
  var info = document.getElementById('demo-menu-info');
  if (menu && info) {
    menu.addEventListener('sp-select', function(e) {
      info.textContent = 'Acción seleccionada: ' + e.detail.value;
    });
  }
})();
</script>`,
    events: [
      { name: "sp-select", detail: "{ value: string }", desc: "Emitido al seleccionar un item del menú" },
    ],
  },

  "menu-root": {
    usage: `<!-- Componente compuesto de menú de bajo nivel -->
<sp-menu-root>
  <sp-menu-trigger>Opciones</sp-menu-trigger>
  <sp-menu-content>
    <sp-menu-item value="edit">Editar</sp-menu-item>
    <sp-menu-item value="archive">Archivar</sp-menu-item>
    <sp-menu-separator></sp-menu-separator>
    <sp-menu-item value="delete" danger>Eliminar</sp-menu-item>
  </sp-menu-content>
</sp-menu-root>`,
    demo: `<div style="display:flex;flex-wrap:wrap;gap:24px;max-width:640px;align-items:flex-start;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Básico con menu-root</p>
    <sp-menu-root>
      <sp-menu-trigger>Archivo</sp-menu-trigger>
      <sp-menu-content>
        <sp-menu-item value="new">Nuevo</sp-menu-item>
        <sp-menu-item value="open">Abrir</sp-menu-item>
        <sp-menu-item value="save">Guardar</sp-menu-item>
      </sp-menu-content>
    </sp-menu-root>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con separador y danger</p>
    <sp-menu-root>
      <sp-menu-trigger>Edición</sp-menu-trigger>
      <sp-menu-content>
        <sp-menu-item value="cut">✂️ Cortar</sp-menu-item>
        <sp-menu-item value="copy">📋 Copiar</sp-menu-item>
        <sp-menu-item value="paste">📌 Pegar</sp-menu-item>
        <sp-menu-separator></sp-menu-separator>
        <sp-menu-item value="delete" danger>🗑️ Eliminar</sp-menu-item>
      </sp-menu-content>
    </sp-menu-root>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Items deshabilitados</p>
    <sp-menu-root>
      <sp-menu-trigger>Ver</sp-menu-trigger>
      <sp-menu-content>
        <sp-menu-item value="zoom-in">Aumentar zoom</sp-menu-item>
        <sp-menu-item value="zoom-out">Reducir zoom</sp-menu-item>
        <sp-menu-item value="fullscreen" disabled>Pantalla completa (no soportado)</sp-menu-item>
      </sp-menu-content>
    </sp-menu-root>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Menú de acciones de fila</p>
    <div style="display:flex;align-items:center;gap:12px;padding:10px;border:1px solid var(--sp-border);border-radius:8px;">
      <span style="font-size:14px;flex:1;">archivo-proyecto.zip</span>
      <sp-menu-root>
        <sp-button slot="trigger" variant="ghost" size="sm">···</sp-button>
        <sp-menu-content>
          <sp-menu-item value="download">⬇️ Descargar</sp-menu-item>
          <sp-menu-item value="rename">✏️ Renombrar</sp-menu-item>
          <sp-menu-separator></sp-menu-separator>
          <sp-menu-item value="delete" danger>🗑️ Eliminar</sp-menu-item>
        </sp-menu-content>
      </sp-menu-root>
    </div>
  </div>
  <div style="width:100%;">
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Captura de evento</p>
    <div style="display:flex;align-items:center;gap:12px;">
      <sp-menu-root id="demo-mr-result">
        <sp-menu-trigger>Herramientas</sp-menu-trigger>
        <sp-menu-content>
          <sp-menu-item value="format">Formatear</sp-menu-item>
          <sp-menu-item value="validate">Validar</sp-menu-item>
          <sp-menu-item value="minify">Minificar</sp-menu-item>
        </sp-menu-content>
      </sp-menu-root>
      <span id="demo-mr-info" style="font-size:13px;color:var(--sp-text-muted);">Elige una herramienta</span>
    </div>
  </div>
</div>
<script>
(function(){
  var mr = document.getElementById('demo-mr-result');
  var info = document.getElementById('demo-mr-info');
  if (mr && info) {
    mr.addEventListener('sp-change', function(e) {
      info.textContent = 'Ejecutando: ' + e.detail.value;
    });
  }
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string }", desc: "Emitido al seleccionar un item" },
    ],
    slots: [
      { name: "(default)", desc: "sp-menu-trigger y sp-menu-content" },
    ],
  },

  navbar: {
    usage: `<sp-navbar bordered>
  <span slot="brand">Mi App</span>
  <a slot="nav" href="/">Inicio</a>
  <a slot="nav" href="/docs">Docs</a>
  <sp-button slot="actions" size="sm">Iniciar sesión</sp-button>
</sp-navbar>`,
    demo: `<div style="display:flex;flex-direction:column;gap:16px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Básica con borde</p>
    <sp-navbar bordered>
      <span slot="brand" style="font-weight:700;">MiApp</span>
      <a slot="nav" href="#">Inicio</a>
      <a slot="nav" href="#">Docs</a>
      <a slot="nav" href="#">Precios</a>
      <sp-button slot="actions" size="sm" variant="primary">Entrar</sp-button>
    </sp-navbar>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con logo emoji y múltiples acciones</p>
    <sp-navbar bordered>
      <span slot="brand" style="font-size:18px;font-weight:800;">🚀 LaunchPad</span>
      <a slot="nav" href="#">Producto</a>
      <a slot="nav" href="#">Blog</a>
      <a slot="nav" href="#">Empresa</a>
      <sp-button slot="actions" size="sm" variant="ghost">Docs</sp-button>
      <sp-button slot="actions" size="sm" variant="primary">Empezar gratis</sp-button>
    </sp-navbar>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Navbar de app autenticada</p>
    <sp-navbar bordered>
      <span slot="brand" style="font-weight:700;">📊 Analytics</span>
      <a slot="nav" href="#">Dashboard</a>
      <a slot="nav" href="#">Informes</a>
      <a slot="nav" href="#">Alertas</a>
      <sp-avatar slot="actions" initials="Ana García" size="sm"></sp-avatar>
    </sp-navbar>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Sin bordes</p>
    <sp-navbar>
      <span slot="brand" style="font-weight:700;">MinimalUI</span>
      <a slot="nav" href="#">Características</a>
      <a slot="nav" href="#">Contacto</a>
      <sp-button slot="actions" size="sm">Registrarse</sp-button>
    </sp-navbar>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Docs-style con búsqueda</p>
    <sp-navbar bordered>
      <span slot="brand" style="font-weight:700;">📚 DocSite</span>
      <a slot="nav" href="#">Guía</a>
      <a slot="nav" href="#">API</a>
      <sp-input slot="actions" placeholder="Buscar…" size="sm" style="width:160px;"></sp-input>
      <sp-button slot="actions" size="sm" variant="ghost">⭐ GitHub</sp-button>
    </sp-navbar>
  </div>
</div>`,
    slots: [
      { name: "brand",   desc: "Logo o nombre de la aplicación" },
      { name: "nav",     desc: "Links de navegación" },
      { name: "actions", desc: "Botones o acciones en el lado derecho" },
    ],
  },

  sidebar: {
    usage: `<sp-sidebar id="sb" collapsible></sp-sidebar>
<script>
  document.getElementById('sb').items = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'users',     label: 'Usuarios',  icon: '👥' },
    { id: 'settings',  label: 'Ajustes',   icon: '⚙️' },
  ];
</script>`,
    demo: `<div style="display:flex;gap:20px;max-width:640px;min-height:260px;">
  <sp-sidebar id="demo-sidebar" collapsible style="width:200px;flex-shrink:0;"></sp-sidebar>
  <div style="flex:1;padding:16px;border:1px solid var(--sp-border);border-radius:8px;font-size:14px;">
    <p style="margin:0 0 8px;font-weight:600;" id="demo-sb-title">Dashboard</p>
    <p style="margin:0;color:var(--sp-text-muted);" id="demo-sb-desc">Resumen general de la aplicación.</p>
  </div>
</div>
<div style="display:flex;flex-direction:column;gap:20px;max-width:640px;margin-top:20px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con grupos de secciones</p>
    <sp-sidebar id="demo-sidebar-grp" style="max-width:220px;"></sp-sidebar>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con items anidados</p>
    <sp-sidebar id="demo-sidebar-nested" style="max-width:220px;"></sp-sidebar>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Item activo preseleccionado</p>
    <sp-sidebar id="demo-sidebar-active" style="max-width:220px;"></sp-sidebar>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Con badges en items</p>
    <sp-sidebar id="demo-sidebar-badge" style="max-width:220px;"></sp-sidebar>
  </div>
</div>
<script>
(function(){
  var pages = {
    dashboard: { title: 'Dashboard', desc: 'Resumen general de la aplicación.' },
    users: { title: 'Usuarios', desc: 'Gestión de usuarios y permisos.' },
    analytics: { title: 'Analíticas', desc: 'Gráficos y métricas del sistema.' },
    settings: { title: 'Ajustes', desc: 'Configuración avanzada de la cuenta.' },
  };
  var sb = document.getElementById('demo-sidebar');
  var title = document.getElementById('demo-sb-title');
  var desc = document.getElementById('demo-sb-desc');
  sb.items = [
    { id: 'dashboard', label: 'Dashboard',  icon: '📊', active: true },
    { id: 'users',     label: 'Usuarios',   icon: '👥' },
    { id: 'analytics', label: 'Analíticas', icon: '📈' },
    { id: 'settings',  label: 'Ajustes',    icon: '⚙️' },
  ];
  sb.addEventListener('sp-nav-item-click', function(e) {
    var p = pages[e.detail.id];
    if (p && title && desc) { title.textContent = p.title; desc.textContent = p.desc; }
  });

  var sbg = document.getElementById('demo-sidebar-grp');
  if (sbg) sbg.items = [
    { id: 'main',      label: 'Principal',   icon: '🏠', group: 'Navegación' },
    { id: 'reports',   label: 'Informes',    icon: '📋', group: 'Navegación' },
    { id: 'profile',   label: 'Mi perfil',   icon: '👤', group: 'Cuenta' },
    { id: 'billing',   label: 'Facturación', icon: '💳', group: 'Cuenta' },
  ];

  var sbn = document.getElementById('demo-sidebar-nested');
  if (sbn) sbn.items = [
    { id: 'home', label: 'Inicio', icon: '🏠' },
    { id: 'products', label: 'Productos', icon: '📦', children: [
      { id: 'catalog', label: 'Catálogo' },
      { id: 'inventory', label: 'Inventario' },
    ]},
    { id: 'orders', label: 'Pedidos', icon: '🛒' },
  ];

  var sba = document.getElementById('demo-sidebar-active');
  if (sba) sba.items = [
    { id: 'overview', label: 'Visión general', icon: '🔭' },
    { id: 'activity', label: 'Actividad',      icon: '⚡', active: true },
    { id: 'history',  label: 'Historial',      icon: '🕐' },
  ];

  var sbb = document.getElementById('demo-sidebar-badge');
  if (sbb) sbb.items = [
    { id: 'inbox',    label: 'Bandeja de entrada', icon: '📬', badge: 4 },
    { id: 'drafts',   label: 'Borradores',         icon: '📝', badge: 12 },
    { id: 'sent',     label: 'Enviados',            icon: '📤' },
    { id: 'trash',    label: 'Papelera',            icon: '🗑️' },
  ];
})();
</script>`,
    events: [
      { name: "sp-nav-item-click", detail: "{ id: string }", desc: "Emitido al hacer clic en un item" },
    ],
  },

  // ── Overlays ──────────────────────────────────────────────────────────────

  modal: {
    usage: `<sp-button id="btn">Abrir modal</sp-button>
<sp-modal id="modal" label="Confirmar acción" size="md">
  <p>¿Estás seguro de que deseas continuar?</p>
  <sp-button slot="footer" variant="primary">Confirmar</sp-button>
  <sp-button slot="footer" variant="ghost">Cancelar</sp-button>
</sp-modal>
<script>
  document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('modal').open = true;
  });
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Modal básico</p>
    <sp-button id="demo-modal-btn1">Abrir modal básico</sp-button>
    <sp-modal id="demo-modal1" label="Información" size="sm">
      <p style="margin:0;">Este es un modal básico con contenido simple y botón de cierre.</p>
      <sp-button slot="footer" variant="primary" id="demo-modal1-close">Entendido</sp-button>
    </sp-modal>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Modal de confirmación</p>
    <sp-button id="demo-modal-btn2" variant="danger">Eliminar elemento</sp-button>
    <sp-modal id="demo-modal2" label="¿Eliminar elemento?" size="sm">
      <p style="margin:0;">Esta acción no se puede deshacer. ¿Estás seguro?</p>
      <sp-button slot="footer" variant="danger" id="demo-modal2-confirm">Sí, eliminar</sp-button>
      <sp-button slot="footer" variant="ghost" id="demo-modal2-cancel">Cancelar</sp-button>
    </sp-modal>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Modal con formulario</p>
    <sp-button id="demo-modal-btn3" variant="secondary">Editar perfil</sp-button>
    <sp-modal id="demo-modal3" label="Editar perfil" size="md">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <sp-input label="Nombre" value="Alice Johnson" placeholder="Tu nombre"></sp-input>
        <sp-input label="Email" type="email" value="alice@example.com" placeholder="tu@email.com"></sp-input>
      </div>
      <sp-button slot="footer" variant="primary">Guardar cambios</sp-button>
      <sp-button slot="footer" variant="ghost" id="demo-modal3-cancel">Cancelar</sp-button>
    </sp-modal>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Modal grande</p>
    <sp-button id="demo-modal-btn4" variant="ghost">Ver términos y condiciones</sp-button>
    <sp-modal id="demo-modal4" label="Términos y Condiciones" size="lg">
      <div style="font-size:14px;line-height:1.6;">
        <p>Al usar este servicio aceptas los siguientes términos...</p>
        <p>1. Uso aceptable: El servicio debe usarse de manera legal y ética.</p>
        <p>2. Privacidad: Tus datos se procesan según nuestra política de privacidad.</p>
        <p>3. Modificaciones: Podemos actualizar estos términos con previo aviso.</p>
        <p>4. Cancelación: Puedes cancelar tu cuenta en cualquier momento.</p>
      </div>
      <sp-button slot="footer" variant="primary">Aceptar y continuar</sp-button>
      <sp-button slot="footer" variant="ghost" id="demo-modal4-cancel">Rechazar</sp-button>
    </sp-modal>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Resultado de acción</p>
    <sp-button id="demo-modal-btn5">Enviar solicitud</sp-button>
    <sp-modal id="demo-modal5" label="Enviar solicitud" size="sm">
      <p style="margin:0;">Se enviará un correo de confirmación a tu email registrado.</p>
      <sp-button slot="footer" variant="primary" id="demo-modal5-send">Enviar</sp-button>
      <sp-button slot="footer" variant="ghost" id="demo-modal5-cancel">Cancelar</sp-button>
    </sp-modal>
    <span id="demo-modal5-result" style="margin-left:12px;font-size:13px;color:var(--sp-success,#22c55e);"></span>
  </div>
</div>
<script>
(function(){
  function openModal(btnId, modalId) {
    var btn = document.getElementById(btnId);
    var modal = document.getElementById(modalId);
    if (btn && modal) btn.addEventListener('click', function() { modal.open = true; });
  }
  function closeModal(btnId, modalId) {
    var btn = document.getElementById(btnId);
    var modal = document.getElementById(modalId);
    if (btn && modal) btn.addEventListener('click', function() { modal.open = false; });
  }
  openModal('demo-modal-btn1','demo-modal1'); closeModal('demo-modal1-close','demo-modal1');
  openModal('demo-modal-btn2','demo-modal2'); closeModal('demo-modal2-cancel','demo-modal2'); closeModal('demo-modal2-confirm','demo-modal2');
  openModal('demo-modal-btn3','demo-modal3'); closeModal('demo-modal3-cancel','demo-modal3');
  openModal('demo-modal-btn4','demo-modal4'); closeModal('demo-modal4-cancel','demo-modal4');
  openModal('demo-modal-btn5','demo-modal5'); closeModal('demo-modal5-cancel','demo-modal5');
  var sendBtn = document.getElementById('demo-modal5-send');
  var modal5 = document.getElementById('demo-modal5');
  var result = document.getElementById('demo-modal5-result');
  if (sendBtn && modal5 && result) {
    sendBtn.addEventListener('click', function() {
      modal5.open = false;
      result.textContent = '✓ Solicitud enviada correctamente';
      setTimeout(function() { result.textContent = ''; }, 3000);
    });
  }
})();
</script>`,
    events: [
      { name: "sp-show",    detail: "—", desc: "Emitido cuando el modal se abre" },
      { name: "sp-hide",    detail: "—", desc: "Emitido cuando el modal se cierra" },
      { name: "sp-initial-focus", detail: "—", desc: "Emitido antes de aplicar el foco inicial" },
    ],
    slots: [
      { name: "(default)", desc: "Contenido del cuerpo del modal" },
      { name: "header",    desc: "Encabezado personalizado del modal" },
      { name: "footer",    desc: "Botones de acción en el pie" },
    ],
  },

  drawer: {
    usage: `<sp-button id="btn">Abrir drawer</sp-button>
<sp-drawer id="drawer" placement="right" size="md">
  <h3>Menú lateral</h3>
  <p>Contenido del drawer</p>
</sp-drawer>
<script>
  document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('drawer').open = true;
  });
</script>`,
    demo: `<div style="display:flex;flex-wrap:wrap;gap:12px;max-width:640px;">
  <div style="width:100%;">
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Posiciones disponibles</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <sp-button id="demo-dr-right" size="sm">Derecha →</sp-button>
      <sp-button id="demo-dr-left" size="sm" variant="secondary">← Izquierda</sp-button>
      <sp-button id="demo-dr-top" size="sm" variant="secondary">↑ Arriba</sp-button>
      <sp-button id="demo-dr-bottom" size="sm" variant="secondary">↓ Abajo</sp-button>
    </div>
    <sp-drawer id="demo-drawer-right" placement="right" label="Panel derecho" size="md">
      <p style="margin:0;font-size:14px;">Contenido del drawer derecho.</p>
    </sp-drawer>
    <sp-drawer id="demo-drawer-left" placement="left" label="Panel izquierdo" size="md">
      <p style="margin:0;font-size:14px;">Contenido del drawer izquierdo.</p>
    </sp-drawer>
    <sp-drawer id="demo-drawer-top" placement="top" label="Panel superior" size="md">
      <p style="margin:0;font-size:14px;">Contenido del drawer superior.</p>
    </sp-drawer>
    <sp-drawer id="demo-drawer-bottom" placement="bottom" label="Panel inferior" size="md">
      <p style="margin:0;font-size:14px;">Contenido del drawer inferior.</p>
    </sp-drawer>
  </div>
  <div style="width:100%;">
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Tamaños</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <sp-button id="demo-dr-sm" size="sm">SM</sp-button>
      <sp-button id="demo-dr-md" size="sm" variant="secondary">MD</sp-button>
      <sp-button id="demo-dr-lg" size="sm" variant="secondary">LG</sp-button>
    </div>
    <sp-drawer id="demo-drawer-sm" placement="right" label="Drawer pequeño" size="sm">
      <p style="margin:0;font-size:14px;">Drawer de tamaño pequeño.</p>
    </sp-drawer>
    <sp-drawer id="demo-drawer-md" placement="right" label="Drawer mediano" size="md">
      <p style="margin:0;font-size:14px;">Drawer de tamaño mediano.</p>
    </sp-drawer>
    <sp-drawer id="demo-drawer-lg" placement="right" label="Drawer grande" size="lg">
      <p style="margin:0;font-size:14px;">Drawer de tamaño grande.</p>
    </sp-drawer>
  </div>
  <div style="width:100%;">
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Drawer con formulario</p>
    <sp-button id="demo-dr-form">Editar usuario</sp-button>
    <sp-drawer id="demo-drawer-form" placement="right" label="Editar usuario" size="md">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <sp-input label="Nombre" value="Alice Johnson"></sp-input>
        <sp-input label="Email" value="alice@example.com" type="email"></sp-input>
        <sp-select-root label="Rol">
          <sp-option value="admin">Administrador</sp-option>
          <sp-option value="editor">Editor</sp-option>
          <sp-option value="viewer">Lector</sp-option>
        </sp-select-root>
      </div>
      <div slot="footer" style="display:flex;gap:8px;">
        <sp-button variant="primary">Guardar</sp-button>
        <sp-button variant="ghost" id="demo-dr-form-close">Cancelar</sp-button>
      </div>
    </sp-drawer>
  </div>
  <div style="width:100%;">
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Menú de navegación móvil</p>
    <sp-button id="demo-dr-nav">☰ Menú</sp-button>
    <sp-drawer id="demo-drawer-nav" placement="left" label="Navegación" size="sm">
      <nav style="display:flex;flex-direction:column;gap:4px;">
        <a href="#" style="padding:10px 12px;border-radius:6px;text-decoration:none;color:var(--sp-text);font-size:15px;">🏠 Inicio</a>
        <a href="#" style="padding:10px 12px;border-radius:6px;text-decoration:none;color:var(--sp-text);font-size:15px;">📋 Proyectos</a>
        <a href="#" style="padding:10px 12px;border-radius:6px;text-decoration:none;color:var(--sp-text);font-size:15px;">👥 Equipo</a>
        <a href="#" style="padding:10px 12px;border-radius:6px;text-decoration:none;color:var(--sp-text);font-size:15px;">⚙️ Ajustes</a>
      </nav>
    </sp-drawer>
  </div>
  <div style="width:100%;">
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Carrito de compra</p>
    <sp-button id="demo-dr-cart">🛒 Ver carrito (3)</sp-button>
    <sp-drawer id="demo-drawer-cart" placement="right" label="Tu carrito" size="sm">
      <div style="display:flex;flex-direction:column;gap:12px;font-size:14px;">
        <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--sp-border);">
          <span>Camiseta básica × 2</span><strong>$39.98</strong>
        </div>
        <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--sp-border);">
          <span>Mochila × 1</span><strong>$59.99</strong>
        </div>
        <div style="display:flex;justify-content:space-between;padding:8px 0;font-weight:700;font-size:15px;">
          <span>Total</span><span>$99.97</span>
        </div>
      </div>
      <div slot="footer">
        <sp-button variant="primary" full-width>Finalizar compra</sp-button>
      </div>
    </sp-drawer>
  </div>
</div>
<script>
(function(){
  function wire(btnId, drawerId) {
    var b = document.getElementById(btnId);
    var d = document.getElementById(drawerId);
    if (b && d) b.addEventListener('click', function() { d.open = true; });
  }
  wire('demo-dr-right','demo-drawer-right');
  wire('demo-dr-left','demo-drawer-left');
  wire('demo-dr-top','demo-drawer-top');
  wire('demo-dr-bottom','demo-drawer-bottom');
  wire('demo-dr-sm','demo-drawer-sm');
  wire('demo-dr-md','demo-drawer-md');
  wire('demo-dr-lg','demo-drawer-lg');
  wire('demo-dr-form','demo-drawer-form');
  wire('demo-dr-nav','demo-drawer-nav');
  wire('demo-dr-cart','demo-drawer-cart');
  var formClose = document.getElementById('demo-dr-form-close');
  var formDrawer = document.getElementById('demo-drawer-form');
  if (formClose && formDrawer) formClose.addEventListener('click', function() { formDrawer.open = false; });
})();
</script>`,
    events: [
      { name: "sp-show", detail: "—", desc: "Emitido al abrirse" },
      { name: "sp-hide", detail: "—", desc: "Emitido al cerrarse" },
    ],
    slots: [
      { name: "(default)", desc: "Contenido interior del drawer" },
      { name: "header",    desc: "Encabezado personalizado" },
    ],
  },

  "bottom-sheet": {
    usage: `<sp-button id="btn">Abrir</sp-button>
<sp-bottom-sheet id="bs" title="Opciones" snap-height="60vh">`,
    demo: `<div style="display:flex;flex-direction:column;gap:16px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Bottom sheet básico</p>
    <sp-button id="demo-bs-btn1">Abrir opciones</sp-button>
    <sp-bottom-sheet id="demo-bs1" title="Opciones">
      <div style="display:flex;flex-direction:column;gap:8px;padding:4px 0;">
        <sp-button full-width variant="ghost">✏️ Editar</sp-button>
        <sp-button full-width variant="ghost">📋 Duplicar</sp-button>
        <sp-button full-width variant="ghost">🗑️ Eliminar</sp-button>
      </div>
    </sp-bottom-sheet>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con altura personalizada</p>
    <sp-button id="demo-bs-btn2" variant="secondary">Compartir</sp-button>
    <sp-bottom-sheet id="demo-bs2" title="Compartir con" snap-height="50vh">
      <div style="display:flex;gap:16px;padding:12px 0;flex-wrap:wrap;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;font-size:12px;cursor:pointer;">
          <div style="width:44px;height:44px;border-radius:50%;background:#1da1f2;display:flex;align-items:center;justify-content:center;color:#fff;font-size:18px;">𝕏</div>
          <span>Twitter</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;font-size:12px;cursor:pointer;">
          <div style="width:44px;height:44px;border-radius:50%;background:#25d366;display:flex;align-items:center;justify-content:center;color:#fff;font-size:18px;">💬</div>
          <span>WhatsApp</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;font-size:12px;cursor:pointer;">
          <div style="width:44px;height:44px;border-radius:50%;background:#0077b5;display:flex;align-items:center;justify-content:center;color:#fff;font-size:18px;">in</div>
          <span>LinkedIn</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;font-size:12px;cursor:pointer;">
          <div style="width:44px;height:44px;border-radius:50%;background:var(--sp-bg-muted);display:flex;align-items:center;justify-content:center;font-size:18px;">🔗</div>
          <span>Copiar link</span>
        </div>
      </div>
    </sp-bottom-sheet>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con formulario y footer</p>
    <sp-button id="demo-bs-btn3" variant="secondary">Añadir comentario</sp-button>
    <sp-bottom-sheet id="demo-bs3" title="Nuevo comentario">
      <sp-textarea placeholder="Escribe tu comentario…" rows="3"></sp-textarea>
      <div slot="footer">
        <sp-button variant="primary" full-width>Publicar</sp-button>
      </div>
    </sp-bottom-sheet>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Filtros de búsqueda</p>
    <sp-button id="demo-bs-btn4" variant="ghost">🔧 Filtrar resultados</sp-button>
    <sp-bottom-sheet id="demo-bs4" title="Filtros">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <sp-select-root label="Categoría"><sp-option value="all">Todas</sp-option><sp-option value="tech">Tecnología</sp-option></sp-select-root>
        <sp-slider label="Precio máximo" min="0" max="1000" value="500"></sp-slider>
      </div>
      <div slot="footer">
        <sp-button variant="primary" full-width>Aplicar filtros</sp-button>
      </div>
    </sp-bottom-sheet>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Confirmación de acción</p>
    <sp-button id="demo-bs-btn5" variant="danger">Cancelar suscripción</sp-button>
    <sp-bottom-sheet id="demo-bs5" title="¿Cancelar suscripción?">
      <p style="margin:0 0 8px;font-size:14px;">Perderás acceso a todas las funciones premium el próximo ciclo de facturación.</p>
      <div slot="footer" style="display:flex;flex-direction:column;gap:8px;">
        <sp-button variant="danger" full-width id="demo-bs5-confirm">Sí, cancelar</sp-button>
        <sp-button variant="ghost" full-width id="demo-bs5-cancel">Mantener suscripción</sp-button>
      </div>
    </sp-bottom-sheet>
  </div>
</div>
<script>
(function(){
  function wireBS(btnId, bsId) {
    var b = document.getElementById(btnId);
    var bs = document.getElementById(bsId);
    if (b && bs) b.addEventListener('click', function() { bs.open = true; });
  }
  wireBS('demo-bs-btn1','demo-bs1');
  wireBS('demo-bs-btn2','demo-bs2');
  wireBS('demo-bs-btn3','demo-bs3');
  wireBS('demo-bs-btn4','demo-bs4');
  wireBS('demo-bs-btn5','demo-bs5');
  ['demo-bs5-confirm','demo-bs5-cancel'].forEach(function(id) {
    var b = document.getElementById(id);
    var bs = document.getElementById('demo-bs5');
    if (b && bs) b.addEventListener('click', function() { bs.open = false; });
  });
})();
</script>`,
    events: [
      { name: "sp-close", detail: "—", desc: "Emitido cuando el panel se cierra (botón, overlay o drag)" },
    ],
    slots: [
      { name: "(default)", desc: "Contenido principal del panel" },
      { name: "footer",    desc: "Contenido fijo en la parte inferior del panel" },
    ],
  },

  tooltip: {
    usage: `<sp-tooltip content="Guarda los cambios">
  <sp-button>Guardar</sp-button>
</sp-tooltip>

<sp-tooltip content="Información importante" placement="bottom" trigger="click">
  <sp-button variant="ghost">ℹ️</sp-button>
</sp-tooltip>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Posiciones</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;">
      <sp-tooltip content="Arriba (por defecto)" placement="top"><sp-button size="sm">Arriba</sp-button></sp-tooltip>
      <sp-tooltip content="Abajo del botón" placement="bottom"><sp-button size="sm" variant="secondary">Abajo</sp-button></sp-tooltip>
      <sp-tooltip content="A la izquierda" placement="left"><sp-button size="sm" variant="secondary">Izquierda</sp-button></sp-tooltip>
      <sp-tooltip content="A la derecha" placement="right"><sp-button size="sm" variant="secondary">Derecha</sp-button></sp-tooltip>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Tipos de trigger</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;">
      <sp-tooltip content="Se muestra al pasar el ratón" trigger="hover"><sp-button size="sm">Hover</sp-button></sp-tooltip>
      <sp-tooltip content="Se muestra al hacer clic" trigger="click"><sp-button size="sm" variant="secondary">Click</sp-button></sp-tooltip>
      <sp-tooltip content="Se muestra al recibir foco" trigger="focus"><sp-input size="sm" placeholder="Foco aquí" style="width:120px;"></sp-input></sp-tooltip>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Tooltips en iconos de acción</p>
    <div style="display:flex;gap:8px;">
      <sp-tooltip content="Editar elemento"><sp-button variant="ghost" size="sm">✏️</sp-button></sp-tooltip>
      <sp-tooltip content="Duplicar elemento"><sp-button variant="ghost" size="sm">📋</sp-button></sp-tooltip>
      <sp-tooltip content="Compartir"><sp-button variant="ghost" size="sm">🔗</sp-button></sp-tooltip>
      <sp-tooltip content="Eliminar permanentemente" placement="bottom"><sp-button variant="ghost" size="sm">🗑️</sp-button></sp-tooltip>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">4 · Tooltip con contenido largo</p>
    <sp-tooltip content="Este campo es obligatorio. Debe contener entre 8 y 32 caracteres, incluyendo al menos una letra mayúscula y un número." placement="bottom">
      <sp-input label="Contraseña" type="password" placeholder="••••••••" style="max-width:260px;"></sp-input>
    </sp-tooltip>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">5 · Tooltip deshabilitado</p>
    <div style="display:flex;gap:10px;align-items:center;">
      <sp-tooltip content="Este botón está deshabilitado" placement="top">
        <sp-button disabled>Botón deshabilitado</sp-button>
      </sp-tooltip>
      <span style="font-size:13px;color:var(--sp-text-muted);">← Pasa el ratón por encima</span>
    </div>
  </div>
</div>`,
    slots: [
      { name: "(default)", desc: "El elemento que activa el tooltip" },
      { name: "content",   desc: "Contenido HTML personalizado del tooltip" },
    ],
  },

  popover: {
    usage: `<sp-popover>
  <sp-button slot="trigger">Más info</sp-button>
  <div style="padding: 12px; width: 220px">
    <strong>Título del popover</strong>
    <p>Descripción o contenido adicional aquí.</p>
  </div>
</sp-popover>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Popover básico</p>
    <sp-popover>
      <sp-button slot="trigger">Más información</sp-button>
      <div style="padding:12px;width:220px;">
        <strong style="font-size:14px;">SP Components</strong>
        <p style="margin:6px 0 0;font-size:13px;color:var(--sp-text-muted);">Librería de Web Components construida con Lit. Compatible con cualquier framework.</p>
      </div>
    </sp-popover>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Popover con acciones</p>
    <sp-popover>
      <sp-button slot="trigger" variant="secondary">Opciones de usuario</sp-button>
      <div style="padding:8px;width:180px;display:flex;flex-direction:column;gap:4px;">
        <a href="#" style="padding:7px 10px;border-radius:6px;text-decoration:none;color:var(--sp-text);font-size:13px;display:block;">👤 Mi perfil</a>
        <a href="#" style="padding:7px 10px;border-radius:6px;text-decoration:none;color:var(--sp-text);font-size:13px;display:block;">⚙️ Ajustes</a>
        <hr style="margin:4px 0;border-color:var(--sp-border);" />
        <a href="#" style="padding:7px 10px;border-radius:6px;text-decoration:none;color:var(--sp-error,#ef4444);font-size:13px;display:block;">🚪 Cerrar sesión</a>
      </div>
    </sp-popover>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Popover con tarjeta de usuario</p>
    <sp-popover placement="bottom">
      <sp-avatar slot="trigger" src="https://i.pravatar.cc/150?img=3" size="md" style="cursor:pointer;"></sp-avatar>
      <div style="padding:16px;width:240px;">
        <div style="display:flex;gap:12px;align-items:center;margin-bottom:10px;">
          <sp-avatar src="https://i.pravatar.cc/150?img=3" size="lg"></sp-avatar>
          <div><strong style="font-size:14px;display:block;">Alice Johnson</strong><span style="font-size:12px;color:var(--sp-text-muted);">Diseñadora UX · Madrid</span></div>
        </div>
        <sp-button size="sm" full-width>Ver perfil completo</sp-button>
      </div>
    </sp-popover>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">4 · Popover de filtros</p>
    <sp-popover placement="bottom-start">
      <sp-button slot="trigger" variant="ghost" size="sm">🔧 Filtros</sp-button>
      <div style="padding:14px;width:240px;display:flex;flex-direction:column;gap:10px;">
        <strong style="font-size:13px;">Filtrar resultados</strong>
        <sp-select-root label="Categoría"><sp-option value="all">Todas</sp-option><sp-option value="tech">Tech</sp-option></sp-select-root>
        <sp-button size="sm" variant="primary" full-width>Aplicar</sp-button>
      </div>
    </sp-popover>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">5 · Popover con estadísticas</p>
    <sp-popover placement="top">
      <sp-button slot="trigger" variant="ghost" size="sm">📊 Ver métricas</sp-button>
      <div style="padding:14px;width:220px;">
        <strong style="font-size:13px;display:block;margin-bottom:10px;">Métricas rápidas</strong>
        <div style="display:flex;flex-direction:column;gap:8px;font-size:13px;">
          <div style="display:flex;justify-content:space-between;"><span style="color:var(--sp-text-muted);">Visitas hoy</span><strong>1,234</strong></div>
          <div style="display:flex;justify-content:space-between;"><span style="color:var(--sp-text-muted);">Conversiones</span><strong style="color:var(--sp-success,#22c55e);">8.4%</strong></div>
          <div style="display:flex;justify-content:space-between;"><span style="color:var(--sp-text-muted);">Ingresos</span><strong>$4,820</strong></div>
        </div>
      </div>
    </sp-popover>
  </div>
</div>`,
    slots: [
      { name: "trigger",   desc: "Elemento que activa el popover" },
      { name: "(default)", desc: "Contenido del popover" },
    ],
  },

  "context-menu": {
    usage: `<sp-context-menu id="cm">
  <div style="padding: 40px; border: 2px dashed #ccc; text-align: center">
    Clic derecho aquí
  </div>
</sp-context-menu>
<script>
  document.getElementById('cm').items = [
    { label: 'Editar',     icon: '✏️', onClick: () => alert('Editar') },
    { label: 'Copiar',     icon: '📋', onClick: () => alert('Copiar') },
    { separator: true },
    { label: 'Eliminar',   icon: '🗑️', danger: true, onClick: () => alert('Eliminar') },
  ];
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Menú básico (clic derecho)</p>
    <sp-context-menu id="demo-cm1">
      <div style="padding:24px;border:2px dashed var(--sp-border);border-radius:8px;text-align:center;font-size:14px;color:var(--sp-text-muted);">Haz clic derecho aquí</div>
    </sp-context-menu>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · En una imagen / galería</p>
    <sp-context-menu id="demo-cm2">
      <img src="https://picsum.photos/seed/ctx/400/200" alt="Imagen de ejemplo" style="width:100%;height:140px;object-fit:cover;border-radius:8px;display:block;cursor:context-menu;" />
    </sp-context-menu>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · En filas de tabla</p>
    <div style="border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;">
      <sp-context-menu id="demo-cm3">
        <div>
          <div style="display:flex;padding:10px 14px;border-bottom:1px solid var(--sp-border);background:var(--sp-bg-muted);font-size:12px;font-weight:600;color:var(--sp-text-muted);text-transform:uppercase;">
            <span style="flex:1;">Nombre</span><span>Rol</span>
          </div>
          <div style="display:flex;padding:10px 14px;border-bottom:1px solid var(--sp-border);font-size:14px;">
            <span style="flex:1;">Alice Johnson</span><span>Admin</span>
          </div>
          <div style="display:flex;padding:10px 14px;font-size:14px;">
            <span style="flex:1;">Bob Smith</span><span>Editor</span>
          </div>
        </div>
      </sp-context-menu>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Menú con grupos y shortcuts</p>
    <sp-context-menu id="demo-cm4">
      <div style="padding:24px;border:2px dashed var(--sp-border);border-radius:8px;text-align:center;font-size:14px;color:var(--sp-text-muted);">Área de edición — clic derecho</div>
    </sp-context-menu>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Con resultado de selección</p>
    <sp-context-menu id="demo-cm5">
      <div style="padding:24px;border:2px dashed var(--sp-border);border-radius:8px;text-align:center;font-size:14px;color:var(--sp-text-muted);">Clic derecho y elige una acción</div>
    </sp-context-menu>
    <div id="demo-cm5-result" style="margin-top:8px;font-size:13px;color:var(--sp-text-muted);">Acción: ninguna</div>
  </div>
</div>
<script>
(function(){
  var cm1 = document.getElementById('demo-cm1');
  if (cm1) cm1.items = [
    { label: 'Editar', icon: '✏️' },
    { label: 'Copiar', icon: '📋' },
    { separator: true },
    { label: 'Eliminar', icon: '🗑️', danger: true },
  ];

  var cm2 = document.getElementById('demo-cm2');
  if (cm2) cm2.items = [
    { label: 'Abrir imagen',  icon: '🖼️' },
    { label: 'Guardar como…', icon: '💾' },
    { label: 'Copiar imagen', icon: '📋' },
    { separator: true },
    { label: 'Eliminar',      icon: '🗑️', danger: true },
  ];

  var cm3 = document.getElementById('demo-cm3');
  if (cm3) cm3.items = [
    { label: 'Ver detalles',  icon: '👁️' },
    { label: 'Editar usuario',icon: '✏️' },
    { label: 'Enviar email',  icon: '📧' },
    { separator: true },
    { label: 'Suspender',     icon: '🚫', danger: true },
  ];

  var cm4 = document.getElementById('demo-cm4');
  if (cm4) cm4.items = [
    { label: 'Cortar',  icon: '✂️',  shortcut: 'Ctrl+X' },
    { label: 'Copiar',  icon: '📋',  shortcut: 'Ctrl+C' },
    { label: 'Pegar',   icon: '📌',  shortcut: 'Ctrl+V' },
    { separator: true },
    { label: 'Seleccionar todo', icon: '🔠', shortcut: 'Ctrl+A' },
    { separator: true },
    { label: 'Eliminar', icon: '🗑️', danger: true, shortcut: 'Del' },
  ];

  var cm5 = document.getElementById('demo-cm5');
  var result5 = document.getElementById('demo-cm5-result');
  if (cm5) {
    cm5.items = [
      { label: 'Ver detalles', icon: '👁️', value: 'ver' },
      { label: 'Editar',       icon: '✏️', value: 'editar' },
      { label: 'Duplicar',     icon: '📋', value: 'duplicar' },
      { separator: true },
      { label: 'Eliminar',     icon: '🗑️', danger: true, value: 'eliminar' },
    ];
    cm5.addEventListener('sp-select', function(e) {
      if (result5) result5.textContent = 'Acción: ' + (e.detail.item.label || e.detail.item.value);
    });
  }
})();
</script>`,
    events: [
      { name: "sp-select", detail: "{ item: SpContextMenuItem }", desc: "Emitido al seleccionar un item del menú" },
    ],
    slots: [
      { name: "(default)", desc: "El elemento sobre el que se hace clic derecho" },
    ],
  },

  toast: {
    usage: `<!-- Mostrar por JS -->
<sp-toast-stack position="top-right">
  <sp-toast id="t" variant="success" message="¡Guardado correctamente!" closable></sp-toast>
</sp-toast-stack>
<script>
  document.getElementById('t').open = true;
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Variantes</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-toast variant="success" message="¡Guardado correctamente!" open closable></sp-toast>
      <sp-toast variant="error" message="Error al procesar la solicitud." open closable></sp-toast>
      <sp-toast variant="warning" message="El archivo supera el límite de 10MB." open closable></sp-toast>
      <sp-toast variant="info" message="Hay una nueva versión disponible." open closable></sp-toast>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con duración automática</p>
    <sp-button id="demo-toast-auto">Mostrar toast (3s)</sp-button>
    <sp-toast id="demo-toast-a" variant="success" message="¡Acción completada! Desaparece en 3s." closable duration="3000"></sp-toast>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con botón de acción</p>
    <sp-button id="demo-toast-action" variant="secondary">Subir archivo (con deshacer)</sp-button>
    <sp-toast id="demo-toast-b" variant="info" message="Archivo subido correctamente." closable>
      <sp-button slot="action" size="sm" variant="ghost">Deshacer</sp-button>
    </sp-toast>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Toast de error con detalle</p>
    <sp-button id="demo-toast-err" variant="danger">Simular error de red</sp-button>
    <sp-toast id="demo-toast-c" variant="error" message="Error de conexión: no se pudo conectar al servidor (timeout 30s)." closable></sp-toast>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Toast de actualización</p>
    <sp-button id="demo-toast-upd" variant="ghost">Comprobar actualizaciones</sp-button>
    <sp-toast id="demo-toast-d" variant="warning" message="Nueva versión disponible: v2.1.0" closable>
      <sp-button slot="action" size="sm" variant="primary">Actualizar</sp-button>
    </sp-toast>
  </div>
</div>
<script>
(function(){
  function wireToast(btnId, toastId) {
    var b = document.getElementById(btnId);
    var t = document.getElementById(toastId);
    if (b && t) b.addEventListener('click', function() { t.open = true; });
  }
  wireToast('demo-toast-auto','demo-toast-a');
  wireToast('demo-toast-action','demo-toast-b');
  wireToast('demo-toast-err','demo-toast-c');
  wireToast('demo-toast-upd','demo-toast-d');
})();
</script>`,
    events: [
      { name: "sp-show",  detail: "—", desc: "Emitido cuando el toast se muestra" },
      { name: "sp-close", detail: "—", desc: "Emitido cuando el toast se cierra" },
    ],
  },

  "toast-stack": {
    usage: `<sp-toast-stack position="top-right" id="stack"></sp-toast-stack>
<script>
  // Añadir toasts dinámicamente
  function showToast(msg, variant = 'info') {
    const t = document.createElement('sp-toast');
    t.message = msg;
    t.variant = variant;
    t.open = true;
    t.closable = true;
    document.getElementById('stack').appendChild(t);
  }
  showToast('Archivo subido', 'success');
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Disparar toasts dinámicamente</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <sp-button id="demo-ts-success" size="sm" variant="primary">✓ Éxito</sp-button>
      <sp-button id="demo-ts-error" size="sm" variant="danger">✕ Error</sp-button>
      <sp-button id="demo-ts-warning" size="sm" variant="secondary">⚠ Aviso</sp-button>
      <sp-button id="demo-ts-info" size="sm" variant="ghost">ℹ Info</sp-button>
    </div>
    <sp-toast-stack id="demo-ts-stack" position="top-right"></sp-toast-stack>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Múltiples posiciones</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <sp-button id="demo-ts-tr" size="sm">↗ Top-Right</sp-button>
      <sp-button id="demo-ts-tl" size="sm" variant="secondary">↖ Top-Left</sp-button>
      <sp-button id="demo-ts-br" size="sm" variant="secondary">↘ Bottom-Right</sp-button>
      <sp-button id="demo-ts-bl" size="sm" variant="secondary">↙ Bottom-Left</sp-button>
    </div>
    <sp-toast-stack id="demo-ts-stack2-tr" position="top-right"></sp-toast-stack>
    <sp-toast-stack id="demo-ts-stack2-tl" position="top-left"></sp-toast-stack>
    <sp-toast-stack id="demo-ts-stack2-br" position="bottom-right"></sp-toast-stack>
    <sp-toast-stack id="demo-ts-stack2-bl" position="bottom-left"></sp-toast-stack>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Simulación de guardado</p>
    <sp-button id="demo-ts-save" variant="primary">Guardar documento</sp-button>
    <sp-toast-stack id="demo-ts-stack3" position="bottom-right"></sp-toast-stack>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Flujo de subida de archivos</p>
    <sp-button id="demo-ts-upload" variant="secondary">Simular subida</sp-button>
    <sp-toast-stack id="demo-ts-stack4" position="bottom-right"></sp-toast-stack>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Notificaciones en cascada</p>
    <sp-button id="demo-ts-cascade">Disparar 3 notificaciones</sp-button>
    <sp-toast-stack id="demo-ts-stack5" position="top-right"></sp-toast-stack>
  </div>
</div>
<script>
(function(){
  function addToast(stackId, msg, variant, duration) {
    var stack = document.getElementById(stackId);
    if (!stack) return;
    var t = document.createElement('sp-toast');
    t.message = msg;
    t.variant = variant || 'info';
    t.closable = true;
    if (duration) t.duration = duration;
    t.open = true;
    stack.appendChild(t);
  }

  var msgs = {
    success: '¡Operación completada con éxito!',
    error: 'Error: No se pudo completar la operación.',
    warning: 'Advertencia: Revisa los datos antes de continuar.',
    info: 'Información: Hay cambios pendientes de guardar.',
  };
  ['success','error','warning','info'].forEach(function(v) {
    var b = document.getElementById('demo-ts-' + v);
    if (b) b.addEventListener('click', function() { addToast('demo-ts-stack', msgs[v], v, 4000); });
  });

  [['tr','top-right'],['tl','top-left'],['br','bottom-right'],['bl','bottom-left']].forEach(function(pair) {
    var b = document.getElementById('demo-ts-' + pair[0]);
    if (b) b.addEventListener('click', function() { addToast('demo-ts-stack2-' + pair[0], 'Toast en posición ' + pair[1], 'info', 3000); });
  });

  var saveBtn = document.getElementById('demo-ts-save');
  if (saveBtn) saveBtn.addEventListener('click', function() {
    saveBtn.disabled = true;
    addToast('demo-ts-stack3', 'Guardando…', 'info', 1500);
    setTimeout(function() {
      addToast('demo-ts-stack3', '¡Documento guardado correctamente!', 'success', 3000);
      saveBtn.disabled = false;
    }, 1600);
  });

  var uploadBtn = document.getElementById('demo-ts-upload');
  if (uploadBtn) uploadBtn.addEventListener('click', function() {
    addToast('demo-ts-stack4', 'Subiendo archivo… 0%', 'info', 1000);
    setTimeout(function() { addToast('demo-ts-stack4', 'Subiendo archivo… 50%', 'info', 1000); }, 1100);
    setTimeout(function() { addToast('demo-ts-stack4', '¡Archivo subido con éxito!', 'success', 3000); }, 2200);
  });

  var cascadeBtn = document.getElementById('demo-ts-cascade');
  if (cascadeBtn) cascadeBtn.addEventListener('click', function() {
    addToast('demo-ts-stack5', 'Notificación 1: Tarea iniciada', 'info', 4000);
    setTimeout(function() { addToast('demo-ts-stack5', 'Notificación 2: Procesando datos', 'warning', 4000); }, 400);
    setTimeout(function() { addToast('demo-ts-stack5', 'Notificación 3: Proceso completado', 'success', 4000); }, 800);
  });
})();
</script>`,
    slots: [
      { name: "(default)", desc: "Elementos sp-toast" },
    ],
  },

  "confirm-dialog": {
    usage: `<sp-confirm-dialog
  id="cd"
  title="¿Eliminar archivo?"
  message="Esta acción no se puede deshacer."
  variant="destructive"
  confirm-label="Eliminar"
  cancel-label="Cancelar">
</sp-confirm-dialog>
<script>
  const cd = document.getElementById('cd');
  cd.addEventListener('sp-confirm', () => console.log('Confirmado'));
  cd.addEventListener('sp-cancel',  () => console.log('Cancelado'));
  cd.open = true;
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Variante destructiva</p>
    <sp-button id="demo-cd-btn1" variant="danger">Eliminar cuenta</sp-button>
    <sp-confirm-dialog id="demo-cd1" title="¿Eliminar tu cuenta?" message="Esta acción es permanente y eliminará todos tus datos. No se puede deshacer." variant="destructive" confirm-label="Sí, eliminar" cancel-label="Cancelar"></sp-confirm-dialog>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Variante de advertencia</p>
    <sp-button id="demo-cd-btn2" variant="secondary">Publicar en producción</sp-button>
    <sp-confirm-dialog id="demo-cd2" title="¿Publicar cambios?" message="Esto actualizará el sitio en producción y afectará a todos los usuarios activos." variant="warning" confirm-label="Publicar" cancel-label="Revisar antes"></sp-confirm-dialog>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Confirmar acción positiva</p>
    <sp-button id="demo-cd-btn3" variant="primary">Enviar solicitud</sp-button>
    <sp-confirm-dialog id="demo-cd3" title="Confirmar envío" message="Se enviará la solicitud al equipo de revisión. Recibirás una respuesta en 24-48 horas." variant="info" confirm-label="Enviar" cancel-label="Cancelar"></sp-confirm-dialog>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Cerrar sin guardar</p>
    <sp-button id="demo-cd-btn4" variant="ghost">Cerrar formulario</sp-button>
    <sp-confirm-dialog id="demo-cd4" title="¿Descartar cambios?" message="Tienes cambios sin guardar. Si cierras ahora, perderás todo el progreso." variant="warning" confirm-label="Descartar" cancel-label="Seguir editando"></sp-confirm-dialog>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Con captura de resultado</p>
    <div style="display:flex;align-items:center;gap:12px;">
      <sp-button id="demo-cd-btn5">Archivar proyecto</sp-button>
      <span id="demo-cd5-result" style="font-size:13px;color:var(--sp-text-muted);">Sin respuesta aún</span>
    </div>
    <sp-confirm-dialog id="demo-cd5" title="¿Archivar proyecto?" message="El proyecto quedará en modo solo lectura. Podrás restaurarlo en cualquier momento." variant="info" confirm-label="Archivar" cancel-label="Cancelar"></sp-confirm-dialog>
  </div>
</div>
<script>
(function(){
  function wireCD(btnId, dlgId, onConfirm, onCancel) {
    var btn = document.getElementById(btnId);
    var dlg = document.getElementById(dlgId);
    if (!btn || !dlg) return;
    btn.addEventListener('click', function() { dlg.open = true; });
    dlg.addEventListener('sp-confirm', function() { dlg.open = false; if (onConfirm) onConfirm(); });
    dlg.addEventListener('sp-cancel',  function() { dlg.open = false; if (onCancel)  onCancel(); });
  }
  wireCD('demo-cd-btn1','demo-cd1');
  wireCD('demo-cd-btn2','demo-cd2');
  wireCD('demo-cd-btn3','demo-cd3');
  wireCD('demo-cd-btn4','demo-cd4');
  wireCD('demo-cd-btn5','demo-cd5',
    function() { var r = document.getElementById('demo-cd5-result'); if (r) r.textContent = '✓ Proyecto archivado'; },
    function() { var r = document.getElementById('demo-cd5-result'); if (r) r.textContent = '✕ Cancelado'; }
  );
})();
</script>`,
    events: [
      { name: "sp-confirm", detail: "—", desc: "Emitido al hacer clic en el botón de confirmación" },
      { name: "sp-cancel",  detail: "—", desc: "Emitido al hacer clic en cancelar o cerrar" },
    ],
  },

  // ── Datos ─────────────────────────────────────────────────────────────────

  table: {
    usage: `<sp-table id="t" striped hoverable searchable selectable page-size="5"></sp-table>
<script>
  const t = document.getElementById('t');
  t.columns = [
    { key: 'name',   label: 'Nombre',      sortable: true, filterable: true, width: '180px' },
    { key: 'role',   label: 'Rol',         sortable: true, filterable: true },
    { key: 'dept',   label: 'Departamento',sortable: true, filterable: true },
    { key: 'status', label: 'Estado',      sortable: true, filterable: true, align: 'center' },
    { key: 'score',  label: 'Score',       sortable: true, align: 'right' },
  ];
  t.data = [
    { name: 'Alice Johnson',  role: 'Engineer',  dept: 'Engineering', status: 'Active',   score: 95 },
    { name: 'Bob Smith',      role: 'Designer',  dept: 'Design',      status: 'Active',   score: 82 },
    { name: 'Carol White',    role: 'Manager',   dept: 'Product',     status: 'Inactive', score: 68 },
    { name: 'David Brown',    role: 'Engineer',  dept: 'Engineering', status: 'Active',   score: 90 },
    { name: 'Eva Martinez',   role: 'Analyst',   dept: 'Data',        status: 'Pending',  score: 74 },
    { name: 'Frank Castle',   role: 'Designer',  dept: 'Design',      status: 'Active',   score: 88 },
    { name: 'Grace Hopper',   role: 'Engineer',  dept: 'Engineering', status: 'Active',   score: 99 },
    { name: 'Henry Ford',     role: 'Manager',   dept: 'Product',     status: 'Inactive', score: 55 },
  ];
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:32px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Tabla completa — búsqueda, selección y ordenación</p>
    <sp-table id="demo-table1" striped hoverable searchable selectable page-size="5"></sp-table>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Tabla de pedidos — con estados coloreados</p>
    <sp-table id="demo-table2" hoverable page-size="4"></sp-table>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Tabla compacta — sin paginación, solo lectura</p>
    <sp-table id="demo-table3" striped dense></sp-table>
  </div>
</div>
<script>
(function(){
  /* --- Tabla 1: Equipo con score --- */
  var t1 = document.getElementById('demo-table1');
  t1.columns = [
    { key: 'name',   label: 'Nombre',       sortable: true, filterable: true, width: '180px' },
    { key: 'role',   label: 'Rol',          sortable: true, filterable: true },
    { key: 'dept',   label: 'Departamento', sortable: true, filterable: true },
    { key: 'status', label: 'Estado',       sortable: true, filterable: true, align: 'center' },
    { key: 'score',  label: 'Score',        sortable: true, align: 'right' },
  ];
  t1.data = [
    { name: 'Alice Johnson',  role: 'Engineer',  dept: 'Engineering', status: 'Active',   score: 95 },
    { name: 'Bob Smith',      role: 'Designer',  dept: 'Design',      status: 'Active',   score: 82 },
    { name: 'Carol White',    role: 'Manager',   dept: 'Product',     status: 'Inactive', score: 68 },
    { name: 'David Brown',    role: 'Engineer',  dept: 'Engineering', status: 'Active',   score: 90 },
    { name: 'Eva Martinez',   role: 'Analyst',   dept: 'Data',        status: 'Pending',  score: 74 },
    { name: 'Frank Castle',   role: 'Designer',  dept: 'Design',      status: 'Active',   score: 88 },
    { name: 'Grace Hopper',   role: 'Engineer',  dept: 'Engineering', status: 'Active',   score: 99 },
    { name: 'Henry Ford',     role: 'Manager',   dept: 'Product',     status: 'Inactive', score: 55 },
  ];

  /* --- Tabla 2: Pedidos con estado coloreado --- */
  var t2 = document.getElementById('demo-table2');
  var statusColor = { Entregado:'#22c55e', Enviado:'#3b82f6', Procesando:'#f59e0b', Cancelado:'#ef4444' };
  t2.columns = [
    { key: 'id',      label: 'Pedido',   width: '100px' },
    { key: 'client',  label: 'Cliente',  sortable: true },
    { key: 'product', label: 'Producto' },
    { key: 'total',   label: 'Total',    align: 'right', sortable: true },
    { key: 'status',  label: 'Estado',   align: 'center',
      render: function(v){ var c=statusColor[v]||'#888'; return '<span style="display:inline-block;padding:2px 10px;border-radius:999px;font-size:11px;font-weight:600;background:'+c+'22;color:'+c+';">'+v+'</span>'; }
    },
  ];
  t2.data = [
    { id: '#8821', client: 'Ana García',    product: 'sp-components Pro',  total: '€ 49,00', status: 'Entregado'  },
    { id: '#8822', client: 'Carlos López',  product: 'Plan Equipo x5',     total: '€ 199,00',status: 'Procesando' },
    { id: '#8823', client: 'María Torres',  product: 'sp-components Basic',total: '€ 19,00', status: 'Enviado'    },
    { id: '#8824', client: 'Pedro Mora',    product: 'Plan Equipo x10',    total: '€ 349,00',status: 'Cancelado'  },
    { id: '#8825', client: 'Laura Vega',    product: 'sp-components Pro',  total: '€ 49,00', status: 'Entregado'  },
    { id: '#8826', client: 'Diego Paz',     product: 'Plan Empresa',       total: '€ 599,00',status: 'Procesando' },
  ];

  /* --- Tabla 3: Resumen de componentes, compacto --- */
  var t3 = document.getElementById('demo-table3');
  t3.columns = [
    { key: 'component', label: 'Componente', width: '180px' },
    { key: 'category',  label: 'Categoría' },
    { key: 'version',   label: 'Versión',   align: 'center' },
    { key: 'size',      label: 'Tamaño',    align: 'right' },
  ];
  t3.data = [
    { component: 'sp-button',         category: 'Acciones',    version: '2.1.0', size: '3.2 kB' },
    { component: 'sp-modal',          category: 'Overlays',    version: '2.1.0', size: '5.8 kB' },
    { component: 'sp-table',          category: 'Datos',       version: '2.0.1', size: '12.4 kB' },
    { component: 'sp-combobox',       category: 'Formularios', version: '2.1.0', size: '8.1 kB' },
    { component: 'sp-date-picker',    category: 'Formularios', version: '2.0.0', size: '9.3 kB' },
    { component: 'sp-rich-text-editor',category: 'Contenido', version: '1.9.0', size: '24.7 kB' },
  ];
})();
</script>`,
    events: [
      { name: "sp-sort",     detail: "{ key: string, direction: 'asc' | 'desc' }", desc: "Emitido al ordenar por columna" },
      { name: "sp-select",   detail: "{ rows: object[] }", desc: "Emitido al cambiar la selección de filas" },
      { name: "sp-row-click", detail: "{ row: object }", desc: "Emitido al hacer clic en una fila" },
    ],
  },

  accordion: {
    usage: `<sp-accordion>
  <sp-accordion-item label="¿Qué es SP Components?">
    Una librería de Web Components construida con Lit.
  </sp-accordion-item>
  <sp-accordion-item label="¿Es compatible con React?" open>
    Sí, los Web Components funcionan en cualquier framework.
  </sp-accordion-item>
  <sp-accordion-item label="¿Tiene soporte TypeScript?" disabled>
    Próximamente.
  </sp-accordion-item>
</sp-accordion>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · FAQ básico</p>
    <sp-accordion>
      <sp-accordion-item label="¿Qué es SP Components?" open>
        SP Components es una librería de Web Components construida con Lit. Funciona en cualquier framework o sin framework, con soporte a dark mode, TypeScript y tree-shaking.
      </sp-accordion-item>
      <sp-accordion-item label="¿Es compatible con React, Vue y Angular?">
        Sí. Los Web Components son estándar de la web. Funcionan en React, Vue, Angular, Svelte, Astro o HTML puro, sin necesidad de wrappers.
      </sp-accordion-item>
      <sp-accordion-item label="¿Tiene soporte para dark mode?">
        Sí, todos los componentes respetan el atributo <code>data-theme="dark"</code> en el elemento raíz y usan variables CSS para el color, por lo que el tema es instantáneo.
      </sp-accordion-item>
    </sp-accordion>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con item deshabilitado</p>
    <sp-accordion>
      <sp-accordion-item label="Información básica">Tu nombre, email y foto de perfil.</sp-accordion-item>
      <sp-accordion-item label="Datos de pago">Tarjetas de crédito y métodos de pago guardados.</sp-accordion-item>
      <sp-accordion-item label="Datos empresariales (Premium)" disabled>Disponible solo en planes Business y Enterprise.</sp-accordion-item>
    </sp-accordion>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Múltiples secciones abiertas</p>
    <sp-accordion allow-multiple>
      <sp-accordion-item label="HTML" open><p style="margin:0;font-size:13px;">El lenguaje de marcado de la web. Define la estructura y el contenido semántico.</p></sp-accordion-item>
      <sp-accordion-item label="CSS" open><p style="margin:0;font-size:13px;">Lenguaje de hojas de estilo. Controla el diseño, colores, tipografía y animaciones.</p></sp-accordion-item>
      <sp-accordion-item label="JavaScript"><p style="margin:0;font-size:13px;">Lenguaje de programación del navegador. Agrega interactividad y comportamiento dinámico.</p></sp-accordion-item>
    </sp-accordion>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Acordeón de configuración</p>
    <sp-accordion>
      <sp-accordion-item label="🔔 Notificaciones">
        <div style="display:flex;flex-direction:column;gap:8px;">
          <sp-switch checked>Notificaciones por email</sp-switch>
          <sp-switch>Notificaciones push</sp-switch>
          <sp-switch checked>Resumen semanal</sp-switch>
        </div>
      </sp-accordion-item>
      <sp-accordion-item label="🔒 Privacidad">
        <div style="display:flex;flex-direction:column;gap:8px;">
          <sp-switch checked>Perfil público</sp-switch>
          <sp-switch>Mostrar actividad</sp-switch>
        </div>
      </sp-accordion-item>
    </sp-accordion>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Notas de la versión</p>
    <sp-accordion>
      <sp-accordion-item label="v2.1.0 — Abril 2026" open>
        <ul style="margin:0;padding-left:18px;font-size:13px;line-height:1.8;">
          <li>Nuevo: Componente <code>sp-tour</code></li>
          <li>Mejora: <code>sp-table</code> ahora soporta exportación a CSV</li>
          <li>Fix: Scroll en <code>sp-modal</code> en iOS 17</li>
        </ul>
      </sp-accordion-item>
      <sp-accordion-item label="v2.0.0 — Enero 2026">
        <ul style="margin:0;padding-left:18px;font-size:13px;line-height:1.8;">
          <li>Nueva: API de temas en tiempo real</li>
          <li>Breaking: Renombrado <code>sp-select</code> → <code>sp-select-root</code></li>
          <li>Añadidos 12 nuevos componentes</li>
        </ul>
      </sp-accordion-item>
    </sp-accordion>
  </div>
</div>`,
    events: [
      { name: "sp-show", detail: "—", desc: "Emitido por sp-accordion-item al expandirse" },
      { name: "sp-hide", detail: "—", desc: "Emitido por sp-accordion-item al colapsarse" },
    ],
    slots: [
      { name: "(default)", desc: "Elementos sp-accordion-item" },
    ],
  },

  card: {
    usage: `<sp-card shadow="md" bordered>
  <img slot="media" src="https://picsum.photos/seed/card1/600/300" alt="Card image" style="width:100%;height:180px;object-fit:cover;" />
  <div slot="header">Parques nacionales</div>
  <p>Descubre los parques nacionales más impresionantes del mundo, con rutas para todos los niveles.</p>
  <div slot="footer">
    <sp-button size="sm" variant="primary">Explorar</sp-button>
    <sp-button size="sm" variant="ghost">Guardar</sp-button>
  </div>
</sp-card>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Cards con imagen (media grid)</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px;">
      <sp-card shadow="md" bordered>
        <img slot="media" src="https://picsum.photos/seed/card1/600/300" alt="Mountains" style="width:100%;height:140px;object-fit:cover;" />
        <div slot="header">Montañas del Norte</div>
        <p style="margin:0;font-size:13px;color:var(--sp-text-secondary);">Rutas de senderismo para todos los niveles con vistas espectaculares.</p>
        <div slot="footer" style="display:flex;gap:6px;">
          <sp-button size="sm" variant="primary">Explorar</sp-button>
          <sp-button size="sm" variant="ghost">Guardar</sp-button>
        </div>
      </sp-card>
      <sp-card shadow="md" bordered>
        <img slot="media" src="https://picsum.photos/seed/card2/600/300" alt="Ocean" style="width:100%;height:140px;object-fit:cover;" />
        <div slot="header">Costa Atlántica</div>
        <p style="margin:0;font-size:13px;color:var(--sp-text-secondary);">Playas vírgenes y pueblos pescadores de encanto único.</p>
        <div slot="footer" style="display:flex;gap:6px;">
          <sp-button size="sm" variant="primary">Explorar</sp-button>
          <sp-button size="sm" variant="ghost">Guardar</sp-button>
        </div>
      </sp-card>
      <sp-card shadow="md" bordered>
        <img slot="media" src="https://picsum.photos/seed/card3/600/300" alt="Forest" style="width:100%;height:140px;object-fit:cover;" />
        <div slot="header">Bosque Profundo</div>
        <p style="margin:0;font-size:13px;color:var(--sp-text-secondary);">Naturaleza sin alterar con ecosistemas únicos que explorar.</p>
        <div slot="footer" style="display:flex;gap:6px;">
          <sp-button size="sm" variant="primary">Explorar</sp-button>
          <sp-button size="sm" variant="ghost">Guardar</sp-button>
        </div>
      </sp-card>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Cards de estadística (sin media)</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;">
      <sp-card shadow="sm" bordered>
        <div slot="header" style="font-size:12px;color:var(--sp-text-muted);">Usuarios activos</div>
        <div style="font-size:28px;font-weight:800;color:var(--sp-primary,#6366f1);">12,450</div>
        <div style="font-size:12px;color:var(--sp-success,#22c55e);margin-top:4px;">↑ +8.2% este mes</div>
      </sp-card>
      <sp-card shadow="sm" bordered>
        <div slot="header" style="font-size:12px;color:var(--sp-text-muted);">Ingresos</div>
        <div style="font-size:28px;font-weight:800;color:var(--sp-primary,#6366f1);">$84,200</div>
        <div style="font-size:12px;color:var(--sp-success,#22c55e);margin-top:4px;">↑ +12.1% este mes</div>
      </sp-card>
      <sp-card shadow="sm" bordered>
        <div slot="header" style="font-size:12px;color:var(--sp-text-muted);">Conversión</div>
        <div style="font-size:28px;font-weight:800;color:var(--sp-primary,#6366f1);">3.6%</div>
        <div style="font-size:12px;color:var(--sp-error,#ef4444);margin-top:4px;">↓ -0.4% este mes</div>
      </sp-card>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Cards de perfil (avatar + datos)</p>
    <div style="display:flex;flex-wrap:wrap;gap:14px;">
      <sp-card shadow="md" bordered style="width:200px;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:8px 0;">
          <sp-avatar src="https://i.pravatar.cc/150?img=1" size="xl"></sp-avatar>
          <div style="text-align:center;">
            <div style="font-weight:700;font-size:14px;">Ana García</div>
            <div style="font-size:12px;color:var(--sp-text-muted);">Frontend Engineer</div>
          </div>
          <div style="display:flex;gap:4px;">
            <sp-badge variant="success">Disponible</sp-badge>
          </div>
        </div>
        <div slot="footer" style="display:flex;justify-content:center;">
          <sp-button size="sm" variant="secondary" style="width:100%;">Ver perfil</sp-button>
        </div>
      </sp-card>
      <sp-card shadow="md" bordered style="width:200px;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:8px 0;">
          <sp-avatar src="https://i.pravatar.cc/150?img=7" size="xl"></sp-avatar>
          <div style="text-align:center;">
            <div style="font-weight:700;font-size:14px;">Carlos López</div>
            <div style="font-size:12px;color:var(--sp-text-muted);">Product Manager</div>
          </div>
          <div style="display:flex;gap:4px;">
            <sp-badge variant="warning">Ocupado</sp-badge>
          </div>
        </div>
        <div slot="footer" style="display:flex;justify-content:center;">
          <sp-button size="sm" variant="secondary" style="width:100%;">Ver perfil</sp-button>
        </div>
      </sp-card>
      <sp-card shadow="md" bordered style="width:200px;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:8px 0;">
          <sp-avatar initials="Sofia Ruiz" size="xl"></sp-avatar>
          <div style="text-align:center;">
            <div style="font-weight:700;font-size:14px;">Sofia Ruiz</div>
            <div style="font-size:12px;color:var(--sp-text-muted);">UX Designer</div>
          </div>
          <div style="display:flex;gap:4px;">
            <sp-badge variant="neutral">Sin conexión</sp-badge>
          </div>
        </div>
        <div slot="footer" style="display:flex;justify-content:center;">
          <sp-button size="sm" variant="secondary" style="width:100%;">Ver perfil</sp-button>
        </div>
      </sp-card>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">4 · Variantes de sombra</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
      <sp-card shadow="none"  bordered style="padding:12px 16px;width:120px;text-align:center;"><div style="font-size:12px;color:var(--sp-text-muted);">sin sombra</div></sp-card>
      <sp-card shadow="sm"    bordered style="padding:12px 16px;width:120px;text-align:center;"><div style="font-size:12px;color:var(--sp-text-muted);">shadow sm</div></sp-card>
      <sp-card shadow="md"    bordered style="padding:12px 16px;width:120px;text-align:center;"><div style="font-size:12px;color:var(--sp-text-muted);">shadow md</div></sp-card>
      <sp-card shadow="lg"    bordered style="padding:12px 16px;width:120px;text-align:center;"><div style="font-size:12px;color:var(--sp-text-muted);">shadow lg</div></sp-card>
    </div>
  </div>
</div>`,
    slots: [
      { name: "(default)", desc: "Contenido del cuerpo" },
      { name: "media",     desc: "Imagen o media en la parte superior" },
      { name: "header",    desc: "Encabezado de la tarjeta" },
      { name: "footer",    desc: "Pie de página con acciones" },
    ],
  },

  badge: {
    usage: `<sp-badge variant="primary">Nuevo</sp-badge>
<sp-badge variant="success" count="5"></sp-badge>
<sp-badge variant="error" count="99" max="50" pulsing></sp-badge>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Variantes de color</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      <sp-badge variant="primary">Primario</sp-badge>
      <sp-badge variant="success">Activo</sp-badge>
      <sp-badge variant="warning">Pendiente</sp-badge>
      <sp-badge variant="error">Error</sp-badge>
      <sp-badge variant="info">Info</sp-badge>
      <sp-badge variant="neutral">Neutro</sp-badge>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Contadores y límite máximo</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;">
      <sp-badge variant="error" count="3"></sp-badge>
      <sp-badge variant="error" count="12"></sp-badge>
      <sp-badge variant="error" count="99"></sp-badge>
      <sp-badge variant="error" count="150" max="99"></sp-badge>
      <span style="font-size:13px;color:var(--sp-text-muted);">← 3 · 12 · 99 · 99+</span>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Badge pulsante (actividad en tiempo real)</p>
    <div style="display:flex;gap:12px;align-items:center;">
      <sp-badge variant="success" pulsing>En línea</sp-badge>
      <sp-badge variant="error" count="5" pulsing></sp-badge>
      <sp-badge variant="warning" pulsing>Procesando</sp-badge>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Badges en UI de lista</p>
    <div style="display:flex;flex-direction:column;gap:8px;border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-bottom:1px solid var(--sp-border);">
        <span style="font-size:14px;">📬 Bandeja de entrada</span>
        <sp-badge variant="error" count="4"></sp-badge>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-bottom:1px solid var(--sp-border);">
        <span style="font-size:14px;">📣 Menciones</span>
        <sp-badge variant="primary" count="2"></sp-badge>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;">
        <span style="font-size:14px;">📋 Tareas</span>
        <sp-badge variant="warning">Pendiente</sp-badge>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Estado de componentes</p>
    <div style="display:flex;flex-direction:column;gap:8px;font-size:14px;">
      <div style="display:flex;align-items:center;gap:8px;"><code>sp-button</code><sp-badge variant="success">Estable</sp-badge></div>
      <div style="display:flex;align-items:center;gap:8px;"><code>sp-rich-text-editor</code><sp-badge variant="warning">Beta</sp-badge></div>
      <div style="display:flex;align-items:center;gap:8px;"><code>sp-tour</code><sp-badge variant="primary">Nuevo</sp-badge></div>
      <div style="display:flex;align-items:center;gap:8px;"><code>sp-pdf-viewer</code><sp-badge variant="neutral">Experimental</sp-badge></div>
    </div>
  </div>
</div>`,
    slots: [
      { name: "(default)", desc: "Texto o contenido del badge" },
    ],
  },

  avatar: {
    usage: `<!-- Con imagen (pravatar.cc) -->
<sp-avatar src="https://i.pravatar.cc/150?img=3" alt="Alice" size="md"></sp-avatar>
<sp-avatar src="https://i.pravatar.cc/150?img=5" alt="Bob" shape="square" size="lg"></sp-avatar>

<!-- Con iniciales -->
<sp-avatar initials="Ana García" shape="circle" size="md"></sp-avatar>
<sp-avatar initials="AB" shape="square" size="lg"></sp-avatar>

<!-- Grupo de avatares -->
<sp-avatar-group max="4" size="md">
  <sp-avatar src="https://i.pravatar.cc/150?img=1"></sp-avatar>
  <sp-avatar src="https://i.pravatar.cc/150?img=2"></sp-avatar>
  <sp-avatar src="https://i.pravatar.cc/150?img=3"></sp-avatar>
  <sp-avatar src="https://i.pravatar.cc/150?img=4"></sp-avatar>
  <sp-avatar src="https://i.pravatar.cc/150?img=5"></sp-avatar>
  <sp-avatar src="https://i.pravatar.cc/150?img=6"></sp-avatar>
</sp-avatar-group>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:580px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Tamaños</p>
    <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><sp-avatar src="https://i.pravatar.cc/150?img=1" size="xs"></sp-avatar><span style="font-size:10px;color:var(--sp-text-muted);">xs</span></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><sp-avatar src="https://i.pravatar.cc/150?img=2" size="sm"></sp-avatar><span style="font-size:10px;color:var(--sp-text-muted);">sm</span></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><sp-avatar src="https://i.pravatar.cc/150?img=3" size="md"></sp-avatar><span style="font-size:10px;color:var(--sp-text-muted);">md</span></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><sp-avatar src="https://i.pravatar.cc/150?img=4" size="lg"></sp-avatar><span style="font-size:10px;color:var(--sp-text-muted);">lg</span></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><sp-avatar src="https://i.pravatar.cc/150?img=5" size="xl"></sp-avatar><span style="font-size:10px;color:var(--sp-text-muted);">xl</span></div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Formas y fallback a iniciales</p>
    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <sp-avatar src="https://i.pravatar.cc/150?img=6" size="md" shape="circle"></sp-avatar>
      <sp-avatar src="https://i.pravatar.cc/150?img=7" size="md" shape="square"></sp-avatar>
      <sp-avatar initials="Ana García" size="md" shape="circle"></sp-avatar>
      <sp-avatar initials="BM" size="md" shape="square"></sp-avatar>
      <sp-avatar initials="SP" size="md"></sp-avatar>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Con indicador de estado</p>
    <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><sp-avatar src="https://i.pravatar.cc/150?img=8" size="lg" status="online"></sp-avatar><span style="font-size:10px;color:var(--sp-text-muted);">online</span></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><sp-avatar src="https://i.pravatar.cc/150?img=9" size="lg" status="away"></sp-avatar><span style="font-size:10px;color:var(--sp-text-muted);">away</span></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><sp-avatar src="https://i.pravatar.cc/150?img=10" size="lg" status="busy"></sp-avatar><span style="font-size:10px;color:var(--sp-text-muted);">busy</span></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><sp-avatar src="https://i.pravatar.cc/150?img=11" size="lg" status="offline"></sp-avatar><span style="font-size:10px;color:var(--sp-text-muted);">offline</span></div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">4 · Grupo de avatares con overflow</p>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <sp-avatar-group max="4" total="12" size="md">
          <sp-avatar src="https://i.pravatar.cc/150?img=20"></sp-avatar>
          <sp-avatar src="https://i.pravatar.cc/150?img=21"></sp-avatar>
          <sp-avatar src="https://i.pravatar.cc/150?img=22"></sp-avatar>
          <sp-avatar src="https://i.pravatar.cc/150?img=23"></sp-avatar>
          <sp-avatar src="https://i.pravatar.cc/150?img=24"></sp-avatar>
          <sp-avatar src="https://i.pravatar.cc/150?img=25"></sp-avatar>
        </sp-avatar-group>
        <span style="font-size:13px;color:var(--sp-text-secondary);">12 colaboradores</span>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <sp-avatar-group max="3" size="sm">
          <sp-avatar src="https://i.pravatar.cc/150?img=30"></sp-avatar>
          <sp-avatar src="https://i.pravatar.cc/150?img=31"></sp-avatar>
          <sp-avatar initials="AC" size="sm"></sp-avatar>
          <sp-avatar initials="JM" size="sm"></sp-avatar>
        </sp-avatar-group>
        <span style="font-size:12px;color:var(--sp-text-muted);">Equipo de diseño</span>
      </div>
    </div>
  </div>
</div>`,
    slots: [
      { name: "(default)", desc: "Contenido personalizado dentro del avatar" },
    ],
  },

  stat: {
    usage: `<sp-stat label="Ingresos totales" value="84,200" prefix="$" trend="up" trendValue="+8.2%" description="vs. mes anterior"></sp-stat>
<sp-stat label="Usuarios activos" value="12,450" trend="up" trendValue="+1,200"></sp-stat>
<sp-stat label="Tasa de abandono" value="2.8" suffix="%" trend="down" trendValue="-0.3%"></sp-stat>
<sp-stat label="Satisfacción" value="4.8" suffix="/ 5" trend="neutral" trendValue="sin cambios"></sp-stat>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Dashboard de métricas clave</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:14px;">
      <div style="padding:18px 20px;background:var(--sp-bg,#fff);border-radius:10px;border:1px solid var(--sp-border,#e5e7eb);">
        <sp-stat label="Ingresos totales" value="84,200" prefix="$" trend="up" trendValue="+8.2%" description="vs. mes anterior"></sp-stat>
      </div>
      <div style="padding:18px 20px;background:var(--sp-bg,#fff);border-radius:10px;border:1px solid var(--sp-border,#e5e7eb);">
        <sp-stat label="Usuarios activos" value="12,450" trend="up" trendValue="+1,200" description="vs. semana pasada"></sp-stat>
      </div>
      <div style="padding:18px 20px;background:var(--sp-bg,#fff);border-radius:10px;border:1px solid var(--sp-border,#e5e7eb);">
        <sp-stat label="Tasa de abandono" value="2.8" suffix="%" trend="down" trendValue="-0.3%" description="Objetivo: &lt; 3%"></sp-stat>
      </div>
      <div style="padding:18px 20px;background:var(--sp-bg,#fff);border-radius:10px;border:1px solid var(--sp-border,#e5e7eb);">
        <sp-stat label="Satisfacción" value="4.8" suffix=" / 5" trend="neutral" trendValue="sin cambios" description="Basado en 1,200 reseñas"></sp-stat>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Con icono personalizado</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:14px;">
      <div style="padding:18px 20px;background:var(--sp-bg,#fff);border-radius:10px;border:1px solid var(--sp-border,#e5e7eb);">
        <sp-stat label="Pedidos hoy" value="342" trend="up" trendValue="+28">
          <svg slot="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--sp-primary,#6366f1)" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        </sp-stat>
      </div>
      <div style="padding:18px 20px;background:var(--sp-bg,#fff);border-radius:10px;border:1px solid var(--sp-border,#e5e7eb);">
        <sp-stat label="Nuevos clientes" value="1,284" trend="up" trendValue="+14%">
          <svg slot="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--sp-success,#22c55e)" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
        </sp-stat>
      </div>
      <div style="padding:18px 20px;background:var(--sp-bg,#fff);border-radius:10px;border:1px solid var(--sp-border,#e5e7eb);">
        <sp-stat label="Tickets abiertos" value="28" trend="down" trendValue="-6">
          <svg slot="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--sp-warning,#f59e0b)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </sp-stat>
      </div>
    </div>
  </div>
</div>`,
    slots: [
      { name: "icon", desc: "Icono o imagen junto al valor" },
    ],
  },

  timeline: {
    usage: `<sp-timeline id="tl"></sp-timeline>
<script>
  document.getElementById('tl').items = [
    { label: 'Pedido realizado',    description: 'Tu pedido #8821 ha sido recibido.', time: 'Hoy 09:00', variant: 'success' },
    { label: 'Pago confirmado',     description: 'Pago de $49.99 procesado correctamente.', time: 'Hoy 09:05', variant: 'info' },
    { label: 'Preparando envío',    description: 'Tus artículos están siendo empaquetados.', time: 'Hoy 11:30', variant: 'default' },
    { label: 'Entrega estimada',    description: 'Tu paquete llegará mañana entre 8:00-12:00.', time: 'Mañana', variant: 'warning' },
  ];
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Seguimiento de pedido</p>
    <sp-timeline id="demo-tl1"></sp-timeline>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Historial de actividad</p>
    <sp-timeline id="demo-tl2"></sp-timeline>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Registro de cambios (changelog)</p>
    <sp-timeline id="demo-tl3"></sp-timeline>
  </div>
</div>
<script>
(function(){
  document.getElementById('demo-tl1').items = [
    { label: 'Pedido realizado',  description: 'Pedido #8821 confirmado. Total: $49.99', time: 'Hoy 09:00', variant: 'success' },
    { label: 'Pago procesado',    description: 'Tarjeta terminada en 4242 cargada.', time: 'Hoy 09:05', variant: 'success' },
    { label: 'Preparando envío', description: 'Tus artículos están siendo empaquetados.', time: 'Hoy 11:30', variant: 'info' },
    { label: 'En camino',         description: 'Transportista: DHL — Guía: #3948271', time: 'Hoy 15:00', variant: 'default' },
    { label: 'Entrega estimada',  description: 'Llegará mañana entre 8:00 y 12:00 hrs.', time: 'Mañana', variant: 'warning' },
  ];
  document.getElementById('demo-tl2').items = [
    { label: 'María García creó el proyecto',   description: '"Rediseño de sitio web" — 8 miembros', time: 'Hace 2 días', variant: 'success' },
    { label: 'Carlos López subió archivos',      description: '5 archivos en Diseño / Mockups', time: 'Ayer 14:30', variant: 'info' },
    { label: 'Ana Torres hizo un comentario',   description: '"Los wireframes se ven muy bien, aprobado!"', time: 'Ayer 16:45', variant: 'default' },
    { label: 'Sistema: build completado',       description: 'v2.1.0 desplegada en producción', time: 'Hoy 09:00', variant: 'success' },
    { label: 'Error detectado en staging',      description: 'Error 500 en /api/checkout — Revisar logs', time: 'Hoy 09:42', variant: 'error' },
  ];
  document.getElementById('demo-tl3').items = [
    { label: 'v2.1.0 — Nuevos componentes',    description: 'Tour, Onboarding, Transfer, PDF Viewer añadidos.', time: '15 Abr 2025', variant: 'success' },
    { label: 'v2.0.0 — Major release',         description: 'Dark mode, TypeScript 5, tokens CSS mejorados.', time: '01 Mar 2025', variant: 'success' },
    { label: 'v1.9.2 — Hotfix',                description: 'Corregido bug de accesibilidad en Modal.', time: '14 Feb 2025', variant: 'warning' },
    { label: 'v1.9.0 — Formularios avanzados', description: 'DatePicker, TimePicker, ColorPicker, Signature.', time: '20 Ene 2025', variant: 'info' },
  ];
})();
</script>`,
    events: [
      { name: "sp-item-click", detail: "{ item: object, index: number }", desc: "Emitido al hacer clic en un item del timeline" },
    ],
  },

  tree: {
    usage: `<sp-tree selection-mode="multiple">
  <sp-tree-item label="src" expanded>
    <sp-tree-item label="components">
      <sp-tree-item label="Button.ts"></sp-tree-item>
      <sp-tree-item label="Input.ts"></sp-tree-item>
    </sp-tree-item>
    <sp-tree-item label="index.ts"></sp-tree-item>
  </sp-tree-item>
  <sp-tree-item label="package.json"></sp-tree-item>
</sp-tree>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Explorador de archivos</p>
    <sp-tree>
      <sp-tree-item label="📁 src" expanded>
        <sp-tree-item label="📁 components" expanded>
          <sp-tree-item label="📄 Button.ts"></sp-tree-item>
          <sp-tree-item label="📄 Input.ts"></sp-tree-item>
          <sp-tree-item label="📄 Modal.ts"></sp-tree-item>
        </sp-tree-item>
        <sp-tree-item label="📁 styles">
          <sp-tree-item label="📄 tokens.css"></sp-tree-item>
          <sp-tree-item label="📄 global.css"></sp-tree-item>
        </sp-tree-item>
        <sp-tree-item label="📄 index.ts"></sp-tree-item>
      </sp-tree-item>
      <sp-tree-item label="📄 package.json"></sp-tree-item>
      <sp-tree-item label="📄 tsconfig.json"></sp-tree-item>
    </sp-tree>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Selección simple</p>
    <sp-tree selection-mode="single">
      <sp-tree-item label="🌍 Europa" expanded>
        <sp-tree-item label="🇪🇸 España"></sp-tree-item>
        <sp-tree-item label="🇫🇷 Francia"></sp-tree-item>
        <sp-tree-item label="🇩🇪 Alemania"></sp-tree-item>
      </sp-tree-item>
      <sp-tree-item label="🌎 América">
        <sp-tree-item label="🇺🇸 Estados Unidos"></sp-tree-item>
        <sp-tree-item label="🇲🇽 México"></sp-tree-item>
        <sp-tree-item label="🇧🇷 Brasil"></sp-tree-item>
      </sp-tree-item>
    </sp-tree>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Selección múltiple</p>
    <sp-tree selection-mode="multiple">
      <sp-tree-item label="Permisos del sistema">
        <sp-tree-item label="👁️ Leer"></sp-tree-item>
        <sp-tree-item label="✏️ Escribir"></sp-tree-item>
        <sp-tree-item label="🗑️ Eliminar"></sp-tree-item>
        <sp-tree-item label="⚙️ Administrar"></sp-tree-item>
      </sp-tree-item>
    </sp-tree>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Estructura organizacional</p>
    <sp-tree>
      <sp-tree-item label="🏢 Empresa Global" expanded>
        <sp-tree-item label="💻 División Tech" expanded>
          <sp-tree-item label="🔧 Backend"></sp-tree-item>
          <sp-tree-item label="🎨 Frontend"></sp-tree-item>
          <sp-tree-item label="📱 Mobile"></sp-tree-item>
        </sp-tree-item>
        <sp-tree-item label="📊 División Negocio">
          <sp-tree-item label="💼 Ventas"></sp-tree-item>
          <sp-tree-item label="📣 Marketing"></sp-tree-item>
        </sp-tree-item>
      </sp-tree-item>
    </sp-tree>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Con resultado de selección</p>
    <sp-tree id="demo-tree-sel" selection-mode="single">
      <sp-tree-item label="Configuración" expanded>
        <sp-tree-item label="General"></sp-tree-item>
        <sp-tree-item label="Apariencia"></sp-tree-item>
        <sp-tree-item label="Seguridad"></sp-tree-item>
        <sp-tree-item label="Notificaciones"></sp-tree-item>
      </sp-tree-item>
    </sp-tree>
    <div id="demo-tree-result" style="margin-top:8px;font-size:13px;color:var(--sp-text-muted);">Sección seleccionada: ninguna</div>
  </div>
</div>
<script>
(function(){
  var tree = document.getElementById('demo-tree-sel');
  var result = document.getElementById('demo-tree-result');
  if (tree && result) {
    tree.addEventListener('sp-selection-change', function(e) {
      result.textContent = 'Sección seleccionada: ' + (e.detail.selection && e.detail.selection[0] || 'ninguna');
    });
  }
})();
</script>`,
    events: [
      { name: "sp-selection-change", detail: "{ selection: string[] }", desc: "Emitido al cambiar la selección" },
      { name: "sp-expand",           detail: "{ item: Element }",        desc: "Emitido al expandir un nodo" },
      { name: "sp-collapse",         detail: "{ item: Element }",        desc: "Emitido al colapsar un nodo" },
    ],
    slots: [
      { name: "(default)", desc: "Elementos sp-tree-item" },
    ],
  },

  calendar: {
    usage: `<sp-calendar mode="single"></sp-calendar>
<sp-calendar mode="range" show-presets months="2"></sp-calendar>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Selección de fecha única</p>
    <sp-calendar id="demo-cal1" mode="single"></sp-calendar>
    <div id="demo-cal1-result" style="margin-top:8px;font-size:13px;color:var(--sp-text-muted);">Fecha: no seleccionada</div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Selección de rango de fechas</p>
    <sp-calendar id="demo-cal2" mode="range" months="2"></sp-calendar>
    <div id="demo-cal2-result" style="margin-top:8px;font-size:13px;color:var(--sp-text-muted);">Rango: no seleccionado</div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con presets de rango rápido</p>
    <sp-calendar mode="range" show-presets></sp-calendar>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Selección múltiple</p>
    <sp-calendar mode="multiple"></sp-calendar>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Solo lectura con fecha preseleccionada</p>
    <sp-calendar id="demo-cal5" mode="single" readonly></sp-calendar>
  </div>
</div>
<script>
(function(){
  var cal1 = document.getElementById('demo-cal1');
  var res1 = document.getElementById('demo-cal1-result');
  if (cal1 && res1) {
    cal1.addEventListener('sp-change', function(e) {
      res1.textContent = 'Fecha: ' + (e.detail.value || 'no seleccionada');
    });
  }
  var cal2 = document.getElementById('demo-cal2');
  var res2 = document.getElementById('demo-cal2-result');
  if (cal2 && res2) {
    cal2.addEventListener('sp-change', function(e) {
      var v = e.detail.value;
      if (v && v.start && v.end) {
        res2.textContent = 'Rango: ' + v.start + ' → ' + v.end;
      } else {
        res2.textContent = 'Rango: no seleccionado';
      }
    });
  }
  var cal5 = document.getElementById('demo-cal5');
  if (cal5) {
    var today = new Date();
    cal5.value = today.toISOString().slice(0, 10);
  }
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string | string[] | { start, end } }", desc: "Emitido al cambiar la selección de fecha(s)" },
    ],
  },

  gallery: {
    usage: `<sp-gallery id="g" columns="3" gap="8" aspect-ratio="4/3" selectable></sp-gallery>
<script>
  document.getElementById('g').items = [
    { src: 'https://picsum.photos/seed/a1/800/600', alt: 'Mountain landscape', caption: 'Mountain at dawn' },
    { src: 'https://picsum.photos/seed/b2/800/600', alt: 'Forest path', caption: 'Through the forest' },
    { src: 'https://picsum.photos/seed/c3/800/600', alt: 'Ocean waves' },
    { src: 'https://picsum.photos/seed/d4/800/600', alt: 'Desert dunes', caption: 'Sahara desert' },
    { src: 'https://picsum.photos/seed/e5/800/600', alt: 'City skyline' },
    { src: 'https://picsum.photos/seed/f6/800/600', alt: 'Autumn leaves', caption: 'Fall colors' },
  ];
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:700px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Grid 3 columnas con selección y lightbox</p>
    <sp-gallery id="demo-gallery1" columns="3" gap="8" aspect-ratio="4/3" selectable></sp-gallery>
    <div id="demo-gal-sel" style="font-size:12px;color:var(--sp-text-muted);margin-top:8px;">Haz clic para abrir el lightbox · Selecciona con Shift+Click</div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Grid 4 columnas — cuadrado 1:1</p>
    <sp-gallery id="demo-gallery2" columns="4" gap="6" aspect-ratio="1/1"></sp-gallery>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Grid 2 columnas — panorámica 16:9 con captions</p>
    <sp-gallery id="demo-gallery3" columns="2" gap="10" aspect-ratio="16/9"></sp-gallery>
  </div>
</div>
<script>
(function(){
  var g1 = document.getElementById('demo-gallery1');
  var selOut = document.getElementById('demo-gal-sel');
  g1.items = [
    { src: 'https://picsum.photos/seed/nat1/800/600', alt: 'Mountains', caption: 'Mountain at dawn' },
    { src: 'https://picsum.photos/seed/nat2/800/600', alt: 'Forest', caption: 'Through the forest' },
    { src: 'https://picsum.photos/seed/nat3/800/600', alt: 'Ocean waves' },
    { src: 'https://picsum.photos/seed/nat4/800/600', alt: 'Desert', caption: 'Sahara desert' },
    { src: 'https://picsum.photos/seed/nat5/800/600', alt: 'City skyline' },
    { src: 'https://picsum.photos/seed/nat6/800/600', alt: 'Autumn', caption: 'Fall colors' },
    { src: 'https://picsum.photos/seed/nat7/800/600', alt: 'Snowy peaks' },
    { src: 'https://picsum.photos/seed/nat8/800/600', alt: 'Beach' },
    { src: 'https://picsum.photos/seed/nat9/800/600', alt: 'Waterfall' },
  ];
  g1.addEventListener('sp-select', function(e){
    var n = e.detail.items.length;
    selOut.textContent = n > 0 ? n + ' imagen' + (n > 1 ? 'es seleccionadas' : ' seleccionada') : 'Haz clic para abrir el lightbox · Selecciona con Shift+Click';
    selOut.style.color = n > 0 ? 'var(--sp-primary)' : 'var(--sp-text-muted)';
  });

  var g2 = document.getElementById('demo-gallery2');
  g2.items = [
    { src: 'https://picsum.photos/seed/sq1/400/400', alt: 'Architecture' },
    { src: 'https://picsum.photos/seed/sq2/400/400', alt: 'Food' },
    { src: 'https://picsum.photos/seed/sq3/400/400', alt: 'Travel' },
    { src: 'https://picsum.photos/seed/sq4/400/400', alt: 'People' },
    { src: 'https://picsum.photos/seed/sq5/400/400', alt: 'Technology' },
    { src: 'https://picsum.photos/seed/sq6/400/400', alt: 'Nature' },
    { src: 'https://picsum.photos/seed/sq7/400/400', alt: 'Animals' },
    { src: 'https://picsum.photos/seed/sq8/400/400', alt: 'Art' },
  ];

  var g3 = document.getElementById('demo-gallery3');
  g3.items = [
    { src: 'https://picsum.photos/seed/wide1/900/506', alt: 'Landscape 1', caption: 'Los Picos de Europa, España' },
    { src: 'https://picsum.photos/seed/wide2/900/506', alt: 'Landscape 2', caption: 'Patagonia, Argentina' },
    { src: 'https://picsum.photos/seed/wide3/900/506', alt: 'Landscape 3', caption: 'Fiordos noruegos' },
    { src: 'https://picsum.photos/seed/wide4/900/506', alt: 'Landscape 4', caption: 'Gran Cañón, Arizona' },
  ];
})();
</script>`,
    events: [
      { name: "sp-open",   detail: "{ item: object, index: number }", desc: "Emitido al abrir el lightbox" },
      { name: "sp-select", detail: "{ items: object[] }",             desc: "Emitido al seleccionar imágenes" },
    ],
  },

  carousel: {
    usage: `<sp-carousel loop autoplay interval="4000" show-dots show-arrows>
  <sp-carousel-slide>
    <img src="https://picsum.photos/seed/slide1/900/400" alt="Slide 1" style="width:100%;height:260px;object-fit:cover;border-radius:8px;" />
  </sp-carousel-slide>
  <sp-carousel-slide>
    <img src="https://picsum.photos/seed/slide2/900/400" alt="Slide 2" style="width:100%;height:260px;object-fit:cover;border-radius:8px;" />
  </sp-carousel-slide>
  <sp-carousel-slide>
    <img src="https://picsum.photos/seed/slide3/900/400" alt="Slide 3" style="width:100%;height:260px;object-fit:cover;border-radius:8px;" />
  </sp-carousel-slide>
</sp-carousel>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:720px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Galería de imágenes (autoplay + pausa al hover)</p>
    <sp-carousel loop autoplay interval="3500" show-dots show-arrows pause-on-hover style="display:block;">
      <sp-carousel-slide>
        <div style="position:relative;">
          <img src="https://picsum.photos/seed/slide1/900/360" alt="Montañas" style="width:100%;height:240px;object-fit:cover;border-radius:8px;" />
          <div style="position:absolute;bottom:12px;left:16px;color:#fff;text-shadow:0 1px 4px rgba(0,0,0,.5);font-weight:700;font-size:18px;">Montañas del Norte</div>
        </div>
      </sp-carousel-slide>
      <sp-carousel-slide>
        <div style="position:relative;">
          <img src="https://picsum.photos/seed/slide2/900/360" alt="Bosque" style="width:100%;height:240px;object-fit:cover;border-radius:8px;" />
          <div style="position:absolute;bottom:12px;left:16px;color:#fff;text-shadow:0 1px 4px rgba(0,0,0,.5);font-weight:700;font-size:18px;">Bosque Profundo</div>
        </div>
      </sp-carousel-slide>
      <sp-carousel-slide>
        <div style="position:relative;">
          <img src="https://picsum.photos/seed/slide3/900/360" alt="Océano" style="width:100%;height:240px;object-fit:cover;border-radius:8px;" />
          <div style="position:absolute;bottom:12px;left:16px;color:#fff;text-shadow:0 1px 4px rgba(0,0,0,.5);font-weight:700;font-size:18px;">Costa Pacífica</div>
        </div>
      </sp-carousel-slide>
      <sp-carousel-slide>
        <div style="position:relative;">
          <img src="https://picsum.photos/seed/slide4/900/360" alt="Ciudad" style="width:100%;height:240px;object-fit:cover;border-radius:8px;" />
          <div style="position:absolute;bottom:12px;left:16px;color:#fff;text-shadow:0 1px 4px rgba(0,0,0,.5);font-weight:700;font-size:18px;">Ciudad al Amanecer</div>
        </div>
      </sp-carousel-slide>
    </sp-carousel>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Cards de contenido (sin imágenes)</p>
    <sp-carousel show-arrows show-dots style="display:block;">
      <sp-carousel-slide>
        <div style="padding:24px;border:1px solid var(--sp-border,#e5e7eb);border-radius:10px;background:var(--sp-bg,#fff);min-height:160px;">
          <div style="font-size:28px;margin-bottom:10px;">🚀</div>
          <div style="font-weight:700;font-size:16px;margin-bottom:6px;">Alto rendimiento</div>
          <div style="font-size:13px;color:var(--sp-text-secondary);">Web Components nativos sin dependencias. Bundle tree-shakeable de &lt; 2 kB por componente.</div>
        </div>
      </sp-carousel-slide>
      <sp-carousel-slide>
        <div style="padding:24px;border:1px solid var(--sp-border,#e5e7eb);border-radius:10px;background:var(--sp-bg,#fff);min-height:160px;">
          <div style="font-size:28px;margin-bottom:10px;">🎨</div>
          <div style="font-weight:700;font-size:16px;margin-bottom:6px;">Totalmente personalizable</div>
          <div style="font-size:13px;color:var(--sp-text-secondary);">Tokens CSS para colores, radios, sombras y tipografía. Compatible con dark mode.</div>
        </div>
      </sp-carousel-slide>
      <sp-carousel-slide>
        <div style="padding:24px;border:1px solid var(--sp-border,#e5e7eb);border-radius:10px;background:var(--sp-bg,#fff);min-height:160px;">
          <div style="font-size:28px;margin-bottom:10px;">♿</div>
          <div style="font-weight:700;font-size:16px;margin-bottom:6px;">Accesible por diseño</div>
          <div style="font-size:13px;color:var(--sp-text-secondary);">WCAG 2.1 AA: roles ARIA, navegación por teclado, anuncios para lectores de pantalla.</div>
        </div>
      </sp-carousel-slide>
      <sp-carousel-slide>
        <div style="padding:24px;border:1px solid var(--sp-border,#e5e7eb);border-radius:10px;background:var(--sp-bg,#fff);min-height:160px;">
          <div style="font-size:28px;margin-bottom:10px;">🔗</div>
          <div style="font-weight:700;font-size:16px;margin-bottom:6px;">Framework-agnostic</div>
          <div style="font-size:13px;color:var(--sp-text-secondary);">Funciona igual en React, Vue, Angular, Svelte, Astro o HTML puro. Cero lock-in.</div>
        </div>
      </sp-carousel-slide>
    </sp-carousel>
  </div>
</div>`,
    events: [
      { name: "sp-slide-change", detail: "{ index: number }", desc: "Emitido al cambiar de slide" },
    ],
    slots: [
      { name: "(default)", desc: "Elementos sp-carousel-item" },
    ],
  },

  tag: {
    usage: `<sp-tag variant="primary">JavaScript</sp-tag>
<sp-tag variant="success" removable>TypeScript</sp-tag>
<sp-tag variant="warning" size="sm">Beta</sp-tag>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Variantes de color</p>
    <div style="display:flex;flex-wrap:wrap;gap:6px;">
      <sp-tag variant="primary">Primary</sp-tag>
      <sp-tag variant="success">Success</sp-tag>
      <sp-tag variant="warning">Warning</sp-tag>
      <sp-tag variant="error">Error</sp-tag>
      <sp-tag variant="info">Info</sp-tag>
      <sp-tag variant="neutral">Neutral</sp-tag>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Tamaños</p>
    <div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;">
      <sp-tag variant="primary" size="sm">Small</sp-tag>
      <sp-tag variant="primary" size="md">Medium</sp-tag>
      <sp-tag variant="primary" size="lg">Large</sp-tag>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Tags eliminables (removable)</p>
    <div id="demo-tag-removable" style="display:flex;flex-wrap:wrap;gap:6px;">
      <sp-tag variant="primary" removable data-label="JavaScript">JavaScript</sp-tag>
      <sp-tag variant="success" removable data-label="TypeScript">TypeScript</sp-tag>
      <sp-tag variant="warning" removable data-label="CSS">CSS</sp-tag>
      <sp-tag variant="info" removable data-label="HTML">HTML</sp-tag>
      <sp-tag variant="neutral" removable data-label="Node.js">Node.js</sp-tag>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Tags de categoría en artículos</p>
    <div style="padding:16px;border:1px solid var(--sp-border);border-radius:8px;">
      <h4 style="margin:0 0 8px;font-size:15px;">Introducción a los Web Components</h4>
      <p style="margin:0 0 10px;font-size:13px;color:var(--sp-text-muted);">Aprende cómo crear componentes reutilizables nativos del navegador.</p>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        <sp-tag variant="primary" size="sm">Web Components</sp-tag>
        <sp-tag variant="info" size="sm">JavaScript</sp-tag>
        <sp-tag variant="neutral" size="sm">Tutorial</sp-tag>
        <sp-tag variant="success" size="sm">Principiante</sp-tag>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Tags interactivos (filtros)</p>
    <div style="display:flex;flex-wrap:wrap;gap:6px;" id="demo-tag-filter">
      <sp-tag variant="neutral" data-active="false" style="cursor:pointer;">Todos</sp-tag>
      <sp-tag variant="neutral" data-active="false" style="cursor:pointer;">Diseño</sp-tag>
      <sp-tag variant="neutral" data-active="false" style="cursor:pointer;">Desarrollo</sp-tag>
      <sp-tag variant="neutral" data-active="false" style="cursor:pointer;">Marketing</sp-tag>
      <sp-tag variant="neutral" data-active="false" style="cursor:pointer;">Negocio</sp-tag>
    </div>
    <div id="demo-tag-filter-result" style="margin-top:8px;font-size:13px;color:var(--sp-text-muted);">Filtro activo: ninguno</div>
  </div>
</div>
<script>
(function(){
  var removable = document.getElementById('demo-tag-removable');
  if (removable) {
    removable.addEventListener('sp-remove', function(e) {
      var tag = e.target.closest('sp-tag');
      if (tag) tag.remove();
    });
  }
  var filter = document.getElementById('demo-tag-filter');
  var filterResult = document.getElementById('demo-tag-filter-result');
  if (filter && filterResult) {
    filter.querySelectorAll('sp-tag').forEach(function(tag) {
      tag.addEventListener('click', function() {
        filter.querySelectorAll('sp-tag').forEach(function(t) {
          t.variant = 'neutral';
          t.dataset.active = 'false';
        });
        tag.variant = 'primary';
        tag.dataset.active = 'true';
        filterResult.textContent = 'Filtro activo: ' + tag.textContent.trim();
      });
    });
  }
})();
</script>`,
    events: [
      { name: "sp-remove", detail: "—", desc: "Emitido al hacer clic en el botón de eliminar (removable=true)" },
      { name: "click",     detail: "—", desc: "Evento nativo de clic en el tag" },
    ],
  },

  // ── Feedback ──────────────────────────────────────────────────────────────

  alert: {
    usage: `<sp-alert variant="success" title="¡Operación exitosa!" dismissible>
  Tus cambios han sido guardados correctamente.
</sp-alert>
<sp-alert variant="warning">
  Esta acción puede tener consecuencias irreversibles.
</sp-alert>`,
    demo: `<div style="display:flex;flex-direction:column;gap:16px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Variantes</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-alert variant="success">Tus cambios han sido guardados correctamente.</sp-alert>
      <sp-alert variant="error">Error al procesar la solicitud. Inténtalo de nuevo.</sp-alert>
      <sp-alert variant="warning">El archivo supera el tamaño máximo permitido de 10MB.</sp-alert>
      <sp-alert variant="info">Hay una nueva versión disponible. Actualiza para ver las mejoras.</sp-alert>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con título</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-alert variant="success" title="¡Cuenta activada!">Tu cuenta ha sido verificada y ya tienes acceso completo a la plataforma.</sp-alert>
      <sp-alert variant="error" title="Error de validación">Los campos marcados con * son obligatorios. Por favor revisa el formulario.</sp-alert>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Descartable (dismissible)</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-alert variant="info" title="Consejo del día" dismissible>Usa Ctrl+K para abrir el buscador rápido de componentes desde cualquier página.</sp-alert>
      <sp-alert variant="warning" title="Sesión próxima a expirar" dismissible>Tu sesión expirará en 5 minutos. Guarda tu trabajo para no perderlo.</sp-alert>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Con acción inline</p>
    <sp-alert variant="warning" title="Suscripción por vencer">
      Tu plan actual vence en 7 días. Renueva para no perder el acceso.
      <sp-button slot="action" size="sm" variant="primary">Renovar ahora</sp-button>
    </sp-alert>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Alerta dinámica</p>
    <div style="display:flex;gap:8px;margin-bottom:10px;">
      <sp-button id="demo-alert-ok" size="sm" variant="primary">Guardar</sp-button>
      <sp-button id="demo-alert-err" size="sm" variant="danger">Simular error</sp-button>
    </div>
    <div id="demo-alert-result"></div>
  </div>
</div>
<script>
(function(){
  var okBtn = document.getElementById('demo-alert-ok');
  var errBtn = document.getElementById('demo-alert-err');
  var result = document.getElementById('demo-alert-result');
  function showAlert(variant, title, msg) {
    if (!result) return;
    result.innerHTML = '';
    var a = document.createElement('sp-alert');
    a.variant = variant;
    a.title = title;
    a.textContent = msg;
    a.setAttribute('dismissible', '');
    result.appendChild(a);
  }
  if (okBtn) okBtn.addEventListener('click', function() {
    showAlert('success', '¡Guardado!', 'Los cambios se han guardado correctamente.');
  });
  if (errBtn) errBtn.addEventListener('click', function() {
    showAlert('error', 'Error de red', 'No se pudo conectar con el servidor. Inténtalo más tarde.');
  });
})();
</script>`,
    events: [
      { name: "sp-close", detail: "—", desc: "Emitido al cerrar la alerta (dismissible=true)" },
    ],
    slots: [
      { name: "(default)", desc: "Descripción o contenido de la alerta" },
      { name: "icon",      desc: "Icono personalizado en lugar del icono automático" },
    ],
  },

  "progress-bar": {
    usage: `<sp-progress-bar value="65" label="Subiendo archivo…" variant="primary"></sp-progress-bar>
<sp-progress-bar indeterminate label="Cargando…" variant="info"></sp-progress-bar>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Variantes de color</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-progress-bar value="75" label="Primary" variant="primary"></sp-progress-bar>
      <sp-progress-bar value="60" label="Success" variant="success"></sp-progress-bar>
      <sp-progress-bar value="45" label="Warning" variant="warning"></sp-progress-bar>
      <sp-progress-bar value="30" label="Error" variant="error"></sp-progress-bar>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Indeterminado (cargando)</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-progress-bar indeterminate label="Procesando solicitud…"></sp-progress-bar>
      <sp-progress-bar indeterminate label="Sincronizando datos…" variant="info"></sp-progress-bar>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Subida de archivos</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-progress-bar id="demo-pb-upload" value="0" label="archivo-proyecto.zip"></sp-progress-bar>
      <div style="display:flex;gap:8px;">
        <sp-button id="demo-pb-start" size="sm">Iniciar subida</sp-button>
        <sp-button id="demo-pb-reset" size="sm" variant="ghost">Reiniciar</sp-button>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Barras múltiples de estadísticas</p>
    <div style="display:flex;flex-direction:column;gap:10px;font-size:13px;">
      <div><span>JavaScript</span><sp-progress-bar value="85" variant="primary" style="margin-top:4px;"></sp-progress-bar></div>
      <div><span>TypeScript</span><sp-progress-bar value="70" variant="info" style="margin-top:4px;"></sp-progress-bar></div>
      <div><span>CSS</span><sp-progress-bar value="60" variant="success" style="margin-top:4px;"></sp-progress-bar></div>
      <div><span>Python</span><sp-progress-bar value="40" variant="warning" style="margin-top:4px;"></sp-progress-bar></div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Barra con valor mostrado</p>
    <sp-progress-bar id="demo-pb-ctrl" value="50" label="Progreso del módulo" show-value></sp-progress-bar>
    <div style="display:flex;gap:8px;margin-top:8px;">
      <sp-button id="demo-pb-dec" size="sm" variant="ghost">-10</sp-button>
      <sp-button id="demo-pb-inc" size="sm" variant="ghost">+10</sp-button>
    </div>
  </div>
</div>
<script>
(function(){
  var pb = document.getElementById('demo-pb-upload');
  var startBtn = document.getElementById('demo-pb-start');
  var resetBtn = document.getElementById('demo-pb-reset');
  var timer = null;
  if (startBtn && pb) {
    startBtn.addEventListener('click', function() {
      if (timer) return;
      pb.value = 0;
      var v = 0;
      timer = setInterval(function() {
        v += Math.random() * 8 + 2;
        if (v >= 100) { v = 100; clearInterval(timer); timer = null; }
        pb.value = Math.round(v);
      }, 200);
    });
  }
  if (resetBtn && pb) {
    resetBtn.addEventListener('click', function() {
      clearInterval(timer); timer = null; pb.value = 0;
    });
  }
  var pbCtrl = document.getElementById('demo-pb-ctrl');
  var decBtn = document.getElementById('demo-pb-dec');
  var incBtn = document.getElementById('demo-pb-inc');
  if (pbCtrl && decBtn && incBtn) {
    decBtn.addEventListener('click', function() { pbCtrl.value = Math.max(0, (pbCtrl.value || 50) - 10); });
    incBtn.addEventListener('click', function() { pbCtrl.value = Math.min(100, (pbCtrl.value || 50) + 10); });
  }
})();
</script>`,
  },

  spinner: {
    usage: `<sp-spinner></sp-spinner>
<sp-spinner size="lg"></sp-spinner>
<sp-spinner size="sm"></sp-spinner>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Tamaños</p>
    <div style="display:flex;gap:16px;align-items:center;">
      <sp-spinner size="sm"></sp-spinner>
      <sp-spinner size="md"></sp-spinner>
      <sp-spinner size="lg"></sp-spinner>
      <sp-spinner size="xl"></sp-spinner>
      <div style="font-size:12px;color:var(--sp-text-muted);">sm · md · lg · xl</div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · En botones de carga</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;">
      <sp-button variant="primary" disabled style="display:inline-flex;gap:6px;align-items:center;">
        <sp-spinner size="sm"></sp-spinner> Guardando…
      </sp-button>
      <sp-button variant="secondary" disabled style="display:inline-flex;gap:6px;align-items:center;">
        <sp-spinner size="sm"></sp-spinner> Cargando
      </sp-button>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Pantalla de carga completa</p>
    <div style="position:relative;min-height:100px;border:1px solid var(--sp-border);border-radius:8px;display:flex;align-items:center;justify-content:center;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
        <sp-spinner size="lg"></sp-spinner>
        <span style="font-size:14px;color:var(--sp-text-muted);">Cargando datos…</span>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Spinner con toggle</p>
    <div style="display:flex;align-items:center;gap:12px;">
      <sp-button id="demo-spinner-toggle" size="sm">Simular carga</sp-button>
      <span id="demo-spinner-wrap" hidden>
        <sp-spinner size="md"></sp-spinner>
      </span>
      <span id="demo-spinner-done" style="color:var(--sp-success,#22c55e);font-size:14px;" hidden>✓ Completado</span>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Spinners en tarjetas de métrica</p>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
      <div style="padding:16px;border:1px solid var(--sp-border);border-radius:8px;text-align:center;">
        <sp-spinner size="md"></sp-spinner>
        <div style="font-size:12px;color:var(--sp-text-muted);margin-top:6px;">Usuarios</div>
      </div>
      <div style="padding:16px;border:1px solid var(--sp-border);border-radius:8px;text-align:center;">
        <sp-spinner size="md"></sp-spinner>
        <div style="font-size:12px;color:var(--sp-text-muted);margin-top:6px;">Ingresos</div>
      </div>
      <div style="padding:16px;border:1px solid var(--sp-border);border-radius:8px;text-align:center;">
        <sp-spinner size="md"></sp-spinner>
        <div style="font-size:12px;color:var(--sp-text-muted);margin-top:6px;">Sesiones</div>
      </div>
    </div>
  </div>
</div>
<script>
(function(){
  var toggleBtn = document.getElementById('demo-spinner-toggle');
  var spinnerWrap = document.getElementById('demo-spinner-wrap');
  var doneMsg = document.getElementById('demo-spinner-done');
  if (toggleBtn && spinnerWrap && doneMsg) {
    toggleBtn.addEventListener('click', function() {
      toggleBtn.disabled = true;
      spinnerWrap.hidden = false;
      doneMsg.hidden = true;
      setTimeout(function() {
        spinnerWrap.hidden = true;
        doneMsg.hidden = false;
        toggleBtn.disabled = false;
      }, 2000);
    });
  }
})();
</script>`,
  },

  skeleton: {
    usage: `<!-- Título y texto -->
<sp-skeleton variant="text" width="60%" height="24px"></sp-skeleton>
<sp-skeleton variant="text" width="90%"></sp-skeleton>
<sp-skeleton variant="text" width="75%"></sp-skeleton>

<!-- Avatar -->
<sp-skeleton variant="circle" width="48px" height="48px"></sp-skeleton>

<!-- Imagen -->
<sp-skeleton variant="rect" width="100%" height="200px"></sp-skeleton>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Tipos básicos</p>
    <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
      <sp-skeleton variant="text" width="120px" height="16px"></sp-skeleton>
      <sp-skeleton variant="circle" width="40px" height="40px"></sp-skeleton>
      <sp-skeleton variant="rect" width="80px" height="60px"></sp-skeleton>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Tarjeta de perfil en carga</p>
    <div style="display:flex;gap:12px;align-items:flex-start;padding:16px;border:1px solid var(--sp-border);border-radius:10px;">
      <sp-skeleton variant="circle" width="48px" height="48px"></sp-skeleton>
      <div style="flex:1;display:flex;flex-direction:column;gap:6px;">
        <sp-skeleton variant="text" width="40%" height="16px"></sp-skeleton>
        <sp-skeleton variant="text" width="60%" height="13px"></sp-skeleton>
        <sp-skeleton variant="text" width="50%" height="13px"></sp-skeleton>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Lista de artículos</p>
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div style="display:flex;gap:12px;align-items:center;">
        <sp-skeleton variant="rect" width="72px" height="72px" style="border-radius:8px;flex-shrink:0;"></sp-skeleton>
        <div style="flex:1;display:flex;flex-direction:column;gap:6px;">
          <sp-skeleton variant="text" width="70%" height="15px"></sp-skeleton>
          <sp-skeleton variant="text" width="90%" height="13px"></sp-skeleton>
          <sp-skeleton variant="text" width="40%" height="13px"></sp-skeleton>
        </div>
      </div>
      <div style="display:flex;gap:12px;align-items:center;">
        <sp-skeleton variant="rect" width="72px" height="72px" style="border-radius:8px;flex-shrink:0;"></sp-skeleton>
        <div style="flex:1;display:flex;flex-direction:column;gap:6px;">
          <sp-skeleton variant="text" width="55%" height="15px"></sp-skeleton>
          <sp-skeleton variant="text" width="80%" height="13px"></sp-skeleton>
          <sp-skeleton variant="text" width="35%" height="13px"></sp-skeleton>
        </div>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Tabla en carga</p>
    <div style="border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;padding:10px 14px;background:var(--sp-bg-muted);">
        <sp-skeleton variant="text" width="60%" height="13px"></sp-skeleton>
        <sp-skeleton variant="text" width="50%" height="13px"></sp-skeleton>
        <sp-skeleton variant="text" width="40%" height="13px"></sp-skeleton>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;padding:10px 14px;border-top:1px solid var(--sp-border);">
        <sp-skeleton variant="text" width="80%" height="13px"></sp-skeleton>
        <sp-skeleton variant="text" width="60%" height="13px"></sp-skeleton>
        <sp-skeleton variant="text" width="50%" height="13px"></sp-skeleton>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;padding:10px 14px;border-top:1px solid var(--sp-border);">
        <sp-skeleton variant="text" width="70%" height="13px"></sp-skeleton>
        <sp-skeleton variant="text" width="55%" height="13px"></sp-skeleton>
        <sp-skeleton variant="text" width="45%" height="13px"></sp-skeleton>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Toggle skeleton / contenido real</p>
    <div>
      <sp-button id="demo-skel-toggle" size="sm" style="margin-bottom:12px;">Cargar contenido</sp-button>
      <div id="demo-skel-loading" style="display:flex;gap:12px;align-items:flex-start;padding:16px;border:1px solid var(--sp-border);border-radius:10px;">
        <sp-skeleton variant="circle" width="44px" height="44px"></sp-skeleton>
        <div style="flex:1;display:flex;flex-direction:column;gap:6px;">
          <sp-skeleton variant="text" width="45%" height="16px"></sp-skeleton>
          <sp-skeleton variant="text" width="70%" height="13px"></sp-skeleton>
        </div>
      </div>
      <div id="demo-skel-real" hidden style="display:flex;gap:12px;align-items:flex-start;padding:16px;border:1px solid var(--sp-border);border-radius:10px;">
        <sp-avatar src="https://i.pravatar.cc/150?img=7" size="md"></sp-avatar>
        <div><strong style="display:block;font-size:14px;">Carlos Ruiz</strong><span style="font-size:13px;color:var(--sp-text-muted);">Desarrollador full-stack · Barcelona</span></div>
      </div>
    </div>
  </div>
</div>
<script>
(function(){
  var btn = document.getElementById('demo-skel-toggle');
  var loading = document.getElementById('demo-skel-loading');
  var real = document.getElementById('demo-skel-real');
  var showing = false;
  if (btn && loading && real) {
    btn.addEventListener('click', function() {
      showing = !showing;
      loading.hidden = showing;
      real.hidden = !showing;
      btn.textContent = showing ? 'Mostrar skeleton' : 'Cargar contenido';
    });
  }
})();
</script>`,
  },

  "notification-center": {
    usage: `<sp-notification-center id="nc" title="Notificaciones"></sp-notification-center>
<script>
  document.getElementById('nc').notifications = [
    { id: '1', title: 'Nuevo mensaje',     body: 'Alice Johnson te ha enviado un mensaje',    time: 'Hace 5 min', type: 'info',    read: false },
    { id: '2', title: 'Tarea completada',  body: 'El build de producción finalizó con éxito', time: 'Hace 1h',    type: 'success', read: false },
    { id: '3', title: 'Pull request',      body: 'Bob Smith aprobó tu PR #42',                time: 'Hace 2h',    type: 'info',    read: false },
    { id: '4', title: 'Advertencia',       body: 'Espacio en disco bajo (>90%)',              time: 'Ayer',       type: 'warning', read: true  },
    { id: '5', title: 'Sesión expirada',   body: 'Tu sesión se cerrará en 10 minutos',        time: 'Ayer',       type: 'warning', read: true  },
  ];
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:520px;">
  <div style="padding:14px 16px;background:var(--sp-bg-subtle);border:1px solid var(--sp-border,#e5e7eb);border-radius:8px;font-size:13px;color:var(--sp-text-secondary);">
    Haz clic en el icono de campana para abrir el panel de notificaciones. Tiene 4 no leídas.
  </div>
  <div style="display:flex;align-items:center;gap:16px;padding:12px 16px;border:1px solid var(--sp-border,#e5e7eb);border-radius:8px;background:var(--sp-bg,#fff);">
    <div style="flex:1;font-weight:600;font-size:14px;">App Dashboard</div>
    <sp-notification-center id="demo-nc" title="Notificaciones" placement="bottom-end"></sp-notification-center>
  </div>
  <div style="font-size:12px;color:var(--sp-text-muted);">
    Las notificaciones incluyen tipos: info · success · warning · error. Puedes marcar como leídas o descartarlas individualmente.
  </div>
</div>
<script>
(function(){
  var nc = document.getElementById('demo-nc');
  nc.notifications = [
    { id: '1', title: 'Nuevo mensaje de Alice',     body: 'Alice Johnson te ha enviado: "¿Puedes revisar el PR antes del viernes?"', time: 'Hace 5 min', type: 'info',    read: false },
    { id: '2', title: 'Build de producción listo',  body: 'La rama main se desplegó en producción correctamente. v2.1.0 activa.', time: 'Hace 42 min', type: 'success', read: false },
    { id: '3', title: 'Pull Request aprobado',      body: 'Bob Smith aprobó tu PR #142: "feat: añadir sp-tour component"',           time: 'Hace 1h',    type: 'success', read: false },
    { id: '4', title: 'Advertencia: disco al 91%',  body: 'El servidor de staging tiene el disco casi lleno. Libera espacio pronto.', time: 'Hace 3h',    type: 'warning', read: false },
    { id: '5', title: 'Error en /api/checkout',     body: 'Se detectaron 12 errores 500 en los últimos 10 minutos. Revisa los logs.', time: 'Ayer',       type: 'error',   read: true  },
    { id: '6', title: 'SP Components v2.1.0',       body: 'Nueva versión disponible. Incluye Tour, Onboarding, Transfer y más.',     time: 'Hace 2 días',type: 'info',    read: true  },
    { id: '7', title: 'Sesión cercana a expirar',   body: 'Tu sesión expirará en 15 minutos. Guarda tu trabajo.',                    time: 'Hace 3 días',type: 'warning', read: true  },
  ];
})();
</script>`,
    events: [
      { name: "sp-notification-click", detail: "{ notification: SpNotification }", desc: "Emitido al hacer clic en una notificación" },
      { name: "sp-mark-all-read",      detail: "—", desc: "Emitido al marcar todas como leídas" },
      { name: "sp-dismiss",            detail: "{ id: string }", desc: "Emitido al descartar una notificación" },
    ],
  },

  // ── Layout ────────────────────────────────────────────────────────────────

  "split-panel": {
    usage: `<sp-split-panel style="height: 400px">
  <div slot="start" style="padding: 16px">Panel izquierdo</div>
  <div slot="end" style="padding: 16px">Panel derecho</div>
</sp-split-panel>

<sp-split-panel vertical style="height: 400px">
  <div slot="start" style="padding: 16px">Panel superior</div>
  <div slot="end" style="padding: 16px">Panel inferior</div>
</sp-split-panel>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · División horizontal</p>
    <sp-split-panel style="height:200px;border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;">
      <div slot="start" style="padding:16px;background:var(--sp-bg-muted);height:100%;box-sizing:border-box;font-size:14px;">Panel izquierdo — arrastra el divisor →</div>
      <div slot="end" style="padding:16px;height:100%;box-sizing:border-box;font-size:14px;">Panel derecho</div>
    </sp-split-panel>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · División vertical</p>
    <sp-split-panel vertical style="height:200px;border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;">
      <div slot="start" style="padding:16px;background:var(--sp-bg-muted);box-sizing:border-box;font-size:14px;">Panel superior</div>
      <div slot="end" style="padding:16px;box-sizing:border-box;font-size:14px;">Panel inferior</div>
    </sp-split-panel>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Editor de código (izquierda) / Preview (derecha)</p>
    <sp-split-panel style="height:200px;border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;" position="40">
      <div slot="start" style="padding:14px;background:#0f172a;font-family:monospace;font-size:12px;color:#94a3b8;overflow:auto;height:100%;box-sizing:border-box;">&lt;h1&gt;Hola mundo&lt;/h1&gt;<br>&lt;p style="color:blue"&gt;Texto azul&lt;/p&gt;</div>
      <div slot="end" style="padding:14px;height:100%;box-sizing:border-box;"><h1 style="margin:0 0 8px;font-size:18px;">Hola mundo</h1><p style="color:blue;margin:0;">Texto azul</p></div>
    </sp-split-panel>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Panel con mínimo fijo</p>
    <sp-split-panel style="height:160px;border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;" snap="10%" primary="start">
      <div slot="start" style="padding:14px;background:var(--sp-bg-muted);height:100%;box-sizing:border-box;font-size:13px;min-width:80px;">Sidebar mín 80px</div>
      <div slot="end" style="padding:14px;height:100%;box-sizing:border-box;font-size:13px;">Área de contenido principal con espacio flexible</div>
    </sp-split-panel>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Posición inicial personalizada (70/30)</p>
    <sp-split-panel id="demo-sp5" style="height:160px;border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;" position="70">
      <div slot="start" style="padding:14px;background:var(--sp-bg-muted);height:100%;box-sizing:border-box;font-size:13px;">Panel principal (70%)</div>
      <div slot="end" style="padding:14px;height:100%;box-sizing:border-box;font-size:13px;">Panel secundario (30%)</div>
    </sp-split-panel>
  </div>
</div>`,
    events: [
      { name: "sp-reposition", detail: "{ position: number }", desc: "Emitido al arrastrar el divisor" },
    ],
    slots: [
      { name: "start", desc: "Contenido del panel superior o izquierdo" },
      { name: "end",   desc: "Contenido del panel inferior o derecho" },
    ],
  },

  "resizable-panel": {
    usage: `<sp-resizable-panel direction="horizontal" initial-size="40" style="height:300px">
  <div slot="first" style="padding:16px; background: #f1f5f9">Panel izquierdo</div>
  <div slot="second" style="padding:16px">Panel derecho</div>
</sp-resizable-panel>

<sp-resizable-panel direction="vertical" style="height:400px">
  <div slot="first" style="padding:16px; background: #f1f5f9">Panel superior</div>
  <div slot="second" style="padding:16px">Panel inferior</div>
</sp-resizable-panel>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Panel redimensionable horizontal</p>
    <sp-resizable-panel direction="horizontal" initial-size="40" style="height:160px;border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;">
      <div slot="first" style="padding:14px;background:var(--sp-bg-muted);height:100%;box-sizing:border-box;font-size:13px;">Panel izquierdo — arrastra →</div>
      <div slot="second" style="padding:14px;height:100%;box-sizing:border-box;font-size:13px;">Panel derecho</div>
    </sp-resizable-panel>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Panel redimensionable vertical</p>
    <sp-resizable-panel direction="vertical" style="height:200px;border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;">
      <div slot="first" style="padding:14px;background:var(--sp-bg-muted);box-sizing:border-box;font-size:13px;">Panel superior</div>
      <div slot="second" style="padding:14px;box-sizing:border-box;font-size:13px;">Panel inferior</div>
    </sp-resizable-panel>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · IDE layout (sidebar + editor)</p>
    <sp-resizable-panel direction="horizontal" initial-size="25" style="height:180px;border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;">
      <div slot="first" style="padding:12px;background:#1e293b;height:100%;box-sizing:border-box;font-size:12px;color:#94a3b8;font-family:monospace;">📁 src<br>  📁 components<br>  📄 index.ts<br>📄 package.json</div>
      <div slot="second" style="padding:12px;background:#0f172a;height:100%;box-sizing:border-box;font-size:12px;color:#94a3b8;font-family:monospace;">// Editor de código<br>import { LitElement } from 'lit';<br>export class SpButton ...</div>
    </sp-resizable-panel>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Con tamaño mínimo</p>
    <sp-resizable-panel direction="horizontal" initial-size="50" min-size="20" style="height:140px;border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;">
      <div slot="first" style="padding:14px;background:var(--sp-bg-muted);height:100%;box-sizing:border-box;font-size:13px;">Mín 20%</div>
      <div slot="second" style="padding:14px;height:100%;box-sizing:border-box;font-size:13px;">Mín 20%</div>
    </sp-resizable-panel>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Con captura de tamaño</p>
    <sp-resizable-panel id="demo-rp5" direction="horizontal" initial-size="50" style="height:120px;border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;">
      <div slot="first" style="padding:14px;background:var(--sp-bg-muted);height:100%;box-sizing:border-box;font-size:13px;">Panel A</div>
      <div slot="second" style="padding:14px;height:100%;box-sizing:border-box;font-size:13px;">Panel B</div>
    </sp-resizable-panel>
    <div id="demo-rp5-result" style="margin-top:6px;font-size:12px;color:var(--sp-text-muted);">Tamaño panel A: 50%</div>
  </div>
</div>
<script>
(function(){
  var rp5 = document.getElementById('demo-rp5');
  var rpResult = document.getElementById('demo-rp5-result');
  if (rp5 && rpResult) {
    rp5.addEventListener('sp-resize', function(e) {
      rpResult.textContent = 'Tamaño panel A: ' + Math.round(e.detail.size) + '%';
    });
  }
})();
</script>`,
    events: [
      { name: "sp-resize", detail: "{ size: number }", desc: "Emitido continuamente mientras se arrastra el divisor" },
    ],
    slots: [
      { name: "first",  desc: "Contenido del panel superior o izquierdo" },
      { name: "second", desc: "Contenido del panel inferior o derecho" },
    ],
  },

  "scroll-area": {
    usage: `<sp-scroll-area max-height="300px">
  <ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <!-- ... más elementos ... -->
  </ul>
</sp-scroll-area>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Scroll vertical con lista larga</p>
    <sp-scroll-area max-height="180px">
      <ul style="margin:0;padding:8px 12px;list-style:none;display:flex;flex-direction:column;gap:2px;">
        <li style="padding:6px 8px;border-radius:6px;font-size:14px;">📄 Reporte enero 2026.pdf</li>
        <li style="padding:6px 8px;border-radius:6px;font-size:14px;">📄 Reporte febrero 2026.pdf</li>
        <li style="padding:6px 8px;border-radius:6px;font-size:14px;">📊 Análisis trimestral.xlsx</li>
        <li style="padding:6px 8px;border-radius:6px;font-size:14px;">📝 Notas de reunión Q1.docx</li>
        <li style="padding:6px 8px;border-radius:6px;font-size:14px;">🖼️ Presentación producto.pptx</li>
        <li style="padding:6px 8px;border-radius:6px;font-size:14px;">📄 Reporte marzo 2026.pdf</li>
        <li style="padding:6px 8px;border-radius:6px;font-size:14px;">📊 KPIs mensuales.xlsx</li>
        <li style="padding:6px 8px;border-radius:6px;font-size:14px;">📄 Contrato cliente ABC.pdf</li>
        <li style="padding:6px 8px;border-radius:6px;font-size:14px;">📝 Plan de acción Q2.docx</li>
        <li style="padding:6px 8px;border-radius:6px;font-size:14px;">📊 Dashboard actualizado.xlsx</li>
      </ul>
    </sp-scroll-area>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Scroll horizontal</p>
    <sp-scroll-area direction="horizontal">
      <div style="display:flex;gap:12px;padding:8px;width:max-content;">
        <div style="flex-shrink:0;width:140px;height:100px;border-radius:8px;background:var(--sp-primary-bg,#eff6ff);display:flex;align-items:center;justify-content:center;font-size:13px;">Tarjeta 1</div>
        <div style="flex-shrink:0;width:140px;height:100px;border-radius:8px;background:var(--sp-bg-muted);display:flex;align-items:center;justify-content:center;font-size:13px;">Tarjeta 2</div>
        <div style="flex-shrink:0;width:140px;height:100px;border-radius:8px;background:var(--sp-primary-bg,#eff6ff);display:flex;align-items:center;justify-content:center;font-size:13px;">Tarjeta 3</div>
        <div style="flex-shrink:0;width:140px;height:100px;border-radius:8px;background:var(--sp-bg-muted);display:flex;align-items:center;justify-content:center;font-size:13px;">Tarjeta 4</div>
        <div style="flex-shrink:0;width:140px;height:100px;border-radius:8px;background:var(--sp-primary-bg,#eff6ff);display:flex;align-items:center;justify-content:center;font-size:13px;">Tarjeta 5</div>
      </div>
    </sp-scroll-area>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Selector de país con scroll</p>
    <sp-scroll-area max-height="160px" style="border:1px solid var(--sp-border);border-radius:8px;">
      <div style="display:flex;flex-direction:column;">
        <div style="padding:8px 12px;cursor:pointer;font-size:14px;border-bottom:1px solid var(--sp-border);">🇪🇸 España</div>
        <div style="padding:8px 12px;cursor:pointer;font-size:14px;border-bottom:1px solid var(--sp-border);">🇫🇷 Francia</div>
        <div style="padding:8px 12px;cursor:pointer;font-size:14px;border-bottom:1px solid var(--sp-border);">🇩🇪 Alemania</div>
        <div style="padding:8px 12px;cursor:pointer;font-size:14px;border-bottom:1px solid var(--sp-border);">🇮🇹 Italia</div>
        <div style="padding:8px 12px;cursor:pointer;font-size:14px;border-bottom:1px solid var(--sp-border);">🇵🇹 Portugal</div>
        <div style="padding:8px 12px;cursor:pointer;font-size:14px;border-bottom:1px solid var(--sp-border);">🇳🇱 Países Bajos</div>
        <div style="padding:8px 12px;cursor:pointer;font-size:14px;">🇧🇪 Bélgica</div>
      </div>
    </sp-scroll-area>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Chat / feed de mensajes</p>
    <sp-scroll-area max-height="180px" style="border:1px solid var(--sp-border);border-radius:8px;padding:12px;">
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;gap:8px;"><sp-avatar initials="Alice" size="sm"></sp-avatar><div style="background:var(--sp-bg-muted);padding:8px 10px;border-radius:8px;font-size:13px;">Hola equipo! Reunión a las 15:00 🎉</div></div>
        <div style="display:flex;gap:8px;justify-content:flex-end;"><div style="background:var(--sp-primary-bg,#eff6ff);padding:8px 10px;border-radius:8px;font-size:13px;">Perfecto, ahí estaré 👍</div><sp-avatar initials="Tú" size="sm"></sp-avatar></div>
        <div style="display:flex;gap:8px;"><sp-avatar initials="Bob" size="sm"></sp-avatar><div style="background:var(--sp-bg-muted);padding:8px 10px;border-radius:8px;font-size:13px;">¿Alguien puede compartir el orden del día?</div></div>
        <div style="display:flex;gap:8px;"><sp-avatar initials="Alice" size="sm"></sp-avatar><div style="background:var(--sp-bg-muted);padding:8px 10px;border-radius:8px;font-size:13px;">Lo subo al Drive en un momento</div></div>
        <div style="display:flex;gap:8px;justify-content:flex-end;"><div style="background:var(--sp-primary-bg,#eff6ff);padding:8px 10px;border-radius:8px;font-size:13px;">Gracias! 🙌</div><sp-avatar initials="Tú" size="sm"></sp-avatar></div>
      </div>
    </sp-scroll-area>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · Log de sistema</p>
    <sp-scroll-area max-height="140px" style="border:1px solid var(--sp-border);border-radius:8px;padding:10px 14px;background:#0f172a;">
      <div style="font-family:monospace;font-size:12px;line-height:1.8;color:#94a3b8;">
        <div>[2026-04-19 08:00:01] INFO  Server started on port 3000</div>
        <div>[2026-04-19 08:00:02] INFO  Database connected (PostgreSQL 15)</div>
        <div>[2026-04-19 08:01:14] INFO  GET /api/users 200 (42ms)</div>
        <div>[2026-04-19 08:01:15] WARN  Rate limit: 95% usado por IP 192.168.1.10</div>
        <div>[2026-04-19 08:01:20] INFO  POST /api/auth/login 200 (87ms)</div>
        <div>[2026-04-19 08:02:05] ERROR Cannot read property of undefined in /routes/products.js:43</div>
        <div>[2026-04-19 08:02:06] INFO  Reconnecting to cache server…</div>
        <div>[2026-04-19 08:02:07] INFO  Cache server reconnected OK</div>
      </div>
    </sp-scroll-area>
  </div>
</div>`,
    slots: [
      { name: "(default)", desc: "Contenido desplazable" },
    ],
  },

  divider: {
    usage: `<sp-divider></sp-divider>
<sp-divider label="O continúa con"></sp-divider>
<sp-divider variant="dashed"></sp-divider>
<sp-divider orientation="vertical" style="height: 40px"></sp-divider>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:520px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Horizontal</p>
    <sp-divider></sp-divider>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con etiqueta</p>
    <sp-divider label="O continúa con"></sp-divider>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Variantes de línea</p>
    <sp-divider></sp-divider>
    <div style="margin:8px 0;"></div>
    <sp-divider variant="dashed"></sp-divider>
    <div style="margin:8px 0;"></div>
    <sp-divider variant="dotted"></sp-divider>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Vertical (en navegación)</p>
    <div style="display:flex;align-items:center;gap:12px;height:40px;">
      <a href="#" style="font-size:13px;color:var(--sp-text-muted);text-decoration:none;">Inicio</a>
      <sp-divider orientation="vertical" style="height:20px;"></sp-divider>
      <a href="#" style="font-size:13px;color:var(--sp-text-muted);text-decoration:none;">Sobre nosotros</a>
      <sp-divider orientation="vertical" style="height:20px;"></sp-divider>
      <a href="#" style="font-size:13px;color:var(--sp-text-muted);text-decoration:none;">Contacto</a>
      <sp-divider orientation="vertical" style="height:20px;"></sp-divider>
      <a href="#" style="font-size:13px;color:var(--sp-text-muted);text-decoration:none;">Blog</a>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">5 · En formulario</p>
    <div style="display:flex;flex-direction:column;gap:12px;padding:16px;border:1px solid var(--sp-border);border-radius:8px;">
      <sp-input label="Correo electrónico" placeholder="tu@email.com"></sp-input>
      <sp-divider label="datos adicionales"></sp-divider>
      <sp-input label="Empresa" placeholder="Nombre de la empresa"></sp-input>
    </div>
  </div>
</div>`,
  },

  "empty-state": {
    usage: `<sp-empty-state
  title="No hay resultados"
  description="Intenta con otros términos de búsqueda o elimina los filtros activos.">
  <sp-button slot="action" variant="secondary">Limpiar filtros</sp-button>
</sp-empty-state>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Sin resultados de búsqueda</p>
    <sp-empty-state
      title="No hay resultados"
      description="Intenta con otros términos de búsqueda o elimina los filtros activos.">
      <sp-button slot="action" variant="secondary">Limpiar filtros</sp-button>
    </sp-empty-state>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Sin datos (lista vacía)</p>
    <sp-empty-state
      title="No tienes proyectos aún"
      description="Crea tu primer proyecto para comenzar a colaborar con tu equipo y gestionar tareas.">
      <sp-button slot="action" variant="primary">
        <svg slot="prefix" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Crear proyecto
      </sp-button>
    </sp-empty-state>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Error de carga</p>
    <sp-empty-state
      title="No se pudo cargar la información"
      description="Ocurrió un error al conectar con el servidor. Verifica tu conexión e inténtalo de nuevo.">
      <sp-button slot="action" variant="destructive">Reintentar</sp-button>
    </sp-empty-state>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">4 · Acceso restringido</p>
    <sp-empty-state
      title="Acceso denegado"
      description="No tienes permisos para ver este contenido. Contacta a tu administrador.">
      <sp-button slot="action" variant="secondary">Solicitar acceso</sp-button>
    </sp-empty-state>
  </div>
</div>`,
    slots: [
      { name: "(default)", desc: "Ilustración o icono personalizado" },
      { name: "action",    desc: "Botón o acción principal" },
    ],
  },

  icon: {
    usage: `<sp-icon name="home" size="md"></sp-icon>
<sp-icon name="settings" size="lg"></sp-icon>
<sp-icon name="user" size="sm"></sp-icon>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:600px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Tamaños</p>
    <div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <sp-icon name="home" size="xs"></sp-icon>
        <span style="font-size:10px;color:var(--sp-text-muted);">xs</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <sp-icon name="home" size="sm"></sp-icon>
        <span style="font-size:10px;color:var(--sp-text-muted);">sm</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <sp-icon name="home" size="md"></sp-icon>
        <span style="font-size:10px;color:var(--sp-text-muted);">md</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <sp-icon name="home" size="lg"></sp-icon>
        <span style="font-size:10px;color:var(--sp-text-muted);">lg</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <sp-icon name="home" size="xl"></sp-icon>
        <span style="font-size:10px;color:var(--sp-text-muted);">xl</span>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Con color</p>
    <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
      <sp-icon name="check-circle" size="lg" color="var(--sp-success,#22c55e)"></sp-icon>
      <sp-icon name="x-circle"     size="lg" color="var(--sp-error,#ef4444)"></sp-icon>
      <sp-icon name="alert-circle" size="lg" color="var(--sp-warning,#f59e0b)"></sp-icon>
      <sp-icon name="info"         size="lg" color="var(--sp-primary,#6366f1)"></sp-icon>
      <sp-icon name="star"         size="lg" color="#f59e0b"></sp-icon>
      <sp-icon name="heart"        size="lg" color="#ec4899"></sp-icon>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Catálogo de iconos frecuentes</p>
    <div id="demo-icon-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(64px,1fr));gap:12px;"></div>
  </div>
<script>
(function(){
  var icons = ['home','user','settings','search','bell','mail','calendar','file','folder','image','video','music','map-pin','phone','message-circle','heart','star','bookmark','tag','link','edit','trash','copy','download','upload','share','lock','unlock','eye','eye-off','check','x','plus','minus','arrow-up','arrow-down','arrow-left','arrow-right','refresh-cw','loader','shield','zap','sun','moon','grid','list','filter','sort-asc'];
  var grid = document.getElementById('demo-icon-grid');
  if (!grid) return;
  icons.forEach(function(name) {
    var div = document.createElement('div');
    div.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 4px;border:1px solid var(--sp-border,#e5e7eb);border-radius:6px;';
    div.innerHTML = '<sp-icon name="' + name + '" size="md"></sp-icon><span style="font-size:9px;color:var(--sp-text-muted);text-align:center;word-break:break-all;">' + name + '</span>';
    grid.appendChild(div);
  });
})();
</script>
  <div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">4 · En contexto (botones con icono)</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <sp-button variant="primary">
        <sp-icon slot="prefix" name="plus" size="sm"></sp-icon>
        Nuevo
      </sp-button>
      <sp-button variant="secondary">
        <sp-icon slot="prefix" name="download" size="sm"></sp-icon>
        Exportar
      </sp-button>
      <sp-button variant="ghost">
        <sp-icon slot="prefix" name="settings" size="sm"></sp-icon>
        Ajustes
      </sp-button>
      <sp-button variant="destructive">
        <sp-icon slot="prefix" name="trash" size="sm"></sp-icon>
        Eliminar
      </sp-button>
    </div>
  </div>
</div>`,
  },

  kbd: {
    usage: `<p>Presiona <sp-kbd>Ctrl</sp-kbd>+<sp-kbd>K</sp-kbd> para buscar</p>
<p>Guarda con <sp-kbd size="lg">⌘</sp-kbd>+<sp-kbd size="lg">S</sp-kbd></p>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:560px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Atajos comunes</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid var(--sp-border,#e5e7eb);border-radius:6px;font-size:13px;">
        <span style="color:var(--sp-text-secondary);">Buscar en la app</span>
        <div style="display:flex;gap:4px;align-items:center;"><sp-kbd>Ctrl</sp-kbd><span style="color:var(--sp-text-muted);font-size:11px;">+</span><sp-kbd>K</sp-kbd></div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid var(--sp-border,#e5e7eb);border-radius:6px;font-size:13px;">
        <span style="color:var(--sp-text-secondary);">Guardar cambios</span>
        <div style="display:flex;gap:4px;align-items:center;"><sp-kbd>⌘</sp-kbd><span style="color:var(--sp-text-muted);font-size:11px;">+</span><sp-kbd>S</sp-kbd></div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid var(--sp-border,#e5e7eb);border-radius:6px;font-size:13px;">
        <span style="color:var(--sp-text-secondary);">Deshacer</span>
        <div style="display:flex;gap:4px;align-items:center;"><sp-kbd>Ctrl</sp-kbd><span style="color:var(--sp-text-muted);font-size:11px;">+</span><sp-kbd>Z</sp-kbd></div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid var(--sp-border,#e5e7eb);border-radius:6px;font-size:13px;">
        <span style="color:var(--sp-text-secondary);">Seleccionar todo</span>
        <div style="display:flex;gap:4px;align-items:center;"><sp-kbd>Ctrl</sp-kbd><span style="color:var(--sp-text-muted);font-size:11px;">+</span><sp-kbd>A</sp-kbd></div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid var(--sp-border,#e5e7eb);border-radius:6px;font-size:13px;">
        <span style="color:var(--sp-text-secondary);">Paleta de comandos</span>
        <div style="display:flex;gap:4px;align-items:center;"><sp-kbd>⌘</sp-kbd><span style="color:var(--sp-text-muted);font-size:11px;">+</span><sp-kbd>Shift</sp-kbd><span style="color:var(--sp-text-muted);font-size:11px;">+</span><sp-kbd>P</sp-kbd></div>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Tamaños</p>
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <sp-kbd size="sm">Esc</sp-kbd>
        <span style="font-size:10px;color:var(--sp-text-muted);">sm</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <sp-kbd>Enter</sp-kbd>
        <span style="font-size:10px;color:var(--sp-text-muted);">md (default)</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <sp-kbd size="lg">Tab</sp-kbd>
        <span style="font-size:10px;color:var(--sp-text-muted);">lg</span>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · En texto de ayuda</p>
    <p style="font-size:14px;color:var(--sp-text-secondary);line-height:1.7;">
      Usa <sp-kbd>Tab</sp-kbd> para moverte entre campos, <sp-kbd>Space</sp-kbd> para seleccionar
      y <sp-kbd>Esc</sp-kbd> para cancelar. En Mac usa <sp-kbd>⌘</sp-kbd> en lugar de <sp-kbd>Ctrl</sp-kbd>.
    </p>
  </div>
</div>`,
    slots: [
      { name: "(default)", desc: "Nombre de la tecla a mostrar" },
    ],
  },

  // ── Avanzado ──────────────────────────────────────────────────────────────

  "command-palette": {
    usage: `<sp-command-palette id="cmd"></sp-command-palette>
<script>
  const cmd = document.getElementById('cmd');
  // Abrir con Cmd+K
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      cmd.open = true;
    }
  });
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:680px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Paleta de comandos — abre con Ctrl+K / ⌘+K</p>
    <div style="padding:20px;background:var(--sp-bg-subtle);border:1px solid var(--sp-border);border-radius:10px;display:flex;flex-direction:column;gap:12px;">
      <div style="display:flex;gap:8px;align-items:center;">
        <sp-button id="demo-cmd-open" variant="secondary" size="sm">Abrir Command Palette</sp-button>
        <span style="font-size:12px;color:var(--sp-text-muted);">o pulsa <sp-hotkey keys="Ctrl+K"></sp-hotkey></span>
      </div>
      <div id="demo-cmd-out" style="font-size:13px;color:var(--sp-text-muted);">Ejecuta un comando y aparecerá aquí</div>
    </div>
    <sp-command-palette id="demo-cmd" placeholder="Busca un comando o página…"></sp-command-palette>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Estado de carga</p>
    <div style="display:flex;gap:8px;align-items:center;">
      <sp-button id="demo-cmd2-open" variant="secondary" size="sm">Abrir (con carga)</sp-button>
    </div>
    <sp-command-palette id="demo-cmd2" placeholder="Buscando en todo el proyecto…" loading></sp-command-palette>
  </div>
</div>
<script>
(function(){
  var cmd = document.getElementById('demo-cmd');
  var out = document.getElementById('demo-cmd-out');
  cmd.items = [
    { id:'n1',  group:'Navegación', icon:'🏠', label:'Ir al inicio',          description:'Dashboard principal' },
    { id:'n2',  group:'Navegación', icon:'📊', label:'Ver reportes',           description:'Métricas y analíticas' },
    { id:'n3',  group:'Navegación', icon:'👥', label:'Gestión de usuarios',    description:'CRUD de usuarios' },
    { id:'n4',  group:'Navegación', icon:'⚙️', label:'Configuración',          description:'Ajustes del sistema' },
    { id:'a1',  group:'Acciones',   icon:'➕', label:'Nuevo proyecto',          keywords:['crear','add'] },
    { id:'a2',  group:'Acciones',   icon:'📤', label:'Exportar datos',          keywords:['download','csv'] },
    { id:'a3',  group:'Acciones',   icon:'🔍', label:'Búsqueda avanzada',       keywords:['filtrar','find'] },
    { id:'a4',  group:'Acciones',   icon:'🎨', label:'Cambiar tema',            keywords:['dark','light','color'] },
    { id:'t1',  group:'Herramientas',icon:'🔧',label:'Herramientas de depuración',description:'Dev tools' },
    { id:'t2',  group:'Herramientas',icon:'📋',label:'Copiar al portapapeles',  keywords:['copy','paste'] },
    { id:'h1',  group:'Ayuda',      icon:'📖', label:'Documentación',           description:'sp-components docs' },
    { id:'h2',  group:'Ayuda',      icon:'💬', label:'Soporte',                 description:'Contactar al equipo' },
  ];
  cmd.addEventListener('sp-select', function(e){
    out.textContent = '→ Ejecutado: ' + e.detail.item.label;
    out.style.color = 'var(--sp-primary,#6366f1)';
    out.style.fontWeight = '600';
  });
  document.getElementById('demo-cmd-open').addEventListener('click', function(){ cmd.open = true; });
  document.addEventListener('keydown', function(e){
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); cmd.open = true; }
  });

  var cmd2 = document.getElementById('demo-cmd2');
  document.getElementById('demo-cmd2-open').addEventListener('click', function(){ cmd2.open = true; });
})();
</script>`,
    events: [
      { name: "sp-select", detail: "{ command: object }", desc: "Emitido al ejecutar un comando" },
      { name: "sp-close",  detail: "—", desc: "Emitido al cerrar la paleta" },
    ],
  },

  kanban: {
    usage: `<sp-kanban id="kb" addable></sp-kanban>
<script>
  document.getElementById('kb').columns = [
    {
      id: 'todo', title: 'To Do', color: '#9ca3af',
      cards: [
        { id: 'c1', title: 'Design new landing page', description: 'Create wireframes and mockups', priority: 'high', tags: [{ label: 'Design', bg: '#ede9fe', color: '#7c3aed' }] },
        { id: 'c2', title: 'Write unit tests', description: 'Cover all edge cases', priority: 'medium' },
        { id: 'c3', title: 'Update dependencies', priority: 'low' },
      ],
    },
    {
      id: 'in-progress', title: 'In Progress', color: '#3b82f6',
      cards: [
        { id: 'c4', title: 'API integration', description: 'Connect to the backend REST API', priority: 'high', tags: [{ label: 'Backend', bg: '#dbeafe', color: '#1d4ed8' }] },
        { id: 'c5', title: 'Mobile responsiveness', priority: 'medium' },
      ],
    },
    {
      id: 'review', title: 'In Review', color: '#f59e0b',
      cards: [
        { id: 'c6', title: 'Authentication flow', description: 'OAuth + JWT implementation', tags: [{ label: 'Security', bg: '#fef3c7', color: '#92400e' }] },
      ],
    },
    {
      id: 'done', title: 'Done', color: '#22c55e',
      cards: [
        { id: 'c7', title: 'Project setup', priority: 'low' },
        { id: 'c8', title: 'CI/CD pipeline', tags: [{ label: 'DevOps', bg: '#dcfce7', color: '#166534' }] },
      ],
    },
  ];
</script>`,
    demo: `<sp-kanban id="demo-kanban" addable></sp-kanban>
<script>
(function(){
  var kb = document.getElementById('demo-kanban');
  kb.columns = [
    {
      id: 'todo', title: 'To Do', color: '#9ca3af',
      cards: [
        { id: 'c1', title: 'Design new landing page', description: 'Create wireframes and mockups', priority: 'high', tags: [{ label: 'Design', bg: '#ede9fe', color: '#7c3aed' }] },
        { id: 'c2', title: 'Write unit tests', description: 'Cover all edge cases', priority: 'medium' },
        { id: 'c3', title: 'Update dependencies', priority: 'low' },
      ],
    },
    {
      id: 'in-progress', title: 'In Progress', color: '#3b82f6',
      cards: [
        { id: 'c4', title: 'API integration', description: 'Connect to the backend REST API', priority: 'high', tags: [{ label: 'Backend', bg: '#dbeafe', color: '#1d4ed8' }] },
        { id: 'c5', title: 'Mobile responsiveness', priority: 'medium' },
      ],
    },
    {
      id: 'review', title: 'In Review', color: '#f59e0b',
      cards: [
        { id: 'c6', title: 'Authentication flow', description: 'OAuth + JWT implementation', tags: [{ label: 'Security', bg: '#fef3c7', color: '#92400e' }] },
      ],
    },
    {
      id: 'done', title: 'Done', color: '#22c55e',
      cards: [
        { id: 'c7', title: 'Project setup', priority: 'low' },
        { id: 'c8', title: 'CI/CD pipeline', tags: [{ label: 'DevOps', bg: '#dcfce7', color: '#166534' }] },
      ],
    },
  ];
})();
</script>`,
    events: [
      { name: "sp-change",    detail: "{ columns: SpKanbanColumn[] }",                                    desc: "Emitido en cualquier cambio de datos" },
      { name: "sp-card-move", detail: "{ card, fromCol: string, toCol: string, toIndex: number }",        desc: "Emitido al mover una tarjeta" },
      { name: "sp-add-card",  detail: "{ column: SpKanbanColumn }",                                       desc: "Emitido al hacer clic en Añadir tarjeta" },
    ],
  },

  onboarding: {
    usage: `<sp-onboarding id="ob" dismissable finish-label="¡Comenzar!"></sp-onboarding>
<script>
  const ob = document.getElementById('ob');
  ob.steps = [
    { icon: '👋', title: '¡Bienvenido!',        description: 'Gracias por unirte. Te mostramos cómo empezar.' },
    { icon: '⚙️', title: 'Configura tu perfil', description: 'Personaliza tu nombre, avatar y preferencias.' },
    { icon: '🚀', title: 'Estás listo',          description: 'Ya puedes usar todas las funciones de la app.' },
  ];
  ob.open = true;
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:16px;max-width:520px;">
  <div style="padding:20px;border:1px solid var(--sp-border,#e5e7eb);border-radius:10px;background:var(--sp-bg-subtle);">
    <p style="font-size:13px;color:var(--sp-text-secondary);margin:0 0 16px;">El modal de onboarding guía al usuario paso a paso con pasos, iconos y progreso.</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;">
      <sp-button id="demo-ob-btn1" variant="primary">
        <svg slot="prefix" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        Onboarding de usuario (3 pasos)
      </sp-button>
      <sp-button id="demo-ob-btn2" variant="secondary">
        <svg slot="prefix" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
        Onboarding de producto (4 pasos)
      </sp-button>
    </div>
  </div>
  <sp-onboarding id="demo-ob1" dismissable finish-label="¡Empezar ahora!"></sp-onboarding>
  <sp-onboarding id="demo-ob2" dismissable finish-label="¡Explorar!" skip-label="Omitir"></sp-onboarding>
</div>
<script>
(function(){
  var ob1 = document.getElementById('demo-ob1');
  var ob2 = document.getElementById('demo-ob2');
  ob1.steps = [
    { icon: '👋', title: '¡Bienvenido al equipo!', description: 'Estamos muy contentos de tenerte. Este breve tour te ayudará a orientarte.' },
    { icon: '⚙️', title: 'Configura tu perfil',    description: 'Sube tu foto, agrega tu nombre y personaliza tus preferencias de notificación.' },
    { icon: '🚀', title: '¡Listo para empezar!',   description: 'Ya tienes todo lo necesario. ¡Crea tu primer proyecto y colabora con tu equipo!' },
  ];
  ob2.steps = [
    { icon: '🎨', title: 'Diseño moderno',     description: 'Más de 100 componentes web con estilos consistentes y soporte dark mode.' },
    { icon: '⚡', title: 'Alto rendimiento',    description: 'Web Components nativos sin dependencias. Tree-shakeable y optimizados para producción.' },
    { icon: '♿', title: 'Accesible por diseño', description: 'WCAG 2.1 AA: roles ARIA, navegación por teclado y soporte para lectores de pantalla.' },
    { icon: '🌍', title: 'Internacionalizable', description: 'Soporte de i18n con atributos de locale para adaptar textos en cualquier idioma.' },
  ];
  document.getElementById('demo-ob-btn1').addEventListener('click', function(){ ob1.open = true; });
  document.getElementById('demo-ob-btn2').addEventListener('click', function(){ ob2.open = true; });
})();
</script>`,
    events: [
      { name: "sp-step",   detail: "{ step: number }", desc: "Emitido al cambiar de paso" },
      { name: "sp-finish", detail: "—", desc: "Emitido al completar el último paso" },
      { name: "sp-skip",   detail: "—", desc: "Emitido al saltar el onboarding" },
    ],
  },

  tour: {
    usage: `<!-- El tour resalta elementos del DOM existentes -->
<button id="save-btn">Guardar</button>
<nav id="settings">Ajustes</nav>

<sp-tour id="tour"></sp-tour>
<script>
  const tour = document.getElementById('tour');
  tour.steps = [
    { target: '#save-btn', title: 'Guarda tu trabajo', content: 'Haz clic aquí para guardar todos los cambios.', placement: 'bottom' },
    { target: '#settings', title: 'Configuración',     content: 'Aquí puedes personalizar la aplicación.',     placement: 'right' },
  ];
  tour.active = true;
</script>`,
    demo: `<div style="padding:20px;background:var(--sp-bg-subtle,#f8fafc);border-radius:12px;border:1px solid var(--sp-border,#e5e7eb);">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
    <div id="demo-tour-logo" style="display:flex;align-items:center;gap:8px;font-weight:700;font-size:15px;">
      <div style="width:28px;height:28px;background:var(--sp-primary,#6366f1);border-radius:6px;display:flex;align-items:center;justify-content:center;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
      </div>
      Dashboard
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <sp-button id="demo-tour-notif" variant="ghost" size="sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        Alertas
      </sp-button>
      <sp-button id="demo-tour-profile" variant="ghost" size="sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        Perfil
      </sp-button>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
    <div id="demo-tour-stats" style="padding:14px;background:var(--sp-bg,#fff);border:1px solid var(--sp-border,#e5e7eb);border-radius:8px;">
      <div style="font-size:12px;color:var(--sp-text-muted);margin-bottom:4px;">Usuarios activos</div>
      <div style="font-size:22px;font-weight:700;color:var(--sp-primary,#6366f1);">1,284</div>
      <div style="font-size:11px;color:var(--sp-success,#22c55e);">↑ +12.4%</div>
    </div>
    <div id="demo-tour-revenue" style="padding:14px;background:var(--sp-bg,#fff);border:1px solid var(--sp-border,#e5e7eb);border-radius:8px;">
      <div style="font-size:12px;color:var(--sp-text-muted);margin-bottom:4px;">Ingresos del mes</div>
      <div style="font-size:22px;font-weight:700;color:var(--sp-primary,#6366f1);">$42,800</div>
      <div style="font-size:11px;color:var(--sp-success,#22c55e);">↑ +8.1%</div>
    </div>
  </div>
  <div id="demo-tour-actions" style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
    <sp-button variant="primary" size="sm">
      <svg slot="prefix" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      Nuevo proyecto
    </sp-button>
    <sp-button variant="secondary" size="sm">
      <svg slot="prefix" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      Exportar
    </sp-button>
  </div>
  <sp-button id="demo-tour-start-btn" variant="outline" size="sm" style="width:100%;">
    <svg slot="prefix" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
    Iniciar tour guiado del dashboard
  </sp-button>
</div>
<sp-tour id="demo-tour-component"></sp-tour>
<script>
(function(){
  var t = document.getElementById('demo-tour-component');
  t.steps = [
    { target: '#demo-tour-logo',    title: 'Panel principal',    content: 'Este es tu centro de control. Aquí ves el resumen de toda la actividad.', placement: 'bottom' },
    { target: '#demo-tour-stats',   title: 'Estadísticas clave', content: 'Monitorea métricas en tiempo real: usuarios, conversiones y tendencias.', placement: 'bottom' },
    { target: '#demo-tour-revenue', title: 'Ingresos',           content: 'Sigue el rendimiento financiero del mes con comparativas históricas.', placement: 'bottom' },
    { target: '#demo-tour-actions', title: 'Acciones rápidas',   content: 'Crea proyectos, exporta datos o invita a nuevos miembros desde aquí.', placement: 'top' },
    { target: '#demo-tour-notif',   title: 'Notificaciones',     content: 'Recibe alertas de actividad, comentarios y cambios en tiempo real.', placement: 'bottom' },
    { target: '#demo-tour-profile', title: 'Tu perfil',          content: 'Accede a ajustes, preferencias y cierre de sesión desde aquí.', placement: 'bottom-end' },
  ];
  document.getElementById('demo-tour-start-btn').addEventListener('click', function(){ t.active = true; });
})();
</script>`,
    events: [
      { name: "sp-step-change", detail: "{ step: number }", desc: "Emitido al cambiar de paso" },
      { name: "sp-finish",      detail: "—", desc: "Emitido al completar el tour" },
      { name: "sp-skip",        detail: "—", desc: "Emitido al saltar el tour" },
    ],
  },

  transfer: {
    usage: `<sp-transfer id="tr" source-title="Disponibles" target-title="Seleccionados" searchable></sp-transfer>
<script>
  const tr = document.getElementById('tr');
  tr.source = [
    { value: 'read',   label: 'Leer' },
    { value: 'write',  label: 'Escribir' },
    { value: 'delete', label: 'Eliminar' },
    { value: 'admin',  label: 'Administrar' },
    { value: 'export', label: 'Exportar' },
  ];
  tr.value = ['read', 'write']; // Preseleccionados
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:680px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Permisos de usuario</p>
    <sp-transfer id="demo-tr1" source-title="Permisos disponibles" target-title="Permisos asignados" searchable></sp-transfer>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Selección de columnas visibles</p>
    <sp-transfer id="demo-tr2" source-title="Columnas ocultas" target-title="Columnas visibles" searchable></sp-transfer>
  </div>
  <div id="demo-tr-output" style="font-size:12px;color:var(--sp-text-muted);padding:10px 14px;background:var(--sp-bg-subtle);border-radius:6px;border:1px solid var(--sp-border,#e5e7eb);">
    Mueve ítems entre los paneles para ver el evento sp-change →
  </div>
</div>
<script>
(function(){
  var tr1 = document.getElementById('demo-tr1');
  var tr2 = document.getElementById('demo-tr2');
  var out = document.getElementById('demo-tr-output');
  tr1.source = [
    { value: 'read',    label: 'Leer documentos' },
    { value: 'write',   label: 'Crear y editar' },
    { value: 'delete',  label: 'Eliminar registros' },
    { value: 'admin',   label: 'Administrar usuarios' },
    { value: 'export',  label: 'Exportar datos' },
    { value: 'billing', label: 'Gestionar facturación' },
    { value: 'audit',   label: 'Ver registros de auditoría' },
    { value: 'api',     label: 'Acceso a la API' },
  ];
  tr1.value = ['read', 'write'];
  tr2.source = [
    { value: 'name',     label: 'Nombre' },
    { value: 'email',    label: 'Correo electrónico' },
    { value: 'role',     label: 'Rol' },
    { value: 'dept',     label: 'Departamento' },
    { value: 'phone',    label: 'Teléfono' },
    { value: 'location', label: 'Ubicación' },
    { value: 'joined',   label: 'Fecha de ingreso' },
    { value: 'status',   label: 'Estado' },
  ];
  tr2.value = ['name', 'email', 'role'];
  [tr1, tr2].forEach(function(tr) {
    tr.addEventListener('sp-change', function(e) {
      out.textContent = 'sp-change → value: ' + JSON.stringify(e.detail.value);
    });
  });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string[] }", desc: "Emitido al mover ítems entre paneles" },
    ],
  },

  "pdf-viewer": {
    usage: `<sp-pdf-viewer
  src="/documentos/informe.pdf"
  height="700"
  toolbar
  label="Informe anual 2024">
</sp-pdf-viewer>`,
    demo: `<div style="display:flex;flex-direction:column;gap:16px;max-width:700px;">
  <div style="padding:12px 16px;background:var(--sp-bg-subtle);border:1px solid var(--sp-border,#e5e7eb);border-radius:8px;font-size:13px;color:var(--sp-text-secondary);">
    <strong>Demo:</strong> Cargando un PDF público de muestra. El componente usa un iframe nativo con barra de herramientas opcional.
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Con barra de herramientas y descarga</p>
    <sp-pdf-viewer
      src="https://www.w3.org/WAI/WCAG21/Techniques/pdf/sample.pdf"
      height="480"
      toolbar
      label="Documento de muestra WCAG">
    </sp-pdf-viewer>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Visor compacto (sin barra)</p>
    <sp-pdf-viewer
      src="https://www.w3.org/WAI/WCAG21/Techniques/pdf/sample.pdf"
      height="300"
      label="Vista previa compacta">
    </sp-pdf-viewer>
  </div>
</div>`,
    events: [
      { name: "sp-load",  detail: "—", desc: "Emitido cuando el iframe termina de cargar" },
      { name: "sp-error", detail: "—", desc: "Emitido si el PDF no puede cargarse" },
    ],
  },

  "image-crop": {
    usage: `<sp-image-crop
  src="/imagen.jpg"
  aspect-ratio="1"
  format="jpeg"
  quality="0.9"
  label="Foto de perfil"
  id="cropper">
</sp-image-crop>
<script>
  document.getElementById('cropper').addEventListener('sp-crop', (e) => {
    const { dataUrl, width, height } = e.detail;
    document.getElementById('preview').src = dataUrl;
  });
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:680px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Recorte cuadrado (foto de perfil)</p>
    <sp-image-crop
      id="demo-ic1"
      src="https://picsum.photos/seed/crop1/800/600"
      aspect-ratio="1"
      format="png"
      label="Foto de perfil">
    </sp-image-crop>
    <div id="demo-ic1-out" style="margin-top:10px;"></div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Recorte banner (16:9)</p>
    <sp-image-crop
      id="demo-ic2"
      src="https://picsum.photos/seed/crop2/1200/800"
      aspect-ratio="1.777"
      format="jpeg"
      quality="0.9"
      label="Banner de portada">
    </sp-image-crop>
    <div id="demo-ic2-out" style="margin-top:10px;"></div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Libre (sin relación de aspecto)</p>
    <sp-image-crop
      id="demo-ic3"
      src="https://picsum.photos/seed/crop3/900/700"
      format="png"
      label="Recorte libre">
    </sp-image-crop>
    <div id="demo-ic3-out" style="margin-top:10px;"></div>
  </div>
</div>
<script>
(function(){
  function showResult(outId, detail) {
    var out = document.getElementById(outId);
    if (!out) return;
    out.innerHTML = '<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:var(--sp-bg-subtle);border-radius:6px;border:1px solid var(--sp-border,#e5e7eb);">' +
      '<img src="' + detail.dataUrl + '" style="width:48px;height:48px;object-fit:cover;border-radius:4px;border:1px solid var(--sp-border,#e5e7eb);" />' +
      '<span style="font-size:12px;color:var(--sp-text-secondary);">Recorte exportado · ' + detail.width + '×' + detail.height + 'px</span>' +
    '</div>';
  }
  document.getElementById('demo-ic1').addEventListener('sp-crop', function(e){ showResult('demo-ic1-out', e.detail); });
  document.getElementById('demo-ic2').addEventListener('sp-crop', function(e){ showResult('demo-ic2-out', e.detail); });
  document.getElementById('demo-ic3').addEventListener('sp-crop', function(e){ showResult('demo-ic3-out', e.detail); });
})();
</script>`,
    events: [
      { name: "sp-crop",   detail: "{ dataUrl: string, width: number, height: number }", desc: "Emitido al aplicar el recorte" },
      { name: "sp-cancel", detail: "—", desc: "Emitido al cancelar desde la vista de resultado" },
    ],
  },

  // ── Utilidades ────────────────────────────────────────────────────────────

  hotkey: {
    usage: `<!-- Mostrar atajos de teclado en la UI -->
<p>Buscar: <sp-hotkey .keys='["Ctrl", "K"]'></sp-hotkey></p>
<p>Guardar: <sp-hotkey .keys='["⌘", "S"]' size="sm"></sp-hotkey></p>
<p>Paleta:  <sp-hotkey .keys='["⌘", "Shift", "P"]'></sp-hotkey></p>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:580px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Tamaños</p>
    <div style="display:flex;flex-direction:column;gap:10px;font-size:13px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="min-width:60px;color:var(--sp-text-muted);">sm</span>
        <sp-hotkey keys="Ctrl+K" size="sm"></sp-hotkey>
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="min-width:60px;color:var(--sp-text-muted);">md</span>
        <sp-hotkey keys="Ctrl+K" size="md"></sp-hotkey>
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="min-width:60px;color:var(--sp-text-muted);">lg</span>
        <sp-hotkey keys="Ctrl+K" size="lg"></sp-hotkey>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Atajos en tabla de referencia</p>
    <div style="display:flex;flex-direction:column;gap:0;border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;font-size:13px;">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:9px 14px;border-bottom:1px solid var(--sp-border);">
        <span>Abrir paleta de comandos</span><sp-hotkey keys="Ctrl+K"></sp-hotkey>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:9px 14px;border-bottom:1px solid var(--sp-border);">
        <span>Guardar cambios</span><sp-hotkey keys="Ctrl+S"></sp-hotkey>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:9px 14px;border-bottom:1px solid var(--sp-border);">
        <span>Deshacer</span><sp-hotkey keys="Ctrl+Z"></sp-hotkey>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:9px 14px;border-bottom:1px solid var(--sp-border);">
        <span>Buscar en página</span><sp-hotkey keys="Ctrl+F"></sp-hotkey>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:9px 14px;border-bottom:1px solid var(--sp-border);">
        <span>Nuevo archivo</span><sp-hotkey keys="Ctrl+Shift+N"></sp-hotkey>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:9px 14px;">
        <span>Ver shortcuts</span><sp-hotkey keys="?"></sp-hotkey>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · En contexto — barra de acciones</p>
    <div style="display:flex;align-items:center;gap:6px;padding:10px 14px;border:1px solid var(--sp-border);border-radius:8px;background:var(--sp-bg-subtle);flex-wrap:wrap;">
      <sp-button size="sm" variant="secondary">💾 Guardar <sp-hotkey keys="Ctrl+S" size="sm" style="margin-left:6px;opacity:.7;"></sp-hotkey></sp-button>
      <sp-button size="sm" variant="secondary">🔍 Buscar <sp-hotkey keys="Ctrl+F" size="sm" style="margin-left:6px;opacity:.7;"></sp-hotkey></sp-button>
      <sp-button size="sm" variant="primary">⚡ Ejecutar <sp-hotkey keys="Ctrl+Enter" size="sm" style="margin-left:6px;opacity:.9;"></sp-hotkey></sp-button>
    </div>
  </div>
</div>`,
  },

  "visually-hidden": {
    usage: `<!-- Accesible pero invisible para el usuario -->
<sp-visually-hidden>Texto solo para lectores de pantalla</sp-visually-hidden>

<!-- Botón con icono accesible -->
<button aria-label="Cerrar">
  <svg><!-- icono X --></svg>
  <sp-visually-hidden>Cerrar diálogo</sp-visually-hidden>
</button>

<!-- Skip link (visible al recibir foco) -->
<sp-visually-hidden focusable>
  <a href="#main">Saltar al contenido principal</a>
</sp-visually-hidden>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:600px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Etiquetas accesibles en iconos</p>
    <div style="padding:16px;border:1px solid var(--sp-border);border-radius:8px;background:var(--sp-bg-subtle);display:flex;gap:10px;flex-wrap:wrap;">
      <button style="padding:8px 14px;border:1px solid var(--sp-border);border-radius:6px;background:var(--sp-bg);cursor:pointer;display:flex;align-items:center;gap:6px;font-size:13px;font-family:inherit;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
        <sp-visually-hidden>Guardar documento</sp-visually-hidden>
        Guardar
      </button>
      <button style="padding:8px 14px;border:1px solid var(--sp-border);border-radius:6px;background:var(--sp-bg);cursor:pointer;display:flex;align-items:center;gap:6px;font-size:13px;font-family:inherit;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
        <sp-visually-hidden>Eliminar elemento</sp-visually-hidden>
        Eliminar
      </button>
    </div>
    <div style="margin-top:8px;font-size:12px;color:var(--sp-text-muted);">Los lectores de pantalla anunciarán el texto oculto dentro de los botones.</div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Skip link (visible al recibir foco con Tab)</p>
    <div style="padding:16px;border:1px solid var(--sp-border);border-radius:8px;background:var(--sp-bg-subtle);">
      <sp-visually-hidden focusable>
        <a href="#main-content-demo" style="display:block;padding:8px 14px;background:var(--sp-primary,#6366f1);color:#fff;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none;">
          Saltar al contenido principal
        </a>
      </sp-visually-hidden>
      <div style="font-size:13px;color:var(--sp-text-muted);">Pulsa <sp-hotkey keys="Tab" size="sm"></sp-hotkey> para ver el skip link aparecer.</div>
      <div id="main-content-demo" style="margin-top:10px;font-size:13px;padding:8px 12px;border-left:3px solid var(--sp-primary,#6366f1);">Contenido principal de la página</div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Texto descriptivo adicional</p>
    <div style="padding:16px;border:1px solid var(--sp-border);border-radius:8px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;gap:8px;">
        <sp-badge variant="success" count="3"></sp-badge>
        <span style="font-size:14px;font-weight:500;">Mensajes</span>
        <sp-visually-hidden>3 mensajes no leídos</sp-visually-hidden>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <sp-badge variant="error" count="12"></sp-badge>
        <span style="font-size:14px;font-weight:500;">Errores</span>
        <sp-visually-hidden>12 errores detectados en el sistema</sp-visually-hidden>
      </div>
      <div style="font-size:11px;color:var(--sp-text-muted);margin-top:4px;">Los badges numéricos son ambiguos sin contexto. sp-visually-hidden añade el contexto para lectores de pantalla.</div>
    </div>
  </div>
</div>`,
    slots: [
      { name: "(default)", desc: "Contenido visualmente oculto pero accesible" },
    ],
  },

  // ── Nuevos componentes ────────────────────────────────────────────────────

  anchor: {
    usage: `<sp-anchor id="nav"></sp-anchor>
<script>
  document.getElementById('nav').items = [
    { id: 'intro',     title: 'Introducción' },
    { id: 'uso',       title: 'Uso' },
    { id: 'api',       title: 'API' },
    { id: 'ejemplos',  title: 'Ejemplos', children: [
      { id: 'basico',    title: 'Básico' },
      { id: 'avanzado',  title: 'Avanzado' },
    ]},
  ];
</script>`,
    demo: `<div style="display:flex;gap:24px;max-width:680px;">
  <sp-anchor id="demo-anchor" style="width:160px;flex-shrink:0;border-right:1px solid var(--sp-border);padding-right:16px;"></sp-anchor>
  <div style="flex:1;max-height:260px;overflow-y:auto;padding-right:8px;" id="demo-anchor-scroll">
    <h4 id="da-intro" style="margin:0 0 8px;scroll-margin-top:8px;">Introducción</h4>
    <p style="margin:0 0 20px;font-size:14px;color:var(--sp-text-muted)">sp-anchor es un componente de navegación interna que resalta el ítem activo según el scroll de la página o contenedor configurado.</p>
    <h4 id="da-instalacion" style="margin:0 0 8px;scroll-margin-top:8px;">Instalación</h4>
    <p style="margin:0 0 20px;font-size:14px;color:var(--sp-text-muted)">Instala el paquete con npm install sp-component y luego importa el módulo necesario en tu proyecto.</p>
    <h4 id="da-uso" style="margin:0 0 8px;scroll-margin-top:8px;">Uso básico</h4>
    <p style="margin:0 0 20px;font-size:14px;color:var(--sp-text-muted)">Asigna el array de items con los IDs de las secciones y el componente hará el seguimiento automático del scroll.</p>
    <h4 id="da-api" style="margin:0 0 8px;scroll-margin-top:8px;">API</h4>
    <p style="margin:0 0 20px;font-size:14px;color:var(--sp-text-muted)">El componente acepta items, offset y container. El offset es útil cuando hay un navbar fijo que cubre el tope de la pantalla.</p>
    <h4 id="da-avanzado" style="margin:0 0 8px;scroll-margin-top:8px;">Uso avanzado</h4>
    <p style="margin:0 0 4px;font-size:14px;color:var(--sp-text-muted)">Puedes usar items anidados con la propiedad children para crear un TOC jerárquico con sub-secciones.</p>
  </div>
</div>
<script>
(function(){
  var a = document.getElementById('demo-anchor');
  a.container = '#demo-anchor-scroll';
  a.offset = 8;
  a.items = [
    { id: 'da-intro',      title: 'Introducción' },
    { id: 'da-instalacion',title: 'Instalación' },
    { id: 'da-uso',        title: 'Uso básico' },
    { id: 'da-api',        title: 'API', children: [
      { id: 'da-avanzado', title: 'Avanzado' },
    ]},
  ];
})();
</script>`,
    events: [
      { name: "sp-click", detail: "{ id: string }", desc: "Emitido al hacer clic en una ancla" },
    ],
  },

  "back-top": {
    usage: `<sp-back-top></sp-back-top>
<sp-back-top position="bottom-left" visibility-height="200"></sp-back-top>`,
    demo: `<div style="max-width:480px;">
  <div id="demo-backtop-scroll" style="height:220px;overflow-y:auto;border:1px solid var(--sp-border);border-radius:8px;padding:16px;position:relative;background:var(--sp-bg-subtle);">
    <p style="margin:0 0 12px;font-size:14px;"><strong>Desplázate hacia abajo</strong> para ver el botón aparecer ↓</p>
    <p style="font-size:13px;color:var(--sp-text-muted);margin:0 0 60px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p style="font-size:13px;color:var(--sp-text-muted);margin:0 0 60px;">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p style="font-size:13px;color:var(--sp-text-muted);margin:0 0 60px;">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p style="font-size:13px;color:var(--sp-text-muted);margin:0;">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <sp-back-top id="demo-bt" visibility-height="80" position="bottom-right" style="position:absolute;"></sp-back-top>
  </div>
  <p style="font-size:12px;color:var(--sp-text-muted);margin:8px 0 0;">El botón aparece al hacer scroll de 80px o más</p>
</div>
<script>
(function(){
  var bt = document.getElementById('demo-bt');
  var scroll = document.getElementById('demo-backtop-scroll');
  scroll.addEventListener('scroll', function() {
    bt.style.opacity = scroll.scrollTop >= 80 ? '1' : '0';
    bt.style.pointerEvents = scroll.scrollTop >= 80 ? 'auto' : 'none';
  });
  bt.addEventListener('click', function(){ scroll.scrollTo({ top: 0, behavior: 'smooth' }); });
  bt.style.opacity = '0';
  bt.style.transition = 'opacity .2s';
  bt.style.pointerEvents = 'none';
})();
</script>`,
    events: [
      { name: "sp-click", detail: "—", desc: "Emitido al hacer clic en el botón" },
    ],
    slots: [
      { name: "(default)", desc: "Icono personalizado (por defecto una flecha hacia arriba)" },
    ],
  },

  menubar: {
    usage: `<sp-menubar id="mb"></sp-menubar>
<script>
  document.getElementById('mb').menus = [
    { label: 'Archivo', items: [
      { label: 'Nuevo', kbd: 'Ctrl+N', onClick: () => console.log('Nuevo') },
      { label: 'Abrir', kbd: 'Ctrl+O' },
      { separator: true },
      { label: 'Guardar', kbd: 'Ctrl+S' },
    ]},
    { label: 'Editar', items: [
      { label: 'Deshacer', kbd: 'Ctrl+Z' },
      { label: 'Rehacer', kbd: 'Ctrl+Y' },
    ]},
  ];
</script>`,
    demo: `<div style="max-width:700px;">
  <sp-menubar id="demo-mb"></sp-menubar>
  <div style="padding:20px;border:1px solid var(--sp-border);border-top:none;border-radius:0 0 8px 8px;background:var(--sp-bg-subtle);font-size:13px;color:var(--sp-text-muted);" id="demo-mb-output">
    Selecciona una opción del menú…
  </div>
</div>
<script>
(function(){
  var mb = document.getElementById('demo-mb');
  var out = document.getElementById('demo-mb-output');
  mb.menus = [
    { label: 'Archivo', items: [
      { label: 'Nuevo archivo',  kbd: 'Ctrl+N', icon: '📄', onClick: function(){ out.textContent = '→ Nuevo archivo'; } },
      { label: 'Abrir…',        kbd: 'Ctrl+O', icon: '📂', onClick: function(){ out.textContent = '→ Abrir archivo'; } },
      { separator: true },
      { label: 'Guardar',       kbd: 'Ctrl+S', icon: '💾', onClick: function(){ out.textContent = '→ Guardado'; } },
      { label: 'Guardar como…', kbd: 'Ctrl+Shift+S', onClick: function(){ out.textContent = '→ Guardar como…'; } },
      { separator: true },
      { label: 'Exportar PDF',  icon: '📑', onClick: function(){ out.textContent = '→ Exportando PDF…'; } },
      { separator: true },
      { label: 'Salir', danger: true, onClick: function(){ out.textContent = '→ Cerrando…'; } },
    ]},
    { label: 'Editar', items: [
      { label: 'Deshacer', kbd: 'Ctrl+Z', onClick: function(){ out.textContent = '→ Deshacer'; } },
      { label: 'Rehacer',  kbd: 'Ctrl+Y', onClick: function(){ out.textContent = '→ Rehacer'; } },
      { separator: true },
      { label: 'Cortar',   kbd: 'Ctrl+X', onClick: function(){ out.textContent = '→ Cortar'; } },
      { label: 'Copiar',   kbd: 'Ctrl+C', onClick: function(){ out.textContent = '→ Copiar'; } },
      { label: 'Pegar',    kbd: 'Ctrl+V', onClick: function(){ out.textContent = '→ Pegar'; } },
    ]},
    { label: 'Ver', items: [
      { label: 'Zoom +',    kbd: 'Ctrl++', onClick: function(){ out.textContent = '→ Zoom +'; } },
      { label: 'Zoom -',    kbd: 'Ctrl+-', onClick: function(){ out.textContent = '→ Zoom -'; } },
      { label: 'Pantalla completa', kbd: 'F11', onClick: function(){ out.textContent = '→ Pantalla completa'; } },
    ]},
    { label: 'Ayuda', items: [
      { label: 'Documentación', onClick: function(){ out.textContent = '→ Abriendo docs…'; } },
      { label: 'Acerca de…',   onClick: function(){ out.textContent = '→ SP Components v1.0'; } },
    ]},
  ];
})();
</script>`,
    events: [
      { name: "sp-select", detail: "{ item: SpMenubarItem }", desc: "Emitido al seleccionar un ítem del menú" },
    ],
  },

  cascader: {
    usage: `<sp-cascader placeholder="País / Estado / Ciudad" id="cs"></sp-cascader>
<script>
  document.getElementById('cs').options = [
    { value: 'es', label: 'España', children: [
      { value: 'mad', label: 'Madrid' },
      { value: 'bcn', label: 'Barcelona' },
    ]},
    { value: 'mx', label: 'México', children: [
      { value: 'cdmx', label: 'Ciudad de México' },
      { value: 'gdl',  label: 'Guadalajara' },
    ]},
  ];
  document.getElementById('cs').addEventListener('sp-change', e => console.log(e.detail));
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:16px;max-width:420px;">
  <sp-cascader id="demo-cs" placeholder="Selecciona región" clearable style="display:block"></sp-cascader>
  <sp-cascader id="demo-cs2" placeholder="Categoría de producto" clearable style="display:block"></sp-cascader>
  <div id="demo-cs-out" style="font-size:13px;color:var(--sp-text-muted);padding:8px 12px;background:var(--sp-bg-subtle);border-radius:6px;border:1px solid var(--sp-border);">Selección: —</div>
</div>
<script>
(function(){
  var cs = document.getElementById('demo-cs');
  cs.options = [
    { value: 'eu', label: 'Europa', children: [
      { value: 'es', label: 'España', children: [
        { value: 'mad', label: 'Madrid' },
        { value: 'bcn', label: 'Barcelona' },
        { value: 'vlc', label: 'Valencia' },
      ]},
      { value: 'fr', label: 'Francia', children: [
        { value: 'par', label: 'París' },
        { value: 'lyo', label: 'Lyon' },
      ]},
    ]},
    { value: 'am', label: 'América', children: [
      { value: 'mx', label: 'México', children: [
        { value: 'cdmx', label: 'Ciudad de México' },
        { value: 'gdl',  label: 'Guadalajara' },
      ]},
      { value: 'co', label: 'Colombia', children: [
        { value: 'bog', label: 'Bogotá' },
        { value: 'med', label: 'Medellín' },
      ]},
    ]},
  ];

  var cs2 = document.getElementById('demo-cs2');
  cs2.options = [
    { value: 'tech', label: 'Tecnología', children: [
      { value: 'phones', label: 'Teléfonos', children: [
        { value: 'android', label: 'Android' },
        { value: 'ios',     label: 'iOS' },
      ]},
      { value: 'laptops', label: 'Portátiles' },
    ]},
    { value: 'ropa', label: 'Ropa', children: [
      { value: 'hombre', label: 'Hombre' },
      { value: 'mujer',  label: 'Mujer' },
    ]},
  ];

  var out = document.getElementById('demo-cs-out');
  [cs, cs2].forEach(function(el){
    el.addEventListener('sp-change', function(e){
      out.textContent = 'Selección: ' + e.detail.labels.join(' / ');
    });
    el.addEventListener('sp-clear', function(){
      out.textContent = 'Selección: —';
    });
  });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string[]; labels: string[] }", desc: "Al seleccionar una opción hoja" },
      { name: "sp-clear",  detail: "—", desc: "Al limpiar la selección" },
    ],
  },

  "date-range-picker": {
    usage: `<sp-date-range-picker placeholder="Selecciona un rango"></sp-date-range-picker>
<sp-date-range-picker start="2025-01-01" end="2025-01-31"></sp-date-range-picker>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:500px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Rango libre (con evento)</p>
    <sp-date-range-picker id="demo-drp1" placeholder="Selecciona un período" clearable style="display:block;"></sp-date-range-picker>
    <div id="demo-drp-out1" style="font-size:12px;color:var(--sp-text-muted);margin-top:8px;padding:8px 12px;background:var(--sp-bg-subtle);border-radius:6px;border:1px solid var(--sp-border);">Rango: —</div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con valor inicial y rango restringido</p>
    <sp-date-range-picker id="demo-drp2" start="2025-04-01" end="2025-04-30" min="2025-01-01" max="2025-12-31" style="display:block;"></sp-date-range-picker>
    <p style="font-size:11px;color:var(--sp-text-muted);margin:6px 0 0;">Restringido: solo año 2025</p>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Con hint y error</p>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <sp-date-range-picker placeholder="Período de vacaciones" hint="El rango máximo es de 30 días." style="display:block;"></sp-date-range-picker>
      <sp-date-range-picker placeholder="Período del informe" error="Debes seleccionar un rango válido." style="display:block;"></sp-date-range-picker>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">4 · Deshabilitado</p>
    <sp-date-range-picker start="2025-01-01" end="2025-01-31" disabled style="display:block;"></sp-date-range-picker>
  </div>
</div>
<script>
(function(){
  var drp1 = document.getElementById('demo-drp1');
  var out1 = document.getElementById('demo-drp-out1');
  drp1.addEventListener('sp-change', function(e){
    out1.textContent = 'Rango: ' + e.detail.start + ' → ' + e.detail.end;
    out1.style.color = 'var(--sp-text)';
  });
  drp1.addEventListener('sp-clear', function(){
    out1.textContent = 'Rango: —';
    out1.style.color = 'var(--sp-text-muted)';
  });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ start: string; end: string }", desc: "Al confirmar la selección del rango" },
      { name: "sp-clear",  detail: "—", desc: "Al limpiar el rango" },
    ],
  },

  "date-time-picker": {
    usage: `<sp-date-time-picker placeholder="Fecha y hora"></sp-date-time-picker>
<sp-date-time-picker seconds></sp-date-time-picker>`,
    demo: `<div style="display:flex;flex-direction:column;gap:16px;max-width:420px;">
  <sp-date-time-picker id="demo-dtp" placeholder="Fecha de inicio" style="display:block"></sp-date-time-picker>
  <sp-date-time-picker id="demo-dtp2" placeholder="Fecha de fin (con segundos)" seconds style="display:block"></sp-date-time-picker>
  <div id="demo-dtp-out" style="font-size:13px;color:var(--sp-text-muted);padding:10px 14px;background:var(--sp-bg-subtle);border-radius:6px;border:1px solid var(--sp-border);">
    Valor: —
  </div>
</div>
<script>
(function(){
  var out = document.getElementById('demo-dtp-out');
  document.getElementById('demo-dtp').addEventListener('sp-change', function(e){
    out.textContent = 'Inicio: ' + e.detail.value;
    out.style.color = 'var(--sp-text)';
  });
  document.getElementById('demo-dtp2').addEventListener('sp-change', function(e){
    out.textContent = 'Fin: ' + e.detail.value;
    out.style.color = 'var(--sp-text)';
  });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string; date: string; time: string }", desc: "Al confirmar la fecha y hora" },
    ],
  },

  "masked-input": {
    usage: `<sp-masked-input mask="(999) 999-9999" placeholder="Teléfono"></sp-masked-input>
<sp-masked-input mask="99/99/9999" placeholder="DD/MM/YYYY" show-mask></sp-masked-input>
<sp-masked-input mask="9999 9999 9999 9999" placeholder="Número de tarjeta"></sp-masked-input>`,
    demo: `<div style="display:flex;flex-direction:column;gap:14px;max-width:380px;">
  <sp-masked-input id="demo-mi1" mask="(999) 999-9999" placeholder="Teléfono" style="display:block"></sp-masked-input>
  <sp-masked-input id="demo-mi2" mask="99/99/9999" placeholder="DD/MM/YYYY" show-mask style="display:block"></sp-masked-input>
  <sp-masked-input id="demo-mi3" mask="9999 9999 9999 9999" placeholder="Número de tarjeta" style="display:block"></sp-masked-input>
  <sp-masked-input id="demo-mi4" mask="aa99-9999" placeholder="Código postal (ej: AB12-3456)" style="display:block"></sp-masked-input>
  <div id="demo-mi-out" style="font-size:12px;color:var(--sp-text-muted);padding:8px 12px;background:var(--sp-bg-subtle);border-radius:6px;border:1px solid var(--sp-border);">
    Valor sin máscara: —
  </div>
</div>
<script>
(function(){
  var out = document.getElementById('demo-mi-out');
  ['demo-mi1','demo-mi2','demo-mi3','demo-mi4'].forEach(function(id){
    document.getElementById(id).addEventListener('sp-input', function(e){
      out.textContent = 'Valor sin máscara: "' + e.detail.value + '" → con máscara: "' + e.detail.masked + '"';
    });
  });
})();
</script>`,
    events: [
      { name: "sp-input",  detail: "{ value: string; masked: string }", desc: "En cada cambio de valor" },
      { name: "sp-change", detail: "{ value: string; masked: string }", desc: "Al perder foco" },
    ],
  },

  "month-picker": {
    usage: `<sp-month-picker placeholder="Seleccionar mes"></sp-month-picker>
<sp-month-picker value="2025-06" min="2025-01" max="2025-12"></sp-month-picker>`,
    demo: `<div style="display:flex;flex-direction:column;gap:14px;max-width:380px;">
  <sp-month-picker id="demo-mp" placeholder="Mes de facturación" style="display:block"></sp-month-picker>
  <sp-month-picker id="demo-mp2" placeholder="Período (solo 2025)" min="2025-01" max="2025-12" style="display:block"></sp-month-picker>
  <div id="demo-mp-out" style="font-size:13px;color:var(--sp-text-muted);padding:10px 14px;background:var(--sp-bg-subtle);border-radius:6px;border:1px solid var(--sp-border);">
    Mes seleccionado: —
  </div>
</div>
<script>
(function(){
  var out = document.getElementById('demo-mp-out');
  var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  function handle(e) {
    out.textContent = months[e.detail.month] + ' ' + e.detail.year + '  (' + e.detail.value + ')';
    out.style.color = 'var(--sp-text)';
  }
  document.getElementById('demo-mp').addEventListener('sp-change', handle);
  document.getElementById('demo-mp2').addEventListener('sp-change', handle);
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string; year: number; month: number }", desc: "Al seleccionar un mes" },
    ],
  },

  "password-input": {
    usage: `<sp-password-input placeholder="Contraseña"></sp-password-input>
<sp-password-input placeholder="Nueva contraseña" show-strength></sp-password-input>`,
    demo: `<div style="display:flex;flex-direction:column;gap:14px;max-width:380px;">
  <sp-password-input id="demo-pw1" placeholder="Contraseña actual" style="display:block"></sp-password-input>
  <sp-password-input id="demo-pw2" placeholder="Nueva contraseña" show-strength style="display:block"></sp-password-input>
  <sp-password-input id="demo-pw3" placeholder="Confirmar contraseña" show-strength style="display:block"></sp-password-input>
  <div id="demo-pw-out" style="font-size:13px;padding:10px 14px;background:var(--sp-bg-subtle);border-radius:6px;border:1px solid var(--sp-border);color:var(--sp-text-muted);">
    Escribe en "Nueva contraseña" para ver la fortaleza
  </div>
</div>
<script>
(function(){
  var labels = ['', 'Muy débil', 'Débil', 'Buena', 'Fuerte'];
  var colors = ['', '#ef4444', '#f97316', '#eab308', '#22c55e'];
  var out = document.getElementById('demo-pw-out');
  document.getElementById('demo-pw2').addEventListener('sp-input', function(e){
    var s = e.detail.strength;
    out.textContent = s ? 'Fortaleza: ' + labels[s] : 'Escribe en "Nueva contraseña" para ver la fortaleza';
    out.style.color = s ? colors[s] : 'var(--sp-text-muted)';
    out.style.fontWeight = s ? '600' : '400';
  });
})();
</script>`,
    events: [
      { name: "sp-input",  detail: "{ value: string; strength: number }", desc: "En cada pulsación de tecla" },
      { name: "sp-change", detail: "{ value: string; strength: number }", desc: "Al perder foco" },
    ],
  },

  "search-input": {
    usage: `<sp-search-input placeholder="Buscar componentes..."></sp-search-input>
<sp-search-input placeholder="Buscar..." debounce="500" clearable></sp-search-input>`,
    demo: `<div style="display:flex;flex-direction:column;gap:14px;max-width:420px;">
  <sp-search-input id="demo-si" placeholder="Buscar componente..." debounce="300" clearable style="display:block"></sp-search-input>
  <div id="demo-si-results" style="display:flex;flex-direction:column;gap:6px;max-height:180px;overflow-y:auto;"></div>
</div>
<script>
(function(){
  var items = ['Button','Copy Button','Input','Textarea','Select','Combobox','Checkbox','Switch','Radio','Slider','Rating','Number Input','OTP Input','Tag Input','Autocomplete','File Upload','Table','Accordion','Card','Badge','Avatar','Modal','Drawer','Tooltip','Popover','Toast','Calendar','Gallery','Carousel','Command Palette','Kanban'];
  var si = document.getElementById('demo-si');
  var results = document.getElementById('demo-si-results');
  function render(q) {
    var filtered = q ? items.filter(function(i){ return i.toLowerCase().includes(q.toLowerCase()); }) : items;
    results.innerHTML = filtered.slice(0,8).map(function(item){
      var hl = q ? item.replace(new RegExp('('+q.replace(/[.*+?^$\{}()|[\]\\]/g,'\\$&')+')','gi'),'<mark style="background:#fef08a;border-radius:2px;padding:0 1px">$1</mark>') : item;
      return '<div style="padding:8px 12px;border:1px solid var(--sp-border);border-radius:6px;font-size:13px;background:var(--sp-bg);">' + hl + '</div>';
    }).join('') || '<div style="padding:8px 12px;font-size:13px;color:var(--sp-text-muted);">Sin resultados para "' + q + '"</div>';
  }
  render('');
  si.addEventListener('sp-search', function(e){ render(e.detail.value); });
  si.addEventListener('sp-clear', function(){ render(''); });
})();
</script>`,
    events: [
      { name: "sp-search", detail: "{ value: string }", desc: "Emitido tras el debounce al escribir" },
      { name: "sp-input",  detail: "{ value: string }", desc: "En cada tecla (sin debounce)" },
      { name: "sp-clear",  detail: "—", desc: "Al limpiar el campo" },
    ],
  },

  "tree-select": {
    usage: `<sp-tree-select placeholder="Seleccionar categoría" id="ts"></sp-tree-select>
<script>
  document.getElementById('ts').options = [
    { value: 'frontend', label: 'Frontend', children: [
      { value: 'react',  label: 'React' },
      { value: 'vue',    label: 'Vue' },
    ]},
    { value: 'backend', label: 'Backend', children: [
      { value: 'node',   label: 'Node.js' },
    ]},
  ];
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:14px;max-width:380px;">
  <sp-tree-select id="demo-ts" placeholder="Categoría (single)" searchable style="display:block"></sp-tree-select>
  <sp-tree-select id="demo-ts2" placeholder="Permisos (múltiple)" multiple searchable style="display:block"></sp-tree-select>
  <div id="demo-ts-out" style="font-size:13px;color:var(--sp-text-muted);padding:10px 14px;background:var(--sp-bg-subtle);border-radius:6px;border:1px solid var(--sp-border);">
    Selección: —
  </div>
</div>
<script>
(function(){
  var tree = [
    { value: 'ui', label: 'UI / Frontend', children: [
      { value: 'react',  label: 'React' },
      { value: 'vue',    label: 'Vue' },
      { value: 'svelte', label: 'Svelte' },
    ]},
    { value: 'backend', label: 'Backend', children: [
      { value: 'node',   label: 'Node.js' },
      { value: 'python', label: 'Python' },
      { value: 'go',     label: 'Go' },
    ]},
    { value: 'db', label: 'Base de datos', children: [
      { value: 'pg',     label: 'PostgreSQL' },
      { value: 'mongo',  label: 'MongoDB' },
    ]},
  ];
  var perms = [
    { value: 'admin', label: 'Administración', children: [
      { value: 'users', label: 'Gestionar usuarios' },
      { value: 'roles', label: 'Gestionar roles' },
    ]},
    { value: 'content', label: 'Contenido', children: [
      { value: 'read',   label: 'Leer' },
      { value: 'write',  label: 'Escribir' },
      { value: 'delete', label: 'Eliminar' },
    ]},
  ];
  var ts = document.getElementById('demo-ts');
  var ts2 = document.getElementById('demo-ts2');
  var out = document.getElementById('demo-ts-out');
  ts.options = tree;
  ts2.options = perms;
  function handle(e) {
    var v = e.detail.value;
    out.textContent = 'Selección: ' + (Array.isArray(v) ? v.join(', ') : v);
    out.style.color = 'var(--sp-text)';
  }
  ts.addEventListener('sp-change', handle);
  ts2.addEventListener('sp-change', handle);
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string | string[] }", desc: "Al seleccionar una opción" },
    ],
  },

  fab: {
    usage: `<!-- Simple FAB -->
<sp-fab icon="+" label="Crear nuevo"></sp-fab>

<!-- Speed dial con acciones -->
<sp-fab icon="☰" id="fab-speed"></sp-fab>
<script>
  document.getElementById('fab-speed').actions = [
    { icon: '✏️', label: 'Editar',    onClick: () => alert('Editar') },
    { icon: '📤', label: 'Compartir', onClick: () => alert('Compartir') },
    { icon: '🗑️', label: 'Eliminar',  onClick: () => alert('Eliminar') },
  ];
</script>`,
    demo: `<div style="position:relative;height:220px;border:1px solid var(--sp-border);border-radius:10px;background:var(--sp-bg-subtle);overflow:hidden;display:flex;align-items:center;justify-content:center;">
  <p style="font-size:13px;color:var(--sp-text-muted);text-align:center;margin:0;">
    FAB simple (abajo a la derecha)<br>y Speed Dial (abajo a la izquierda)
  </p>
  <sp-fab id="demo-fab1" icon="✏️" label="Crear" position="bottom-right" size="md" style="position:absolute;"></sp-fab>
  <sp-fab id="demo-fab2" icon="+" position="bottom-left" size="md" style="position:absolute;"></sp-fab>
  <div id="demo-fab-out" style="position:absolute;top:12px;left:50%;transform:translateX(-50%);font-size:12px;color:var(--sp-primary);font-weight:600;white-space:nowrap;"></div>
</div>
<script>
(function(){
  var out = document.getElementById('demo-fab-out');
  document.getElementById('demo-fab1').addEventListener('sp-click', function(){
    out.textContent = '→ Botón principal pulsado';
    setTimeout(function(){ out.textContent = ''; }, 2000);
  });
  var fab2 = document.getElementById('demo-fab2');
  fab2.actions = [
    { icon: '📄', label: 'Nuevo doc',   onClick: function(){ out.textContent = '→ Nuevo documento'; setTimeout(function(){ out.textContent=''; },2000); } },
    { icon: '🖼️', label: 'Subir imagen',onClick: function(){ out.textContent = '→ Subir imagen';    setTimeout(function(){ out.textContent=''; },2000); } },
    { icon: '📎', label: 'Adjuntar',    onClick: function(){ out.textContent = '→ Adjuntar archivo';setTimeout(function(){ out.textContent=''; },2000); } },
  ];
})();
</script>`,
    events: [
      { name: "sp-click", detail: "—", desc: "Al hacer clic en el botón principal (sin actions)" },
    ],
  },

  toolbar: {
    usage: `<sp-toolbar label="Formato de texto">
  <button>B</button>
  <button><i>I</i></button>
  <button><u>U</u></button>
  <sp-toolbar-sep></sp-toolbar-sep>
  <button>Alinear</button>
  <button>Link</button>
</sp-toolbar>`,
    demo: `<div style="display:flex;flex-direction:column;gap:16px;max-width:600px;">
  <sp-toolbar id="demo-tb1" label="Formato de texto">
    <button id="tb-b" style="font-weight:700;min-width:32px;padding:4px 8px;border:1px solid var(--sp-border);border-radius:4px;background:var(--sp-bg);cursor:pointer;font-family:inherit;" title="Negrita">B</button>
    <button style="font-style:italic;min-width:32px;padding:4px 8px;border:1px solid var(--sp-border);border-radius:4px;background:var(--sp-bg);cursor:pointer;font-family:inherit;" title="Cursiva">I</button>
    <button style="text-decoration:underline;min-width:32px;padding:4px 8px;border:1px solid var(--sp-border);border-radius:4px;background:var(--sp-bg);cursor:pointer;font-family:inherit;" title="Subrayado">U</button>
    <button style="text-decoration:line-through;min-width:32px;padding:4px 8px;border:1px solid var(--sp-border);border-radius:4px;background:var(--sp-bg);cursor:pointer;font-family:inherit;" title="Tachado">S</button>
    <sp-toolbar-sep></sp-toolbar-sep>
    <button style="min-width:32px;padding:4px 8px;border:1px solid var(--sp-border);border-radius:4px;background:var(--sp-bg);cursor:pointer;font-size:12px;" title="Alinear izquierda">≡</button>
    <button style="min-width:32px;padding:4px 8px;border:1px solid var(--sp-border);border-radius:4px;background:var(--sp-bg);cursor:pointer;font-size:12px;" title="Centrar">≡</button>
    <sp-toolbar-sep></sp-toolbar-sep>
    <button style="min-width:32px;padding:4px 8px;border:1px solid var(--sp-border);border-radius:4px;background:var(--sp-bg);cursor:pointer;font-size:11px;" title="Insertar link">🔗</button>
    <button style="min-width:32px;padding:4px 8px;border:1px solid var(--sp-border);border-radius:4px;background:var(--sp-bg);cursor:pointer;font-size:11px;" title="Insertar imagen">🖼</button>
  </sp-toolbar>
  <div id="demo-tb-editor" contenteditable style="border:1px solid var(--sp-border);border-radius:6px;padding:14px;min-height:80px;font-size:14px;background:var(--sp-bg);outline:none;" spellcheck="false">
    Edita este texto usando la toolbar de arriba.
  </div>
  <sp-toolbar label="Acciones de documento" orientation="horizontal">
    <button style="padding:4px 10px;border:1px solid var(--sp-border);border-radius:4px;background:var(--sp-bg);cursor:pointer;font-size:12px;font-family:inherit;">💾 Guardar</button>
    <button style="padding:4px 10px;border:1px solid var(--sp-border);border-radius:4px;background:var(--sp-bg);cursor:pointer;font-size:12px;font-family:inherit;">📤 Exportar</button>
    <sp-toolbar-sep></sp-toolbar-sep>
    <button style="padding:4px 10px;border:1px solid var(--sp-border);border-radius:4px;background:var(--sp-bg);cursor:pointer;font-size:12px;font-family:inherit;">↩ Deshacer</button>
    <button style="padding:4px 10px;border:1px solid var(--sp-border);border-radius:4px;background:var(--sp-bg);cursor:pointer;font-size:12px;font-family:inherit;">↪ Rehacer</button>
  </sp-toolbar>
</div>
<script>
(function(){
  var editor = document.getElementById('demo-tb-editor');
  document.getElementById('tb-b').addEventListener('click', function(){ document.execCommand('bold'); editor.focus(); });
})();
</script>`,
    slots: [
      { name: "(default)", desc: "Botones, separadores (sp-toolbar-sep) y cualquier elemento de acción" },
    ],
  },

  "floating-panel": {
    usage: `<sp-floating-panel title="Panel de herramientas" x="50" y="80">
  <p>Contenido del panel flotante</p>
  <sp-button size="sm">Acción</sp-button>
</sp-floating-panel>`,
    demo: `<div style="position:relative;height:280px;border:1px solid var(--sp-border);border-radius:10px;background:var(--sp-bg-subtle);overflow:hidden;">
  <p style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:13px;color:var(--sp-text-muted);text-align:center;margin:0;pointer-events:none;">
    Arrastra el panel por la barra de título
  </p>
  <sp-floating-panel id="demo-fp" title="Panel flotante" x="20" y="20" width="240" height="160" closable resizable style="position:absolute;z-index:10;">
    <div style="font-size:13px;display:flex;flex-direction:column;gap:8px;padding:4px 0;">
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="color:var(--sp-text-muted)">Estado:</span>
        <span style="color:#22c55e;font-weight:600;">Activo</span>
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="color:var(--sp-text-muted)">Versión:</span>
        <span>1.4.2</span>
      </div>
      <sp-button size="sm" variant="primary" style="margin-top:4px;">Ejecutar</sp-button>
    </div>
  </sp-floating-panel>
  <sp-floating-panel title="Notas" x="280" y="40" width="200" height="140" closable style="position:absolute;z-index:10;">
    <div style="font-size:12px;color:var(--sp-text-muted);line-height:1.6;">
      Este panel es draggable y resizable. Puedes arrastrarlo y cambiar su tamaño desde la esquina inferior derecha.
    </div>
  </sp-floating-panel>
</div>`,
    events: [
      { name: "sp-close", detail: "—", desc: "Al cerrar el panel" },
      { name: "sp-move",  detail: "{ x: number; y: number }", desc: "Al mover el panel" },
    ],
    slots: [
      { name: "(default)", desc: "Contenido del panel" },
    ],
  },

  "hover-card": {
    usage: `<sp-hover-card>
  <a href="#">@usuario</a>
  <div slot="content">
    <strong>Nombre de Usuario</strong>
    <p>Descripción breve del perfil.</p>
  </div>
</sp-hover-card>`,
    demo: `<div style="display:flex;gap:32px;flex-wrap:wrap;padding:40px 20px;justify-content:center;align-items:center;">
  <sp-hover-card placement="bottom">
    <a href="#" style="font-size:14px;color:var(--sp-primary);text-decoration:underline;font-weight:500;">@ana.garcia</a>
    <div slot="content" style="width:220px;padding:4px;">
      <div style="display:flex;gap:10px;align-items:center;margin-bottom:10px;">
        <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:16px;">A</div>
        <div>
          <div style="font-weight:700;font-size:14px;">Ana García</div>
          <div style="font-size:12px;color:var(--sp-text-muted);">@ana.garcia</div>
        </div>
      </div>
      <div style="font-size:12px;color:var(--sp-text-muted);margin-bottom:8px;">Frontend Engineer · Madrid 🇪🇸</div>
      <div style="display:flex;gap:16px;font-size:12px;">
        <span><strong>142</strong> <span style="color:var(--sp-text-muted)">siguiendo</span></span>
        <span><strong>2.4k</strong> <span style="color:var(--sp-text-muted)">seguidores</span></span>
      </div>
    </div>
  </sp-hover-card>

  <sp-hover-card placement="top">
    <a href="#" style="font-size:14px;color:var(--sp-primary);text-decoration:underline;font-weight:500;">sp-button</a>
    <div slot="content" style="width:240px;padding:4px;">
      <div style="font-weight:700;font-size:13px;margin-bottom:6px;display:flex;align-items:center;gap:6px;">
        <code style="background:var(--sp-bg-muted);padding:2px 6px;border-radius:4px;font-size:11px;">&lt;sp-button&gt;</code>
        <sp-badge variant="success" size="sm">v1.0</sp-badge>
      </div>
      <div style="font-size:12px;color:var(--sp-text-muted);margin-bottom:8px;">Botón con variantes, tamaños, estados, iconos y soporte de enlace.</div>
      <sp-button size="sm" variant="primary">Ver docs</sp-button>
    </div>
  </sp-hover-card>

  <sp-hover-card placement="right">
    <img src="https://picsum.photos/seed/avatar1/48/48" style="border-radius:50%;cursor:pointer;width:44px;height:44px;" alt="Carlos" />
    <div slot="content" style="width:200px;padding:4px;">
      <div style="font-weight:700;font-size:14px;">Carlos Ruiz</div>
      <div style="font-size:12px;color:var(--sp-text-muted);margin:4px 0 8px;">Diseñador UX · Barcelona</div>
      <sp-button size="sm" variant="secondary" style="width:100%;">Ver perfil</sp-button>
    </div>
  </sp-hover-card>
</div>`,
    slots: [
      { name: "(default)", desc: "Elemento que dispara el hover" },
      { name: "content",   desc: "Contenido de la card flotante" },
    ],
  },

  banner: {
    usage: `<sp-banner variant="info" title="Mantenimiento programado" message="El sistema estará inactivo el domingo de 02:00 a 04:00."></sp-banner>
<sp-banner variant="success" title="¡Cuenta verificada!" dismissable></sp-banner>
<sp-banner variant="warning" message="Actualiza tu contraseña antes del 30 de enero." sticky></sp-banner>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:700px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · Variantes de color con dismiss</p>
    <div id="demo-banners-v1" style="display:flex;flex-direction:column;gap:8px;">
      <sp-banner variant="info" title="Mantenimiento programado" message="El sistema estará inactivo el domingo de 02:00 a 04:00 UTC." dismissable></sp-banner>
      <sp-banner variant="success" title="¡Actualización completada!" message="La versión 2.5.0 se ha instalado correctamente." dismissable></sp-banner>
      <sp-banner variant="warning" title="Contraseña por vencer" message="Tu contraseña expira en 7 días." dismissable></sp-banner>
      <sp-banner variant="error" title="Error de pago" message="No pudimos procesar tu tarjeta terminada en 4242." dismissable></sp-banner>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Con acciones y CTA</p>
    <div id="demo-banners-v2" style="display:flex;flex-direction:column;gap:8px;">
      <sp-banner variant="warning" title="Actualiza tu plan" message="Tu plan gratuito vence en 3 días. Actualiza para continuar sin interrupciones.">
        <a slot="actions" href="#" style="font-size:13px;font-weight:600;color:inherit;white-space:nowrap;">Actualizar ahora →</a>
      </sp-banner>
      <sp-banner variant="info" title="Nueva funcionalidad disponible" message="Ya puedes exportar reportes en formato PDF desde el panel de control.">
        <a slot="actions" href="#" style="font-size:13px;font-weight:600;color:inherit;white-space:nowrap;">Ver más →</a>
      </sp-banner>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">3 · Banner sticky (sin dismiss, siempre visible)</p>
    <sp-banner variant="warning" title="Modo de mantenimiento activo" message="Solo los administradores pueden acceder. Los usuarios verán una página de espera." sticky></sp-banner>
  </div>
</div>
<script>
(function(){
  document.querySelectorAll('#demo-banners-v1 sp-banner, #demo-banners-v2 sp-banner').forEach(function(b){
    b.addEventListener('sp-dismiss', function(){ b.style.display='none'; });
  });
})();
</script>`,
    events: [
      { name: "sp-dismiss", detail: "—", desc: "Al cerrar el banner" },
    ],
    slots: [
      { name: "actions", desc: "Botones de acción (links, CTAs)" },
    ],
  },

  "progress-circle": {
    usage: `<sp-progress-circle value="75"></sp-progress-circle>
<sp-progress-circle value="60" size="120" status="success" show-value label="Completado"></sp-progress-circle>
<sp-progress-circle indeterminate></sp-progress-circle>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:640px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 14px;">1 · Estados y animación</p>
    <div style="display:flex;flex-wrap:wrap;gap:28px;align-items:flex-end;">
      <div style="text-align:center;">
        <sp-progress-circle id="demo-pc-anim" value="0" size="80" show-value></sp-progress-circle>
        <div style="font-size:11px;color:var(--sp-text-muted);margin-top:6px;">Animado</div>
      </div>
      <div style="text-align:center;">
        <sp-progress-circle value="100" size="80" status="success" show-value label="Completado"></sp-progress-circle>
        <div style="font-size:11px;color:var(--sp-text-muted);margin-top:6px;">Success</div>
      </div>
      <div style="text-align:center;">
        <sp-progress-circle value="65" size="80" status="warning" show-value label="Advertencia"></sp-progress-circle>
        <div style="font-size:11px;color:var(--sp-text-muted);margin-top:6px;">Warning</div>
      </div>
      <div style="text-align:center;">
        <sp-progress-circle value="30" size="80" status="error" show-value label="Error"></sp-progress-circle>
        <div style="font-size:11px;color:var(--sp-text-muted);margin-top:6px;">Error</div>
      </div>
      <div style="text-align:center;">
        <sp-progress-circle indeterminate size="80"></sp-progress-circle>
        <div style="font-size:11px;color:var(--sp-text-muted);margin-top:6px;">Indeterminado</div>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 14px;">2 · Tamaños</p>
    <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:flex-end;">
      <div style="text-align:center;"><sp-progress-circle value="60" size="40" show-value></sp-progress-circle><div style="font-size:11px;color:var(--sp-text-muted);margin-top:6px;">40px</div></div>
      <div style="text-align:center;"><sp-progress-circle value="60" size="56" show-value></sp-progress-circle><div style="font-size:11px;color:var(--sp-text-muted);margin-top:6px;">56px</div></div>
      <div style="text-align:center;"><sp-progress-circle value="60" size="80" show-value></sp-progress-circle><div style="font-size:11px;color:var(--sp-text-muted);margin-top:6px;">80px</div></div>
      <div style="text-align:center;"><sp-progress-circle value="60" size="120" show-value></sp-progress-circle><div style="font-size:11px;color:var(--sp-text-muted);margin-top:6px;">120px</div></div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 14px;">3 · En contexto — panel de rendimiento</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;">
      <div style="padding:16px;background:var(--sp-bg,#fff);border:1px solid var(--sp-border);border-radius:10px;display:flex;flex-direction:column;align-items:center;gap:8px;">
        <sp-progress-circle value="87" size="64" status="success" show-value></sp-progress-circle>
        <div style="font-size:12px;font-weight:600;">CPU</div>
        <div style="font-size:11px;color:var(--sp-text-muted);">8 núcleos activos</div>
      </div>
      <div style="padding:16px;background:var(--sp-bg,#fff);border:1px solid var(--sp-border);border-radius:10px;display:flex;flex-direction:column;align-items:center;gap:8px;">
        <sp-progress-circle value="62" size="64" show-value></sp-progress-circle>
        <div style="font-size:12px;font-weight:600;">Memoria</div>
        <div style="font-size:11px;color:var(--sp-text-muted);">9.9 / 16 GB</div>
      </div>
      <div style="padding:16px;background:var(--sp-bg,#fff);border:1px solid var(--sp-border);border-radius:10px;display:flex;flex-direction:column;align-items:center;gap:8px;">
        <sp-progress-circle value="91" size="64" status="warning" show-value></sp-progress-circle>
        <div style="font-size:12px;font-weight:600;">Disco</div>
        <div style="font-size:11px;color:var(--sp-text-muted);">455 / 500 GB</div>
      </div>
      <div style="padding:16px;background:var(--sp-bg,#fff);border:1px solid var(--sp-border);border-radius:10px;display:flex;flex-direction:column;align-items:center;gap:8px;">
        <sp-progress-circle value="34" size="64" status="success" show-value></sp-progress-circle>
        <div style="font-size:12px;font-weight:600;">Red</div>
        <div style="font-size:11px;color:var(--sp-text-muted);">34 Mbps activos</div>
      </div>
    </div>
  </div>
</div>
<script>
(function(){
  var pc = document.getElementById('demo-pc-anim');
  var v = 0;
  setInterval(function(){
    v = (v + 1) % 101;
    pc.value = v;
  }, 60);
})();
</script>`,
  },

  result: {
    usage: `<sp-result status="success" title="¡Pago procesado!" subtitle="Tu pedido ha sido confirmado.">
  <div slot="actions">
    <sp-button variant="primary">Ver pedido</sp-button>
  </div>
</sp-result>

<sp-result status="404" subtitle="La página que buscas no existe.">
  <div slot="actions">
    <sp-button href="/">Volver al inicio</sp-button>
  </div>
</sp-result>`,
    demo: `<div style="max-width:600px;">
  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">
    <sp-button size="sm" variant="secondary" id="demo-res-success">Success</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-res-error">Error</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-res-warning">Warning</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-res-404">404</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-res-403">403</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-res-500">500</sp-button>
  </div>
  <sp-result id="demo-result" status="success" title="¡Pago procesado!" subtitle="Tu transacción fue completada correctamente. Recibirás un email de confirmación.">
    <div slot="actions" style="display:flex;gap:8px;">
      <sp-button variant="primary" size="sm">Ver pedido</sp-button>
      <sp-button variant="secondary" size="sm">Volver al inicio</sp-button>
    </div>
  </sp-result>
</div>
<script>
(function(){
  var configs = {
    success: { status:'success', title:'¡Pago procesado!',       subtitle:'Tu transacción fue completada correctamente.' },
    error:   { status:'error',   title:'Error al procesar',       subtitle:'No se pudo completar la operación. Inténtalo de nuevo.' },
    warning: { status:'warning', title:'Acción requerida',        subtitle:'Debes verificar tu cuenta antes de continuar.' },
    '404':   { status:'404',     title:'',                        subtitle:'La página que buscas no existe o fue eliminada.' },
    '403':   { status:'403',     title:'',                        subtitle:'No tienes permisos para acceder a este recurso.' },
    '500':   { status:'500',     title:'',                        subtitle:'Ocurrió un error inesperado. Contacta al soporte.' },
  };
  var res = document.getElementById('demo-result');
  Object.keys(configs).forEach(function(key){
    document.getElementById('demo-res-' + key).addEventListener('click', function(){
      var c = configs[key];
      res.status = c.status;
      res.title = c.title;
      res.subtitle = c.subtitle;
    });
  });
})();
</script>`,
    slots: [
      { name: "icon",    desc: "Icono personalizado (reemplaza el icono de estado)" },
      { name: "actions", desc: "Botones de acción" },
      { name: "extra",   desc: "Contenido adicional debajo de las acciones" },
    ],
  },

  "chat-bubble": {
    usage: `<!-- Mensaje recibido -->
<sp-chat-bubble
  name="Ana García"
  message="Hola, ¿cómo estás?"
  time="10:30"
></sp-chat-bubble>

<!-- Mensaje enviado -->
<sp-chat-bubble
  message="¡Todo bien! ¿Y tú?"
  time="10:31"
  mine
  status="read"
></sp-chat-bubble>

<!-- Indicador de escritura -->
<sp-chat-bubble name="Ana García" typing></sp-chat-bubble>`,
    demo: `<div style="max-width:420px;padding:16px;background:var(--sp-bg-subtle);border-radius:10px;border:1px solid var(--sp-border);display:flex;flex-direction:column;gap:6px;">
  <div style="font-size:11px;color:var(--sp-text-muted);text-align:center;padding:4px 0 8px;">Hoy 10:28</div>
  <sp-chat-bubble name="Ana García" message="Hola! ¿Pudiste revisar el diseño del nuevo dashboard? 👀" time="10:28" avatar="https://i.pravatar.cc/40?img=5"></sp-chat-bubble>
  <sp-chat-bubble message="¡Sí! Está muy bien. Solo cambiaría el color del sidebar." time="10:29" mine status="read"></sp-chat-bubble>
  <sp-chat-bubble name="Ana García" message="Perfecto, ¿lo puedes hacer tú o quieres que lo haga yo?" time="10:30" avatar="https://i.pravatar.cc/40?img=5"></sp-chat-bubble>
  <sp-chat-bubble message="Lo hago ahora mismo, en 5 min te mando el resultado 👍" time="10:31" mine status="delivered"></sp-chat-bubble>
  <sp-chat-bubble name="Ana García" typing avatar="https://i.pravatar.cc/40?img=5"></sp-chat-bubble>
</div>`,
  },

  descriptions: {
    usage: `<sp-descriptions title="Información del usuario" id="desc"></sp-descriptions>
<script>
  document.getElementById('desc').items = [
    { label: 'Nombre',    value: 'Ana García' },
    { label: 'Email',     value: 'ana@ejemplo.com' },
    { label: 'Rol',       value: 'Administradora' },
    { label: 'Estado',    value: 'Activa' },
    { label: 'Bio',       value: 'Desarrolladora frontend con 8 años de experiencia.', span: 2 },
  ];
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:700px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Perfil de usuario — 2 columnas (default)</p>
    <sp-descriptions id="demo-desc1" title="Perfil de usuario" columns="2" variant="default"></sp-descriptions>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Detalles de pedido — 3 columnas (bordered)</p>
    <sp-descriptions id="demo-desc2" title="Pedido ORD-2025-4821" columns="3" variant="bordered"></sp-descriptions>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Especificaciones técnicas — columna única (striped)</p>
    <sp-descriptions id="demo-desc3" title="Componente sp-table" columns="1" variant="striped"></sp-descriptions>
  </div>
</div>
<script>
(function(){
  var d1 = document.getElementById('demo-desc1');
  d1.items = [
    { label: 'Nombre',    value: 'Ana García Martínez' },
    { label: 'Email',     value: 'ana.garcia@empresa.com' },
    { label: 'Rol',       value: 'Senior Frontend Engineer' },
    { label: 'Equipo',    value: 'Plataforma Web' },
    { label: 'Estado',    value: '🟢 Activa' },
    { label: 'Ubicación', value: 'Madrid, España' },
    { label: 'Biografía', value: 'Desarrolladora frontend con 8 años de experiencia en React, Vue y Web Components.', span: 2 },
  ];

  var d2 = document.getElementById('demo-desc2');
  d2.items = [
    { label: 'Pedido #',    value: 'ORD-2025-4821' },
    { label: 'Fecha',       value: '19 Ene 2025' },
    { label: 'Estado',      value: '📦 En tránsito' },
    { label: 'Producto',    value: 'SP Components Pro License' },
    { label: 'Cantidad',    value: '5 licencias' },
    { label: 'Total',       value: '€ 249,00' },
    { label: 'Dirección',   value: 'Calle Gran Vía 28, Madrid 28013', span: 2 },
    { label: 'Nota',        value: 'Entrega en horario de oficina (9–17h).' },
  ];

  var d3 = document.getElementById('demo-desc3');
  d3.items = [
    { label: 'Tag',            value: '<sp-table>' },
    { label: 'Versión',        value: '2.1.0' },
    { label: 'Categoría',      value: 'Datos' },
    { label: 'Búsqueda',       value: 'searchable (atributo)' },
    { label: 'Selección',      value: 'selectable (atributo)' },
    { label: 'Paginación',     value: 'page-size="N"' },
    { label: 'Renderizado',    value: 'column.render callback' },
    { label: 'Tamaño bundle',  value: '12.4 kB (gzip)' },
  ];
})();
</script>`,
  },

  "diff-viewer": {
    usage: `<sp-diff-viewer id="dv"></sp-diff-viewer>
<script>
  const dv = document.getElementById('dv');
  dv.setAttribute('old-text', 'function hello() {\n  console.log("Hello");\n}');
  dv.setAttribute('new-text', 'function hello(name) {\n  console.log(\`Hello, \${name}!\`);\n}');
</script>`,
    demo: `<div style="max-width:700px;">
  <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
    <sp-button size="sm" variant="secondary" id="demo-dv-js">JavaScript</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-dv-css">CSS</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-dv-split">Modo split</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-dv-unified">Modo unified</sp-button>
  </div>
  <sp-diff-viewer id="demo-dv" filename="app.js"></sp-diff-viewer>
</div>
<script>
(function(){
  var dv = document.getElementById('demo-dv');
  var examples = {
    js: {
      filename: 'app.js',
      old: 'function greet(name) {\n  var msg = "Hello, " + name;\n  console.log(msg);\n  return msg;\n}\n\ngreet("World");',
      new: 'const greet = (name, greeting = "Hello") => {\n  const msg = \`\${greeting}, \${name}!\`;\n  console.log(msg);\n  return msg;\n};\n\ngreet("World");\ngreet("Ana", "Hola");',
    },
    css: {
      filename: 'button.css',
      old: '.btn {\n  padding: 8px 16px;\n  background: blue;\n  color: white;\n  border: none;\n  border-radius: 4px;\n}',
      new: '.btn {\n  padding: 10px 20px;\n  background: var(--color-primary, #6366f1);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity .15s;\n}\n.btn:hover { opacity: .85; }',
    },
  };
  function load(key){
    var ex = examples[key];
    dv.setAttribute('old-text', ex.old);
    dv.setAttribute('new-text', ex.new);
    dv.filename = ex.filename;
  }
  load('js');
  document.getElementById('demo-dv-js').addEventListener('click', function(){ load('js'); });
  document.getElementById('demo-dv-css').addEventListener('click', function(){ load('css'); });
  document.getElementById('demo-dv-split').addEventListener('click', function(){ dv.mode='split'; });
  document.getElementById('demo-dv-unified').addEventListener('click', function(){ dv.mode='unified'; });
})();
</script>`,
  },

  heatmap: {
    usage: `<sp-heatmap id="heat" weeks="26" color="purple" legend></sp-heatmap>
<script>
  const data = [];
  for (let i = 0; i < 180; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    data.push({
      date: d.toISOString().split('T')[0],
      value: Math.floor(Math.random() * 10),
    });
  }
  document.getElementById('heat').data = data;
</script>`,
    demo: `<div style="max-width:700px;">
  <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;align-items:center;">
    <span style="font-size:12px;color:var(--sp-text-muted)">Color:</span>
    <sp-button size="sm" variant="secondary" id="demo-hm-green">Verde</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-hm-blue">Azul</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-hm-purple">Violeta</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-hm-orange">Naranja</sp-button>
  </div>
  <sp-heatmap id="demo-hm" weeks="26" color="green" legend size="md"></sp-heatmap>
  <div id="demo-hm-out" style="font-size:12px;color:var(--sp-text-muted);margin-top:8px;">Haz clic en una celda para ver el detalle</div>
</div>
<script>
(function(){
  var hm = document.getElementById('demo-hm');
  var out = document.getElementById('demo-hm-out');
  var data = [];
  for(var i=0;i<182;i++){
    var d=new Date();
    d.setDate(d.getDate()-i);
    var v = Math.random()<0.3 ? 0 : Math.floor(Math.random()*12)+1;
    data.push({ date: d.toISOString().split('T')[0], value: v });
  }
  hm.data = data;
  hm.addEventListener('sp-click', function(e){
    out.textContent = e.detail.date + ': ' + e.detail.value + ' contribuciones';
    out.style.color = 'var(--sp-text)';
  });
  ['green','blue','purple','orange'].forEach(function(c){
    document.getElementById('demo-hm-'+c).addEventListener('click', function(){ hm.color = c; });
  });
})();
</script>`,
    events: [
      { name: "sp-click", detail: "{ date: string; value: number }", desc: "Al hacer clic en una celda" },
    ],
  },

  "image-compare": {
    usage: `<sp-image-compare
  before="https://picsum.photos/seed/before/600/400"
  after="https://picsum.photos/seed/after/600/400"
  before-label="Antes"
  after-label="Después"
  height="300px"
></sp-image-compare>`,
    demo: `<div style="max-width:660px;">
  <sp-image-compare
    id="demo-ic"
    before="https://picsum.photos/seed/bw1/800/400"
    after="https://picsum.photos/seed/color1/800/400"
    before-label="Original"
    after-label="Editada"
    height="280px"
    initial="40"
  ></sp-image-compare>
  <div id="demo-ic-out" style="font-size:12px;color:var(--sp-text-muted);margin-top:8px;text-align:center;">Arrastra el slider para comparar</div>
</div>
<script>
(function(){
  document.getElementById('demo-ic').addEventListener('sp-change', function(e){
    var pos = Math.round(e.detail.position);
    document.getElementById('demo-ic-out').textContent = 'Slider al ' + pos + '%';
  });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ position: number }", desc: "Al mover el handle" },
    ],
  },

  lightbox: {
    usage: `<button onclick="document.getElementById('lb').open=true">Abrir galería</button>
<sp-lightbox id="lb" show-thumbs></sp-lightbox>
<script>
  document.getElementById('lb').images = [
    { src: 'https://picsum.photos/seed/1/800/600', alt: 'Foto 1', caption: 'Paisaje 1' },
    { src: 'https://picsum.photos/seed/2/800/600', alt: 'Foto 2', caption: 'Paisaje 2' },
    { src: 'https://picsum.photos/seed/3/800/600', alt: 'Foto 3', caption: 'Paisaje 3' },
  ];
</script>`,
    demo: `<div style="max-width:660px;">
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:12px;">
    <img src="https://picsum.photos/seed/lb1/300/200" style="width:100%;aspect-ratio:3/2;object-fit:cover;border-radius:6px;cursor:pointer;transition:opacity .15s;" onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'" onclick="(function(i){ var lb=document.getElementById('demo-lb'); lb.index=i; lb.open=true; })(0)" alt="Foto 1">
    <img src="https://picsum.photos/seed/lb2/300/200" style="width:100%;aspect-ratio:3/2;object-fit:cover;border-radius:6px;cursor:pointer;transition:opacity .15s;" onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'" onclick="(function(i){ var lb=document.getElementById('demo-lb'); lb.index=i; lb.open=true; })(1)" alt="Foto 2">
    <img src="https://picsum.photos/seed/lb3/300/200" style="width:100%;aspect-ratio:3/2;object-fit:cover;border-radius:6px;cursor:pointer;transition:opacity .15s;" onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'" onclick="(function(i){ var lb=document.getElementById('demo-lb'); lb.index=i; lb.open=true; })(2)" alt="Foto 3">
    <img src="https://picsum.photos/seed/lb4/300/200" style="width:100%;aspect-ratio:3/2;object-fit:cover;border-radius:6px;cursor:pointer;transition:opacity .15s;" onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'" onclick="(function(i){ var lb=document.getElementById('demo-lb'); lb.index=i; lb.open=true; })(3)" alt="Foto 4">
  </div>
  <p style="font-size:12px;color:var(--sp-text-muted);margin:0;">Haz clic en una imagen para abrir el lightbox · Navega con ← → · Cierra con Esc</p>
  <sp-lightbox id="demo-lb" show-thumbs></sp-lightbox>
</div>
<script>
(function(){
  var lb = document.getElementById('demo-lb');
  lb.images = [
    { src:'https://picsum.photos/seed/lb1/1200/800', thumb:'https://picsum.photos/seed/lb1/300/200', alt:'Foto 1', caption:'Paisaje de montaña — Seed lb1' },
    { src:'https://picsum.photos/seed/lb2/1200/800', thumb:'https://picsum.photos/seed/lb2/300/200', alt:'Foto 2', caption:'Costa mediterránea — Seed lb2' },
    { src:'https://picsum.photos/seed/lb3/1200/800', thumb:'https://picsum.photos/seed/lb3/300/200', alt:'Foto 3', caption:'Bosque otoñal — Seed lb3' },
    { src:'https://picsum.photos/seed/lb4/1200/800', thumb:'https://picsum.photos/seed/lb4/300/200', alt:'Foto 4', caption:'Ciudad de noche — Seed lb4' },
  ];
})();
</script>`,
    events: [
      { name: "sp-close",  detail: "—", desc: "Al cerrar el lightbox" },
      { name: "sp-change", detail: "{ index: number }", desc: "Al cambiar de imagen" },
    ],
  },

  sparkline: {
    usage: `<sp-sparkline values="[2,5,3,8,6,9,4,7,10,5]"></sp-sparkline>
<sp-sparkline values="[1,4,2,7,5,8,3,9,6,10]" type="bar" color="#22c55e" width="100" height="32"></sp-sparkline>
<sp-sparkline values="[3,6,2,9,5,8,4,10,7,6]" type="area" fill></sp-sparkline>`,
    demo: `<div style="max-width:680px;overflow-x:auto;">
  <table style="border-collapse:collapse;width:100%;font-size:13px;">
    <thead>
      <tr style="border-bottom:2px solid var(--sp-border);">
        <th style="text-align:left;padding:8px 12px;color:var(--sp-text-muted);font-weight:600;">Métrica</th>
        <th style="text-align:right;padding:8px 12px;color:var(--sp-text-muted);font-weight:600;">Valor</th>
        <th style="text-align:right;padding:8px 12px;color:var(--sp-text-muted);font-weight:600;">Tendencia</th>
        <th style="text-align:right;padding:8px 12px;color:var(--sp-text-muted);font-weight:600;">Δ</th>
      </tr>
    </thead>
    <tbody id="demo-sp-tbody"></tbody>
  </table>
</div>
<script>
(function(){
  var rows = [
    { name: 'Usuarios activos',  value: '12.4k', color: '#6366f1', delta: '+8.2%', positive: true,  type: 'line', vals: [40,55,38,70,62,80,75,90,82,95,88,100] },
    { name: 'Ingresos',         value: '€ 48.2k', color: '#22c55e', delta: '+12.5%', positive: true, type: 'area', vals: [20,30,25,40,35,50,55,48,60,70,65,80] },
    { name: 'Tasa de rebote',   value: '34.1%', color: '#ef4444', delta: '-3.4%', positive: true,  type: 'bar',  vals: [50,45,55,40,38,35,42,30,36,32,35,34] },
    { name: 'Conversión',       value: '3.8%',  color: '#f59e0b', delta: '+0.6%', positive: true,  type: 'line', vals: [2,3,2.5,3.5,3,4,3.5,4.2,3.8,4.5,4,4.8] },
    { name: 'Errores',          value: '0.12%', color: '#8b5cf6', delta: '-0.05%', positive: true, type: 'bar',  vals: [3,2,4,1,3,2,1,2,1,0,1,0] },
  ];

  var tbody = document.getElementById('demo-sp-tbody');
  rows.forEach(function(row) {
    var tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid var(--sp-border-subtle)';
    tr.innerHTML = '<td style="padding:10px 12px;font-weight:500;">' + row.name + '</td>'
      + '<td style="padding:10px 12px;text-align:right;font-variant-numeric:tabular-nums;font-weight:600;">' + row.value + '</td>'
      + '<td style="padding:10px 12px;text-align:right;">'
        + '<sp-sparkline values="' + JSON.stringify(row.vals).replace(/"/g,"&quot;") + '" type="' + row.type + '" width="80" height="28" color="' + row.color + '" ' + (row.type==='area'?'fill':'')+' stroke-width="1.5"></sp-sparkline>'
      + '</td>'
      + '<td style="padding:10px 12px;text-align:right;color:' + (row.positive ? '#22c55e' : '#ef4444') + ';font-size:12px;font-weight:600;">' + row.delta + '</td>';
    tbody.appendChild(tr);
  });
})();
</script>`,
  },

  collapsible: {
    usage: `<sp-collapsible>
  <span slot="trigger">Ver detalles técnicos</span>
  <div style="padding: 12px 0;">
    <p>Este componente usa animación de altura con CSS transitions.</p>
  </div>
</sp-collapsible>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:580px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">1 · FAQ — múltiples abiertos simultáneamente</p>
    <div style="display:flex;flex-direction:column;gap:4px;">
      <sp-collapsible>
        <span slot="trigger" style="font-weight:600;font-size:14px;">¿Qué es sp-collapsible?</span>
        <div style="padding:10px 0 12px;font-size:14px;color:var(--sp-text-muted);line-height:1.6;">
          Un primitivo expandible/colapsable con animación de altura. Es más ligero que sp-accordion y permite que varios estén abiertos a la vez.
        </div>
      </sp-collapsible>
      <sp-collapsible open>
        <span slot="trigger" style="font-weight:600;font-size:14px;">¿Cuándo usar Collapsible vs Accordion?</span>
        <div style="padding:10px 0 12px;font-size:14px;color:var(--sp-text-muted);line-height:1.6;">
          Usa <strong>sp-collapsible</strong> para elementos independientes sin exclusión mutua. Usa <strong>sp-accordion</strong> cuando solo uno puede estar abierto a la vez.
        </div>
      </sp-collapsible>
      <sp-collapsible>
        <span slot="trigger" style="font-weight:600;font-size:14px;">¿Tiene soporte de teclado?</span>
        <div style="padding:10px 0 12px;font-size:14px;color:var(--sp-text-muted);line-height:1.6;">
          Sí. El trigger es un botón nativo accesible con Enter y Espacio para toggle. El estado se anuncia con aria-expanded.
        </div>
      </sp-collapsible>
      <sp-collapsible disabled>
        <span slot="trigger" style="font-weight:600;font-size:14px;color:var(--sp-text-muted);">Sección deshabilitada</span>
        <div style="padding:10px 0;">Este contenido no se puede expandir.</div>
      </sp-collapsible>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 10px;">2 · Configuración — secciones de ajustes</p>
    <div style="display:flex;flex-direction:column;gap:2px;">
      <sp-collapsible open>
        <span slot="trigger" style="font-weight:600;font-size:14px;display:flex;align-items:center;gap:8px;">
          <span>🎨</span> Apariencia
        </span>
        <div style="padding:10px 0 12px;display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;align-items:center;justify-content:space-between;font-size:13px;">
            <span>Tema oscuro</span><sp-toggle checked></sp-toggle>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;font-size:13px;">
            <span>Animaciones reducidas</span><sp-toggle></sp-toggle>
          </div>
        </div>
      </sp-collapsible>
      <sp-collapsible>
        <span slot="trigger" style="font-weight:600;font-size:14px;display:flex;align-items:center;gap:8px;">
          <span>🔔</span> Notificaciones
        </span>
        <div style="padding:10px 0 12px;display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;align-items:center;justify-content:space-between;font-size:13px;">
            <span>Email</span><sp-toggle checked></sp-toggle>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;font-size:13px;">
            <span>Push</span><sp-toggle></sp-toggle>
          </div>
        </div>
      </sp-collapsible>
      <sp-collapsible>
        <span slot="trigger" style="font-weight:600;font-size:14px;display:flex;align-items:center;gap:8px;">
          <span>🔒</span> Privacidad
        </span>
        <div style="padding:10px 0 12px;font-size:13px;color:var(--sp-text-muted);">
          Configura quién puede ver tu perfil y actividad.
        </div>
      </sp-collapsible>
    </div>
  </div>
</div>`,
    events: [
      { name: "sp-open",  detail: "—", desc: "Al expandirse" },
      { name: "sp-close", detail: "—", desc: "Al colapsarse" },
    ],
    slots: [
      { name: "trigger",    desc: "Contenido del botón de toggle" },
      { name: "(default)",  desc: "Contenido expandible" },
    ],
  },

  "credit-card": {
    usage: `<sp-credit-card
  number="4242 4242 4242 4242"
  holder="ANA GARCÍA"
  expiry="12/27"
  theme="blue"
  interactive
></sp-credit-card>`,
    demo: `<div style="display:flex;flex-direction:column;gap:20px;max-width:480px;">
  <div style="display:flex;gap:10px;flex-wrap:wrap;">
    <sp-button size="sm" variant="secondary" id="demo-cc-purple">Violeta</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-cc-dark">Oscuro</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-cc-blue">Azul</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-cc-green">Verde</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-cc-gold">Dorado</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-cc-rose">Rosa</sp-button>
  </div>
  <sp-credit-card id="demo-cc" number="4242 4242 4242 4242" holder="ANA GARCÍA" expiry="12/27" cvv="123" theme="purple" interactive masked size="md"></sp-credit-card>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <sp-input id="demo-cc-num" label="Número de tarjeta" placeholder="0000 0000 0000 0000" maxlength="19" style="display:block"></sp-input>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <sp-input id="demo-cc-holder" label="Titular" placeholder="NOMBRE APELLIDO" style="display:block"></sp-input>
      <sp-input id="demo-cc-expiry" label="Vencimiento" placeholder="MM/YY" maxlength="5" style="display:block"></sp-input>
    </div>
  </div>
</div>
<script>
(function(){
  var cc = document.getElementById('demo-cc');
  ['purple','dark','blue','green','gold','rose'].forEach(function(t){
    document.getElementById('demo-cc-'+t).addEventListener('click', function(){ cc.theme = t; });
  });
  document.getElementById('demo-cc-num').addEventListener('sp-input', function(e){
    var v = e.detail.value.replace(/\D/g,'').replace(/(.{4})/g,'$1 ').trim();
    cc.number = v;
  });
  document.getElementById('demo-cc-holder').addEventListener('sp-input', function(e){
    cc.holder = e.detail.value.toUpperCase() || 'NOMBRE APELLIDO';
  });
  document.getElementById('demo-cc-expiry').addEventListener('sp-input', function(e){
    cc.expiry = e.detail.value || 'MM/YY';
  });
})();
</script>`,
    events: [
      { name: "sp-flip", detail: "{ flipped: boolean }", desc: "Al voltear la tarjeta" },
    ],
  },

  "aspect-ratio": {
    usage: `<sp-aspect-ratio ratio="16/9">
  <img src="https://picsum.photos/800/450" alt="Imagen" style="width:100%;height:100%;object-fit:cover;">
</sp-aspect-ratio>

<sp-aspect-ratio ratio="1/1" style="max-width:200px">
  <img src="https://picsum.photos/200/200" alt="Avatar" style="width:100%;height:100%;object-fit:cover;border-radius:50%">
</sp-aspect-ratio>`,
    demo: `<div style="display:flex;flex-direction:column;gap:16px;max-width:660px;">
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;align-items:start;">
    <div style="text-align:center;">
      <sp-aspect-ratio ratio="16/9">
        <img src="https://picsum.photos/seed/ar1/400/225" style="width:100%;height:100%;object-fit:cover;border-radius:6px;" alt="16:9">
      </sp-aspect-ratio>
      <div style="font-size:11px;color:var(--sp-text-muted);margin-top:4px;">16:9</div>
    </div>
    <div style="text-align:center;">
      <sp-aspect-ratio ratio="4/3">
        <img src="https://picsum.photos/seed/ar2/400/300" style="width:100%;height:100%;object-fit:cover;border-radius:6px;" alt="4:3">
      </sp-aspect-ratio>
      <div style="font-size:11px;color:var(--sp-text-muted);margin-top:4px;">4:3</div>
    </div>
    <div style="text-align:center;">
      <sp-aspect-ratio ratio="1/1">
        <img src="https://picsum.photos/seed/ar3/300/300" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" alt="1:1">
      </sp-aspect-ratio>
      <div style="font-size:11px;color:var(--sp-text-muted);margin-top:4px;">1:1 (avatar)</div>
    </div>
    <div style="text-align:center;">
      <sp-aspect-ratio ratio="9/16">
        <img src="https://picsum.photos/seed/ar4/270/480" style="width:100%;height:100%;object-fit:cover;border-radius:6px;" alt="9:16">
      </sp-aspect-ratio>
      <div style="font-size:11px;color:var(--sp-text-muted);margin-top:4px;">9:16 (stories)</div>
    </div>
  </div>
  <sp-aspect-ratio ratio="21/9">
    <img src="https://picsum.photos/seed/ar5/840/360" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" alt="Panorámica 21:9">
  </sp-aspect-ratio>
  <div style="font-size:11px;color:var(--sp-text-muted);text-align:center;">21:9 — Panorámica ultrawide</div>
</div>`,
    slots: [
      { name: "(default)", desc: "Contenido: img, video, iframe u otro elemento" },
    ],
  },

  layout: {
    usage: `<!-- sp-stack: flex column/row -->
<sp-stack gap="16px">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</sp-stack>

<sp-stack direction="row" gap="12px" align="center">
  <sp-button size="sm">Cancelar</sp-button>
  <sp-button variant="primary" size="sm">Guardar</sp-button>
</sp-stack>`,
    demo: `<div style="display:flex;flex-direction:column;gap:24px;max-width:680px;">
  <div>
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--sp-text-muted);margin-bottom:8px;">sp-stack (column)</div>
    <sp-stack gap="8px">
      <div style="padding:10px 14px;background:var(--sp-primary-bg);border:1px solid var(--sp-border);border-radius:6px;font-size:13px;">Elemento 1</div>
      <div style="padding:10px 14px;background:var(--sp-primary-bg);border:1px solid var(--sp-border);border-radius:6px;font-size:13px;">Elemento 2</div>
      <div style="padding:10px 14px;background:var(--sp-primary-bg);border:1px solid var(--sp-border);border-radius:6px;font-size:13px;">Elemento 3</div>
    </sp-stack>
  </div>
  <div>
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--sp-text-muted);margin-bottom:8px;">sp-stack (row, align center)</div>
    <sp-stack direction="row" gap="10px" align="center">
      <sp-avatar name="Ana García" size="md"></sp-avatar>
      <sp-stack gap="2px">
        <div style="font-weight:600;font-size:14px;">Ana García</div>
        <div style="font-size:12px;color:var(--sp-text-muted);">Frontend Engineer</div>
      </sp-stack>
      <sp-badge variant="success" style="margin-left:auto;">Activa</sp-badge>
    </sp-stack>
  </div>
  <div>
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--sp-text-muted);margin-bottom:8px;">sp-stack (row, justify between)</div>
    <sp-stack direction="row" gap="8px" justify="between" align="center" style="padding:12px;border:1px solid var(--sp-border);border-radius:8px;">
      <span style="font-size:14px;font-weight:500;">Total del pedido</span>
      <sp-stack direction="row" gap="8px" align="center">
        <sp-button size="sm" variant="secondary">Cancelar</sp-button>
        <sp-button size="sm" variant="primary">Pagar € 49,00</sp-button>
      </sp-stack>
    </sp-stack>
  </div>
</div>`,
    slots: [
      { name: "(default)", desc: "Elementos hijos del contenedor" },
    ],
  },

  markdown: {
    usage: `<sp-markdown content="# Título\n\nPárrafo con **negrita** y *cursiva*.\n\n- Elemento 1\n- Elemento 2\n\n\`\`\`js\nconsole.log('Hola');\n\`\`\`"></sp-markdown>`,
    demo: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:700px;">
  <div style="border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;">
    <div style="padding:8px 12px;background:var(--sp-bg-subtle);border-bottom:1px solid var(--sp-border);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--sp-text-muted);">Editor Markdown</div>
    <textarea id="demo-md-input" style="width:100%;border:none;outline:none;padding:14px;font-family:monospace;font-size:12px;resize:none;height:240px;background:var(--sp-bg);color:var(--sp-text);box-sizing:border-box;" spellcheck="false"># Hola, sp-markdown!

Párrafo con **negrita**, *cursiva* y ~~tachado~~.

## Lista de características

- Sin dependencias externas
- Soporte de tablas
- Bloques de código

## Código

\`\`\`js
const x = 42;
console.log(\`Respuesta: \${x}\`);
\`\`\`

| Prop    | Tipo   | Default |
|---------|--------|---------|
| content | string | —       |
</textarea>
  </div>
  <div style="border:1px solid var(--sp-border);border-radius:8px;overflow:hidden;">
    <div style="padding:8px 12px;background:var(--sp-bg-subtle);border-bottom:1px solid var(--sp-border);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--sp-text-muted);">Vista previa</div>
    <div style="padding:14px;overflow-y:auto;height:240px;font-size:14px;">
      <sp-markdown id="demo-md"></sp-markdown>
    </div>
  </div>
</div>
<script>
(function(){
  var md = document.getElementById('demo-md');
  var input = document.getElementById('demo-md-input');
  function update(){ md.content = input.value; }
  update();
  input.addEventListener('input', update);
})();
</script>`,
    slots: [
      { name: "(default)", desc: "Texto Markdown alternativo al atributo content" },
    ],
  },

  watermark: {
    usage: `<sp-watermark text="BORRADOR" opacity="0.12" rotate="-20">
  <div style="padding:40px;background:#fff;min-height:200px;">
    <h3>Documento confidencial</h3>
    <p>Este contenido tiene una marca de agua superpuesta.</p>
  </div>
</sp-watermark>`,
    demo: `<div style="display:flex;flex-direction:column;gap:16px;max-width:660px;">
  <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;">
    <sp-button size="sm" variant="secondary" id="demo-wm-conf">CONFIDENCIAL</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-wm-borr">BORRADOR</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-wm-rev">EN REVISIÓN</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-wm-arch">ARCHIVADO</sp-button>
    <label style="font-size:12px;color:var(--sp-text-muted);display:flex;align-items:center;gap:6px;margin-left:8px;">
      Opacidad: <input type="range" id="demo-wm-op" min="5" max="40" value="15" style="width:80px;">
    </label>
  </div>
  <sp-watermark id="demo-wm" text="CONFIDENCIAL" opacity="0.15" rotate="-22" color="#000">
    <div style="background:var(--sp-bg);border:1px solid var(--sp-border);border-radius:8px;padding:28px 32px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;">
        <div>
          <h3 style="margin:0 0 4px;font-size:18px;">Informe Financiero Q4 2024</h3>
          <div style="font-size:12px;color:var(--sp-text-muted);">Generado el 19 de enero de 2025</div>
        </div>
        <sp-badge variant="warning">Confidencial</sp-badge>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px;">
        <sp-stat label="Ingresos" value="€ 2.4M" trend="up" trend-value="+18%" ></sp-stat>
        <sp-stat label="Gastos"   value="€ 1.1M" trend="down" trend-value="-5%"></sp-stat>
        <sp-stat label="EBITDA"   value="€ 1.3M" trend="up"   trend-value="+32%"></sp-stat>
      </div>
      <p style="font-size:13px;color:var(--sp-text-muted);margin:0;">Este documento contiene información financiera confidencial. Su distribución está restringida al equipo directivo.</p>
    </div>
  </sp-watermark>
</div>
<script>
(function(){
  var wm = document.getElementById('demo-wm');
  var labels = { conf: 'CONFIDENCIAL', borr: 'BORRADOR', rev: 'EN REVISIÓN', arch: 'ARCHIVADO' };
  Object.keys(labels).forEach(function(k){
    document.getElementById('demo-wm-'+k).addEventListener('click', function(){ wm.text = labels[k]; });
  });
  document.getElementById('demo-wm-op').addEventListener('input', function(e){
    wm.opacity = parseFloat(e.target.value) / 100;
  });
})();
</script>`,
    slots: [
      { name: "(default)", desc: "Contenido sobre el que se aplica la marca de agua" },
    ],
  },

  "audio-player": {
    usage: `<sp-audio-player
  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  title="SoundHelix Song 1"
  artist="SoundHelix"
></sp-audio-player>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:540px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Playlist (con portada, artista y control de velocidad)</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <sp-audio-player
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        title="SoundHelix Song 1"
        artist="SoundHelix — Electronic"
        cover="https://picsum.photos/seed/audio1/80/80"
        show-speed
      ></sp-audio-player>
      <sp-audio-player
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        title="SoundHelix Song 2"
        artist="SoundHelix — Ambient"
        cover="https://picsum.photos/seed/audio2/80/80"
        show-speed
      ></sp-audio-player>
      <sp-audio-player
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        title="SoundHelix Song 3"
        artist="SoundHelix — Pop"
        cover="https://picsum.photos/seed/audio3/80/80"
      ></sp-audio-player>
    </div>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Sin portada (solo controles)</p>
    <sp-audio-player
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
      title="Podcast — Episodio 42"
      artist="SP Podcast"
    ></sp-audio-player>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">3 · Deshabilitado</p>
    <sp-audio-player
      title="Pista no disponible"
      artist="Contenido bloqueado"
      disabled
    ></sp-audio-player>
  </div>
</div>`,
  },

  "video-player": {
    usage: `<sp-video-player
  src="https://www.w3schools.com/html/mov_bbb.mp4"
  poster="https://picsum.photos/seed/video/640/360"
></sp-video-player>`,
    demo: `<div style="display:flex;flex-direction:column;gap:28px;max-width:620px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">1 · Reproductor completo (con poster, velocidad y pantalla completa)</p>
    <sp-video-player
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      poster="https://picsum.photos/seed/videoposter/640/360"
      show-speed
      controls
    ></sp-video-player>
    <p style="font-size:12px;color:var(--sp-text-muted);margin-top:8px;">Controles: play/pausa · seek · volumen · velocidad (0.5×–2×) · pantalla completa</p>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 12px;">2 · Autoplay (silenciado) + loop</p>
    <sp-video-player
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      poster="https://picsum.photos/seed/videoposter2/640/360"
      autoplay
      muted
      loop
      controls
    ></sp-video-player>
    <p style="font-size:12px;color:var(--sp-text-muted);margin-top:8px;">autoplay + muted + loop — ideal para fondos de video o demos de producto</p>
  </div>
</div>`,
  },

  "code-block": {
    usage: `<sp-code-block language="js" filename="ejemplo.js" id="cb"></sp-code-block>
<script>
  document.getElementById('cb').code = \`const saludo = (nombre) => {
  return \\\`Hola, \\\${nombre}!\\\`;
};
console.log(saludo('Mundo'));\`;
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:12px;max-width:680px;">
  <div style="display:flex;gap:8px;flex-wrap:wrap;">
    <sp-button size="sm" variant="secondary" id="demo-cb-js">JavaScript</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-cb-html">HTML</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-cb-css">CSS</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-cb-py">Python</sp-button>
  </div>
  <sp-code-block id="demo-cb" language="js" filename="app.js" line-numbers copyable></sp-code-block>
</div>
<script>
(function(){
  var cb = document.getElementById('demo-cb');
  var examples = {
    js: { lang: 'js', file: 'app.js', code: 'import { createApp } from "vue";\nimimport SpComponents from "sp-components";\n\nconst app = createApp({\n  data() {\n    return {\n      count: 0,\n      variant: "primary",\n      disabled: false,\n    };\n  },\n  methods: {\n    increment() {\n      this.count++;\n    },\n  },\n});\n\napp.use(SpComponents);\napp.mount("#app");' },
    html: { lang: 'html', file: 'index.html', code: '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>SP Components</title>\n  <script type="module"\n    src="https://unpkg.com/sp-component">\n  </scr' + 'ipt>\n</head>\n<body>\n  <sp-button variant="primary">Guardar</sp-button>\n  <sp-input label="Nombre" placeholder="Tu nombre"></sp-input>\n  <sp-badge variant="success">Activo</sp-badge>\n</body>\n</html>' },
    css: { lang: 'css', file: 'theme.css', code: ':root {\n  --sp-primary: #6366f1;\n  --sp-primary-bg: #eef2ff;\n  --sp-border: #e5e7eb;\n  --sp-border-subtle: #f3f4f6;\n  --sp-bg: #ffffff;\n  --sp-bg-subtle: #f9fafb;\n  --sp-text: #111827;\n  --sp-text-muted: #6b7280;\n  --sp-radius-sm: 4px;\n  --sp-radius-md: 8px;\n  --sp-radius-lg: 12px;\n}' },
    py: { lang: 'python', file: 'server.py', code: 'from fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\nfrom typing import Optional\n\napp = FastAPI(title="SP API")\n\nclass User(BaseModel):\n    name: str\n    email: str\n    role: Optional[str] = "viewer"\n\n@app.get("/users/{user_id}")\nasync def get_user(user_id: int):\n    return {"id": user_id, "name": "Ana García"}\n\n@app.post("/users")\nasync def create_user(user: User):\n    return {"id": 42, **user.dict()}' },
  };
  function load(k) {
    var ex = examples[k];
    cb.code = ex.code;
    cb.language = ex.lang;
    cb.filename = ex.file;
  }
  load('js');
  Object.keys(examples).forEach(function(k){
    document.getElementById('demo-cb-'+k).addEventListener('click', function(){ load(k); });
  });
})();
</script>`,
  },

  "code-editor": {
    usage: `<sp-code-editor language="html" filename="index.html" id="ce"></sp-code-editor>
<script>
  const ce = document.getElementById('ce');
  ce.value = '<h1>Hola mundo</h1>\\n<p>Edita este código.</p>';
  ce.addEventListener('sp-change', e => console.log(e.detail.value));
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:10px;max-width:700px;">
  <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
    <span style="font-size:12px;color:var(--sp-text-muted);">Lenguaje:</span>
    <sp-button size="sm" variant="secondary" id="demo-ce-js">JS</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-ce-html">HTML</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-ce-css">CSS</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-ce-ro">Solo lectura</sp-button>
    <div style="margin-left:auto;font-size:12px;color:var(--sp-text-muted);" id="demo-ce-lines">0 líneas</div>
  </div>
  <sp-code-editor id="demo-ce" language="js" filename="index.js" tab-size="2"></sp-code-editor>
</div>
<script>
(function(){
  var ce = document.getElementById('demo-ce');
  var linesEl = document.getElementById('demo-ce-lines');
  var examples = {
    js:   { lang: 'js',   file: 'store.js',   code: 'import { writable } from "svelte/store";\n\nfunction createCart() {\n  const { subscribe, update, set } = writable([]);\n\n  return {\n    subscribe,\n    add: (item) => update(items => [...items, item]),\n    remove: (id) => update(items => items.filter(i => i.id !== id)),\n    clear: () => set([]),\n  };\n}\n\nexport const cart = createCart();' },
    html: { lang: 'html', file: 'card.html',  code: '<div class="card">\n  <figure class="card__image">\n    <img src="photo.jpg" alt="Descripción">\n  </figure>\n  <div class="card__body">\n    <h2 class="card__title">Título</h2>\n    <p class="card__text">Descripción breve del contenido de la tarjeta.</p>\n  </div>\n  <footer class="card__footer">\n    <button class="btn btn--primary">Acción</button>\n    <button class="btn btn--ghost">Cancelar</button>\n  </footer>\n</div>' },
    css:  { lang: 'css',  file: 'card.css',   code: '.card {\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0 1px 3px rgb(0 0 0 / .08);\n  transition: box-shadow .2s;\n}\n\n.card:hover {\n  box-shadow: 0 4px 12px rgb(0 0 0 / .12);\n}\n\n.card__image img {\n  width: 100%;\n  aspect-ratio: 16/9;\n  object-fit: cover;\n}\n\n.card__body {\n  padding: 16px;\n}' },
  };
  function load(k, ro) {
    var ex = examples[k] || examples.js;
    ce.value = ex.code;
    ce.language = ex.lang;
    ce.filename = ex.file;
    ce.readonly = !!ro;
    updateLines(ex.code);
  }
  function updateLines(v) {
    linesEl.textContent = (v ? v.split('\\n').length : 0) + ' líneas';
  }
  load('js');
  ['js','html','css'].forEach(function(k){
    document.getElementById('demo-ce-'+k).addEventListener('click', function(){ load(k, false); });
  });
  document.getElementById('demo-ce-ro').addEventListener('click', function(){ ce.readonly = !ce.readonly; });
  ce.addEventListener('sp-change', function(e){ updateLines(e.detail.value); });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ value: string }", desc: "Al cambiar el contenido del editor" },
    ],
  },

  "dnd-zone": {
    usage: `<div style="display:flex;gap:16px">
  <sp-dnd-zone id="zone1" group="tasks" zone-id="todo"></sp-dnd-zone>
  <sp-dnd-zone id="zone2" group="tasks" zone-id="done"></sp-dnd-zone>
</div>
<script>
  document.getElementById('zone1').items = [
    { id: '1', label: 'Diseñar mockups' },
    { id: '2', label: 'Revisar PRs' },
  ];
  document.getElementById('zone2').items = [
    { id: '3', label: 'Deploy a producción' },
  ];
</script>`,
    demo: `<div style="max-width:680px;">
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
    <div>
      <div style="font-size:12px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;padding:0 2px;">📋 Por hacer</div>
      <sp-dnd-zone id="demo-dnd-todo" group="flow" zone-id="todo" placeholder="Arrastra aquí"></sp-dnd-zone>
    </div>
    <div>
      <div style="font-size:12px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;padding:0 2px;">⚡ En progreso</div>
      <sp-dnd-zone id="demo-dnd-wip" group="flow" zone-id="wip" placeholder="Arrastra aquí"></sp-dnd-zone>
    </div>
    <div>
      <div style="font-size:12px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;padding:0 2px;">✅ Hecho</div>
      <sp-dnd-zone id="demo-dnd-done" group="flow" zone-id="done" placeholder="Arrastra aquí"></sp-dnd-zone>
    </div>
  </div>
</div>
<script>
(function(){
  document.getElementById('demo-dnd-todo').items = [
    { id: 't1', label: 'Diseñar mockups UI' },
    { id: 't2', label: 'Escribir unit tests' },
    { id: 't3', label: 'Documentar API' },
  ];
  document.getElementById('demo-dnd-wip').items = [
    { id: 'w1', label: 'Integrar REST API' },
    { id: 'w2', label: 'Responsive móvil' },
  ];
  document.getElementById('demo-dnd-done').items = [
    { id: 'd1', label: 'Setup del proyecto' },
    { id: 'd2', label: 'CI/CD pipeline' },
  ];
})();
</script>`,
    events: [
      { name: "sp-drop",    detail: "{ item, fromZone, toZone, newItems }", desc: "Al soltar un ítem en la zona" },
      { name: "sp-reorder", detail: "{ items: DndItem[] }", desc: "Al reordenar ítems en la misma zona" },
    ],
  },

  gantt: {
    usage: `<sp-gantt zoom="week" id="gantt"></sp-gantt>
<script>
  const today = new Date();
  const fmt = d => d.toISOString().split('T')[0];
  const add = (d, n) => { const r = new Date(d); r.setDate(r.getDate()+n); return r; };
  document.getElementById('gantt').tasks = [
    { id: '1', name: 'Diseño',     start: fmt(today), end: fmt(add(today,7)),  progress: 100 },
    { id: '2', name: 'Desarrollo', start: fmt(add(today,5)), end: fmt(add(today,20)), progress: 45 },
    { id: '3', name: 'Testing',    start: fmt(add(today,18)), end: fmt(add(today,25)), progress: 0 },
  ];
</script>`,
    demo: `<div style="max-width:700px;">
  <div style="display:flex;gap:8px;margin-bottom:12px;align-items:center;">
    <span style="font-size:12px;color:var(--sp-text-muted);">Zoom:</span>
    <sp-button size="sm" variant="secondary" id="demo-gnt-day">Día</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-gnt-week">Semana</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-gnt-month">Mes</sp-button>
  </div>
  <sp-gantt id="demo-gnt" zoom="week" title="Proyecto SP Components 2.0"></sp-gantt>
</div>
<script>
(function(){
  var gnt = document.getElementById('demo-gnt');
  var t = new Date();
  var fmt = function(d){ return d.toISOString().split('T')[0]; };
  var add = function(d,n){ var r=new Date(d); r.setDate(r.getDate()+n); return r; };
  gnt.tasks = [
    { id:'1', name:'Investigación UX',       start:fmt(add(t,-14)), end:fmt(add(t,-7)),  progress:100, color:'#6366f1' },
    { id:'2', name:'Diseño de componentes',  start:fmt(add(t,-10)), end:fmt(add(t,0)),   progress:85,  color:'#8b5cf6' },
    { id:'3', name:'Desarrollo — Fase 1',    start:fmt(add(t,-5)),  end:fmt(add(t,10)),  progress:60,  color:'#3b82f6' },
    { id:'4', name:'Desarrollo — Fase 2',    start:fmt(add(t,8)),   end:fmt(add(t,22)),  progress:0,   color:'#0ea5e9' },
    { id:'5', name:'Testing y QA',           start:fmt(add(t,18)),  end:fmt(add(t,28)),  progress:0,   color:'#22c55e' },
    { id:'6', name:'Documentación',          start:fmt(add(t,5)),   end:fmt(add(t,25)),  progress:20,  color:'#f59e0b' },
    { id:'7', name:'Deploy y lanzamiento',   start:fmt(add(t,26)),  end:fmt(add(t,30)),  progress:0,   color:'#ef4444' },
  ];
  ['day','week','month'].forEach(function(z){
    document.getElementById('demo-gnt-'+z).addEventListener('click', function(){ gnt.zoom = z; });
  });
})();
</script>`,
  },

  "infinite-scroll": {
    usage: `<sp-infinite-scroll id="is" has-more loading-text="Cargando más...">
  <div id="items-container"></div>
</sp-infinite-scroll>
<script>
  const is = document.getElementById('is');
  const container = document.getElementById('items-container');
  let page = 1;

  is.addEventListener('sp-load-more', async () => {
    is.loading = true;
    await new Promise(r => setTimeout(r, 1000)); // simula fetch
    for (let i = 0; i < 10; i++) {
      const el = document.createElement('p');
      el.textContent = \`Ítem \${(page-1)*10 + i + 1}\`;
      container.appendChild(el);
    }
    page++;
    is.loading = false;
    if (page > 5) is.hasMore = false;
  });
</script>`,
    demo: `<div style="max-width:480px;">
  <sp-infinite-scroll id="demo-is" has-more loading-text="Cargando más artículos..." end-text="¡Has llegado al final! 🎉" style="display:block;max-height:280px;">
    <div id="demo-is-list" style="display:flex;flex-direction:column;gap:8px;"></div>
  </sp-infinite-scroll>
</div>
<script>
(function(){
  var is = document.getElementById('demo-is');
  var list = document.getElementById('demo-is-list');
  var page = 1;
  var maxPages = 4;
  var avatars = ['🧑‍💻','👩‍🎨','🧑‍🔬','👨‍💼','👩‍🏫','🧑‍🎤','👩‍🔧','🧑‍🍳'];
  var names = ['Ana García','Carlos Ruiz','María López','David Chen','Sofia Müller','Lucas Santos','Emma Dubois','Yuki Tanaka'];

  function addItems() {
    var from = (page - 1) * 5;
    for (var i = from; i < from + 5; i++) {
      var div = document.createElement('div');
      div.style.cssText = 'display:flex;align-items:center;gap:12px;padding:10px 12px;border:1px solid var(--sp-border);border-radius:8px;background:var(--sp-bg);';
      var idx = i % 8;
      div.innerHTML = '<div style="width:36px;height:36px;border-radius:50%;background:var(--sp-primary-bg);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">' + avatars[idx] + '</div>'
        + '<div style="flex:1;min-width:0;"><div style="font-weight:600;font-size:13px;">' + names[idx] + '</div><div style="font-size:12px;color:var(--sp-text-muted);">Registro #' + (i+1) + ' · Hace ' + (Math.floor(Math.random()*24)+1) + 'h</div></div>'
        + '<sp-badge variant="' + ['primary','success','warning'][i%3] + '" size="sm">' + ['Pro','Free','Trial'][i%3] + '</sp-badge>';
      list.appendChild(div);
    }
  }

  addItems();

  is.addEventListener('sp-load-more', function() {
    if (page >= maxPages) return;
    is.loading = true;
    setTimeout(function() {
      page++;
      addItems();
      is.loading = false;
      if (page >= maxPages) is.hasMore = false;
    }, 800);
  });
})();
</script>`,
    events: [
      { name: "sp-load-more", detail: "—", desc: "Emitido cuando el usuario llega al final de la lista" },
    ],
    slots: [
      { name: "(default)", desc: "Contenido de la lista" },
    ],
  },

  "org-chart": {
    usage: `<sp-org-chart id="org"></sp-org-chart>
<script>
  document.getElementById('org').data = {
    id: 'ceo', name: 'María López', role: 'CEO',
    children: [
      {
        id: 'cto', name: 'Carlos Ruiz', role: 'CTO',
        children: [
          { id: 'dev1', name: 'Ana García', role: 'Frontend Lead' },
          { id: 'dev2', name: 'Luis Torres', role: 'Backend Lead' },
        ],
      },
      { id: 'cmo', name: 'Sofia Chen', role: 'CMO' },
    ],
  };
</script>`,
    demo: `<div style="display:flex;flex-direction:column;gap:32px;max-width:720px;">
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 14px;">1 · Empresa tecnológica — 4 niveles con avatares</p>
    <div style="margin-bottom:10px;">
      <sp-badge id="demo-oc-selected" variant="neutral">Haz clic en un nodo para seleccionarlo</sp-badge>
    </div>
    <sp-org-chart id="demo-oc1"></sp-org-chart>
  </div>
  <div>
    <p style="font-size:11px;font-weight:700;color:var(--sp-text-muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 14px;">2 · Startup — estructura plana</p>
    <sp-org-chart id="demo-oc2"></sp-org-chart>
  </div>
</div>
<script>
(function(){
  /* --- Org 1: 4 niveles con avatares --- */
  var oc1 = document.getElementById('demo-oc1');
  var badge = document.getElementById('demo-oc-selected');
  oc1.data = {
    id: 'ceo', name: 'María López', role: 'CEO',
    avatar: 'https://i.pravatar.cc/60?img=1',
    children: [
      {
        id: 'cto', name: 'Carlos Ruiz', role: 'CTO',
        avatar: 'https://i.pravatar.cc/60?img=7',
        children: [
          {
            id: 'fe', name: 'Ana García', role: 'Frontend Lead',
            avatar: 'https://i.pravatar.cc/60?img=5',
            children: [
              { id: 'fe1', name: 'Pedro Mora', role: 'Frontend Dev', avatar: 'https://i.pravatar.cc/60?img=11' },
              { id: 'fe2', name: 'Laura Vega', role: 'Frontend Dev', avatar: 'https://i.pravatar.cc/60?img=9' },
            ],
          },
          { id: 'be', name: 'Luis Torres', role: 'Backend Lead', avatar: 'https://i.pravatar.cc/60?img=3' },
          { id: 'devops', name: 'Sara Núñez', role: 'DevOps', avatar: 'https://i.pravatar.cc/60?img=20' },
        ],
      },
      {
        id: 'cmo', name: 'Sofia Chen', role: 'CMO',
        avatar: 'https://i.pravatar.cc/60?img=16',
        children: [
          { id: 'mkt1', name: 'Diego Paz', role: 'Growth', avatar: 'https://i.pravatar.cc/60?img=13' },
          { id: 'mkt2', name: 'Elena Ríos', role: 'Brand', avatar: 'https://i.pravatar.cc/60?img=25' },
        ],
      },
      { id: 'cfo', name: 'Javier Ríos', role: 'CFO', avatar: 'https://i.pravatar.cc/60?img=6' },
    ],
  };
  oc1.addEventListener('sp-select', function(e) {
    badge.textContent = 'Seleccionado: ' + e.detail.node.name + ' — ' + e.detail.node.role;
    badge.setAttribute('variant', 'primary');
  });

  /* --- Org 2: Startup plana --- */
  var oc2 = document.getElementById('demo-oc2');
  oc2.data = {
    id: 'founder', name: 'Alex Martín', role: 'Co-founder & CEO',
    avatar: 'https://i.pravatar.cc/60?img=33',
    children: [
      { id: 's1', name: 'Marta Gil',   role: 'Full Stack Dev',  avatar: 'https://i.pravatar.cc/60?img=44' },
      { id: 's2', name: 'Bruno Díaz',  role: 'Designer',        avatar: 'https://i.pravatar.cc/60?img=51' },
      { id: 's3', name: 'Noa Reyes',   role: 'Product',         avatar: 'https://i.pravatar.cc/60?img=47' },
      { id: 's4', name: 'Lucas Soto',  role: 'Marketing',       avatar: 'https://i.pravatar.cc/60?img=56' },
    ],
  };
})();
</script>`,
    events: [
      { name: "sp-select", detail: "{ id: string; node: OrgNode }", desc: "Al seleccionar un nodo" },
    ],
  },

  "sortable-list": {
    usage: `<sp-sortable-list id="sl" handles></sp-sortable-list>
<script>
  document.getElementById('sl').items = [
    { id: '1', label: 'Diseño UI',        description: 'Crear mockups en Figma' },
    { id: '2', label: 'Desarrollo',       description: 'Implementar componentes' },
    { id: '3', label: 'Code review',      description: 'Revisar pull requests' },
    { id: '4', label: 'Deploy',           description: 'Subir a producción' },
  ];
  document.getElementById('sl').addEventListener('sp-change', e => {
    console.log('Nuevo orden:', e.detail.items);
  });
</script>`,
    demo: `<div style="max-width:480px;">
  <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;align-items:center;">
    <sp-button size="sm" variant="secondary" id="demo-sl-handles">Handles: ON</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-sl-reset">Restablecer orden</sp-button>
    <span style="font-size:13px;color:#6b7280;" id="demo-sl-info">Arrastra para reordenar</span>
  </div>
  <sp-sortable-list id="demo-sl" handles></sp-sortable-list>
</div>
<script>
(function(){
  var sl = document.getElementById('demo-sl');
  var btnHandles = document.getElementById('demo-sl-handles');
  var btnReset = document.getElementById('demo-sl-reset');
  var info = document.getElementById('demo-sl-info');
  var handlesOn = true;
  var initialItems = [
    { id: '1', label: 'Diseño UI',     description: 'Crear mockups en Figma' },
    { id: '2', label: 'Desarrollo',    description: 'Implementar componentes' },
    { id: '3', label: 'Code review',   description: 'Revisar pull requests' },
    { id: '4', label: 'Deploy',        description: 'Subir a producción' },
    { id: '5', label: 'Monitoreo',     description: 'Revisar métricas en producción' },
  ];
  sl.items = JSON.parse(JSON.stringify(initialItems));
  sl.addEventListener('sp-change', function(e) {
    info.textContent = 'Orden actualizado: ' + e.detail.items.map(function(i){ return i.label; }).join(' → ');
  });
  btnHandles.addEventListener('click', function() {
    handlesOn = !handlesOn;
    sl.handles = handlesOn;
    btnHandles.textContent = 'Handles: ' + (handlesOn ? 'ON' : 'OFF');
  });
  btnReset.addEventListener('click', function() {
    sl.items = JSON.parse(JSON.stringify(initialItems));
    info.textContent = 'Orden restablecido';
  });
})();
</script>`,
    events: [
      { name: "sp-change", detail: "{ items: SortableItem[] }", desc: "Al reordenar la lista" },
    ],
  },

  "virtual-list": {
    usage: `<sp-virtual-list id="vl" item-height="48" height="300px"></sp-virtual-list>
<script>
  const vl = document.getElementById('vl');
  vl.items = Array.from({ length: 10000 }, (_, i) => ({ id: i, name: \`Usuario \${i+1}\` }));
  vl.renderItem = (item) => {
    const div = document.createElement('div');
    div.style.cssText = 'padding:12px 16px;border-bottom:1px solid #e5e7eb;';
    div.textContent = item.name;
    return div;
  };
</script>`,
    demo: `<div style="max-width:480px;">
  <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;align-items:center;">
    <sp-button size="sm" variant="secondary" id="demo-vl-1k">1 000 items</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-vl-10k">10 000 items</sp-button>
    <sp-button size="sm" variant="secondary" id="demo-vl-100k">100 000 items</sp-button>
    <sp-badge id="demo-vl-badge" variant="neutral">10 000 items cargados</sp-badge>
  </div>
  <sp-virtual-list id="demo-vl" item-height="48" height="320px"></sp-virtual-list>
  <p id="demo-vl-click" style="margin-top:8px;font-size:13px;color:#6b7280;">Haz clic en un elemento...</p>
</div>
<script>
(function(){
  var vl = document.getElementById('demo-vl');
  var badge = document.getElementById('demo-vl-badge');
  var clickInfo = document.getElementById('demo-vl-click');
  function loadItems(count) {
    vl.items = Array.from({ length: count }, function(_, i) {
      return { id: i, name: 'Usuario #' + (i + 1), email: 'user' + (i + 1) + '@example.com' };
    });
    vl.renderItem = function(item) {
      var div = document.createElement('div');
      div.style.cssText = 'padding:10px 16px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;cursor:pointer;';
      var name = document.createElement('span');
      name.style.fontWeight = '500';
      name.textContent = item.name;
      var email = document.createElement('span');
      email.style.cssText = 'font-size:12px;color:#9ca3af;';
      email.textContent = item.email;
      div.appendChild(name);
      div.appendChild(email);
      return div;
    };
    badge.textContent = count.toLocaleString('es') + ' items cargados';
  }
  loadItems(10000);
  vl.addEventListener('sp-item-click', function(e) {
    clickInfo.textContent = 'Clic en índice ' + e.detail.index + ': ' + e.detail.item.name;
  });
  document.getElementById('demo-vl-1k').addEventListener('click', function() { loadItems(1000); });
  document.getElementById('demo-vl-10k').addEventListener('click', function() { loadItems(10000); });
  document.getElementById('demo-vl-100k').addEventListener('click', function() { loadItems(100000); });
})();
</script>`,
    events: [
      { name: "sp-item-click", detail: "{ index: number; item: unknown }", desc: "Al hacer clic en un ítem" },
    ],
  },
};
