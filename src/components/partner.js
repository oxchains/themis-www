import React,{ Component }from 'react';

class Partner extends Component{
    renderlist(item,index){
        return (
            <div className="col-lg-4 g-px-40 g-mb-50 g-mb-0--lg" key={index}>
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
            {href:"https://chieftin.org/",src:"./public/img/partner1.png",p:"该研究院在深圳市罗湖区政府支持下创建，由原牛津大学计算机系主任Bill Roscoe 教授领导，专注于区块链、大数据、人工智能等金融科技领域的技术研发和应用开发，其形式化验证技术在国际上处于领先地位，相关研究项目、方向均属于深圳市政府重点孵化的研究项目及产业化方向。Themis与研究院合作主要解决智能合约的安全性问题， 利用形式化验证技术检查并验证系统中智能合约，特别是托管合约和仲裁合约的正确性。"},
            {href:"https://www.wanchain.org/",src:"./public/img/partner2.png",p:"万维链是为不同区块链网络提供资产跨链转移通道的基础设施，可以与Themis 区块链互联互通，在数字货币借贷、数字货币交易兑换、数字资产投融资等方面发挥各自优势紧密合作，丰富区块链生态。"},
            {href:"http://oraclechain.io/",src:"./public/img/partner3.png",p:"Oracle是仲裁服务中讨论和审阅交易双方提供的材料时所需要的机制。OracleChain在区块链内提供现实世界数据的 Oracle 服务，其生态系统提供一系列的服务和 API，Themis通过调用这些服务和API将现实世界数据引入区块链，来决定仲裁的结果并实现其后的操作。" },
        ]

        return(
            <section id="streamer" className="dzsparallaxer auto-init height-is-based-on-content use-loading g-bg-cover ">
                <div className="divimage dzsparallaxer--target w-100" style={{height: '140%', background: 'url(./public/img/partnerbg.gif) center' }}></div>
                <div className="container g-z-index-1">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="text-center g-z-index-1">
                                <blockquote className="streamer-title g-font-size-24 g-line-height-2  g-pt-60 g-pb-20">  <img className="g-mr-50--lg g-mr-0--sm" src="./public/img/streamer-left.png" alt="" /> 合作伙伴 <img className="g-ml-50--lg g-ml-0--sm" src="./public/img/streamer-right.png" alt=""/>
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
