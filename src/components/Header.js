import React, {Component} from 'react';





export const Header = () => {
  return(
          <div>
          <div class="topnav">
               
          <a href="#"><img src="assets/images/iPurvery Logo PNG@3x.png" height="65px" width="90px" alt=""/></a>
          <div class="m24">
          <a class="active" href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          </div>
          
        </div> 
        <div class="side">
             <a class="awm" href="#">My Account</a>
             <button class="tton">Sign Up</button>
          </div>
              
          </div>
  )
}
export default Header;


// class Header extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 

//           <div>
          
            //  <div class="topnav">
               
            //    <a href="#"><img src="assets/images/iPurvery Logo PNG@3x.png" height="65px" width="90px" alt=""/></a>
            //    <div class="m24">
            //    <a class="active" href="#">Home</a>
            //    <a href="#">Services</a>
            //    <a href="#">Pricing</a>
            //    <a href="#">Contact Us</a>
            //    <a href="#">About Us</a>
            //    <a href="#">Contact Us</a>
            //    </div>
               
            //  </div> 
            //  <div class="side">
            //       <a class="awm" href="#">My Account</a>
            //       <button class="tton">Sign Up</button>
            //    </div>
            
//           </div>
//          );
//     }
// }
 
// export default Header;