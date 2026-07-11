import { motion } from 'framer-motion';
import { MoonIcon } from '../../../assets/icons/MoonIcon';
import { useReducedMotion } from '../../../hooks/useReducedMotion';


export function BrandIntro() {
    const reduced = useReducedMotion();
    const EASE = [0.25, 0.1, 0.25, 1] as const;

    const anim = (delay: number) => ({
        initial: reduced ? false : { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-100px' },
        transition: reduced ? { duration: 0 } : { duration: 0.8, delay, ease: EASE },
    });

    return (
        <section className="bg-moon-ivory py-24 md:py-40 px-6">
            <div className="max-w-reading mx-auto text-center">
                <motion.div {...anim(0.1)} className="flex justify-center">
                    <MoonIcon className="w-8 h-8 text-antique-gold/40 mb-8" />
                </motion.div>
                <motion.p 
                    {...anim(0.3)}
                    className="font-sans text-lg md:text-xl text-ink-black leading-[1.75]"
                >
                    Books, coffee, and moonlight — gathered under one roof. A quiet corner
                    for readers, thinkers, and anyone who needs a place to slow down.
                </motion.p>
            </div>
        </section>
    );
}


export default BrandIntro;