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