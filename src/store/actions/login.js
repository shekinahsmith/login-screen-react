import * as actionTypes from "./actionTypes";
import axios from "../../axios-login";

export const checkExistingUser = bool => {
  return {
    type: actionTypes.CHECK_EXISTING_USER,
    isExistingUser: bool
  };
};

export const setExistingUser = (email, company) => {
  return {
    type: actionTypes.SET_EXISTING_USER,
    existingUserData: {
      email: email,
      companyId: company
    },
    signInSuccess: true
  };
};

export const userNotfound = () => {
  return {
    type: actionTypes.USER_NOT_FOUND,
    userNotFound: true
  };
};

export const signInUser = (email, password, history) => {
  return dispatch => {
    axios
      .get("/users.json")
      .then(res => {
        const existingUsers = [];

        for (let key in res.data) {
          existingUsers.push({
            userId: key,
            userInfo: res.data[key]
          });
        }

        existingUsers.filter(user => {
          if (
            email === user.userInfo.email &&
            password === user.userInfo.password
          ) {
            dispatch(
              setExistingUser(user.userInfo.email, user.userInfo.companyID)
            );

            history.push("/login-confirmation");
            return true;
          } else {
            dispatch(userNotfound());
          }

          return false;
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const setNewUser = bool => {
  return {
    type: actionTypes.SET_NEW_USER,
    isExistingUser: true,
    signUpSuccess: true,
    userNotFound: false,
  };
};

export const signUpUser = newUserData => {
  return dispatch => {
    axios
      .post("/users.json", newUserData)
      .then(res => {
        dispatch(setNewUser(true));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
