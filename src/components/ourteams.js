/**
 * Created by oxchain on 2017/8/31.
 */
import React,{ Component }from 'react';
class Ourteams extends Component{
    constructor(props) {
        super(props);
        this.renderrow = this.renderrow.bind(this);
     }
 renderrow(src,index){
     return (
         <div className="col-6 col-lg-3 g-px-25 g-mb-50" key={index}>
         <div className="text-center" >
             <img className="u-shadow-v29 g-width-110 g-height-110 rounded-circle mb-5" src={src.src} alt="Image Description"/>
             <h4 className="h5 g-font-weight-600 mb-1">{src.name}</h4>
             <span className="d-block text-left ">{src.info}</span>
         </div>
         </div>
     )
 }
    render(){
        const imgLinks = [
            {src: '../public/img/tangcong.png', name: '唐聪',info:"北京大学理学博士，纽约大学访问学者。原北信源（300352）产品总监，区块链和分布式账本技术专家，网络和信息安全领域专家。有丰富的区块链架构设计与系统开发落地经验。主持研发覆盖供应链金融、保险、产品追溯和医疗健康等多个行业的区块链产品和应用。负责Themis区块链生态设计和安全隐私保障。"},
            {src: '../public/img/menghongwei.jpg', name: '孟宏伟',info:"北京大学理学博士，高级工程师。长期从事大型信息系统顶层设计，拥有国家重大专项系统研制和管理经验。未来互联网体系结构专家、密码学和区块链专家，对区块链架构、共识算法、智能合约有深刻理解。负责Themis区块链总体架构和网络协议设计。"},
            {src: '../public/img/chenbangdao.png', name: '陈邦道',info:"牛津大学计算机系硕士、博士、博士后，深圳和信中欧金融科技研究院常务副院长，原中国科学院深圳先进技术研究院副研究员。被评为2017年首届粤港澳大湾区区块链创新人物。擅长网络安全、支付安全和通讯安全等研发。2014年1月在英国创立牛津大学第一家信息安全公司，任职CTO。负责Themis数字货币创新安全支付设计与开发。"},
            {src: '../public/img/zhaohui.jpg', name: '晁辉',info:"支付系统专家，原雪球网高级总监，曾在阿里巴巴支付宝担任资深架构师，资深互联网技术和产品技术管理专家，拥有十五年大型金融和互联网系统研发和管理经验。负责Themis区块链支付协议开发。"},
            {src: '../public/img/huchengjian.png', name: '胡成建',info:"北京大学工学硕士。开发了基于改进BFT共识机制的高速私有区块链（北航链），是国内最早的区块链参与者和开发人员。负责Themis区块链共识算法的实现。"},
            {src: '../public/img/EnnanZhai.png', name: 'Ennan Zhai',info:"耶鲁大学博士、博士后，耶鲁大学副研究员，主要研究方向为声誉系统和大规模分布式系统。负责Themis声誉系统的设计和实现。"},
            {src: '../public/img/guanzhi.png', name: '关志',info:"北京大学理学博士，北京大学副研究员，密码学和安全协议专家，著名国密算法开源项目GmSSL的主要开发者和社区领袖，培养了北大最早的三名区块链方向硕士研究生。负责Themis钱包和相关密码学增强算法的设计和实现。"},
            {src: '../public/img/chenyu.png', name: '陈宇',info:"北京大学理学博士，中国科学院信息工程研究所信息安全国家重点实验室副研究员、硕士生导师，主要研究方向为公钥密码学、可证明安全理论、基本密码组件。负责Themis密码学算法、公平交换协议的设计和实现。"},
            {src: '../public/img/xinwei.jpg', name: '辛伟',info:"北京大学理学博士，中国信息安全测评中心高级工程师。专注安全漏洞检测和密码算法安全性分析，有丰富的区块链自动化漏洞检测经验。负责Themis系统和其智能合约安全漏洞检测。"},
            {src: '../public/img/wangliyan.png', name: '王李琰',info:"深圳市奥联科技有限公司创始人，该公司为国家密码产品定点生产单位，是中国标识密码算法的牵头及发起单位之一。深圳市慧云科技有限公司创始人，该公司是中国为数不多的能生产具备联网和显示输入功能安全智能卡的公司。有丰富的支付行业和政府信息安全行业从业经验。负责Themis的商业合作和落地应用。"},
          ]
        return(
           <div className="ourteam" id="ourteam" name="ourteam">
               <div className="container g-py-100">
                   <div className="navbar-nav text-uppercase g-font-weight-600 ml-auto">
                       <div className="" style={{textAlign:'center'}}>
                           <h2 className="g-font-weight-400 g-font-size-20">THEMIS的团队</h2>
                           <div className="nl-underline g-mb-30">
                               <span className="nl-style"></span>
                           </div>
                       </div>
                   </div>
                   <div className="row g-mx-minus-25 g-mb-40">
                       {imgLinks.map(this.renderrow)}
                   </div>
               </div>
           </div>
        )
    }
}
export default  Ourteams;