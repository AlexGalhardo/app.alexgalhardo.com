<div align="center">
<h1 align="center">🥤 Galhardo APP 2.0 💵</h1>
<small align="center">A Simple Web App Project for Lifetime Learning</small>
</div>

## Why This Project ? 
   - <b>"Talk is cheap. Show me the code." - Linus Torvalds</b>
   - First Commit: August 02, 2021
   - I started this project using pure JavaScript and Common Modules to learn the basics about NodeJS ecossystem
   - You can se the archived 1.0 version repository here: 

## Live Demo
- **Currently Version: ALPHA**
- You can access: https://galhardoapp.com/
- This live demo use "MAIN" branch
- Last updates and development tests are in "CANARY" branch
- You can use default test inputs already in forms to try 
- Test User
   - email: test@gmail.com
   - password: test123
- **IMPORTANT:**
   - **All transactions in this live demo are made in a SANDBOX Environment**
   - **NO REAL Money Transactions will be made**

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
- API 
   - REST, GraphQL, JWT, Oauth2, AJAX, Bearer Token, HTML Documentation, etc
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
- dist/
   - build of the project when its ready to go in production
- prisma/
   - prisma ORM configurations, migrations, seeds, etc
- .github/
   - github workflow CI/CD configuration
- src/
   - source code of the project
   - views/
      - emails: SMTP Emails requests
      - partials: used in pages
      - pages: main html pages responses
   - tests/
      - unit and integration automatic tests using jest
      - this folder don't need to go to production, used in development
   - routes/
      - all routes/endpoints used in app
   - public/
      - css, scripts, images, uploads, robots.txt, sitemap.xml public access
   - models/
      - all models/services from databases
   - graphql/
      - all things relationed to graphql api
   - logs/
      - locally logs files with errors, requests, etc
   - tmp/ 
      - temporary locally uploaded files 
   - helpers/
      - usefull code snippets, functions, classes used in app
   - docs/
      - swagger api html documentation config (/api-docs)
   - controllers/
      - all the controllers used in app
   - config/
      - important app configs

## Development Process
- I am using Kanban and Trello principles to develop this project
- You can see the public trello of this project in: https://trello.com/b/6iHJ2Idy/galhardo-app-20

## GIT Branchs Semantic
- main: branch to deploy in production
- feature/*: new feature pull request to review and add to canary branch
- canary: branch to test lastest updates before merge to master

## GIT Commits Semantic
- chore: add new chore in this commit
- docs: add new documentation in this commit
- feat: add new feature/update in this commit
- fix: fix some bug or error in this commit
- refactor: refactor code logic in this commit
- style: improve code quality in this commit
- test: improve testing/tests in this commit

## Install Locally
- $ git clone https://github.com/AlexGalhardo/GalhardoAPP
- $ cd GalhardoAPP/
- $ npm install
- $ sudo docker-compose up -d
- $ cp .env-example .env
- Edit .env file with your credentials
- $ npm run rocket
- Go to: http://localhost:3000/
  
## Deploy
- Before deploy, run
   - $ npm run build
- This project was deployed mainly in Heroku
- Also, you can deploy in a tradicional VPS using NGINX

## DataBase
- This project uses PRISMA ORM (https://www.prisma.io/) with PostgreSQL
- This project also uses JSON as DataBase for learning purposes
- After installing locally, you can see/use databases in:
   - ADMINER
      - http://localhost:8080
      - system: postgresql
      - server: galhardoapp_postgres
      - username: postgres
      - password: root
   - PRISMA STUDIO
      - $ npx prisma studio
      - http://localhost:5555/

## HTML Templates
- Using Bootstrap5 and some pure CSS here and there

## Emails
- Using NodeMailer and MailTrap SMTP
- Using HTML Templates

## Uploads
- Locally and in AWS S3

## APIs
- This project uses 2 types of API: REST and Graphql using ApolloServer
- You can see Graphql ApolloServer Studio in: http://localhost:4000/ after $ npm run dev

## Payments
- This project use 2 Payment Gateways: 
   - PagarME for Brazil BRL Transactions (R$) 
   - Stripe for USA USD Transactions ($)
- Payment methods:
   - Credit Card
   - Bank Slip (Boleto Bancário)
   - PIX

## Logs
- This project uses 3 types of logs:
   - Locally inside tmp/ folder (errors, requests, etc)
   - Telegram (for emails, transactions, etc)
   - [DataDog](https://www.datadoghq.com/) (for error, analysis, performance, etc)

## Feedbacks
- If you have any feedback or improvements tips about this project, send a pull request or send me a email at: aleexgvieira@gmail.com
- I really apreciate good feedbacks

- URLSearchParams

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present, Alex Galhardo
