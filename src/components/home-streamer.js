import React,{ Component }from 'react';
import {connect} from 'react-redux';

class Streamer extends Component{
    render(){
        return(

            <section id="streamer" className="dzsparallaxer auto-init height-is-based-on-content use-loading g-bg-cover ">
                <div className="divimage dzsparallaxer--target w-100" style={{height: '140%', background: 'url(./public/img/streamer.jpg) no-repeat center' }}></div>
                <div className="container g-z-index-1">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="text-center g-z-index-1 text-uppercase">
                                <blockquote className="streamer-title g-font-size-26 g-line-height-2  g-pt-60 ">  <img src="./public/img/streamer-left.png" alt="" /> 合作伙伴 <img src="./public/img/streamer-right.png" alt=""/>
                                </blockquote>
                                <div className="streamer" >
                                    <img src="./public/img/streamer4.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default  Streamer;
