## Application (API Assembly Platform)
 
 Application with Built-in Event Processing Engine

### API Endpoints

##### Create a User

POST ``http://localhost:3000/api/v1/users``

```
curl -X POST \
     http://localhost:3000/api/v1/users \
     -H 'Content-Type: application/json' \
     -d '{
       "name": "Sagar Kalra",
       "email": "sagar.kalra09@gmail.com",
       "mobile": "9812345678"
   }'
```

##### Create a Wallet

POST ``http://localhost:3000/api/v1/wallets``

```
curl -X POST \
  http://localhost:3000/api/v1/wallets \
  -H 'Content-Type: application/json' \
  -d '{
    "mobile": "9812345678",
    "email": "sagar.kalra09@gmail.com",
    "balance": 0
}'
```

##### Add Money to Wallet

POST ``http://localhost:3000/api/v1/wallets/<mobile>/topup``

```
curl -X POST \
  http://localhost:3000/api/v1/wallets/9812345678/topup \
  -H 'Content-Type: application/json' \
  -d '{
    "amount": 100,
    "type": "TOPUP"
}'
```

