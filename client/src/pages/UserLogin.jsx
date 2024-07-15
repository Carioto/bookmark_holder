import "./UserLogin.css";
import { useState } from "react";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Home from "./Home";
import Auth from "../utils/auth";

const UserLogin = () => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      
      if (!data) {
        setErrorMessage("Login unsucessful");
        return;
      }
      
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);

    }

    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <div>
          {window.location.assign("/")}
        </div>
      ) : (
        <div>
          <p>Login</p>
          <form
            className={`form`}
            onSubmit={handleFormSubmit}
          >
            <input
              value={formState.username}
              placeholder="Username"
              name="username"
              type="username"
              onChange={handleChange}
              className={`form-control`}
            />
            <input
              value={formState.password}
              placeholder="********"
              name="password"
              type="password"
              onChange={handleChange}
              className={`form-control`}
            />
            <button className={`btn btn-warning`} type="submit">
              Login
            </button>

            {error && (
              <div>
                <p >{error.message}</p>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default UserLogin;