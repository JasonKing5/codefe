import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    // .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'zh',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    nav: {
                        home: 'Home',
                        ecosystem: 'Ecosystem',
                        features: 'Features',
                        about: 'About',
                        github: 'GitHub'
                    },
                    hero: {
                        title_prefix: 'Explore the',
                        title_highlight: 'Ecosystem',
                        subtitle: 'A curated collection of projects, tools, and resources built by the CodeFE team. Discover knowledge, wealth management, and games.',
                        cta: 'Get Started'
                    },
                    features: {
                        title: 'Innovation at Scale',
                        desc: 'Building the future of web technology with modern stacks.',
                        performance: {
                            title: 'High Performance',
                            desc: 'Built on Vite and Next.js for blazing fast user experiences.'
                        },
                        security: {
                            title: 'Secure & Reliable',
                            desc: 'Enterprise-grade practices in authentication and data handling.'
                        },
                        global: {
                            title: 'Global Scale',
                            desc: 'Designed to serve users worldwide with i18n support built-in.'
                        },
                        modern: {
                            title: 'Modern Stack',
                            desc: 'Leveraging the latest in React, Tailwind, and Node.js ecosystems.'
                        }
                    },
                    projects: {
                        coming_soon: 'Coming Soon',
                        list: {
                            poetry: {
                                title: 'Poetry',
                                description: 'A collection of classical poetry powered by modern tech.'
                            },
                            hmxy: {
                                title: 'HMXY',
                                description: 'Documentation and knowledge base center.'
                            },
                            blog: {
                                title: 'Blog',
                                description: 'Technical insights, tutorials, and frontend development articles.'
                            }
                        }
                    },
                    footer: {
                        slogan: 'Empowering developers and creators with modern tools, knowledge, and entertainment.',
                        ecosystem: 'Ecosystem',
                        poetry: 'Poetry',
                        blog: 'Blog',
                        hmxy: 'HMXY',
                        resources: 'Resources',
                        legal: 'Legal',
                        documentation: 'Documentation',
                        privacy_policy: 'Privacy Policy',
                        terms_of_service: 'Terms of Service',
                        rights_reserved: 'All rights reserved.',
                        icp: 'ICP Filing:',
                        privacy_policy_link: 'Privacy Policy',
                        terms_of_service_link: 'Terms of Service'
                    },
                    privacy_policy: {
                        title: 'Privacy Policy',
                        last_updated: 'Last updated: December 19, 2025',
                        intro: {
                            content: 'CodeFE (hereinafter referred to as "we") highly values your privacy. This policy aims to explain how we collect, use, and protect your personal information on the *.codefe.cn series of websites.'
                        },
                        information_collection: {
                            title: '1. Information We Collect',
                            content: 'We only collect the minimum information necessary to provide services:',
                            items: [
                                'Account Information: When you register on Poetry, Wealth, or Games sub-sites, we collect your email address and encrypted password hash.',
                                'Usage Data: We collect anonymous access data, such as visited pages, dwell time, browser type, and approximate geographic location (only accurate to city level).'
                            ]
                        },
                        data_collection_method: {
                            title: '2. How We Collect Data (About Umami)',
                            content: 'Unlike most websites, we do not use Google Analytics or Baidu Statistics, nor do we share your data with third-party advertising networks.',
                            umami_description: 'We use the self-hosted open-source analytics tool Umami (deployed at analytics.codefe.cn) to track website traffic.',
                            umami_features: [
                                'Umami does not use persistent cookies to track your cross-site behavior.',
                                'All statistical data is stored on servers we control and is not sent to any third-party companies.',
                                'We respect browser "Do Not Track" requests.'
                            ]
                        },
                        data_storage: {
                            title: '3. Data Storage Location',
                            content: 'In accordance with the requirements of the Personal Information Protection Law of the People\'s Republic of China (PIPL), all your personal data is stored on servers within Mainland China (Tencent Cloud Shanghai/Beijing data centers) and Tencent Cloud Object Storage (COS). We will not transfer your sensitive personal information across borders outside China.'
                        },
                        information_usage: {
                            title: '4. Use of Information',
                            content: 'The information we collect is only used for:',
                            items: [
                                'Providing you with login authentication services;',
                                'Maintaining and improving website performance and security;',
                                'Sending system notification emails when necessary (such as password resets).'
                            ]
                        },
                        cookie_usage: {
                            title: '5. Use of Cookies',
                            content: 'We only use cookies necessary for maintaining service operation:',
                            items: [
                                'Authentication Cookies: Used to maintain your login status after you log in.',
                                'Security Cookies: Used to prevent security risks such as CSRF attacks.'
                            ]
                        },
                        your_rights: {
                            title: '6. Your Rights',
                            content: 'You can contact us at any time to exercise your rights: query, correct, or completely delete your account and all related data. Once deleted, data cannot be recovered.'
                        },
                        contact_us: {
                            title: '7. Contact Us',
                            content: 'If you have any questions about this privacy policy or wish to exercise data rights, please contact us:',
                            email: 'support@codefe.cn'
                        },
                        footer_note: 'We are committed to continuously improving privacy protection measures to provide you with a safe and reliable service experience.'
                    },
                    terms_of_service: {
                        title: 'Terms of Service',
                        last_updated: 'Last updated: December 19, 2025',
                        introduction: {
                            title: '1. Introduction',
                            content: 'Welcome to CodeFE (hereinafter referred to as "this service"). This service is operated by an individual developer and covers the main domain codefe.cn and all its subdomains (including but not limited to poetry.codefe.cn, games.codefe.cn, wealth.codefe.cn, etc.).',
                            agreement: 'Using this service indicates your agreement to comply with the following terms. If you do not agree to these terms, please stop using this service.'
                        },
                        account_security: {
                            title: '2. Account and Security',
                            content: 'When using some of our services (such as the Poetry platform, Wealth accounting service), you may need to register an account.',
                            responsibilities: [
                                'You are responsible for properly safeguarding your account password.',
                                'CodeFE is not legally liable for any losses caused by password disclosure.',
                                'You agree to provide only true and accurate registration information (such as email address).'
                            ]
                        },
                        user_conduct: {
                            title: '3. User Conduct Guidelines',
                            content: 'This service runs on Tencent Cloud servers within Mainland China. You must strictly comply with Chinese laws and regulations when using this service. The following content is strictly prohibited from being published or stored:',
                            prohibited_content: [
                                'Content that violates the basic principles established by the Constitution;',
                                'Content that endangers national security, leaks state secrets, subverts state power, or undermines national unity;',
                                'Content that spreads rumors, disrupts social order, or undermines social stability;',
                                'Content that disseminates obscenity, pornography, gambling, violence, murder, terrorism, or incites crime;',
                                'Content containing malicious code, viruses, crawler scripts, or attempts to disrupt website stability.'
                            ],
                            consequence: 'Once the above violations are discovered, we will either ban your account or report to relevant regulatory authorities, and no data will be refunded.'
                        },
                        service_changes: {
                            title: '4. Service Changes and Disclaimer',
                            content: 'This service is provided "as is." As a personal developer project, although we will do our best to ensure data security (including daily off-site backup mechanisms), we do not guarantee that the service can run 100% uninterrupted, nor do we assume liability for data loss caused by force majeure (such as server hardware failures, network attacks, cloud service provider failures).'
                        },
                        intellectual_property: {
                            title: '5. Intellectual Property',
                            content: 'Unless otherwise stated, the code, design, Logo, and original content of this website are owned by the developer. Content created by users on the platform (such as poems and comments published by users) is copyrighted by the users, but users grant CodeFE the right to display and disseminate it within the scope of this platform.'
                        },
                        applicable_law: {
                            title: '6. Applicable Law',
                            content: 'The conclusion, execution, interpretation, and dispute resolution of this agreement shall be governed by the laws of the People\'s Republic of China.'
                        },
                        contact: {
                            title: 'Contact',
                            content: 'If you have any questions, please contact us via email:'
                        },
                        footer_note: 'Please read and understand these Terms of Service carefully. Using this service indicates your agreement to comply with all terms and conditions.'
                    }
                }
            },
            zh: {
                translation: {
                    nav: {
                        home: '首页',
                        ecosystem: '生态系统',
                        features: '特性',
                        about: '关于我们',
                        github: 'GitHub'
                    },
                    hero: {
                        title_prefix: '探索',
                        title_highlight: 'CodeFE 生态',
                        subtitle: 'CodeFE 团队构建的精选项目、工具和资源集合。发现知识、财富管理和游戏乐趣。',
                        cta: '立即开始'
                    },
                    features: {
                        title: '规模化创新',
                        desc: '利用现代技术栈构建Web技术的未来。',
                        performance: {
                            title: '高性能体验',
                            desc: '基于 Vite 和 Next.js 构建，为用户提供闪电般的加载速度和流畅体验。'
                        },
                        security: {
                            title: '安全可靠',
                            desc: '采用企业级标准的安全实践，全方位保障用户认证和数据处理的安全。'
                        },
                        global: {
                            title: '全球化部署',
                            desc: '内置国际化支持（i18n），基础设施专为服务全球用户而设计。'
                        },
                        modern: {
                            title: '现代技术栈',
                            desc: '深度整合 React、Tailwind 和 Node.js 生态系统的最新特性。'
                        }
                    },
                    projects: {
                        coming_soon: '敬请期待',
                        list: {
                            poetry: {
                                title: '醉诗词',
                                description: '古典诗词的数字化呈现，现代技术赋予传统文化新生。'
                            },
                            hmxy: {
                                title: '鸿蒙学苑',
                                description: '一站式文档与知识库中心，汇聚技术精华。'
                            },
                            blog: {
                                title: '博客',
                                description: '专注于前端开发的技术洞察、实战教程与深度文章。'
                            }
                        }
                    },
                    footer: {
                        slogan: '为开发者和创作者提供现代工具、知识和娱乐。',
                        ecosystem: '生态系统',
                        poetry: '醉诗词',
                        blog: '博客',
                        hmxy: '鸿蒙学苑',
                        resources: '资源',
                        legal: '法律信息',
                        documentation: '文档',
                        privacy_policy: '隐私政策',
                        terms_of_service: '服务条款',
                        rights_reserved: '保留所有权利。',
                        icp: 'ICP备案：',
                        privacy_policy_link: '隐私政策',
                        terms_of_service_link: '服务条款'
                    },
                    privacy_policy: {
                        title: '隐私政策',
                        last_updated: '最后更新日期：2025年12月19日',
                        intro: {
                            content: 'CodeFE（以下简称"我们"）非常重视您的隐私。本政策旨在说明我们在 *.codefe.cn 系列网站中如何收集、使用和保护您的个人信息。'
                        },
                        information_collection: {
                            title: '1. 我们收集的信息',
                            content: '我们仅收集提供服务所必需的最小化信息：',
                            items: [
                                '账户信息：当您在 Poetry、Wealth 或 Games 子站注册时，我们会收集您的电子邮箱地址和加密后的密码哈希。',
                                '使用数据：我们会收集匿名的访问数据，例如访问页面、停留时间、浏览器类型和粗略的地理位置（仅精确到城市级）。'
                            ]
                        },
                        data_collection_method: {
                            title: '2. 我们如何收集数据（关于 Umami）',
                            content: '与大多数网站不同，我们不使用 Google Analytics 或百度统计，也不向第三方广告网络共享您的数据。',
                            umami_description: '我们使用自托管的开源分析工具 Umami (部署于 analytics.codefe.cn) 来统计网站流量。',
                            umami_features: [
                                'Umami 不使用持久化 Cookie 来跟踪您的跨站行为。',
                                '所有统计数据均存储在我们自己控制的服务器上，不会发送给任何第三方公司。',
                                '我们尊重浏览器的 "Do Not Track" 请求。'
                            ]
                        },
                        data_storage: {
                            title: '3. 数据存储地点',
                            content: '根据《中华人民共和国个人信息保护法》(PIPL) 的要求，您的所有个人数据均存储在中国大陆境内的服务器（腾讯云上海/北京数据中心）以及腾讯云对象存储 (COS) 中。我们不会将您的个人敏感信息跨境传输至中国境外。'
                        },
                        information_usage: {
                            title: '4. 信息的使用',
                            content: '我们收集的信息仅用于：',
                            items: [
                                '为您提供登录认证服务；',
                                '维护和改进网站的性能与安全性；',
                                '在必要时（如密码重置）向您发送系统通知邮件。'
                            ]
                        },
                        cookie_usage: {
                            title: '5. Cookie 的使用',
                            content: '我们仅使用维持服务运行所必需的 Cookie：',
                            items: [
                                '认证 Cookie：用于在您登录后保持登录状态。',
                                '安全 Cookie：用于防止 CSRF 攻击等安全风险。'
                            ]
                        },
                        your_rights: {
                            title: '6. 您的权利',
                            content: '您可以随时联系我们行使您的权利：查询、更正或彻底删除您的账户及所有相关数据。一旦删除，数据将无法恢复。'
                        },
                        contact_us: {
                            title: '7. 联系我们',
                            content: '如果您对本隐私政策有任何疑问，或希望行使数据权利，请联系：',
                            email: 'support@codefe.cn'
                        },
                        footer_note: '我们承诺持续改进隐私保护措施，为您提供安全可靠的服务体验。'
                    },
                    terms_of_service: {
                        title: '服务条款',
                        last_updated: '最后更新日期：2025年12月19日',
                        introduction: {
                            title: '1. 导言',
                            content: '欢迎访问 CodeFE（以下简称"本服务"）。本服务由个人开发者运营，涵盖主域名 codefe.cn 及其所有子域名（包括但不限于 poetry.codefe.cn, games.codefe.cn, wealth.codefe.cn 等）。',
                            agreement: '使用本服务即表示您同意遵守以下条款。如果您不同意这些条款，请停止使用本服务。'
                        },
                        account_security: {
                            title: '2. 账户与安全',
                            content: '在使用我们的部分服务（如 Poetry 诗歌平台、Wealth 记账服务）时，您可能需要注册账户。',
                            responsibilities: [
                                '您有责任妥善保管您的账户密码。',
                                '对于因密码泄露导致的任何损失，CodeFE 不承担法律责任。',
                                '您同意仅提供真实、准确的注册信息（如电子邮箱）。'
                            ]
                        },
                        user_conduct: {
                            title: '3. 用户行为规范',
                            content: '本服务运行于中国大陆境内的腾讯云服务器，您在使用本服务时必须严格遵守中国法律法规。严禁发布或存储以下内容：',
                            prohibited_content: [
                                '违反宪法确定的基本原则的；',
                                '危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；',
                                '散布谣言，扰乱社会秩序，破坏社会稳定的；',
                                '散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；',
                                '包含恶意代码、病毒、爬虫脚本，试图破坏网站稳定性的内容。'
                            ],
                            consequence: '一旦发现上述违规行为，我们要么封禁您的账户，要么向相关监管部门报告，且不退还任何数据。'
                        },
                        service_changes: {
                            title: '4. 服务变更与免责声明',
                            content: '本服务按"原样"提供。作为个人开发者项目，尽管我们会尽力保障数据安全（包括每日异地备份机制），但我们不承诺服务能够 100% 不间断运行，也不对因不可抗力（如服务器硬件故障、网络攻击、云服务商故障）导致的数据丢失承担赔偿责任。'
                        },
                        intellectual_property: {
                            title: '5. 知识产权',
                            content: '除非另有说明，本网站的代码、设计、Logo 以及 CodeFE 原创内容归开发者所有。用户在平台上创作的内容（如用户发布的诗歌、评论）版权归用户所有，但用户授予 CodeFE 在本平台范围内展示、传播的权利。'
                        },
                        applicable_law: {
                            title: '6. 适用法律',
                            content: '本协议的订立、执行和解释及争议的解决均应适用中华人民共和国法律。'
                        },
                        contact: {
                            title: '联系我们',
                            content: '如有疑问，请通过邮件联系我们：'
                        },
                        footer_note: '请仔细阅读并理解本服务条款。使用本服务即表示您同意遵守所有条款和条件。'
                    }
                }
            }
        }
    });

export default i18n;
