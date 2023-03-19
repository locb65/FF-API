# FFX-API

Welcome to a Final Fantasy REST API created using [MoogleAPI](https://www.moogleapi.com/swagger/index.html).

* This REST API is developed with the mindset of being applied to a simple game environment in the near future.

## Frameworks/Languages/Dependencies/Servers Used

|Javascript| Install/version|
|----------|-------|
|bcryptjs | ```npm i bcryptjs```|
|JSONWebToken | ```npm i jsonwebtoken```|
|ExpressJS| ```npm i express```
|express-jwt | ```npm i express-jwt```|
|MongoDB | Community 6.0|
|Mongoose | ```npm i mongoose```|
|Node |version 19.4.0
|nodemon | ```npm i nodemon --save-dev```|
|cors | ```npm i cors```|
|Axios | ```npm i axios```|

## User Authentication

|Method|Requests|Paths|
|----|-----|-----------|
|GET |all Users | "...```/users/register/```"|
|GET |current User | "...```/users/```"|
|GET |user by Id | "...```/users/<Id Here>```"|
|POST |user to register | "...```/users/register/```"|
|POST |user to get key | "...```/users/authenticate/```"|
|PUT |update user by Id | "...```/users/<Id Here>```"|
|DELETE |delete user by Id | "...```/users/<Id Here>```"|

 ### Users and Authentication in-depth Details

This API has an authentication feature that must be done before using the API. 
* This is accomplished using espress-jwt and JSONWebToken for authentication.
    * The users will also have Full CRUD and be stored in the mongoDB server.
    * Users will have to have a webtoken before being able to access the Final Fantasy Characters.
        * To do a new user must register using a POST request at route "...```/users/register/```".
            * To do this in POSTman, you must change the tab to BODY, check raw, and change the type to JSON.
            * This will create a new user and store it in mongoDB. 
        * Users will then have to retrieve and authentication token with a Post Request from route "...```/users/authenticate/```". with the username and password provided in register request.
            * To do this in POSTman, you must change the tab to BODY, check raw, and change the type to JSON.
            * This will generate a new token for that user to use for 10 days.

    * The Users collection in mongoDB will also have full CRUD functionality.

* **Once a web token is provided you must change to the authorization tab in POSTman and click bearer token to be able to access the API.**


## The Basics of FFX-API

|Method|Request|Path|
|-----|-------|---|
|GET | all Characters |"...```/characters/all```"|
|GET | character by Id | "...```/characters/<Id Here>```" |
|POST | Single Character | "...```/characters```" |
|POST | One team | "...```/characters/one-team```" |
|POST | Two teams | "...```/characters/two-teams```" |
|PUT | Update Character by Id | "...```/characters/<Id Here>```" |
|DELETE | Delete Character by Id | "...```/characters/<Id Here>```" |

### Characters in-detph Details

This API is set up to do Full CRUD operations using GET, POST, PUT, and DELETE requests.
* GET reads and write from the database stored in mongoDB for all characters or by Id and returns the data in json format
    * The route is "...```/characters/<Id here>```".
* POST will create new characters and save them in mongoDB. 
    * There is three implementations of POST in this API that will create characters if they do not already exist.
        1. POST a single random character fetced from [Moogle API](https://www.moogleapi.com/swagger/index.html) and create that character in mongoDB
            * The route is "...```/characters/```".
        2. POST one team of 3 random characters fetched from [Moogle API](https://www.moogleapi.com/swagger/index.html).
            * Each character in the team will be cross-referenced with mongoDB's character database to see if they exist. If not, the character will be created in mongoDB.
            * The route is "...```/characters/one-team/```".
        3. POST two teams of 3 random characters fetched from [Moogle API](https://www.moogleapi.com/swagger/index.html)
            * Two teams has the same logic as the POST request for One Team.
            * The route is "...```/characters/two-team/```".

* PUT will allow you to update characters using Id as a param and return the new data in json format.
    * route is "...```/characters/<Id here>```".
* Delete will delete characters using Id as a param.
* route is "...```/characters/<Id here>```".




## Future Additions 

1. Implement a way to create teams in mongoDB when POST request is made for teams creation using the POST requests for characters.
2. Attach a front end React UI that will complement the API. 
3. Build a game using the front end and back end API that will coinflip teams and determine a winner. 
4. Find a way to adjust stats for all characters as [Moogle API](https://www.moogleapi.com/swagger/index.html) seems to be missing stats for most characters.
5. Allow Game to be determined based off of team total stats instead of a coinflip.

-------------
## Thank You for checking this out! Feel free to leave feedback and suggestions. I am also open to collaborations!
--------------
## Repo URL: https://github.com/locb65/FF-API