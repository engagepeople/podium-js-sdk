# Podium Client JavaScript SDK

This library allows you to access the Podium REST API for building client applications. 

## Installation
```
npm install podium-sdk
```

## Usage
```
import Podium from 'podium-sdk';

let podium = new Podium({endpoint: 'http://podium.api/v1/'});

podium.auth.login($email, $password, $progamId).then(rsp => {
  console.log(rsp.message);
}).catch(error => {
  console.log(error.message);
})
``` 
 
## API methods

### User authentication
Log in with a username and password and receive an API token to interact with other resources available via the API. The logout endpoint deletes the authentication token. 

These methods map to the [authentication endpoints](https://developers.podiumrewards.com/api_docs/Member/Authentication) in the API. 

```
Podium.auth.login($email, $password, $progamId)
Podium.auth.getToken()
Podium.auth.logout()
```
 
##### Podium.auth.login parameters

| Name  | Type | Required? | Description |
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
Get the latest terms and conditions for the user's program, and also save the version of the terms and conditions that the user has accepted. 
 
These methods map to the [terms endpoints](https://developers.podiumrewards.com/api_docs/Member/Terms%20and%20Conditions#!) in the API.
 
```
Podium.terms.get()
Podium.terms.accept($termsId)
```
 
##### Podium.terms.accept parameters

| Name  | Type | Required? | Description |
| :---- | :---- | :------ | :------------- |
| termsId  | integer  | yes |  The ID of the terms and conditions that the user is accepting.  |



### LRG authentication
Authenticate a Podium user into LRG and redirect the user to the LRG site to shop and redeem. Alternatively, get the data needed to allow the user to shop on the LRG site (e.g., LRG redirect URL, authentication token). 
 
These methods map to the [LRG authentication endpoints](https://developers.podiumrewards.com/api_docs/Member/Lrg%20Authentication) in the API.
 
```
Podium.lrg.redirect($websiteBack)
Podium.lrg.get($websiteBack)
```
 
##### Parameters

| Name  | Type | Required? | Description |
| :------ | :----- | :----- | :------------- |
| websiteBack  | string  | yes |  The URL used to route the user back to Podium when the user is finished shopping on LRG. |
