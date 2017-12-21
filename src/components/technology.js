import React,{ Component }from 'react';
import {connect} from 'react-redux';
import {ROOT_URL} from '../actions/types';
import {getLocalValue} from './common/language';
class Technology extends Component{
    render(){
        return(
            <section id="about-section technology" className="g-pos-rel g-pt-50">
                <div>
                    <div className="container">
                        <div className="" style={{textAlign:'center'}}>
                            <h2 className="g-font-weight-400 g-font-size-24"> {getLocalValue("key_technology_title")}</h2>
                            <div className="nl-underline g-mb-30">
                                <span className="nl-style"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container g-pt-80">
                        <div className="row align-items-center  justify-content-between g-pb-50">
                            <div className="col-sm-6 col-lg-5  flex-sm-unordered g-mb-30">
                                <p className='g-font-size-18'><i className="fa fa-circle"></i><span className="g-pl-20">{getLocalValue("key_technology1_title")}</span></p>
                                <p className="g-font-size-16 g-pl-30 g-pr-30">{getLocalValue("key_technology1_content")}</p>
                            </div>
                            <div className="col-sm-6 col-lg-4  flex-sm-first g-mb-30">
                                <div className="g-pos-rel text-center">
                                    <img className='img-fluid' src={`${ROOT_URL}public/img/technology1.png`} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{background:'#fff'}}>
                    <div className="container g-pt-80">
                        <div className="row align-items-center  justify-content-between g-pb-50">
                            <div className="col-sm-6 col-lg-5  g-mb-30">
                                <p className='g-font-size-18'><i className="fa fa-circle"></i><span className="g-pl-20">{getLocalValue("key_technology2_title")}</span></p>
                                <p className="g-font-size-16 g-pl-30 g-pr-30">{getLocalValue("key_technology2_content")}</p>
                            </div>
                            <div className="col-sm-6 col-lg-4 g-mb-30">
                                <div className="g-pos-rel text-center">
                                    <img className='img-fluid' src={`${ROOT_URL}public/img/technology2.png`} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container g-pt-80">
                        <div className="row align-items-center  justify-content-between g-pb-50">
                            <div className="col-sm-6 col-lg-5  flex-sm-unordered g-mb-30">
                                <p className='g-font-size-18'><i className="fa fa-circle"></i><span className="g-pl-20">{getLocalValue("key_technology3_title")}</span></p>
                                <p className="g-font-size-16 g-pl-30 g-pr-30">{getLocalValue("key_technology3_content")}</p>
                            </div>
                            <div className="col-sm-6 col-lg-4 offset-lg-1 flex-sm-first g-mb-30">
                                <div className="g-pos-rel text-center">
                                    <img className='img-fluid' src={`${ROOT_URL}public/img/technology3.png`} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{background:'#fff'}}>
                    <div className="container g-pt-80">
                        <div className="row align-items-center  justify-content-between g-pb-50">
                            <div className="col-sm-6 col-lg-5  g-mb-30">
                                <p className='g-font-size-18'><i className="fa fa-circle"></i><span className="g-pl-20">{getLocalValue("key_technology4_title")}</span></p>
                                <p className="g-font-size-16 g-pl-30 g-pr-30">{getLocalValue("key_technology4_content")}</p>
                            </div>
                            <div className="col-sm-6 col-lg-4 g-mb-30">
                                <div className="g-pos-rel text-center">
                                    <img className='img-fluid' src={`${ROOT_URL}public/img/technology5.png`} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default  Technology;