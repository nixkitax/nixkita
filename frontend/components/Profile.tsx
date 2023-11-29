import Image from 'next/image';
import Link from 'next/link';
import siteMetadata from '@/data/siteMetaData';
import { RoughNotation } from "react-rough-notation";

const Profile = () => {
  return (
    <div className="flex justify-center w-full m-auto h-screen cursor-pointer">
      <div className="p-8 w-full max-w-xl ">
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden mr-4">
            <Image
              src="/static/images/avatar.png"
              alt="avatar"
              width={130}
              height={130}
            />
          </div>
          <div>
            <h1 className="text-xl">{siteMetadata.author}      
            <span className="wave text-2xl mx-2">  👋🏻</span> </h1>
            <h2 className="text-m text-gray-600">
              <RoughNotation type="circle" show={true} animationDelay={1000}>
                Master's degree in Computer Science student
              </RoughNotation>
              </h2>
            <h2 className="text-xs pt-1">
              <Link href={siteMetadata.github}>github.com/nixkita</Link>
            </h2>
          </div>
        </div>
        <div>
          <h1 className="pt-10 font-medium"> About </h1>
          <p className="font-light pt-1"> 
          My name is Nicol, and I'm a passionate technology enthusiast currently pursuing my Master's 
          degree in Computer Science at the University of Milano-Bicocca. I was born in Rome then I 
          continued my studies in Milan, Italy, and from a young age, I had a natural inclination towards
           the world of technology and computers.
          </p>
        </div>
        <div>
          <h1 className="pt-10 font-medium"> Links </h1>
        </div>
      </div>
      
    </div>
  )
}

export default Profile