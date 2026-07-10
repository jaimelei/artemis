import type { SVGProps } from 'react';

export function BookIcon({
    className,
    ...props
}: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
            {...props}
        >
            <path d="M16 7S9 1 2 6v22c7-5 14 0 14 0s7-5 14 0V6c-7-5-14 1-14 1m0 0v21" />
        </svg>
    );
}

export default BookIcon;