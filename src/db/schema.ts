import { relations } from "drizzle-orm";
import {
  boolean,
  decimal,
  index,
  integer,
  json,
  pgEnum,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const categoryEnum = pgEnum("category", ["women", "men", "accessories"]);
export const themeEnum = pgEnum("theme", [
  "modern",
  "classic",
  "minimal",
  "bold",
]);
export const shopStatusEnum = pgEnum("shop_status", [
  "pending",
  "active",
  "deactive",
]);

export const products = pgTable(
  "products",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: varchar({ length: 255 }).notNull(),
    slug: text().notNull().unique(),
    description: text().notNull(),
    features: json().$type<string[]>().notNull().default([]),
    category: categoryEnum().notNull(),
    shopId: integer()
      .notNull()
      .references(() => shops.id, { onDelete: "cascade" }),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp()
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (t) => [index().on(t.slug), index().on(t.shopId)],
);

export const shops = pgTable(
  "shops",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    slug: text().notNull().unique(),
    description: text().notNull(),
    status: shopStatusEnum().notNull().default("pending"),
    userId: varchar({ length: 255 }).notNull().unique(),
    category: categoryEnum().notNull(),
    website: text(),
    address: text().notNull(),
    city: varchar({ length: 255 }).notNull(),
    state: varchar({ length: 255 }).notNull(),
    zipCode: varchar({ length: 255 }).notNull(),
    country: varchar({ length: 255 }).notNull(),
    businessType: varchar({ length: 255 }).notNull(),
    taxId: varchar({ length: 255 }),
    businessLicense: varchar({ length: 255 }),
    yearsInBusiness: varchar({ length: 255 }).notNull(),
    theme: themeEnum().notNull(),
    features: json().$type<string[]>().notNull().default([]),
    marketingConsent: boolean().notNull(),
    newsletterSubscription: boolean().notNull(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp()
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (t) => [index().on(t.slug), index().on(t.userId)],
);

export const variants = pgTable(
  "variants",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    productId: integer()
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    size: varchar({ length: 255 }).notNull(),
    color: json().$type<{ label: string; value: string }>().notNull(),
    price: decimal({ precision: 10, scale: 2 }).notNull(),
    discountPercentage: integer().notNull().default(0),
    stock: integer().notNull().default(0),
    sku: text().notNull().unique(),
  },
  (t) => [index().on(t.productId)],
);

export const productImages = pgTable(
  "product_images",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    variantId: integer()
      .notNull()
      .references(() => variants.id, { onDelete: "cascade" }),
    imageURL: text().notNull(),
    isPrimary: boolean().notNull(),
  },
  (t) => [index().on(t.variantId)],
);

export const reviews = pgTable(
  "reviews",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: text().notNull(),
    productId: integer()
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    rating: integer().notNull(),
    title: text(),
    comment: text(),
    isVerifiedPurchase: boolean().notNull().default(false),
    helpfulCount: integer().notNull().default(0),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp()
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (t) => [index().on(t.userId), index().on(t.productId), index().on(t.rating)],
);

export const productsRelations = relations(products, ({ many, one }) => ({
  shop: one(shops, {
    fields: [products.shopId],
    references: [shops.id],
  }),
  variants: many(variants),
  reviews: many(reviews),
}));

export const shopsRelations = relations(shops, ({ many }) => ({
  products: many(products),
}));

export const variantsRelations = relations(variants, ({ one, many }) => ({
  product: one(products, {
    fields: [variants.productId],
    references: [products.id],
  }),
  productImages: many(productImages),
}));

export const productImagesRelations = relations(productImages, ({ one }) => ({
  variant: one(variants, {
    fields: [productImages.variantId],
    references: [variants.id],
  }),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  product: one(products, {
    fields: [reviews.productId],
    references: [products.id],
  }),
}));

export type Product = typeof products.$inferSelect;
export type Shop = typeof shops.$inferSelect;
export type Variant = typeof variants.$inferSelect;
export type ProductImage = typeof productImages.$inferSelect;
export type Review = typeof reviews.$inferSelect;
