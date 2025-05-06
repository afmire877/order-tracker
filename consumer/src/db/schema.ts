import {
  index,
  integer,
  pgTable,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

export const ordersTable = pgTable(
  "orders",
  {
    order_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    eta: varchar({ length: 255 }).notNull(),
    status: varchar({ length: 255 }).notNull(),
    updated_at: timestamp(),
    created_at: timestamp().defaultNow().notNull(),
    deleted_at: timestamp(),
  },
  (table) => [index("order_id_idx").on(table.order_id)]
);
