import { useTranslation } from "react-i18next";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="py-24 container mx-auto px-4">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('nav.ecosystem')}</h2>
                <p className="text-lg text-muted-foreground">{t('hero.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {projects.map((project, index) => (
                    <motion.a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block h-full"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="relative h-64 md:h-80 overflow-hidden rounded-3xl border border-border/50 bg-card shadow-lg transition-all duration-300 hover:shadow-2xl">
                            {/* Background Image - 默认清晰，悬停时轻微放大 */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />

                            {/* 渐变遮罩层 - 默认半透明 */}
                            <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-30 transition-opacity duration-500`} />

                            {/* 底部遮罩层 - 默认显示，悬停时虚化 */}
                            <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-linear-to-t from-black/60 via-black/30 to-transparent backdrop-blur-none group-hover:backdrop-blur transition-all duration-500" />

                            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                                <div className="flex justify-between items-start mb-auto">
                                    {/* Badge or Icon */}
                                    {project.status === 'coming-soon' ? (
                                        <Badge variant="outline" className="border-yellow-500/50 text-yellow-500 bg-black/70 backdrop-blur-md shadow-lg">
                                            {t('projects.coming_soon')}
                                        </Badge>
                                    ) : (
                                        <div className="bg-black/70 backdrop-blur-md rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                                            <ExternalLink className="w-5 h-5 text-white" />
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                                        {t(`${project.translationKey}.title`, { defaultValue: project.title })}
                                    </h3>
                                    <p className="text-white/90 line-clamp-2 text-lg drop-shadow">
                                        {t(`${project.translationKey}.description`, { defaultValue: project.description })}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="bg-black/60 backdrop-blur border-0 text-white/90 shadow-lg">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
