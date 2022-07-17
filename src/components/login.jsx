import { Fragment } from "react";
import {Link} from "react-router-dom"


function Login (){

    return (
        <Fragment>
            <form>
                <h3>Welcome Back!</h3>
                <label htmlFor="Username">Username</label>
                <input 
                    type="text"
                    placeholder="Enter your Username" 
                />
                <label htmlFor="Password">Password</label>
                <input 
                    type="password"
                    placeholder="********"
                 />
               <input type="button" value="Login" />
            </form>

            <div>
                <div>Don't have an account?
                    <Link to={'/signup'} >Signup </Link>
                </div>
            </div>
        </Fragment>
    )
};

export default Login;