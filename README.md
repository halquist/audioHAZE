# Audiohaze
Audiohaze is a Retrowave themed clone of soundcloud. Users can browse original Synthwave, Darkwave, and Chillwave music uploaded by other users, participate in a discussion about the songs, and upload their own music.

Try asking and answering questions at our live site: [Oraql](https://oraql.herokuapp.com/)

# Index

|
[MVP Feature List](https://github.com/starsabhi/Oraql/wiki/Oraql-feature-list) |
[Database Schema](https://github.com/starsabhi/Oraql/wiki/Database-Schema) |
[API Documentation](https://github.com/starsabhi/Oraql/wiki/API-Documentation) |
[Frontend Routes](https://github.com/starsabhi/Oraql/wiki/Front-End-Routes) |
[User Stories](https://github.com/starsabhi/Oraql/wiki/User-Stories) |

# Technologies Used

<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>

# Getting started

1. Clone this repository

   `git clone https://github.com/halquist/audioHAZE.git`

2. Install dependencies in both the frontend and backend folders

   `npm install`

3. Create a .env file based on the .env.example given

4. Setup your username and database based on what you setup in your .env

5. Migrate and Seed models

   `npx dotenv sequelize db:migrate` &&
   `npx dotenv sequelize db:seed:all`

6. Start the app in both the frontend and backend folders using:

   `npm start`

7. You can use the Demo user or create an account



### Features

Oraql is a question-and-answer website for users to post/edit/delete questions and answers. Logged in sers can dynamically edit and delete answers without redirecting.

Logged out users can:

- View Questions and Associated Answers
- Search for Questions
- View Questions by Topics/Tags 

Logged in users can:

- Add/Edit/Delete Questions
- Add/Edit/Delete Answers
- Search for Questions
- View Questions by Topics/Tags 

### Home Page

![image](https://user-images.githubusercontent.com/95883222/163737543-051ee342-f2f7-4d63-8a10-a820ca4a5f59.png)

### User Sign Up Page

![image](https://user-images.githubusercontent.com/95883222/163737581-632827b6-aae9-4e2f-9718-0a912bc0d35f.png)

### Add Question Page

![image](https://user-images.githubusercontent.com/95883222/163737606-f8fd437c-87f5-45cc-ab3b-6e971fd97ff7.png)


### Question Detail Page
![image](https://user-images.githubusercontent.com/95883222/163737976-1a12534b-8c50-42e5-ace9-1ddb2f6ea5e7.png)


### Search Results Page

![image](https://user-images.githubusercontent.com/95883222/163737653-481b15fe-6315-4f85-8bab-b489340b9fbc.png)


# Future Features

- Comments on Answers:
  - Logged-in users can add comments on answers.
  - Logged-in users can upvote comments/answers/questions.
- Likes on Questions/Answers/Comments
  - Logged-in users can remove their own like from questions/answers/comments.
  - All users can see how many users have liked a question/answer/comment.
- User profiles

# Technical Implementation

- One of our first challenges was search bar functionality: how to process an input and search for related information in the database. Our solution is to segment the input string into a list of words and query the question.content column for data containing any of the words.



