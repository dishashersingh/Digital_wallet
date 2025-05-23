# 💸 Digital Wallet System

A secure and scalable digital wallet backend built using **Node.js**, **Express**, and **MongoDB**. This system supports user authentication, wallet transactions, fraud detection, a bonus reward system, and comprehensive admin reporting.

---

## 🚀 Features

- 🔐 **User Authentication** using JWT
- 💰 **Wallet Operations**: Deposit, Withdraw, and Transfer
- 💱 **Multi-currency Support** (INR, USD, etc.)
- 🎁 **Bonus System**: Earn GEMS on deposits
- 🧠 **Fraud Detection**: Rule-based with daily scheduled scans
- 👮 **Admin APIs**:
  - View flagged transactions
  - View top users by balance or transaction volume
  - Soft-delete users or transactions

---

## 🧱 Project Structure

```

├── config/           # DB connection setup
├── controllers/      # API route handlers
├── middleware/       # JWT auth and admin checks
├── models/           # Mongoose schemas (User, Transaction)
├── routes/           # All API route definitions
├── utils/            # Utility scripts (e.g., fraud detection)
├── .env              # Environment variables
├── server.js         # Application entry point

````

---

## 🛠️ Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### 📦 Installation

```bash
git clone https://github.com/your-username/wallet-system.git
cd wallet-system
npm install
````

### ⚙️ Configuration

Create a `.env` file in the root directory:

```
PORT=5008
MONGO_URI=mongodb://localhost:27017/your-db-name
JWT_SECRET=your_Secret_Key
```

---

## 🧪 Running the App

```bash
npm run dev
```

By default, the app runs on: `http://localhost:5008`

---

## 📬 API Endpoints (Examples)

| Method | Endpoint                            | Description                        |
| ------ | ----------------------------------- | ---------------------------------- |
| POST   | `/api/auth/register`                | Register a new user                |
| POST   | `/api/auth/login`                   | Login and receive JWT token        |
| POST   | `/api/wallet/deposit`               | Deposit funds into wallet          |
| POST   | `/api/wallet/withdraw`              | Withdraw funds from wallet         |
| POST   | `/api/wallet/transfer`              | Transfer funds to another user     |
| GET    | `/api/admin/flags`                  | View flagged suspicious activities |
| PATCH  | `/api/admin/transaction/:id/delete` | Soft delete a transaction          |

---

## 📌 Bonus Features

* 🗓️ `dailyFraudScan`: A scheduled job to detect and log suspicious activities.
* 📨 Optional: Add email notifications for large/suspicious transactions (mocked).

---

## 📘 API Documentation

For detailed API request/response formats, visit the [Postman Collection](https://documenter.getpostman.com/view/45160821/2sB2qaih9F) or refer to the included `postman_collection.json` in the repository.


