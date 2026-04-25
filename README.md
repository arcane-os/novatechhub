# NovaTech Hub

Site web officiel de **NovaTech Hub** — La Tech Rendue Simple & Puissante Pour Tout Le Monde.

## Structure du projet

```
novatechhub/
├── index.html              → Page d'accueil
├── about.html              → Page fondateur (S. Modeste YABLA)
├── assets/
│   ├── css/
│   │   └── style.css       → Styles partagés (nav, footer, boutons, variables)
│   ├── js/
│   │   └── main.js         → Menu mobile + formulaire de contact
│   └── images/
│       └── modeste.png     → Photo du fondateur
└── README.md
```

## Stack

- HTML5 / CSS3 / JavaScript vanilla
- Fonts : Cormorant Garamond + DM Sans (Google Fonts)
- Formulaire : Formspree (gratuit)
- Hébergement : Netlify (gratuit)

## Déploiement

Ce repo est connecté à Netlify.  
Chaque push sur `main` déclenche un déploiement automatique sur [novatechhub.netlify.app](https://novatechhub.netlify.app).

## ⚠️ À faire avant de déployer

1. Créer un compte sur [formspree.io](https://formspree.io) avec `arcaneos2007@gmail.com`
2. Créer un nouveau formulaire → copier l'ID (ex: `xpwzabcd`)
3. Dans `assets/js/main.js`, remplacer `REMPLACE_PAR_TON_ID` par ton vrai ID Formspree

---

© 2026 S. Modeste YABLA · NovaTech Hub · Bénin 🇧🇯
