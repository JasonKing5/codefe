import { useTranslation } from "react-i18next";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="py-24 container mx-auto px-4">
            <motion.div
                className="mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">{t('nav.ecosystem')}</h2>
                <p className="text-lg text-muted-foreground">{t('projects.subtitle')}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {projects.map((project, index) => (
                    <motion.a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="p-7 flex gap-5">
                                {/* Thumbnail */}
                                <div className="shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden bg-muted">
                                    <img
                                        src={project.image}
                                        alt={t(`${project.translationKey}.title`)}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0 flex flex-col">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-xl font-bold">
                                            {t(`${project.translationKey}.title`)}
                                        </h3>
                                        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                        {t(`${project.translationKey}.description`)}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs bg-secondary/80 text-secondary-foreground border-0">
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
