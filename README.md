# Podium Client JavaScript SDK

> This library allows you to access the Podium REST API for building client applications

## Install
```
npm install podium-sdk
```

## Example
```
import Podium from 'podium-sdk'
let podium = new Podium({endpoint: 'http://podium.api/v1/'})
podium.auth.login($email, $password, $progamId)
 ``` 
 
 ## API Methods 
 ```
 
Podium.auth.login(email, password, progamId)
Podium.auth.getToken()
Podium.auth.getUserId()
Podium.auth.logout()

Podium.incentive.getBalance()
Podium.incentive.getTransactions()
Podium.profile.get()

Podium.terms.get()
Podium.terms.accept(terms_id)


```
## Build Setup

```
# install dependencies
npm install

# build for production with minification
npm run build

# run unit tests
npm run test

```
