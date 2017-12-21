import React,{ Component }from 'react';
import {ROOT_URL} from '../actions/types';
import {getLocalValue} from './common/language';
class Advantage extends Component{
    renderlist(item,index){
        return (
            <div className="col-lg-4 g-px-40 g-mb-50 g-mb-0--lg" key={index}>
                <div className="text-center">
                            <span className="d-inline-block  u-icon-size--xl rounded-circle g-mb-30">
                              <img src={item.src} alt=""/>
                            </span>
                    <h3 className="h5 g-color-gray-dark-v2 g-font-weight-600 g-font-size-16 text-uppercase mb-3">{item.title}</h3>
                    <p className="mb-0 text-left g-font-size-12">{item.p}</p>
                </div>
            </div>
        )
    }
    render(){
        const listinfo = [
            {src:`${ROOT_URL}public/img/advantage1.png`,title:`${getLocalValue("themis_advantage1_title")}`,p:`${getLocalValue("themis_advantage1_content")}`},
            {src:`${ROOT_URL}public/img/advantage2.png`,title:`${getLocalValue("themis_advantage2_title")}`,p:`${getLocalValue("themis_advantage2_content")}`},
            {src:`${ROOT_URL}public/img/advantage3.jpg`,title:`${getLocalValue("themis_advantage3_title")}`,p:`${getLocalValue("themis_advantage3_content")}`},
        ]
        return(
            <section id="advantage" className="g-py-50 g-pb-100">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24">{getLocalValue("themis_advantage_title")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                    <p className="mb-0 g-line-height-1_3 g-mb-60 g-font-size-14"></p>
                </div>
                <div className="container">
                    <div className="row no-gutters">
                        {listinfo.map(this.renderlist)}
                    </div>
                </div>
            </section>
        )
    }
}
export default  Advantage;