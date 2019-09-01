## Assembly Platform for API
 
 Application with Built-in Event Processing Engine

### API Endpoints

##### 1. Create a User

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

##### 2. Create a Wallet

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

##### 3. Add Money to Wallet

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

---------------------------------------

##### Setting up the project

1. cd into the project root directory

2. Run ``npm install``

3. Run ``npm start`` to start the application