# Full Stack Project (node - react) 

Hello, this is server example.
we want to you build some client side using create-react-app
and fix some request in server side express.

# Mongo Sructure

you have only one collection User

## User Schema

    {
	    	first_name: 		String,  
		last_name: 		String,  
		gender: 		String,  
		avatar: 		String,  
		job: 			Object,  
		contacts: 		Object,  
		location: 		Object
    }

# Server Routing
| Method | Discription | Url | Need To Fix |
|--|--|--|--|
| GET | list of Users | localhost:4545/api/users | No
| GET | User by Id | localhost:4545/api/users/{id} | Yes
| POST | create User | localhost:4545/api/users | Yes
| PUT | update User | localhost:4545/api/users/{id} | Yes
| Delete | Delete User | localhost:4545/api/users/{id} | Yes

# Image For Example
![alt text](https://github.com/1omercohen/test-server/blob/master/ui.png?raw=true)
