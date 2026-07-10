import { contactInfo } from '../../../data/siteMetadata';
import { MoonIcon } from '../../../assets/icons/MoonIcon';

export function AddressBlock() {
  const { street, city, state, zip } = contactInfo.address;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <MoonIcon className="w-5 h-5 text-antique-gold flex-shrink-0" />
        <h3 className="font-serif text-lg text-ink-black">
          The Crescent Annex
        </h3>
      </div>
      
      <address className="not-italic font-sans text-base text-walnut-brown leading-relaxed">
        <p>{street}</p>
        <p>{city}, {state} {zip}</p>
      </address>

      <div className="font-sans text-sm text-walnut-brown/80 space-y-2 border-t border-antique-gold/20 pt-6">
        <p>
          <span className="font-medium">Letters:</span>{' '}
          <a 
            href={`mailto:${contactInfo.email}`}
            className="text-antique-gold hover:underline focus:outline-none focus:underline"
          >
            {contactInfo.email}
          </a>
        </p>
        <p>
          <span className="font-medium">Social:</span>{' '}
          <a 
            href={contactInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-antique-gold hover:underline focus:outline-none focus:underline"
          >
            {contactInfo.instagram}
          </a>
        </p>
      </div>
    </div>
  );
}

export default AddressBlock;
