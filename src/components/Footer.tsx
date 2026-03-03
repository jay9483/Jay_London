import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative z-20 bg-[#0a0a0a] pt-24 pb-16 px-4 md:px-6 border-t border-white/10 text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center px-2">
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 md:mb-8 drop-shadow-lg max-w-full break-words">
                    Ready to collaborate?
                </h2>
                <a
                    href="mailto:prithvi99722@gmail.com"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-white/60 hover:text-white transition-colors mb-12 md:mb-16 border-b border-white/20 hover:border-white pb-2 max-w-full break-words"
                >
                    prithvi99722@gmail.com
                </a>

                <div className="flex gap-6">
                    <a
                        href="https://www.linkedin.com/in/prithvijayaprakash/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                    >
                        <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a
                        href="mailto:prithvi99722@gmail.com"
                        className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                    >
                        <Mail className="w-6 h-6 text-white" />
                    </a>
                </div>

                <p className="mt-24 text-white/30 text-sm font-mono">
                    © {new Date().getFullYear()} Prithvi Jayaprakash. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
