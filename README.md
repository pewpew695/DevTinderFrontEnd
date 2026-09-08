# DevTinder

- Create a Vite + React Application
- Install TailWindCSS
- Install DaisyUI Plugin
- Add a Navbar Component to App.jsx
- Create a Navbar.jsx separate component file
- Install react-router-dom
- Create a BrowserRouter > Routes > Route=/ & Body > RouteChildren
- Create an Outlet in Body Component
- Create a Footer.jsx at the bottom
- Create a Login Page with Buttons/InputBox
- Give state variables to connect input box whenever call is made
- Install axios (Used to make API calls instead of using fetch)
- In backend code, install cors & use as a middleware in the app with configurations: origins, credentials:true
- Whenever an API call is being done with axios pass =>{withCredentials:true}
- Install redux toolkit & react-redux
- Configure store, add Provider to applocation, create a slice, add slice to store
- From login page dispatch an action using useDispatch hook to add user to the store
- In NavBar, the photo should be displayed only if user is logged in. To access the user, subscribe to the store using useSelector Hook
- When user logged in , navigate to feed page using useNavigate hook
- Refactor the code:
  1)In login move the base URL to a constant
  2)Move all component files into a new component oflder & change all references of import of these files
- You should not be able to access other routes without login
- If token is not present, redirect to login page
- In Navbar, give links from Profile in dropdown & Website name to rediret to profile page/Home page respectively
- Do not allow to make API call for accessing profile data if already present in Redux store.
- On logout click, call logout API & navigate to login page
- Creat a dynamic error message on login & display inside login window
- Create a feedSlice to store & remove the feed data in the redux store
- Build the userCard on the feed page
- Convert patch method to put method to avoid CORS issues
- Gave preview of the current user's card in the Profile
- On save profile click, make a put request to API to save profile data in db, update the store & also give a Toast notification of success with a timeout of 3 seconds
- Make the error message in Profile window dynamic
- Create a new Page called Connections to make an API call to /user/connections & store the data in connectionSlice. then display all the userCards of the connections of current user on this page
- Create a new Page called Requests to make an API call to /user/requests/received & store the data in requestSlice. then display all the userCards of the requests received by current user on this page
- In request page, on accept or reject button click, call api to review request & once done to re-update store. This will casuse the usercasrd to immediately go from the page
- In feed page enabled feature to send interested or ignored status for the cards beng displayed. On button click feed would be refreshed with the next value from the store by constantly updating the store
- Re-use Login component for the signup feature by using toggle feature. ON SIGNUP click, made apicall to /signup & re-directed to prefile page


Outline of WebPage:
\_Body
\_NavBars
**Route=/ =>Feed
**Route=/login =>Login
**Route=/connections =>Connections
**Route=/profile =>Profile
\_Footer
