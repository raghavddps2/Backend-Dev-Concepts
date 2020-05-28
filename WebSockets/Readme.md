WebSockets

    -> Communication between a client(browser) and the server
    -> Bidirectional (Data flows in both ways)
    -> ALlows real time application

WebSockets are used in a variety of Applications

    -> Real time Games
    -> Obviously Chat Applications.

Here, we need to setup a connection between client and the server
    -> We setup a connection at the server side
        We listen for the connection at the server
    -> We setup a connection at the client side.
        Client just make a connection to the server.
    (We have to include a library to do that at the fronted)
    (Whereas for the )

Flow
client ----------> Server --------> Broadcase emit to all connections ------> receive on client side
              ( Emit )          (receive)           (emit)                      (receive)
            
    We do the receive wala part using a chat or any ref thing to emit on.

BROADCAST MESSAGE
    -> When server send messages to all except from the one sending.

client side

emit is to emit an event -> When we emit, we send to the server, we send the data
on is to listen an event. -> When we listen, we receive from the server, we receive the data.


server side

io object is the main, it creates the chat,

when emit -> just .emit function either on socket or io and it sends the data
when on  -> it is for listening the event.

To send to all users except the sender, we use broadcase.

