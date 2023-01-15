<div align="center">
<h1 align="center">💵 Galhardo APP 3.0 💵</h1>
<small align="center">A Simple Web App Project To Learn how to program a Ecommerce and Subscriptions System</small>
</div>

## Preview Subscription
https://user-images.githubusercontent.com/19540357/211013260-a0b37963-03c6-4bba-a5cf-2e282b180590.mp4

## Preview Shop Checkout
https://user-images.githubusercontent.com/19540357/212559673-ec93690e-edb8-441f-ae3c-8356d9d89aba.mp4

## CODE IN BETA: this code is not stable yet

## Setup & Installation Guide
- $ `git clone https://github.com/AlexGalhardo/Galhardo-APP-3.0`
- $ `cd Galhardo-APP-3.0`
- $ `npm install`
- $ `cp .env-example .env`
- <strong>Important: Verify and update all the environment variables in your .env file</strong>
- $ `sudo docker-compose up -d`
- You can see your docker postgres server ip address using the command: `docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' galhardoapp_pg`
- $ `npx prisma migrate dev`
- $ `npx prisma db seed`
- $ `npm run dev`
- Go to: http://localhost:3000

## Services used
- You can get your Telegram Keys acessing this site: https://api.telegram.org/
- Mailtrap.io: https://mailtrap.io/
- Stripe: http://dashboard.stripe.com/
- Recaptcha: https://www.google.com/recaptcha/admin/

## LICENSE

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present, Alex Galhardo
