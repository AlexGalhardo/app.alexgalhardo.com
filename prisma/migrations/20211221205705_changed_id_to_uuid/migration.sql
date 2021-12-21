/*
  Warnings:

  - The primary key for the `books` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `games` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `movies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `stripe_shop_transactions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `stripe_subscriptions_transactions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tv_shows` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "books" DROP CONSTRAINT "books_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "books_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "books_id_seq";

-- AlterTable
ALTER TABLE "games" DROP CONSTRAINT "games_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "games_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "games_id_seq";

-- AlterTable
ALTER TABLE "movies" DROP CONSTRAINT "movies_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "movies_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "movies_id_seq";

-- AlterTable
ALTER TABLE "stripe_shop_transactions" DROP CONSTRAINT "stripe_shop_transactions_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "stripe_shop_transactions_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "stripe_shop_transactions_id_seq";

-- AlterTable
ALTER TABLE "stripe_subscriptions_transactions" DROP CONSTRAINT "stripe_subscriptions_transactions_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "stripe_subscriptions_transactions_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "stripe_subscriptions_transactions_id_seq";

-- AlterTable
ALTER TABLE "tv_shows" DROP CONSTRAINT "tv_shows_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "tv_shows_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "tv_shows_id_seq";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "users_id_seq";
