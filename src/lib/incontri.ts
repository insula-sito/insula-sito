import { getCollection, type CollectionEntry } from 'astro:content';

export type Incontro = CollectionEntry<'incontri'>;

/** In produzione solo confermati e conclusi; in sviluppo anche le bozze. */
export async function incontriPubblicabili(): Promise<Incontro[]> {
  return getCollection(
    'incontri',
    ({ data }) => data.stato !== 'bozza' || import.meta.env.DEV,
  );
}

/** Incontri non conclusi, dal più vicino; le bozze senza data vanno in fondo. */
export async function incontriInProgramma(): Promise<Incontro[]> {
  const oggi = new Date();
  oggi.setHours(0, 0, 0, 0);
  const tutti = await incontriPubblicabili();
  return tutti
    .filter(({ data }) => data.stato !== 'concluso' && (!data.data || data.data >= oggi))
    .sort((a, b) => (a.data.data?.getTime() ?? Infinity) - (b.data.data?.getTime() ?? Infinity));
}

export const etichettaFormato: Record<Incontro['data']['formato'], string> = {
  tavolo: 'Tavolo riservato',
  ospite: 'Incontro con ospite',
};

const formatoData = new Intl.DateTimeFormat('it-IT', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Rome',
});

export function dataEstesa(data: Date | undefined): string {
  return data ? formatoData.format(data) : '[DA DEFINIRE: data]';
}
