# Dev Tinder APIs

## authRouter

- POST /signup
- POST /login
- POST /logout

## profileRouter

- GET /profile/view
- GET /profile/edit
- PATCH /profile/password

## connectionRequestRouter

# interested, ignored
- POST /request/send/:status/:userId 

# accepted, rejected
- POST /request/review/:status/:requestId 

## userRouter

- GET /user/requests/received
- GET /user/connections

# gets the profiles of other users on platform
- GET /user/feed   

status: ignore, interested, rejected, accepted


- POST API = Attacker can send any data so before adding in database check all the incoming data.
- GET API = make sure that we are sending back to the user only the correct data.