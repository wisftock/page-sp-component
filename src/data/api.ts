export interface PropDef {
  name: string;
  type: string;
  default: string;
  desc: string;
}

export const api: Record<string, PropDef[]> = {
  buttons: [
    { name: "variant",    type: '"primary" | "secondary" | "ghost" | "destructive"', default: '"primary"',  desc: "Estilo visual del botón" },
    { name: "size",       type: '"sm" | "md" | "lg"',                                default: '"md"',       desc: "Tamaño del botón" },
    { name: "disabled",   type: "boolean",                                            default: "false",      desc: "Deshabilita interacción y aplica estilos de deshabilitado" },
    { name: "loading",    type: "boolean",                                            default: "false",      desc: "Muestra spinner y deshabilita el botón mientras carga" },
    { name: "full-width", type: "boolean",                                            default: "false",      desc: "Ocupa el 100% del ancho del contenedor" },
    { name: "href",       type: "string",                                             default: "—",          desc: "Convierte el botón en un enlace (<a>)" },
    { name: "target",     type: '"_blank" | "_self" | "_parent" | "_top"',           default: '"_self"',    desc: "Dónde abrir el enlace cuando se usa href" },
  ],
  "copy-button": [
    { name: "text",     type: "string",                                   default: "—",         desc: "Texto que se copia al portapapeles (requerido)" },
    { name: "label",    type: "string",                                   default: '"Copiar"',  desc: "Etiqueta visible en el botón" },
    { name: "variant",  type: '"primary" | "secondary" | "ghost"',       default: '"ghost"',   desc: "Estilo visual" },
    { name: "size",     type: '"sm" | "md" | "lg"',                      default: '"md"',      desc: "Tamaño del botón" },
    { name: "disabled", type: "boolean",                                  default: "false",     desc: "Deshabilita la acción de copiar" },
  ],
  input: [
    { name: "label",       type: "string",                                             default: "—",       desc: "Etiqueta flotante del campo" },
    { name: "placeholder", type: "string",                                             default: "—",       desc: "Texto guía cuando el campo está vacío" },
    { name: "type",        type: '"text" | "email" | "password" | "search" | "url"',  default: '"text"',  desc: "Tipo nativo del input" },
    { name: "value",       type: "string",                                             default: "—",       desc: "Valor controlado del campo" },
    { name: "name",        type: "string",                                             default: "—",       desc: "Nombre del campo para formularios nativos" },
    { name: "hint",        type: "string",                                             default: "—",       desc: "Texto de ayuda bajo el campo" },
    { name: "error",       type: "string",                                             default: "—",       desc: "Mensaje de error; activa estado error" },
    { name: "size",        type: '"sm" | "md" | "lg"',                                default: '"md"',    desc: "Tamaño del campo" },
    { name: "clearable",   type: "boolean",                                            default: "false",   desc: "Muestra botón para borrar el valor" },
    { name: "disabled",    type: "boolean",                                            default: "false",   desc: "Deshabilita el campo" },
    { name: "readonly",    type: "boolean",                                            default: "false",   desc: "El valor es visible pero no editable" },
    { name: "required",    type: "boolean",                                            default: "false",   desc: "Marca el campo como obligatorio" },
  ],
  textarea: [
    { name: "label",       type: "string",                               default: "—",       desc: "Etiqueta del área de texto" },
    { name: "placeholder", type: "string",                               default: "—",       desc: "Texto guía cuando está vacío" },
    { name: "value",       type: "string",                               default: "—",       desc: "Contenido del textarea" },
    { name: "rows",        type: "number",                               default: "3",       desc: "Número de filas visibles" },
    { name: "maxlength",   type: "number",                               default: "—",       desc: "Límite de caracteres; muestra contador" },
    { name: "resize",      type: '"none" | "vertical" | "horizontal"',   default: '"vertical"', desc: "Controla si el usuario puede redimensionar" },
    { name: "auto-resize", type: "boolean",                               default: "false",   desc: "Crece automáticamente con el contenido" },
    { name: "hint",        type: "string",                               default: "—",       desc: "Texto de ayuda bajo el campo" },
    { name: "error",       type: "string",                               default: "—",       desc: "Mensaje de error; activa estado error" },
    { name: "disabled",    type: "boolean",                               default: "false",   desc: "Deshabilita el campo" },
    { name: "readonly",    type: "boolean",                               default: "false",   desc: "Solo lectura" },
    { name: "required",    type: "boolean",                               default: "false",   desc: "Campo obligatorio" },
  ],
  select: [
    { name: "label",       type: "string",                  default: "—",       desc: "Etiqueta del selector" },
    { name: "placeholder", type: "string",                  default: "—",       desc: "Opción vacía inicial" },
    { name: "options",     type: "{ value, label }[]",      default: "[]",      desc: "Lista de opciones (se asigna por JS)" },
    { name: "name",        type: "string",                  default: "—",       desc: "Nombre para formularios nativos" },
    { name: "size",        type: '"sm" | "md" | "lg"',      default: '"md"',    desc: "Tamaño del componente" },
    { name: "hint",        type: "string",                  default: "—",       desc: "Texto de ayuda" },
    { name: "error",       type: "string",                  default: "—",       desc: "Mensaje de error" },
    { name: "multiple",    type: "boolean",                  default: "false",   desc: "Permite seleccionar múltiples opciones" },
    { name: "disabled",    type: "boolean",                  default: "false",   desc: "Deshabilita el selector" },
    { name: "required",    type: "boolean",                  default: "false",   desc: "Campo obligatorio" },
  ],
  checkbox: [
    { name: "label",         type: "string",               default: "—",      desc: "Texto visible junto al checkbox" },
    { name: "checked",       type: "boolean",               default: "false",  desc: "Estado marcado" },
    { name: "indeterminate", type: "boolean",               default: "false",  desc: "Estado intermedio (visualmente parcial)" },
    { name: "value",         type: "string",                default: "—",      desc: "Valor enviado en formularios" },
    { name: "size",          type: '"sm" | "md" | "lg"',   default: '"md"',   desc: "Tamaño del checkbox" },
    { name: "hint",          type: "string",                default: "—",      desc: "Texto de ayuda" },
    { name: "error",         type: "string",                default: "—",      desc: "Mensaje de error" },
    { name: "disabled",      type: "boolean",               default: "false",  desc: "Deshabilita la interacción" },
  ],
  switch: [
    { name: "label",     type: "string",              default: "—",      desc: "Etiqueta del switch" },
    { name: "checked",   type: "boolean",              default: "false",  desc: "Estado activado" },
    { name: "on-label",  type: "string",               default: "—",      desc: "Texto cuando está activado" },
    { name: "off-label", type: "string",               default: "—",      desc: "Texto cuando está desactivado" },
    { name: "name",      type: "string",               default: "—",      desc: "Nombre para formularios" },
    { name: "size",      type: '"sm" | "md" | "lg"',  default: '"md"',   desc: "Tamaño del switch" },
    { name: "hint",      type: "string",               default: "—",      desc: "Texto de ayuda" },
    { name: "disabled",  type: "boolean",              default: "false",  desc: "Deshabilita el toggle" },
    { name: "required",  type: "boolean",              default: "false",  desc: "Campo obligatorio" },
  ],
  radio: [
    { name: "value",       type: "string",                      default: "—",         desc: "Valor del grupo seleccionado" },
    { name: "label",       type: "string",                      default: "—",         desc: "Etiqueta del grupo (sp-radio-group)" },
    { name: "orientation", type: '"horizontal" | "vertical"',   default: '"vertical"', desc: "Dirección del layout" },
    { name: "error",       type: "string",                      default: "—",         desc: "Mensaje de error del grupo" },
    { name: "disabled",    type: "boolean",                     default: "false",     desc: "Deshabilita todo el grupo" },
    { name: "name",        type: "string",                      default: "—",         desc: "Nombre para formularios" },
  ],
  slider: [
    { name: "label",      type: "string",              default: "—",      desc: "Etiqueta del slider" },
    { name: "min",        type: "number",               default: "0",      desc: "Valor mínimo" },
    { name: "max",        type: "number",               default: "100",    desc: "Valor máximo" },
    { name: "value",      type: "number",               default: "0",      desc: "Valor actual" },
    { name: "step",       type: "number",               default: "1",      desc: "Incremento por paso" },
    { name: "show-value", type: "boolean",              default: "false",  desc: "Muestra el valor numérico junto al thumb" },
    { name: "size",       type: '"sm" | "md" | "lg"',  default: '"md"',   desc: "Tamaño del control" },
    { name: "disabled",   type: "boolean",              default: "false",  desc: "Deshabilita el slider" },
  ],
  rating: [
    { name: "value",    type: "number",              default: "0",     desc: "Puntuación actual" },
    { name: "max",      type: "number",              default: "5",     desc: "Número máximo de estrellas" },
    { name: "size",     type: '"sm" | "md" | "lg"', default: '"md"',  desc: "Tamaño de los iconos" },
    { name: "readonly", type: "boolean",              default: "false", desc: "Solo muestra la puntuación, sin interacción" },
    { name: "disabled", type: "boolean",              default: "false", desc: "Deshabilita la selección" },
  ],
  "number-input": [
    { name: "label",       type: "string",              default: "—",      desc: "Etiqueta del campo" },
    { name: "value",       type: "number",               default: "—",      desc: "Valor actual" },
    { name: "min",         type: "number",               default: "—",      desc: "Valor mínimo permitido" },
    { name: "max",         type: "number",               default: "—",      desc: "Valor máximo permitido" },
    { name: "step",        type: "number",               default: "1",      desc: "Incremento de los botones +/−" },
    { name: "placeholder", type: "string",               default: "—",      desc: "Texto guía" },
    { name: "size",        type: '"sm" | "md" | "lg"',  default: '"md"',   desc: "Tamaño del campo" },
    { name: "hint",        type: "string",               default: "—",      desc: "Texto de ayuda" },
    { name: "error",       type: "string",               default: "—",      desc: "Mensaje de error" },
    { name: "disabled",    type: "boolean",              default: "false",  desc: "Deshabilita el campo" },
  ],
  "otp-input": [
    { name: "length",     type: "number",                   default: "6",     desc: "Número de dígitos del código" },
    { name: "input-type", type: '"numeric" | "alphabetic" | "alphanumeric"', default: '"numeric"', desc: "Tipo de caracteres aceptados" },
    { name: "invalid",    type: "boolean",                  default: "false", desc: "Marca el código como inválido" },
    { name: "disabled",   type: "boolean",                  default: "false", desc: "Deshabilita el input" },
    { name: "size",       type: '"sm" | "md" | "lg"',      default: '"md"',  desc: "Tamaño de cada celda" },
  ],
  "tag-input": [
    { name: "label",       type: "string",   default: "—",      desc: "Etiqueta del campo" },
    { name: "placeholder", type: "string",   default: "—",      desc: "Texto guía" },
    { name: "values",      type: "string[]", default: "[]",     desc: "Array de tags actuales" },
    { name: "max",         type: "number",   default: "—",      desc: "Número máximo de tags permitidos" },
    { name: "name",        type: "string",   default: "—",      desc: "Nombre para formularios" },
    { name: "error",       type: "string",   default: "—",      desc: "Mensaje de error" },
    { name: "disabled",    type: "boolean",  default: "false",  desc: "Deshabilita el campo" },
    { name: "required",    type: "boolean",  default: "false",  desc: "Campo obligatorio" },
  ],
  autocomplete: [
    { name: "label",          type: "string",                  default: "—",      desc: "Etiqueta del campo" },
    { name: "placeholder",    type: "string",                  default: "—",      desc: "Texto guía" },
    { name: "options",        type: "{ value, label, group? }[]", default: "[]", desc: "Lista de sugerencias (se asigna por JS)" },
    { name: "clearable",      type: "boolean",                 default: "false",  desc: "Muestra botón para limpiar" },
    { name: "multiple",       type: "boolean",                 default: "false",  desc: "Permite seleccionar múltiples valores" },
    { name: "creatable",      type: "boolean",                 default: "false",  desc: "Permite crear opciones nuevas que no estén en la lista" },
    { name: "max-selections", type: "number",                  default: "—",      desc: "Límite de selecciones cuando multiple=true" },
    { name: "size",           type: '"sm" | "md" | "lg"',     default: '"md"',   desc: "Tamaño del campo" },
    { name: "error",          type: "string",                  default: "—",      desc: "Mensaje de error" },
    { name: "disabled",       type: "boolean",                 default: "false",  desc: "Deshabilita el campo" },
  ],
  combobox: [
    { name: "label",       type: "string",                  default: "—",      desc: "Etiqueta del campo" },
    { name: "placeholder", type: "string",                  default: "—",      desc: "Texto guía" },
    { name: "options",     type: "{ value, label }[]",      default: "[]",     desc: "Opciones del combo (se asigna por JS)" },
    { name: "multiple",    type: "boolean",                  default: "false",  desc: "Selección múltiple con chips" },
    { name: "size",        type: '"sm" | "md" | "lg"',      default: '"md"',   desc: "Tamaño del campo" },
    { name: "hint",        type: "string",                  default: "—",      desc: "Texto de ayuda" },
    { name: "error",       type: "string",                  default: "—",      desc: "Mensaje de error" },
    { name: "disabled",    type: "boolean",                  default: "false",  desc: "Deshabilita el combo" },
  ],
  "file-upload": [
    { name: "label",    type: "string",   default: "—",      desc: "Etiqueta del área de subida" },
    { name: "hint",     type: "string",   default: "—",      desc: "Texto de ayuda (ej: formatos aceptados)" },
    { name: "accept",   type: "string",   default: "—",      desc: "MIME types aceptados, ej: image/*, .pdf" },
    { name: "max-size", type: "number",   default: "—",      desc: "Tamaño máximo en bytes" },
    { name: "multiple", type: "boolean",  default: "false",  desc: "Permite subir varios archivos a la vez" },
    { name: "disabled", type: "boolean",  default: "false",  desc: "Deshabilita el área de drop" },
  ],
  "time-picker": [
    { name: "label",        type: "string",            default: "—",       desc: "Etiqueta del campo" },
    { name: "value",        type: "string",            default: "—",       desc: "Tiempo seleccionado en formato HH:mm[:ss]" },
    { name: "format",       type: '"12" | "24"',       default: '"24"',    desc: "Formato de 12 o 24 horas" },
    { name: "show-seconds", type: "boolean",           default: "false",   desc: "Muestra el selector de segundos" },
    { name: "min",          type: "string",            default: "—",       desc: "Tiempo mínimo seleccionable" },
    { name: "max",          type: "string",            default: "—",       desc: "Tiempo máximo seleccionable" },
    { name: "step",         type: "number",            default: "1",       desc: "Intervalo de minutos en el selector" },
    { name: "hint",         type: "string",            default: "—",       desc: "Texto de ayuda" },
    { name: "disabled",     type: "boolean",           default: "false",   desc: "Deshabilita el campo" },
  ],
  tabs: [
    { name: "placement", type: '"top" | "bottom" | "start" | "end"', default: '"top"', desc: "Posición de las pestañas (sp-tabs)" },
    { name: "panel",     type: "string",                              default: "—",     desc: "Id del panel asociado a esta pestaña (sp-tab)" },
    { name: "disabled",  type: "boolean",                            default: "false", desc: "Deshabilita una pestaña individual (sp-tab)" },
    { name: "name",      type: "string",                             default: "—",     desc: "Id único del panel (sp-tab-panel)" },
  ],
  breadcrumb: [
    { name: "separator", type: "string", default: '"/"', desc: "Carácter separador entre items (sp-breadcrumb)" },
    { name: "href",      type: "string", default: "—",   desc: "URL del item; sin href se renderiza como texto (sp-breadcrumb-item)" },
  ],
  pagination: [
    { name: "page",         type: "number",  default: "1",      desc: "Página actual" },
    { name: "total",        type: "number",  default: "0",      desc: "Total de items para calcular páginas" },
    { name: "page-size",    type: "number",  default: "10",     desc: "Items por página" },
    { name: "show-jump-to", type: "boolean", default: "false",  desc: "Muestra campo para ir a una página específica" },
    { name: "disabled",     type: "boolean", default: "false",  desc: "Deshabilita todos los controles" },
  ],
  stepper: [
    { name: "steps",       type: "{ label, description?, status? }[]", default: "[]",          desc: "Array de pasos (se asigna por JS)" },
    { name: "activeStep",  type: "number",                              default: "0",           desc: "Índice del paso activo (se asigna por JS)" },
    { name: "orientation", type: '"horizontal" | "vertical"',          default: '"horizontal"', desc: "Dirección del stepper" },
  ],
  menu: [
    { name: "placement", type: '"bottom-start" | "bottom-end" | "top-start" | "top-end"', default: '"bottom-start"', desc: "Posición del menú desplegable (sp-menu)" },
    { name: "value",     type: "string",                                                   default: "—",              desc: "Valor del item (sp-menu-item)" },
    { name: "danger",    type: "boolean",                                                  default: "false",          desc: "Estilo destructivo en el item" },
    { name: "disabled",  type: "boolean",                                                  default: "false",          desc: "Deshabilita el item" },
  ],
  navbar: [
    { name: "bordered", type: "boolean", default: "false", desc: "Agrega borde inferior a la barra de navegación" },
  ],
  "sidebar-comp": [
    { name: "items",       type: "{ id, label, icon? }[]", default: "[]",    desc: "Items de navegación (se asigna por JS)" },
    { name: "collapsible", type: "boolean",                 default: "false", desc: "Permite colapsar el sidebar a iconos" },
  ],
  modal: [
    { name: "label", type: "string",                    default: "—",     desc: "Título del modal (accesibilidad)" },
    { name: "open",  type: "boolean",                   default: "false", desc: "Controla visibilidad (se asigna por JS)" },
    { name: "size",  type: '"sm" | "md" | "lg" | "xl"', default: '"md"',  desc: "Ancho del diálogo" },
  ],
  drawer: [
    { name: "open",      type: "boolean",                                  default: "false",   desc: "Controla visibilidad (se asigna por JS)" },
    { name: "placement", type: '"left" | "right" | "top" | "bottom"',    default: '"right"', desc: "Lado desde el que aparece" },
    { name: "size",      type: '"sm" | "md" | "lg"',                      default: '"md"',    desc: "Ancho (o alto en top/bottom) del drawer" },
  ],
  tooltip: [
    { name: "content",   type: "string",                                                               default: "—",        desc: "Texto del tooltip" },
    { name: "placement", type: '"top" | "bottom" | "left" | "right" | "top-start" | "top-end" | …', default: '"top"',    desc: "Posición relativa al elemento" },
    { name: "trigger",   type: '"hover" | "focus" | "click"',                                         default: '"hover"',  desc: "Evento que dispara el tooltip" },
    { name: "disabled",  type: "boolean",                                                              default: "false",    desc: "Deshabilita el tooltip" },
  ],
  popover: [
    { name: "placement", type: '"top" | "bottom" | "left" | "right" | …', default: '"bottom-start"', desc: "Posición del popover" },
    { name: "arrow",     type: "boolean",                                   default: "false",          desc: "Muestra flecha apuntando al trigger" },
  ],
  toast: [
    { name: "variant",  type: '"info" | "success" | "warning" | "error" | "neutral"', default: '"neutral"', desc: "Color y icono del toast" },
    { name: "message",  type: "string",                                                default: "—",         desc: "Texto principal del mensaje" },
    { name: "duration", type: "number",                                                default: "3000",      desc: "Tiempo en ms antes de cerrarse. 0 = persistente" },
    { name: "closable", type: "boolean",                                               default: "true",      desc: "Muestra botón de cierre manual" },
    { name: "open",     type: "boolean",                                               default: "false",     desc: "Controla visibilidad (se asigna por JS)" },
  ],
  "toast-stack": [
    { name: "position", type: '"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"', default: '"top-right"', desc: "Esquina donde aparecen los toasts" },
  ],
  "confirm-dialog": [
    { name: "title",         type: "string",                                 default: "—",           desc: "Título del diálogo" },
    { name: "message",       type: "string",                                 default: "—",           desc: "Descripción de la acción a confirmar" },
    { name: "confirm-label", type: "string",                                 default: '"Confirmar"', desc: "Texto del botón de confirmación" },
    { name: "cancel-label",  type: "string",                                 default: '"Cancelar"',  desc: "Texto del botón de cancelación" },
    { name: "variant",       type: '"default" | "destructive"',              default: '"default"',   desc: "Estilo del botón de confirmación" },
    { name: "hide-cancel",   type: "boolean",                                default: "false",       desc: "Oculta el botón de cancelar" },
    { name: "open",          type: "boolean",                                default: "false",       desc: "Controla visibilidad" },
  ],
  table: [
    { name: "columns",    type: "{ key, label, width?, sortable? }[]", default: "[]",    desc: "Definición de columnas (se asigna por JS)" },
    { name: "data",       type: "object[]",                            default: "[]",    desc: "Filas de datos (se asigna por JS)" },
    { name: "striped",    type: "boolean",                             default: "false", desc: "Filas alternas con fondo distinto" },
    { name: "hoverable",  type: "boolean",                             default: "false", desc: "Resalta la fila al pasar el cursor" },
    { name: "searchable", type: "boolean",                             default: "false", desc: "Agrega campo de búsqueda sobre la tabla" },
    { name: "selectable", type: "boolean",                             default: "false", desc: "Checkboxes para seleccionar filas" },
  ],
  accordion: [
    { name: "variant",  type: '"default" | "bordered" | "separated"', default: '"default"', desc: "Estilo visual del accordion (sp-accordion)" },
    { name: "multiple", type: "boolean",                               default: "false",     desc: "Permite abrir múltiples items a la vez" },
    { name: "label",    type: "string",                                default: "—",         desc: "Título del item (sp-accordion-item)" },
    { name: "open",     type: "boolean",                               default: "false",     desc: "Item expandido por defecto" },
    { name: "disabled", type: "boolean",                               default: "false",     desc: "Deshabilita el item" },
  ],
  card: [
    { name: "shadow",   type: '"none" | "sm" | "md" | "lg"', default: '"md"',  desc: "Nivel de sombra de la tarjeta" },
    { name: "bordered", type: "boolean",                      default: "false", desc: "Agrega borde al card" },
    { name: "padding",  type: '"none" | "sm" | "md" | "lg"', default: '"md"',  desc: "Espaciado interno del contenido" },
  ],
  badge: [
    { name: "variant", type: '"default" | "primary" | "success" | "warning" | "error" | "info"', default: '"default"', desc: "Color del badge" },
    { name: "count",   type: "number",  default: "—",     desc: "Número que muestra el badge" },
    { name: "max",     type: "number",  default: "99",    desc: "Valor máximo antes de mostrar «max+»" },
    { name: "pill",    type: "boolean", default: "false", desc: "Bordes totalmente redondeados" },
    { name: "pulsing", type: "boolean", default: "false", desc: "Animación de pulso para llamar la atención" },
  ],
  avatar: [
    { name: "initials", type: "string",                                default: "—",       desc: "Letras a mostrar cuando no hay imagen" },
    { name: "src",      type: "string",                                default: "—",       desc: "URL de la imagen de avatar" },
    { name: "size",     type: '"xs" | "sm" | "md" | "lg" | "xl"',    default: '"md"',    desc: "Tamaño del avatar" },
    { name: "shape",    type: '"circle" | "square"',                  default: '"circle"', desc: "Forma del avatar" },
    { name: "status",   type: '"online" | "offline" | "away" | "busy"', default: "—",    desc: "Indicador de estado con color" },
  ],
  stat: [
    { name: "label",       type: "string",               default: "—",  desc: "Título de la métrica" },
    { name: "value",       type: "string | number",      default: "—",  desc: "Valor principal a mostrar" },
    { name: "trend",       type: '"up" | "down"',        default: "—",  desc: "Dirección de la tendencia" },
    { name: "trendValue",  type: "string",               default: "—",  desc: "Texto del cambio, ej: +12%" },
    { name: "prefix",      type: "string",               default: "—",  desc: "Símbolo antes del valor, ej: $" },
    { name: "suffix",      type: "string",               default: "—",  desc: "Símbolo después del valor, ej: %"},
    { name: "description", type: "string",               default: "—",  desc: "Texto descriptivo secundario" },
  ],
  timeline: [
    { name: "items",   type: "{ label, description?, time?, variant? }[]", default: "[]",    desc: "Eventos de la línea de tiempo (se asigna por JS)" },
    { name: "reverse", type: "boolean",                                    default: "false", desc: "Invierte el orden (más reciente primero)" },
  ],
  tree: [
    { name: "selection-mode", type: '"none" | "single" | "multiple"', default: '"none"',   desc: "Modo de selección de nodos (sp-tree)" },
    { name: "label",          type: "string",                          default: "—",        desc: "Texto del nodo (sp-tree-item)" },
    { name: "expanded",       type: "boolean",                         default: "false",    desc: "Nodo abierto por defecto" },
  ],
  calendar: [
    { name: "mode",                 type: '"single" | "range" | "multiple"', default: '"single"', desc: "Modo de selección de fechas" },
    { name: "show-presets",         type: "boolean",                         default: "false",    desc: "Muestra rangos predefinidos (ayer, esta semana…)" },
    { name: "months",               type: "number",                          default: "1",        desc: "Número de meses visibles simultáneamente" },
    { name: "disabled-days-of-week", type: "number[]",                       default: "[]",       desc: "Días de la semana deshabilitados (0=Dom, 6=Sáb)" },
  ],
  gallery: [
    { name: "items",      type: "{ src, alt, caption? }[]", default: "[]",        desc: "Imágenes de la galería (se asigna por JS)" },
    { name: "columns",    type: "number",                   default: "3",         desc: "Columnas del grid" },
    { name: "layout",     type: '"grid" | "masonry"',       default: '"grid"',    desc: "Tipo de disposición" },
    { name: "selectable", type: "boolean",                  default: "false",     desc: "Permite seleccionar imágenes" },
    { name: "loading",    type: '"lazy" | "eager"',         default: '"lazy"',    desc: "Estrategia de carga de imágenes" },
  ],
  carousel: [
    { name: "loop",            type: "boolean",                  default: "false", desc: "Vuelve al principio al llegar al final" },
    { name: "autoplay",        type: "boolean | number",         default: "false", desc: "Auto-avanza (true = 3000ms, o pasar ms)" },
    { name: "effect",          type: '"slide" | "fade"',         default: '"slide"', desc: "Transición entre slides" },
    { name: "slides-per-view", type: "number",                   default: "1",     desc: "Slides visibles simultáneamente" },
    { name: "gap",             type: "number",                   default: "0",     desc: "Espacio en px entre slides" },
  ],
  tag: [
    { name: "variant",   type: '"default" | "primary" | "success" | "warning" | "error" | "info"', default: '"default"', desc: "Color del tag" },
    { name: "size",      type: '"sm" | "md" | "lg"',  default: '"md"',  desc: "Tamaño del tag" },
    { name: "removable", type: "boolean",              default: "false", desc: "Muestra botón de eliminar; emite sp-remove" },
    { name: "disabled",  type: "boolean",              default: "false", desc: "Deshabilita interacciones" },
  ],
  alert: [
    { name: "variant",    type: '"info" | "success" | "warning" | "error"', default: '"info"',  desc: "Color e icono de la alerta" },
    { name: "title",      type: "string",                                    default: "—",       desc: "Título en negrita de la alerta" },
    { name: "dismissible", type: "boolean",                                  default: "false",   desc: "Muestra botón para cerrar la alerta" },
  ],
  progress: [
    { name: "value",         type: "number",                                          default: "0",       desc: "Porcentaje de progreso (0–100)" },
    { name: "label",         type: "string",                                          default: "—",       desc: "Texto descriptivo sobre la barra" },
    { name: "variant",       type: '"default" | "primary" | "success" | "warning" | "error"', default: '"primary"', desc: "Color de la barra" },
    { name: "indeterminate", type: "boolean",                                         default: "false",   desc: "Animación infinita cuando el progreso es desconocido" },
  ],
  spinner: [
    { name: "size", type: '"sm" | "md" | "lg" | "xl"', default: '"md"', desc: "Tamaño del spinner" },
  ],
  skeleton: [
    { name: "variant", type: '"text" | "circle" | "rect"', default: '"text"', desc: "Forma del skeleton" },
    { name: "width",   type: "string",                     default: '"100%"', desc: "Ancho (cualquier valor CSS)" },
    { name: "height",  type: "string",                     default: "—",      desc: "Alto (cualquier valor CSS)" },
  ],
  "split-panel": [
    { name: "vertical", type: "boolean", default: "false", desc: "Divide en horizontal en lugar de vertical" },
  ],
  "scroll-area": [
    { name: "max-height",  type: "string",                       default: "—",           desc: "Altura máxima antes de activar scroll" },
    { name: "max-width",   type: "string",                       default: "—",           desc: "Ancho máximo antes de activar scroll horizontal" },
    { name: "orientation", type: '"vertical" | "horizontal" | "both"', default: '"vertical"', desc: "Eje del scroll" },
  ],
  divider: [
    { name: "label",       type: "string",                        default: "—",          desc: "Texto centrado sobre el divisor" },
    { name: "variant",     type: '"solid" | "dashed" | "dotted"', default: '"solid"',    desc: "Estilo de línea" },
    { name: "orientation", type: '"horizontal" | "vertical"',     default: '"horizontal"', desc: "Dirección del divisor" },
  ],
  "empty-state": [
    { name: "title",       type: "string", default: "—", desc: "Título del estado vacío" },
    { name: "description", type: "string", default: "—", desc: "Texto descriptivo secundario" },
  ],
  icon: [
    { name: "name", type: "string",              default: "—",     desc: "Identificador del icono en la librería" },
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"',  desc: "Tamaño del icono" },
  ],
  kbd: [
    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', desc: "Tamaño de la tecla" },
  ],
  "color-picker": [
    { name: "value",      type: "string",                    default: '"#000000"', desc: "Color actual en formato hex, rgb o hsl" },
    { name: "format",     type: '"hex" | "rgb" | "hsl"',    default: '"hex"',     desc: "Formato del valor devuelto" },
    { name: "show-alpha", type: "boolean",                   default: "false",     desc: "Muestra canal alfa (transparencia)" },
    { name: "swatches",   type: "string[]",                  default: "[]",        desc: "Colores predefinidos de acceso rápido (por JS)" },
    { name: "disabled",   type: "boolean",                   default: "false",     desc: "Deshabilita el selector" },
  ],
  "command-palette": [
    { name: "open",  type: "boolean",                                                  default: "false", desc: "Controla visibilidad (se asigna por JS)" },
  ],

  // ── Nuevos componentes ────────────────────────────────────────────────────

  "bottom-sheet": [
    { name: "open",        type: "boolean", default: "false",   desc: "Controla la visibilidad del panel" },
    { name: "title",       type: "string",  default: "—",       desc: "Título mostrado en el header del panel" },
    { name: "overlay",     type: "boolean", default: "true",    desc: "Muestra fondo oscuro de overlay" },
    { name: "snap-height", type: "string",  default: '"50vh"',  desc: "Altura máxima del panel (cualquier valor CSS)" },
    { name: "draggable",   type: "boolean", default: "true",    desc: "Permite arrastrar el panel hacia abajo para cerrarlo" },
  ],

  "checkbox-group": [
    { name: "label",       type: "string",                        default: "—",          desc: "Etiqueta del grupo (legend)" },
    { name: "values",      type: "string",                        default: '""',         desc: "Valores marcados separados por coma" },
    { name: "name",        type: "string",                        default: "—",          desc: "Nombre base compartido entre los checkboxes" },
    { name: "orientation", type: '"vertical" | "horizontal"',    default: '"vertical"', desc: "Dirección del layout" },
    { name: "min",         type: "number",                        default: "0",          desc: "Selecciones mínimas requeridas (0 = ninguno)" },
    { name: "max",         type: "number",                        default: "0",          desc: "Selecciones máximas permitidas (0 = sin límite)" },
    { name: "hint",        type: "string",                        default: "—",          desc: "Texto de ayuda bajo el grupo" },
    { name: "error",       type: "string",                        default: "—",          desc: "Mensaje de error; activa estado inválido" },
    { name: "disabled",    type: "boolean",                       default: "false",      desc: "Deshabilita todos los checkboxes del grupo" },
    { name: "required",    type: "boolean",                       default: "false",      desc: "Requiere al menos una selección" },
  ],

  "context-menu": [
    { name: "items", type: "SpContextMenuItem[]", default: "[]", desc: "Items del menú: { label?, icon?, disabled?, danger?, separator?, onClick? }" },
  ],

  form: [
    { name: "novalidate", type: "boolean", default: "false", desc: "Omite la validación al enviar el formulario" },
  ],

  hotkey: [
    { name: "keys", type: "string[]",       default: "[]",   desc: 'Array de teclas a mostrar, ej: ["Ctrl", "K"]' },
    { name: "size", type: '"sm" | "md"',    default: '"md"', desc: "Tamaño de los badges de tecla" },
  ],

  "image-crop": [
    { name: "src",           type: "string",                     default: "—",      desc: "URL o dataURL de la imagen a recortar" },
    { name: "aspect-ratio",  type: "number",                     default: "0",      desc: "Bloquea la relación de aspecto (0=libre, 1=cuadrado, 1.77=16:9)" },
    { name: "output-width",  type: "number",                     default: "0",      desc: "Ancho del canvas de salida (0 = tamaño natural del recorte)" },
    { name: "output-height", type: "number",                     default: "0",      desc: "Alto del canvas de salida" },
    { name: "format",        type: '"png" | "jpeg" | "webp"',    default: '"png"',  desc: "Formato de imagen exportada" },
    { name: "quality",       type: "number",                     default: "0.92",   desc: "Calidad JPEG/WebP de 0 a 1" },
    { name: "label",         type: "string",                     default: "—",      desc: "Etiqueta opcional sobre el área de recorte" },
  ],

  "inline-edit": [
    { name: "value",       type: "string",                              default: "—",              desc: "Valor actual del campo" },
    { name: "placeholder", type: "string",                              default: "—",              desc: "Texto guía dentro del input" },
    { name: "type",        type: '"text" | "number" | "email" | "url"', default: '"text"',         desc: "Tipo del input de edición" },
    { name: "empty-text",  type: "string",                              default: '"Click to edit"', desc: "Texto mostrado cuando el valor está vacío" },
    { name: "maxlength",   type: "number",                              default: "0",              desc: "Límite de caracteres (0 = sin límite)" },
    { name: "name",        type: "string",                              default: "—",              desc: "Nombre para formularios nativos" },
    { name: "disabled",    type: "boolean",                             default: "false",          desc: "Deshabilita la edición" },
    { name: "readonly",    type: "boolean",                             default: "false",          desc: "Solo lectura; no abre el campo" },
    { name: "required",    type: "boolean",                             default: "false",          desc: "Campo obligatorio" },
    { name: "editing",     type: "boolean",                             default: "false",          desc: "Activa el modo edición programáticamente" },
  ],

  kanban: [
    { name: "columns",  type: "SpKanbanColumn[]", default: "[]",     desc: "Columnas con sus tarjetas: { id, title, color?, cards[], wip? }" },
    { name: "addable",  type: "boolean",          default: "true",   desc: "Muestra botón Añadir tarjeta en cada columna" },
    { name: "disabled", type: "boolean",          default: "false",  desc: "Deshabilita el drag & drop" },
  ],

  mention: [
    { name: "items",        type: "SpMentionItem[]", default: "[]",               desc: "Usuarios/items disponibles para mencionar: { id, label, avatar?, description? }" },
    { name: "value",        type: "string",          default: '""',               desc: "Valor actual del input de texto" },
    { name: "placeholder",  type: "string",          default: '"Type @ to mention…"', desc: "Placeholder del input" },
    { name: "label",        type: "string",          default: "—",                desc: "Etiqueta del campo" },
    { name: "max-results",  type: "number",          default: "6",                desc: "Máximo de sugerencias mostradas" },
    { name: "disabled",     type: "boolean",         default: "false",            desc: "Deshabilita el input" },
  ],

  "menu-root": [
    { name: "disabled", type: "boolean", default: "false", desc: "Deshabilita el menú completo" },
  ],

  "notification-center": [
    { name: "notifications", type: "SpNotification[]", default: "[]",                  desc: "Lista de notificaciones: { id, title, body?, time?, read?, type?, icon? }" },
    { name: "title",         type: "string",           default: '"Notifications"',     desc: "Título del panel de notificaciones" },
    { name: "empty-text",    type: "string",           default: '"You\'re all caught up!"', desc: "Mensaje cuando no hay notificaciones" },
  ],

  onboarding: [
    { name: "steps",         type: "SpOnboardingStep[]", default: "[]",             desc: "Pasos del onboarding: { title, description, image?, icon? }" },
    { name: "open",          type: "boolean",           default: "false",          desc: "Controla la visibilidad del modal" },
    { name: "step",          type: "number",            default: "0",              desc: "Índice del paso actual (0-based)" },
    { name: "finish-label",  type: "string",            default: '"Get started"',  desc: "Texto del botón en el último paso" },
    { name: "dismissable",   type: "boolean",           default: "true",           desc: "Muestra botón de cerrar / saltar" },
  ],

  "pdf-viewer": [
    { name: "src",     type: "string",  default: "—",             desc: "URL del archivo PDF (mismo origen o CORS habilitado)" },
    { name: "height",  type: "number",  default: "600",           desc: "Altura del visor en px" },
    { name: "toolbar", type: "boolean", default: "true",          desc: "Muestra barra de herramientas con botón de descarga" },
    { name: "label",   type: "string",  default: '"PDF document"', desc: "Título accesible del iframe" },
  ],

  "phone-input": [
    { name: "value",       type: "string",  default: '""',   desc: "Número de teléfono sin prefijo" },
    { name: "country",     type: "string",  default: '"US"', desc: "Código de país ISO 3166-1 alpha-2 inicial" },
    { name: "label",       type: "string",  default: "—",    desc: "Etiqueta del campo" },
    { name: "placeholder", type: "string",  default: "—",    desc: "Placeholder del input" },
    { name: "error",       type: "string",  default: "—",    desc: "Mensaje de error" },
    { name: "hint",        type: "string",  default: "—",    desc: "Texto de ayuda" },
    { name: "name",        type: "string",  default: "—",    desc: "Nombre para FormData" },
    { name: "disabled",    type: "boolean", default: "false", desc: "Deshabilita el input" },
    { name: "required",    type: "boolean", default: "false", desc: "Campo obligatorio" },
  ],

  "resizable-panel": [
    { name: "direction",    type: '"horizontal" | "vertical"', default: '"horizontal"', desc: "Dirección de la división" },
    { name: "initial-size", type: "number",                    default: "50",           desc: "Tamaño inicial del primer panel en %" },
    { name: "min-size",     type: "number",                    default: "10",           desc: "Tamaño mínimo del primer panel en %" },
    { name: "max-size",     type: "number",                    default: "90",           desc: "Tamaño máximo del primer panel en %" },
  ],

  "rich-text-editor": [
    { name: "label",       type: "string",  default: "—",              desc: "Etiqueta mostrada sobre el toolbar" },
    { name: "value",       type: "string",  default: '""',             desc: "Contenido HTML del editor" },
    { name: "placeholder", type: "string",  default: '"Write something…"', desc: "Placeholder cuando el editor está vacío" },
    { name: "min-height",  type: "number",  default: "160",            desc: "Altura mínima del editor en px" },
    { name: "maxlength",   type: "number",  default: "0",              desc: "Límite de caracteres; muestra contador (0 = sin límite)" },
    { name: "disabled",    type: "boolean", default: "false",          desc: "Deshabilita el editor" },
    { name: "readonly",    type: "boolean", default: "false",          desc: "Modo solo lectura sin toolbar" },
  ],

  "segmented-control": [
    { name: "value",      type: "string",                   default: '""',    desc: "Valor de la opción seleccionada" },
    { name: "options",    type: "{ value, label, disabled?, icon? }[]", default: "[]", desc: "Opciones del control (se asigna por JS)" },
    { name: "size",       type: '"sm" | "md" | "lg"',       default: '"md"',  desc: "Tamaño del control" },
    { name: "full-width", type: "boolean",                  default: "false", desc: "Ocupa el 100% del ancho" },
    { name: "name",       type: "string",                   default: "—",     desc: "Nombre para formularios nativos" },
    { name: "disabled",   type: "boolean",                  default: "false", desc: "Deshabilita todas las opciones" },
    { name: "required",   type: "boolean",                  default: "false", desc: "Campo obligatorio" },
  ],

  "select-root": [
    { name: "value",    type: "string",  default: '""',    desc: "Valor de la opción seleccionada" },
    { name: "disabled", type: "boolean", default: "false", desc: "Deshabilita el select compuesto" },
  ],

  signature: [
    { name: "width",         type: "number",  default: "400",       desc: "Ancho del canvas en px" },
    { name: "height",        type: "number",  default: "200",       desc: "Alto del canvas en px" },
    { name: "pen-color",     type: "string",  default: '"#000000"', desc: "Color del trazo" },
    { name: "pen-width",     type: "number",  default: "2",         desc: "Grosor del trazo en px" },
    { name: "label",         type: "string",  default: "—",         desc: "Etiqueta sobre el canvas" },
    { name: "show-controls", type: "boolean", default: "true",      desc: "Muestra controles de color y grosor" },
    { name: "max-undo",      type: "number",  default: "20",        desc: "Número máximo de pasos de deshacer" },
    { name: "disabled",      type: "boolean", default: "false",     desc: "Deshabilita el dibujo" },
  ],

  tour: [
    { name: "steps",  type: "SpTourStep[]", default: "[]",    desc: "Pasos del tour: { target (selector CSS), title?, content, placement? }" },
    { name: "active", type: "boolean",      default: "false", desc: "Inicia o detiene el tour" },
    { name: "step",   type: "number",       default: "0",     desc: "Índice del paso actual (0-based)" },
  ],

  transfer: [
    { name: "source",       type: "SpTransferItem[]", default: "[]",    desc: "Todos los ítems disponibles: { value, label, disabled? }" },
    { name: "value",        type: "string[]",         default: "[]",    desc: "Valores en el panel derecho (seleccionados)" },
    { name: "source-title", type: "string",           default: "—",     desc: "Título del panel izquierdo (disponibles)" },
    { name: "target-title", type: "string",           default: "—",     desc: "Título del panel derecho (seleccionados)" },
    { name: "searchable",   type: "boolean",          default: "true",  desc: "Muestra campos de búsqueda en ambos paneles" },
    { name: "disabled",     type: "boolean",          default: "false", desc: "Deshabilita todas las interacciones" },
  ],

  "visually-hidden": [
    { name: "focusable", type: "boolean", default: "false", desc: "Cuando true, el contenido se vuelve visible al recibir foco (patrón skip-link)" },
  ],

  // ── Nuevos componentes ────────────────────────────────────────────────────

  anchor: [
    { name: "items",     type: "{ id: string; title: string; children?: ... }[]", default: "[]",   desc: "Lista de anclas con id, título e hijos opcionales" },
    { name: "offset",    type: "number",                                           default: "80",    desc: "Offset en px del scroll (útil con navbar fijo)" },
    { name: "container", type: "string",                                           default: '""',    desc: "Selector CSS del contenedor de scroll (vacío = window)" },
  ],

  "back-top": [
    { name: "visibility-height", type: "number",                                                   default: "400",          desc: "Scroll mínimo en px para que aparezca el botón" },
    { name: "position",          type: '"bottom-right" | "bottom-left" | "bottom-center"',         default: '"bottom-right"', desc: "Posición fija del botón en pantalla" },
    { name: "duration",          type: "number",                                                   default: "300",          desc: "Duración de la animación de scroll en ms" },
  ],

  menubar: [
    { name: "menus", type: "{ label: string; items: SpMenubarItem[] }[]", default: "[]", desc: "Array de menús con sus ítems, separadores, íconos y submenús" },
  ],

  cascader: [
    { name: "options",     type: "{ value, label, disabled?, children? }[]", default: "[]",            desc: "Árbol de opciones jerárquicas" },
    { name: "value",       type: "string[]",                                  default: "[]",            desc: "Valor seleccionado como array de valores de ruta" },
    { name: "placeholder", type: "string",                                    default: '"Seleccionar"', desc: "Texto cuando no hay selección" },
    { name: "clearable",   type: "boolean",                                   default: "true",          desc: "Muestra botón para limpiar la selección" },
    { name: "disabled",    type: "boolean",                                   default: "false",         desc: "Deshabilita el componente" },
    { name: "separator",   type: "string",                                    default: '" / "',         desc: "Separador entre niveles en el display" },
  ],

  "date-range-picker": [
    { name: "start",       type: "string",  default: "—",                      desc: "Fecha inicio ISO (YYYY-MM-DD)" },
    { name: "end",         type: "string",  default: "—",                      desc: "Fecha fin ISO (YYYY-MM-DD)" },
    { name: "placeholder", type: "string",  default: '"Seleccionar rango"',    desc: "Texto cuando no hay selección" },
    { name: "min",         type: "string",  default: "—",                      desc: "Fecha mínima seleccionable (ISO)" },
    { name: "max",         type: "string",  default: "—",                      desc: "Fecha máxima seleccionable (ISO)" },
    { name: "disabled",    type: "boolean", default: "false",                  desc: "Deshabilita el componente" },
  ],

  "date-time-picker": [
    { name: "value",       type: "string",  default: "—",               desc: "ISO datetime YYYY-MM-DDTHH:mm" },
    { name: "placeholder", type: "string",  default: '"Fecha y hora"',  desc: "Texto sin valor seleccionado" },
    { name: "min",         type: "string",  default: "—",               desc: "Fecha mínima (ISO)" },
    { name: "max",         type: "string",  default: "—",               desc: "Fecha máxima (ISO)" },
    { name: "disabled",    type: "boolean", default: "false",           desc: "Deshabilita el componente" },
    { name: "seconds",     type: "boolean", default: "false",           desc: "Incluye selector de segundos" },
  ],

  "masked-input": [
    { name: "mask",        type: "string",  default: "—",     desc: "Máscara de formato. Tokens: 9=dígito, a=letra, *=cualquier" },
    { name: "value",       type: "string",  default: "—",     desc: "Valor sin máscara (solo caracteres ingresados)" },
    { name: "placeholder", type: "string",  default: "—",     desc: "Texto de ayuda" },
    { name: "show-mask",   type: "boolean", default: "false", desc: "Muestra la máscara como hint debajo del input" },
    { name: "disabled",    type: "boolean", default: "false", desc: "Deshabilita el campo" },
    { name: "invalid",     type: "boolean", default: "false", desc: "Estado de error visual" },
    { name: "error",       type: "string",  default: "—",     desc: "Mensaje de error" },
  ],

  "month-picker": [
    { name: "value",       type: "string",  default: "—",                   desc: "Valor en formato YYYY-MM" },
    { name: "placeholder", type: "string",  default: '"Seleccionar mes"',   desc: "Texto sin selección" },
    { name: "min",         type: "string",  default: "—",                   desc: "Mínimo seleccionable (YYYY-MM)" },
    { name: "max",         type: "string",  default: "—",                   desc: "Máximo seleccionable (YYYY-MM)" },
    { name: "disabled",    type: "boolean", default: "false",               desc: "Deshabilita el componente" },
  ],

  "password-input": [
    { name: "value",         type: "string",  default: "—",                    desc: "Valor actual del campo" },
    { name: "placeholder",   type: "string",  default: '"Contraseña"',         desc: "Texto de ayuda" },
    { name: "show-strength", type: "boolean", default: "false",                desc: "Muestra la barra de fortaleza de contraseña" },
    { name: "disabled",      type: "boolean", default: "false",                desc: "Deshabilita el campo" },
    { name: "invalid",       type: "boolean", default: "false",                desc: "Estado de error visual" },
    { name: "name",          type: "string",  default: "—",                    desc: "Nombre del campo para formularios nativos" },
    { name: "autocomplete",  type: "string",  default: '"current-password"',   desc: "Valor del atributo autocomplete" },
  ],

  "search-input": [
    { name: "value",       type: "string",              default: "—",          desc: "Valor actual del campo" },
    { name: "placeholder", type: "string",              default: '"Buscar..."', desc: "Texto de ayuda" },
    { name: "debounce",    type: "number",              default: "300",         desc: "Delay en ms antes de emitir sp-search" },
    { name: "loading",     type: "boolean",             default: "false",       desc: "Muestra spinner en lugar del icono de buscar" },
    { name: "clearable",   type: "boolean",             default: "true",        desc: "Muestra botón clear cuando hay texto" },
    { name: "disabled",    type: "boolean",             default: "false",       desc: "Deshabilita el campo" },
    { name: "size",        type: '"sm" | "md" | "lg"', default: '"md"',        desc: "Tamaño del componente" },
  ],

  "tree-select": [
    { name: "options",     type: "{ value, label, disabled?, children? }[]", default: "[]",            desc: "Árbol de datos seleccionables" },
    { name: "value",       type: "string | string[]",                         default: "—",             desc: "Valor seleccionado (string en single, string[] en multiple)" },
    { name: "multiple",    type: "boolean",                                   default: "false",         desc: "Permite selección múltiple con checkboxes" },
    { name: "searchable",  type: "boolean",                                   default: "true",          desc: "Muestra campo de búsqueda en el dropdown" },
    { name: "placeholder", type: "string",                                    default: '"Seleccionar"', desc: "Texto sin selección" },
    { name: "disabled",    type: "boolean",                                   default: "false",         desc: "Deshabilita el componente" },
  ],

  fab: [
    { name: "icon",     type: "string",                                                       default: '"+"',          desc: "Icono/emoji del botón principal" },
    { name: "position", type: '"bottom-right" | "bottom-left" | "top-right" | "top-left"',   default: '"bottom-right"', desc: "Posición fija del FAB en pantalla" },
    { name: "size",     type: '"sm" | "md" | "lg"',                                           default: '"md"',         desc: "Tamaño del botón" },
    { name: "actions",  type: "{ icon, label?, onClick?, disabled? }[]",                      default: "[]",           desc: "Acciones del speed dial" },
    { name: "color",    type: "string",                                                       default: "—",            desc: "Color de fondo CSS (reemplaza color primario)" },
    { name: "label",    type: "string",                                                       default: '"Acción flotante"', desc: "Aria-label accesible" },
  ],

  toolbar: [
    { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', desc: "Dirección del toolbar" },
    { name: "label",       type: "string",                     default: '"Toolbar"',   desc: "Aria-label accesible del toolbar" },
    { name: "flush",       type: "boolean",                    default: "false",       desc: "Sin borde ni fondo (modo inline)" },
  ],

  "floating-panel": [
    { name: "title",     type: "string",  default: '"Panel"', desc: "Título en la barra del panel" },
    { name: "x",         type: "number",  default: "100",     desc: "Posición inicial X (px desde left)" },
    { name: "y",         type: "number",  default: "100",     desc: "Posición inicial Y (px desde top)" },
    { name: "width",     type: "number",  default: "300",     desc: "Ancho inicial en px" },
    { name: "height",    type: "number",  default: "200",     desc: "Alto inicial en px" },
    { name: "collapsed", type: "boolean", default: "false",   desc: "Colapsa el cuerpo, solo muestra la barra de título" },
    { name: "closable",  type: "boolean", default: "true",    desc: "Muestra botón de cerrar" },
    { name: "resizable", type: "boolean", default: "true",    desc: "Permite resize desde esquina inferior derecha" },
    { name: "open",      type: "boolean", default: "true",    desc: "Controla la visibilidad del panel" },
  ],

  "hover-card": [
    { name: "placement",   type: '"top" | "bottom" | "left" | "right"', default: '"bottom"', desc: "Posición de la card relativa al trigger" },
    { name: "open-delay",  type: "number",                               default: "300",      desc: "Delay en ms antes de mostrar la card" },
    { name: "close-delay", type: "number",                               default: "150",      desc: "Delay en ms antes de ocultar la card" },
  ],

  banner: [
    { name: "variant",    type: '"info" | "success" | "warning" | "error"', default: '"info"', desc: "Tipo de banner" },
    { name: "title",      type: "string",                                    default: "—",      desc: "Texto en negrita" },
    { name: "message",    type: "string",                                    default: "—",      desc: "Descripción del banner" },
    { name: "dismissable",type: "boolean",                                   default: "true",   desc: "Muestra botón de cierre" },
    { name: "sticky",     type: "boolean",                                   default: "false",  desc: "Posición sticky al top de la pantalla" },
    { name: "icon",       type: "boolean",                                   default: "true",   desc: "Muestra icono según el tipo" },
  ],

  "progress-circle": [
    { name: "value",         type: "number",                                       default: "0",       desc: "Porcentaje 0–100" },
    { name: "size",          type: "number",                                       default: "80",      desc: "Tamaño del círculo en px" },
    { name: "stroke-width",  type: "number",                                       default: "8",       desc: "Grosor del trazo SVG" },
    { name: "color",         type: "string",                                       default: "—",       desc: "Color CSS del trazo (usa --sp-primary por defecto)" },
    { name: "track-color",   type: "string",                                       default: "—",       desc: "Color de la pista de fondo" },
    { name: "status",        type: '"default" | "success" | "warning" | "error"', default: '"default"', desc: "Estado semántico (modifica color)" },
    { name: "show-value",    type: "boolean",                                      default: "true",    desc: "Muestra el porcentaje en el centro" },
    { name: "label",         type: "string",                                       default: "—",       desc: "Texto secundario debajo del porcentaje" },
    { name: "indeterminate", type: "boolean",                                      default: "false",   desc: "Animación infinita de carga" },
  ],

  result: [
    { name: "status",   type: '"success" | "error" | "warning" | "info" | "404" | "403" | "500"', default: '"info"', desc: "Estado o código HTTP que determina el icono y estilo" },
    { name: "title",    type: "string",                                                             default: "—",      desc: "Título principal del resultado" },
    { name: "subtitle", type: "string",                                                             default: "—",      desc: "Descripción secundaria" },
  ],

  "chat-bubble": [
    { name: "message",     type: "string",                          default: "—",      desc: "Texto del mensaje" },
    { name: "avatar",      type: "string",                          default: "—",      desc: "URL del avatar del remitente" },
    { name: "name",        type: "string",                          default: "—",      desc: "Nombre del remitente" },
    { name: "time",        type: "string",                          default: "—",      desc: "Hora o fecha de envío" },
    { name: "mine",        type: "boolean",                         default: "false",  desc: "Si el mensaje es del usuario actual (derecha)" },
    { name: "status",      type: '"sent" | "delivered" | "read"',  default: '"sent"', desc: "Estado del mensaje (solo si mine=true)" },
    { name: "typing",      type: "boolean",                         default: "false",  desc: "Muestra indicador de escribiendo..." },
    { name: "show-avatar", type: "boolean",                         default: "true",   desc: "Muestra el avatar del remitente" },
  ],

  descriptions: [
    { name: "items",   type: "{ label: string; value: unknown; span?: number }[]", default: "[]",       desc: "Pares clave-valor a mostrar" },
    { name: "title",   type: "string",                                             default: "—",        desc: "Título opcional encima de la tabla" },
    { name: "columns", type: "number",                                             default: "2",        desc: "Número de columnas" },
    { name: "variant", type: '"default" | "bordered"',                            default: '"default"', desc: "Estilo visual" },
    { name: "size",    type: '"sm" | "md" | "lg"',                                default: '"md"',     desc: "Tamaño del texto y padding" },
    { name: "colon",   type: "boolean",                                            default: "true",     desc: "Agrega ':' al final de cada label" },
  ],

  "diff-viewer": [
    { name: "old-text",  type: "string",               default: "—",         desc: "Texto original" },
    { name: "new-text",  type: "string",               default: "—",         desc: "Texto modificado" },
    { name: "mode",      type: '"unified" | "split"',  default: '"unified"', desc: "Modo de visualización" },
    { name: "filename",  type: "string",               default: "—",         desc: "Nombre del archivo mostrado en el encabezado" },
  ],

  heatmap: [
    { name: "data",   type: "{ date: string; value: number }[]",        default: "[]",      desc: "Array de datos con fecha ISO y valor numérico" },
    { name: "weeks",  type: "number",                                    default: "52",      desc: "Semanas hacia atrás a mostrar" },
    { name: "color",  type: '"green" | "blue" | "purple" | "orange"',  default: '"green"', desc: "Tema de colores del mapa de calor" },
    { name: "legend", type: "boolean",                                   default: "true",    desc: "Muestra leyenda de niveles" },
    { name: "size",   type: '"sm" | "md" | "lg"',                       default: '"md"',    desc: "Tamaño de cada celda" },
  ],

  "image-compare": [
    { name: "before",       type: "string", default: "—",     desc: "URL de la imagen izquierda (antes)" },
    { name: "after",        type: "string", default: "—",     desc: "URL de la imagen derecha (después)" },
    { name: "before-label", type: "string", default: "—",     desc: "Etiqueta sobre la imagen izquierda" },
    { name: "after-label",  type: "string", default: "—",     desc: "Etiqueta sobre la imagen derecha" },
    { name: "initial",      type: "number", default: "50",    desc: "Posición inicial del slider 0–100" },
    { name: "height",       type: "string", default: '"400px"', desc: "Altura del contenedor" },
  ],

  lightbox: [
    { name: "images",      type: "{ src, thumb?, alt?, caption? }[]", default: "[]",   desc: "Array de imágenes de la galería" },
    { name: "index",       type: "number",                            default: "0",    desc: "Índice inicial al abrir" },
    { name: "open",        type: "boolean",                           default: "false", desc: "Controla si el lightbox está abierto" },
    { name: "show-thumbs", type: "boolean",                           default: "true",  desc: "Muestra la tira de miniaturas" },
  ],

  sparkline: [
    { name: "values",       type: "number[]",               default: "[]",              desc: "Array de valores a graficar" },
    { name: "type",         type: '"line" | "bar" | "area"', default: '"line"',         desc: "Tipo de gráfico" },
    { name: "width",        type: "number",                 default: "80",              desc: "Ancho en px" },
    { name: "height",       type: "number",                 default: "28",              desc: "Alto en px" },
    { name: "color",        type: "string",                 default: "var(--sp-primary)", desc: "Color de la línea o barras" },
    { name: "fill",         type: "boolean",                default: "false",           desc: "Relleno bajo la línea (solo type=line)" },
    { name: "stroke-width", type: "number",                 default: "1.5",             desc: "Grosor de la línea" },
  ],

  collapsible: [
    { name: "open",     type: "boolean", default: "false", desc: "Controla si el contenido está expandido" },
    { name: "disabled", type: "boolean", default: "false", desc: "Deshabilita la interacción de toggle" },
  ],

  "credit-card": [
    { name: "number",      type: "string",                                              default: "—",        desc: "Número de la tarjeta (se detecta la red automáticamente)" },
    { name: "holder",      type: "string",                                              default: '"NOMBRE APELLIDO"', desc: "Nombre del titular" },
    { name: "expiry",      type: "string",                                              default: '"MM/YY"',  desc: "Fecha de expiración" },
    { name: "cvv",         type: "string",                                              default: "—",        desc: "Código de seguridad" },
    { name: "flipped",     type: "boolean",                                             default: "false",    desc: "Muestra la cara trasera (CVV)" },
    { name: "interactive", type: "boolean",                                             default: "false",    desc: "El hover voltea la tarjeta automáticamente" },
    { name: "masked",      type: "boolean",                                             default: "false",    desc: "Oculta dígitos del número excepto los últimos 4" },
    { name: "theme",       type: '"purple" | "dark" | "blue" | "green" | "gold" | "rose" | "custom"', default: '"purple"', desc: "Tema de color del gradiente" },
    { name: "size",        type: '"sm" | "md" | "lg"',                                 default: '"md"',     desc: "Tamaño físico de la tarjeta" },
  ],

  "aspect-ratio": [
    { name: "ratio", type: 'string | number', default: '"16/9"', desc: 'Relación de aspecto: "16/9", "4/3", "1/1" o número decimal' },
  ],

  layout: [
    { name: "direction", type: '"column" | "row"',                    default: '"column"',  desc: "Dirección del flex (para sp-stack)" },
    { name: "gap",       type: "string",                              default: '"8px"',     desc: "Valor CSS del gap entre elementos" },
    { name: "align",     type: '"start" | "center" | "end" | "stretch"', default: '"stretch"', desc: "align-items del contenedor" },
    { name: "justify",   type: '"start" | "center" | "end" | "between" | "around"', default: '"start"', desc: "justify-content del contenedor" },
    { name: "wrap",      type: "boolean",                             default: "false",     desc: "Permite wrapping de elementos (flex-wrap)" },
    { name: "full",      type: "boolean",                             default: "false",     desc: "width: 100%" },
  ],

  markdown: [
    { name: "content", type: "string", default: "—", desc: "Texto Markdown a renderizar (alternativa al slot)" },
  ],

  watermark: [
    { name: "text",    type: "string", default: '"CONFIDENCIAL"',    desc: "Texto de la marca de agua" },
    { name: "image",   type: "string", default: "—",                 desc: "URL de imagen (reemplaza el texto)" },
    { name: "opacity", type: "number", default: "0.15",              desc: "Opacidad de la marca (0–1)" },
    { name: "rotate",  type: "number", default: "-22",               desc: "Rotación en grados" },
    { name: "gap-x",   type: "number", default: "200",               desc: "Espacio horizontal entre repeticiones (px)" },
    { name: "gap-y",   type: "number", default: "140",               desc: "Espacio vertical entre repeticiones (px)" },
    { name: "font",    type: "string", default: '"14px sans-serif"', desc: "Fuente del texto" },
    { name: "color",   type: "string", default: '"#000"',            desc: "Color del texto" },
  ],

  "audio-player": [
    { name: "src",     type: "string",  default: "—",     desc: "URL del archivo de audio" },
    { name: "title",   type: "string",  default: "—",     desc: "Título de la pista" },
    { name: "artist",  type: "string",  default: "—",     desc: "Nombre del artista" },
    { name: "cover",   type: "string",  default: "—",     desc: "URL de la imagen de portada" },
    { name: "autoplay",type: "boolean", default: "false",  desc: "Reproduce automáticamente al cargar" },
    { name: "loop",    type: "boolean", default: "false",  desc: "Repite la pista al terminar" },
  ],

  "video-player": [
    { name: "src",     type: "string",  default: "—",     desc: "URL del archivo de video" },
    { name: "poster",  type: "string",  default: "—",     desc: "Imagen de previsualización" },
    { name: "autoplay",type: "boolean", default: "false",  desc: "Reproduce automáticamente" },
    { name: "loop",    type: "boolean", default: "false",  desc: "Repite el video al terminar" },
    { name: "muted",   type: "boolean", default: "false",  desc: "Silenciado inicialmente" },
  ],

  "code-block": [
    { name: "code",         type: "string",  default: "—",     desc: "Código a mostrar" },
    { name: "language",     type: "string",  default: '"js"',   desc: "Lenguaje para syntax highlighting" },
    { name: "filename",     type: "string",  default: "—",     desc: "Nombre del archivo (mostrado en header)" },
    { name: "line-numbers", type: "boolean", default: "true",  desc: "Muestra numeración de líneas" },
    { name: "copyable",     type: "boolean", default: "true",  desc: "Muestra botón de copiar" },
    { name: "max-height",   type: "string",  default: "—",     desc: "Altura máxima con scroll (valor CSS)" },
  ],

  "code-editor": [
    { name: "value",    type: "string",  default: "—",    desc: "Código editable" },
    { name: "language", type: "string",  default: '"js"',  desc: "Lenguaje para syntax highlighting" },
    { name: "filename", type: "string",  default: "—",    desc: "Nombre del archivo en la barra" },
    { name: "readonly", type: "boolean", default: "false", desc: "Solo lectura (no editable)" },
    { name: "tab-size", type: "number",  default: "2",    desc: "Tamaño de la indentación en espacios" },
  ],

  "dnd-zone": [
    { name: "items",       type: "{ id: string; label: string; data?: unknown }[]", default: "[]",                 desc: "Items en la zona" },
    { name: "group",       type: "string",                                          default: '"default"',           desc: "Nombre del grupo (solo se aceptan drops del mismo grupo)" },
    { name: "placeholder", type: "string",                                          default: '"Arrastra items aquí"', desc: "Texto cuando la zona está vacía" },
    { name: "zone-id",     type: "string",                                          default: "—",                  desc: "Identificador único de la zona" },
  ],

  gantt: [
    { name: "tasks", type: "{ id, name, start, end, color?, progress? }[]", default: "[]",     desc: "Array de tareas con fechas ISO y progreso opcional" },
    { name: "zoom",  type: '"day" | "week" | "month"',                      default: '"week"', desc: "Nivel de zoom del diagrama" },
    { name: "title", type: "string",                                         default: "—",      desc: "Título del encabezado del Gantt" },
  ],

  "form-field": [
    { name: "label",     type: "string",  default: "—",      desc: "Texto del label" },
    { name: "error",     type: "string",  default: "—",      desc: "Mensaje de error; oculta el hint" },
    { name: "hint",      type: "string",  default: "—",      desc: "Texto de ayuda bajo el control" },
    { name: "required",  type: "boolean", default: "false",  desc: "Muestra asterisco de requerido" },
    { name: "disabled",  type: "boolean", default: "false",  desc: "Atenúa el campo completo" },
    { name: "label-for", type: "string",  default: "—",      desc: "ID del control para asociar el label" },
  ],

  "progress-bar": [
    { name: "value",         type: "number",                                       default: "0",         desc: "Valor actual (0 .. max)" },
    { name: "max",           type: "number",                                       default: "100",       desc: "Valor máximo" },
    { name: "variant",       type: '"primary" | "success" | "warning" | "danger"', default: '"primary"', desc: "Estilo visual de la barra" },
    { name: "indeterminate", type: "boolean",                                      default: "false",     desc: "Animación infinita cuando no se conoce el progreso" },
    { name: "label",         type: "string",                                       default: "—",         desc: "Texto sobre la barra" },
    { name: "show-value",    type: "boolean",                                      default: "false",     desc: "Muestra el porcentaje calculado" },
    { name: "striped",       type: "boolean",                                      default: "false",     desc: "Aplica patrón rayado" },
    { name: "animated",      type: "boolean",                                      default: "false",     desc: "Anima el patrón rayado (requiere striped)" },
    { name: "height",        type: "number",                                       default: "—",         desc: "Alto de la barra en px" },
  ],

  "org-chart": [
    { name: "data",        type: "{ id, name, role?, avatar?, color?, children? }", default: "—", desc: "Nodo raíz del árbol organizacional" },
    { name: "selected-id", type: "string",                                          default: "—", desc: "ID del nodo seleccionado actualmente" },
  ],

  "sortable-list": [
    { name: "items",    type: "{ id, label, description?, icon?, disabled? }[]", default: "[]",   desc: "Array de ítems de la lista" },
    { name: "disabled", type: "boolean",                                          default: "false", desc: "Deshabilita el drag & drop" },
    { name: "handles",  type: "boolean",                                          default: "false", desc: "Muestra handle explícito en lugar de arrastrar toda la fila" },
  ],

  "virtual-list": [
    { name: "items",       type: "unknown[]", default: "[]",     desc: "Array de datos a renderizar" },
    { name: "item-height", type: "number",    default: "48",     desc: "Altura fija de cada ítem en px" },
    { name: "buffer",      type: "number",    default: "3",      desc: "Ítems extra a renderizar fuera del viewport" },
    { name: "height",      type: "string",    default: '"400px"', desc: "Altura del contenedor con scroll" },
  ],
};
