
// Using HeroIcons v2 - https://heroicons.com/
// All icons are MIT Licensed: https://github.com/tailwindlabs/heroicons/blob/master/LICENSE
import React from 'react'; // React import needed for JSX

export const HeartIconSolid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.218l-.022.012-.007.004-.004.001a.752.752 0 01-.704 0l-.004-.001z" />
  </svg>
);

export const TrashIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
  </svg>
);

export const CalendarDaysIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12 2.25c-.463 0-.91.034-1.355.1H12a.75.75 0 01.75.75v2.25c0 .414.336.75.75.75h2.25a.75.75 0 01.75.75v2.25H18a.75.75 0 01.75.75v2.25h1.5a.75.75 0 01.75.75V18a.75.75 0 01-.75.75h-2.25a.75.75 0 01-.75-.75v-2.25a.75.75 0 01-.75-.75V13.5H12a.75.75 0 01-.75-.75V10.5H9a.75.75 0 01-.75-.75V7.5a.75.75 0 01.75-.75h2.25V4.5a.75.75 0 01.75-.75h.75c.445.066.892.1 1.355.1H12zm0-1.5C6.477.75.75 6.477.75 12S6.477 23.25 12 23.25 23.25 17.523 23.25 12 17.523.75 12 .75z" clipRule="evenodd" />
  </svg>
);
export { ArrowRightCircleIcon } from './HeroIcons'; // Re-export from outline if needed
    