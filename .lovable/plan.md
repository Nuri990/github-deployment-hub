
# Problemen oplossen: Lovable Preview + API Key configuratie

## Wat er mis is

**Probleem 1: Vite server draait niet op poort 8080**
De Lovable preview verwacht dat de dev server op poort 8080 draait. In `vite.config.ts` staat geen `server` configuratie, waardoor de preview een lege pagina toont.

**Probleem 2: Geen lock file probleem**
Er IS al een `bun.lock` aanwezig in de root — dit is prima.

## Oplossing

### Wijziging in `vite.config.ts`

Voeg `server: { port: 8080 }` toe:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  define: {
    'process.env': {
      API_KEY: JSON.stringify(process.env.API_KEY || '')
    }
  }
});
```

Dat is de enige bestandswijziging die nodig is. Na deze fix zou de Lovable preview de Noordermatch website correct moeten tonen.

## Technische details

- `bun.lock` is gevonden — geen actie nodig voor dependency versies
- De poort 8080 instelling is vereist voor de Lovable iframe preview
- De rest van de codebase (App.tsx, pagina's, componenten) ziet er correct uit
