import React, {useEffect, useRef, useState} from "react";
import "../styles.scss";

const Main = () => {
    const pass = useRef(null);
    const [err , setErr] = useState('');

    useEffect(()=> {
        localStorage.removeItem('isAuth')
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        if(pass.current.value === '1234'){
            window.location = "/dashboard";
            localStorage.setItem('isAuth' , true);
        }
        else {
            setErr('Please Enter correct Password!');
        }
    };

    const changeHandler = () => {
        console.log(pass.current.value);
    };

    return(
        <form onSubmit={submitHandler} className="form">
            {err && <div className="alert">{err}</div>}
            <label htmlFor="pass" className="form--label">Password: </label>
            <input type="password" className="form--input" id="pass" ref={pass} onChange={changeHandler}/>
            <button type="submit" className="btn">Login</button>
        </form>
    );
};

export default Main;