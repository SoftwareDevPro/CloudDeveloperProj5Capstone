# Cloud Developer Project 5 Capstone

Capstone Project for the Cloud Developer Program

1. Added email notifications
   1. After login, enter email address in box
   2. Click button to send confirmation
   3. Open confirmation email, and click link to confirm subscriptions
   4. Creating a TODO, will send a creation notification (via SNS)
   5. Updating a TODO, will send an update notification (via SNS)
   6. Delete a TODO, will send a delete notification (via SNS)
2. Added public TODO items
   1. After creating a TODO item, the public checkbox will designate it as public
      1. default is false for the public option
   2. Logging in as another user will display public TODO items
