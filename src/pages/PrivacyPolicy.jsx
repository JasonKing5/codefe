import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
    const { t } = useTranslation();

    // Inline styles for animations
    const styles = `
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .animate-gradient {
            animation: gradient 6s ease infinite;
            background-size: 200% auto;
        }
        .section-hover {
            transition: all 0.3s ease;
        }
        .section-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 pt-28 pb-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    {/* Header with subtle animation */}
                <div className="text-center mb-16 relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 relative">
                        <span className="bg-linear-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                            {t('privacy_policy.title')}
                        </span>
                    </h1>
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/60 backdrop-blur-sm rounded-full border border-border/40">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="text-muted-foreground font-medium">
                            {t('privacy_policy.last_updated')}
                        </p>
                    </div>
                    {/* <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full"></div> */}
                </div>

                {/* Content with layered design */}
                <div className="relative">
                    {/* Background elements */}
                    <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-cyan-500/2 rounded-full blur-3xl"></div>

                    {/* Main content card */}
                    <div className="relative bg-gradient-to-br from-card/80 via-card/90 to-card border border-border/30 rounded-3xl p-10 md:p-14 shadow-2xl backdrop-blur-sm overflow-hidden">
                        {/* Subtle grid pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(120,119,198,0.03)_50%,transparent_51%)] bg-size-[40px_40px] -z-10"></div>

                        {/* Content wrapper */}
                        <div className="relative">
                            {/* Introduction */}
                            <div className="mb-10">
                                <p className="text-lg leading-relaxed text-foreground/90">
                                    {t('privacy_policy.intro.content')}
                                </p>
                            </div>

                            {/* Section 1 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-3">
                                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">1</span>
                                    {t('privacy_policy.information_collection.title')}
                                </h2>
                                <p className="text-foreground/80 mb-4">
                                    {t('privacy_policy.information_collection.content')}
                                </p>
                                <ul className="space-y-3">
                                    {t('privacy_policy.information_collection.items', { returnObjects: true }).map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                                            <span className="text-foreground/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Section 2 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-3">
                                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">2</span>
                                    {t('privacy_policy.data_collection_method.title')}
                                </h2>
                                <p className="text-foreground/80 mb-4">
                                    {t('privacy_policy.data_collection_method.content')}
                                </p>

                                <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-4">
                                    <p className="text-foreground/80 mb-3">
                                        {t('privacy_policy.data_collection_method.umami_description')}
                                    </p>
                                    <ul className="space-y-2">
                                        {t('privacy_policy.data_collection_method.umami_features', { returnObjects: true }).map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                                                <span className="text-foreground/80 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* Section 3 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-3">
                                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">3</span>
                                    {t('privacy_policy.data_storage.title')}
                                </h2>
                                <p className="text-foreground/80">
                                    {t('privacy_policy.data_storage.content')}
                                </p>
                            </section>

                            {/* Section 4 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-3">
                                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">4</span>
                                    {t('privacy_policy.information_usage.title')}
                                </h2>
                                <p className="text-foreground/80 mb-4">
                                    {t('privacy_policy.information_usage.content')}
                                </p>
                                <ul className="space-y-3">
                                    {t('privacy_policy.information_usage.items', { returnObjects: true }).map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                                            <span className="text-foreground/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Section 5 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-3">
                                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">5</span>
                                    {t('privacy_policy.cookie_usage.title')}
                                </h2>
                                <p className="text-foreground/80 mb-4">
                                    {t('privacy_policy.cookie_usage.content')}
                                </p>
                                <ul className="space-y-3">
                                    {t('privacy_policy.cookie_usage.items', { returnObjects: true }).map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                                            <span className="text-foreground/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Section 6 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-3">
                                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">6</span>
                                    {t('privacy_policy.your_rights.title')}
                                </h2>
                                <p className="text-foreground/80">
                                    {t('privacy_policy.your_rights.content')}
                                </p>
                            </section>

                            {/* Section 7 */}
                            <section className="pt-8 border-t border-border/50">
                                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-3">
                                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">7</span>
                                    {t('privacy_policy.contact_us.title')}
                                </h2>
                                <p className="text-foreground/80 mb-4">
                                    {t('privacy_policy.contact_us.content')}<br/>
                                    <strong>Email:</strong> <a href="mailto:support@codefe.cn" className="text-primary hover:underline">support@codefe.cn</a>
                                </p>
                            </section>

                            {/* Footer Note */}
                            <div className="mt-12 pt-8 border-t border-border/30 text-center">
                                <p className="text-muted-foreground text-sm">
                                    {t('privacy_policy.footer_note')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
