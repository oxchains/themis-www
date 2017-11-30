import React,{ Component }from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {ROOT_URL} from '../../actions/types';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const $ = window.$;
        // initialization of header
        $.HSCore.components.HSHeader.init($('#js-header'));
        $.HSCore.helpers.HSHamburgers.init('.hamburger');
    }

    render(){
        return(
            <div id="js-header" className="u-header u-header--static u-header--show-hide u-header--change-appearance"
                 data-header-fix-moment="500"
                 data-header-fix-effect="slide">
                <div
                    data-header-fix-moment-exclude="g-bg-white g-py-15"
                    data-header-fix-moment-classes="g-bg-white-opacity-0_8 u-shadow-v18 g-py-5">
                    <nav className="navbar navbar-toggleable-md">
                        <div className="container">
                            <button className="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-right-0" type="button"
                                    aria-label="Toggle navigation"
                                    aria-expanded="false"
                                    aria-controls="navBar"
                                    data-toggle="collapse"
                                    data-target="#navBar"
                            >
                              <span className="hamburger hamburger--slider">
                                <span className="hamburger-box">
                                  <span className="hamburger-inner"></span>
                                </span>
                              </span>
                            </button>

                            <Link to="/" className="navbar-brand nl-navbar-brand"><img className='nl_logo' src={`${ROOT_URL}public/img/nl_logo.png`} alt=""/>THEMIS</Link>
                            <div className="collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--lg g-mr-40--sm" id="navBar">
                                <ul id="js-scroll-nav" className="navbar-nav text-uppercase g-font-weight-600 ml-auto">
                                    <li className='nav-item g-mx-25--lg'>
                                        <Link to="/" className='nav-link nl-nav-link g-px-0'>
                                            首页
                                        </Link>
                                    </li>
                                    {/*<li className='nav-item g-mx-25--lg'>*/}
                                    {/*<Link  to="/ico" className='nav-link nl-nav-link g-px-0' >*/}
                                    {/*ICO*/}
                                    {/*</Link>*/}
                                    {/*</li>*/}

                                    <li className='nav-item g-mx-25--lg'>
                                        <a href="#ourteam" className='nav-link nl-nav-link g-px-0' >
                                            团队
                                        </a>
                                    </li>
                                    <li className="nav-item g-mx-25--lg">
                                        <a href="https://github.com/themisnetwork" target="_blank" className="nav-link nl-nav-link g-px-0">
                                            <i className="fa fa-github fa-lg github" aria-hidden="true"></i> GitHub
                                        </a>
                                    </li>

                                    <li className="nav-item g-ml-25--lg g-mr-0--lg">
                                        <a href="javascript:;" target="_blank" className="nav-link nl-nav-link g-px-0 btn btn-md u-btn-primary nav-download"  style={{marginTop: '-3px'}}>
                                            白皮书
                                        </a>
                                    </li>
                                    <li className='nav-item g-mx-25--lg'>
                                        <a href="https://themis.network/" className='nav-link nl-nav-link g-px-0' >
                                            英文版
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        )

    }
}
export default Header;