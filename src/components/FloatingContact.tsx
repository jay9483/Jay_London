import { Mail } from "lucide-react";

export default function FloatingContact() {
    return (
        <a
            href="mailto:prithvi99722@gmail.com"
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl"
        >
            <Mail className="w-5 h-5" />
            Let&apos;s Connect
        </a>
    );
}
