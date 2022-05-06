import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function LoginForm({ warning }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoSubmit = (e) => {
    return dispatch(sessionActions.login({ credential: 'Hiro_Protagonist', password: 'password'})).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  }

  const signUp = (e) => {
    history.push(`/signup`)
  }

  return (
    <>
      <div className='title'>Log In</div>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <>
              <li key={idx}>{error}</li>
            </>
          ))}
          {warning && <li>{warning}</li>}
        </ul>
        <label>
          Username or Email
        </label>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        <label>
          Password
        </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div id='loginButtonDiv'>
            <button type="submit">Log In</button>
            <button onClick={()=> demoSubmit()}>Demo User</button>
          </div>
      </form>
    </>
  );
}

export default LoginForm;
