/*
  Warnings:

  - The primary key for the `City` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `populacao` on the `City` table. All the data in the column will be lost.
  - The primary key for the `Continent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `descricao` on the `Continent` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Continent` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Continent` table. All the data in the column will be lost.
  - The primary key for the `Country` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `idioma` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `moeda` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `populacao` on the `Country` table. All the data in the column will be lost.
  - Added the required column `ctr_id` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cty_latitude` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cty_longitude` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cty_nome` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cty_populacao` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ctn_nome` to the `Continent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ctn_id` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ctr_idioma` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ctr_moeda` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ctr_nome` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ctr_populacao` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "City" DROP CONSTRAINT "City_pkey",
DROP COLUMN "id",
DROP COLUMN "latitude",
DROP COLUMN "longitude",
DROP COLUMN "nome",
DROP COLUMN "populacao",
ADD COLUMN     "ctr_id" INTEGER NOT NULL,
ADD COLUMN     "cty_id" SERIAL NOT NULL,
ADD COLUMN     "cty_latitude" INTEGER NOT NULL,
ADD COLUMN     "cty_longitude" INTEGER NOT NULL,
ADD COLUMN     "cty_nome" TEXT NOT NULL,
ADD COLUMN     "cty_populacao" INTEGER NOT NULL,
ADD CONSTRAINT "City_pkey" PRIMARY KEY ("cty_id");

-- AlterTable
ALTER TABLE "Continent" DROP CONSTRAINT "Continent_pkey",
DROP COLUMN "descricao",
DROP COLUMN "id",
DROP COLUMN "nome",
ADD COLUMN     "ctn_descricao" TEXT,
ADD COLUMN     "ctn_id" SERIAL NOT NULL,
ADD COLUMN     "ctn_nome" TEXT NOT NULL,
ADD CONSTRAINT "Continent_pkey" PRIMARY KEY ("ctn_id");

-- AlterTable
ALTER TABLE "Country" DROP CONSTRAINT "Country_pkey",
DROP COLUMN "id",
DROP COLUMN "idioma",
DROP COLUMN "moeda",
DROP COLUMN "nome",
DROP COLUMN "populacao",
ADD COLUMN     "ctn_id" INTEGER NOT NULL,
ADD COLUMN     "ctr_id" SERIAL NOT NULL,
ADD COLUMN     "ctr_idioma" TEXT NOT NULL,
ADD COLUMN     "ctr_moeda" TEXT NOT NULL,
ADD COLUMN     "ctr_nome" TEXT NOT NULL,
ADD COLUMN     "ctr_populacao" INTEGER NOT NULL,
ADD CONSTRAINT "Country_pkey" PRIMARY KEY ("ctr_id");

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_ctn_id_fkey" FOREIGN KEY ("ctn_id") REFERENCES "Continent"("ctn_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_ctr_id_fkey" FOREIGN KEY ("ctr_id") REFERENCES "Country"("ctr_id") ON DELETE CASCADE ON UPDATE CASCADE;
