import React,{ Component }from 'react';
import {ROOT_URL} from '../actions/types';
import {getLocalValue} from './common/language';
class Application extends Component{
    renderrow(item,index){
        return (
            <div className="col-sm-6 col-lg-3 application-item" key={index}>
                <article className="u-block-hover">
                    <figure className="g-overflow-hidden">
                        <img className="img-fluid u-block-hover__main--zoom-v1" src={item.src} alt=""/>
                    </figure>
                    <div className=" g-pa-30">
                        <h3 className="text-uppercase g-font-weight-700 g-font-size-14 text-center">{item.title}</h3>
                        <div className="nl-underline-sm g-mb-15">
                            <span className="nl-style-sm"></span>
                        </div>
                        <p className="g-font-size-default g-font-size-12 mb-0 text-left"><i className="fa fa-circle nl-fa"></i> {item.p1}</p>
                    </div>
                </article>
            </div>
        )
    }
    render(){
        const listinfo = [
            {src:`${ROOT_URL}public/img/application2.gif`,title:`${getLocalValue("application_section2_title")}`,p1:`${getLocalValue("application_section2_content")}`},
            {src:`${ROOT_URL}public/img/application3.gif`,title:`${getLocalValue("application_section3_title")}`,p1:`${getLocalValue("application_section3_content")}`},
            {src:`${ROOT_URL}public/img/application4.gif`,title:`${getLocalValue("application_section4_title")}`,p1:`${getLocalValue("application_section4_content")}` },
        ]
        return(
            <section id="application" className="g-pt-50">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24 g-color-white">{getLocalValue("application_title1")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                    <p className="mb-0 g-line-height-1_3 g-mb-100 g-font-size-14 g-color-white">{getLocalValue("application_title2")}</p>
                </div>
                <div className="container px-0">
                    <div className="row no-gutters">
                        <div className="col-sm-6 col-lg-3 application-item">
                            <article className="u-block-hover">
                                <figure className="g-overflow-hidden">
                                    <img className="img-fluid u-block-hover__main--zoom-v1" src={`${ROOT_URL}public/img/application1.gif`} alt=""/>
                                </figure>
                                <div className=" g-pa-30">
                                    <h3 className="text-uppercase g-font-weight-700 g-font-size-14 text-center" >{getLocalValue("application_section1_title")}</h3>
                                    <div className="nl-underline-sm g-mb-15">
                                        <span className="nl-style-sm"></span>
                                    </div>
                                    <p className="g-font-size-default g-font-size-12 mb-0 text-left"><i className="fa fa-circle nl-fa"></i> {getLocalValue("application_section1_content1")}</p>
                                    <p className="g-font-size-default g-font-size-12 mb-0 text-left"><i className="fa fa-circle nl-fa"></i> {getLocalValue("application_section1_content2")}</p>
                                </div>
                            </article>
                        </div>
                        {listinfo.map(this.renderrow)}
                    </div>
                </div>
            </section>
        )
    }
}
export default  Application;