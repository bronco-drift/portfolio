import type { LocalizedString } from "./i18n";

export type LuminaBlock =
  | { type: "paragraph"; body: LocalizedString }
  | { type: "code"; code: string }
  | { type: "list"; items: LocalizedString[] };

export type LuminaSection = {
  id: string;
  heading: LocalizedString;
  blocks: LuminaBlock[];
};

export const luminaSections: LuminaSection[] = [
  {
    id: "what",
    heading: { en: "What Lumina is", es: "Qué es Lumina" },
    blocks: [
      {
        type: "paragraph",
        body: {
          en: "Lumina isn't a palette — it's a way of resolving the interface. The underlying rule is that the interface disappears and the content carries the weight. Near-white, near-black ink, a scale of grays, and color only when something is happening.",
          es: "Lumina no es una paleta — es una forma de resolver la interfaz. La regla de fondo es que la interfaz desaparezca y el contenido lleve el peso. Blanco casi puro, tinta casi negra, escala de grises, y color solo cuando algo pasa.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "It grew out of a practical constraint. In a multi-tenant product, if the chrome had been visually loud, every profile would have felt 'generic Lumina' instead of 'mine.' The neutrality isn't minimalism as fashion — it's what lets the actual content (the business, the guide, the map) do the talking.",
          es: "Nació de una restricción práctica. En un producto multi-tenant, si el chrome fuera visualmente fuerte, cada perfil se sentiría 'genérico de Lumina' en vez de 'mío'. La neutralidad no es minimalismo por moda — es lo que deja que el contenido real (el negocio, la guía, el mapa) haga el trabajo.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "It carried over to other projects because it held the same thesis: a working tool doesn't need to seduce, it needs to disappear. And an important nuance — Lumina is minimalist in the chrome, not in the content. A document with nine KPIs and twenty plates can be Lumina; a landing with two lines can be Lumina too. What stays quiet is the frame, not what's inside it.",
          es: "Se extendió después a otros proyectos porque cumplía la misma tesis: una herramienta de trabajo no necesita seducir, necesita desaparecer. Y un matiz importante — Lumina es minimalista en el chrome, no en el contenido. Un documento con nueve KPIs y veinte láminas puede ser Lumina; una landing con dos líneas también. Lo que queda silencioso es el marco, no lo que hay adentro.",
        },
      },
    ],
  },
  {
    id: "chromatic-rule",
    heading: {
      en: "The matrix rule: chroma zero",
      es: "La regla matriz: cromía cero",
    },
    blocks: [
      {
        type: "paragraph",
        body: {
          en: "The whole palette is written as oklch(L 0 0) — the second value (chroma) is literally zero in every token. It's not 'gray chosen with good taste,' it's the mathematical absence of color. Background, text, borders, cards, even the five chart colors are steps of lightness, not hue. A pie chart in Lumina is read by brightness, not by tint.",
          es: "Toda la paleta está escrita como oklch(L 0 0) — el segundo valor (chroma) es literalmente cero en cada token. No es 'gris elegido con buen gusto', es la ausencia matemática de color. Fondo, texto, bordes, cards, hasta los cinco colores de un gráfico son escalones de luminosidad, no matiz. Un gráfico de torta en Lumina se lee por claridad, no por matiz.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "One color survives, and it means something: the destructive red (delete, cancel). In variants that don't need a destructive action — a guide, a document — it's replaced by a slightly lighter gray for 'done.' Never two. If there were five decorative colors, that red would mean nothing. When color appears, it's the highest priority signal on screen.",
          es: "Un solo color sobrevive, y sirve para algo: el rojo destructivo (borrar, cancelar). En variantes que no necesitan una acción destructiva — una guía, un documento — se reemplaza por un gris apenas más claro para 'completado'. Nunca dos. Si hubiera cinco colores decorativos, ese rojo no significaría nada. Cuando aparece color, es la señal de máxima prioridad.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "The consequence: hierarchy has to come from somewhere else. Contrast, size, space, and typographic weight do the whole job that the corporate blue does in other apps. It's the hardest part of the system — when there's no decoration, any misalignment shows.",
          es: "La consecuencia: la jerarquía tiene que salir de otro lado. Contraste, tamaño, espacio y peso tipográfico hacen todo el trabajo que en otras apps hace el azul corporativo. Es la parte más difícil del sistema — cuando no hay decoración, cualquier desalineación se ve.",
        },
      },
    ],
  },
  {
    id: "tokens",
    heading: {
      en: "The tokens, to copy and paste",
      es: "Los tokens, para copiar y pegar",
    },
    blocks: [
      {
        type: "code",
        code: `:root {
  --bg:          oklch(1     0  0);        /* white */
  --fg:          oklch(0.145 0  0);        /* near-black ink */
  --muted:       oklch(0.97  0  0);        /* soft fill */
  --muted-fg:    oklch(0.556 0  0);        /* secondary text */
  --border:      oklch(0.922 0  0);        /* hairlines */
  --destructive: oklch(0.577 0.245 27.325); /* the only saturated one */
  --radius:      0.625rem;                 /* 10px — everything else derives from here */
}`,
      },
      {
        type: "paragraph",
        body: {
          en: "Six grays plus one red plus one radius. Everything else — card, sidebar, chart, button colors — derives from these. They're in oklch, a format where the first number is lightness as the eye perceives it. That's why the whole gray scale is built by moving a single number: 1 is white, 0.145 is ink. With #hex you'd have to guess that progression; here it's arithmetic.",
          es: "Seis grises + un rojo + un radio. Todo lo demás — colores de card, sidebar, chart, botones — se deriva de estos. Están en oklch, un formato donde el primer número es la claridad tal como la percibe el ojo. Por eso toda la escala de grises se arma moviendo un solo número: 1 es blanco, 0.145 es tinta. Con #hex habría que adivinar esa progresión; acá es aritmética.",
        },
      },
    ],
  },
  {
    id: "typography",
    heading: { en: "Typography — two fonts, fixed roles", es: "Tipografía — dos fuentes, roles fijos" },
    blocks: [
      {
        type: "paragraph",
        body: {
          en: "Geist for reading, Geist Mono for measuring. The rule applied without exception: what's data goes in mono; what's prose goes in sans. Coordinates, amounts, quantities, IDs, timestamps, section labels — mono. Anything that reads as a sentence — sans. It's functional, not aesthetic: when you scan a card, the eye separates what to read from what to verify. When you see 'way 12345678 · residential' in mono, you know without thinking it's an identifier, not a phrase.",
          es: "Geist para leer, Geist Mono para medir. La regla que se aplica sin excepción: lo que es dato lleva mono; lo que es prosa va en sans. Coordenadas, montos, cantidades, IDs, fechas, rótulos de sección — mono. Cualquier cosa que se lea de corrido — sans. Es funcional, no estético: al escanear una ficha, el ojo separa solo lo que se lee de lo que se verifica. Cuando ves 'way 12345678 · residential' en mono, sabés sin pensar que es un identificador y no una frase.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "No display font. Headings use the same sans family as body, distinguished by size and weight, never by a different typeface. --font-heading literally points to --font-sans. Titles carry tracking-tight (about -2%) — a tiny detail that shows: the letters draw slightly closer and the title stops looking like default text.",
          es: "Sin fuente de display. Los títulos usan la misma familia sans que el cuerpo, distinguidos por tamaño y peso, nunca por tipografía distinta. --font-heading literalmente apunta a --font-sans. Los títulos llevan tracking-tight (≈-2%) — un detalle mínimo que se nota: las letras se juntan apenas y el título deja de parecer texto por defecto.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "Weights: two, three at most. 400 for body, 500 for gentle emphasis, 600 sparingly for titles. Never 700+, never 300. A system with six weights looks inconsistent because nobody remembers which to use where.",
          es: "Pesos: dos, tres como máximo. 400 para cuerpo, 500 para énfasis suave, 600 apenas para títulos. Nunca 700+, nunca 300. Un sistema con seis pesos se ve inconsistente porque nadie se acuerda cuál usar dónde.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "The editorial variant. For projects with a document voice (guides, essays, proposals), Geist swaps for an editorial trio: Fraunces (serif) for headings, Instrument Sans for body, Fragment Mono for metadata. The rule doesn't change — each font still has one job and doesn't invade the others'. Only the flavor changes.",
          es: "La variante editorial. Para proyectos con voz de documento (guías, ensayos, propuestas), Geist se cambia por un trío editorial: Fraunces (serif) para títulos, Instrument Sans para cuerpo, Fragment Mono para metadatos. La regla no cambia — cada fuente sigue teniendo un trabajo y no invade el del otro. Solo cambia el sabor.",
        },
      },
    ],
  },
  {
    id: "elevation",
    heading: {
      en: "Borders instead of shadows",
      es: "Bordes en lugar de sombras",
    },
    blocks: [
      {
        type: "paragraph",
        body: {
          en: "A 1px border in the token color separates everything: cards, index rows, stepper stages, tables. Shadow is banned as decoration — shadow-none shows up 50 times in Lumina's code, against a handful of real shadows. Sometimes borders are drawn with ring-1 ring-foreground/10 — a hair of the text color at 10% opacity — so they auto-adapt to light or dark. In dark mode the border becomes oklch(1 0 0 / 10%) — transparent white, not a fixed gray. The border is light, not paint.",
          es: "Un borde de 1px del color del token separa todo: cards, filas de índice, etapas de stepper, tablas. La sombra está prohibida como decoración — shadow-none aparece 50 veces en el código de Lumina, contra un puñado de sombras reales. A veces los bordes se dibujan con ring-1 ring-foreground/10 — un pelo del color del texto al 10% — para que se adapten solos al claro/oscuro. En dark el borde queda oklch(1 0 0 / 10%): blanco transparente, no un gris fijo. El borde es luz, no pintura.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "Shadows exist where something actually floats. The active pill inside a segmented control (0 1px 2px rgba(0,0,0,.06)), the map's floating panels (0 2px 10px). There the shadow doesn't decorate — it says 'this element is above and can be closed.' Elevation as meaning, not texture.",
          es: "Las sombras existen donde algo de verdad flota. El pill activo de un segmented control (0 1px 2px rgba(0,0,0,.06)), los paneles flotantes del mapa (0 2px 10px). Ahí la sombra no adorna — dice 'este elemento está por encima y se puede cerrar'. Elevación como significado, no como textura.",
        },
      },
    ],
  },
  {
    id: "radius",
    heading: {
      en: "One radius, everything derived",
      es: "Un radio, todo derivado",
    },
    blocks: [
      {
        type: "paragraph",
        body: {
          en: "A single --radius: 0.625rem (10px), and everything else is computed by multiplying — ×0.6, ×0.8, ×1.4, ×1.8. Small buttons use the fraction, cards use the base, pills use 999px. Never a stray number.",
          es: "Un solo --radius: 0.625rem (10px), y el resto se calcula multiplicando — ×0.6, ×0.8, ×1.4, ×1.8. Los botones chicos usan la fracción, las cards el valor base, los pills 999px. Nunca un número suelto.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "Change one line and the personality of the whole app shifts. That's the leverage of deriving.",
          es: "Cambiás una línea y cambia la personalidad de toda la app. Esa es la ventaja de derivar.",
        },
      },
    ],
  },
  {
    id: "spacing",
    heading: {
      en: "Air as the main tool",
      es: "El aire como herramienta principal",
    },
    blocks: [
      {
        type: "paragraph",
        body: {
          en: "Air does the work that colored boxes would do in another design. Without thick borders and without section backgrounds, what separates things is space. The scale is multiples of four: gap-2 (8), gap-3 (12), gap-5 (20), gap-6 (24) inside; p-4 to p-6 for card padding; py-16 to py-24 for vertical separation between sections (mobile / desktop). Container widths: max-w-md (448px) for centered forms, max-w-2xl (672px) for prose, max-w-6xl (1152px) for landings.",
          es: "El aire hace el trabajo que en otro diseño harían cajas de colores. Sin bordes gruesos y sin fondos de sección, lo que separa las cosas es el espacio. La escala es múltiplos de cuatro: gap-2 (8), gap-3 (12), gap-5 (20), gap-6 (24) para separaciones internas; p-4 a p-6 para padding de card; py-16 a py-24 para separación vertical entre secciones (mobile / desktop). Anchos de container: max-w-md (448px) para forms centrados, max-w-2xl (672px) para prosa, max-w-6xl (1152px) para landings.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "Unwritten rule: if you're not sure how much space to leave, leave more. The air sells.",
          es: "Regla no escrita: si dudás cuánto espacio poner, poné más. El aire vende.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "Density is desktop-app density, not consumer-web density. Buttons are 32px tall by default (h-8), 24px for small — Linear-tier, not landing-page tier (which sits at 44–48px). Lumina assumes the user works inside the app every day, not a one-time visitor. When a control is used often, saving 10–12px per click adds up. The cosmetics of the 'chubby button' costs speed on every action.",
          es: "La densidad es densidad de app de escritorio, no de web de consumo. Los botones default miden 32px de alto (h-8), los chicos 24px — nivel Linear, no nivel landing (que suele estar en 44–48px). Lumina asume un usuario que trabaja adentro todos los días, no un visitante ocasional. Cuando un control se usa mucho, ahorrar 10–12px por click suma. La cosmética del 'botón gordo' se paga con velocidad perdida en cada acción.",
        },
      },
    ],
  },
  {
    id: "motion",
    heading: { en: "Motion as exception, not rule", es: "Motion como excepción, no como regla" },
    blocks: [
      {
        type: "paragraph",
        body: {
          en: "Of all the animations in the project, 42 are loading spinners and only 6 are decorative enter/exits. Standard duration is 200–300ms, easing defaults to ease-out. What's animated: opacity, background-color, border-color, subtle scale. Never animated: layout (width, height, top, left), gradients, filters — anything that costs reflow.",
          es: "De todas las animaciones del proyecto, 42 son spinners de carga y solo 6 son entradas/salidas decorativas. La duración estándar es 200–300ms, easing default ease-out. Lo que se anima: opacity, background-color, border-color, scale leve. Lo que nunca: layout (width, height, top, left), gradients, filters — todo lo que cuesta reflow.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "When a gesture needs presence — the thumb of a pill sliding, a card flipping — a soft spring is used (cubic-bezier(0.3, 1.2, 0.35, 1)), not a loud animation. Same spring reused across places so the app feels coherent.",
          es: "Cuando un gesto necesita presencia — el pulgar de un pill que se desliza, una tarjeta que da vuelta — se usa un resorte suave (cubic-bezier(0.3, 1.2, 0.35, 1)), no una animación bombástica. El mismo resorte se reusa en varios lugares para que la app se sienta coherente.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "prefers-reduced-motion is honored at the end of the stylesheet — a block that kills every transition and animation for anyone who has that setting on. Non-negotiable.",
          es: "prefers-reduced-motion se respeta al final del CSS — un bloque que mata todas las transiciones y animaciones para quien tiene esa preferencia. Innegociable.",
        },
      },
    ],
  },
  {
    id: "components",
    heading: { en: "Canonical components", es: "Componentes canónicos" },
    blocks: [
      {
        type: "paragraph",
        body: {
          en: "Card. Subtle border (or ring-1 ring-foreground/10), rounded-xl, bg-background, p-5. Hover changes only the border color — never a transform that lifts the card. Stability beats effect.",
          es: "Card. Border sutil (o ring-1 ring-foreground/10), rounded-xl, bg-background, p-5. El hover cambia solo el color del border — nunca un transform que suba la card. La estabilidad importa más que el efecto.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "Button. Four variants with hard rules: primary is solid (bg-foreground text-background) — maximum one per screen; outline for secondary actions; ghost for nav and 'Change'; destructive is red and rare. No gradients, no shadows, no huge icons inside buttons. If two solid black buttons sit next to each other, one of them wasn't important.",
          es: "Botón. Cuatro variantes con reglas duras: primary es sólido (bg-foreground text-background) — máximo uno por pantalla; outline para acciones secundarias; ghost para nav y 'Cambiar'; destructive rojo y raro. Sin gradientes, sin sombras, sin íconos gigantes adentro del botón. Si aparecen dos primarios sólidos negros juntos, uno de los dos no era importante.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "Input. Fixed height h-8 (32px) or h-10 (40px), subtle border, rounded-md. Focus: ring-3 ring-ring/50 border-ring — the border lights up slightly and a soft ring appears behind. No floating labels — label sits above in text-sm font-medium.",
          es: "Input. Altura fija h-8 (32px) o h-10 (40px), border sutil, rounded-md. Focus: ring-3 ring-ring/50 border-ring — el borde se ilumina apenas y aparece un ring suave detrás. Sin floating labels — el label va arriba en text-sm font-medium.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "Avatar / brandmark. Rounded square (rounded-2xl big, rounded-md small). bg-foreground text-background — inverted, black square with light content. Holds a lucide icon or initials. Fixed sizes: size-4 for footer, size-5 for header, size-20 for hero.",
          es: "Avatar / brandmark. Cuadrado con esquinas redondeadas (rounded-2xl en grande, rounded-md en chico). bg-foreground text-background — invertido, cuadrado negro con contenido claro. Contiene un ícono lucide o iniciales. Tamaños fijos: size-4 footer, size-5 header, size-20 hero.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "Icons: lucide-react strictly. Sizes size-3, size-4, size-5 (12/16/20px). strokeWidth={1.75} for decorative, {2} for emphasis. Never solid icons — always outline. Don't mix with other icon libraries.",
          es: "Íconos: lucide-react estrictamente. Tamaños size-3, size-4, size-5 (12/16/20px). strokeWidth={1.75} decorativos, {2} énfasis. Nunca íconos sólidos — siempre outline. No mezclar con otras librerías.",
        },
      },
    ],
  },
  {
    id: "patterns",
    heading: { en: "Interaction patterns", es: "Patrones de interacción" },
    blocks: [
      {
        type: "list",
        items: [
          {
            en: "Progressive. Never everything at once. A booking widget shows only the current step plus a summary of what's been chosen. A long form appears in pieces.",
            es: "Progresivo. Nunca todo a la vez. Un booking widget muestra solo el paso actual más un resumen de lo elegido. Un formulario largo aparece de a pedazos.",
          },
          {
            en: "Reversible. Every completed step leaves a 'Change' link to go back without losing progress. No one gets locked into a flow.",
            es: "Reversible. Cada paso completado deja un 'Cambiar' para volver sin perder progreso. Nadie queda encerrado en un flujo.",
          },
          {
            en: "Disable > hide. Taken slots in an agenda go gray but stay visible — they give context. Hiding them would erase information.",
            es: "Deshabilitar > esconder. Los slots ocupados de una agenda se ven grises pero siguen visibles — dan contexto. Ocultarlos borraría información.",
          },
          {
            en: "One CTA per screen. Never two solid black actions competing. The primary is solid; the secondaries are ghost or outline.",
            es: "Un CTA por pantalla. Nunca dos acciones sólidas negras compitiendo. La primary es sólida; las secundarias son ghost u outline.",
          },
          {
            en: "Inline > modal. State changes (confirm, cancel, edit) resolve on the same screen when they can. Modal is a last resort.",
            es: "Inline > modal. Los cambios de estado (confirmar, cancelar, editar) se resuelven en la misma pantalla cuando se puede. El modal es último recurso.",
          },
          {
            en: "Coherent cascading resets. Change the service and it resets professional + date + slots. Change the professional and it resets only date + slots. Never leave the user in an impossible state.",
            es: "Resets en cascada coherentes. Cambiás el servicio y resetea profesional + fecha + slots. Cambiás el profesional y resetea solo fecha + slots. Nunca dejar al usuario en un estado imposible.",
          },
          {
            en: "Inline loading state. A spinning Loader2 inside the button + button disabled. Never a fullscreen skeleton for short operations.",
            es: "Loading state inline. Un Loader2 girando adentro del botón + botón disabled. Nunca un skeleton fullscreen para operaciones cortas.",
          },
          {
            en: "Toasts for non-blocking feedback. 'Saved,' 'Copied,' form errors — everything through a toast that fades on its own. No modal for transactional info.",
            es: "Toasts para lo no bloqueante. 'Guardado', 'Copiado', errores de forms — todo con un toast que desaparece solo. No hay modal para info transaccional.",
          },
          {
            en: "Selection that preserves. When you pick something (a service, a date), the other options unmount — but the chosen one keeps its exact size and contents, not compressed to a summary line. Losing the visual reference of what you picked is worse than the space it uses.",
            es: "Selección que preserva. Cuando elegís algo (un servicio, una fecha), las otras opciones se desmontan — pero la elegida conserva su tamaño y contenido exactos, no se comprime a línea resumen. Perder la referencia visual de lo elegido es peor que el espacio que ocupa.",
          },
          {
            en: "Removed for being annoying. Auto-scroll between steps (three chained jumps in 400ms = violent) and autoFocus on inputs (the browser scrolls when a focused field appears). Documented in the code as 'do not re-add.'",
            es: "Sacado por molestos. Auto-scroll entre pasos (tres saltos encadenados en 400ms = violento) y autoFocus en inputs (el navegador scrollea cuando aparece un campo enfocado). Documentado en el código como 'no volver a agregar'.",
          },
        ],
      },
    ],
  },
  {
    id: "tests",
    heading: { en: "Two tests", es: "Dos pruebas" },
    blocks: [
      {
        type: "paragraph",
        body: {
          en: "Strip the color from a screenshot. If it reads just as well and looks just as ordered, it's in the style. If it falls apart, color was doing the job hierarchy should have been doing.",
          es: "Sacale el color a una captura. Si se entiende igual de bien y se ve igual de ordenada, está en el estilo. Si se desarma, era el color el que estaba haciendo el trabajo que le tocaba a la jerarquía.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "Take out the element. If nothing is lost by removing it, it wasn't needed. Real examples: dropping the 'provisional' tag from every amount (moved to a methodological note) lost nothing and gained calm. Moving the flags out of the header at 15px (where they didn't read) down to the footer at 38px (where they did) made the information appear for the first time.",
          es: "Sacá el elemento y mirá. Si al quitarlo no se pierde información, sobraba. Ejemplos reales: quitar la etiqueta 'provisional' de cada monto (bajarla a nota metodológica) no perdió nada y ganó calma. Mover las banderas del encabezado a 15px (donde no se leían) hasta el pie a 38px (donde sí) hizo aparecer la información por primera vez.",
        },
      },
    ],
  },
  {
    id: "breaks",
    heading: { en: "What breaks it", es: "Lo que lo rompe" },
    blocks: [
      {
        type: "list",
        items: [
          {
            en: "Gradients — especially violets on white. It's the calling card of interfaces generated without judgment.",
            es: "Gradientes — sobre todo violetas sobre blanco. Es la marca registrada de las interfaces generadas sin criterio.",
          },
          {
            en: "Several accent colors coexisting. One is enough. If there are five, none means anything.",
            es: "Varios colores de acento conviviendo. Uno alcanza. Si hay cinco, ninguno significa nada.",
          },
          {
            en: "Big, diffuse shadows. They age the interface and dirty the white.",
            es: "Sombras grandes y difusas. Envejecen la interfaz y ensucian el blanco.",
          },
          {
            en: "Decorative icons next to every line of text. If the text already says it, the icon is noise.",
            es: "Íconos decorativos al lado de cada texto. Si el texto ya lo dice, el ícono es ruido.",
          },
          {
            en: "Generic typefaces (Arial, the system default). They don't ruin anything, but they don't add either, and the style lives in those details.",
            es: "Tipografías genéricas (Arial, la del sistema por default). No arruinan nada, pero tampoco suman, y el estilo vive en esos detalles.",
          },
          {
            en: "Side-stripe borders (border-l-4 in a color on cards). AI slop.",
            es: "Side-stripe borders (border-l-4 de color en cards). AI slop.",
          },
          {
            en: "Gradient text. Never. Emphasis via weight and size.",
            es: "Gradient text. Nunca. El énfasis va por peso y tamaño.",
          },
          {
            en: "Decorative glassmorphism. backdrop-blur-sm on a sticky header is the only acceptable use.",
            es: "Glassmorphism decorativa. backdrop-blur-sm en un header sticky es el único uso aceptable.",
          },
          {
            en: "Modal as first instinct. Inline or a new page first.",
            es: "Modal como primer instinto. Inline o página nueva primero.",
          },
          {
            en: "Three identical feature cards in a row. Turn them into a numbered list.",
            es: "Tres feature cards idénticas en fila. Van a lista numerada.",
          },
          {
            en: "Hero-metric templates ('1,000 appointments managed' with a giant number).",
            es: "Hero-metric ('1.000 turnos gestionados' con número gigante).",
          },
          {
            en: "Skeuomorphism. Calendars that look like paper, agendas with a spine, that whole universe.",
            es: "Skeuomorphism. Calendarios que parecen papel, agendas con lomo, ese universo entero.",
          },
          {
            en: "Chip/pill 'eyebrow' with a Sparkles icon above the H1. Tier-1 AI slop.",
            es: "Chip/pill 'eyebrow' con Sparkles arriba del H1. AI slop tier-1.",
          },
          {
            en: "Filler copy — 'Discover the power of your agenda,' 'Transform your business.' Direct copy that says what it does.",
            es: "Copy de relleno — 'Descubrí el poder de tu agenda', 'Transformá tu negocio'. Copy directo que dice qué hace.",
          },
          {
            en: "Giant decorative icons (a hero with a 96px icon at the center).",
            es: "Íconos gigantes decorativos (un hero con un icono de 96px al centro).",
          },
          {
            en: "Dark mode as the default. Lumina opens in light. Dark exists but responds to prefers-color-scheme or the user's toggle.",
            es: "Dark mode como default. Lumina arranca en light. Dark existe pero responde a prefers-color-scheme o al toggle del usuario.",
          },
        ],
      },
    ],
  },
  {
    id: "theming",
    heading: { en: "Theming and safe areas", es: "Theming y safe areas" },
    blocks: [
      {
        type: "paragraph",
        body: {
          en: "The user's toggle always wins over the system's preference. The trick is to redefine the same tokens in three blocks and not touch a line of the rest of the CSS.",
          es: "El toggle del usuario siempre le gana a la preferencia del sistema. El truco es redefinir los mismos tokens en tres bloques y no tocar una línea del resto del CSS.",
        },
      },
      {
        type: "code",
        code: `:root {
  /* light defaults */
  --bg: oklch(1 0 0);
  --fg: oklch(0.145 0 0);
}

:root[data-theme="dark"] {
  /* explicit dark wins */
  --bg:     oklch(0.145 0 0);
  --fg:     oklch(0.985 0 0);
  --border: oklch(1 0 0 / 10%);   /* border is light, not paint */
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* system dark unless user picked light */
    --bg: oklch(0.145 0 0);
    --fg: oklch(0.985 0 0);
  }
}`,
      },
      {
        type: "paragraph",
        body: {
          en: "iPhone safe areas are a hard rule on every view and overlay. env(safe-area-inset-*) plus dvh (not vh). A sticky header respects env(safe-area-inset-top) to stay clear of the notch; a footer respects env(safe-area-inset-bottom) for the home indicator; horizontal padding uses max(1.5rem, env(safe-area-inset-left)) so landscape notches don't cover content. It's a detail you forget until you test on a real iPhone and the layout gets swallowed.",
          es: "Las safe areas de iPhone son regla dura en cada vista y overlay. env(safe-area-inset-*) más dvh (no vh). Un header sticky respeta env(safe-area-inset-top) para no meterse en el notch; un footer respeta env(safe-area-inset-bottom) para el home indicator; el padding horizontal usa max(1.5rem, env(safe-area-inset-left)) para que el notch en landscape no tape contenido. Es un detalle que se olvida hasta que probás en un iPhone real y el contenido queda tapado.",
        },
      },
    ],
  },
  {
    id: "inspiration",
    heading: {
      en: "Where it comes from",
      es: "De dónde viene",
    },
    blocks: [
      {
        type: "paragraph",
        body: {
          en: "Notion, Linear, Anthropic, Apple. It's not original — it's a line that's existed for years in tools where the user spends many hours and the design is there not to tire them.",
          es: "Notion, Linear, Anthropic, Apple. No es original — es una línea que existe hace años en herramientas donde el usuario pasa muchas horas y el diseño está para no cansarlo.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "Notion and Linear are the closest benchmarks among working tools: dominant neutral, Apple-esque typography, zero decoration. Anthropic applies the same discipline across its site and its products. Apple's macOS and iOS set the school — tight typography, gray as space, color as signal. Lumina doesn't compete with any of them: it inherits the logic and applies it to smaller projects, where the same discipline pays the same dividend.",
          es: "Notion y Linear son el benchmark más cercano entre las herramientas de trabajo: neutro dominante, tipografía Apple-esque, cero decoración. Anthropic aplica la misma disciplina en su web y en sus productos. macOS/iOS de Apple marca la escuela — tipografía cerrada, gris como espacio, color como señal. Lumina no compite con ninguno de esos: hereda la lógica y la aplica a proyectos más chicos, donde la misma disciplina rinde el mismo dividendo.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "The operational summary, if you want it as a rule: one gray ramp, one color with meaning, two fonts with fixed roles, borders instead of shadows, one radius derived from a variable, and air instead of boxes.",
          es: "El resumen operativo, si lo querés como regla: una rampa de gris, un color con significado, dos fuentes con roles fijos, bordes en vez de sombras, un radio derivado de una variable, y aire en lugar de cajas.",
        },
      },
    ],
  },
];
