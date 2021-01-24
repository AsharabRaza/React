import React, {Component} from 'react';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import {Signup2} from './signup2'                       
import {Ipurvey} from './ipurvey'
import {Video} from './video'
import {GetStarted} from './GetStarted'
import {DelayedFlights} from './DelayedFlights'
import {RegisteredBanks} from './RegisteredBanks'
import {TrustedBy} from './TrustedBy'
import {GetRegistered} from './GetRegistered'


export const Index = () => {
    return(
            <div>
               <Signup2 />
               <Ipurvey />
               <Video />
               <GetStarted />
               <DelayedFlights />
               <RegisteredBanks />
               <TrustedBy />
               <GetRegistered />
            </div>
    )
}

export default Index;