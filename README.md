#  Hospital Management API
https://saiyashassignment-2-hospital-management.onrender.com (Render URL)
A RESTful API for managing hospital records and user authentication, built with **Node.js**, **Express**, and **MongoDB**.

---

##  Project Structure

```
Saiyash Poojari/
├── config/
│   ├── db.js           # MongoDB connection
│   └── passport.js     # Passport local strategy
├── models/
│   ├── Hospitals.js    # Hospital schema
│   └── Users.js        # User schema
├── router/
│   ├── authThang.js    # Auth routes (register, login)
│   └── hospitalThang.js# Hospital CRUD routes
├── .env.example        # Environment variable template
├── package.json
└── server.js           # Entry point
```

---

##  Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/saiyash07/Saiyashassignment-2-hospital-management-api.git

# 2. Navigate into the project folder
cd "Saiyash Poojari"

# 3. Install dependencies
npm install

# 4. Set up environment variables
cp .env.example .env
# Then edit .env and fill in your MONGO_URI
```

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/hospital_api
PORT=4000
```

### Run Locally

```bash
npm start
```

Server runs at `http://localhost:4000`

---

##  API Endpoints

### Base URL
- **Local:** `http://localhost:4000`
- **Production:** `https://<your-render-service>.onrender.com`

---

###  Auth Routes

#### `POST /register` — Register a new user

**Request Body:**
```json
{
  "username": "saiyash",
  "email": "saiyash@example.com",
  "password": "secret123"
}
```

**Response `201`:**
```json
{
  "message": "user created successfully!!!!",
  "user": {
    "_id": "...",
    "username": "saiyash",
    "email": "saiyash@example.com"
  }
}
```

---

#### `POST /login` — Login with credentials

**Request Body:**
```json
{
  "username": "saiyash",
  "password": "secret123"
}
```

**Response `200`:**
```json
{
  "message": "Login successful!!!",
  "user": {
    "id": "...",
    "username": "saiyash",
    "email": "saiyash@example.com"
  }
}
```

---

###  Hospital Routes

All hospital routes are prefixed with `/hospitals`.

| Method   | Endpoint               | Description                          |
|----------|------------------------|--------------------------------------|
| `GET`    | `/hospitals`           | Get all hospitals                    |
| `GET`    | `/hospitals/available` | Get hospitals with available beds    |
| `GET`    | `/hospitals/:id`       | Get a single hospital by ID          |
| `POST`   | `/hospitals`           | Create a new hospital                |
| `PUT`    | `/hospitals/:id`       | Update a hospital by ID              |
| `DELETE` | `/hospitals/:id`       | Delete a hospital by ID              |

---

#### `GET /hospitals` — Get all hospitals

**Response `200`:**
```json
[
  {
    "_id": "...",
    "name": "City Hospital",
    "city": "Mumbai",
    "totalBeds": 100,
    "availableBeds": 20
  }
]
```

---

#### `GET /hospitals/available` — Hospitals with beds available

Returns only hospitals where `availableBeds > 0`.

---

#### `GET /hospitals/:id` — Get hospital by ID

**Response `200`:**
```json
{
  "_id": "...",
  "name": "City Hospital",
  "city": "Mumbai",
  "totalBeds": 100,
  "availableBeds": 20
}
```

**Error `404`:** `{ "message": "Hospital not Found" }`  
**Error `400`:** `{ "message": "invalid hospital id!" }`

---

#### `POST /hospitals` — Create a hospital

**Request Body:**
```json
{
  "name": "City Hospital",
  "city": "Mumbai",
  "totalBeds": 100,
  "availableBeds": 20
}
```

**Response `201`:**
```json
{
  "message": "hospital created successfully!!!!",
  "hospital": { ... }
}
```

>  `availableBeds` cannot be greater than `totalBeds`.

---

#### `PUT /hospitals/:id` — Update a hospital

Same request body as `POST`. All fields are required.

**Response `200`:**
```json
{
  "message": "hospital updated successfully!!!!",
  "hospital": { ... }
}
```

---

#### `DELETE /hospitals/:id` — Delete a hospital

**Response `200`:**
```json
{
  "message": "hospital deleted successfully!!!!",
  "hospital": { ... }
}
```

---

##  Data Models

### Hospital

| Field           | Type   | Required | Constraints          |
|-----------------|--------|----------|----------------------|
| `name`          | String | ✅       | —                    |
| `city`          | String | ✅       | —                    |
| `totalBeds`     | Number | ✅       | min: 0               |
| `availableBeds` | Number | ✅       | min: 0, ≤ totalBeds  |

### User

| Field      | Type   | Required | Constraints   |
|------------|--------|----------|---------------|
| `username` | String | ✅       | unique        |
| `email`    | String | ✅       | unique        |
| `password` | String | ✅       | bcrypt hashed |

---

## 🛠 Tech Stack

| Technology     | Purpose                  |
|----------------|--------------------------|
| Node.js        | Runtime                  |
| Express.js     | Web framework            |
| MongoDB        | Database                 |
| Mongoose       | ODM                      |
| Passport.js    | Authentication strategy  |
| bcryptjs       | Password hashing         |
| dotenv         | Environment config       |
| cors           | Cross-origin support     |

---

## 👤 Author

**Saiyash Poojari**
