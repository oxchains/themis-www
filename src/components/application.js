import React,{ Component }from 'react';
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
            {src:"./public/img/application2.gif",title:"数字货币交易兑换",p1:"Themis支持实现数字货币的场外交易，能够为比特币、以太币以及其它基于区块链的密码学数字货币提供安全托管服务，满足不同数字货币间交易兑换需求，为数字货币跨链交易提供公平交换保障；"},
            {src:"./public/img/application3.gif",title:"监管账户安全托管",p1:"Themis能够为数字货币资金监管账户提供去中心化的托管服务，可实现对数字货币私募基金监管账户、数字货币借贷监管账户、数字货币交易所账户等进行安全托管，保障资金合规与安全。"},
            {src:"./public/img/application4.gif",title:"多主体交易资产托管",p1:"针对交易主体多、交易环节长、交易依赖性强的应用场景，Themis将多主体交易中需要托管的资金，诸如订金、首款、佣金、尾款等以数字货币的形式托管在原有链上，建立基于多主体职责和权益触发条件指令的智能合约，并利用仲裁机制达成公平交换。" },
        ]
        return(
            <section id="application" className="g-pt-50">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-20">THEMIS的应用场景</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                    <p className="mb-0 g-line-height-1_3 g-mb-100 g-font-size-14">Themis构建的以数字货币为媒介的公平交换系统，采用链上资产托管促成公平交换机制，能有效解决数字货币交易兑换、电商平台托管支付、监管账户安全托管、多主体交易数字资产托管等应用场景问题，为数字世界中的公平交换提供了全新的解决方案。</p>
                </div>
                <div className="container px-0">
                    <div className="row no-gutters">
                        <div className="col-sm-6 col-lg-3 application-item">
                            <article className="u-block-hover">
                                <figure className="g-overflow-hidden">
                                    <img className="img-fluid u-block-hover__main--zoom-v1" src="./public/img/application1.gif" alt=""/>
                                </figure>
                                <div className=" g-pa-30">
                                    <h3 className="text-uppercase g-font-weight-700 g-font-size-14 text-center" >点对点托管支付</h3>
                                    <div className="nl-underline-sm g-mb-15">
                                        <span className="nl-style-sm"></span>
                                    </div>
                                    <p className="g-font-size-default g-font-size-12 mb-0 text-left"><i className="fa fa-circle nl-fa"></i> Themis能够为点对点网上市场（例如OpenBazaar）,提供去中心化数字货币托管支付，实现买卖双方的远程交易和付款；</p>
                                    <p className="g-font-size-default g-font-size-12 mb-0 text-left"><i className="fa fa-circle nl-fa"></i> Themis连接电商平台数字货币支付系统，实现平台和系统中的数字货币交易行为进行去中心化托管。</p>
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