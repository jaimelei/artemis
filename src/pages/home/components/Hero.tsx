import { motion } from 'framer-motion';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { MoonIcon } from '../../../assets/icons/MoonIcon';

const EASE = [0.25, 0.1, 0.25, 1] as const;

export function Hero() {
    const reduced = useReducedMotion();

    /** Shared fade-up config for each text element — only the delay differs. */
    const fadeUp = (delay: number) => ({
        initial: reduced ? false : { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: reduced ? { duration: 0 } : { duration: 0.8, delay, ease: EASE },
    });

    return (
        <section className="relative min-h-[calc(100vh-60px)] flex items-center justify-center bg-midnight-navy overflow-hidden px-6">
            {/* Moonrise glow — rises and fades in behind the text on load */}
            <motion.div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        'radial-gradient(ellipse at center, rgba(184,147,90,0.12) 0%, transparent 60%)',
                    backgroundSize: '150% 150%',
                    backgroundRepeat: 'no-repeat',
                }}
                initial={reduced ? false : { backgroundPosition: '50% 120%', opacity: 0 }}
                animate={{ backgroundPosition: '50% 70%', opacity: 1 }}
                transition={reduced ? { duration: 0 } : { duration: 2, ease: EASE }}
            />

            <div className="relative z-10 text-center">
                <motion.div {...fadeUp(0.2)} className="flex justify-center mb-6">
                    <MoonIcon className="w-10 h-10 text-antique-gold" />
                </motion.div>

                <h1 className="flex flex-col items-center">
                    <motion.span
                        {...fadeUp(0.4)}
                        className="block font-serif text-5xl md:text-display text-moon-ivory"
                    >
                        Moonbound
                    </motion.span>
                    <motion.span
                        {...fadeUp(0.6)}
                        className="block font-serif text-2xl md:text-display-sm text-antique-gold mt-2"
                    >
                        Café, Artemis
                    </motion.span>
                </h1>

                <motion.p
                    {...fadeUp(0.8)}
                    className="font-sans text-base md:text-lg text-moon-ivory/70 max-w-md mx-auto mt-6"
                >
                    A hidden library café where visitors lose track of time beneath the moon.
                </motion.p>
            </div>

            {/* Scroll hint — fades/slides in on load, then loops a pulse */}
            <motion.div
                aria-hidden="true"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-moon-ivory/30 animate-pulse motion-reduce:hidden"
                initial={reduced ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduced ? { duration: 0 } : { duration: 0.8, delay: 1.2, ease: EASE }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </motion.div>
        </section>

    );
}

export default Hero;