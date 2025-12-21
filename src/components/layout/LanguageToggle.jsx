import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export function LanguageToggle() {
    const { i18n } = useTranslation()

    const toggleLanguage = () => {
        const current = i18n.language;
        i18n.changeLanguage(current === 'en' ? 'zh' : 'en');
    }

    return (
        <Button variant="ghost" size="icon" onClick={toggleLanguage} title={i18n.language === 'en' ? "Switch to Chinese" : "Switch to English"}>
            <Languages className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle language</span>
        </Button>
    )
}
