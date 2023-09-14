# Fitrack

<br>

## Description

This is an app that helps the personal trainer arrange and monitor the fitness progress of the clients.

## User Stories

# Coach persona
-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's not available for me.
-  **Signup:** As a user I can sign up in the platform so that I can start monitoring my client's fitness progress.
-  **Login:** As a user I can login to the platform so that I can start monitoring my client's fitness progress.
-  **Logout:** As a user I can logout from the platform so no one else can tamper mine and my clients information.
-  **Delete:** As a user I can delete my account if I am not happy with the platform.
-  **Change password:** As a user I want to change my password.
-  **View exercises:** As a user I can view exercises of my clients
-  **Filter exercises:** As a user I can filter exercises of my clients.
-  **View exercise detail:** As a user I can see the detail of an exercise so that I can decide to update decription and update sets.
-  **Update exercise:** As a user I can update the detail of an exercise including description, reps and weight.
-  **Search for a new exercise:** As a user I can search exercise based on name, body part or muscle group of the exercise.
-  **Create a new exercise:** As a user, I can create a new exercise from the search results and select which client for this exercise.
-  **Add a new set:** As a user, I can add a new set to a exercise.
-  **Delete a set:** As a user, I can delete a set from a exercise.
-  **Save exercise:** As a user, I can save the changes done to the exercise, including the sets.
-  **Delete exercise:** As a user, I can delete an exercise.

# Client persona
-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's not available for me.
-  **Signup:** As a user I can sign up in the platform so that I can start seeing my progress.
-  **Login:** As a user I can login to the platform so that I can start monitoring my fitness progress.
-  **Logout:** As a user I can logout from the platform so no one else can tamper my information.
-  **Delete account** As a user I can delete my account if I am not happy with the platform.
-  **Change password:** As a user I want to change my password.
-  **View exercises:** As a user I can view my own exercises set up by my coach.
-  **View exercise detail:** As a user I can view the detail of my exercises, including description, reps and weight.
-  **Update exercise:** As a user I can update the detail of my exercise including description, reps and weight.
-  **Save exercise:** As a user I can save the changes to my exercise including description, reps and weight.
-  **Add new set:** As a user I can add a new set.
-  **Delete a set:** As a user I can delete a set.
-  **View coaches:** As a user I can view list of coaches availale at the platform.
-  **View coach detail** As a user I can view the detail of a coach.
-  **Subscribe to a coach:** As a user I can subscribe to a coach.

## Backlog

- View all exercises
- View exercsie detail
- Update exercise detail
- Search exercise
- Delete an exercise
- Add a new set
- Update set
- Delete a set
- View account detail
- Update account detail
- Change password
- Delete account
- Update account detail
- Create new exercise

<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component                      | Permissions | Behavior                                                     |
| ------------------------- | --------------------           | ----------- | ------------------------------------------------------------ |
| `/`                       | HomePAge                       | public `<Route>`            | Home page                                        |
| `/signup`                 | SignupPage                     | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`                  | LoginPage                      | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login  |
| `/logout`                 | n/a                            | user only `<PrivateRoute>`  | Navigate to homepage after logout, expire session             |
| `/backlog/series`         | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows all tv series on backlog                                |
| `/backlog/films`          | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows all films on backlog                                    |
| `/backlog/games`          | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows all games on backlog                                    |
| `/search/series`          | SearchForm, SearchResults      | user only  `<PrivateRoute>` | Search a tv series to be added                                |
| `/search/films`           | SearchForm, SearchResults      | user only `<PrivateRoute>`  | Search a film to be added                                     |
| `/search/games`           | SearchForm, SearchResults      | user only `<PrivateRoute>`  | Search a game to be added                                     |
| `/add/:id`                | ElementInfo                    | user only `<PrivateRoute>`  | Add an element to the backlog                                 |
| `/profile`                | Profile, Stats                 | user only  `<PrivateRoute>` | Check profile with stat information                           |
| `/done/series`            | Done list for Series           | user only  `<PrivateRoute>` | Shows all tv series finished                                  |
| `/done/films`             | Done list for films            | user only `<PrivateRoute>`  | Shows all films finished                                      |
| `/done/games`             | Done list for games            | user only `<PrivateRoute>`  | Shows all videogames finished                                 |
          

## Components

- LoginPage

- SignupPage

- NavBar

- FooterBar

- BackBar

- ElementList

- SearchForm

- SearchResults

- ElementInfo

- Stats



  

 

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()

- Api Service
  - backlog.filter(type, status) // for different types of media and if they are done or not
  - backlog.detail(id)
  - backlog.add(id)
  - backlog.delete(id)
  - backlog.update(id)
  
- External API
  - API for exercises


<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/iloDccrZ/backlog-quest) 
or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/jorgeberrizbeitia/backlog-quest)

[Server repository Link](https://github.com/jorgeberrizbeitia/backlog-quest-server)

[Deployed App Link](https://backlog-quest.herokuapp.com/login)

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1zndKZ8DC-_i391alptPKsAKanCSXTrLVL39L3xtEjz8/edit?usp=sharing)
