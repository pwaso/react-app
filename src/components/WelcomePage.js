import classes from "./WelcomePage.module.css"
function WelcomePage(){
    return(
        
            <div className={classes.welcomepage}>   
                <video autoPlay loop muted plays-inline className={classes.backvideo}>
                    <source src="https://player.vimeo.com/external/397957885.sd.mp4?s=7feaad55750c324e45412c707b482675cd858e97&profile_id=164&oauth2_token_id=57447761"/>
                </video>
                <div className={classes.heading}>
                    <div><h1>Welcome To UPA Bank</h1></div>
                    <div className={classes.h2}><h2>One Step Close To Us</h2></div>
                    <hr/>
                    <h6>This is a online banking website. You can connect with us by register on our site 
                        or if you already registered then click on login.<br/> You can create your bank 
                        account and feel free for the transaction process. Do you want to try?...Please 
                        register yourself.
                    </h6>
                </div>    
            </div>
        
    )

}
export default WelcomePage;






