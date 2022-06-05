<p align="center">
  <a aria-label="warung international logo" href="https://warunginternational.eu.org">
    <img src="https://user-images.githubusercontent.com/27568445/167063748-4cf22a8e-0844-4d7e-8554-7166baa2957e.png"/>
  </a>
</p>

<p align="center">
  <em>Warung International</em>
</p>

<p align="center">
  <a href="https://warunginternational.eu.org">
    <img src="https://img.shields.io/discord/922523614828433419?label=Discord&color=5865F2" />
  </a>
  <br />
</p>

<p align="center">
  Warung International hanya menjual soto ayam terbaik di tata surya dan sudah uji lab ITB dan IPB
</p>

<hr>

# Warung International Web Services

This repo contains the homepage and server leaderboards for Warung International Discord Server.

## Development

### Step 1. Get the connection string of your MongoDB server

In the case of MongoDB Atlas, it should be a string like this:

```
mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/test?retryWrites=true&w=majority
```

For more details, follow this [MongoDB Guide](https://docs.mongodb.com/guides/server/drivers/) on how to connect to MongoDB.

### Step 2. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `MONGODB_URI` should be the MongoDB connection string you got from step 1.

### Step 3. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/import/git?utm_source=github&utm_medium=readme).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

#### Deploy from This Template

Alternatively, you can deploy using this template by clicking on the Deploy button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/warung-international/web/tree/master&project-name=discord-leaderboard&repository-name=discord-leaderboard&env=MONGODB_URI&envDescription=Required%20to%20connect%20the%20app%20with%20MongoDB&envLink=https://github.com/warung-international/web/tree/master%23step-2-set-up-environment-variables)