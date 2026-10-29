# Brief di progetto — Insula

Documento delle decisioni. Ogni modifica a posizionamento, pubblico, struttura o design va concordata e poi registrata qui.

## 1. Cosa deve fare il sito

Il sito presenta un circolo romano che organizza tavoli riservati, incontri con ospite e una nota mensile (la Nota). Deve:

1. far capire in pochi secondi a chi si rivolge e perché vale il tempo di chi legge;
2. rendere credibile la selettività degli incontri;
3. trasformare un visitatore pertinente in una richiesta di invito qualificata;
4. raccogliere iscrizioni alla Nota;
5. presentare il promotore, uno studio legale romano, con informazioni di fatto, senza diventarne la vetrina.

Molti visitatori arriveranno dopo un contatto personale: il sito deve confermare la serietà dell'invito, più che convincere un pubblico freddo.

## 2. Posizionamento

Il rendimento di un immobile dipende da fatti giuridici che il mercato valuta male: quanto tempo serve a liberarlo, chi lo occupa e a che titolo, cosa grava su di esso, chi ha il potere di decidere. Insula è il luogo in cui chi possiede o consiglia patrimoni immobiliari a Roma impara a leggere questi fatti prima che diventino perdite, confrontandosi tra pari.

Le associazioni di proprietari esistenti sono di massa e di servizio; le reti degli amministratori fanno formazione di categoria. Insula è selettiva e lavora sulle decisioni.

Nome provvisorio: Insula, Circolo della proprietà a reddito, Roma. L'insula era il caseggiato in affitto della Roma antica. Prima dell'adozione definitiva vanno verificati dominio e marchio.

## 3. Pubblico

Tre cerchi, in ordine di priorità.

**Proprietà (decide).** Famiglie e società immobiliari di famiglia con patrimonio a reddito a Roma; imprenditori che tengono gli immobili in una società separata; investitori privati con più unità, soprattutto commerciali. Ipotesi da verificare nei primi contatti: il decisore reale è spesso la generazione che sta prendendo in mano la gestione (35–55 anni).

**Consiglieri (influenzano).** Commercialisti con clientela patrimoniale, private banker e wealth manager, notai, family office. Indicano al proprietario a chi rivolgersi. Partecipano per incontrare proprietari e per avere contenuti utili ai propri clienti. Vanno coinvolti anche come relatori.

**Operativi (segnalano).** Property manager, amministratori che gestiscono immobili locati, delegati alle vendite. Vedono i problemi per primi. Canale secondario.

## 4. Le iniziative

- **Tavoli riservati**: 10–14 persone, una sola domanda, circa due ore, regola di Chatham House, partecipazione su invito. Proprietari e consulenti insieme. Cadenza iniziale: uno ogni due mesi.
- **La Nota**: mensile e breve (una questione, l'analisi essenziale, un dato), senza promozioni.
- **Incontri con ospite**: due l'anno, con una figura esterna di rilievo. Sul sito solo quando l'ospite è confermato.
- **Osservatorio** (dopo la v1): nota semestrale con dati aggregati e anonimi dalla pratica dello studio e dati pubblici (per esempio le statistiche sugli sfratti del Ministero dell'Interno). Richiede l'assenso del promotore.

Temi del primo anno (formulazione in `docs/testi.md`): morosità e liberazione; conduttori commerciali in crisi; aste; successioni e comunioni; condominio e immobile a reddito; regole e fiscalità della rendita.

## 5. Rapporto con lo studio promotore

Lo studio è promotore e riferimento scientifico: pagina Promotori con dati di fatto e link al sito dello studio; i suoi avvocati come relatori, sempre insieme a relatori esterni.

Vincoli (codice deontologico forense, artt. 35 e 37): il sito non deve funzionare come canale di acquisizione di pratiche. Nessun invito a segnalare casi, nessuna consulenza gratuita, nessun modulo che indirizzi problemi legali allo studio, nessun riferimento all'acquisto di immobili, nessun superlativo o confronto sullo studio. I testi della pagina Promotori vanno approvati dal promotore prima della pubblicazione.

## 6. Architettura v1

| Pagina | URL | Funzione |
|---|---|---|
| Home | `/` | Posizionamento in pochi secondi, formati, per chi, questioni, prossimo incontro, invito |
| Il circolo | `/circolo` | Per chi valuta seriamente: perché esiste, come funziona, cosa non fa, chi può partecipare |
| Incontri | `/incontri` | Formati e calendario dalla content collection; stato vuoto se nulla è confermato |
| Incontro | `/incontri/[slug]` | Domanda, perché conta, a chi è rivolto, relatori, data e luogo, invito dedicato |
| La Nota | `/nota` | Iscrizione; archivio dei numeri (vuoto all'inizio) |
| Promotori | `/promotori` | Lo studio, con dati di fatto; relatori solo se reali |
| Richiedi un invito | `/invito` | Modulo di qualificazione |
| Conferme | `/invito/ricevuto`, `/nota/iscritto` | Pagine dopo l'invio dei moduli |
| Privacy | `/privacy` | Informativa (bozza con segnaposto) |
| 404 | — | Riporta alla home e all'invito |

Azione principale: «Richiedi un invito» (header, apertura, prossimo incontro, chiusura della home, pagine interne).
Azione secondaria: «Ricevi la Nota» (apertura della home, pagina Nota, footer, opzione nel modulo di invito).

Il link `/invito?incontro=<slug>` precompila un campo nascosto del modulo con l'incontro di provenienza.

### Contenuti come file

- `src/content/incontri/*.md`: frontmatter con `titolo` (la domanda), `formato` (tavolo | ospite), `data`, `ora`, `luogo`, `stato` (bozza | confermato | concluso), `posti`, `relatori` (riferimenti a persone), `temi`, `sintesi`. Nel corpo: «Perché conta» e «A chi è rivolto».
- `src/content/note/*.md`: `numero`, `titolo`, `data`, `sintesi`, corpo.
- `src/content/persone/*.md`: `nome`, `ruolo`, `organizzazione`, `bio` (breve e fattuale), `foto` (facoltativa), `interno` (true se dello studio promotore).
- `src/config/sito.ts`: nome, sottotitolo, email, sede, denominazione legale e codice fiscale, nome e URL dello studio promotore, URL del sito, tempi di risposta. Ogni dato non definitivo resta `[DA DEFINIRE: ...]`.

## 7. Identità visiva

Riferimento materiale: l'ingresso di un palazzo romano, con portone verde scuro, targa d'ottone, peperino e intonaco a calce. Il tono è quello di un circolo serio: sobrio, preciso, senza lusso esibito.

### Colori

| Token | Hex | Uso |
|---|---|---|
| `--calce` | `#ECEDE8` | sfondo principale; testo su fondo portone |
| `--portone` | `#1F3A32` | apertura e sezioni scure, titoli e link su fondo chiaro |
| `--basalto` | `#2B2E2B` | testo corrente |
| `--peperino` | `#62655E` | testo secondario, metadati, filetti |
| `--ottone` | `#C2A060` | solo su fondo portone: dettagli, testo grande, disegno della pianta, pulsante su fondo scuro |

Contrasti: basalto e peperino su calce superano AA; calce su portone circa 10:1; ottone su portone circa 5:1 (AA). Ottone su calce non è ammesso per il testo.

### Tipografia

- **Spectral** (pesi 300, 400, 400 corsivo, 600): titoli e testo.
- **Hanken Grotesk** (pesi 400, 500): navigazione, pulsanti, moduli, date e metadati.
- Scala in px: 14, 16, 19, 24, 32, 44, 64. Testo corrente 19px con interlinea 1,6. Titoli in Spectral 300, interlinea 1,1–1,15, ridotti con `clamp()` su mobile.
- Righe di testo tra 60 e 72 caratteri.
- Maiuscole e minuscole normali ovunque. Unica eccezione: il logotipo, in maiuscoletto spaziato come una targa d'ottone.

### Impaginazione

- Griglia a 12 colonne, larghezza massima 1200px, margini generosi, testo allineato a sinistra.
- Colonna principale (circa 7 colonne) più una colonna a margine (circa 3 colonne) per date, luoghi, note e rimandi, come le note a margine di un commentario. Su mobile la nota scende sotto il paragrafo a cui si riferisce.
- Le sezioni si separano con lo spazio e con il cambio di fondo (calce e portone), non con riquadri.

Wireframe della home (desktop):

```
+--------------------------------------------------------------+
| INSULA          Il circolo  Incontri  La Nota  Promotori     |
|                                       [Richiedi un invito]   |
+==============================================================+
| fondo portone                                                |
|  Titolo su tre righe (Spectral 300)  |  pianta dell'insula   |
|  Testo di apertura                   |  (SVG, filo d'ottone) |
|  [Richiedi un invito]  Ricevi la Nota|                       |
+--------------------------------------------------------------+
| fondo calce                                                  |
|  Tre modi di partecipare             |  note a margine       |
|  Per chi è                           |                       |
|  Le questioni                        |                       |
|  Prossimo incontro / stato vuoto     |  data, luogo          |
|  Chi promuove il circolo             |                       |
+--------------------------------------------------------------+
| fondo portone: Partecipare  [Richiedi un invito]             |
| footer                                                       |
+--------------------------------------------------------------+
```

### Elemento distintivo

La pianta di un'insula nell'apertura della home: disegno originale in SVG (isolato con cortile centrale, botteghe sul fronte strada, vani scala, appartamenti), tratti sottili in ottone su fondo portone. Si traccia una sola volta al caricamento (`stroke-dasharray`, circa due secondi); con `prefers-reduced-motion` appare già completa. È l'unica animazione non richiesta dall'utente. Non va ripetuta come decorazione altrove, salvo un frammento minimo nella pagina 404.

### Pulsanti e moduli

Pulsante principale su fondo chiaro: fondo portone, testo calce. Su fondo portone: fondo ottone, testo portone. Angoli vivi o raggio di 2px. Le etichette dicono cosa succede («Invia la richiesta», «Iscriviti alla Nota»). Gli errori compaiono accanto al campo, in testo, e spiegano come correggere.

### Da evitare

Card arrotondate con ombra, gradienti, etichette in maiuscolo sopra i titoli, una parola evidenziata nei titoli, frecce nei pulsanti e nei link, puntini come separatori nei metadati, numerazioni 01/02/03 per contenuti che non sono sequenze, animazioni di entrata sezione per sezione, foto stock di persone. Nella v1 nessuna fotografia: arriveranno solo scatti propri o licenziati di architettura romana (portoni, cortili, scale).

## 8. Dopo la v1

In ordine probabile: strumento di newsletter con doppio opt-in al posto della raccolta tramite modulo; archivio della Nota; pagina Osservatorio con il primo rapporto; gestione delle iscrizioni ai singoli incontri; statistiche di visita senza cookie; fotografie; eventuale versione inglese.
