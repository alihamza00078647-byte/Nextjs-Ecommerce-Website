# QuickCart 🛒

A modern, full-stack e-commerce web application built with **Next.js**, delivering a fast, secure, and scalable online shopping experience — from product discovery to checkout and payment.

## ✨ Features

- 🔐 Secure user authentication and session management powered by **Clerk**
- 🛍️ Browse products, manage cart, and complete a smooth checkout flow
- 💳 Secure online payments integrated with **Stripe**
- 🖼️ Fast, optimized image uploads and delivery via **Cloudinary**
- ⚡ Event-driven background jobs and webhooks (user sync, order events, payment confirmations) handled by **Inngest**
- 🗄️ Flexible, scalable data modeling with **MongoDB** and Mongoose
- 📱 Fully responsive UI built with the Next.js App Router
- 🚀 Production-ready architecture designed for real-world e-commerce use cases

## 🛠️ Tech Stack

| Layer                      | Technology                     |
| -------------------------- | ------------------------------ |
| Framework                  | Next.js (JavaScript)           |
| Database                   | MongoDB + Mongoose             |
| Authentication             | Clerk                          |
| Payments                   | Stripe                         |
| Image Upload & Storage     | Cloudinary                     |
| Background jobs / Webhooks | Inngest                        |
| Deployment                 | Vercel _(update if different)_ |

## 📦 Getting Started

\`\`\`bash
git clone https://github.com/your-username/quickcart.git
cd quickcart
npm install
npm run dev
\`\`\`

Add your environment variables in a `.env.local` file:

\`\`\`
MONGODB_URI=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
\`\`\`

## 🔗 Webhooks Used

- **Clerk** → syncs user data on sign-up/update
- **Stripe** → confirms successful payments and updates order status
- **Inngest** → processes background events reliably (retries, delayed jobs, etc.)

## 📋 Project Structure

```
quickcart/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes for backend services
│   ├── about-us/          # About Us page
│   ├── contact/           # Contact page
│   ├── product/           # Product detail pages
│   ├── cart/              # Shopping cart
│   ├── my-orders/         # Order history
│   └── seller/            # Seller dashboard
├── components/            # Reusable React components
├── config/                # Configuration files (DB, Inngest)
├── lib/                   # Utility functions
├── model/                 # MongoDB schemas (Mongoose models)
├── public/                # Static assets
├── context/               # React Context for state management
└── assets/                # Images and asset data
```

## 🎯 Key Features Explained

- **Smart Cart**: Real-time cart updates with server sync
- **Seller Dashboard**: Manage products and orders
- **Order Tracking**: View order history and status
- **Responsive Design**: Mobile-first approach for all devices
- **Secure Payments**: Stripe integration for safe transactions

## 📞 Support

For issues, questions, or contributions, please open an issue or pull request on GitHub.

## 📄 License

MIT License - see LICENSE.md for details
