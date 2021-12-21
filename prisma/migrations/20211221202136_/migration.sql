-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmed_email" BOOLEAN NOT NULL DEFAULT false,
    "confirm_email_token" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "reset_password_token" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "avatar" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "birth_date" TEXT NOT NULL,
    "google_id" TEXT NOT NULL,
    "github_id" TEXT NOT NULL,
    "facebook_id" TEXT NOT NULL,
    "address_zipcode" TEXT NOT NULL,
    "address_street" TEXT NOT NULL,
    "address_street_number" TEXT NOT NULL,
    "address_neighborhood" TEXT NOT NULL,
    "address_city" TEXT NOT NULL,
    "address_state" TEXT NOT NULL,
    "address_country" TEXT NOT NULL,
    "stripe_customer_id" TEXT NOT NULL,
    "stripe_card_id" TEXT NOT NULL,
    "stripe_card_brand" TEXT NOT NULL,
    "stripe_card_last4" TEXT NOT NULL,
    "stripe_card_exp_month" TEXT NOT NULL,
    "stripe_card_exp_year" TEXT NOT NULL,
    "stripe_currently_subscription_id" TEXT NOT NULL,
    "stripe_currently_subscription_name" TEXT NOT NULL,
    "stripe_subscription_start" TEXT NOT NULL,
    "stripe_subscription_end" TEXT NOT NULL,
    "stripe_cancel_at_period_end" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "games" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year_release" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "resume" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "igdb_link" TEXT NOT NULL,
    "igdb_rating" INTEGER NOT NULL,
    "platforms" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "genres" TEXT NOT NULL,
    "amazon_link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year_release" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "amazon_link" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "pages" INTEGER NOT NULL,
    "genres" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year_release" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "tmdb_link" TEXT NOT NULL,
    "tmdb_rating" DOUBLE PRECISION NOT NULL,
    "resume" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "genres" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tv_shows" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year_release" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "tmdb_link" TEXT NOT NULL,
    "tmdb_rating" DOUBLE PRECISION NOT NULL,
    "resume" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "genres" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tv_shows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stripe_shop_transactions" (
    "id" SERIAL NOT NULL,
    "transaction_id" TEXT NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "card_id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "exp_month" INTEGER NOT NULL,
    "exp_year" INTEGER NOT NULL,
    "last4" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "paid" BOOLEAN NOT NULL,
    "products_amount" DOUBLE PRECISION NOT NULL,
    "products" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "stripe_id" TEXT NOT NULL,
    "customer_email" TEXT NOT NULL,
    "customer_phone" TEXT NOT NULL,
    "customer_name" TEXT NOT NULL,
    "shipping_address_zipcode" TEXT NOT NULL,
    "shipping_address_street" TEXT NOT NULL,
    "shipping_address_street_number" INTEGER NOT NULL,
    "shipping_address_neighborhood" TEXT NOT NULL,
    "shipping_address_city" TEXT NOT NULL,
    "shipping_address_state" TEXT NOT NULL,
    "shipping_address_country" TEXT NOT NULL,
    "carrier" TEXT NOT NULL,
    "fee" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stripe_shop_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stripe_subscriptions_transactions" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transaction_id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "card_id" TEXT NOT NULL,
    "card_brand" TEXT NOT NULL,
    "card_exp_month" INTEGER NOT NULL,
    "card_exp_year" INTEGER NOT NULL,
    "card_last4" TEXT NOT NULL,
    "plan_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "current_period_start" TEXT NOT NULL,
    "current_period_end" TEXT NOT NULL,
    "cancel_at_period_end" BOOLEAN NOT NULL,
    "customer_id" TEXT NOT NULL,
    "customer_stripe_id" TEXT NOT NULL,
    "customer_email" TEXT NOT NULL,
    "customer_name" TEXT NOT NULL,

    CONSTRAINT "stripe_subscriptions_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
