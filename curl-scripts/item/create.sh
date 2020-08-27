#!/bin/bash

API="http://localhost:4741"
URL_PATH="/items"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "item": {
      "category": "'"${CATEGORY}"'",
      "product": "'"${PRODUCT}"'",
      "quantity": "'"${QUANTITY}"'",
      "price": "'"${PRICE}"'"
    }
  }'

echo
