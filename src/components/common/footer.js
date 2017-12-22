import React,{ Component }from 'react';
import {Link} from 'react-router-dom';
import {ROOT_URL} from '../../actions/types';
import {getLocalValue} from './language'
class Footer extends Component{
    render(){
        return(

            <div className="shortcode-html nl-footer">

                <footer className="g-bg-black-opacity-0_9 g-color-white-opacity-0_8 text-center g-pt-40 g-pb-20">

                    <div className="container">
                        <a className="d-block g-width-200 g-opacity-0_5 mx-auto g-mb-20" href="index.html">
                            <img className="img-fluid" src={`${ROOT_URL}public/img/nl_logo.png`} alt="Logo"/>
                        </a>
                        <div className="g-width-70x--md mx-auto">
                            <p className="mb-0">From de-centralized digital currency to de-centralized digital commerce.</p>
                        </div>
                    </div>


                    <hr className="footer-line g-my-20"/>


                    <div className="container">
                        <div className="row">

                            <div className="col-sm-12 col-lg g-mb-0--lg">
                                <h2 className="h6 g-color-white text-uppercase g-font-weight-600 g-mb-20 ">
                                    <img className="img-fluid g-width-120 g-height-120  " src={`${ROOT_URL}public/img/wechat.jpeg`} alt=""/>
                                </h2>
                                <ul className="list-unstyled mb-0">
                                    <li className="g-mb-8">
                                        <a className="g-color-white-opacity-0_8" href="#"><i className="fa fa-wechat fa-2x"></i></a>
                                    </li>
                                    <li>
                                    {getLocalValue("footer_title1")}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className="footer-line g-my-20"/>
                    <div className="container">
                        <small className="g-font-size-default">
                            <Link className="g-color-white" to={`/law${getLocalValue("law_to_lang")}`}>{getLocalValue("footer_title2")}</Link></small>
                    </div>
                </footer>
            </div>
        )
    }
}
export default  Footer;
