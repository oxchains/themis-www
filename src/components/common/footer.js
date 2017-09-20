import React,{ Component }from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{
    render(){
        return(

            <div className="shortcode-html nl-footer">

                <footer className="g-bg-black-opacity-0_9 g-color-white-opacity-0_8 text-center g-pt-40 g-pb-20">

                    <div className="container">
                        <a className="d-block g-width-200 g-opacity-0_5 mx-auto g-mb-20" href="index.html">
                            <img className="img-fluid" src="public/img/nl_logo.png" alt="Logo"/>
                        </a>

                        {/*<ul className="list-inline g-mb-20">*/}
                        {/*<li className="list-inline-item g-mx-5">*/}
                        {/*<a className="u-icon-v2 u-icon-size--sm g-font-size-16 g-color-white-opacity-0_8 g-color-white--hover g-bg-primary--hover g-brd-white-opacity-0_2 g-brd-primary--hover rounded-circle" href="#">*/}
                        {/*<i className="fa fa-twitter"></i>*/}
                        {/*</a>*/}
                        {/*</li>*/}
                        {/*<li className="list-inline-item g-mx-5">*/}
                        {/*<a className="u-icon-v2 u-icon-size--sm g-font-size-16 g-color-white-opacity-0_8 g-color-white--hover g-bg-primary--hover g-brd-white-opacity-0_2 g-brd-primary--hover rounded-circle" href="#">*/}
                        {/*<i className="fa fa-pinterest-p"></i>*/}
                        {/*</a>*/}
                        {/*</li>*/}
                        {/*<li className="list-inline-item g-mx-5">*/}
                        {/*<a className="u-icon-v2 u-icon-size--sm g-font-size-16 g-color-white-opacity-0_8 g-color-white--hover g-bg-primary--hover g-brd-white-opacity-0_2 g-brd-primary--hover rounded-circle" href="#">*/}
                        {/*<i className="fa fa-facebook"></i>*/}
                        {/*</a>*/}
                        {/*</li>*/}
                        {/*<li className="list-inline-item g-mx-5">*/}
                        {/*<a className="u-icon-v2 u-icon-size--sm g-font-size-16 g-color-white-opacity-0_8 g-color-white--hover g-bg-primary--hover g-brd-white-opacity-0_2 g-brd-primary--hover rounded-circle" href="#">*/}
                        {/*<i className="fa fa-linkedin"></i>*/}
                        {/*</a>*/}
                        {/*</li>*/}
                        {/*</ul>*/}

                        <div className="g-width-70x--md mx-auto">
                            <p className="mb-0">From de-centralized digital currency to de-centralized digital commerce.</p>
                        </div>
                    </div>


                    <hr className="footer-line g-my-20"/>


                    <div className="container">
                        <div className="row">

                            <div className="col-sm-12 col-lg g-mb-0--lg">
                                <h2 className="h6 g-color-white text-uppercase g-font-weight-600 g-mb-20 ">
                                    <img className="img-fluid g-width-120 g-height-120  " src="public/img/wechat.jpeg" alt=""/>
                                </h2>
                                <ul className="list-unstyled mb-0">
                                    <li className="g-mb-8">
                                        <a className="g-color-white-opacity-0_8" href="#"><i className="fa fa-wechat fa-2x"></i></a>
                                    </li>
                                    <li>
                                        添加群秘，加入官方微信群
                                    </li>
                                </ul>
                            </div>



                            {/*<div className="col-sm-6 col-lg g-mb-30 g-mb-0--lg">*/}
                            {/*<h2 className="h6 g-color-white text-uppercase g-font-weight-600 g-mb-20">Customer Support</h2>*/}
                            {/*<ul className="list-unstyled mb-0">*/}
                            {/*<li className="g-mb-8">*/}
                            {/*<a className="g-color-white-opacity-0_8" href="#">Vivamus egestas sapien</a>*/}
                            {/*</li>*/}
                            {/*<li className="g-mb-8">*/}
                            {/*<a className="g-color-white-opacity-0_8" href="#">Sed convallis nec enim</a>*/}
                            {/*</li>*/}
                            {/*<li className="g-mb-8">*/}
                            {/*<a className="g-color-white-opacity-0_8" href="#">Pellentesque a tristique risus</a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*<a className="g-color-white-opacity-0_8" href="#">Nunc vitae libero lacus</a>*/}
                            {/*</li>*/}
                            {/*</ul>*/}
                            {/*</div>*/}



                            {/*<div className="col-sm-6 col-lg">*/}
                            {/*<h2 className="h6 g-color-white text-uppercase g-font-weight-600 g-mb-20">Top Link</h2>*/}
                            {/*<ul className="list-unstyled mb-0">*/}
                            {/*<li className="g-mb-8">*/}
                            {/*<a className="g-color-white-opacity-0_8" href="#">Pellentesque a tristique risus</a>*/}
                            {/*</li>*/}
                            {/*<li className="g-mb-8">*/}
                            {/*<a className="g-color-white-opacity-0_8" href="#">Nunc vitae libero lacus</a>*/}
                            {/*</li>*/}
                            {/*<li className="g-mb-8">*/}
                            {/*<a className="g-color-white-opacity-0_8" href="#">Praesent pulvinar gravida</a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*<a className="g-color-white-opacity-0_8" href="#">Integer commodo est</a>*/}
                            {/*</li>*/}
                            {/*</ul>*/}
                            {/*</div>*/}



                            {/*<div className="col-sm-6 col-lg">*/}
                            {/*<h2 className="h6 g-color-white text-uppercase g-font-weight-600 g-mb-20">Useful Links</h2>*/}
                            {/*<ul className="list-unstyled mb-0">*/}
                            {/*<li className="g-mb-8">*/}
                            {/*<a className="g-color-white-opacity-0_8" href="#">Praesent pulvinar gravida</a>*/}
                            {/*</li>*/}
                            {/*<li className="g-mb-8">*/}
                            {/*<a className="g-color-white-opacity-0_8" href="#">Integer commodo est</a>*/}
                            {/*</li>*/}
                            {/*<li className="g-mb-8">*/}
                            {/*<a className="g-color-white-opacity-0_8" href="#">Praesent pulvinar gravida</a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*<a className="g-color-white-opacity-0_8" href="#">Integer commodo est</a>*/}
                            {/*</li>*/}
                            {/*</ul>*/}
                            {/*</div>*/}

                        </div>
                    </div>


                    <hr className="footer-line g-my-20"/>
                    <div className="container">
                        <small className="g-font-size-default">
                            <Link className="g-color-white" to="/law">法律条款和声明</Link></small>
                    </div>

                    {/*<div className="container">*/}
                    {/*<small className="copyright">2017 © All Rights Reserved.京ICP备16063652号</small>*/}
                    {/*</div>*/}

                </footer>

            </div>


        )
    }
}
export default  Footer;
