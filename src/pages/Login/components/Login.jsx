import React from "react";

const Login = () => {

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return(<form onSubmit={submitHandler}>
        <label htmlFor="pass">Password: </label>
        <input type="password" id="pass"/>
        <button type="submit">Login</button>
    </form>);
};

export default Login;