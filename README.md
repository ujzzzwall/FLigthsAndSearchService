# Welcome To Flight Service

## Project setup 
- clone the project on your local
- execute `npm install` on the same path as of your root directory of the downloaded project
- create a `env` file in the root directory and add the following enviornment variables
  - `PORT = 3000`
- inside the `src/config` folder create a new file `config.json` and then add the following piece of json :-
  ```
  {
    "development": {
      "username": "Your_Db_Login_Name",
      "password": "Your_Db_Password",
      "database": "Flights_Search_Db_DEV",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }

- Once you have added your db config as listed above, go to the src folder from your terminal and then execute `npx sequilize db:create` and then execute
`npx sequelize db:migrate`

## DB Design
  - Airplane table 
  - Flight table
  - Airport table
  - City

  - A flight belongs to an airplane but one airplane can be used in multiple flight.
  - A City has many airports but one airport belongs to a city.
  - One airport can have many flights , but a flight belongs to one airport. 