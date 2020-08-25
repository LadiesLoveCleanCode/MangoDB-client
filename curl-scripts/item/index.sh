curl "http://localhost:4741/items" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \

echo
