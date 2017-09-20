import React,{ Component }from 'react';
import {connect} from 'react-redux';

class Circuit extends Component{

    renderrow(src,index){
        return (
            <li className="col-md-12 g-mb-50" key={index}>
                <div className="row">
                    <div className="col-md-3 text-md-right g-pt-20--md g-pr-40--md g-mb-20">
                        <h5 className="h6 g-font-weight-700 mb-10">{src.time}</h5>
                    </div>
                    <div className="col-md-9 g-orientation-left g-pl-40--md">
                        <article className="g-pos-rel g-bg-gray-light-v5 g-pa-30">
                            <div className="hidden-md-up u-triangle-inclusive-v1--top g-left-20 g-z-index-2">
                                <div className="u-triangle-inclusive-v1--top__back g-brd-gray-light-v5-bottom"></div>
                            </div>
                            <p className="lead g-mb-25">{src.info}</p>
                        </article>
                    </div>
                </div>
            </li>
        )
    }

    render(){
        const Links = [
            {time: '2016.12',info:"提出Themis概念，进行市场调研和商业创意，开展去中心化公平交换协议设计"},
            {time: '2017.08',info:"发布Themis白皮书，Themis网站上线，开始进入ico阶段"},
            {time: '2017.12',info:"完成Themis区块链设计，完成基于群托管协议和匿名声誉机制开发"},
            {time: '2018.06',info:"Themis 1.0上线，完成Themis钱包1.0开发，支持场外数字货币交易兑换和点对点托管支付"},
            {time: '2018.12',info:"Themis 2.0上线，提升Themis性能，支持高并发验签的数字签名，完成Themis钱包2.0开发"},
        ]
        return(
            <section id="circuit" className="g-py-50">
                <div className="container text-center g-max-width-75 " style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24 g-color-white">THEMIS的线路图</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                    <p className="mb-0 g-line-height-1_3 g-mb-100 hidden-sm-down g-font-size-14"></p>
                    <div className="circuit-img hidden-sm-down"></div>
                </div>
                <div className="col-lg-12 hidden-md-up">
                    <p className=" g-mb-50"></p>
                    <ul className="row u-timeline-v2-wrap list-unstyled">
                        {Links.map(this.renderrow)}
                    </ul>
                </div>
            </section>
        )
    }
}
export default  Circuit;