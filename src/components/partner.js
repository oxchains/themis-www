import React,{ Component }from 'react';
import {ROOT_URL} from '../actions/types';
import {getLocalValue} from './common/language';
class Partner extends Component{
    componentDidMount() {
        const $ = window.$;
        $('.dzsparallaxer---window-height').each(function(){
            var _t = $(this);
            //return false;

            $(window).on('resize',handle_resize);
            handle_resize();

            function handle_resize(){
                var wh = window.innerHeight;

                _t.height(wh);
            }
        })
        dzsprx_init('.dzsparallaxer.auto-init', {init_each: true});
    }
    renderlist(item,index){
        return (
            <div className="col-lg-6 g-px-40 g-mb-50 g-mb-0--lg" key={index}>
                <div className="text-center">
                            <span className="d-inline-block  u-icon-size--xl rounded-circle g-mb-30">
                                <a href={item.href} target="_blank">
                                     <img className="img-fluid" src={item.src} alt=""/>
                                </a>
                            </span>
                    <p className="mb-0 text-left g-font-size-14">{item.p}</p>
                </div>
            </div>
        )
    }
    render(){
        const listinfo = [
            {href:"https://chieftin.org/",src:`${ROOT_URL}/public/img/partner1.png`,p:`${getLocalValue("cooperative_partner1_content")}`},
            // {href:"https://www.wanchain.org/",src:`${ROOT_URL}/public/img/partner2.png`,p:`${getLocalValue("cooperative_partner2_content")}`},
            {href:"http://oraclechain.io/",src:`${ROOT_URL}/public/img/partner3.png`,p:`${getLocalValue("cooperative_partner3_content")}`},
        ]
        return(
            <section id="streamer" className="dzsparallaxer auto-init height-is-based-on-content use-loading g-bg-cover ">
                <div className="divimage dzsparallaxer--target w-100" style={{height: '140%', background: `url(${ROOT_URL}public/img/partnerbg.gif) center` }}></div>
                <div className="container g-z-index-1">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="text-center g-z-index-1">
                                <blockquote className="streamer-title g-font-size-24 g-line-height-2  g-pt-60 g-pb-20">  <img className="g-mr-50--lg g-mr-0--sm" src="./public/img/streamer-left.png" alt="" /> {getLocalValue("cooperative_partner")} <img className="g-ml-50--lg g-ml-0--sm" src="./public/img/streamer-right.png" alt=""/>
                                </blockquote>
                                <div className="container g-pb-60 ">
                                    <div className="row no-gutters">
                                        {listinfo.map(this.renderlist)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default  Partner;