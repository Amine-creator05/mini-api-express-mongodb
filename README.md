# Mini REST API with Node.js, Express, and MongoDB

This is a simple REST API for managing Clients, Produits (Products), and Commandes (Orders) using MVC architecture.

## Features

- **Clients**: nom, email, téléphone, ville
- **Produits**: nom, catégorie, prix, quantité en stock
- **Commandes**: date, client, produits + quantités, montant total

Each module supports full CRUD operations.

## Project Structure

```
project/
├── models/
│   ├── Client.js
│   ├── Produit.js
│   └── Commande.js
├── controllers/
│   ├── clientController.js
│   ├── produitController.js
│   └── commandeController.js
├── routes/
│   ├── clientRoutes.js
│   ├── produitRoutes.js
│   └── commandeRoutes.js
├── config/
│   └── db.js
├── app.js
├── package.json
└── .env
```

## Installation

1. Clone or download the project.
2. Run `npm install` to install dependencies.
3. Ensure MongoDB is running on `mongodb://127.0.0.1:27017/mini_api`.
4. Run `npm run dev` to start the server with nodemon.

## Usage

The server runs on port 3000.

### API Endpoints

#### Clients
- `POST /clients` - Create a client
- `GET /clients` - Get all clients
- `GET /clients/:id` - Get a client by ID
- `PUT /clients/:id` - Update a client
- `DELETE /clients/:id` - Delete a client

#### Produits
- `POST /produits` - Create a product
- `GET /produits` - Get all products
- `GET /produits/:id` - Get a product by ID
- `PUT /produits/:id` - Update a product
- `DELETE /produits/:id` - Delete a product

#### Commandes
- `POST /commandes` - Create an order (calculates total automatically)
- `GET /commandes` - Get all orders (populated)
- `GET /commandes/:id` - Get an order by ID
- `PUT /commandes/:id` - Update an order
- `DELETE /commandes/:id` - Delete an order

### Example Requests

Create a client:
```json
POST /clients
{
  "nom": "Amine",
  "email": "amine.moumou05@gmail.com",
  "telephone": "123456789",
  "ville": "casablanca"
}
```

Create a product:
```json
POST /produits
{
  "nom": "Laptop",
  "categorie": "Electronics",
  "prix": 1000,
  "quantite_stock": 50
}
```

Create an order:
```json
POST /commandes
{
  "client": "client_id_here",
  "produits": [
    { "produit": "product_id_here", "quantite": 2 }
  ]
}
```

## Troubleshooting

- Ensure MongoDB is installed and running.
- Check the .env file for MONGO_URI.
- Use tools like Postman to test the API.