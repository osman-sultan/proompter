# Proompter

:fire: Proompter is an open-source repository for discovering and sharing diverse prompts, designed to supercharge your large language models including GPT, LLaMa, and more. Visit it live here: https://projectproompter.vercel.app/

## Table of Contents

- [About](#introduction)
- [Motivations](#motivations)
- [Technologies Used](#technologies-used)
- [Local Setup](#local-setup)
  - [Environment Variables](#environment-variables)
  - [Google OAuth Setup](#google-oauth-setup)
- [To-Do List](#to-do-list)

## Introduction

Proompter is an open-source platform designed to provide verbose fine-tuned, and prompts for anyone who needs to interact with Large Language Models (LLMs). It leverages the power of Next.js v13, MongoDB, Tailwind CSS, and NextAuth.js provide a seamless, user-friendly experience.

## Motivations

The idea for Proompter (shout out [Fireship.io](https://fireship.io)) came from my growing interest in the LLMs that are becoming a big deal in the tech world, such as GPT, Bard, LLaMa, etc etc. As a uni student and and junior dev, ChatGPT was the most widely used tool within my network for pretty much everything, but I quickly realized that these models are waste of time without quality input. It's evident these models need good quality prompts to show their full potential, and that's where Proompter comes in - a place for anyone to share and find detailed prompts to fuel these models.

Creating Proompter has been an awesome learning experience. I finally got my hands dirty with Nextjs v13, the thought of not having to create tedious MVC backend servers was super exciting to me lol. In terms of next steps, I want to implement these models myself with the OpenAI API and Langchain, you find some new projects utilizing this tech in my github soon :).

## Tech Stack

- **Next.js v13 (using app directory with serverless API endpoints)**
- **Storage: MongoDB/Mongoose**
- **Styling: Tailwind CSS**
- **Authentication: NextAuth.js (w/ google OAuth)**

## Local Setup

To set up the project locally, follow the steps below:

1. Fork and clone the repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Set up your `.env.local` file at the root of your project. This file will store all your environment variables.
4. Run `npm run dev` to start the development server.

### Environment Variables

You must create a `.env.local` file in the root of your app. The following environment variables should be defined in it:

- `MONGODB_URI`: Your MongoDB connection string.
- `GOOGLE_ID`: Your Google Client ID for OAuth.
- `GOOGLE_SECRET`: Your Google Client Secret for OAuth.
- `NEXTAUTH_URL`: The base URL of your Next.js application. During development, this can be set to `http://localhost:3000`.
- `NEXTAUTH_URL_INTERNAL`: The internal URL of your Next.js application. During development, this can also be set to `http://localhost:3000`.
- `NEXTAUTH_SECRET`: A secret key generated using `openssl rand -base64 32` within the bash terminal.

### Google OAuth Setup

To use Google OAuth for authentication, you need to set up a Google OAuth client and add your development/production domains to the credentials. The callback URL should be added to the authorized redirect URIs in the form of `http://YOUR_DOMAIN/api/auth/callback/google`.

## To-Do List

Some things the site still needs (in no particular order) for future development:

- [ ] Dark Mode
- [ ] More Sign-In Options: GitHub, LinkedIn, etc
- [ ] Ability to upvote/downvote/report prompts
- [ ] Save/share prompts
- [ ] Ability to add multiple tags
- [ ] Infinite scroll/paganation

---

Thank you for your interest in Proompter! I welcome contributions and suggestions on how to make this platform better. Feel free to open an issue or submit a pull request.

This project is inspired by Adrian Hajdin.
