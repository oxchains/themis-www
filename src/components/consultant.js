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
            {src:`${ROOT_URL}public/img/bill.png`,name:"Bill Roscoe",info:"牛津大学教授，原牛津大学数学部研究委员会主席（1998-2000），原牛津大学计算机系主任（2003-2014），英国皇家工程院院士，欧洲科学院院士，牛津大学信息安全委员会主席，计算机科学委员会主席。世界著名计算机科学家，牛津大学元老级（任职超过40年）科学家。"},
            {src:`${ROOT_URL}public/img/chenzhong.png`,name:"陈钟",info:"北京大学教授，原北京大学软件与微电子学院院长（2002-2010），北京大学金融信息化研究中心主任，北京大学网络与信息安全实验室主任。中国计算机学会常务理事、信息保密专委副主任、网络与数据通信专委委员。"},
            {src:`${ROOT_URL}public/img/lvxujun.jpg`,name:"吕旭军",info:"区块链资深创业者及技术专家，万维链创始人。先后获得北京大学、俄亥俄州立大学多个学位，早年在中国、美国、欧洲均有丰富的商业经历。2012年进入区块链领域，2014年联合创立著名区块链项目Factom，被《经济学人》杂志以封面报道“信任的机器”引入公众的视野。2016年创立区块链商业应用企业网录科技，致力于推动区块链技术的更大范围应用。"}
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