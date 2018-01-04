import React,{ Component }from 'react';
import {ROOT_URL} from '../actions/types';
import {getLocalValue} from './common/language';
class Mission extends Component{

    render(){

        return(
            <section id="mission" className="g-py-50 g-pb-100">
                <div className="container text-center g-pt-60 " style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24 g-color-white ">{getLocalValue("mission_title1")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                    <div className="text-center g-mb-50 ">
                        <span className=" g-line-height-1_3 g-mb-100 g-py-7 g-px-30 g-font-size-16 g-color-white num-money">{getLocalValue("mission_title2")}</span>

                    </div>
                </div>
                <div className="container px-0">
                    <div className="row no-gutters">
                        <div className="col-sm-6 col-lg-6 text-center">
                            <div>
                                <div className="g-mt-30">
                                    <img src={`${ROOT_URL}public/img/圆角矩形 570.png`} className="g-mb-30" alt=""/>

                                </div>
                                <p className="g-font-size-16 g-color-white g-mt-50">{getLocalValue("mission_section1_content")}</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 text-center" >
                            <div>
                                <div className="g-mt-30">
                                    <img src={`${ROOT_URL}public/img/椭圆 5891.png`} style={{width:"80px"}} className="g-mb-30" alt=""/>

                                </div>
                                <p className="g-font-size-16 g-color-white g-mt-30">{getLocalValue("mission_section2_content")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default  Mission;