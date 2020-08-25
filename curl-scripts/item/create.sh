curl "http://localhost:4741/item" \
  --include \
  --request POST \
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
