import Image from "next/image";
import Link from "next/link";
import siteMetadata from "@/data/siteMetaData";
import siteMetaData from "@/data/siteMetaData";
import { RoughNotation } from "react-rough-notation";
import ProjectCard from "./ProjectCard";
const Profile = () => {
  return (
    <div className="flex justify-center w-full m-auto h-screen cursor-pointer">
      <div className="p-8 w-full max-w-xl ">
        <div className="flex mb-4 justfy-center mt-8 sm:mb-0">
          <Link href="/" aria-label={siteMetaData.nickname}>
            <div className="flex justify-center  items-center sm:justify-between">
              {typeof siteMetaData.headerTitle === "string" ? (
                <div className="flex justify-center text-center sm:text-left text-lg sm:text-2xl font-mono">
                  <RoughNotation type="underline" show={true}>
                    <div className="flex justify-center text-center">
                      {siteMetaData.nickname}
                    </div>
                  </RoughNotation>
                </div>
              ) : (
                siteMetaData.headerTitle
              )}
            </div>
          </Link>
        </div>
        <div className="flex items-center mt-8">
          <div className="rounded-full overflow-hidden mr-4">
            <Image
              src="/static/images/avatar.png"
              alt="avatar"
              width={130}
              height={130}
            />
          </div>
          <div>
            <h1 className="text-2xl">
              {siteMetadata.author}
              <span className="wave text-xl mx-2"> </span>{" "}
            </h1>
            <h2 className="text-m text-gray-600">
              Master's degree in Computer Science student
            </h2>
            <h2 className="text-s pt-0 text-gray-800">
              <Link href={siteMetadata.github}>github.com/nixkita</Link>
            </h2>
          </div>
        </div>
        <div>
          <h1 className="pt-10 font-medium"> About </h1>
          <p className="font-light pt-1">
            My name is Nicol, and I'm a passionate technology enthusiast
            currently pursuing my Master's degree in Computer Science at the
            University of Milano-Bicocca. I was born in Rome then I continued my
            studies in Milan, Italy, and from a young age, I had a natural
            inclination towards the world of technology and computers. My
            hobbies are esports online, csgo for example.
          </p>
        </div>
        <div>
          <h1 className="pt-10 font-medium"> Projects </h1>
          <div>
            {/* Refactored using ProjectCard component */}
            <ProjectCard
              year="2024"
              title="Schnorr Signature Verification in Circom"
              link="https://github.com/nixkitax/circom-schnorr-verify"
              description="This project aims to develop a command-line tool capable of generating cryptographic key pairs utilizing the Schnorr algorithm."
              stack="Circom • JS • zk-SNARK"
            />

            <ProjectCard
              year="2024"
              title="Landmarks"
              link="https://gitlab.com/bicocca_projects/2023_assignment3_landmarks"
              description="The 'Landmarks' project, developed using Java, JPA, Hibernate, and the Spark framework, focuses on creating a backend for a social application."
              stack="Java • JPA • Hibernate • Spark Framework • PostgreSQL"
            />

            <ProjectCard
              year="2023"
              title="Full Stack Developer - Software Project Development"
              link="/"
              description="Designed and implemented a Dockerized project showcasing a web application utilizing Flask as the frontend and FastAPI as the backend."
              stack="Flask • Docker • FastAPI"
            />

            <ProjectCard
              year="2022"
              title="gorillax"
              link="https://github.com/nixkitax/circom-schnorr-verify"
              description="Designed a tool for retrieving and storing statistics about Twitch streamers, particularly viewers per hour."
              stack="Python"
            />
            {/* End of refactored code */}
          </div>
        </div>

        <div>
          <h1 className="pt-10 font-medium"> Links </h1>
          <div className="pt-7">
            <div className="flex pb-2">
              <div className="text-gray-600 w-32 "> Github </div>
              <div className=" w-100">
                {" "}
                <Link href={siteMetadata.github}>@nixkitax</Link>{" "}
              </div>
            </div>
            <div className="flex pb-2">
              <div className="text-gray-600 w-32"> Linkedin </div>
              <div className=" w-100">
                {" "}
                <Link href={siteMetadata.linkedin}> @nicolemanuele</Link>{" "}
              </div>
            </div>
            <div className="flex pb-2">
              <div className="text-gray-600 w-32"> Instagram </div>
              <div className="w-100">
                {" "}
                <Link href={siteMetadata.instagram}> @52nixkita </Link>{" "}
              </div>
            </div>
            <div className="flex pb-2">
              <div className="text-gray-600 w-32"> Steam </div>
              <div className=" w-100 ">
                {" "}
                <Link href={siteMetadata.steam}> @nixkita </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
