#Dev Tinder APIs

authRouter
- POST /signup
- POST /login
- POST /logout

profileRouter
- GET /profile/view
- GET /profile/edit
- PATCH /profile/password

connectionRequestRouter
- POST /request/send/interested/:userId
- POST /request/send/ignored/:userId

- POST /request/review/rejected/:requestId
- POST /request/review/accepted/:requestId

- GET /connections
- GET /connections/ received
- GET /feed

status: ignore, interested, rejected, accepted