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

- POST /request/send/:status/:userId //interested, ignored
- POST /request/review/:status/:requestId //accepted, rejected

- GET /connections
- GET /connections/ received
- GET /feed

status: ignore, interested, rejected, accepted
