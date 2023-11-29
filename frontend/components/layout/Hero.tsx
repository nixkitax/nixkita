import IgIcon from '../icons/IgIcon'
import RightArrowIcon from '../icons/RightArrowIcon'
import RightArrowIconLarge from '../icons/RightArrowIconLarge'
import LearnIcon from '../icons/LearnIcon'
import DiscoverIcon from '../icons/DiscoverIcon'
import { Space_Grotesk } from 'next/font/google'
import AFCLogo from '../icons/AFCLogo'

const space = Space_Grotesk({ subsets: ['latin'] })

const Hero = () => {
  return (
      <div className="px-4 mt-0 mb-0 pb-0 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 my-10">
       
        <h1 className="  font-mono mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-5xl dark:text-white">
          Discover, Learn and Secure!
        </h1>
        <p className="mb-8 text-lg font-mono text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          aFriendlyCracker is an innovative project focused on IT education, where we tackle complex
          news and concepts but make them easily understandable, making every topic
          accessible to all.
        </p>
      

        <div className="flex flex-col mt-20 md:flex-row gap-14 text-left md:max-w-full max-w-sm m-auto">
          <div className="">
            <div className="flex flex-row">
              <div className="p-1 mx-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-mono font-bold">News</h3>
                <p className="font-mono text-gray-500">Every weekend there will be news in the world of cybersecurity!</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-row">
              <div className="p-1 mx-2">
                <DiscoverIcon />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-mono font-bold">Discover</h3>
                <p className="font-mono text-gray-500">
                  Read about technologies you've never heard of and share them with your friends!
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-row">
              <div className="p-1 mx-2">
                <LearnIcon />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-mono font-bold">Learn</h3>
                <p className="font-mono text-gray-500">Learn computer science concepts in depth along with mathematics!</p>
              </div>
            </div>
          </div>
        </div>
      </div>  )
}

export default Hero