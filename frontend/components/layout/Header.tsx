import React from 'react'
import Link from 'next/link'
import siteMetaData from '@/data/siteMetaData'
import headerNavLinks from '@/data/headerNavLinks'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


const Header = () => {
  
  return (
    <header className="flex items-center justify-between py-10 px-10  ">
      <div>
        <Link href="/" aria-label={siteMetaData.nickname} >
          <div className="flex items-center justify-between">
            {typeof siteMetaData.headerTitle === 'string' ? (
              <div className=" h-6 text-2xl font-mono xl:block ">
                <RoughNotation type="underline" show={true}>{siteMetaData.nickname}</RoughNotation> | <RoughNotation type="bracket" show={false}>{siteMetaData.title}</RoughNotation>
              </div>
            ) : (
              siteMetaData.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
        {headerNavLinks
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title} 
            </Link>
          ))}
      </div>
    </header>
  )
}

export default Header