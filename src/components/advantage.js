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
            {src:`${ROOT_URL}public/img/advantage1.png`,title:"世界顶级科学家团队",p:"团队成员均来自牛津大学、耶鲁大学和北京大学，依托深圳市和信中欧金融科技研究院，联合世界顶级科学家在公平交换、智能合约形式化验证等方面的尖端学术研究和工程能力，保证了Themis项目的理论性和创新性达到国际领先水平。"},
            {src:`${ROOT_URL}public/img/advantage2.png`,title:"密码学和区块链深厚技术积累",p:"团队成员学术背景和研究方向均聚焦在密码学、网络与信息安全和区块链领域，在高效密码学工程实现、隐私保护、匿名声誉评价、高速区块链、智能合约应用等方面工程经验丰富，保证了Themis项目的顺利开发。"},
            {src:`${ROOT_URL}public/img/advantage3.jpg`,title:"支付领域多年实践",p:"区块链数字货币支付的理念和模式酝酿已久，团队成员在支付行业有多年工作经历和丰富的经验，在第三方支付和支付卡方面拥有扎实的技术基础和商业基础，保证了Themis项目落地实施。" },
        ]
        return(
            <section id="advantage" className="g-py-50 g-pb-100">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24">THEMIS的优势</h2>
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