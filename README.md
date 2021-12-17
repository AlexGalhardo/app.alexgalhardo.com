<div align="center">
<h1 align="center">🥤 Galhardo APP 💵</h1>
<small align="center">A Simple Web App Project for Lifetime Learning</small>
</div>

## Why This Project ? 
   - <b>"Talk is cheap. Show me the code." - Linus Torvalds</b>
   - First Commit: August 02, 2021

## Live Demo
- **Currently Version: BETA - ALMOST STABLE**
- You can access: https://galhardoapp.com/
- This live demo use "MAIN" branch
- Last updates and development are made in "DEV" branch
- You can use default TEST inputs already in forms to try 
- Dev and Main Branch are using CommonJS Module
- Test User
   - email: test@gmail.com
   - password: test123
- **IMPORTANT:**
   - **This version is FOR LEARNING, PRACTICE and TESTS PURPOSES**
   - **All transactions in this live demo are made in a SANDBOX Environment**
   - **NO REAL Money Transactions will be made**
   - **All CRUDs in this Live Demo are made in JSON DataBase, for obvious reasons.**

## Introduction
### I created this project to LEARN and PRACTICE in my spare time:
- JavaScript, JSON, NodeJS, Express, NPM, TypeScript, DOM, Git, Bootstrap5
- How to document a software
- Cookies Privacy
   - LGPD (http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.htm)
   - GPDR (https://gdpr-info.eu/)
- NGINX (https://www.nginx.com/)
   - Reverse-Proxy, Load Balancing, Cache, Response Compression
- DevOps
   - SSH, Ports, DNS, How to configure SSL/HTTPs in a VPS, etc
- Docker and DataBases
   - Postgres, Redis and MongoDB using PrismaORM
- Payments REST APIs
   - Stripe (https://stripe.com/docs/api)
      - For USD Transactions
   - PagarME (https://docs.pagar.me/docs/overview-principal)
      - For BRL and Bank Slip (Boleto Bancário) Transactions
   - PIX
   - Subscription, Ecommerce, Shop Checkouts
   - ZipCode for Shipping Address, Fee and Deadline
- Uploads Files
   - S3, Images, Gifs, Videos, etc
- Testing
   - Unit, Integration, Perfomance, etc
- Code best practices
   - MVC, 12Factor APP, ESLint, Prettier, Design Patterns, etc
- SEO
   - Google Tools, SocialMedia MetaTags, CDN, Analytics, Search Console, Sitemap, Robots.txt, etc
- Logs
   - Console, files, telegram, etc
- Security
   - OWASP, CSRF, XSS, Injection, CORS, HTTP Headers, Google Recaptcha, etc
- API RESTs
   - JWT, Oauth2, AJAX, Bearer Token, HTML Documentation, etc
- Others usefull things
   - Mobile First, WebHooks, WebSockets, Regex, Charts, SMTP, Flash Messages, Pagination, Slug, UUID, Searchs, etc
- Deploys
   - CI, CD, Heroku, Git Workflows, etc
- <b>I will be refactoring it over the years during my professional career as I develop my programming skills.</b>



## MicroServices
- https://galhardo-correios.herokuapp.com/cep/13560290 (zipcode here)
   - To GET ZipCode/CEP Information (Correios BRAZIL)
- https://galhardo-correios.herokuapp.com/shipping/13560290 (zipcode here)
   - To GET Shipping Deadline and Fee (Correios BRAZIL)

## DateTime
- This project uses <b>"BRASIL Brasília LocaleDateTime (BRT – Brasília Time | UTC -03:00)</b>
- Example:
   - day/month/year hours:minutes:seconds
   - 23/08/2021 15:52:36

## Folders
- views
   - emails: SMTP Emails requests
   - partials: used in pages
   - pages: main html pages responses
- tests
   - unit and integration automatic tests using jest
   - this folder don't need to go to production, used in development
- routes
   - all routes/endpoints used in app
- public
   - css, scripts, images, uploads, robots.txt, sitemap.xml public access
- models
   - all models from databases
- logs
   - logs file.txt
- helpers
   - usefull code snippets, functions, classes used in app
- docs
   - swagger api html documentation config (/api-docs)
- controllers
   - all the controllers used in app
- config
   - important app configs

## GIT Branchs
- main: branch in production
- dev: branch to tests all merges and unit tests before merge to production
- adonis: project refactored to adonisjs5 framework 

## Install Locally

## DataBase

## Emails

## APIs

## Payments

## Logs

## Feedbacks
- If you have any feedback or improvements tips about this project, send a pull request or send me a email at: aleexgvieira@gmail.com
- I really apreciate good feedbacks

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present, Alex Galhardo
