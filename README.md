# Podium Client JavaScript SDK

This library allows you to access the Podium REST API for building client applications. 

## Installation
```
npm install podium-sdk
```

## Usage
```
import Podium from 'podium-sdk'
let podium = new Podium({endpoint: 'http://podium.api/v1/'})
podium.auth.login($email, $password, $progamId)
``` 
 
## API methods

 ### User authentication
 Log in with a username and password and receive an API token to interact with other resources available via the API. The logout endpoint deletes the authentication token. 

These methods map to the [authentication endpoints](https://developers.podiumrewards.com/api_docs/Member/Authentication) in the API. 

```
Podium.auth.login(email, password, progamId)
Podium.auth.getToken()
Podium.auth.getUserId()
Podium.auth.logout()
```
 
 #### Parameters

| Name  | Type | Required | Description |
| :------------- | :------------- | :------------- | :------------- |
| email  | string  | yes | The user's email address, which is the username required for login. |
| password  | string  | yes | The password required for login. |
| programId  | number | yes | The ID of the program to which you are authenticating the user. |


 ### Member information
 Get a member's profile information (e.g., name, email address), incentive balance, and list of incentive transactions. 
 
These methods map to the [profile](https://developers.podiumrewards.com/api_docs/Member/Profile) and [incentive endpoints](https://developers.podiumrewards.com/api_docs/Member/Incentive%20Transactions) in the API. 
 
 ```
Podium.profile.get()
Podium.incentive.getBalance()
Podium.incentive.getTransactions()
```

 ### Terms and conditions
 Get the latest terms and conditions for the user's program, and also save the version of the terms and conditions that the user has accepted. These methods map to the [terms endpoints](https://developers.podiumrewards.com/api_docs/Member/Terms%20and%20Conditions#!) in the API.  
```
Podium.terms.get()
Podium.terms.accept(termsId)
```
 
 #### Parameters

| Name  | Type | Required | Description |
| :------------- | :------------- | :------------- | :------------- |
| termsId  | integer  | yes |  The ID of the terms and conditions that the user is accepting.  |



 ### LRG
 Get data to start a redemption process with LRG.
```
Podium.lrg.get(redirectUrl)
Podium.lrg.redirect(redirectUrl)
```
 
 #### Parameters

| Name  | Type | Required | Description |
| :------------- | :------------- | :------------- | :------------- |
| redirectUrl  | url  | yes |  The URL LRG should redirect back to after a completed transaction.  |



