# Portify Backend API 🚀

A modular Node.js & Express API connected to MongoDB Atlas Cloud for the Portify portfolio & CV template platform.

## 📁 Architecture & Team Workflow
```
backend/
├── config/
│   └── db.js               # MongoDB Atlas connection setup
├── controllers/            # Request handlers (logic)
│   ├── authController.js
│   ├── cvTemplateController.js
│   ├── portfolioTemplateController.js
│   ├── userController.js
│   ├── orderController.js
│   ├── categoryController.js
│   ├── couponController.js
│   └── settingController.js
├── models/                 # Mongoose Data Schemas
│   ├── User.js
│   ├── CVTemplate.js
│   ├── PortfolioTemplate.js
│   ├── Order.js
│   ├── Category.js
│   ├── Coupon.js
│   └── Setting.js
├── routes/                 # Express Route Definitions
│   ├── index.js            # Central route aggregator (/api)
│   ├── authRoutes.js
│   ├── cvTemplateRoutes.js
│   ├── portfolioTemplateRoutes.js
│   ├── userRoutes.js
│   ├── orderRoutes.js
│   ├── categoryRoutes.js
│   ├── couponRoutes.js
│   └── settingRoutes.js
├── middleware/
│   └── errorHandler.js     # Centralized error handler
├── server.js               # Main entry point
└── .env                    # Environment variables
```

## 🛠️ Setup Instructions for Team Members

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure MongoDB Cloud (Atlas):**
   Open `.env` and set your MongoDB Atlas connection string:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portify?retryWrites=true&w=majority
   PORT=5000
   CLIENT_URL=http://localhost:5173
   ```

3. **Start the server in Development mode:**
   ```bash
   npm run dev
   ```

## 🌐 Available API Endpoints

- **Health Check & Route Directory**: `GET /api/health`
- **Authentication**: `/api/auth` (`/login`, `/register`, `/me`)
- **CV Templates**: `/api/cv-templates` (`GET`, `POST`, `GET :id`, `PUT :id`, `DELETE :id`)
- **Portfolio Templates**: `/api/portfolio-templates` (`GET`, `POST`, `GET :id`, `PUT :id`, `DELETE :id`)
- **User Management**: `/api/users` (`GET /`, `PATCH /:id/role`, `DELETE /:id`)
- **Orders & Payments**: `/api/orders` (`GET /`, `POST /`, `PATCH /:id/status`)
- **Categories**: `/api/categories` (`GET /`, `POST /`, `DELETE /:id`)
- **Coupons**: `/api/coupons` (`GET /`, `POST /`, `DELETE /:id`)
- **Settings & Stats**: `/api/settings` (`GET /`, `PUT /`, `GET /overview-stats`)
