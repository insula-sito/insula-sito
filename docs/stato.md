# Stato del progetto

Ultimo aggiornamento: 2 novembre 2026

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
- Pagina Il circolo (`/circolo`), con la quota di partecipazione da `sito.ts`
- Incontri: elenco (`/incontri`) con formati e note a margine, «In programma» con stato vuoto, «Conclusi» solo se esiste un incontro concluso; pagina singola (`/incontri/[slug]`) con metadati a margine, «Perché conta» e «A chi è rivolto», relatori solo se presenti e pulsante oppure «Incontro concluso.» con il link alla Nota. Metadati condivisi in `src/components/MetadatiIncontro.astro`
- Provati in sviluppo, con file temporanei poi cancellati, un incontro concluso con un relatore e la sezione «Conclusi». In produzione la pagina della bozza non viene generata e `/incontri` mostra lo stato vuoto
- Moduli: componenti in `src/components/moduli/` (campo, scelta, casella privacy, campo esca), elenchi e messaggi d'errore in `src/lib/moduli.ts`, validazione in `src/scripts/validazione.ts`. Gli errori compaiono accanto al campo e il focus va al primo errore; senza JavaScript resta la validazione del browser
- La Nota (`/nota`): modulo Netlify `nota` (email, nome, ruolo, privacy, campo esca), archivio «Numeri usciti» con stato vuoto, pagina del singolo numero (`/nota/[id]`) pronta per quando ci saranno numeri; conferma `/nota/iscritto` con `noindex`
- Promotori (`/promotori`): testi, link al sito dello studio (in nuova scheda quando l'URL sarà definito), relatori solo se esistono schede in `persone`; in sviluppo un avviso ricorda che il testo va approvato dal promotore (`src/components/AvvisoSviluppo.astro`)
- Richiedi un invito (`/invito`): modulo Netlify `invito` con tutti i campi di `testi.md`, testo d'aiuto sotto il messaggio, campo nascosto `incontro` precompilato da `?incontro=<slug>` solo se lo slug è di un incontro pubblicato (valori sconosciuti ignorati); conferma `/invito/ricevuto` con `noindex`
- Privacy (`/privacy`): bozza strutturata con le sezioni di `testi.md`, segnaposto per titolare, basi giuridiche, conservazione, destinatari, diritti e contatti; in sviluppo l'avviso «Bozza: testo da completare…»
- 404: fondo portone, pulsante d'invito, link alla home e un frammento fermo della pianta (solo il cortile)
- Home, dopo la revisione degli screenshot (29 ottobre): la sezione del promotore ha il titolo visibile «Chi promuove il circolo» e il link «Promotori» (aggiornato anche `docs/testi.md`); su mobile la pianta è ridotta a circa due terzi della larghezza
- Decisioni del 29 ottobre: H1 della privacy «Informativa privacy» (nel footer resta «Privacy»); nella 404 prima il pulsante d'invito, poi la home
- Verifica automatica di accessibilità (29 ottobre), con axe-core 4.13.0 via Playwright e Chrome, regole WCAG 2.0/2.1/2.2 A e AA più le buone pratiche: tutte le pagine di produzione, desktop 1440px e iPhone 14, i moduli anche con gli errori visibili; in sviluppo anche la pagina dell'incontro in bozza. Zero violazioni. Contrasto non testuale misurato a parte: bordi dei campi 5,0:1, focus minimo 5,0:1 (ottone su portone), caselle spuntate 10,4:1. Giro con Tab su home, invito e 404: tutti gli elementi raggiunti hanno il contorno di focus
- Screenshot di controllo della home con Playwright (desktop a 1440px, iPhone 14 a densità 2) in `screenshot/`, esclusa da git
- Revisione della home dagli screenshot (2 novembre):
  - titolo dell'apertura su tre righe da 1280px (56px, colonna di 8/12; si va a capo solo tra i tre gruppi di parole); sotto, a capo naturale con `text-wrap: balance`;
  - apostrofi tipografici (’) in tutti i testi visibili, nei contenuti e in `docs/testi.md`;
  - filetti tolti da «Tre modi di partecipare» e «Per chi è»; restano solo tra le domande di «Le questioni»;
  - su desktop «Le questioni» su due colonne, «Prossimo incontro» e «Chi promuove il circolo» affiancate, nota a margine di «Per chi è» all'altezza del titolo;
  - stato vuoto del prossimo incontro senza pulsante (aggiornato `docs/testi.md`);
  - pianta con muri perimetrali a doppio spessore e pilastri pieni; su desktop è alta quanto il blocco di testo accanto;
  - link del promotore «Il promotore e i relatori» (aggiornato `docs/testi.md`);
  - verifica axe ripetuta su home, invito, Nota, privacy e 404: zero violazioni
- Decisioni del 2 novembre:
  - `--t-apertura` a 56px confermato come unica eccezione alla scala, registrato in `docs/brief.md` (Tipografia);
  - tra 960 e 1280px il titolo dell'apertura è fluido tra 44 e 56px (`--t-apertura-fluido`) in una colonna di 8/12: misurato su tre righe da 960 a 1280px, con screenshot a 1024 e 1152px;
  - in home i metadati del prossimo incontro stanno subito sotto il titolo dell'incontro, prima della sintesi; nella pagina del singolo incontro restano a margine
- Repository remoto su GitHub: `origin` = https://github.com/insula-sito/insula-sito.git, branch `main` (2 novembre)
- `netlify.toml` (2 novembre):
  - build `npm run build`, cartella pubblicata `dist`, Node 24;
  - intestazioni di sicurezza (Content-Security-Policy solo sullo stesso dominio, nosniff, referrer, permessi) e `X-Robots-Tag: noindex, nofollow` finché il sito non è pronto per il lancio;
  - cache lunga per `/_astro/*`;
  - la CSP è stata provata in locale su tutte le pagine: stili, font e validazione dei moduli funzionano, nessun blocco
- Primo deploy su Netlify (2 novembre): https://stellar-pavlova-f54de8.netlify.app/, collegato a GitHub (ogni push su `main` ripubblica). Verificato sul sito pubblicato:
  - tutte le pagine rispondono 200, la 404 è quella del sito e la bozza di esempio non è pubblicata;
  - intestazioni di sicurezza e `noindex` presenti, cache lunga su `/_astro/*`;
  - moduli `invito` e `nota` rilevati da Netlify (attributi `data-netlify` rimossi in fase di elaborazione);
  - axe su tutte le pagine, desktop e iPhone 14: zero violazioni
- Verificato nel browser: desktop a 1536px; mobile simulato con un iframe largo 390px (nessuno scorrimento orizzontale); nessun errore in console. In produzione la home mostra lo stato vuoto del prossimo incontro, in sviluppo la bozza con l'etichetta «Bozza».

## Da fare (v1)
- [x] Inizializzare git e il progetto Astro senza toccare `CLAUDE.md` e `docs/`
- [x] `src/config/sito.ts`, token in `src/styles/tokens.css`, font self-hosted
- [x] Layout base, header, footer
- [x] Home, con la pianta SVG nell'apertura
- [x] Il circolo
- [x] Incontri: elenco, pagina singola, stato vuoto, incontro di esempio in bozza
- [x] La Nota: iscrizione, conferma, archivio vuoto
- [x] Promotori
- [x] Richiedi un invito: modulo Netlify, validazione, precompilazione da `?incontro=`, conferma
- [x] Privacy (struttura con segnaposto) e 404
- [x] Controllo finale automatico: contrasti, accessibilità, tastiera, `npm run build`
- [ ] Prova su un telefono vero (dopo il deploy)

## Bloccanti per la pubblicazione (non per lo sviluppo)
- Nome definitivo, con verifica di dominio e marchio
- Email del circolo
- Titolare del trattamento: il circolo deve esistere giuridicamente (o va scelto consapevolmente un titolare provvisorio) prima di raccogliere richieste online
- Informativa privacy definitiva
- Testo della pagina Promotori approvato dal promotore
- Account GitHub e Netlify, dominio, verifica di limiti e costi del piano Netlify

## Segnaposto aperti
- `src/config/sito.ts`: URL del sito; email del circolo; sede (usata in `/incontri`); formato e sede degli incontri con ospite; partecipazione gratuita oppure con quota associativa (usata in `/circolo`); denominazione legale e codice fiscale dell'associazione; tempi di risposta (numero di giorni lavorativi); nome dello studio; URL dello studio
- `src/pages/privacy.astro`: titolare del trattamento; basi giuridiche; tempi di conservazione; fornitore di hosting e moduli, sede e garanzie per eventuali trasferimenti; testo della sezione sui diritti; contatti per la privacy
- `src/pages/invito/ricevuto.astro`: usa `tempiRisposta` da `sito.ts`
- `src/content/incontri/esempio-morosita.md`: data (assente), ora, luogo (solo bozza di sviluppo)
- `src/lib/incontri.ts` e `src/components/MetadatiIncontro.astro`: testo di ripiego `[DA DEFINIRE: data/ora/luogo/posti]` mostrato quando un incontro in bozza non ha questi dati

## Da verificare con il promotore
- Home, «Le questioni»: «Un immobile va all'asta. Dove sta lo sconto, e cosa si compra insieme alle mura?» parla di acquisto in asta. Il vincolo deontologico riguarda le attività dello studio, ma conviene far confermare il testo.

## Scelte da confermare
Nessuna aperta. Le ultime sette sono state confermate il 2 novembre e registrate in `docs/testi.md`, «Testi di servizio».

## Note tecniche
- I moduli Netlify non inviano dati in locale: si provano dopo il primo deploy.
- `site` in `astro.config.mjs` va impostato quando il dominio è definito.
- La build segnala che le collections `note` e `persone` sono vuote: è previsto.
- Netlify riconosce i moduli dall'HTML generato (`data-netlify`, `form-name` nascosto); l'invio vero si prova dopo il primo deploy.
- La casella non spuntata usa il bordo nativo del browser: in Chrome è circa 3,9:1 su calce (sopra il 3:1 richiesto). Su Safari e Firefox reali va guardata dopo il deploy.

- Al lancio: togliere `X-Robots-Tag` da `netlify.toml` e impostare `site` in `astro.config.mjs`.
- Su Netlify il rilevamento dei moduli va attivato a mano (Forms, Enable form detection) prima del deploy che deve registrarli.
- Netlify inserisce nelle pagine un proprio script (`/.netlify/scripts/hud`, con un iframe `#nl-badge-frame` invisibile). La CSP ne blocca la parte inline e in console compare un errore. Non tocca il sito, ma va disattivato dalle impostazioni del progetto se l'opzione è disponibile.
- La protezione «Visitor access» del progetto è stata messa su «Public» il 2 novembre. Il sito non è indicizzato (`noindex`), ma chi ha l'indirizzo lo vede.

## Prossimo passo
Provare i moduli (solo con dati propri) e il sito su un telefono vero; poi sostituire segnaposto e testi man mano che arrivano i dati. Prima di raccogliere richieste reali vanno risolti i bloccanti (titolare del trattamento, informativa privacy).
