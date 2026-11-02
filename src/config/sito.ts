// Dati del circolo. Unico punto in cui compaiono: i componenti leggono da qui.
// Ogni dato non definitivo resta nella forma `[DA DEFINIRE: ...]` ed è elencato in docs/stato.md.

export const sito = {
  nome: 'Insula',
  sottotitolo: 'Circolo della proprietà a reddito, Roma',
  descrizione:
    'Tavoli riservati, incontri e una nota mensile per chi possiede o consiglia patrimoni immobiliari a reddito a Roma.',
  url: '[DA DEFINIRE: URL del sito]',
  email: '[DA DEFINIRE: email del circolo]',
  sede: '[DA DEFINIRE: sede]',
  formatoSedeOspite: '[DA DEFINIRE: formato e sede]',
  partecipazione: '[DA DEFINIRE: gratuita oppure con quota associativa]',
  datiLegali: "[DA DEFINIRE: denominazione legale e codice fiscale dell’associazione]",
  tempiRisposta: '[DA DEFINIRE: numero]',
  studio: {
    nome: '[DA DEFINIRE: nome dello studio]',
    url: '[DA DEFINIRE: URL]',
  },
} as const;

/** Vero se il valore è ancora un segnaposto. */
export function daDefinire(valore: string): boolean {
  return valore.startsWith('[DA DEFINIRE');
}
