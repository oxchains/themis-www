/**
 * Created by oxchain on 2017/9/1.
 */
import React,{ Component }from 'react';
import {ROOT_URL} from '../actions/types';
class Consultant extends Component{
    renderrow(item,index){
        return (
            <div className="col-lg-4 g-px-40 g-mb-50 g-mb-0--lg" key={index}>
                <div className="text-center">
                            <span className="d-inline-block  u-icon-size--xl rounded-circle g-mb-30">
                              <img className="imgborder g-width-110" style={{height:"115px"}} src={item.src} alt=""/>
                            </span>
                    <h3 className="h5 g-color-gray-dark-v2 g-font-weight-600 g-font-size-16 text-uppercase mb-3">{item.name}</h3>
                    <p className="mb-0 text-left g-font-size-12">{item.info}</p>
                </div>
            </div>
        )
    }
    render(){
        const consultantlist = [
            {src:`${ROOT_URL}public/img/bill.png`,name:"Bill Roscoe",info:"牛津大学教授，Bill教授是原牛津大学数学部研究委员会主席，原牛津大学计算机系主任。英国皇家工程院院士，欧洲科学院院士，牛津大学信息安全委员会主席，计算机科学委员会主席。世界著名计算机科学家，牛津大学元老级（任职超过40年）科学家。"},
            {src:`${ROOT_URL}public/img/DonaldLawrence.jpg`,name:"Donald Lawrence",info:"伦敦大学学院客座教授，战略咨询公司创世纪公司合伙人，伦敦大学学院教授，区块链技术中心项目负责，金融计算研究中心项目负责，阿兰图灵大数据研究中心项目负责，曾在花旗集团、美国银行和美国运通等均担任过总经理以上级别职位，在UCL期间，负责对接与央行，投行，对冲基金，清算中心和科技企业的项目研究和开发等。"},
            {src:`${ROOT_URL}public/img/DanieleBernardi.jpg`,name:"Daniele Bernardi",info:"Diaman SCF的创办人兼首席执行官，投资者杂志（INVESTORS’ Magazine Italia）主席。致力于开发高回报的投资战略，是一位不断寻求创新的企业家。他的研究面向数学模型的开发，简化了投资者和家族企业的决策过程，以减少风险。"},
            {src:`${ROOT_URL}public/img/RobertFerguson.jpg`,name:"Robert Ferguson",info:"贝恩公司顾问/Bee-One销售总监 Robert Ferguson是Bee-One在英国的销售总监，他在零售和消费品销售方面拥有丰富的经验。 他是贝恩公司的顾问，他负责推动分类管理、商业优势、采购战略和制造网络优化等项目的分析和决策者管理。Robert拥有丰富的项目管理经验，其中包括设计和领导研讨会以推动决策,的制定。他还具有开发新一代数字化转型经验。通过印度，香港和中国的项目，他致力于寻找新兴市场的机遇与挑战。"},
            {src:`${ROOT_URL}public/img/chenzhong.png`,name:"陈钟",info:"陈教授是原北京大学软件与微电子学院院长，北京大学金融信息化研究中心主任，北京大学网络与信息安全实验室主任。CCF常务理事，CCF信息保密专委副主任，CCF网络与数据通信专委委员。"},
            {src: `${ROOT_URL}public/img/tangcong.png`, name: '唐聪', info: "唐博士是原北信源（300352）产品总监，区块链和分布式账本技术专家，网络和信息安全领域专家。他有丰富的区块链架构设计与系统开发落地经验。主持研发覆盖供应链金融、保险、产品追溯和医疗健康等多个行业的区块链产品和应用。"},
            {src: `${ROOT_URL}public/img/menghongwei.jpg`, name: '孟宏伟', info: "孟博士长期从事大型信息系统顶层设计，拥有国家重大专项系统研制和管理经验。他是未来互联网体系结构专家、密码学和区块链专家，对区块链架构、共识算法、智能合约有深刻理解。"},
            {src: `${ROOT_URL}public/img/chenbangdao.png`, name: '陈邦道', info: "陈博士被评为2017年首届粤港澳大湾区区块链创新人物。擅长网络安全、支付安全和通讯安全等研发。2014年1月在英国创立牛津大学第一家信息安全公司，任职CTO。"},
            {src: `${ROOT_URL}public/img/wangliyan.png`, name: '王李琰', info: "深圳市奥联科技有限公司创始人，王李琰创立了深圳市奥联科技有限公司，该公司为国家密码产品定点生产单位，是中国标识密码算法的牵头及发起单位之一；同时也是深圳市慧云科技有限公司创始人，该公司是中国为数不多的能生产具备联网和显示输入功能安全智能卡的公司。有丰富的支付行业和政府信息安全行业从业经验。"},
            {src: `${ROOT_URL}public/img/lvxujun.jpg`, name: '吕旭军', info: "网录科技创始人，吕旭军是区块链资深创业者及技术专家，万维链创始人。先后获得北京大学、俄亥俄州立大学多个学位，早年在中国、美国、欧洲均有丰富的商业经历。2012年进入区块链领域，2014年联合创立著名区块链项目Factom，被《经济学人》杂志以封面报道“信任的机器”引入公众的视野。2016年创立区块链商业应用企业网录科技，致力于推动区块链技术的更大范围应用。"},

        ]
        return(
            <section className="g-py-50 g-pb-100">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24">THEMIS的顾问团队</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                </div>
                <div className="container">
                    <div className="row no-gutters">
                        {consultantlist.map(this.renderrow)}
                    </div>
                </div>
            </section>
        )
    }
}
export default  Consultant;