import { useEffect } from "react";
import axios from "axios";
import React from "react";
import { gapi } from "gapi-script";


// Client ID and API key from the Developer Console
const CLIENT_ID = process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;

const App = () => {
  // var CLIENT_ID = '9399017164-dmkarile9ssavcl5achflnqu13ujq728.apps.googleusercontent.com'
  // var API_KEY = 'AIzaSyAG77XSfCOYkL0h9PuKkkvbZzQDsK710X4'

  // // Array of API discovery doc URLs for APIs used by the quickstart
  // var DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']

  // // Authorization scopes required by the API; multiple scopes can be
  // // included, separated by spaces.
  // var SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly'
  // useEffect(() => {
  //   axios.get('https://www.googleapis.com/drive/v3/files', {
  //     params: {
  //       apiKey: API_KEY,
  //       clientId: CLIENT_ID,
  //       discoveryDocs: DISCOVERY_DOCS,
  //       scope: SCOPES,
  //     }
  //   })
  //     .then((response) => {
  //       // gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)

  //       // Handle the initial sign-in state.
  //       // updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
  //       console.log(response)
  //     })
  // })
  return null
}
export default App