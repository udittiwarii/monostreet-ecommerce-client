# MONOSTREET

MONOSTREET is a React and Vite storefront for a streetwear ecommerce experience. It includes product discovery, product details, cart and checkout flows, authentication-protected customer pages, wishlist management, order tracking, payment handoff, and a floating AI shopping buddy.

## Features

- Responsive storefront with home, collection, product, about, and contact pages
- Authentication flow with login, registration, protected routes, and session restore
- Product browsing with reusable product cards, galleries, tabs, and related products
- Cart, checkout, address selection, wishlist, profile, orders, and order details pages
- Razorpay payment page integration through environment configuration
- Redux Toolkit state management for auth, cart, and wishlist flows
- Axios API client with cookie support and automatic token refresh
- Framer Motion, GSAP, and Lenis for page transitions and smooth interactions
- Tailwind CSS styling with local brand assets and fonts

## Tech Stack

- React 19
- Vite 8
- React Router 7
- Redux Toolkit and React Redux
- Axios
- Tailwind CSS 4
- Framer Motion
- GSAP
- Lucide React

## Getting Started

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root and add the service URLs used by the frontend:

```env
VITE_AUTH_SERVICE=
VITE_PRODUCT_SERVICE=
VITE_CART_SERVICE=
VITE_ORDER_SERVICE=
VITE_PAYMENT_SERVICE=
VITE_RAZORPAY_KEY=
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
src/
  animations/        Shared animation helpers
  assets/            Images, logos, and fonts
  components/        Reusable UI, layout, cart, auth, product, order, and AI buddy components
  data/              Static product, category, and banner data
  hooks/             Reusable React hooks
  layouts/           Main and auth layouts
  pages/             Public, auth, and protected route pages
  redux/             Store setup and slices
  routes/            App routes and route protection
  services/          Axios client plus auth, product, cart, order, payment, and wishlist APIs
  styles/            Global styles
  utils/             Formatting, constants, helpers, and dummy data
```

## Routes

- `/` - Home
- `/collection` - Product collection
- `/product/:id` - Product details
- `/about` - About
- `/contact` - Contact
- `/login` - Login
- `/register` - Register
- `/cart` - Protected cart page
- `/checkout` - Protected checkout page
- `/wishlist` - Protected wishlist page
- `/profile` - Protected profile page
- `/orders` - Protected orders page
- `/orders/:orderId` - Protected order details page
- `/payment/:orderId` - Protected payment page

## Notes

- The app expects backend services to be available at the configured `VITE_*_SERVICE` URLs.
- API requests use cookies with `withCredentials: true`, so backend CORS and cookie settings must allow the frontend origin.
- The auth refresh flow calls `VITE_AUTH_SERVICE/api/auth/refresh` when an API request receives a `401`.
