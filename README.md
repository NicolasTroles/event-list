<img width="300" src="https://assets.website-files.com/5e2495f5992bfa2a8b2e2365/5e583b4ac8f5875e1262a672_22_Logo_MW_Font_dark.svg" />

# Challange

- Event list with creation, update and delete.
- Calendar view

### Events Structure

     const events = [{
        "id": 94,
        "title": "Sunt aut aperiam placeat deserunt.",
        "start_time": "2022-03-22T07:00:00.000Z",
        "end_time": "2022-03-22T09:47:00.000Z",
        "address": "7868 Ferry Road",
        "status": "done"
      }]`

#Some comments

- I installed and configured eslint and prettier
- I renamed the files from index.tsx to the name of the component. This way its easier to find the file in VScode (ex.: Home/index.tsx -> Home/Home.tsx)
- I moved the components related only to Home.tsx inside of the same folder. I'm used to only let new components inside of folder 'components' if they are used in more than one component, this way the folder 'components' does not get too big.
- I moved the Styles related to each component inside of theirs folders, this way it stays more centralized the styles.

# How to run

Clone the project into your computer, access the folder of the clonned repository in your terminal and execute `npm install` or `yarn` to install all the packages, than execute `yarn start`.

# ;D

<img width="200" src="https://media.giphy.com/media/aNqEFrYVnsS52/giphy.gif" />
