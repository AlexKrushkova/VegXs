// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL : `https://jsonplaceholder.typicode.com`,
  firebaseConfig: {
    apiKey: "AIzaSyAE9rXfgetaO5WLhJeayPb3FGdZp848Aec",
    authDomain: "vegexcess.firebaseapp.com",
    databaseURL: "https://vegexcess-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vegexcess",
    storageBucket: "vegexcess.appspot.com",
    messagingSenderId: "977141622489",
    appId: "1:977141622489:web:fda1b9574af727c10e40c8",
    measurementId: "G-KTMTZ45J1Z"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
