OrgEvents

A portal to create, participate and collaborate events within the organization.

Technology Stack:
  Front End Application:
    - Developed using ReactJS, React Material, D3 and PWA
    - The code is developed as components which will be reused across the application to display the views in many instances.
    - D3 chart has been integrated inside react code.

  Middleware:
    - Developed using Node & Express to write the business logic and to generate REST API.
    - Tried to use Loopback framework on top of express which is work in progress.
    - MongoDB aggregates are mostly used to speed up the query and to get the precise results.

  Backend:
    - Created the required DB using MongoDB.
    - Collections are created to have complex structure of grouping the related documents and data consolidated in the same collection.
    - Aggregates are used to get more accurate results with much faster.

Application Flow:

Dashboard:
  - Carousel of event's opened for registration
  - Top 5 participants { this is to motivate and popularize the participants }
  - Top 5 solutions { to promote and popularize the solutions provided }
  - Top 5 Events with highest participants { to popularize the trend of participant interest}
  - List of upcoming and ongoing events
  - List of past events

Event Detail:
  - Provide complete detail of the event that includes Event Name, Registration Start Date and End Date, Event Start Date and End Date, Participant List etc.
  - Based on the registration end date the enroll option will be available
  - For past events, user can download the solutions provided by the participants

Enroll:
  - Participants can enroll to any of the events with the registration time range.
  - Participant need to provide their Email, no. of participants, location and their team name while registering for an event

My Dashboard:
  - All the employees can have their dashboard view where they can navigate to their enrolled events and those events that they have created.
  Enrolled Events:
    - Participant see the list of events that they have participated
    - Participant can upload their solutions or path to the source code such as link to github from where others can download it
    - Participant can delete the previously uploaded solution and can upload a fresh solution.
  My Events:
    - List of event which the particular user has hosted
    - Display the complete list of participant of any selected event
    - Upload the solutions on behalf of the team
    - Declare the results for the team
  FYA:
    - A notification will be shown in case any query is raised for this solution. The participant will answer this query which wil be displayed in the community page.
    - Notification will be shown to all the team members until atleast one reply

Community Page:
  - any user can raise a query in the community pages for a particular solution
  - Reply will be received through the FYA from the participant dashboard
  - Anyone can reply to the question and share their thoughts
  