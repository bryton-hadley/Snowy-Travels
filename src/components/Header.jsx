import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../store/authContext'


// write a ternary for authentication nav


const Header = () => {

    const authCtx = useContext(AuthContext)
    return (
        <header>
            <div>
                <img src="https://media.istockphoto.com/id/165761516/vector/ski-rescue-vector-silhouette.jpg?s=612x612&w=0&k=20&c=hSHfeWAl4M-thwIQ566pL5RVQPmfQl-xr2XK5VI6Pzk=" />
            </div>
            <div>
                <h2>Snowy Travels</h2>
            </div>

            <div>
                <nav>
                    {authCtx.token ? (
                        <div>

                            <NavLink to=" ">
                                Home
                            </NavLink>

                            <NavLink to='/userresort'>
                                Travel List
                            </NavLink>

                            <button onClick={() => authCtx.logout()}>Logout</button>
                        </div>
                    ) : (
                        <div>
                            <NavLink to=' '>
                                Home
                            </NavLink>

                            <NavLink to='/auth'>
                                Login or Register
                            </NavLink>
                        </div>
                    )}
                </nav>

            </div>
        </header>
    );
};

export default Header;