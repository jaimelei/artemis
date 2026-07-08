import { MoonIcon } from '../../../assets/icons/MoonIcon';

export function BrandIntro() {
    return (
        <section className="bg-moon-ivory py-24 md:py-40 px-6">
            <div className="max-w-reading mx-auto text-center">
                <MoonIcon className="w-8 h-8 text-antique-gold/40 mx-auto mb-8" />
                <p className="font-sans text-lg md:text-xl text-ink-black leading-[1.75]">
                    Books, coffee, and moonlight — gathered under one roof. A quiet corner
                    for readers, thinkers, and anyone who needs a place to slow down.
                </p>
            </div>
        </section>
    );
}

export default BrandIntro;