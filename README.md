# Aqua 3D – 3D Printing Studio (Next.js)

One-page website for a 3D printing business with an animated 3D car that "prints" layer by layer (three.js).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Pages

`/` Home · `/about` About Us · `/materials` Materials · `/products` Products Store · `/projects` Projects / Gallery · `/industries` Industries · `/quote` Get Instant Quote · `/contact` Contact Us

Each page is `src/app/<route>/page.js`.

## Login / Register (required for quotations)

`/quote` needs a logged-in user. Visitors are redirected to `/login` and can create an account at `/register`.

- Passwords are hashed with scrypt; sessions use a signed, httpOnly cookie (7 days).
- Set `AUTH_SECRET` (see `.env.example`) before running in production.
- Users are stored in `data/users.json` (see `src/lib/users.js`). This works on a normal server with a writable disk.
  On serverless hosting (Vercel etc.) replace the functions in `src/lib/users.js` with your database (MySQL, MongoDB, Supabase...).

## Saved quotations

Logged-in users can **save** a quotation or **request** it on WhatsApp; both are stored in their account.
- `/account/quotes` – My Quotations (open/edit, send again on WhatsApp, delete).
- `/quote?edit=<id>` – reopens a saved quotation. Only the owner can open or delete it.
- Data is stored in `data/quotes.json` (`src/lib/quotes.js`). Replace those functions with your database in production.
- 3D files themselves are **not** stored (no file storage yet); the customer attaches them in WhatsApp.

## Edit your content

- `src/data/site.js` – business name, **WhatsApp number**, city, services, prices, FAQs, portfolio items, reviews.
- `src/app/globals.css` – all styling (colors are CSS variables at the top: `--ac` is the orange accent).
- `src/components/` – one component per section (Navbar, Hero, CarScene, Services, About, Process, Work, Pricing, Reviews, Faq, CtaBanner, Contact, Footer).
- `src/components/CarScene.jsx` – the three.js 3D model. Replace it with a GLTF/STL loader to show your own model.

Designed by Khushi Parikh.
