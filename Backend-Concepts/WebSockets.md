HTTP is a stateless(There is no connection between subsequent requests) protocol
WebSockets use a protocol called as ws
    -> ws://www.google.com
    Web sockets are bi directional, they don't close the connection which they open for the first time, in case of web sockets, the connection stays there, until the client or the server decides to terminate the connection.

The connection happens in case of bi directional message communication

    client                      Server
    |                               |
    |       Handshake               | Connection (handshake)
    |                               |  
    |                               |
    |                               |
    |        Bi directional         | Open and persistent connection
    |         Message communication |
    |                               |
    |         Connection closed     | Connection closed by wish
    |                               |
    |                               |

Real time application, when we want to load the ui, without refreshing(Ajax is different)
Gaming Applications, ui is updated automatically 
Chat Applications

Web sockets - Live implementation at gdax website, without refreshing any page, data is pushed to the ui, whenever something changes.
The communication keeps on happen in the background.
State is lost when the screen is refreshed.

So, web sockets achieve real time things, when we want to update the ui without refreshing, there is a connection between the client and the server.