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
                info: `${getLocalValue("team_section1_desc")}`
            },
            {
                src: `${ROOT_URL}public/img/JenniferChung.jpg`,
                name: 'Jennifer Chung',
                info: `${getLocalValue("team_section2_desc")}`
            },
            {
                src: `${ROOT_URL}public/img/YuetNingChau.jpg`,
                name: 'Yuet Ning Chau',
                info: `${getLocalValue("team_section3_desc")}`
            },
            {
                src: `${ROOT_URL}public/img/TakuyaKoide.jpg`,
                name: 'Takuya Koide',
                info:`${getLocalValue("team_section4_desc")}`
            },
            {
                src: `${ROOT_URL}public/img/AmiriMarat.jpg`,
                name: 'Amiri Marat',
                info: `${getLocalValue("team_section5_desc")}`
            }
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