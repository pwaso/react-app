import React from "react";
import classes from "./CustomerPage.module.css"
import { CustomerSidebarData } from "./CustomerSidebarData";
function CustomerPage(){
    return <div className={classes.fullpage}>
        
    <div className={classes.sidebar}>
        <ul className={classes.sidebarList}>
        {CustomerSidebarData.map((val,key)=>{
        return(
            <li 
            key={key} 
            className={classes.row}
            onClick={()=>{window.location.pathname=val.link;
            }}>
            
            <div className={classes.icon}>{val.icon}</div>
                <div className={classes.title}>
                    {val.title}
                </div>
            </li>
        );
    })}
    </ul>
    </div>
    </div>
    
    
}
export default CustomerPage



/*
<video autoPlay loop muted plays-inline className={classes.backvideo}>
            <source src="https://player.vimeo.com/external/394890205.hd.mp4?s=dfdb3fa5b796f533b996346f0e6779c9b3010686&profile_id=174&oauth2_token_id=57447761"></source>
        </video>
*/ 