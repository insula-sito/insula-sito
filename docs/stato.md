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
- Pagina Il circolo (`/circolo`), con la quota di partecipazione da `sito.ts`
- Incontri: elenco (`/incontri`) con formati e note a margine, «In programma» con stato vuoto, «Conclusi» solo se esiste un incontro concluso; pagina singola (`/incontri/[slug]`) con metadati a margine, «Perché conta» e «A chi è rivolto», relatori solo se presenti e pulsante oppure «Incontro concluso.» con il link alla Nota. Metadati condivisi in `src/components/MetadatiIncontro.astro`
- Provati in sviluppo, con file temporanei poi cancellati, un incontro concluso con un relatore e la sezione «Conclusi». In produzione la pagina della bozza non viene generata e `/incontri` mostra lo stato vuoto
- Moduli: componenti in `src/components/moduli/` (campo, scelta, casella privacy, campo esca), elenchi e messaggi d'errore in `src/lib/moduli.ts`, validazione in `src/scripts/validazione.ts`. Gli errori compaiono accanto al campo e il focus va al primo errore; senza JavaScript resta la validazione del browser
- La Nota (`/nota`): modulo Netlify `nota` (email, nome, ruolo, privacy, campo esca), archivio «Numeri usciti» con stato vuoto, pagina del singolo numero (`/nota/[id]`) pronta per quando ci saranno numeri; conferma `/nota/iscritto` con `noindex`
- Promotori (`/promotori`): testi, link al sito dello studio (in nuova scheda quando l'URL sarà definito), relatori solo se esistono schede in `persone`; in sviluppo un avviso ricorda che il testo va approvato dal promotore (`src/components/AvvisoSviluppo.astro`)
- Richiedi un invito (`/invito`): modulo Netlify `invito` con tutti i campi di `testi.md`, testo d'aiuto sotto il messaggio, campo nascosto `incontro` precompilato da `?incontro=<slug>` solo se lo slug è di un incontro pubblicato (valori sconosciuti ignorati); conferma `/invito/ricevuto` con `noindex`
- Privacy (`/privacy`): bozza strutturata con le sezioni di `testi.md`, segnaposto per titolare, basi giuridiche, conservazione, destinatari, diritti e contatti; in sviluppo l'avviso «Bozza: testo da completare…»
- 404: fondo portone, pulsante d'invito, link alla home e un frammento fermo della pianta (solo il cortile)
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
- [ ] Controllo finale: mobile reale, tastiera, contrasti, `npm run build`

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
- La sezione «Chi promuove il circolo» della home ha un h2 visibile solo ai lettori di schermo, perché il testo non prevede un titolo e il link ha già quella dicitura.
- Il link «Vai al contenuto», visibile solo con la tastiera, è un testo aggiunto per l'accessibilità.
- Su desktop il titolo dell'apertura va su cinque righe (64px, colonna di 7/12) e non su tre come nel wireframe. Per arrivare a tre righe servirebbe un corpo più piccolo (44px) oppure una colonna più larga.
- Nel modulo della Nota il messaggio per la privacy non confermata è quello di `testi.md` per l'invito («Per inviare la richiesta…»): `testi.md` non ne prevede uno per la Nota.
- I campi facoltativi sono segnati con «(facoltativo)» nell'etichetta; i menu a scelta partono da una riga vuota.
- L'archivio mostra per ogni numero «N. [numero], [data]»; la pagina del singolo numero chiude con un link «La Nota».
- Il campo esca, invisibile, ha l'etichetta «Non compilare questo campo», letta solo dai bot.
- Privacy: `testi.md` non dà un H1; ho usato «Privacy», come nel footer. La sezione sui diritti riporta la dicitura di `testi.md` seguita da un segnaposto per il testo.
- 404: `testi.md` elenca «Home; Richiedi un invito». Ho messo prima il pulsante d'invito, che è l'azione principale, e poi il link alla home.

## Note tecniche
- I moduli Netlify non inviano dati in locale: si provano dopo il primo deploy.
- `site` in `astro.config.mjs` va impostato quando il dominio è definito.
- La build segnala che le collections `note` e `persone` sono vuote: è previsto.
- Netlify riconosce i moduli dall'HTML generato (`data-netlify`, `form-name` nascosto); l'invio vero si prova dopo il primo deploy.
- Nella pagina di un incontro concluso il link alla Nota dice «La Nota»: `testi.md` chiede solo «un link alla Nota».

## Prossimo passo
Controllo finale della v1: prova su un telefono vero, giro completo con la tastiera, verifica dei contrasti (anche del filetto e dei bordi dei campi), `npm run build`. Poi decidere i punti in «Scelte da confermare» e preparare il deploy su Netlify (account, repository GitHub).
