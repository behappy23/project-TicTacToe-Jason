curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/games" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{}'

echo
