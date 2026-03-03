import { Mail } from "lucide-react";

export default function FloatingContact() {
    return (
        <a
            href="mailto:prithvi99722@gmail.com"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 text-sm md:text-base bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl"
        >
            <Mail className="w-4 h-4 md:w-5 md:h-5" />
            Let&apos;s Connect
        </a>
    );
}
