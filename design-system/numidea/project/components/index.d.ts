/* Numidea Labs — component props. Documentation only: nothing here is type-checked or run.
 *
 * This is a STATIC system. The site is hand-written HTML/CSS/JS with no component
 * library, so there is no bundle.js and no React runtime: every component is plain
 * markup styled by components/bundle.css, as its preview.html shows. Each interface
 * lists what an agent decides when it writes that markup; each doc comment names the
 * class, attribute or element the prop becomes. Copy stays the site's own (assets/app.js
 * dictionaries, French by default) and goes through the do-not-claim list in `claims.md`.
 * Arabic copy awaits a native speaker's review; Arabic markup sits in dir="rtl".
 */
import type * as React from 'react';

/** Page language. 'ar' means the markup sits inside an element with dir="rtl" lang="ar". */
export type Lang = 'fr' | 'en' | 'ar';
/** Headings and the wordmark follow the page's data-theme (Cinzel in Arcanum, Geist at each theme's own weight elsewhere).
 *  'geist' adds class "face-geist": the Geist set inside an Arcanum page, at Noir's values; in other themes it changes nothing. */
export type Face = 'arcanum' | 'geist';
/** A still of an interactive state: class "is-hover" or "is-focus" (live pages use :hover / :focus-visible). */
export type StillState = 'rest' | 'hover' | 'focus';

/** <span class="logo">Num<i>idea</i> Labs<span class="cursor" aria-hidden="true"></span></span> */
export interface WordmarkProps {
  /** 'nav' = 22px; 'footer' = 24px (an ancestor with class "footer"). Default 'nav'. */
  size?: 'nav' | 'footer';
  /** 'geist' adds class "face-geist" (inside an Arcanum page: Geist 700, -.02em). Default: the page's theme (Arcanum: Cinzel 700, .04em). */
  face?: Face;
  /** Scale factor for a larger mark, applied to a wrapper (CSS zoom or transform) so the 9×20px block keeps its proportion. Never re-set the parts.
   *  Above 1 the wrapper also takes class "logo-scaled", which drops the block's glow: the glow never scales with the mark. */
  scale?: number;
}
export declare function Wordmark(props: WordmarkProps): React.ReactElement;

/** <a class="btn btn-primary|btn-teal|btn-ghost">Label</a> */
export interface ButtonProps {
  /** 'primary' = crimson fill, on-crimson label (once per frame); 'teal' = teal outline, teal-text label; 'ghost' = hairline-2 outline, ice label. */
  variant: 'primary' | 'teal' | 'ghost';
  /** The site's label, verb first, arrow in the reading direction: "Demander mon Aperçu gratuit →", "Request my free Preview →", "اطلب معاينتك المجانية ←". */
  label: string;
  /** Adds class "wa-link" and the site's WhatsApp icon (<span class="wa-i"><svg>…</svg></span>) before the label. Use with variant 'teal'. */
  whatsapp?: boolean;
  /** Inside <form class="form">: padding 15px 40px instead of 14px 28px. */
  inForm?: boolean;
  /** Class "is-hover" or "is-focus" for a still. */
  state?: StillState;
  /** 'ar' puts the button in a dir="rtl" container; its arrow is ←. */
  lang?: Lang;
  href?: string;
}
export declare function Button(props: ButtonProps): React.ReactElement;

/** <span class="pill">, <span class="pill live">, <span class="pill concept"> */
export interface PillProps {
  /** One to three words of the site's tags: "Site vitrine", "SEO", "En ligne", "Démo portfolio". No tool names, no counts. */
  label: string;
  /** 'live' = teal-text with a teal dot (a site online, with permission); 'concept' = dashed border (a portfolio demo, never client work). Default 'tag'. */
  kind?: 'tag' | 'live' | 'concept';
  /** Inside <div class="fd-pills"> (the founder card): padding 4px 10px, tracking .04em. */
  founder?: boolean;
  lang?: Lang;
}
export declare function Pill(props: PillProps): React.ReactElement;

/** <span class="kicker">04 — Tarifs</span><h2 class="sec">Un prix <em>avant le devis.</em></h2>[<p class="sec-lead">…</p>] */
export interface KickerProps {
  /** Two digits, an em dash, one word: "04 — Tarifs", "02 — Work", "04 — الأسعار". */
  kicker: string;
  /** The heading's plain part: "Un prix ". */
  heading: string;
  /** The closing phrase, set in <em> (crimson-text, same face, upright): "avant le devis.". */
  emphasis?: string;
  /** Optional section lead under the heading (class "sec-lead", 18px muted). */
  lead?: string;
  /** 'geist' adds "face-geist": inside an Arcanum page, a Geist heading and no diamond after the kicker. */
  face?: Face;
  /** Heading element; the site uses h2. */
  as?: 'h1' | 'h2' | 'h3' | 'p';
  lang?: Lang;
}
export declare function Kicker(props: KickerProps): React.ReactElement;

/** <div class="plate-frame"><div class="plate"><span class="pi pi-arch" style="…"><i style="mask-image:url(…)"></i></span><span class="pl-cap">…</span></div><i class="pk tl|tr|bl|br"></i>×4</div> */
export interface PlateProps {
  /** The engraving and its ink class: arch (Pl. II, teal-text 13%), coins (Pl. III: three .pc coins in .pi-coins, crimson-text 50%), lighthouse (Pl. IV, .pi-light, teal-text 16%), dunes (Pl. V, .fd-ink, crimson-text 20%), bench (uncaptioned, teal-text 10%), lantern (uncaptioned, crimson-text 60%). */
  plate: 'arch' | 'coins' | 'lighthouse' | 'dunes' | 'bench' | 'lantern';
  /** Mask image(s): the file(s) under assets/Engravings/ (for coins: king, horse, palm). Set as mask-image on the inner <i>. */
  src: string | { king: string; horse: string; palm: string };
  /** The site's caption: "Pl. II — Arc de Trajan · Timgad", "Pl. II — Arch of Trajan · Timgad", "لوحة 2 — قوس تراجان · تيمقاد". Omit for bench and lantern. */
  caption?: string;
  /** Where the engraving sits inside the frame, as inline left/right/top/width (%). The box keeps the file's aspect ratio. */
  placement: { left?: string; right?: string; top?: string; width?: string };
  /** Where the caption chip sits, as inline offsets (it is absolutely positioned). */
  captionPlacement?: { left?: string; right?: string; top?: string; bottom?: string };
  /** The hero plate's frame (.plate) with its four crimson .pk ticks on .plate-frame. Default true; false places the .pi straight on the page ground. */
  framed?: boolean;
  /** Multiply the ink opacity by the theme's factor when the piece is not Arcanum: Noir .85, Daylight .6, Monochrome .55, Alt-neon 1, Engineering .8. */
  inkFactor?: number;
  /** The plate is the sole figure of a frame with no text over it: class "pi-figure" on the .pi, ink at .62 (the share card).
   *  Default false: the site's watermark strength, for a plate behind text. */
  figure?: boolean;
  lang?: Lang;
}
export declare function Plate(props: PlateProps): React.ReactElement;

/** <article class="tier [tier-pop]">…</article>, three of them in <div class="tiers"> */
export interface TierCardProps {
  /** Essentiel 90 000–160 000 DA, 2–4 weeks; Studio 180 000–420 000 DA, 3–7 weeks (the recommended one); Moteur 450 000–1 200 000 DA, 8–16 weeks. */
  tier: 'essentiel' | 'studio' | 'moteur';
  /** <h3>: "Essentiel" / "Essential" / "الأساسي"; "Studio" / "الاستوديو"; "Moteur" / "Engine" / "المحرّك". */
  name: string;
  /** <p class="t-for">: the site's one-line purpose. */
  forLine: string;
  /** <b> inside .t-range, one unbreakable unit: "180&#8239;000&nbsp;–&#8288;&nbsp;420&#8239;000". */
  range: string;
  /** Leading <span class="cur">: "env." / "about" / "نحو". Required in marketing. */
  approx: string;
  /** Trailing <span class="cur">: "DA" / "DZD" / "دج", with no tax label until the accountant answers. Euro and dollar
   *  figures add it: "€ HT" / "excl. tax" (the conversion note goes in the caption). */
  currency: string;
  /** <p class="t-time">: "3 à 7 semaines". */
  duration: string;
  /** [first, last] week on the 16-week ruler: the bar's inset-inline-start = first/16, inline-size = (last−first)/16. */
  weeks: [number, number];
  /** Far end of the ruler: "16 semaines" / "16 weeks" / "16 أسبوعاً". */
  rulerEnd: string;
  /** <ul class="t-list"> items, the site's own. Essentiel's "Mise en ligne, domaine et certificat configurés" stays out of marketing for now. */
  items: string[];
  /** Adds "tier-pop" and <span class="t-pop">: Studio only. */
  recommended?: boolean;
  /** "Recommandé" / "Recommended" / "الموصى به". */
  recommendedLabel?: string;
  /** The site's 24×24 corner icon (svg.ai.ai-corner): hexagon, compass, gear. */
  icon?: 'hexagon' | 'compass' | 'gear';
  /** Class "is-hover" for a landing page's still; a marketing piece never shows it. */
  state?: 'rest' | 'hover';
  /** On <div class="tiers">: 'at-1200' sets the figure to the site's 22.8px for a row 1,200px wide. */
  rowWidth?: 'desktop' | 'at-1200';
  lang?: Lang;
}
export declare function TierCard(props: TierCardProps): React.ReactElement;

/** <article class="preview">…</article> (the signature offer, #apercu on the site) */
export interface ApercuCardProps {
  lang: Lang;
  /** "Offre signature" / "Signature offer" / "عرض مميّز". */
  tag: string;
  /** "L'Aperçu" / "The Preview" / "المعاينة". */
  name: string;
  /** "Zéro risque. Juste la preuve." / "Zero risk: see it before you pay." */
  promise: string;
  /** The site's brief, unchanged. */
  brief: string;
  /** Exactly five steps, the site's: describe · reply < 24 working hours · content + build (5 working days, kind 'build') · walk-through (30 min) · decide (kind 'decision', with the paid-so-far figure). The decision step ends on the figure: never prev.tl5p as its note (an owner item). */
  steps: [ApercuStep, ApercuStep, ApercuStep, ApercuStep, ApercuStep];
  /** "Payé jusqu'ici :" / "Paid so far:" / "المدفوع حتى الآن:", shown on the decision step over "0 DA". */
  paidLabel: string;
  /** "DA" / "DZD" / "دج" after the 0. */
  currency: string;
  /** REQUIRED every time, in full inside the card: "Gratuit et sans engagement · réservé aux entreprises immatriculées · 4 Aperçus par mois au maximum, tous clients confondus." */
  terms: string;
  /** Primary button: "Demander mon Aperçu →". */
  cta: string;
  /** The WhatsApp text link: "ou par WhatsApp". */
  whatsappLabel?: string;
  /** "Résultat"; only with the French outcome. */
  outcomeLabel?: string;
  /** French only: "Vous dites oui en connaissance de cause : vous avez déjà vu le résultat." The English and Arabic
   *  outcome lines are a superlative: in those languages leave the outcome out (or use the brief). */
  outcome?: string;
}
export interface ApercuStep {
  /** <span class="ptl-t">. */
  title: string;
  /** <span class="ptl-p">: the step's sentence. */
  note?: string;
  /** <span class="ptl-d">: "5 jours ouvrés", "visio de 30 min". */
  duration?: string;
  /** 'build' = five teal cells (.ptl-build); 'decision' = crimson diamond (.ptl-dec). */
  kind?: 'step' | 'build' | 'call' | 'decision';
}
export declare function ApercuCard(props: ApercuCardProps): React.ReactElement;

/** <section class="proof"><span class="kicker">01 — Preuves</span><p class="proof-line">…</p></section> */
export interface TrustLineProps {
  /** "01 — Preuves" / "01 — Proof" / "01 — الإثبات". */
  kicker?: string;
  /** Backed segments only, joined with " · " and no-break spaces inside each: "Réponse < 24 h ouvrées", "FR · EN · AR". Never a client count. */
  segments: string[];
  lang?: Lang;
}
export declare function TrustLine(props: TrustLineProps): React.ReactElement;

/** <div class="lang" role="group" aria-label="Langue"><button aria-pressed lang="fr|en|ar">FR|EN|ع</button>×3</div> */
export interface LanguageSwitchProps {
  /** The pressed button (aria-pressed="true"). */
  current: Lang;
  /** Group label in the page language: "Langue" / "Language" / "اللغة". */
  ariaLabel: string;
  /** A still: which button shows hover ("is-hover") or keyboard focus ("is-focus"). */
  hover?: Lang;
  focus?: Lang;
}
export declare function LanguageSwitch(props: LanguageSwitchProps): React.ReactElement;

/** <div class="field [invalid]"><label for>…</label><input|textarea>…<span class="err [hint]">…</span></div> */
export interface FormFieldProps {
  id: string;
  /** "Nom" / "Email" / "Message" (and EN, AR from the site). */
  label: string;
  type: 'text' | 'email' | 'textarea';
  /** "Votre nom", "vous@entreprise.com", "Qu'est-ce qu'on construit ?". */
  placeholder?: string;
  value?: string;
  /** Adds class "invalid" and fills span.err (linked by aria-describedby): the site's error sentence. */
  error?: string;
  /** A neutral note instead of an error: span.err.hint, muted. */
  hint?: string;
  /** Class "is-focus" on the input for a still. */
  focused?: boolean;
  /** textarea rows. */
  rows?: number;
  /** Two fields side by side go in <div class="form-row">. */
  half?: boolean;
  lang?: Lang;
}
export declare function FormField(props: FormFieldProps): React.ReactElement;

/** <article class="proj"><div class="thumb [thumb-slot]">…</div><div class="body">…</div></article> */
export interface ProjectCardProps {
  /** <span class="cat">: "Commerce · Gaming". */
  category: string;
  /** <h3>. A client's name only with that client's written permission (none has been given yet). */
  title: string;
  /** <p>: one sentence on what the site is. */
  description: string;
  /** <p class="gain"> (or <a class="gain"> with an arrow): what a visitor can do on the site, never a result or a figure. */
  benefit?: string;
  benefitHref?: string;
  /** Pills under the text. */
  tags: string[];
  /** 'concept' adds the dashed « Démo portfolio » pill (required for Glaive Store); 'live' adds « En ligne » (permission, own domain). */
  status?: 'concept' | 'live';
  statusLabel?: string;
  /** A screenshot (<img class="shot">) ONLY after the client's written permission; until then the neutral slot (.thumb-slot) shows slotNote. */
  screenshot?: { src: string; alt: string };
  /** "Capture d'écran · après accord écrit du client". */
  slotNote?: string;
  /** The address bar stays blank: no hosting hostname in marketing. */
  addressBar?: '';
  /** <div class="actions"> links: "Voir le site →", "Voir la planche →". */
  actions: { label: string; href?: string }[];
  /** Class "is-hover" for a still. */
  state?: 'rest' | 'hover';
  lang?: Lang;
}
export declare function ProjectCard(props: ProjectCardProps): React.ReactElement;

/** <div class="founder-card"><div class="fd-top"><div class="fd-photo"><span class="mono">Y</span></div><div class="fd-id">…</div></div><p class="fd-bio">…</p></div> */
export interface FounderCardProps {
  /** "Yasser Hamisse", in Latin letters in every language. */
  name: 'Yasser Hamisse';
  /** The monogram in the roundel. Never a face: no generated, drawn or stand-in portrait. */
  monogram: 'Y';
  /** A real portrait only if the owner supplies one (<img> inside .fd-photo hides the monogram). */
  photo?: { src: string; alt: string };
  /** "Designer graphique & développeur web · Fondateur" / "Graphic designer & web developer · Founder". */
  role: string;
  /** .fd-pills: "FR C2", "EN C1", "AR langue maternelle", "Bordj Bou Arréridj". Never "6 ans". */
  pills: string[];
  /** One line in his voice: "Je transforme votre brief en produit fini, et je reste à vos côtés après le lancement." */
  bio: string;
  lang?: Lang;
}
export declare function FounderCard(props: FounderCardProps): React.ReactElement;

/* ───────────── Marketing formats (intentional additions: the site has no social formats) ─────────────
 * A canvas is <div class="fmt fmt-916|fmt-45|fmt-11|fmt-169" lang="…" [dir="rtl"]> at its real pixel size,
 * holding <div class="fmt-safe"> (the 9:16 safe box x 140–940, y 290–1240; 54px margins on 4:5 and 1:1).
 * Text sizes on the canvas: hook 96–140px, body 52–60px, small print 44px or more, labels about 40px;
 * Arabic 10% larger with line height 1.5. No URL, email address or ?ref= code on any canvas. */

/** 'story' = 9:16 1080×1920 (fmt-916) · 'feed' = 4:5 1080×1350 (fmt-45) · 'square' = 1:1 (fmt-11) · 'wide' = 16:9 1920×1080 (fmt-169). */
export type Canvas = 'story' | 'feed' | 'square' | 'wide';
/** The copy's gate in the marketing plan: '0' now; 'B' (Aperçu headlines and calls to action) only once Gate B opens. */
export type Gate = '0' | 'B' | 'C' | 'D';

/** <div class="fmt fmt-916"> with the wordmark, a kicker, a hook and a lead in the safe box. */
export interface StoryFrameProps {
  lang: Lang;
  /** The gate the copy needs; a StoryFrame never runs ahead of it. */
  gate: Gate;
  /** "04 — Tarifs" / "04 — الأسعار". */
  kicker: string;
  /** The hook, seven words or fewer, its plain part: "Un prix ". Class "sec fmt-hook" (120px; Arabic 132px). */
  hook: string;
  /** The hook's closing words, in <em> (crimson-text): "avant le devis.". */
  emphasis?: string;
  /** One line under the hook (class "fmt-lead", 60px): "Fourchette indicative, pas un devis.". */
  lead?: string;
  /** Decoration below y 1240 only: the Pricing texture (.pi-contour) or the erg (.fd-ink), at the site's strength. */
  deco?: 'contour' | 'erg' | 'none';
  /** The dashed safe-box guide (.fmt-guide), for checking; never exported. */
  guide?: boolean;
}
export declare function StoryFrame(props: StoryFrameProps): React.ReactElement;

/** <div class="fmt fmt-45"> one carousel page: top row, kicker, heading, lead, one thing. */
export interface CarouselPageProps {
  lang: Lang;
  gate: Gate;
  /** Page number and total, shown top right as "2 / 5" (class "fmt-label"). */
  page: number;
  pages: number;
  /** "02 — Inclus": two digits, an em dash, one word. */
  kicker: string;
  /** <h2 class="sec">, its plain part. */
  heading: string;
  /** The heading's closing words, in <em>. */
  emphasis?: string;
  /** Class "fmt-lead", 52px. */
  lead?: string;
  /** Exactly one thing: a framed plate as the page's figure (.plate-frame.fmt-figure, .pi-figure), the site's list (.t-list), or a price row (see PricePost). */
  thing:
    | { kind: 'plate'; plate: PlateProps['plate']; src: PlateProps['src']; caption?: string }
    | { kind: 'list'; items: string[] }
    | { kind: 'price'; row: PricePostRow };
}
export declare function CarouselPage(props: CarouselPageProps): React.ReactElement;

/** One package on a PricePost: <div class="pp-row">. */
export interface PricePostRow {
  /** "Essentiel" / "Studio" / "Moteur" (EN: Essential, Studio, Engine; AR: الأساسي، الاستوديو، المحرّك). */
  name: string;
  /** "2 à 4 semaines" (class "pp-time"). */
  weeks: string;
  /** The figure, one unbreakable unit: "180&#8239;000&nbsp;–&#8288;&nbsp;420&#8239;000". */
  range: string;
  /** Leading <span class="cur">: "env." / "about" / "نحو". Required. */
  approx: string;
  /** Trailing <span class="cur">: "DA" / "دج" with no tax label; for France "€ HT". */
  currency: string;
  /** The smaller € line under a dinar figure (Algeria): "env.&nbsp;1&#8239;200&nbsp;–&#8288;&nbsp;2&#8239;800&nbsp;€&nbsp;HT". */
  alt?: string;
  /** Studio only: <span class="pp-pop">Recommandé</span>. */
  recommended?: boolean;
}
/** <div class="fmt fmt-45"> the three packages in marketing form. Never for the Gulf (no AED or SAR price exists). */
export interface PricePostProps {
  lang: 'fr' | 'ar';
  /** 'dz' = dinars with a smaller € line; 'fr' = € HT only. */
  market: 'dz' | 'fr';
  /** "04 — Tarifs". */
  kicker: string;
  /** "Un prix " + emphasis "avant le devis.". */
  heading: string;
  emphasis?: string;
  rows: [PricePostRow, PricePostRow, PricePostRow];
  /** Under the rows (class "fmt-small"): "Fourchette indicative, pas un devis.". */
  note: string;
  /** The post's caption, never on the visual: price.estFine, and the conversion note whenever € shows. */
  caption: string[];
}
export declare function PricePost(props: PricePostProps): React.ReactElement;

/** <div class="fmt fmt-916|fmt-45"><div class="fmt-safe fmt-end">…</div></div> the last frame. */
export interface EndCardProps {
  canvas: 'story' | 'feed';
  lang: Lang;
  /** hero.eyebrow, in the piece's language: "Studio web & logiciel · Bordj Bou Arréridj, Algérie" (on two lines where needed: the break replaces the dot). Gulf pieces keep "Algeria". */
  label: string;
  /** footer.tag, small: "Enraciné en Numidie · bâti sur des idées". */
  motto?: string;
  /** "Lien en bio" / "Lien en commentaire" (LinkedIn) / "Link in bio" / "الرابط في الملف التعريفي". Never a URL, an email or a code. */
  pointer?: string;
  /** The erg engraving under the stack (.fd-ink, crimson-text at .2), decoration only. */
  deco?: 'erg' | 'none';
}
export declare function EndCard(props: EndCardProps): React.ReactElement;
