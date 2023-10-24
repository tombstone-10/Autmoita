![Logo](./client/src/assets/png/logo-no-background.png)

# Automita

Automita is an open-source tool for creating timetables.

Currently, there are two branches:

- [Main](https://github.com/tombstone-10/Autmoita) for production build.
- [Test](https://github.com/tombstone-10/Autmoita/tree/Test) for testing, all changes and commits must be done here.

### Where to work?

- Always commit to _test_ branch.
- For backend implementation, first add the code in newly created branch _server-testing_, later after code reviews by team member push it into test branch and then main.

### When to push to main?

- After a specific task is done and committed on test, a pull request will be generated. The request will be pushed to main when reviewed by 2 other collaborators.

## Folder Structure

### Client

This contains the frontend source files.

### Server

This contains server side logics.

### Run App (Client)

This is built on [vite](https://vitejs.dev/guide/), visit it for more information.

- To install dependencies in your local machine:

```
npm install
```

- To run the application's client site:

```
npm run client
```

### Run App (Server)

- To install dependencies in your local machine:

```
npm install
```

- To run the application's server site:

```
npm run server
```

### Run App (Full)

- To install dependencies in your local machine:

```
npm install
```

- To run the application's client and server site together (this does not include setting up Atlas and running MongoDB):

```
npm run dev
```

- http://localhost:5173/

Keep checking issues for updates on any bugs or problems.
