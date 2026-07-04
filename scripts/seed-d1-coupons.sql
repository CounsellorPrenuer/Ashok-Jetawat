-- Example coupon seed for ashokjetawat (run only when adding coupons)
-- cd worker && npx wrangler d1 execute mentoria-db --remote --file="../scripts/seed-d1-coupons.sql"

INSERT OR REPLACE INTO coupons (code, discount_type, value, min_amount, max_discount, active, expires_at, project_id, id, discount_value)
VALUES
  ('ASHOK10', 'percentage', 10, 0, NULL, 1, NULL, 'ashokjetawat', 'ashokjetawat-ASHOK10', 10),
  ('ASHOK500', 'fixed', 500, 0, NULL, 1, NULL, 'ashokjetawat', 'ashokjetawat-ASHOK500', 500);
