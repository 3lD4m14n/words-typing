# Game Rules
The game is about correctly writing as many words as possible within a set time. The game has three different durations, and the longer the duration, the higher the bonus points the player will receive for not making mistakes.

The game rewards the user for making the least amount of errors possible. The more you write without making mistakes, the more points you will earn, especially with a longer selected time.

points formula: `WordLength * (10 * duration - errors)`

# Operation
This project uses WebSockets for obtain the words from the server, so if you want to use this project in your machine, you should use the backend with it. The code of the backend is in [my github](https://github.com/3lD4m14n/words-typing-backend)
# To Start the project
to use this project you need config a .env.local file with `NEXT_PUBLIC_SOCKET_SERVER_URL` if you use the backend project the default port of the backend is 5050.

## Comands to start
```bash
npm install
npm run dev
