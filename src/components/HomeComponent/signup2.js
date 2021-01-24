import React, {Component} from 'react';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'



export const Signup2 = () => {
    return(
            <div>
            <div class="att">
            
            <div class="row">
      
              <div class="col-sm-2"></div>
              <div class="col-sm-5">
                <div class="im">
                  <img src="assets/images/Group 3449@3x.png" height="300px" width="450px" alt=""/>
                </div>
                <h2>Payments made</h2>
                <h1 class="vvq"><b>Fast. Easy. Secure.</b></h1>
                <p class="trv">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                  ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                  ea rebum. Stet clita kasd gubergren, no se</p>
                <button class="kl">Sign Up today!</button>
              </div>
              <div class="col-sm-5">
                <div class="la">
                  <label class="ytyt"> Retrieve your Travel Booking!</label>
                  <p class="low">Like your travel claim automatically requested if <br></br> there is a disruption?  <Tippy placement={'bottom-start'} theme={'light'}  content={
                    <div>
                         <h4>Flight:</h4>
                         <p>Air passengers in England and Wales have<br></br>up tp six years from the date of the flight to<br></br>make a flight compensation claim</p>
                         <h4>Rail:</h4>
                         <p>With majority of train companies,claims can<br></br> be made up to 28 days after your journey<br></br>Some may allow longer</p>
                    </div>
                  }>
                    <img src="assets/images/Group 3458@3x.png" height="12px" width="13px" alt=""/></Tippy></p>
                  <input class="dd" type="text" placeholder="Banking Reference Number"/>
                  <input class="dd" type="text" placeholder="Sur Name"/>
                  <p class="tre">Mode of travel</p>
                  <img class="eeet" src="assets/images/Group 3469@3x.png" height="14px" width="14px" alt=""/>
                  <div class="laaa">
                    <img src="assets/images/Group 3468@3x.png" height="35px" width="30px" alt=""/>
                    <p class="tre1">Airplane</p>
                  </div>
      
      
                  <div class="laaa2">
      
                    <img src="assets/images/Group 3465@3x.png" height="35px" width="25px" alt=""/>
                    <p class="tre1">Rail</p>
                  </div>
                  <div class="jo">
                    <button class="onn">Retrieve Booking</button>
                  </div>
                  <img class="up" src="assets/images/Group 3491@3x.png" height="10px" width="10px" alt=""/>
                  <img class="ggg" src="assets/images/Component 37 – 1@3x.png" height="50px" width="50px" alt=""/>
      
                </div>
              </div>
            </div>
          </div>
      
            </div>
    )
}

export default Signup2;