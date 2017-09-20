import React,{ Component }from 'react';
import {ROOT_URL} from '../actions/types';

class Banner extends Component{
    constructor(props) {
        super(props);
        this.state = {current: ''};
    }

    componentDidMount() {
        const $ = window.$;
        let revapi1014 = $("#rev_slider_1014_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }

            },
            responsiveLevels: [1240, 1024, 778, 778],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [600, 500, 400, 300],
            lazyType: 'smart',
            scrolleffect: {
                fade: "on",
                grayscale: "on",
                on_slidebg: "on",
                on_parallax_layers: "on",
                direction: "top",
                multiplicator_layers: "1.4",
                tilt: "10",
                disable_on_mobile: "off",
            },
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 400,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: 'off',
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "0px",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });


        RsTypewriterAddOn($, revapi1014);
    }

    render(){
        return(
            <div>
                <div className="g-overflow-hidden banner">
                    <div id="rev_slider_1014_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="typewriter-effect" data-source="gallery" style={{backgroundColor:'transparent',padding:'0px'}}>
                        <div id="rev_slider_1014_1" className="rev_slider fullscreenbanner"  data-version="5.4.1">
                            <ul>
                                <li data-index="rs-2800" data-transition="curtain-1" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={`${ROOT_URL}public/img/banner.jpg`} data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                    <img src={`${ROOT_URL}public/img/banner.jpg`} alt="" data-bgposition="center center" data-bgfit="cover" className="rev-slidebg"/>
                                    <div className="tp-caption tp-shape tp-shapewrapper "
                                         id="slide-2800-layer-7"
                                         data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                         data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
                                         data-width="full"
                                         data-height="full"
                                         data-whitespace="nowrap"

                                         data-type="shape"
                                         data-basealign="slide"
                                         data-responsive_offset="off"
                                         data-responsive="off"
                                         data-frames='[{"from":"opacity:0;","speed":500,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},{"speed":5000,"to":"opacity:0;","ease":"Power4.easeInOut"}]'
                                         data-textAlign="['left','left','left','left']"
                                         data-paddingtop="[0,0,0,0]"
                                         data-paddingright="[0,0,0,0]"
                                         data-paddingbottom="[0,0,0,0]"
                                         data-paddingleft="[0,0,0,0]"

                                         style={{zIndex: 5,backgroundColor:'rgba(0, 0, 0, 0.3)',borderColor:'rgba(0, 0, 0, 0)',borderWidth:'0px'}}></div>


                                    <div className="tp-caption banner-title1  tp-resizeme rs-parallaxlevel-4"
                                         id="slide-2800-layer-1"
                                         data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                         data-y="['middle','middle','middle','middle']" data-voffset="['-120','-120','-120','-120']"
                                         data-lineheight="['37','34','25','30']"
                                         data-width="none"
                                         data-height="none"
                                         data-fontsize="['37','34','34','34']"
                                        // data-fontsize="['30','26','20','30']"
                                         data-whitespace="nowrap"

                                         data-type="text"
                                         data-responsive_offset="on"

                                         data-frames='[{"from":"y:50px;sX:1;sY:1;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                         data-textAlign="['center','center','center','center']"
                                         data-paddingtop="[20,20,20,20]"
                                         data-paddingright="[40,40,40,40]"
                                         data-paddingbottom="[20,20,20,20]"
                                         data-paddingleft="[40,40,40,40]"

                                         style={{zIndex: '6',whiteSpace: 'nowrap',color: 'rgba(255, 255, 255, 1.00)'}}>
                                        <i className="hidden-sm-down g-font-size-20 g-pos-rel g-top-minus-5 mr-2 icon-media-119 u-line-icon-pro"></i>
                                        Themis：数字货币世界去中心化的 <span className="nl-main">"支付宝"</span>
                                        <i className="hidden-sm-down g-font-size-20 g-pos-rel g-top-minus-5 ml-2 icon-media-119 u-line-icon-pro"></i>
                                    </div>
                                    <div className="tp-caption banner-title2  tp-resizeme rs-parallaxlevel-4"
                                         id="slide-2801-layer-2"
                                         data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                         data-y="['middle','middle','middle','middle']" data-voffset="['-70','-70','-70','-70']"
                                         data-lineheight="['40','40','35','40']"
                                         data-width="none"
                                         data-height="none"
                                         data-whitespace="nowrap"
                                         data-fontsize="['24','24','26','24']"
                                         data-type="text"
                                         data-responsive_offset="on"

                                         data-frames='[{"from":"y:50px;sX:1;sY:1;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                         data-textAlign="['center','center','center','center']"
                                         data-paddingtop="[0,0,0,0]"
                                         data-paddingright="[0,0,0,0]"
                                         data-paddingbottom="[0,0,0,0]"
                                         data-paddingleft="[0,0,0,0]"

                                         style={{zIndex: '8',whiteSpace: 'nowrap',fontWeight: '400',color: 'rgba(255, 255, 255, 1.00)',borderWidth:'0px'}}>
                                        从去中心化的数字货币到去中心化的数字商业
                                    </div>

                                    <div className="tp-caption tp-shape tp-shapewrapper  tp-resizeme rs-parallaxlevel-4"
                                         id="slide-2800-layer-3"
                                         data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                         data-y="['middle','middle','middle','middle']" data-voffset="['-20','-20','-20','-20']"
                                         data-width="100"
                                         data-height="2"
                                         data-whitespace="nowrap"


                                         data-type="shape"
                                         data-responsive_offset="on"

                                         data-frames='[{"from":"y:50px;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                         data-textAlign="['left','left','left','left']"
                                         data-paddingtop="[0,0,0,0]"
                                         data-paddingright="[0,0,0,0]"
                                         data-paddingbottom="[0,0,0,0]"
                                         data-paddingleft="[0,0,0,0]"

                                         style={{zIndex: '7',backgroundColor:'#e9b649',borderColor:'#e9b649',borderWidth:'0px'}}></div>
                                    {/*<!-- LAYER NR. 4 -->*/}
                                    <div className="tp-caption   tp-resizeme rs-parallaxlevel-4"
                                         id="slide-2801-layer-2"
                                         data-x="['center','center','center','center']" data-hoffset="['10','10','10','10']"
                                         data-y="['middle','middle','middle','middle']" data-voffset="['20','20','20','20']"
                                        // data-fontsize="['20','18','16','16']"
                                         data-fontsize="['24','24','26','24']"
                                         data-lineheight="['40','40','35','40']"
                                         data-width="none"
                                         data-height="none"
                                         data-whitespace="nowrap"

                                         data-type="text"
                                         data-responsive_offset="on"

                                         data-frames='[{"from":"y:50px;sX:1;sY:1;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                         data-textAlign="['center','center','center','center']"
                                         data-paddingtop="[0,0,0,0]"
                                         data-paddingright="[0,0,0,0]"
                                         data-paddingbottom="[0,0,0,0]"
                                         data-paddingleft="[0,0,0,0]"

                                         style={{zIndex: '8',whiteSpace: 'nowrap',fontWeight: '400',color: '#fbd42e',borderWidth:'0px'}}>
                                        THEMIS是什么？
                                    </div>

                                    <div className="tp-caption banner-titile3  tp-resizeme rs-parallaxlevel-4"
                                         id="slide-2801-layer-2"
                                         data-x="['center','center','center','center']" data-hoffset="['10','10','10','10']"
                                         data-y="['middle','middle','middle','middle']" data-voffset="['100','100','100','100']"
                                         data-lineheight="['25','25','35','25']"
                                         data-width="none"
                                         data-height="none"
                                         data-word-wrap="break-word"
                                         data-fontsize="['14','14','12','12']"
                                         data-type="text"
                                         data-responsive_offset="on"

                                         data-frames='[{"from":"y:50px;sX:1;sY:1;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                         data-textAlign="['center','center','center','center']"
                                         data-paddingtop="[0,0,0,0]"
                                         data-paddingright="[0,0,0,0]"
                                         data-paddingbottom="[0,0,0,0]"
                                         data-paddingleft="[0,0,0,0]"

                                         style={{zIndex: '8',whiteSpace: 'nowrap',fontWeight: '400',color: 'rgba(255, 255, 255, 1.00)',borderWidth:'0px',fontSize:'12px'}}>

                                        Themis是一个基于区块链的公平交换系统，<br/>提供去中心化的数字货币托管服务，
                                        解决以数字货币为媒介的公平交换问题，<br/>可应用于数字货币点对点托管支付、数字货币场外交易兑换等。
                                    </div>



                                    {/*<div className="banner-btn tp-caption rev-btn  tp-resizeme rs-parallaxlevel-4"*/}
                                    {/*id="slide-2800-layer-4"*/}
                                    {/*data-x="['right','right','center','center']" data-hoffset="['630','525','-105','100']"*/}
                                    {/*data-y="['middle','middle','middle','middle']" data-voffset="['240','240','240','240']"*/}
                                    {/*data-width="none"*/}
                                    {/*data-height="none"*/}
                                    {/*data-whitespace="nowrap"*/}
                                    {/*data-lineheight="[40,40,60,60]"*/}
                                    {/*data-type="button"*/}
                                    {/*data-responsive_offset="on"*/}

                                    {/*data-frames='[{"from":"x:-50px;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'*/}
                                    {/*data-textAlign="['left','left','left','left']"*/}
                                    {/*data-paddingtop="[0,0,0,0]"*/}
                                    {/*data-paddingright="[50,50,50,50]"*/}
                                    {/*data-paddingbottom="[0,0,0,0]"*/}
                                    {/*data-paddingleft="[50,50,50,50]"*/}
                                    {/*style={{zIndex: '9', whiteSpace: 'nowrap', fontSize: '15px', borderRadius:'5px',outline:'none',boxShadow:'1px 1px 1px yellow',boxSizing:'border-box',cursor:'pointer'}}> I C O*/}
                                    {/*</div>*/}


                                    <div className="banner-btn  divfontcolor tp-caption rev-btn  tp-resizeme rs-parallaxlevel-4"
                                         href="#portfolio-section" target="_self" id="slide-2800-layer-5"
                                         data-x="['left','left','center','center']"
                                        // data-hoffset="['630','525','105','100']"
                                         data-hoffset="['555','450','0','0']"
                                         data-y="['middle','middle','middle','middle']" data-voffset="['240','240','240','240']"
                                         data-width="none"
                                         data-height="none"
                                         data-whitespace="nowrap"

                                         data-type="button"
                                         data-lineheight="[40,40,60,60]"
                                         data-responsive_offset="on"

                                         data-frames='[{"from":"x:50px;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                         data-textAlign="['left','left','left','left']"
                                         data-paddingtop="[0,0,0,0]"
                                         data-paddingright="[50,50,50,50]"
                                         data-paddingbottom="[0,0,0,0]"
                                         data-paddingleft="[50,50,50,50]"
                                         style={{zIndex: '9', whiteSpace: 'nowrap', fontSize: '15px',borderRadius:'5px',outline:'none',boxSizing:'border-box',cursor:'pointer'}}>
                                        <a className="ahover"  href="javascript:;">白皮书</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default  Banner;