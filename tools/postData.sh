curl -X POST 'http://localhost:1337/api/forms/' \
-H "Content-Type": "application/json" \
--data-raw '{
    "data": {
        "name": "ejemplo1",
        "content": {
            "hello":"world"
        }
    }
}'