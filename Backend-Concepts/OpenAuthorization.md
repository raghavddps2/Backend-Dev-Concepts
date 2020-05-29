# Open Authorization

1. What is OAuth2 or Open Authorization ?

    Well, this is very very interesting. Suppose, we want to have a photo printing service and a user wants to get his/her photo printed. One simple step is to upload the photo and then get it printed.

    But here comes the issue, the entire world is moving to the cloud and as a result our users too. So, what our users want is a way to upload photos directly from the google drive, now I being the owner of a very small web application, how should I ask google to give me access to it.

    So, to resolve this issue once and for all, people came up with something called as OpenAuthorization. Here, the user allows/authorizes the photo printing service to access a part of its google account and it is able to access it because of a token that is issued by google to this photo printing service.

    This can be greatly visualized using they valet key example for some cars.

2. Terminologies in OpenAuthorization

    1. Resource Owner -> He is nothing but the owner of this resource. In this case, it is the person, who wants to get all these photos printed.

    2. Authorization Server -> This is the server that basically issues tokens to the photo printing service.

    3. Resource Server -> This is where the resource is present. This is nothing but the google datbase servers.

    4. Client -> Last and finally this is nothing but the Photo printing service.

Authorization is perfect for communication between microservices.

3. OpenAuthorization FLows

    i) Authorization Code Flow (Involves authorization token)

        1. User logs in to the photo printing service and asks it to access google drive. (Resource owner)
        2. Photo printing server, goes to the authorization server and tells it that my user wants to access something from your database server. 
        3. Then authorization server tells taht I want to talk to the Resource owner and if he/she authorizes me, I am ready to go.
        4. When the authorization server has the access from the resource owner, it gives the client an authorization token, now, Photo printing service sends the token to the authorization server, and now it gives the data from teh database server.

    ii) Implicit flow 

        1. Resource owner makes a request to print photos.
        2. Client asks authorization server and he asks resource owner to give or not, he does
        3. Now, the client takes the token anduses it directly to get the data from the resource server.
        4. This is undoubtedly less secure than the first application.

    iii) Client Credentials Flow (When the client is vry very trusted.)

        1. This is usually between micorservices. The microservice1 makes a call to the AuthServer,
            and AuthServer directly gives access token and then microservice2 gives the data from the datbases.

    This works very very well in case of microservices communicating with each other.
    