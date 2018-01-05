import React,{ Component }from 'react';
import {ROOT_URL} from '../actions/types';
import {getLocalValue} from './common/language';
class DigitalCurrency extends Component{
    renderlist(item,index){
        return (
            <div className="col-lg-3 text-center g-pt-50 g-pb-20 g-px-20  g-mb-50 g-mb-0--lg  safety-border" key={index}>
                <div className="text-center">
                            <span className="d-inline-block  u-icon-size--xl rounded-circle g-mb-50">
                              <img src={item.src}alt=""/>
                            </span>
                    <p className="mb-0 text-left g-font-size-12">{item.p}</p>
                </div>
            </div>
        )
    }
    render(){
        const listinfo = [
            {src:`${ROOT_URL}public/img/涂层.png`,p:`${getLocalValue("digital_currency1_content")}`},
            {src:`${ROOT_URL}public/img/人脉.png`,p:`${getLocalValue("digital_currency2_content")}`},
            {src:`${ROOT_URL}public/img/店铺.png`,p:`${getLocalValue("digital_currency3_content")}`},
        ]
        return(
            <section id="advantage" className="g-py-50 g-pb-100">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24">{getLocalValue("digital_currency")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                    <p className="mb-0 g-line-height-1_3 g-mb-60 g-font-size-14"></p>
                </div>
                <div className="container">
                    <div className="row no-gutters  safety-display">
                        {listinfo.map(this.renderlist)}
                    </div>
                </div>
            </section>
        )
    }
}
export default  DigitalCurrency;