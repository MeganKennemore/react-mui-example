import { filterUsersByUsername } from "../api/UsersApi";
import { setLoggedIn, setLoggedInUser } from "../features/app/AppSlice";
import history from "history/browser";

export const loginAttempted = async (username: string, password: string) => {
  /* const filteredUsers = filterUsersByUsername(username);
  if (filteredUsers.length === 0 || filteredUsers.length > 1) {
    return false;
  } else if (filteredUsers[0].username === username && filteredUsers[0].password === password) {
    store.dispatch(setLoggedInUser(filteredUsers[0]));
    store.dispatch(setLoggedIn());
    history.push("/home");
    return true;
  } else {
    return false;
  } */
  /* return filterUsersByUsername(username).then((result) => {
    if ()
  }) */
};

