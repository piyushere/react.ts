# social networking

- Authentication and sign up
- Posts
- Friends
- Messages
- Settings: [ Public posts, private posts ]
- Notifications

Posts
comments / replies

Post_ID User_id media(string)

post_id comment_id
comment_id post_id reply_to_id user_id (NULLABLE)
c1 p1 NULL
c2 p1 c1
c3 p1 c1

commment_id comment

user
user_id username user_name dob

credentials
password username
fhash('helloworld')

Notification

post /post/post-id
{
activity: 'like'
}

wss://stream: notification

subject.push({
targets: [
...'ids'
],

})
