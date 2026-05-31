# Supornpun Wannakrai Jewelry Portfolio

Luxury jewelry visual production portfolio website built with Next.js, React, and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deploy To Vercel

1. Upload this project to a GitHub repository.
2. In Vercel, choose `Add New > Project`.
3. Import the GitHub repository.
4. Keep the default Next.js settings.
5. Click `Deploy`.

## Notes

The free-trial form posts to `/api/free-trial` and sends the product image through Resend.

Before using the form in production:

1. Verify `supornpunstudio.com` in Resend.
2. Add `RESEND_API_KEY` to the Vercel project's environment variables.
3. Redeploy the project.

The form accepts one product image smaller than 3 MB.
