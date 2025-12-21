import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
                        v1.0.0 Now Live
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-6">
                        {t('hero.title_prefix')} <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {t('hero.title_highlight')}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                        {t('hero.subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="h-12 px-8 text-lg rounded-full" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            {t('hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full" asChild>
                            <a href="https://github.com/JasonKing5" target="_blank" rel="noreferrer">GitHub</a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
