# Microservices

Please note: None of the text here is guaranteed to be 100% correct, no definition, nothing is copy pasted from the internet, this is just waht I recall after watching or learning about microservices.

1. What are microservies ?

    So, As we all know everything starts from the problem of messy code. Same was the case with microservices. Initially, before the advent of web development, we had desktop applications, 
    So, as applications grew, the codebase was becoming huge and huge and huge. 

    That is certainly a problem in software! So, developers came with best practices in software. But
    were that enough ? Yeah, to be frank it somehwere solved the problem of messy code, but at the end if the software was a desktop app, it has to be deployed as a whole, so at the end, the code had to be combined.

    NOw, here is when interesting times started to come in. The advent of web applications. 
    WIth web application, people followed the same approach of modular code, jsut that this time, the entire codebase was ona server, rather than being on someone's machine.

    So, again the codebase was huge at the end, and suppose if a food delivery company wanted to scale for a major sale, they have to increase the instances of the applicationa and that would unnecessarily instantiate the whole application, while just a part is being used by the users a lot

    So, with the sttory in place, came something called as microservices.

    WIth the above background, it is now time to get into microservices. Microservices are nothing but small part of applications that interact with each other, and all microservices together deliver a better software (NOT NECESSARILY)

2. What are the advantages of microservices ?

    Okay, so now, its time to let us look as to why organizations started getting away from the monolithic architecture and tsrated moving towards the microservice architecture.

    Well, here are the advantages.
        i) No need to scale all the microservices, when just a few are required a lot.
        ii) Can be deployed over various servers which then make an REST API call to the other,
            Now, the advantage here is that, different services can be written in different languages based on the use case.
        iii) This even helps teams to deliver the product within team.

3. What are the disadvantages of microservies ?

    Well, witth every good thing, something bad also comes. Microservices are great, but sometimes
    the architecture becomes so complex, that it defeats the entire purpose of having a microservice archhitecture.

    
