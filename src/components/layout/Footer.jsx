import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
    const { t } = useTranslation();
    
    return (
        <footer className="bg-background border-t border-border/40 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                            <Logo />
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t('footer.slogan')}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">{t('footer.ecosystem')}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="https://poetry.codefe.cn" className="hover:text-primary transition-colors">{t('footer.poetry')}</a></li>
                            <li><a href="https://hm.codefe.cn" className="hover:text-primary transition-colors">{t('footer.hmxy')}</a></li>
                            <li><a href="https://firebox.codefe.cn" className="hover:text-primary transition-colors">{t('footer.firebox')}</a></li>
                            <li><a href="https://blog.codefe.cn" className="hover:text-primary transition-colors">{t('footer.blog')}</a></li>
                            {/* <li><a href="https://games.codefe.cn" className="hover:text-primary transition-colors">Games</a></li> */}
                            {/* <li><a href="https://wealth.codefe.cn" className="hover:text-primary transition-colors">Wealth</a></li> */}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">{t('footer.resources')}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="https://blog.codefe.cn" className="hover:text-primary transition-colors">{t('footer.documentation')}</a></li>
                            <li><a href="https://github.com/JasonKing5" className="hover:text-primary transition-colors">GitHub</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">{t('footer.legal')}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                                    {t('footer.privacy_policy')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-of-service" className="hover:text-primary transition-colors">
                                    {t('footer.terms_of_service')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 text-sm text-muted-foreground">
                    <span>{t('footer.icp')}<a href="https://beian.mit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">豫ICP备2022004823号-1</a></span>
                    <span>&copy; {new Date().getFullYear()} CodeFE. {t('footer.rights_reserved')}</span>
                </div>
            </div>
        </footer>
    );
}
