
#   DEXCHANGE SAAS

##  Installation

### Prérequis
- Node.js 18+ 
- npm,


## 🛠️ Technologies utilisées

### Frontend
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **Shadcn/ui** - Composants UI réutilisables

# Creation de projet next
npx create-next-app@latest  pour creer un projet 
 apres j'avoir exécuté cette commande ,
  # create-next-app 
  créera un dossier avec le nom de votre projet et installera les dépendances nécessaires.
 

## 🚀 Scripts disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement
npm run build        # Crée le build de production
npm run start        # Lance le serveur de production

npm run lint         # Vérifie le code avec ESLint
npm run type-check   # Vérifie les types TypeScript
```
 
##  Fonctionnalités

-  Dashboard interactif avec statistiques en temps réel
-  Tableau de projets avec barres de progression
-  Suivi des commandes avec timeline
-  Authentification (Sign In / Sign Up)
-  Navigation responsive avec sidebar et navbar
-  Mode sombre / clair (Dark/Light mode)
-  Design moderne avec glassmorphism
-  Animations et transitions fluides
-  Formulaires avec validation (Zod + React Hook Form)


### Librairies principales /Dependances

| Librairie | Version | Usage |
|-----------|---------|-------|
| `next` | ^14.x | Framework React |
| `react` | ^18.x | Bibliothèque UI |
| `typescript` | ^5.x | Typage statique |
| `tailwindcss` | ^3.x | Styling CSS |
| `lucide-react` | ^0.263.1 | Icônes |
| `react-hook-form` | ^7.x | Gestion de formulaires |
| `zod` | ^3.x | Validation de schémas |
| `next-themes` | ^0.2.x | Gestion du thème dark/light |
| `@radix-ui/*` | ^1.x | Composants accessibles (via shadcn/ui) |

### Composants Shadcn/ui utilisés
npx shadcn@latest init: //installation de shadcn/ui
    - `button`, `input`, `checkbox`, `switch`
    - `form`, `label`, `dropdown-menu`
    - `sheet` (menu mobile)
    - `card`, `table`




## 📁 Structure du projet
 
text-exchange-saas/
├── app/                      # App Router Next.js
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Page d'accueil (Login)
│   ├── dashboard/
│   │   └── page.tsx         # Page Dashboard
│   └── pages/
│       ├── login.tsx        # Composant Login
│       └── dashboard.tsx    # Composant Dashboard
├── components/              # Composants réutilisables
│   ├── ui/                  # Composants Shadcn/ui
│   ├── sidebar.tsx          # Barre latérale
│   ├── navbar.tsx           # Barre de navigation
│   ├── stat.tsx             # Cartes de statistiques
│   ├── theme-provider.tsx   # Provider pour dark mode
│   └── theme-toggle.tsx     # Bouton toggle theme
├── public/                  # Fichiers statiques
│   ├── authors/               # Logos des projets
│   ├── logos/               # Logos des projets
│   └── image.png            # Logo principal
├── styles/
│   └── globals.css          # Styles globaux
├── lib/
│   └── utils.ts             # Fonctions utilitaires
├── next.config.js           # Configuration Next.js
├── tailwind.config.ts       # Configuration Tailwind
├── tsconfig.json            # Configuration TypeScript
└── package.json             # Dépendances
```

 

 
## 🌐 Déploiement vercel

 via l'interface web :
1. Connexion sur [vercel.com](https://vercel.com)
2. Importez mon repository GitHub
3. Cliquez sur "Deploy"





## 📝 Ce que je ferais avec plus de temps

### Fonctionnalités
- 🔐 **Authentification complète** avec NextAuth.js (Google, GitHub, Email)
- 🗄️ **Base de données** avec Prisma + PostgreSQL/MongoDB
 - 🔔 **Notifications en temps réel** avec Socket.io
- 📱 **Application mobile** avec React Native
- 🌍 **Internationalisation** (i18n) multi-langues
- 🔍 **Recherche avancée** avec filtres et tri
- 📤 **Export de données** en PDF/Excel
 
 
### UX/UI
- ✨ **Micro-interactions** et animations avancées (Framer Motion)
- 🎨 **Thèmes personnalisables** (couleurs, polices, layouts)
- ♿ **Accessibilité** (WCAG 2.1 AA compliance)
- 📊 **Visualisations de données** interactives
 - 📋 **Tables avancées** avec tri, filtres, pagination
- 🗂️ **Gestion de fichiers** avec drag & drop

 

## Documentation
- [Next.js](https://nextjs.org/) - Framework
- [Shadcn/ui](https://ui.shadcn.com/) - Composants UI
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide](https://lucide.dev/) - Icônes
- [Vercel](https://vercel.com/) - Hébergement

