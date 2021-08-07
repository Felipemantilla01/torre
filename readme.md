# Torre - technical test

## What's Next?

What's next is an application that helps developers find which language or framework to study in order to improve their skills and learn more about the most popular technologies.

It provides an idea of ​​the number of jobs available and current developers with experience in a specific topic, plus the approximate payment for it. It also provides some resources where you can start learning.

## Architecture

The application runs in a docker environment, with three containers

1. database: MongoDB is the database, and is used for save some configurations of the app, like the available resources.
2. backend: The backend was created in NestJS, it have to communicate with torre endpoints to get the info and process it, Also save and get the information in the database
3. frontend: The frontend was created in Angular, is the app UI, get the data from the backend, and renderize the info in charts, in a pretty way.
![alt text](https://firebasestorage.googleapis.com/v0/b/torre-edc01.appspot.com/o/ARCH.png?alt=media&token=b4c033d4-1b80-4c8e-b86d-9eb05c70924e)

## Comments

I hope that you enjoy it.
