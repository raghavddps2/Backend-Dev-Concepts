# JSON Web Tokens

1. What is JWT ?

    This is a standard way for two parties to communicate with each other securely. A specification called RFC is behind the same. JSON Web tokens is a compact, URL-safe means of representing claims to be transferred between two parties.


    HTTP is a stateless protocol. It technically doesnn't remember your previous requests.
    So, in every interaction, we have to authorize in every request made. It doesn't remember aything
    related to the previous requests.

    For example, you go to a banking website, how do you remember that a user just logged in. So, we need to remember the user and not authorize or authenticate every time he/she makes a reuqest.
    Here are Two authorization strategies.


    1. Session Tokens
    2. JSON Web tokens.

2. Explanantion for the Session Tokens one 

    So, when the client logs in for the first time, it receives a session id and the server associates that sessionId with the client. Now, when it returns the session id, the clinet stores this session Id as a part of its cookies and now for every subsequent request made, the 
    client appends/attaches sessionId as well.

    SessionId+Cookies do the task we want, but certainly, there are some disadvantages.
    The biggest problem is that now a days, most of the applications, are no longer monolithic, 
    they arre microservices based applications or they have a load balancer, that sends the request to the server available and now suppose if you send a request to a server that doesn't have that log table of all the sessions creates, you are screwed!

    But as people are creative at heart, they came out with the concept of a shared cache (Redis),
    but the problem here is that, this is risly, if one single instance of the redis server goes down, entire thing will be in vain. Hence, the solution is that, the load balancer remembers, as to which server has the session and it redirects the request only to those servers, but this is something that is not very scalable.

    Hence, came the need of JWT or Json Web Tokens.

3. What are JSON Web tokens ?
    
    It is a way for client and server to share information directly that has some meaning for multiple interactions  without the server having to remember, anything. The signature that is where in JWT's is what makes them secure.

     Session Tokens - Reference tokens
     JSON Web tokens - Value tokens.

     JWT doesn't look like json, we can actually create JSON from the JWT that is sent.
     Well, how to do is something we will write tomorrow.

4. The structure of JWT ?
    
        


