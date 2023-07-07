# Translation app for Aview International
Developed by [Nicholas Milligan](https://github.com/NicMilli)

## Installation
```shell
npm install
```

```shell
npm run build
npm run start
```

Create a .env file in the root directory with the following contents:

```shell
PORT=3000
CAT_API=https://catfact.ninja/fact
DOG_API=https://dogapi.dog/api/v2/facts
TRANSLATION_API=https://translate.foxhaven.cyou
```

## Approach
Due to the scope of the project I decided to create simple React application with webpack and babel to compile and bundle the JavaScript code. I added an express server to serve the static files.

I opted to pass props instead of using state management tools such as Redux or useContext due to the size of the application. The boilerplate to set up Redux toolkit would've negated any gain it might bring in terms of development time.

For the styling I chose the same color scheme as the Aview International website as I enjoyed the vibrant colors. Again due to the size of the project I decided a single css file was adequate.

The result of these decisions to prioritise a lightweight app is a Lighthouse performance score of 100 and a smooth user experience.

I decided to have an interactive landing page where users can choose to see cat or dog facts. They can also translate the welcome message to their chosen language to appeal to a larger audience. Choosing a 'preference' then loads a fact about the chosen animal and translates it it the chosen language. Changing the language loads a new translation, clicking 'new fact' button loads a new facts and selecting a different 'preference' will load a new fact about the new animal. Since the API response time can be variable I added an intermediate state of 'Loading' and 'Translating' to show the user that their action has been received.

Thank you for your time and I hope you enjoy my application.
