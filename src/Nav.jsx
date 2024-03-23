import React, {useState} from "react";
import {Link} from "react-router-dom";


function Nav()
{
    const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

    return(

        <div className="navbar">
            <div className="leftside" id={openLinks ? "open" : "close"}>
            <h1>DeepFake Detection</h1>
            </div>
            <div className="rightside">
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/login"> Login</Link>
                
            </div>
            
        </div>

    );
    


}

export default Nav;
