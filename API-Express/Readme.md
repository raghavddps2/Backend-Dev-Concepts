API: 
    -> Application Programming Interface.
        Various applications provide us a way to interact with them. 
        The interaction may be using something called as endpoints.
    -> Companies expose API's
        Various companies expose various API's so that developers can intercat with their Application
        Uper for example might have an API that gives the drivers in a particular area.

REST: Representational State Transfer
    - Architectural style of the Web
    - A standard set of guidelines by which we can structure and create API's
    - REST API's have identifiable properties
    - We can intercat with an APi following these set of rules.

HTTP Methods
    - GET: Retrieve data from the server
    - POST: Used to send data to the server
    - PUT: This is used to upadet the data
    - DELETE: This is used to delete the data

REST Properties:
    - 200 Means OK
    - 404 Means not found
    - 500 Means internal server error has occured.

GET:
    -> Get the data from the mongodb database

POST:
    -> Store some new data in the mongod

PUT:
    -> Update the ninja position

DELETE:
    -> Delete a ninjas position

This series we will create an API 

Models:
    -> They are ways for us to represent collections in mongodb
    -> We have the user model to represent a collection of users.
    -> Ninja model to represent a collection of ninjas

Schemas:
    -> Schema defines the structure of our data objects
    {
        name: String,
        rank: String,
        avalabality:boolean
    }

    According to this the mongodb has the ninja collection and so on..

Mongoose:
    - Adds a layer of methods to easily save,edit,retrieve and delete fata from mongodb
    - Allows us to create our models and Schemas eaasily.

URL parameters:
    -> That ? mark and = one are the url parameters and retrieved using req.query.name etc
    -> The one that is a part of the request is the request parameter and is retrieved using req.params
    -> The one that comes as a post, is basically nothing but the request.body
    -> When we deal with forms, it is usually a post request, so we can use request.body only.
    