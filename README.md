# Raise A Duckie

### What It Is
Raise a duckie is a virtual pet (tamagotchi) application built in MERN stack for capstone project at Ada Developers Academy. 
This web app is based on a CRUD application and makes use of the RESTful api design for routes. 

### How It Works
The player creates a new Duckie to raise, and "raises" the duckie tamagotchi style, by pressing the buttons. There are 4 main stats, affection, hunger, study, and play. 

The stats are associated with implemented "endings", which traditionally doesn't exist in tamagotchi games (at least in the 90s versions). For example, if a duckie has high "study" stats, once it is done "growing up" it may turn out to be a Lawyer duckie and so on. The affection stat is what triggers the ending, so even if all the other stats are maxed out at 100 points, if the affection stat is not high enough, the ending will not be triggered. The endings are little popup boxes indicating which duckie has "grown up" and what it has "become", which is usually an occupation. 

### Dependencies - backend
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongodb": "^5.7.0",
    "mongoose": "^7.4.1",
    "morgan": "^1.10.0"

### Dependencies - frontend
    "axios": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.2",
    "react-scripts": "^5.0.1",


### Setting Up 
once the duckie repo is cloned onto one's machine, head over to ```server``` directory and type in ```npm start``` in the terminal in order to start the server. Once the server message states that it is connected to mongoose and there are no connection errors, head over to ```https://glittering-kangaroo-ff2f6d.netlify.app/``` to play the game. More work will be done sometime soon to patch up the frontend code for this deployed website so that players can directly interact with deployed front end website without needing to install anything onto their machines.


