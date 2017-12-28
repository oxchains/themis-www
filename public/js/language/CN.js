const CN = {


    //header部分
    nav_home: "首页",
    nav_team: "团队",
    nav_language: "EN",
    nav_Whitepaper: "白皮书",
    change_to_lang: "/?lang=EN",
    nav_whitepaper_url: "https://themis.network/public/Themis_whitepaper_CN_v1.pdf",
    nav_github_url: "https://github.com/themisnetwork",
    law_to_lang: "?lang=CN",

    // banner 部分
    about_title: "Themis：数字货币世界去中心化的 ",
    about_title2: "支付宝",
    about_know: "从去中心化的数字货币到去中心化的数字商业",
    about_what:"THEMIS是什么？",
    about_answer1:"Themis是一个基于区块链的公平交换系统，",
    about_answer2:"提供去中心化的数字货币托管服务，",
    about_answer3:"解决以数字货币为媒介的公平交换问题，",
    about_answer4:"可应用于数字货币点对点托管支付、数字货币场外交易兑换等。",

    // 关键技术
    key_technology_title:"THEMIS的关键技术",
    key_technology1_title: "基于群托管的公平交换协议",
    key_technology1_content: "Themis能够保证互不信任的多个主体按照约定的规则完成资产互换：要么双方都获得了对方的商品，或者双方什么都得不到。一是保证乐观公平交换，即TTP只在发生争议时参与；二是创新性地提出群托管支付，解决TTP单点失效和拒绝服务等问题。",
    key_technology2_title: "基于可验证洗牌和关联环签名的匿名声誉机制",
    key_technology2_content: "Themis基于可验证洗牌和关联环签名技术，实现了区块链节点的匿名声誉计算。一是完成匿名声誉计算，隐藏了节点的身份和投票之间的关系；二是同时实现了奖励和惩罚机制，突破了利用密码学机制扣取作恶用户资金的难题。",
    key_technology3_title: "非交互式零知识证明",
    key_technology3_content: "Themis利用非交互式零知识证明解决隐私问题，一是在群托管服务协议中，保证交易双方提供给托管节点的密钥份额是真实的；二是在可验证洗牌协议中，验证者用来检查洗牌服务器是否正确地执行了它的随机操作；三是在声誉系统中生成匿名声誉预算的零知识证明。",
    key_technology4_title: "支持高并发验签的数字签名算法",
    key_technology4_content: "Themis引入全新的支持高并发验签的数字签名算法。支持基于哈希的一次性签名算法、具有特殊性质的椭圆曲线及验签算法等多种可选的数字签名方案，在算法实现上特别针对GPU和CPU的向量指令集进行优化，实现在典型计算平台上接近2个数量级的验签性能提升。",

    //应用场景
    application_title1: "THEMIS的应用场景",
    application_title2:"Themis构建的以数字货币为媒介的公平交换系统，采用链上资产托管促成公平交换机制，能有效解决数字货币交易兑换、电商平台托管支付、监管账户安全托管、多主体交易数字资产托管等应用场景问题，为数字世界中的公平交换提供了全新的解决方案。",
    application_section1_title: "点对点托管支付",
    application_section1_content1: "Themis能够为点对点网上市场（例如OpenBazaar）,提供去中心化数字货币托管支付，实现买卖双方的远程交易和付款；",
    application_section1_content2:"Themis连接电商平台数字货币支付系统，实现平台和系统中的数字货币交易行为进行去中心化托管。",
    application_section2_title: "数字货币交易兑换",
    application_section2_content: "Themis支持实现数字货币的场外交易，能够为比特币、以太币以及其它基于区块链的密码学数字货币提供安全托管服务，满足不同数字货币间交易兑换需求，为数字货币跨链交易提供公平交换保障；",
    application_section3_title: "监管账户安全托管",
    application_section3_content: "Themis能够为数字货币资金监管账户提供去中心化的托管服务，可实现对数字货币私募基金监管账户、数字货币借贷监管账户、数字货币交易所账户等进行安全托管，保障资金合规与安全。",
    application_section4_title: "多主体交易资产托管",
    application_section4_content: "针对交易主体多、交易环节长、交易依赖性强的应用场景，Themis将多主体交易中需要托管的资金，诸如订金、首款、佣金、尾款等以数字货币的形式托管在原有链上，建立基于多主体职责和权益触发条件指令的智能合约，并利用仲裁机制达成公平交换。",

    //合作伙伴
    cooperative_partner:"合作伙伴",
    cooperative_partner1_content:"该研究院在深圳市罗湖区政府支持下创建，由原牛津大学计算机系主任Bill Roscoe 教授领导，专注于区块链、大数据、人工智能等金融科技领域的技术研发和应用开发，其形式化验证技术在国际上处于领先地位，相关研究项目、方向均属于深圳市政府重点孵化的研究项目及产业化方向。Themis与研究院合作主要解决智能合约的安全性问题， 利用形式化验证技术检查并验证系统中智能合约，特别是托管合约和仲裁合约的正确性。",
    cooperative_partner2_content:"万维链是为不同区块链网络提供资产跨链转移通道的基础设施，可以与Themis 区块链互联互通，在数字货币借贷、数字货币交易兑换、数字资产投融资等方面发挥各自优势紧密合作，丰富区块链生态。",
    cooperative_partner3_content:"Oracle是仲裁服务中讨论和审阅交易双方提供的材料时所需要的机制。OracleChain在区块链内提供现实世界数据的 Oracle 服务，其生态系统提供一系列的服务和 API，Themis通过调用这些服务和API将现实世界数据引入区块链，来决定仲裁的结果并实现其后的操作。",

    //THEMIS的优势
    themis_advantage_title:"THEMIS的优势",
    themis_advantage1_title:"世界顶级科学家团队",
    themis_advantage1_content:"团队成员均来自牛津大学、耶鲁大学和北京大学，依托深圳市和信中欧金融科技研究院，联合世界顶级科学家在公平交换、智能合约形式化验证等方面的尖端学术研究和工程能力，保证了Themis项目的理论性和创新性达到国际领先水平。",
    themis_advantage2_title:"密码学和区块链深厚技术积累",
    themis_advantage2_content:"团队成员学术背景和研究方向均聚焦在密码学、网络与信息安全和区块链领域，在高效密码学工程实现、隐私保护、匿名声誉评价、高速区块链、智能合约应用等方面工程经验丰富，保证了Themis项目的顺利开发。",
    themis_advantage3_title:"支付领域多年实践",
    themis_advantage3_content:"区块链数字货币支付的理念和模式酝酿已久，团队成员在支付行业有多年工作经历和丰富的经验，在第三方支付和支付卡方面拥有扎实的技术基础和商业基础，保证了Themis项目落地实施。",

    //THEMIS的线路图
    circuit_title: "THEMIS的线路图",
    circuit_img: "/public/img/circuit.jpg",
    ciruit_route1:"提出Themis概念，进行市场调研和商业创意，开展去中心化公平交换协议设计",
    ciruit_route2:"发布Themis白皮书，Themis网站上线，开始进入ico阶段",
    ciruit_route3:"完成Themis区块链设计，完成基于群托管协议和匿名声誉机制开发",
    ciruit_route4:"Themis 1.0上线，完成Themis钱包1.0开发，支持场外数字货币交易兑换和点对点托管支付",
    ciruit_route5:"Themis 2.0上线，提升Themis性能，支持高并发验签的数字签名，完成Themis钱包2.0开发",


    //THEMIS的团队
    team_title: "THEMIS的团队",
    team_section1_desc: "负责Themis产品与架构总体设计,Danish是UCL伦敦大学区块链技术中心(CBT)的开发人员，他用ERC223协议为Overled项目ICO编写智能代币。他推广了使用 Hadoop和 Weka的在线大数据检索和存储服务，并协助开发环境的虚拟机自动配置，前端服务境的虚拟机自动配置，前端服务CKAN / Drupal集成和数据审计。他曾在信息科技服务公司 Atos做过前沿的研究项目。并且在 UCLU TechSoc中发挥协调团队的作用，并致力于推广使用面部认证系统，以增强使用面部认证系统，以增强简化大学进出安全性的方式。",
    team_section2_desc: "负责Themis商务拓展与战略规划,Jennifer是Agility Sciences Limited的首席市场官以及中英区块链协会的联合创始人。她拥有伦敦商学院的商科学位，并在毕业后致力于分布式技术带来的潜在的行业革命。她曾在波士顿咨询公司，私募和风险投资基金方面有过工作经验。 ",
    team_section3_desc: "负责Themis财务分析,Yuet是英国普华永道银行及资本市场团队中的一员，他在传统金融服务方面拥有坚固的知识和丰富的经验，他曾参与了项目的尽职调查和并购工作。但Yuet真正的热情在于颠覆性金融技术，他的激情始于在一家金融科技风险投资公司的工作，他深入研究并向市政府提议了中国二三线省市“特色小镇”的开发以及电子城市技术在基础设施上的潜在应用。Yuet还深入参与了加密货币的研究和并为多个项目的ICO提供咨询。作为中英区块链协会（CUKBA）联合创始人之一，他与英国领先的金融科技企业家有密切联系。Yuet毕业于伦敦政治经济学院，获得商科硕士学位。",
    team_section4_desc: "Takuya毕业于英国伦敦大学皇家霍洛威学院，目前在Unicoin担任增长黑客，在市场营销，工程研发，数据分析领域均具有丰富的经验。掌握SEM推广，内容营销，程序测试，数学建模等多种技能，并参与过多个区块链项目的研发实施与运营推广，是一名在区块链以及金融创新领域的复合型人才。",
    team_section5_desc: "负责Themis社区建设与算法研究,Amir 毕业于英国伦敦大学皇家霍洛威学院，在区块链技术和金融科技领域拥有多年实际操作经验，他深入了解加密空间和区块链知识，活跃于多个开源社区，专注于公钥密码学和共识算法的研究与实现，同时在市场调查和商业案例开发方面有丰富经验。他有优秀的沟通能力，掌握三种语言（俄语，英语和哈萨克语），并正在学习汉语。",

    //THEMIS顾问团队
    ourteam_title: "THEMIS顾问团队",
    ourteam_section1_name: "Donald Lawrence",
    ourteam_section1_desc: "伦敦大学学院客座教授，战略咨询公司创世纪公司合伙人，伦敦大学学院教授，区块链技术中心项目负责，金融计算研究中心项目负责，阿兰图灵大数据研究中心项目负责，曾在花旗集团、美国银行和美国运通等均担任过总经理以上级别职位，在UCL期间，负责对接与央行，投行，对冲基金，清算中心和科技企业的项目研究和开发等。",
    ourteam_section2_name: "Daniele Bernardi",
    ourteam_section2_desc: "Diaman SCF的创办人兼首席执行官，投资者杂志（INVESTORS’ Magazine Italia）主席。致力于开发高回报的投资战略，是一位不断寻求创新的企业家。他的研究面向数学模型的开发，简化了投资者和家族企业的决策过程，以减少风险。",
    ourteam_section3_name: "Robert Ferguson",
    ourteam_section3_desc: "贝恩公司顾问/Bee-One销售总监 Robert Ferguson是Bee-One在英国的销售总监，他在零售和消费品销售方面拥有丰富的经验。 他是贝恩公司的顾问，他负责推动分类管理、商业优势、采购战略和制造网络优化等项目的分析和决策者管理。Robert拥有丰富的项目管理经验，其中包括设计和领导研讨会以推动决策,的制定。他还具有开发新一代数字化转型经验。通过印度，香港和中国的项目，他致力于寻找新兴市场的机遇与挑战。",
    ourteam_section4_name: "陈钟",
    ourteam_section4_desc: "陈教授是原北京大学软件与微电子学院院长，北京大学金融信息化研究中心主任，北京大学网络与信息安全实验室主任。CCF常务理事，CCF信息保密专委副主任，CCF网络与数据通信专委委员。",
    ourteam_section5_name: "吕旭军",
    ourteam_section5_desc:"网录科技创始人，吕旭军是区块链资深创业者及技术专家，万维链创始人。先后获得北京大学、俄亥俄州立大学多个学位，早年在中国、美国、欧洲均有丰富的商业经历。2012年进入区块链领域，2014年联合创立著名区块链项目Factom，被《经济学人》杂志以封面报道“信任的机器”引入公众的视野。2016年创立区块链商业应用企业网录科技，致力于推动区块链技术的更大范围应用。",

    //footer部分
    footer_title1:"添加群秘，加入官方微信群",
    footer_title2:"法律条款和声明",

    //法律结构
    law_structure_title1:"法律结构",
    law_structure_title2:"Legal structure",
    law_structure_content1:"Themis 团队通过定向及公开出售的方式，出售基于 Themis 平 台运行的 GET Token，GET 作为 Themis 平台的结算单位和服务费 用，一经售出后不承诺退回或回购。GET 是一种虚拟商品，可对应获 得 Themis 平台的服务权限，不是证券，也非投机工具。",
    law_structure_content2:"GET 作为虚拟商品，主要受众是对加密代币和区块链技术非常熟 悉专家、技术开发者、极客等，任何中国、美国、新加坡公民，该三国永久居民和注册机构将不被允许参加 GET 的公开出售。",
    law_structure_content3:"在 GET 销售中所获的收入，将由 Themis 团队使用，主要将用 于技术开发、市场营销、法律合规、财务审计、商务合作等用途。",
    law_structure_content4:"Themis 与任何国家或地区的地域和法币均没有任何关系。为了 满足和遵守不同国家和地区的法律法规，Themis 平台可能在部分地 区无法提供全部服务，Themis 团队会尽力争取“沙箱政策”(sandbox policy)或者安全港待遇，为用户提供尽可能友好的服务。",

    //免责声明
    law_section_title:"免责声明",
    law_section_content1:"本白皮书只用于传达信息之用途，并不构成任何形式的投资建议，投资意向或教唆投资。本文档不组成也不理解为提供任何买卖行为，或任何邀请买卖、任何形式证券的行为，也不是任何形式上的合约或者承诺，并不构成对用户参与结果的保证除本白皮书所明确载明的之外，Themis 团队不对 Themis 或 GET 作任何陈述或保证（尤其是对其适销性和特定功能）。Themis明确表示相关意向用户明确了解并接受该项目的风险，所有参与者将在 Themis 项目启动之后按现状接受 GET，无论其技术规格、参数、性能或功能等，并愿意个人为此承担一切相应结果或后果。",
    law_section_content2:"Themis 团队在此明确不予承认和拒绝承担下述责任：",
    law_section_content3:"1.任何人在购买 GET 时违反了任何国家或地区的反洗钱、反恐怖主义融资或其他监管要求；",
    law_section_content4:"2.任何人在购买 GET 时违反了本白皮书规定的任何陈述、保证、义务、承诺或其他要求，以及由此导致的无法付款或无法提取 GET；",
    law_section_content5:"3.GET 被任何政府、准政府机构、主管当局或公共机构禁止、监管或法律限制，或因监管因素导致无法提供正常服务；",
    law_section_content6:"4.Themis 开发失败、被放弃或开发推迟，以及因此导致的无法交付或延期交付GET；",
    law_section_content7:"5.Themis 源代码的错误、瑕疵、缺陷或其他问题，导致平台无法交付或延期交；",
    law_section_content8:"6.Themis 平台或以太坊区块链的故障、崩溃、瘫痪、回滚或硬分叉；",
    law_section_content9:"7.Themis平台对所募集数字资产的管理和使用；",
    law_section_content10:"8.任何机构或个人之间的约定内容与本白皮书内容存在差异、冲突或矛盾；",
    law_section_content11:"9.GET 在任何交易所的上市或退市；",
    law_section_content12:"10.本白皮书披露的任何风险因素，以及与该等风险因素有关、因此导致或伴随发生的损害、损失、索赔、责任、惩罚、成本或其他负面影响。",

    //风险声明
    risk_section_title:"风险声明",
    risk_section_abstract:"区块链技术是一项具有革新性潜力的技术，数字资产作为一种新的模式，在Themis项目的开发、运营、推广过程中，将不可避免地遇到诸如技术、市场认知、政策监管等多方面不可预知的风险。Themis 和 GET 均只存在于网络虚拟空间内，不具有任何有形存在，因此不属于或涉及任何特定国家。除本白皮书所述的其他内容外，每个 GET 购买者还均应细读、理解并仔细考虑下述风险，之后才决定是否参与本次公开售卖计划。参加本次公开售卖计划应当是一个深思熟虑后决策的行动，将视为购买者已充分知晓并同意接受了下述风险。",
    risk_section_title1:"1.Token销售市场风险",
    risk_section_content1:"由于Token销售市场环境与整个数字货币市场形势密不可分，如市场行情整体低靡，或存在其他不可控因素的影响，本次 GET 公开售卖计划可能会被提前终止，此时购买者可能由于比特币/以太币的价格波动以及 Themis 团队的支出而仅被部分退还其支付的金额。",
    risk_section_title2:"2.不充分的信息提供",
    risk_section_content2:"截止到本白皮书发布日，Themis 仍在开发阶段，其哲学理念、共识机制、算法、代码和其他技术细节和参数可能经常且频繁地更新和变化。尽管本白皮书包含了 Themis 最新的关键信息，其并不绝对完整，且仍会被 Themis 团队为了特定目的而不时进行调整和更新。因此，信息披露的不充分是不可避免且合乎清理的。",
    risk_section_title3:"3.监管风险",
    risk_section_content3:"由于区块链的发展尚处早期，目前尚未有成熟的关于代币众售过程中的前置要求、交易要求、信息披露要求、锁定要求等相关的法规文件，而区块链技术已经成为世界上一些国家和地区的监管对象，如果监管主体插手或施加影响，则有可能对Themis 项目和GET造成影响，例如法令限制使用、销售Token诸如GET有可能受到限制、阻碍甚至直接终止Themis应用和PST的发展。",
    risk_section_title4:"4.开发失败或放弃",
    risk_section_content4:"Themis 仍在开发阶段，而非已准备就绪随时发布的成品。由于Themis 系统的技术复杂性，Themis 团队可能不时会面临无法预测和/或无法克服的困难。因此，Themis 的开发可能会由于任何原因而在任何时候失败或放弃（例如由于缺乏资金）。开发失败或放弃将导致 GET 无法交付给本次售卖计划的任何购买者。",
    risk_section_title5:"5.众筹资金的失窃",
    risk_section_content5:"可能会有人企图盗窃 Themis 团队所收到的公开售卖所获资金（包括已转换成法币的部分）。该等盗窃或盗窃企图可能会影响 Themis 团队为 Themis 开发提供资金的能力。尽管 Themis 团队将会采取最尖端的技术方案保护众筹资金的安全，某些网络盗窃仍很难被彻底阻止。",
    risk_section_title6:" 6.源代码瑕疵",
    risk_section_content6:"由于区块链技术开发是一项具有挑战性的技术，无人能保证 Themis 的源代码完全无瑕疵。代码可能有某些瑕疵、错误、缺陷和漏洞，这可能使得用户无法使用特定功能，暴露用户的信息或产生其他问题。如果确有此类瑕疵，将损害 Themis 的可用性、稳定性、安全性，并因此对 GET 的价值造成负面影响。",
    risk_section_title7:"7.核心协议相关的风险",
    risk_section_content7:"Themis 项目基于区块链底层协议，GET基于以太坊代币标准ERC20进行开发，若区块链底层协议发生不可预期的功能问题或遭受攻击，均可能导致Themis平台和GET以难以预料的方式停止工作或功能缺失。",
    risk_section_title8:"8.系统性风险",
    risk_section_content8:"开源软件中被忽视的致命缺陷或全球网络基础设施大规模故障造成的风险。虽然其中部分风险将随着时间的推移大幅度减轻，比如修复漏洞和突破计算瓶颈，但其他部分风险依然不可预测，比如可能导致部分或全球互联网中断的政治因素或自然灾害。",
    risk_section_title9:"9.漏洞风险或密码学加速发展的风险",
    risk_section_content9:"密码学的加速发展或者科技的发展诸如量子计算机的发展，或将破解的风险带给Themis平台，这可能导致GET的丢失。",
    risk_section_title10:"10.应用存在的故障风险",
    risk_section_content10:"Themis平台可能因各方面可知或不可知的原因故障(如大规模节点宕机)，无法正常提供服务，严重时可能导致用户GET的丢失。",
    risk_section_title11:"11.应用或产品达不到自身或参与者预期的风险",
    risk_section_content11:"Themis项目当前正处于开发阶段，在发布正式版之前可能会进行比较大的改动，任何参与者对Themis应用或GET的功能或形式（包括参与者的行为）的期望或想象均有可能达不到预期，任何错误地分析，一个设计的改变等均有可能导致这种情况的发生。",
    risk_section_title12:"12.无法预料的其它风险",
    risk_section_content12:" 基于密码学的Token是一种全新且未经测试的技术，除了本白皮书内提及的风险外，还存在着一些创始团队尚未提及或尚未预料到的风险。此外，其它风险也有可能突然出现，或者以多种已经提及的风险的组合的方式出现。",




};
window.CN = CN;