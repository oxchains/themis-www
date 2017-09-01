import React,{ Component }from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="nl-footer g-bg-gray-dark-v1 g-color-white-opacity-0_8 g-py-20">
                <div className="container">
                     <div className="row">
                            <div className="col-md-8 text-center text-md-left g-mb-10 g-mb-0--md">
                            <div >
                                <div  className="navbar-brand footer-brand"><img className='nl_logo' src="./public/img/nl_logo.png" alt=""/>THEMIS</div>
                        <div  className="footer-copyright des d-block g-font-size-default g-mr-10 g-mb-10 g-mb-0--md">From de-centralized digital currency to de-centralized digital </div>
                        <small className="footer-copyright d-block g-font-size-default g-mr-10 g-mb-10 g-mb-0--md">2017 © All Rights Reserved.京ICP备16063652号</small>
                 </div>
             </div>

                <div className="col-md-4 align-self-center">
                        <ul className="list-inline text-center text-md-right mb-0">
                        <li className="list-inline-item g-mx-10" data-toggle="tooltip"  title="wechat">
                            {/*<a href="#" className="g-color-white-opacity-0_5 g-color-white--hover">*/}
                                {/*<i className="fa fa-wechat fa-lg" ></i>*/}
                            {/*</a>*/}
                            <div className="g-width-85 g-height-85 g-mb-10">
                                <img className="img-fluid" src="public/img/wechat.jpeg" alt=""/>
                            </div>
                        </li>
                    {/*<li className="list-inline-item g-mx-10" data-toggle="tooltip"  title="qq">*/}
                        {/*<a href="#" className="g-color-white-opacity-0_5 g-color-white--hover"><i className="fa fa-qq fa-lg"></i></a>*/}
                    {/*</li>*/}
            </ul>
                <ul className="list-inline text-center text-md-right mb-0">
                    <li className="list-inline-item g-mx-10">
                    <a href="#" className="clause">法律条款和声明</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </footer>

    )
    }
}
export default  Footer;




