import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../store/authContext'


// write a ternary for authentication nav


const Header = () => {

    const authCtx = useContext(AuthContext)
    return (
        <header>
            <div>
                <img className='logo' src="https://media.istockphoto.com/id/165761516/vector/ski-rescue-vector-silhouette.jpg?s=612x612&w=0&k=20&c=hSHfeWAl4M-thwIQ566pL5RVQPmfQl-xr2XK5VI6Pzk=" />
            </div>
            <div className='snowy-travels'>
                <h1>Snowy Travels</h1>
            </div>

            <div>
                <nav>
                    {authCtx.token ? (



                        <ul className='main-nav'>

                            <li >
                                <NavLink className='home-btn' to=" " >
                                    Home
                                </NavLink>
                            </li>

                            <li >
                                <NavLink className='travel-btn' to='/userresort' >
                                    Travel List
                                </NavLink>
                            </li>

                            <li>
                                <button className='logout-btn' onClick={() => authCtx.logout()}>Logout</button>
                            </li>

                        </ul>
                    ) : (
                        <ul className='main-nav'>

                            <li >
                                <NavLink className='home-btn' to=' ' >
                                    Home
                                </NavLink>
                            </li>

                            <li
                            >
                                <NavLink className='login-btn' to='/auth' >
                                    Login/Register
                                </NavLink>
                            </li>
                        </ul>


                    )}
                </nav>

            </div>
        </header>
    );
};

export default Header;