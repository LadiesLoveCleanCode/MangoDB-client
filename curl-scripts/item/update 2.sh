
curl "http://localhost:4741/items/${ID}" \
--include \
--request PATCH \
--header "Authorization: Bearer ${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
  "item": {
    "category": "'"${CATEGORY}"'",
    "product": "'"${PRODUCT}"'",
    "price": "'"${PRICE}"'"
  }
}'

echo
