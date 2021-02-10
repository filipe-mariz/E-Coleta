{
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "",
    "database": "",
    "entities": [
       "./src/app/model/**/*.ts"
    ],
    "migrations": [
       "./src/database/migration/*.ts"
    ],
    
    "cli": {
        "migrationsDir": "./src/database/migration"
    }
 }