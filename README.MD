#####

## Create User

Creates a user with the details and returns the user info

|Body     |values    |description  |unique|
| ------- | -------- | ----------- | ---- |
|         |username:string| input user's username here|yes|

--example URL : http://localhost:8080/user
--method:Post
--body:{
    "username":"messi"
}



## GET users

Returns details about all the users

-example URL: http://localhost:8080/user
-method:***GET***

## Get user
Returns detail about a single user
|parameters|required|descripton|
|----------|--------|----------|
|userid|yes|param to find user in db|

--example url: http://localhost:8080/user/${userId}
--method:***GET***

## Create Meeting

create meeting with user details and meeting details
|Body|values|description|unique|required|
|----|------|-----------|------|--------|
| |title:string| meeting title|no|yes|
| |scheduler:string|id of user creating the meeting|no|yes|
| |member:string|id of user invited to meeting|no|yes|
| |DateandTime:string| date and time for meeting|no|yes|

{
"member":"6269687d505f9c81d78e0c2a",
"scheduler":"626967d17e463853c0d033de",
"title":"dsd",
"DateandTime":"2022-04-27T23:21:12.576Z"
}

--example url: http://localhost:8080/meeting
--method:***POST***


## GET meeting

returns info about a single meeting
|parameters|required|descripton|
|----------|--------|----------|
|meetingid|yes|param to find meeting in db|

--example url: http://localhost:8080/meeting/${meetingId}
--method:***GET***


DONE
