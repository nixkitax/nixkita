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
    <section className="bg-white dark:bg-gray-950 pt-10">
      <div className="flex justify-center items-center">
      <svg width="150" viewBox="0 0 535 535" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      className="fill-black dark:fill-slate-200"
      d="M318.494 3.20681C317.691 3.74317 313.545 6.29089 309.131 8.70453C304.717 10.9841 300.571 13.3977 299.769 14.0682C299.1 14.6045 295.087 16.8841 291.075 19.0296C287.062 21.3091 281.311 24.3932 278.369 26.1364C275.426 27.8795 270.611 30.5613 267.803 32.0363C264.86 33.6454 260.179 36.9977 257.37 39.6795L252.287 44.5068V64.7545C252.287 77.7614 251.753 85.2705 250.816 85.8068C249.613 86.6114 224.869 74.4091 141.275 31.9023C134.989 28.8182 128.168 26.1364 126.028 26.1364C121.079 26.1364 61.6937 59.7932 56.745 65.425L53 69.5818V248.057V426.398L56.0763 430.018C59.6875 434.443 55.14 432.03 136.192 473.195C184.61 497.734 205.208 507.523 208.418 507.523C212.43 507.523 216.175 505.914 228.881 498.941C231.155 497.734 233.563 496.795 234.499 496.795C235.435 496.795 252.154 504.975 271.815 514.898C297.228 527.77 308.864 533 312.208 533C315.685 533 324.513 528.575 347.785 515.434C364.771 505.78 380.019 496.259 381.624 494.248L384.7 490.761V418.62C384.7 360.023 384.968 346.345 386.439 345.809C387.509 345.407 391.655 347.016 395.935 349.295C407.571 355.33 409.042 355.195 430.576 342.725C433.251 341.25 437.665 338.702 440.206 337.227C442.748 335.752 447.027 333.339 449.569 331.864C452.11 330.389 456.39 327.975 458.931 326.5C461.473 325.025 465.886 322.611 468.695 321.002C471.37 319.527 475.249 316.443 477.389 314.03L481 309.873V196.432V83.125L477.924 79.5045C476.319 77.3591 466.823 71.5932 456.256 66.2295C445.958 61 413.322 44.3727 383.764 29.3545C341.499 7.89999 328.926 1.99998 324.78 1.99998C321.971 1.99998 319.162 2.53636 318.494 3.20681ZM356.078 49.0659C415.73 79.3705 432.85 88.3545 432.85 89.1591C432.85 89.9636 409.042 103.909 407.571 103.909C406.635 103.909 348.721 74.8114 316.22 58.05C307.526 53.625 300.437 49.4682 300.437 49.0659C300.437 47.9932 323.175 34.45 325.315 34.3159C326.118 34.1818 340.028 40.8864 356.078 49.0659ZM180.062 85.4045C209.487 100.289 233.429 113.027 233.161 113.832C232.76 115.039 224.601 120.402 220.188 122.28C219.118 122.682 216.576 124.291 214.57 125.632C212.697 126.973 210.022 128.045 208.819 128.045C207.481 128.045 195.577 122.548 182.202 115.709C168.961 109.005 145.421 97.0705 130.04 89.2932C114.659 81.5159 101.819 74.4091 101.551 73.6046C101.284 72.8 102.086 71.7272 103.424 71.325C104.761 70.9227 108.506 68.9114 111.85 66.9C124.155 59.525 125.894 58.4523 126.295 58.4523C126.429 58.3182 150.637 70.5204 180.062 85.4045ZM338.556 103.105L392.056 130.325L392.457 221.775C392.591 271.925 392.324 313.091 391.655 313.091C391.12 313.091 389.248 312.152 387.643 310.945C385.101 309.202 384.7 307.727 384.7 299.145C384.7 291.368 384.165 288.552 382.025 285.87C379.618 282.786 370.522 277.959 305.921 245.107C293.75 239.073 283.451 233.307 282.783 232.368C281.579 230.357 281.311 81.1136 282.515 77.8954C282.916 76.6886 283.719 75.75 284.254 75.75C284.655 75.8841 309.131 88.0864 338.556 103.105ZM109.844 112.625C121.614 118.659 145.288 130.727 162.408 139.443L193.437 155.266V311.348C193.437 397.032 192.902 467.295 192.367 467.295C191.297 467.295 160.803 452.009 108.239 425.191L82.425 411.916V256.773C82.425 171.491 82.8263 101.361 83.2275 100.825C84.2975 99.7523 85.635 100.423 109.844 112.625ZM451.307 206.489L450.906 296.33L438.467 303.436C431.646 307.459 425.226 310.409 424.156 309.873C422.417 309.202 422.15 297.939 422.15 220.97C422.15 172.43 422.685 131.934 423.354 130.995C423.889 130.057 425.895 128.448 427.634 127.509C430.71 125.9 436.194 122.682 445.556 117.318C447.83 115.977 449.97 115.307 450.639 115.843C451.174 116.38 451.441 157.143 451.307 206.489ZM251.485 142.259C252.421 144.941 252.555 445.573 251.485 449.193C251.084 450.802 245.868 454.557 238.244 458.848C231.423 462.736 225.404 465.955 225.002 465.955C224.601 465.955 224.334 395.825 224.468 310.141L224.869 154.327L236.906 147.355C243.594 143.466 249.345 140.248 249.746 140.114C250.281 140.114 251.084 141.052 251.485 142.259ZM286.528 268.707C287.196 269.377 298.699 275.411 312.208 282.25C325.583 289.089 336.55 295.123 336.55 295.793C336.55 296.866 313.545 310.409 311.539 310.409C309.265 310.409 283.853 297 282.783 295.257C281.579 293.245 281.311 269.645 282.649 268.439C283.853 267.232 284.923 267.232 286.528 268.707ZM355.275 399.311V476.145L348.32 480.302C336.283 487.543 331.2 490.091 329.194 490.091C327.455 490.091 327.188 480.034 327.188 413.793C327.188 354.391 327.589 337.227 328.926 336.155C329.729 335.484 334.143 332.802 338.556 330.389C342.97 328.109 348.053 325.025 349.925 323.684C351.798 322.477 353.67 321.673 354.205 321.941C354.874 322.343 355.275 357.207 355.275 399.311ZM291.075 334.545L296.425 337.227V415C296.425 457.775 296.024 492.773 295.489 492.773C293.884 492.773 267 478.827 267 478.023C267 477.62 269.408 475.877 272.35 474C281.98 468.1 281.713 469.843 281.713 397.97C281.713 362.57 282.114 333.205 282.649 332.802C283.986 331.327 285.457 331.73 291.075 334.545Z"
      fill="black"
    />
  </svg>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 my-10">
       
        <a
          href="/blog"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <span className="text-xs bg-primary-400 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>{' '}
          <span className="text-sm font-medium">Look at our latest post!</span>
          <RightArrowIcon />
        </a>
        <h1 className="  font mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Discover, Learn and Secure!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          This is an innovative project focused on cybersecurity education, where we tackle complex
          news and concepts but make them easily understandable, making online security a topic
          accessible to all ૮₍ • ᴥ • ₎ა
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="/about"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-400 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Learn more
            <RightArrowIconLarge />
          </a>
          <a
            href="https://www.instagram.com/afriendlycracker/"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <div className="mr-2">
              <IgIcon />
            </div>
            Join us on IG
          </a>
          
        </div>

        <div className="flex flex-col md:flex-row gap-14 text-left md:max-w-full max-w-sm m-auto">
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
                <h3 className="text-xl font-bold">News</h3>
                <p>Every weekend there will be news in the world of cybersecurity!</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-row">
              <div className="p-1 mx-2">
                <DiscoverIcon />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">Discover</h3>
                <p>
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
                <h3 className="text-xl font-bold">Learn</h3>
                <p>Learn computer science concepts in depth along with mathematics!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero