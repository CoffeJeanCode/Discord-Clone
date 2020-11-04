# Discord-Clone / backend /
welcome to our project, this is the backend part, we are developing it in node with express and typescript

# routes:

### /api/auth/signup
you will sign Up.
```js
body : {

  "username": string,
  
  "email": string,
  
  "password": string,
  
  "roles": "admin" //this is optional, if you don't put it automatically it will put the user role
  
}
```
----

### /api/auth/signin
you will sign In.
```js
body : {
  
  "email": string,
  
  "password": string,
  
}
```
----
### /api/auth/user
you will get user data, will send the information of the user to whom the token belongs
```js
header : {
  
  "auth-token": token //You will get the token when creating an account or logging into an existing account
  
}
```
----