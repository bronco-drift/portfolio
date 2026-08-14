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
          en: "Lumina isn't a color palette — it's a way of resolving the interface. White, near-black ink, and a scale of grays. No decorative color. The underlying idea is that the interface disappears and the content provides the color.",
          es: "Lumina no es una paleta de colores: es una forma de resolver la interfaz. Blanco, tinta casi negra y una escala de grises. Nada de color decorativo. La idea de fondo es que la interfaz desaparezca y el color lo ponga el contenido.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "The feel it goes for is that: cleanliness, air, simplicity. Nothing extra, but what's there placed with care. It's harder than filling the screen — take the ornaments away and the spacing and typography are exposed.",
          es: "La sensación que busca es esa: limpieza, aire, simpleza. Que no haya nada de más, pero que lo que hay esté puesto con cuidado. Es más difícil que llenar la pantalla de cosas, porque cuando sacás adornos queda expuesto el espaciado y la tipografía.",
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
  --background:         oklch(1 0 0);           /* white */
  --foreground:         oklch(0.145 0 0);       /* ink, near-black */
  --card:               oklch(1 0 0);
  --primary:            oklch(0.205 0 0);       /* primary buttons */
  --primary-foreground: oklch(0.985 0 0);
  --muted:              oklch(0.97 0 0);        /* soft surfaces */
  --muted-foreground:   oklch(0.556 0 0);       /* secondary text */
  --destructive:        oklch(0.577 0.245 27);  /* the only color: delete */
  --border:             oklch(0.922 0 0);
  --ring:               oklch(0.708 0 0);       /* keyboard focus */
  --radius:             0.625rem;               /* 10px */
  --shadow-xs:          0 1px 2px 0 rgb(0 0 0 / 0.05);
}`,
      },
      {
        type: "paragraph",
        body: {
          en: "They're written in oklch, a color format where the first number is lightness as the eye perceives it. That's why the whole gray scale is built by moving a single number — 1 is white, 0.145 is ink, and everything in between is a gray. With #hex you have to guess that progression; here it's arithmetic.",
          es: "Están en oklch, que es una forma de escribir colores donde el primer número es la claridad tal como la percibe el ojo. Por eso toda la escala de grises se arma moviendo un solo número: 1 es blanco, 0.145 es la tinta, y los intermedios son los grises. Con hexadecimal esa progresión hay que adivinarla; acá es aritmética.",
        },
      },
    ],
  },
  {
    id: "typography",
    heading: { en: "Typography", es: "Tipografía" },
    blocks: [
      {
        type: "paragraph",
        body: {
          en: "Geist for all text and Geist Mono for data: IPs, sizes, times, addresses, the PIN. That mix is half the signature of the style — the monospace gives a technical air without shouting, and separates 'what the app says' from 'what the app reports' at a glance.",
          es: "Geist para todo el texto y Geist Mono para los datos: IPs, tamaños, horas, direcciones, el PIN. Esa mezcla es media firma del estilo — la monoespaciada da el aire técnico sin gritar, y separa de un vistazo lo que dice la app de lo que informa la app.",
        },
      },
      {
        type: "paragraph",
        body: {
          en: "Headings carry letter-spacing: -0.025em. A tiny detail that shows: the letters draw slightly closer and the title stops looking like default text.",
          es: "Los títulos llevan letter-spacing: -0.025em. Es un detalle mínimo que se nota: las letras se juntan apenas y el título deja de parecer texto por defecto.",
        },
      },
    ],
  },
  {
    id: "measures",
    heading: { en: "The measurements", es: "Las medidas" },
    blocks: [
      {
        type: "list",
        items: [
          {
            en: "10px base radius, everything else in multiples (calc(var(--radius) * 1.4) for cards). Never random radii.",
            es: "Radio 10px como base, y todo lo demás en múltiplos (calc(var(--radius) * 1.4) para las tarjetas). Nunca radios al azar.",
          },
          {
            en: "1px borders, always the same gray. They separate better than shadows and don't dirty the surface.",
            es: "Bordes de 1px, siempre del mismo gris. Separan mejor que las sombras y no ensucian.",
          },
          {
            en: "Almost-invisible shadow: 0 1px 2px rgb(0 0 0 / 0.05). Not for depth — so the card doesn't feel pasted onto the background.",
            es: "Sombra casi invisible: 0 1px 2px rgb(0 0 0 / 0.05). No es para dar profundidad, es para que la tarjeta no parezca pegada al fondo.",
          },
          {
            en: "Generous spacing: 12–16px inside cards, 24–28px between sections. Air is the main tool.",
            es: "Espacio generoso: 12–16px adentro de las tarjetas, 24–28px entre secciones. El aire es la herramienta principal.",
          },
        ],
      },
    ],
  },
  {
    id: "rules",
    heading: {
      en: "The rules that hold it up",
      es: "Las reglas que lo sostienen",
    },
    blocks: [
      {
        type: "list",
        items: [
          {
            en: "One accent, and it's black. The important button on each screen is black; the rest are white with a border. If two black buttons are next to each other, one of them wasn't important.",
            es: "Un solo acento, y es el negro. El botón importante de cada pantalla es negro; el resto son blancos con borde. Si hay dos botones negros juntos, uno de los dos no era importante.",
          },
          {
            en: "Red is used exactly once — to delete, and only on hover. If red shows up anywhere else, it stops meaning 'careful.'",
            es: "El rojo se usa una sola vez: para borrar, y recién cuando pasás el mouse por encima. Si el rojo aparece en cualquier lado, deja de significar cuidado.",
          },
          {
            en: "Hierarchy by text color, not by size. Almost all text is the same size; the secondary bits go to gray. That keeps the page calm.",
            es: "Jerarquía por color de texto, no por tamaño. Casi todo el texto mide lo mismo; lo secundario se va al gris. Eso mantiene la página tranquila.",
          },
          {
            en: "Minimal motion: 0.15s transitions on hover and click. No entrance animations, nothing sliding in.",
            es: "Movimiento mínimo: transiciones de 0.15s en hover y en el click. Nada de animaciones de entrada ni de cosas que aparecen deslizándose.",
          },
          {
            en: "Direct copy, lowercase for the secondary bits: 'copy', 'download', 'delete', 'logs'. No taglines, no filler subtitles, no explaining what's already visible.",
            es: "Copy directo y en minúscula para lo secundario: copiar, bajar, borrar, logs. Sin eslóganes, sin subtítulos de relleno, sin explicar lo que ya se ve.",
          },
        ],
      },
    ],
  },
  {
    id: "test",
    heading: { en: "The quick test", es: "La prueba rápida" },
    blocks: [
      {
        type: "paragraph",
        body: {
          en: "Strip all the color from a screenshot. If it reads just as well and looks just as ordered, it's in the style. If it falls apart, color was doing the job hierarchy should have been doing.",
          es: "Sacale todo el color a una captura de pantalla. Si se entiende igual de bien y se ve igual de ordenada, está en el estilo. Si se desarma, era el color el que estaba haciendo el trabajo que le tocaba a la jerarquía.",
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
            es: "Degradados, y sobre todo los violetas sobre blanco. Es la marca registrada de las interfaces generadas sin criterio.",
          },
          {
            en: "Several accent colors coexisting. One is enough.",
            es: "Varios colores de acento conviviendo. Uno alcanza.",
          },
          {
            en: "Big, diffuse shadows: they age the interface and dirty the white.",
            es: "Sombras grandes y difusas: envejecen la interfaz y ensucian el blanco.",
          },
          {
            en: "Decorative icons next to every piece of text. If the text already says it, the icon is noise.",
            es: "Íconos decorativos al lado de cada texto. Si el texto ya lo dice, el ícono es ruido.",
          },
          {
            en: "Generic typefaces like Arial or the system font: they don't ruin anything, but they don't add either, and the style lives in those details.",
            es: "Tipografías genéricas tipo Arial o la del sistema: no arruinan nada, pero tampoco suman, y el estilo vive de esos detalles.",
          },
        ],
      },
    ],
  },
  {
    id: "dark",
    heading: {
      en: "If you want dark mode",
      es: "Si querés modo oscuro",
    },
    blocks: [
      {
        type: "paragraph",
        body: {
          en: "The trick is not to write new colors everywhere, but to redefine the same tokens inside a block and not touch a single line of the rest of the CSS.",
          es: "El truco es no escribir colores nuevos en cada lugar, sino redefinir los mismos tokens adentro de un bloque y no tocar una sola línea del resto del CSS.",
        },
      },
      {
        type: "code",
        code: `@media (prefers-color-scheme: dark) {
  :root {
    --background: oklch(0.145 0 0);
    --foreground: oklch(0.985 0 0);
    --muted:      oklch(0.269 0 0);
    --border:     oklch(1 0 0 / 10%);
    /* ...same names, other values */
  }
}`,
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
          en: "For inspiration, look at Apple, Anthropic, and functional minimalism. Lumina lives in that lineage.",
          es: "Si querés encontrar inspiración, mirá Apple, Anthropic y el minimalismo funcional. Lumina vive en esa línea.",
        },
      },
    ],
  },
];
