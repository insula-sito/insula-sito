// Validazione dei moduli con `data-valida`. Senza JavaScript resta la validazione del browser.
import { messaggi } from '../lib/moduli';

type Controllo = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function errore(c: Controllo): string {
  if (c instanceof HTMLInputElement && c.type === 'checkbox') {
    return c.required && !c.checked ? (c.dataset.messaggio ?? messaggi.obbligatorio) : '';
  }
  const valore = c.value.trim();
  if (c.required && !valore) return messaggi.obbligatorio;
  if (c instanceof HTMLInputElement && c.type === 'email' && valore && !EMAIL.test(valore)) {
    return messaggi.email;
  }
  return '';
}

function mostra(c: Controllo, messaggio: string) {
  const riquadro = document.getElementById(`${c.id}-errore`);
  if (!riquadro) return;
  riquadro.textContent = messaggio;
  riquadro.hidden = !messaggio;
  if (messaggio) c.setAttribute('aria-invalid', 'true');
  else c.removeAttribute('aria-invalid');
}

for (const modulo of document.querySelectorAll<HTMLFormElement>('form[data-valida]')) {
  modulo.noValidate = true;
  const controlli = () =>
    Array.from(modulo.querySelectorAll<Controllo>('input[id], select[id], textarea[id]'));

  modulo.addEventListener('submit', (evento) => {
    let primo: Controllo | undefined;
    for (const c of controlli()) {
      const messaggio = errore(c);
      mostra(c, messaggio);
      if (messaggio && !primo) primo = c;
    }
    if (primo) {
      evento.preventDefault();
      primo.focus();
    }
  });

  // Dopo un errore, il messaggio si aggiorna mentre si corregge.
  const ricontrolla = (evento: Event) => {
    const c = evento.target as Controllo;
    if (c.getAttribute('aria-invalid')) mostra(c, errore(c));
  };
  modulo.addEventListener('input', ricontrolla);
  modulo.addEventListener('change', ricontrolla);
}
