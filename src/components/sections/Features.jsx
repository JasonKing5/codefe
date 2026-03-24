import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Zap, Shield, Globe, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Features() {
    const { t } = useTranslation();

    const features = [
        {
            icon: Zap,
            iconColor: "text-yellow-500",
            iconBg: "bg-yellow-500/10",
            title: t('features.performance.title'),
            desc: t('features.performance.desc')
        },
        {
            icon: Shield,
            iconColor: "text-green-500",
            iconBg: "bg-green-500/10",
            title: t('features.security.title'),
            desc: t('features.security.desc')
        },
        {
            icon: Globe,
            iconColor: "text-blue-500",
            iconBg: "bg-blue-500/10",
            title: t('features.global.title'),
            desc: t('features.global.desc')
        },
        {
            icon: Cpu,
            iconColor: "text-purple-500",
            iconBg: "bg-purple-500/10",
            title: t('features.modern.title'),
            desc: t('features.modern.desc')
        }
    ];

    return (
        <section id="features" className="py-24 bg-background/50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">{t('features.title')}</h2>
                    <p className="text-xl text-muted-foreground">{t('features.desc')}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={`h-full ${index === 0 || index === 3 ? 'md:col-span-2' : 'md:col-span-1'}`}
                        >
                            <Card className="h-full min-h-[280px] flex flex-col justify-center bg-card/40 backdrop-blur border-muted/30 hover:bg-card/60 transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="absolute top-4 right-6 text-6xl font-black text-primary/5 select-none">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <CardHeader>
                                    <div className={`w-16 h-16 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold mb-2">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg text-muted-foreground leading-relaxed">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
