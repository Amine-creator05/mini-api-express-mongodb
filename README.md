#  Mini API REST - Express & MongoDB + JWT

## 📌 Description
Ce projet est une mini API REST développée avec **Node.js**, **Express.js** et **MongoDB**, en respectant une architecture **MVC**.  
Elle permet de gérer un système commercial simple avec authentification sécurisée via **JWT (JSON Web Token)**.

---

## 🧱 Fonctionnalités

### 🔐 Authentification (JWT)
- Inscription d’un utilisateur
- Connexion avec génération de token
- Protection des routes avec middleware

### 👤 Clients
- Ajouter un client
- Afficher tous les clients
- Modifier un client
- Supprimer un client

### 📦 Produits
- Ajouter un produit
- Afficher tous les produits
- Modifier un produit
- Supprimer un produit

### 🧾 Commandes
- Créer une commande
- Afficher les commandes
- Modifier une commande
- Supprimer une commande

---

## ⚙️ Technologies utilisées
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt.js

---

## 📁 Structure du projet

project/
│
├── models/
├── controllers/
├── routes/
├── middleware/
├── config/
├── TEST DANS POSTMAN/
├── app.js
└── README.md

---

## 🚀 Installation et exécution

# Cloner le projet
git clone https://github.com/Amine-creator05/mini-api-express-mongodb.git

# Accéder au dossier
cd mini-api-express-mongodb

# Installer les dépendances
npm install

# Lancer le serveur
npm run dev

---

## 🔑 Authentification

### 📌 Register
POST /auth/register

### 📌 Login
POST /auth/login

👉 Retourne un token JWT à utiliser dans les requêtes protégées

---

## 🔒 Utilisation du token

Dans Postman → Headers :

Authorization: YOUR_TOKEN

---

## 🌐 Routes API

### Clients
- GET /clients
- POST /clients
- PUT /clients/:id
- DELETE /clients/:id

### Produits
- GET /produits
- POST /produits
- PUT /produits/:id
- DELETE /produits/:id

### Commandes
- GET /commandes
- POST /commandes
- PUT /commandes/:id
- DELETE /commandes/:id

---

## 📬 Tests
Toutes les routes ont été testées avec Postman  
Les captures d’écran sont disponibles dans le dossier TEST DANS POSTMAN/

---

## 🔐 Gestion des rôles et des autorisations (RBAC)

Une gestion des rôles et des permissions a été ajoutée afin de contrôler l’accès aux routes de l’API.

### 👥 Rôles
Chaque utilisateur possède un rôle qui définit ses droits d’accès :
- admin : accès complet (CRUD sur tous les modules)
- commercial : gestion des clients et commandes
- magasinier : gestion des produits
- consultation : accès en lecture uniquement

### 🛡️ Permissions
Chaque rôle contient des permissions spécifiques pour :
- clients
- produits
- commandes

Avec les actions :
- create
- read
- update
- delete

### 🔒 Sécurisation
L’accès aux routes est protégé par :
- Middleware JWT → vérifie l’authentification
- Middleware permissions → vérifie les droits d’accès

### ⚠️ Codes HTTP
- 401 → utilisateur non authentifié
- 403 → accès interdit (permissions insuffisantes)

### 🧪 Tests avec Postman
Les tests montrent :
- accès autorisé selon le rôle 
- accès refusé si permissions insuffisantes 

## ✅ Bonnes pratiques respectées
- Architecture MVC
- Séparation des routes
- Utilisation de middleware
- Sécurité avec JWT
- Hash des mots de passe (bcrypt)
- Réponses JSON avec codes HTTP

---

## 👨‍💻 Auteur
Mohamed Amine MOUMOU