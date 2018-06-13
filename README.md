## LogIn Screen

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Design 
I used this [login screen design](https://dribbble.com/shots/4612955-Recombee-Sign-In-Sign-Up) from by Franta Toman on Dribbble as a reference for this simple application. 

### Getting Started
1. Download or clone folder onto you computer.
  - using clone:
   `git clone git@github.com:shekinahsmith/login-screen-react.git`
2. Ensure that you're using Node 10(+)
  #### Via NVM 
  - `nvm install 10`
  - `nvm use 10`
  
  #### Via Node 
  - Following these instructions [here](https://scotch.io/@vishalbiradar/how-to-install-specific-version-of-nodejs)
3. Once you're on the correct node version, run `npm install`
4. Use `npm start` to serve the site locally

### Functionality
You can create a **mostly functional user account or use an existing login.

The following are the two pre-created users in the database.
```
"user1" : {
  "companyID" : "my-awesome-company",
  "email" : "testUser@test.com",
  "password" : "S2@kjksPakd"
},
"user2" : {
  "companyID:" : "bacon-and-brews",
  "email" : "tryMe@test.com",
  "password" : "Vkje229^ladk"
}
```
If you choose to use a pre-exisiting user, on the welcome screen you should see the email and companyID for that corresponding user.

Alternatively, if you create a new account, and then sign in with the newly created account, you should also see the email and companyID for that new user on the welcome screen.

### Browser Compatibility
- Chrome
- Edge
- Firefox
- Safari
