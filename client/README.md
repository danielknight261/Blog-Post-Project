You can access the Vercel live application for this project at https://blog-post-project-c2pjjp66p-danielknight261.vercel.app/. Alternatively, you can open the repository in a code editor, navigate to the "client" folder, and run "npm run dev" to launch the application at http://localhost:3000/.

To post, edit, and view comments, you will need to click "Join Now" and complete the authentication process.

This was an enjoyable full-stack project that used a variety of frequently-used technologies, as well as some new tools such as Toast and Firebase, including its database and authentication tools. I found Firebase to be perhaps the simplest and most seamless to use, with easy installation. Interestingly, of all the major technology companies, Google's Firebase is one of the least known to me. Food for thought!

The stack used for this project includes Next.js, Tailwind CSS, Firebase database, Firebase authentication, and Toastify.

Issues:
1. .env.local - Not currently working, temporary removal of keys from env file into the firebase.js file. For some reason it wont accept the ENV. Fix appears to be simple enough but want to move on with main project build
2. Version issue with nav.js file fixed with legacyBehavior prop.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
