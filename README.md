# Clina – Frontend + Appwrite
**Clina** è una piattaforma intelligente progettata per semplificare la gestione degli appuntamenti medici, la comunicazione tra pazienti e cliniche e l’automazione dei reminder attraverso WhatsApp e voce.

Questa repository contiene il frontend dell’applicazione, sviluppato in Next.js con interfaccia multi-ruolo (pazienti, medici, segreteria, direzione), integrato con Appwrite per la gestione dell'autenticazione, dei dati e dei file.

**Funzionalità principali**
- Autenticazione sicura tramite Appwrite (email, magic link, OTP)

- Dashboard personalizzate per ogni ruolo

- Calendario medico intelligente e gestione appuntamenti

- Reminder automatici (testuali e vocali)

- Integrazione con chatbot WhatsApp e voicebot (via microservizi esterni)

- Upload e gestione referti e documenti tramite Appwrite Storage

**Struttura del progetto**
Il progetto è organizzato per essere modulare e facilmente scalabile:

- lib/: configurazione SDK Appwrite

- hooks/: hook personalizzati per utenti, appuntamenti, ruoli

- pages/: pagine pubbliche e protette per pazienti e staff

- components/: componenti riutilizzabili per l’interfaccia

- utils/: helper per la formattazione e la gestione delle chiamate

**Requisiti**
- Node.js (versione 18 o superiore)

- Un’istanza Appwrite attiva (cloud o self-hosted)

- File .env.local configurato con le chiavi del progetto
