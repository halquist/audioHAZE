# Audiohaze
Audiohaze is a Retrowave themed clone of soundcloud. Users can browse original Synthwave, Darkwave, and Chillwave music uploaded by other users, participate in a discussion about the songs, and upload their own music.

Try it out at the live site: [Audiohaze](https://audiohaze.herokuapp.com/)

![Example photo](https://user-images.githubusercontent.com/20021488/167439079-65c5685d-0734-49ed-83dd-0403a5105cc4.jpg)

# Index

|
[Database Schema](https://github.com/halquist/audioHAZE/wiki/Database-Schema-Diagram) |
[Feature List](https://github.com/halquist/audioHAZE/wiki/AudioHAZE-Feature-List) |
[API Routes](https://github.com/halquist/audioHAZE/wiki/API-Routes) |

# Technologies Used

<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"  height=40/><img  src="https://raw.githubusercontent.com/lhz516/react-h5-audio-player/HEAD/assets/logo.png"  height=40/><img  src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>

# Getting started

1. Clone this repository

   `git clone https://github.com/halquist/audioHAZE.git`

2. Install dependencies in both the frontend and backend folders

   `npm install`

3. Create a .env file based on the .env.example given

4. Set up your username and database based on the names you chose in your .env

5. Migrate and Seed models

   `npx dotenv sequelize db:migrate` &&
   `npx dotenv sequelize db:seed:all`

6. Start the app in both the frontend and backend folders using:

   `npm start`

# Deploy to Heroku

1. Create a Heroku account if you don't have one [Here](https://signup.heroku.com/)

2. Create a new project on Heroku

3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"

4. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

5. Run `heroku login` in the root console of the Audiohaze directory

5. Run `heroku git:remote -a <name-of-Heroku-app>` in the root console of the Audiohaze directory with the name of the project you created on Heroku in step 2

6. On Heroku under 'Settings' there is a section for 'Config Vars'. Click the `Reveal Config Vars` button. You should already have a `DATABASE_URL` environment variable from the Heroku Postgres add-on. Add environment variables for `JWT_EXPIRES_IN` and `JWT_SECRET` which match the values in your .env file.

7. From the root directory console of Audiohaze run `git push heroku master` if your branch is named master or `git push heroku main:master` if your branch is named main.

8. To set up the database run `heroku run npm run sequelize db:migrate` and then `heroku run npm run sequelize db:seed:all`

9. You should be able to view your deployed site from the Heroku dashboard now!
