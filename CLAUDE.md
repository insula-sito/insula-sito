# Insula — sito del circolo

Sito di un circolo romano che organizza tavoli riservati, incontri con ospite e una nota mensile (la Nota) per chi possiede o consiglia patrimoni immobiliari a reddito a Roma. "Insula" è un nome PROVVISORIO: compare solo in `src/config/sito.ts` e nei testi, mai cablato nei componenti.

Decisioni e stato del lavoro:
- @docs/brief.md — posizionamento, pubblico, architettura, design. Sono decisioni prese: non riaprirle senza una ragione nuova e specifica.
- @docs/stato.md — fatto, da fare, segnaposto aperti, prossimo passo.
- `docs/testi.md` — testi di tutte le pagine. Leggilo ogni volta che lavori su una pagina o su un contenuto.

## Stack
- Astro, versione stabile corrente, output statico. Nessun framework UI (React, Vue…) salvo necessità reale e motivata.
- CSS puro con custom properties: i token stanno in `src/styles/tokens.css`. Niente Tailwind.
- Font self-hosted con Fontsource (Spectral, Hanken Grotesk). Niente Google Fonts da CDN, niente script di terze parti, niente embed esterni: la v1 non deve richiedere un banner cookie.
- Contenuti in content collections: `src/content/incontri`, `src/content/note`, `src/content/persone`.
- Dati del circolo (nome, sottotitolo, email, sede, dati legali, studio promotore, URL) solo in `src/config/sito.ts`.
- Moduli in HTML statico predisposti per Netlify Forms (attributo `data-netlify`, honeypot anti-spam, pagine di conferma). Il deploy su Netlify da GitHub arriva dopo la v1 in locale.

## Comandi
- `npm run dev` — sviluppo su http://localhost:4321
- `npm run build` — deve passare senza errori prima di ogni commit
- `npm run preview` — anteprima della build di produzione

## Regole di lavoro
- Ambiente: Windows 11. Comandi e percorsi devono funzionare su Windows.
- Non inventare fatti: persone, relatori, ospiti, date, sedi, numeri, partner, citazioni, testimonianze. Dove manca un dato usa un segnaposto visibile `[DA DEFINIRE: ...]` e registralo in `docs/stato.md`.
- I testi sono in `docs/testi.md`: impaginali, non riscriverli. Se un testo non funziona nel layout, segnalamelo e proponi un'alternativa.
- Un incontro compare in produzione solo con `stato: confermato` o `stato: concluso`. Le bozze sono visibili solo in sviluppo, con l'indicazione "Bozza". Senza incontri pubblicabili, le sezioni mostrano lo stato vuoto previsto.
- Vincoli deontologici del promotore (studio legale): nessun invito a segnalare casi o problemi legali, nessuna consulenza gratuita, nessun modulo che indirizzi richieste legali allo studio, nessun riferimento ad attività di acquisto di immobili, nessun superlativo o confronto sullo studio.
- Leggi i file prima di modificarli. Non riscrivere ciò che funziona per miglioramenti marginali.
- Una funzionalità è finita solo quando `npm run build` passa e la pagina è stata controllata nel browser, su desktop e su mobile. Se non puoi controllarla tu, dimmi esattamente cosa guardare.
- Accessibilità: contrasti AA (vedi brief), focus visibile, `prefers-reduced-motion` rispettato, HTML semantico, un solo h1 per pagina, etichette su tutti i campi dei moduli.
- Design: segui token e principi di `docs/brief.md`, inclusa la sezione "Da evitare".
- Fine sessione: aggiorna `docs/stato.md` (fatto, da fare, segnaposto, prossimo passo) e fai un commit con messaggio in italiano.
- Parla con me in italiano, in modo diretto. Quando devo eseguire io qualcosa: dove, comando esatto, risultato atteso.
