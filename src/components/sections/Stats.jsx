import { motion } from "framer-motion";

const stats = [
    { value: "5+", label: "Active Projects" },
    { value: "10k+", label: "Lines of Code" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Global Access" },
];

export function Stats() {
    return (
        <section className="py-12 border-y border-border/40 bg-card/20 backdrop-blur">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                        >
                            <div className="text-4xl md:text-5xl font-black bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
