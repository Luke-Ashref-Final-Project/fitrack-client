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
| Path                      | Component                                                    | Permissions | Behavior                                                     |
| ------------------------- | --------------------                                         | ----------- | ------------------------------------------------------------ |
| `/`                       | HomePage                                                     | public `<Route>`            | Home page, link to sign up and login 
| `/signup`                 | SignUpPage                                                   | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to loginPage after signup |
| `/login`                  | LoginPage                                                    | anon only `<AnonRoute>`     | Login form, link to signup, navigate to OverviewPage after login  |
| `/logout`                 | n/a                                                          | user only `<PrivateRoute>`  | Navigate to homepage after logout, expire session             |
| `/overview`               | OverviewPage, Nav, Footer, Coach Dashboard/Client Dashboard  | user only `<PrivateRoute>`  | Shows all relevant exercises for client or coach 
| `/overview/:exerciseId"`  | ExerciseDetailPage, Nav, Footer                              | user only `<PrivateRoute>`  | Shows individual exercise detail |
| `/profile`                | ProfilePage, Nav, Footer                                     | user only `<PrivateRoute>`  | Shows all games on backlog                                    |
| `/searchexercises`        | SearchExercisesPage, Nav, Footer                             | user only  `<PrivateRoute>` | Search inquery page, button to execute search, Show search results|
| `/subscribers`            | SubscribersPage, Nav, Footer                                 | coach only `<PrivateRoute>` | View all subscribers                                  |
| `/coaches`                | CoachesPage, Nav, Footer                                     | client only `<PrivateRoute>`| View all coaches                                    |
| `/coaches/:coachId`       | CoachOverviewPage, Nav, Footer                               | client only `<PrivateRoute>`| View coach detail, subscribe to a coach          |
| `/new-exercise`           | NewExercisePage, Nav, Footer                                 | client only `<PrivateRoute>`| View coach detail, subscribe to a coach          |
| `/*`                      | NotFoundPage, Nav, Footer                                    | public only `<PrivateRoute>`| Show 404 page when the route does not exist          |


## Components

- Nav

- Footer

- Coach Dashboard

- Client Dashboard


## Pages

- LoginPage

- SignupPage

- CoachOverviewPage
  
- CoachesPage

- ExerciseDetailPage

- HomePage
  
- NewExercisePage
  
- NotFoundPage
  
- OverviewPage
  
- ProfilePage
  
- SearchExercisesPage
  
- SubscribersPage
 

## Services

- Auth Service
  - auth.signupCoach
  - auth.signupClient
  - auth.logIn
  - auth.verifyToken
  - auth.uploadPhoto
  - auth.getCurrentUser
  - auth.getCoaches
  - auth.passwordUpdate
  - auth.getAllSubscribers
  - auth.subscribe
  - auth.unSubscribe
  - auth.coachOverview
  - auth.deleteUser
  - auth.updateDescription

- Api Service
  - api.fetchExercises,
  - api.createNewExercise,
  - api.getAllExercisesForCoach,
  - api.getAllExercisesForClient,
  - api.getOneExercise,
  - api.updateExercise,
  - api.createVariation,
  - api.updateVariation,
  - api.deleteExercise,
  - api.deleteVariation,
  
- External API
  - api.fetchExercises,

<br>


## Links

### Backlog
[Link to ClickUp](https://sharing.clickup.com/4561709/t/h/861n8374w/BHJFKAHZVXV8O3D)


### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/Luke-Ashref-Final-Project/fitrack-client)

[Server repository Link](https://github.com/Luke-Ashref-Final-Project/fitrack-server)

[Deployed App Link](https://fitrack-app.netlify.app/)

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1KF32iJ4J2JKJMX5MWSWo07rR9NdlvhdD4GB8ZwmEp2k/edit?usp=sharing)
