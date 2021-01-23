import React, {Component} from 'react';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div>
            <nav class="navbar navbar-default">
            <div class="container-fluid">
        
              <div class="tol1">
                <div class="tol">
        
                  <ul class="nav navbar-nav">
                    <li><img src="assets/images/iPurvery Logo PNG@3x.png" height="65px" width="90px" alt=""/></li>
        
                    <li><a href="#" class="ome">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About Us</a></li>
                    <li class="side"><a href="#">My Account</a></li>
                    <li><button class="tton">Sign Up</button></li>
        
                  </ul>
                </div>
              </div>
            </div>
          </nav>
            
            </div>
         );
    }
}
 
export default Header;