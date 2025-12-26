# GAT Brukerveiledning

Søkbar brukerveiledning for GAT-systemet (MinGat & GatGo) ved Finnmarkssykehuset HF.

## ✨ Funksjoner

- 🔍 **Intelligent søk** med forslag mens du skriver
- 📂 **7 kategorier** for enkel navigering
- 📱 **Plattformfiltrering** - MinGat (web) / GatGo (mobil)
- 📋 **Steg-for-steg veiledninger**
- 📞 **Supportkontakter**

## 🚀 Installasjon

### 1. Installer avhengigheter

```bash
cd gat-brukerveiledning
npm install
```

### 2. Start utviklingsserver

```bash
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000)

### 3. Bygg for produksjon

```bash
npm run build
npm run start
```

## 📁 Prosjektstruktur

```
gat-brukerveiledning/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── guides/
│   │   │   ├── GATUserGuide.tsx   # Hovedkomponent
│   │   │   ├── GuideCard.tsx
│   │   │   └── SupportContacts.tsx
│   │   └── ui/
│   │       ├── SearchBar.tsx      # Søkefelt med forslag
│   │       └── CategoryFilter.tsx
│   ├── data/
│   │   ├── categories.ts
│   │   ├── guides.ts              # Alle veiledninger
│   │   └── support.ts
│   ├── hooks/
│   │   └── useSearch.ts           # Søkelogikk med Fuse.js
│   └── lib/
│       └── types.ts
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 📝 Legge til nye veiledninger

Rediger `src/data/guides.ts`:

```typescript
{
  id: 'ny-veiledning',
  title: 'English Title',
  titleNo: 'Norsk tittel',
  summary: 'English summary',
  summaryNo: 'Norsk sammendrag',
  keywords: ['nøkkelord1', 'søkeord2'],
  category: 'authentication', // Se kategorier under
  interface: 'mingat',        // 'mingat' | 'gatgo' | 'all'
  complexity: 'basic',        // 'basic' | 'intermediate' | 'advanced'
  estimatedTime: '5 minutter',
  steps: [
    {
      id: 'step-1',
      title: 'Første steg',
      content: 'Beskrivelse...',
      subSteps: ['Punkt 1', 'Punkt 2'],
      callout: {
        type: 'warning',      // 'info' | 'warning' | 'error' | 'success'
        title: 'Viktig',
        content: 'Viktig info'
      }
    }
  ],
  faq: [
    { question: 'Spørsmål?', answer: 'Svar.' }
  ]
}
```

## 🏷️ Kategorier

| ID | Norsk | Farge |
|----|-------|-------|
| `authentication` | Pålogging | Blå |
| `mobile` | Mobil App (GatGo) | Grønn |
| `shift-management` | Vaktplanlegging | Oransje |
| `time-tracking` | Timeregistrering | Lilla |
| `navigation` | Navigasjon | Cyan |
| `compliance` | Godkjenninger | Rosa |
| `troubleshooting` | Feilsøking | Rød |

## 📞 Supportkontakter

| Kategori | Kontakt | Telefon |
|----------|---------|---------|
| Tekniske problemer | Helse Nord IKT | 07022 |
| GAT-problemer | Lokal leder | 78 96 70 00 |
| HR/Lønn | Ansatteservice | Personalportalen |

---

Utviklet for Finnmarkssykehuset HF
