## Task Submission Backend

### Sign up

Whenever a user signs up for the first time, a new user is created in the database with the selected role

### Login

Once the user logs in, a toast message has been sent and redirected to the dashboard and conditional rendered based on the role

### Student Dashboard

User can submit task with the deployed urls and it is stored in seperate collection in the name of Task with the respective userId

### Mentor Dashboard

Whenever a student submits the task, a form is displayed in the card with the deployed urls. Mentor can give the comment and score in that form which is stored in the Task Collection.

If multiple tasks are submitted by the student, only one task is displayed in the dashboard. Once he/she evaluates the task, the next task is displayed.

If there is a change in the task collection the dashboard is rerendered, so that the student can see the comment and score which will help in progress his/her learning experience

### Update 

There will be another component featuring the tasks submitted by the particular student in a seperate page with all the task submitted by him/her

***Thank you***
