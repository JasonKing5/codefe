import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Hero() {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/3 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,white,transparent)]" />
            </div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-tight mb-6"
                    >
                        {t('hero.title_prefix')} <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {t('hero.title_highlight')}
                        </span>
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" className="h-12 px-8 text-lg rounded-full" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            {t('hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full" asChild>
                            <a href="https://github.com/JasonKing5" target="_blank" rel="noreferrer">GitHub</a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Scroll down"
            >
                <ChevronDown className="h-6 w-6" />
            </motion.button>
        </section>
    );
}
