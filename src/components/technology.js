import React,{ Component }from 'react';
import {connect} from 'react-redux';

class Technology extends Component{
    render(){
        return(
            <section id="about-section technology" className="g-pos-rel g-pt-50">
            <div className="container">
                <div className="" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 g-font-size-20">THEMIS的关键技术</h2>
                    <div className="nl-underline g-mb-30">
                        <span className="nl-style"></span>
                    </div>
                </div>
                <div className="row align-items-center  justify-content-between g-mb-30">
                    <div className="col-sm-6 col-lg-5 offset-lg-1 g-mb-30">
                        <p className='g-font-size-16'><i className="fa fa-circle"></i> 基于群托管的公平交换协议</p>
                        <p className="g-font-size-12">Themis能够保证互不信任的多个主体按照约定的规则完成资产互换：要么双方都获得了对方的商品，或者双方什么都得不到。一是保证乐观公平交换，即TTP只在发生争议时参与；二是创新性地提出群托管支付，解决TTP单点失效和拒绝服务等问题。</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 g-mb-30">
                        <div className="g-pos-rel text-center">
                            <img className='img-fluid' src="./public/img/technology1.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-mb-30">
                    <div className="col-sm-6 col-lg-5 offset-lg-1 flex-sm-unordered g-mb-30">
                        <p className="g-font-size-16" ><i className="fa fa-circle"></i> 基于可验证洗牌和关联环签名的匿名声誉机制</p>
                        <p className="g-font-size-12">Themis基于可验证洗牌和关联环签名技术，实现了区块链节点的匿名声誉计算。一是完成匿名声誉计算，隐藏了节点的身份和投票之间的关系；二是同时实现了奖励和惩罚机制，突破了利用密码学机制扣取作恶用户资金的难题。
                        </p>
                    </div>
                    <div className="col-sm-6 col-lg-4 offset-lg-1 flex-sm-first g-mb-30">
                        <div className="g-pos-rel text-center">
                            <img className='img-fluid' src="./public/img/technology2.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between g-mb-30">
                    <div className="col-sm-6 col-lg-5 offset-lg-1 g-mb-30">
                        <p className="g-font-size-16" ><i className="fa fa-circle"></i> 非交互式零知识证明</p>
                        <p className="g-font-size-12">Themis利用非交互式零知识证明解决隐私问题，一是在群托管服务协议中，保证交易双方提供给托管节点的密钥份额是真实的；二是在可验证洗牌协议中，验证者用来检查洗牌服务器是否正确地执行了它的随机操作；三是在声誉系统中用来生成匿名声誉预算的零知识证明。
                        </p>
                    </div>

                    <div className="col-sm-6 col-lg-4 g-mb-30">
                        <div className="g-pos-rel text-center">
                            <img className='img-fluid' src="./public/img/technology3.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between g-mb-30">
                    <div className="col-sm-6 col-lg-5 offset-lg-1 flex-sm-unordered g-mb-30">
                        <p className="g-font-size-16" ><i className="fa fa-circle"></i> 支持高并发验签的数字签名算法</p>
                        <p className="g-font-size-12">Themis引入全新的支持高并发验签的数字签名算法。支持基于哈希的一次性签名算法、具有特殊性质的椭圆曲线及验签算法等多种可选的数字签名方案，在算法实现上特别针对GPU和CPU的向量指令集进行优化，实现在典型计算平台上接近2个数量级的验签性能提升。</p>
                    </div>

                    <div className="col-sm-6 col-lg-4 offset-lg-1 flex-sm-first g-mb-30">
                        <div className="g-pos-rel text-center">
                            <img className='img-fluid' src="./public/img/technology5.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}
export default  Technology;






