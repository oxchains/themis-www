import React,{ Component } from 'react';
import Technology from './technology';
import  Banner from './banner';
import Application from './application';
import Partner from './partner';
import  Advantage from './advantage'
import Ourteams from "./ourteams";
import Circuit from './circuit'
import Consultant from './consultant'


class Home extends Component{
    render(){
        return(
            <section id="about-section" className="g-bg-secondary g-pos-rel">
                <Banner/>
                <Technology/>
                <Application/>
                <Partner/>
                <Advantage/>
                <Circuit/>
                <Ourteams/>
                <Consultant/>
            </section>
        )
    }
}
export default  Home;