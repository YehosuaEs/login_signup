import { Fragment } from "react";
import {Link} from "react-router-dom"


function Signup (){

    return (
        <Fragment>
            <form>
                <h3>Please Fill out form to Register!</h3>
                <label htmlFor="full name">Full name:</label>
                <input 
                    type="text"
                    placeholder="" 
                />
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    placeholder="" 
                />
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    placeholder="" 
                />
                <label htmlFor="Password">Password:</label>
                <input 
                    type="password"
                    placeholder="" 
                />
                <label htmlFor="confirm password">Confirm Password:</label>
                <input 
                    type="password" 
                    placeholder="" 
                />
                <input type="button" value="Register" />
            </form>

            <div>
                <div>Yes I have an account? Login
                    <Link to={'/'}>Login </Link>
                </div>
            </div>
        </Fragment>
    )
};

export default Signup;