import {Link} from "react-router-dom"
import classes from "./WebsiteNavigation.module.css"

function WebsiteNavigation(){
    return(
        <div>
            <header className={classes.header}>    
                <div className={classes.logo}>UPA Bank</div>         
                <nav>                  
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/about-us">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="/contact-with-us">CONTACT</Link>
                        </li>
                        <li>
                            <Link to="/login-page">LOGIN</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default WebsiteNavigation;






