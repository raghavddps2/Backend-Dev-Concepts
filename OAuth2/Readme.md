OAUTH:

    - Open Authorization
    - One approach to user authentication
    - Uses 3rd party services like Facebook,Google+,Github etc.

USES:
     - One less thing to worry about
     - No forms to fill to sign up to our website
     - Don't have many accounts to remember paasswords for
     - Just a few central identities(FB,G+,etc) you can use to login anywhere

OAUTH Glance

    Our website-----> Google/Facebook sign in ----> GoogleConsent
            ^                                            |
            |(Back here)                                      

OAUTH (Big Picture)

    /auth/provider ---> /auth/google_handler---> (redirect) 
    and receive details

    We then lookup/create user in our database(mongo)
                |
        create unique cookie
        decode cookie and retrive user information

    Passport.js allows us to serialize,deserialize cookies and 
    google sign in flow.

SERIALIZATION AND DESERIALIZATION USERS.
     -> Serialize basically means putting the unique id in a cookie, so that
        when a user comes again, we can deserialize it to get the information of the user back.

