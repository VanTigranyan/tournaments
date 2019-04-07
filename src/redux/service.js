import api from "./api";
import axios from "axios";


// import authTypes from './types/authTypes';
// import jwt from "jsonwebtoken";

// /**
//  * @desc Checks if a user is Logged in.
//  * @returns {boolean}
//  */
// function isLoggedIn() {
//   const accessToken = localStorage.getItem("accessToken");
//   if (!accessToken) {
//     return false;
//   }
//   const decoded = jwt.decode(accessToken);
//   const dateNow = new Date();
//   return !(!decoded || (decoded && decoded.exp < dateNow.getTime() / 1000));
// }
//
//
// /**
//  * @desc Decodes token
//  * @param token
//  * @returns { object } - the object containing user info, or false.
//  * @private
//  */
// function _getUserFromToken(token) {
//   const decoded = jwt.decode(token);
//   if (decoded) {
//     return {
//       email: decoded.email,
//       name: decoded.name,
//       surname: decoded.surname,
//       userId: decoded.user
//     };
//   }
//   return false;
// }
//
// /**
//  * @desc Sets token for the user if it exists in local storage.
//  * @param store
//  * @param accessToken
//  */
// function setAuthorizationToken(store, accessToken) {
//   axios.defaults.baseURL = api.BASE_URL;
//   if(!isLoggedIn()) {
//     return;
//   }
//   const token = accessToken ? accessToken : localStorage.getItem('accessToken');
//
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
//   }
//   if (store) {
//     const user = _getUserFromToken(token);
//     if (user) {
//       if (store) {
//         store.dispatch({
//           type: authTypes.SET_LOGIN_STATE, isLoggedIn: true,
//           payload: user
//         });
//       }
//     } else {
//       // delete axios.defaults.headers.common['Authorization'];
//       // store.dispatch({type: authTypes.SET_LOGIN_STATE, loggedIn: false});
//     }
//   }
// }

/*
* Search API Calls
*/
export function getSearchResult(key) {
  return axios({
    method: "get",
    url: api.getSearchResults,
    params: {
      index: 'tournament',
      q: key,
    }
  });
}


export default {
  getSearchResult,
};
