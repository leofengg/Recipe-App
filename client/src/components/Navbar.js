import {Link, Navigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'


require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

export const Navbar = () => {
    
    const [cookies, setCookies] = useCookies(['access_token'])

    const logout = () => {
        setCookies("access_token", "")
        window.localStorage.removeItem("userID");
        Navigate("/auth");
    }

    return <div className='navbar'>
        <Link to="/"> Home</Link>
        <Link to="/create-recipe"> Create Recipe</Link>
        <Link to="/save-recipe"> Save Recipe</Link>
        {!cookies.access_token ? (<Link to="/auth"> Login/Register</Link>) : <button onClick={logout}>Logout</button>}
    </div>
}