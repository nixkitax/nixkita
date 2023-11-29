import React from 'react';
import Link from 'next/link';
import siteMetaData from '@/data/siteMetaData';
import headerNavLinks from '@/data/headerNavLinks';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between py-4 sm:py-10 px-4 sm:px-10">
      <div className="mb-4 sm:mb-0">
        <Link href="/" aria-label={siteMetaData.nickname}>
          <div className="flex items-center justify-center sm:justify-between">
            {typeof siteMetaData.headerTitle === 'string' ? (
              <div className="text-center sm:text-left text-lg sm:text-2xl font-mono">
                <RoughNotation type="underline" show={true}>
                  {siteMetaData.nickname}
                </RoughNotation>{' '}
                |{' '}
                <RoughNotation type="bracket" show={false}>
                  {siteMetaData.title}
                </RoughNotation>
              </div>
            ) : (
              siteMetaData.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-2 sm:space-x-4">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="text-sm sm:text-base font-mono font-medium text-gray-900 dark:text-gray-100"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
