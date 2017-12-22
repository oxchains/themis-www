const EN = {

    //header部分
    nav_home: "HomePage",
    nav_team: "Team",
    nav_language: "中文版",
    nav_Whitepaper: "Whitepaper",
    change_to_lang: "/?lang=CN",
    nav_whitepaper_url: "https://investdigital.info/public/InvestDigital_Whitepaper_CN.pdf",
    nav_github_url: "https://github.com/themisnetwork",
    law_to_lang: "?lang=EN",

    // banner 部分
    about_title: "Themis: The Decentralized ",
    about_title2: '"Alipay"',
    about_title3:"in Digital Currency World",
    about_know: " From decentralized digital currency to decentralized digital commerce",
    about_what:"What is Themis?",
    about_answer1:"Themis is a blockchain-based fair exchange system for digital currencies,",
    about_answer2:"providing a decentralized escrow service for digital currencies ",
    about_answer3:"and solving the problems of fair exchanges using digital currencies as medium,",
    about_answer4:"Themis can be applied in P2P payments of digital currency, OTC trading of digital currency and so on.",

    // 关键技术
    key_technology_title:"Key Technologies",
    key_technology1_title: "Fair Exchange via Group Escrow",
    key_technology1_content: "Themis ensures that mutual trustless entities complete the exchange of assets in accordance with the prior agreement: Either both parties can get the corresponding goods, or both parties get nothing.Firstly, Themis comes up with an optimistic fair exchange protocol where TTPs only participate when disputes appear. Secondly, Themis comes up with a secure exchange protocol based on group escrow to resist the single point failure issue and the DoS attacks.",
    key_technology2_title: "Anonymous Reputation Mechanism based on Verifiable Shuffles and Linkable Ring Signatures",
    key_technology2_content: "Themis utilizes the verifiable shuffles and the linkable ring signatures to achieve the calculation of reputation anonymously. One benefit of this mechanism is that it can conceal the relations between identities and votes; the other one is that it can achieve reward as well as punishment, and it actually breaks the restrictions of cryptography mechanisms reducing malicious users’ tokens.",
    key_technology3_title: "Non-Interactive Zero-Knowledge Proof",
    key_technology3_content: "Themis utilizes Non-Interactive Zero-Knowledge Proof to solve privacy problems. The first one is to ensure that the secret shares offered to mediators by both transaction parties are true; The second one is that, in the verifiable shuffles protocol, verifiers can use the zero-knowledge proof to check if the shuffle servers executed random activities correctly; The last one is that the client can generate its zero-knowledge proof of its reputation budget in reputation system.",
    key_technology4_title: "Digital Signature Algorithm with High-concurrency Verification Ability",
    key_technology4_content: "Themis program involves a new digital signature algorithm with high-concurrency verification ability. Themis supports variety of digital signature schemes, such as a hash-based one-time signature algorithm, a specific elliptic curve and verification algorithm and etc. We have made a great improvement of CPU’s and GPU’s vector instruction set in the algorithm implementation, and made the verification performance improved by 2 orders of magnitude in the typical computing platform.",

    //应用场景
    application_title1: "Scenarios",
    application_title2:"Themis builds the fair exchange system using digital currencies as mediums. With the on-chain escrow protocol, Themis can facilitate fair exchange mechanism. It can be widely applied to digital currencies transactions, e-commerce escrow payments, security escrow for supervised accounts, multi-agent assets escrow and so on. Themis provides a new fair exchange solution for digital world.",
    application_section1_title: " P2P Escrow Payment Service",
    application_section1_content1: "Themis can provide the escrow payments of decentralized digital currencies for the peer-to-peer online markets (such as OpenBazaar), to achieve direct exchanges between buyers and sellers.",
    application_section1_content2:"Themis can connect to the payment system of e-commerce platforms, and provide decentralized escrow service for digital currency transactions.",
    application_section2_title: "Digital Currencies Transactions",
    application_section2_content: "Themis supports OTC (over-the-counter) transactions of digital currencies, and it can also provide the secure escrow service for the digital cryptocurrencies based on blockchains, such as Bitcoin and Ethereum.  It can satisfy the requirements of the exchanges among the digital currencies, and make it fair for the cross-chain transactions.",
    application_section3_title: "Security Escrow for Supervised Accounts",
    application_section3_content: "With a set of high-scalable smart contracts, Themis can provide API of distributed ledger and decentralized escrow service for supervised accounts of digital currencies. We can achieve the security escrow for the supervised accounts of digital-currency private funds, digital-currency P2P lending, digital-currency exchanges to ensure security and compliance.",
    application_section4_title: "Multi-Agent Assets Escrow",
    application_section4_content: "For the cases of multi-agent,long-link and strong-dependency transactions, Themis can escrow all the funds (deposits, initial payments, service charges, final payments) in the multi-agent transactions on the original chains as the form of digital currency by creating smart contracts based on multi-subject duties and conditional instructions, and achieve the fair exchange by arbitration mechanism.",

    //合作伙伴
    cooperative_partner:"Partners",
    cooperative_partner1_content:"Shenzhen Chieftin Lab is led by Professor Bill Roscoe.The Lab focuses on researching and developing applications of blockchain and other Fintech related areas. The formal verification technique of Chieftin is world-leading, and the related programs and research directions are mainly hatched by Shenzhen Municipal Government. The cooperation between Themis and the lab is mainly to tackle the security challenges of smart contracts, and to use formal verification techniques to examine and validate smart contracts in Themis.",
    cooperative_partner2_content:"Wanchain（https://www.wanchain.org/）. Wanchain is the infrastructure for supplying channels for cross-chain assets transactions between different blockchain networks. It can interact with Themis, and tightly cooperate with Themis on digital currency loan, digital currency exchange and digital assets funding with advantages，and then can enrich the eco-environment of blockchain.",
    cooperative_partner3_content:"Oraclechain（http://oraclechain.io/）.Oracle is a required mechanism when discussing and auditing the materials provided by both parties in arbitration service. OracleChain provides the Oracle service of real world data in blockchain, whose eco-system of Oraclechain provides a series of services and APIs. Themis will connect the real world data with blockchain by calling these services and APIs to determine the result of arbitration and implement the following procedures.",

    //THEMIS的优势
    themis_advantage_title:"Advantages",
    themis_advantage1_title:"World-Top Scientists Team",
    themis_advantage1_content:"Team members of Themis are all from Oxford University, Yale University, Beijing University. We align with Shenzhen Chieftin Lab, and work together with the world-top scientists having sophisticated abilities of both researching and engineering on fair exchange, formal verification and other related areas. It guarantees the theory and innovation of Themis can reach the international advanced level.",
    themis_advantage2_title:"Firm Basis of Technology on Cryptography and Blockchain",
    themis_advantage2_content:"The backgrounds of our members are focus on areas of cryptography, network and information security and blockchain. We have rich experience in the implementation of Efficient Cryptography, Privacy Protection, Anonymous Reputation, High-speed Blockchain, Smart Contract Applications and other related areas. It guarantees the development of Themis can be smooth.",
    themis_advantage3_title:"Years of Practices on Payment Industry",
    themis_advantage3_content:"The ideas and models of digital currency payment have ferment for a long time. Our team members have rich experience in payment industry, and we have solid theoretical and commercial foundation of TTP Payment and Card Payment. It guarantees the implementation of Themis.",

    //THEMIS的线路图
    circuit_title: "Roadmap",
    circuit_img: "/public/img/circuit2.png",
    ciruit_route1:"Proposing the concept of Themis, starting market researching and business innovating. Starting the model design of decentralized fair exchange protocol.",
    ciruit_route2:"Publishing the Whitepaper of Themis, launching Themis website, entering the ICO phase.",
    ciruit_route3:"Finishing the blockchain design of Themis, and finishing the development of group escrow protocol and anonymous reputation mechanism.",
    ciruit_route4:"Launching Themis 1.0 version. Finishing the development of Themis Wallet 1.0, and supporting the scenarios of OTC trading and p2p escrow payment.",
    ciruit_route5:"Launching Themis 2.0 version, improving the performance of Themis, supporting digital signature algorithm with high-concurrency verification ability, finishing the development of Themis Wallet 2.0.",


    //THEMIS的团队
    team_title: "Team Members",
    team_section1_desc: "In charge of the total design of Themis products and architecture,Danish is a senior developer in UCL Centre for Blockchain Technologies (CBT), he wrote smart tokens in Solidity compliant with ERC223 protocol for Overledger project ICO. He promoted an online Big Data retrieval and storage service using Hadoop and Weka, and assisting with Virtual Machine Automatic Provisioning for development environments, CKAN/Drupal Integration for front-end services, and Data Audit. He once worked in Atos(an information tech service company) for frontier researching projects. And he coordinated a team working on a system which uses Facial Recognition (using OpenCV Libraries) as an authentication for turnstiles to enhance security and ease entry/exit at UCLU TechSoc.",
    team_section2_desc: "In charge of the business development and strategy planning for Themis,Jennifer is the CMO at Agility Sciences Limited and Co-founder of China-UK Blockchain Association. She holds a business degree from London Business School and has devoted herself to the potential industry revolution brought by distributed leger technology since graduated. She has experiences with The Boston Consulting Group, private equity and venture capital funds.",
    team_section3_desc: "In charge of the financial analysis of Themis,While joining PwC UK in its banking and capital market team, Yuet Chau possesses concrete knowledge and experience in traditional financial services, including due diligence and merger & acquisition, but his true passion lies on disruptive financial technology. His passion embarked on a placement in a Fintech venture capital where he researched and advised municipal government on ‘Feature Town’ development and the potential adoption of e-city technology infrastructure in 2nd/3rd Tier Chinese provinces. Yuet later got involved in in-depth cryptocurrency researches and multiple Initial Coin Offerings advisory and executions. He has connected to leading early-stage Fintech & Reg-tech entrepreneurs in UK and leveraging resources he co-found China-UK Blockchain Association (CUKBA), an institution dedicated to connecting opportunities in Blockchain sector between China and the UK. Yuet graduated from London School of Economics and Political Science with Master’s degree in business.",
    team_section4_desc: "In charge of the operation and popularization of Themis,Takuya graduated from Royal Holloway, University of London ，and now he is working at Unicoin as a growth hacker. He has rich experience in the areas of marketing, program developing, and data analysis. He has skills of SEM， content marketing，programme testing and mathematical modeling, and he has involved in several blockchain projects. Takuya is a compound talent in Fintech and blockchain related areas.",
    team_section5_desc: "In charge of the community building and algorithm researching for Themis,Amiri graduated from Royal Holloway, University of London, and he has years of experience in blockchain and Fintech areas. He has a deep understanding of crypto space and blockchain related knowledge, and he is active in many open communities. He is focus on the research and implementation of public key cryptography and consensus algorithms, and he also has rich experience in market researching and business development. He has a strong communication ability, and he can speak 3 languages (Russian, English and Kazak), and he is also learning Chinese now.",

    //THEMIS顾问团队
    ourteam_title: "Advisors",
    ourteam_section1_name: "Donald Lawrence",
    ourteam_section1_desc: "Visiting professor, UCL,Partner, Genesis International，Donald Lawrence is a visiting professor and SME in capital markets and risk management and an advisor in the wholesale financial markets, working for financials, multinationals and public sector institutions on projects related to capital management, strategy, implementation of operational and technology process re-engineering and change management. DL maintains active affiliations with global academic institutions, regularly presenting guest speaker sessions at various industry forums.",
    ourteam_section2_name: "Daniele Bernardi",
    ourteam_section2_desc: "Founder&CEO , Diaman SCF,Chairman, INVESTORS’ Magazine Italia.Daniele, as the founder and CEO of Diaman SCF, Chairman of INVESTORS' Magazine Italia, is an entrepreneur who constantly seeks to innovate. His dedication to developing high-return investment strategies and his research on the development of quantitative methods for mathematical models can reduce the effects of, and risks associated with, emotional choices in investment choices, improve outcomes and increase customer satisfaction, simplify the decision-making process for investors and family business to reduce investment risk.",
    ourteam_section3_name: "Robert Ferguson",
    ourteam_section3_desc: "Consultant, Bain & Company, National Sales Director, Beeone.Robert is the sales director of Beeone, British, and he has extensive experience in Retail & Consumer Products. He is a consultant of Bain & Company, he is responsible for driving analytics and stakeholder management on projects across category management, commercial excellence, sourcing strategy and manufacturing network optimization. Robert has extensive project management experience across multiple client functions, including designing & leading workshops to drive informed decision-making, and he also has experience in digital transformation developing next generation tools & capabilities. Through projects in India, Hong Kong & China, he is aiming at seeking opportunities and challenges in new markets.",
    ourteam_section4_name: "Chen Zhong",
    ourteam_section4_desc: "Professor, Peking University,Prof. Chen is the former Head of Software and Microelectronics Department, Peking University (2002-2010), Head of PAFIRC, Head of Information Security Lab of Peking University. Executive Director of CCF, Deputy Head of ISCCF, Commissioner of CCF TCCOMM.",
    ourteam_section5_name: "Jack Lv",
    ourteam_section5_desc:"Co-Founder, Factom.Founder, Wanchain.Founder, WangluTech,Jack is and experienced entrepreneur and expert in blockchain industry, he is the founder of Wanchain. Obtained his degrees in Peking University and Ohio State University, and he had rich business experience in China, America, and Europe in his early years. Entered into blockchain area since 2012, and then co-founded a famous program called Factom, and was known by pubic since he was reported in the cover report “trusted machine” by “The Economist”. He founded Wanglutech in 2016 and focused on driving the technology of blockchain into a wider applicable range.",

    //footer部分
    footer_title1:"Official Wechat",
    footer_title2:"Legal Provisions and Declarations",

    //法律结构
    law_structure_title1:"Legal Structure of Themis",
    law_structure_title2:"Legal structure",
    law_structure_content1:"The Themis Foundation will sell GET Token based on the Themis platform, in the form of private sale and crowdsale. GET is the settlement unit and service fee for Themis platform and will not be refunded or repurchased once it is sold. Nobody will be responsible to repurchase or redeem any sold GET. GET, as a kind of virtual commodity that corresponds to the Themis platform's service permissions, are not securities, nor speculative investment instruments.",
    law_structure_content2:"GET as a virtual product, the typical target users of GET are veterans in crypto-tokens and blockchain, technology developers, and geeks. Any US citizens, Singapore citizens, permanent residents, or green card holders of these two countries are not allowed to participate in the GET crowdsale.",
    law_structure_content3:"Revenue from the sale of GET will be used by the Themis Foundation at its own discretion, primarily for technical development, marketing, legal compliance, financial audits, business partnerships and more.",
    law_structure_content4:"Themis neither has any physical presence nor is associated with the territory or fiat currency of any country or region. In order to satisfy and comply with the local laws and regulations, the Themis platform may be unable to provide full services in certain jurisdictions. The Themis Foundation will endeavor to seek “sandbox policy” or safe harbor treatment to provide users with the service as friendly as possible.",

    //免责声明
    law_section_title:"Disclaimer",
    law_section_content1:"The only use of this whitepaper is to convey information, and does not constitute any form of investment advice, investment intention or investment abetment. This whitepaper is neither composed nor understandable as any behaviors of trading and transaction invitation or any forms of security. This document is not any form of contract or commitment, and does not constitute any guarantee of user participation in the results,The Themis Foundation does not make, and hereby disclaims, any representation or warranty with respect to Themis or GET (especially with regard to its merchantability and the particular functionality), except those expressly stated in this whitepaper. Themis makes it clear that the relevant user has a clear understanding of and accepts the risk of the project and that all participants will accept GET on an “as is” basis, after the startup of the Themis project, regardless of their technical specifications, parameters, performance or features, etc. Each purchaser decided to participate in the GET crowdsale and to purchase any GET must be willing to personally undertake all appropriate results for this purpose or consequences.",
    law_section_content2:"The Themis team specifically disclaims and refuses to accept the responsibilities as follows.",
    law_section_content3:"1.Any person’s purchase of GET in violation of any anti-money laundering, counter-terrorism financing or other regulatory requirements that are imposed in any jurisdiction.",
    law_section_content4:"2.Any person’s purchase of GET in violation of any representations, warranties, obligations, undertaking or other requirements under this Whitepaper, and the resulting failure or inability to make his/her payment or to claim relevant purchased GET.",
    law_section_content5:"3.GET is prohibited, supervised or legally restricted by any government, quasi-governmental agency, competent authority or public body, or is unable to provide normal service due to regulatory factors.",
    law_section_content6:"4.Failure or abortion of Themis development and resulting failure to deliver GET.",
    law_section_content7:"5.Themis's source code error, flaws, defects or other problems, resulting in the platform can not be delivered or deferred.",
    law_section_content8:"6.Any malfunction, breakdown, collapse, rollback or hardforking of Themis or the blockchain of Ethereum.",
    law_section_content9:"7.The management and use of the raised digital assets by Themis platform.",
    law_section_content10:"8.Agreements between any organization or individual has differences, conflict or contradiction with this white paper.",
    law_section_content11:"9.Listing or delisting of GET on or from any exchange.",
    law_section_content12:"10.Any risk factors disclosed in this Whitepaper and any damage, loss, claim, liability, punishment, cost or other adverse impact that is caused by, associated with, in connection with, incidental to or consequential to that risk factor.",

    //风险声明
    risk_section_title:"Risk Factors",
    risk_section_abstract:"Blockchain technology is an innovative technology. As a new model of digital assets, the development, operation and promotion of Themis project will inevitably encounter such problems as technology, market cognition, policy supervision and many other unpredictable risks. Both Themis and GET are only present within the cyber virtual space, do not have any physical existence, and therefore do not belong to or relate to any particular country. In addition to the rest of the content described in this whitepaper, each GET purchaser should also read, understand and carefully consider the following risks described below before deciding whether to participate in this open sale plan. Participation in this open sale plan should be a decision after careful consideration and will be deemed to have been fully understood and agreed to by the purchaser with the risk described below.",
    risk_section_title1:"1.Token Sales Market Risk",
    risk_section_content1:"The GET open sale plan may be terminated early because the Token sales market environment is closely linked to the entire digital currency market situation, such as the overall market downturn, or other uncontrollable factors. At this point, the purchaser may only partially be refunded the amount paid due to the price volatility of Bitcoin or Ether and the expenses of the Themis Foundation.",
    risk_section_title2:"2.Insufficient Information Availability",
    risk_section_content2:"When the whitepaper releases, Themis is still at the stage of development, of which philosophy, consensus mechanisms, algorithms, code and other technical details and parameters may be updated and changed frequently and constantly. While this whitepaper has contained the most up-to-date key information of Themis, it is not absolutely complete and will still be continually adjusted and updated by the Themis team for specific purposes. Besides, it is unnecessary to provide the purchasers with every detail of Themis development, including its progress and expected milestones no matter whether rescheduled or not. It is inevitable and reasonable that the information disclosure is not enough.",
    risk_section_title3:"3.Regulatory Risks",
    risk_section_content3:"Because the blockchain is in the stage of development, there are still no unified laws and regulations related to the ICO process, including pre requirements, transaction requirements, information disclosure requirements and file locking requirements. The blockchain technology and the crypto-tokens are being, or may be, overseen by the regulatory authorities of various jurisdictions. If some regulatory authorities intervene or exert influence on the project, the Themis Foundation may receive queries, notices, warnings, requests or rulings from one or more regulatory authorities from time to time, or may even be ordered to suspend or discontinue any action in connection with the Campaign, Themis’s development or GET. The development, marketing, promotion or otherwise of Themis or the GET crowdsale campaign may be seriously affected, hindered or terminated as a result. And since regulatory policies could change from time to time, existing regulatory permission or tolerance on Themis or the GET crowdsale campaign in any jurisdiction could be just temporary. GET could be defined from time to time as virtual commodity, digital asset or even securities or currency in various jurisdictions and therefore could be prohibited from being traded or held in certain jurisdictions pursuant to local regulatory requirements.",
    risk_section_title4:"4.Development Failure or Abortion",
    risk_section_content4:"Themis is still under development, rather than a finished product ready for release at any time. Due to the technical complexity of the Themis system, the Themis Foundation may face with unforeseeable and/or insurmountable difficulties from time to time. Accordingly, the development of Themis may fail or abort at any time for any cause (including lack of funds). Failure to develop or abandon the project would result in the inability to deliver the GET to any purchaser of this Crowdsale.",
    risk_section_title5:"5.Theft of Crowdsale Proceeds",
    risk_section_content5:"There may be attempts to steal the crowdsale proceeds received by the Themis Foundation (including the fiat currency amount converted therefrom). Such theft or attempted theft may affect the ability of the Themis Foundation to fund the development of Themis. While the Themis Foundation will adopt cutting-edge technical solutions to keep the crowdsale proceeds safe, certain cyber thefts can hardly be unpreventable.",
    risk_section_title6:" 6.Flaws in Source Code",
    risk_section_content6:"Because development on the blockchain is a challenging groundbreaking project, nobody can guarantee that the source code of Themis is flaw-free. It may contain some flaws, errors, defects and bugs, which may it impossible for users to use some specific, expose the users’ information or cause other problems. If  any such flaws arise, it will damage the availability, stability and security of Themis, and consequently will bring a negative impact on the value of GET. Open source codes rely on transparency to promote community-sourced identification and solution of problems within the code. The Themis Foundation will work closely together with the Themis community to keep improving, optimizing and perfecting the source code of Themis onwards.",
    risk_section_title7:"7.Risks of the Core Agreements",
    risk_section_content7:"Themis program is based on blockchain bottom protocols, and GET is developed based on ETH Token Stardard ERC20. If the bottom protocol of blockchain is subjected to some unpredictable functional issues or being attacked, it may cause the Themis platform and GET to stop working or cause loss of functionality in an unexpected way.",
    risk_section_title8:"8.System Risks",
    risk_section_content8:"The system risks refer to the negligible fatal flaws in open source software and the risks posed by large-scale failures of the global network infrastructures. Although some of these risks will be substantially reduced over time, such as by repairing vulnerabilities and breaking computational bottlenecks, other parts of the risks remain unpredictable, such as political factors or natural disasters that could lead to partial or global disruption of the Internet.",
    risk_section_title9:"9.Vulnerability or Cryptographic Risks",
    risk_section_content9:"The accelerated development of cryptography or technology, such as the development of quantum computers, might bring new risks to the Themis platform, which may lead to the loss of GET.",
    risk_section_title10:"10.Failure Risk of Applications",
    risk_section_content10:"Themis platform might not be able to provide services by variety of known or unknown reasons, e.g., large-scale of nodes down, and this might cause the loss of GET in severe cases.",
    risk_section_title11:"11.Product or Application Can’t Reach the Expect of Self or Participants",
    risk_section_content11:"Themis program is currently under development, and there may be some major changes before the release of the official version. Any expectation or imagination of any participant in the function or form of Themis application or GET (including participant's behaviors) may not be met. Any kind of incorrect analysis or alteration of design might make this kind of things happen.",
    risk_section_title12:"12.Other Unexpected Risks",
    risk_section_content12:"Cryptographic Token is a completely new and untested technology, possibly suffering from some risks. Aside from those mentioned in this whitepaper, there are some risks that some founding teams have not mentioned or have not anticipated yet. Besides, other risks may also appear suddenly, or in a combination of several of the risks already mentioned, adding new unpredictable challenges to the research and development of Cryptographic Token.",

};
window.EN = EN;