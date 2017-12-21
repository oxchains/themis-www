/**
 * Created by oxchain on 2017/8/31.
 */
import React,{ Component }from 'react';
import {ROOT_URL} from '../actions/types';
import {getLocalValue} from './common/language';
class Ourteams extends Component {
    constructor(props) {
        super(props);
        this.renderrow = this.renderrow.bind(this);
    }
    componentDidMount() {
        const $ = window.$;
        // initialization of HSScrollNav
        $.HSCore.components.HSScrollNav.init($('#js-scroll-nav'), {
            duration: 700,
            easing: 'easeOutExpo'
        });
    }

    renderrow(src, index) {
        return (
            <div className="col-6 col-lg-3 g-px-25 g-mb-50" key={index}>
                <div className="text-center">
                    <img className="u-shadow-v29 g-width-110  rounded-circle mb-5" style={{height: '110px'}}
                         src={src.src} alt="Image Description"/>
                    <h4 className="h5 g-font-weight-600 mb-1">{src.name}</h4>
                    <span className="d-block text-left ">{src.info}</span>
                </div>
            </div>
        )
    }

    render() {
        const imgLinks = [
            // {
            //     src: `${ROOT_URL}public/img/tangcong.png`,
            //     name: '唐聪',
            //     info: "北京大学理学博士，纽约大学访问学者。原北信源（300352）产品总监，区块链和分布式账本技术专家，网络和信息安全领域专家。有丰富的区块链架构设计与系统开发落地经验。主持研发覆盖供应链金融、保险、产品追溯和医疗健康等多个行业的区块链产品和应用。负责Themis区块链生态设计和安全隐私保障。"
            // },
            // {
            //     src: `${ROOT_URL}public/img/menghongwei.jpg`,
            //     name: '孟宏伟',
            //     info: "北京大学理学博士，高级工程师。长期从事大型信息系统顶层设计，拥有国家重大专项系统研制和管理经验。未来互联网体系结构专家、密码学和区块链专家，对区块链架构、共识算法、智能合约有深刻理解。负责Themis区块链总体架构和网络协议设计。"
            // },
            // {
            //     src: `${ROOT_URL}public/img/chenbangdao.png`,
            //     name: '陈邦道',
            //     info: "牛津大学计算机系硕士、博士、博士后，深圳和信中欧金融科技研究院常务副院长，原中国科学院深圳先进技术研究院副研究员。被评为2017年首届粤港澳大湾区区块链创新人物。擅长网络安全、支付安全和通讯安全等研发。2014年1月在英国创立牛津大学第一家信息安全公司，任职CTO。负责Themis数字货币创新安全支付设计与开发。"
            // },
            {
                src: `${ROOT_URL}public/img/Danish.jpg`,
                name: 'Danish A.Alvi',
                info: "负责Themis产品与架构总体设计,Danish是UCL伦敦大学区块链技术中心(CBT)的开发人员，他用ERC223协议为Overled项目ICO编写智能代币。他推广了使用 Hadoop和 Weka的在线大数据检索和存储服务，并协助开发环境的虚拟机自动配置，前端服务境的虚拟机自动配置，前端服务CKAN / Drupal集成和数据审计。他曾在信息科技服务公司 Atos做过前沿的研究项目。并且在 UCLU TechSoc中发挥协调团队的作用，并致力于推广使用面部认证系统，以增强使用面部认证系统，以增强简化大学进出安全性的方式。"
            },
            {
                src: `${ROOT_URL}public/img/JenniferChung.jpg`,
                name: 'Jennifer Chung',
                info: "负责Themis商务拓展与战略规划,Jennifer是Agility Sciences Limited的首席市场官以及中英区块链协会的联合创始人。她拥有伦敦商学院的商科学位，并在毕业后致力于分布式技术带来的潜在的行业革命。她曾在波士顿咨询公司，私募和风险投资基金方面有过工作经验。 "
            },
            {
                src: `${ROOT_URL}public/img/YuetNingChau.jpg`,
                name: 'Yuet Ning Chau',
                info: "负责Themis财务分析,Yuet是英国普华永道银行及资本市场团队中的一员，他在传统金融服务方面拥有坚固的知识和丰富的经验，他曾参与了项目的尽职调查和并购工作。但Yuet真正的热情在于颠覆性金融技术，他的激情始于在一家金融科技风险投资公司的工作，他深入研究并向市政府提议了中国二三线省市“特色小镇”的开发以及电子城市技术在基础设施上的潜在应用。Yuet还深入参与了加密货币的研究和并为多个项目的ICO提供咨询。作为中英区块链协会（CUKBA）联合创始人之一，他与英国领先的金融科技企业家有密切联系。Yuet毕业于伦敦政治经济学院，获得商科硕士学位。"
            },
            {
                src: `${ROOT_URL}public/img/TakuyaKoide.jpg`,
                name: 'Takuya Koide',
                info:"Takuya毕业于英国伦敦大学皇家霍洛威学院，目前在Unicoin担任增长黑客，在市场营销，工程研发，数据分析领域均具有丰富的经验。掌握SEM推广，内容营销，程序测试，数学建模等多种技能，并参与过多个区块链项目的研发实施与运营推广，是一名在区块链以及金融创新领域的复合型人才。"
            },
            {
                src: `${ROOT_URL}public/img/AmiriMarat.jpg`,
                name: 'Amiri Marat',
                info: "负责Themis社区建设与算法研究,Amiri 毕业于英国伦敦大学皇家霍洛威学院，在区块链技术和金融科技领域拥有多年实际操作经验，他深入了解加密空间和区块链知识，活跃于多个开源社区，专注于公钥密码学和共识算法的研究与实现，同时在市场调查和商业案例开发方面有丰富经验。他有优秀的沟通能力，掌握三种语言（俄语，英语和哈萨克语），并正在学习汉语。"
            },
            // {
            //     src: `${ROOT_URL}public/img/wangliyan.png`,
            //     name: '王李琰',
            //     info: "深圳市奥联科技有限公司创始人，该公司为国家密码产品定点生产单位，是中国标识密码算法的牵头及发起单位之一。深圳市慧云科技有限公司创始人，该公司是中国为数不多的能生产具备联网和显示输入功能安全智能卡的公司。有丰富的支付行业和政府信息安全行业从业经验。负责Themis的商业合作和落地应用。"
            // },
        ]
        return (
            <div className="ourteam" id="ourteam" name="ourteam">
                <div className="container g-py-100">
                    <div className="navbar-nav text-uppercase g-font-weight-600 ml-auto">
                        <div className="" style={{textAlign: 'center'}}>
                            <h2 className="g-font-weight-400 g-font-size-24">THEMIS的团队</h2>
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