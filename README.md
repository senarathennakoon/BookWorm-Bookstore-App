# BookWorm: Full-Stack Book Store Mobile App

A full-stack mobile bookstore application for browsing, purchasing, rating, and managing books, built with React Native (Expo) and a Node.js / Express REST API.

> **Team project.** Built by a group of students at SLIIT (Year 2, Semester 2). The project was divided into management components among team members and later integrated into a single application. See [My Individual Contribution](#my-individual-contribution) for the part I built.

## Tech Stack

| Layer | Technology |
|---|---|
| Mobile app | React Native (Expo) |
| Backend | Node.js, Express.js (REST APIs) |
| Database | MongoDB |
| Authentication | JWT |
| Image storage | Cloudinary |
| Testing | Jest |

## Features

- **Authentication and profiles:** JWT-based login and a user profile with quick access to orders, cart, recommendations, and reviews.
- **Storefront:** home page with promotional banners, category shortcuts, and a bestsellers carousel.
- **Book details:** price, average rating, page count, language, genre, stock status, description, and purchase actions.
- **Ratings and reviews:** star ratings, average rating calculation, and the ability to edit or delete your own reviews.
- **Recommendations:** personalized book recommendations on the user profile.
- **Cart and orders:** order management with order numbers, status (such as Pending, Processing, Shipped, Completed, or Delivered), purchased items, payment method, price breakdown with tax and shipping, and shipping address.
- **Admin tools:** add books with author, description, genre, and cover image upload (Cloudinary), plus stock and category management.

## My Individual Contribution

- **Purchase Order Manager:** the order management component of the app.
  - **My Orders (customer):** lists each order's order number, date, status badge, purchased items, and total.
  - **All Orders (admin):** store-wide order list for managing orders, showing order number, date, status badge (such as Pending, Processing, Completed), item count, payment method, customer email, total, and tap-to-view details.
  - **Order details:** order information (order number, date placed, payment method), items with quantities, price breakdown (subtotal, 5% tax, shipping, total), and the shipping address.
  - **Order management actions:** edit order status, mark an order as shipped or delivered, cancel an order, and delete an order.

The other management components (books, categories, stock, cart, reviews, and recommendations) and the final integration were developed by other team members.

## Project Structure

```
backend/
  Src/          # routes, controllers, middleware, models, lib (Cloudinary)
  tests/        # Jest tests per management component
mobile/
  app/          # Expo Router screens
  components/  constants/  lib/  store/  assets/
  tests/
```

## Getting Started

**Prerequisites:** Node.js 18+, a MongoDB connection string (a free MongoDB Atlas cluster works), and a free Cloudinary account for image uploads.

### 1. Backend

```bash
cd backend
npm install
```

Copy `backend/.env.example` to `backend/.env` and fill in your own values (MongoDB URI, a random JWT secret, and your Cloudinary credentials). Then start the server (uses nodemon):

```bash
npm run dev
```

By default the server listens on the port set by `PORT` in your `.env` (3000 in `.env.example`).

### 2. Mobile app

```bash
cd mobile
npm install
npx expo start
```

Copy `mobile/.env.example` to `mobile/.env` and set `EXPO_PUBLIC_API_URL` to your running backend (for example `http://<your-computer-ip>:3000/api`). If it is not set, the app falls back to a local backend on port 3000. Then open the app with Expo Go or an emulator.

## Testing

There are Jest unit tests for each of the seven management components (recommendation, review, stock, order, cart, category, book).

```bash
# Backend
cd backend
npm test

# Mobile
cd mobile
npm test -- --runInBand
```

To run a single component, for example orders:

```bash
npm test -- tests/order/orderManagement.test.js
```

## Security Note

Real credentials are not included in this repository. `.env` files are excluded via `.gitignore`; use the provided `.env.example` as a template and supply your own values.

## License

This project was created for academic purposes at SLIIT.
