# Stato del progetto

Ultimo aggiornamento: 29 ottobre 2026

## Fatto
- Decisioni di strategia, architettura e design: `docs/brief.md`
- Testi della v1: `docs/testi.md`
- Git inizializzato (ramo `main`); progetto Astro 7.4.4, output statico, configurato a mano senza toccare `CLAUDE.md` e `docs/`
- `src/config/sito.ts` con tutti i dati del circolo (segnaposto dove mancano)
- Token in `src/styles/tokens.css`, stili di base in `src/styles/global.css` (griglia a 12 colonne, colonna a margine, pulsanti, focus, `prefers-reduced-motion`)
- Font self-hosted con Fontsource, solo sottoinsieme latin: Spectral 300/400/400 corsivo/600, Hanken Grotesk 400/500
- Content collections in `src/content.config.ts` (incontri, note, persone); un incontro confermato o concluso senza data, ora e luogo fa fallire la build
- Incontro di esempio in bozza: `src/content/incontri/esempio-morosita.md`
- Helper `src/lib/incontri.ts`: bozze visibili solo in sviluppo, ordinamento per data, formato data in italiano
- Layout base, header (su mobile: logo e pulsante in alto, voci sotto, senza JavaScript), footer, favicon
- Home completa con i testi di `docs/testi.md` e la pianta SVG dell'insula (`src/components/Pianta.astro`), che si traccia in circa due secondi ed è già completa con reduced-motion
- Verificato nel browser: desktop a 1536px; mobile simulato con un iframe largo 390px (nessuno scorrimento orizzontale); nessun errore in console. In produzione la home mostra lo stato vuoto del prossimo incontro, in sviluppo la bozza con l'etichetta «Bozza».

## Da fare (v1)
- [x] Inizializzare git e il progetto Astro senza toccare `CLAUDE.md` e `docs/`
- [x] `src/config/sito.ts`, token in `src/styles/tokens.css`, font self-hosted
- [x] Layout base, header, footer
- [x] Home, con la pianta SVG nell'apertura
- [ ] Il circolo
- [ ] Incontri: elenco, pagina singola, stato vuoto (l'incontro di esempio in bozza c'è già)
- [ ] La Nota: iscrizione, conferma, archivio vuoto
- [ ] Promotori
- [ ] Richiedi un invito: modulo Netlify, validazione, precompilazione da `?incontro=`, conferma
- [ ] Privacy (struttura con segnaposto) e 404
- [ ] Controllo finale: mobile reale, tastiera, contrasti, `npm run build`

## Bloccanti per la pubblicazione (non per lo sviluppo)
- Nome definitivo, con verifica di dominio e marchio
- Email del circolo
- Titolare del trattamento: il circolo deve esistere giuridicamente (o va scelto consapevolmente un titolare provvisorio) prima di raccogliere richieste online
- Informativa privacy definitiva
- Testo della pagina Promotori approvato dal promotore
- Account GitHub e Netlify, dominio, verifica di limiti e costi del piano Netlify

## Segnaposto aperti
- `src/config/sito.ts`: URL del sito; email del circolo; sede; denominazione legale e codice fiscale dell'associazione; tempi di risposta (numero di giorni lavorativi); nome dello studio; URL dello studio
- `src/content/incontri/esempio-morosita.md`: data (assente), ora, luogo (solo bozza di sviluppo)
- `src/lib/incontri.ts` e `src/pages/index.astro`: testo di ripiego `[DA DEFINIRE: data/ora/luogo]` mostrato quando un incontro in bozza non ha questi dati

## Da verificare con il promotore
- Home, «Le questioni»: «Un immobile va all'asta. Dove sta lo sconto, e cosa si compra insieme alle mura?» parla di acquisto in asta. Il vincolo deontologico riguarda le attività dello studio, ma conviene far confermare il testo.

## Scelte da confermare
- La sezione «Chi promuove il circolo» della home ha un h2 visibile solo ai lettori di schermo, perché il testo non prevede un titolo e il link ha già quella dicitura.
- Il link «Vai al contenuto», visibile solo con la tastiera, è un testo aggiunto per l'accessibilità.
- Su desktop il titolo dell'apertura va su cinque righe (64px, colonna di 7/12) e non su tre come nel wireframe. Per arrivare a tre righe servirebbe un corpo più piccolo (44px) oppure una colonna più larga.

## Note tecniche
- I moduli Netlify non inviano dati in locale: si provano dopo il primo deploy.
- `site` in `astro.config.mjs` va impostato quando il dominio è definito.
- La build segnala che le collections `note` e `persone` sono vuote: è previsto.
- Le voci di navigazione puntano a pagine non ancora costruite e per ora danno 404.

## Prossimo passo
Pagine Il circolo e Incontri (elenco, pagina singola con «Perché conta» e «A chi è rivolto», stato vuoto, «Conclusi» solo se presenti).
