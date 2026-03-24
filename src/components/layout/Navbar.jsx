import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/layout/ModeToggle";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        // 如果当前不在首页，先导航到首页
        if (location.pathname !== '/') {
            navigate('/');
            // 等待页面加载后滚动到对应section
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            // 已经在首页，直接滚动
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { label: t('nav.home'), id: 'home' },
        { label: t('nav.features'), id: 'features' },
        { label: t('nav.ecosystem'), id: 'projects' },
        // { label: t('nav.about'), id: 'stats' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"}`}>
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <button
                    className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer flex gap-2 hover:opacity-80 transition-opacity"
                    onClick={() => {
                        if (location.pathname !== '/') {
                            navigate('/');
                        } else {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                    aria-label="Go to home"
                >
                    <Logo />
                    {/* CodeFE */}
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-lg px-4 py-2 cursor-pointer"
                        >
                            {item.label}
                        </button>
                    ))}
                    <a
                        href="https://github.com/JasonKing5"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-lg px-4 py-2 cursor-pointer"
                    >
                        {t('nav.github')}
                    </a>
                    <div className="flex items-center gap-2 pl-4 border-l">
                        <LanguageToggle />
                        <ModeToggle />
                    </div>
                </div>

                {/* Mobile Nav Toggle */}
                <div className="md:hidden flex items-center gap-2">
                    <LanguageToggle />
                    <ModeToggle />
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b shadow-lg p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-lg font-medium text-left py-3 border-b border-border/50 last:border-0 hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-lg px-4 cursor-pointer"
                        >
                            {item.label}
                        </button>
                    ))}
                    <a
                        href="https://github.com/JasonKing5"
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg font-medium text-left py-3 hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-lg px-4 cursor-pointer"
                    >
                        GitHub
                    </a>
                </div>
            )}
        </nav>
    );
}
