import { useTheme } from "@/components/theme-provider";

// 获取当前实际的主题（考虑system主题）
const getCurrentTheme = (theme) => {
    if (theme === "system") {
        return globalThis.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return theme;
};

export function Logo({ className = "w-full h-10", alt = "CodeFE" }) {
    const { theme } = useTheme();

    const currentTheme = getCurrentTheme(theme);
    const logoPath = currentTheme === "dark" ? "/logo_dark.svg" : "/logo_light.svg";

    return (
        <img
            className={className}
            src={logoPath}
            alt={alt}
        />
    );
}
