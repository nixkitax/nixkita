import Image from "next/image";
import Link from "next/link";
import siteMetadata from "@/data/siteMetaData";
import siteMetaData from "@/data/siteMetaData";
import { RoughNotation } from "react-rough-notation";
import LinkingArrow from "./icons/LinkingArrow";
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
          <div className="pt-7">
            <div className="flex pb-2">
              <div className="font-medium text-gray-600 w-32 flex-shrink-0">
                {" "}
                2024{" "}
              </div>
              <div className="flex-col">
                <div className="flex w-100 group ">
                  <div className="flex mr-1 ">
                    <a
                      href={"https://github.com/nixkitax/circom-schnorr-verify"}
                      className="font-medium group-hover:underline"
                    >
                      Schnorr Signature Verification in Circom
                    </a>
                  </div>
                  <LinkingArrow />
                </div>
                <div className="mt-2.5 font-light">
                  This project aims to develop a command-line tool capable of
                  generating cryptographic key pairs utilizing the Schnorr
                  algorithm. The tool facilitates the signing of messages using
                  these keys and, notably, can create zero-knowledge proofs
                  through circuit implementations for verifying cryptographic
                  operations without disclosing sensitive information.
                  <div className="font-medium mt-2">Circom • JS • zk-SNARK</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-7">
            <div className="flex pb-2">
              <div className="font-medium text-gray-600 w-32 flex-shrink-0">
                {" "}
                2024{" "}
              </div>
              <div className="flex-col">
                <div className="flex w-100 group ">
                  <div className="flex mr-1 ">
                    <a
                      href={
                        "https://gitlab.com/bicocca_projects/2023_assignment3_landmarks"
                      }
                      className="font-medium group-hover:underline"
                    >
                      Landmarks
                    </a>
                  </div>
                  <LinkingArrow />
                </div>
                <div className="mt-2.5 font-light">
                  The "Landmarks" project, developed using Java, JPA, Hibernate,
                  and the Spark framework, focuses on creating a backend for a
                  social application. It allows users to save points of interest
                  globally, implementing CRUD operations for entities such as
                  User and Landmark. The architecture follows the MVC pattern
                  for modularity and scalability.
                  <div className="font-medium mt-2">
                    Java • JPA • Hibernate • Spark Framework • PostgreSQL
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-7">
            <div className="flex pb-2">
              <div className="font-medium text-gray-600 w-32 flex-shrink-0">
                {" "}
                2023{" "}
              </div>
              <div className="flex-col">
                <div className="flex w-100 group ">
                  <div className="flex mr-1 ">
                    <a href={"/"} className="font-medium group-hover:underline">
                      Full Stack Developer - Software Project Development Lab at
                      HFarm
                    </a>
                  </div>
                  <LinkingArrow />
                </div>
                <div className="mt-2.5 font-light">
                  Designed and implemented a Dockerized project showcasing a web
                  application utilizing Flask as the frontend and FastAPI as the
                  backend.
                  <div className="font-medium mt-2">
                    Flask • Docker • FastAPI
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-7">
            <div className="flex pb-2">
              <div className="font-medium text-gray-600 w-32 flex-shrink-0">
                {" "}
                2022{" "}
              </div>
              <div className="flex-col">
                <div className="flex w-100 group ">
                  <div className="flex mr-1 ">
                    <a
                      href={"https://github.com/nixkitax/circom-schnorr-verify"}
                      className="font-medium group-hover:underline"
                    >
                      gorillax
                    </a>
                  </div>
                  <LinkingArrow />
                </div>
                <div className="mt-2.5 font-light">
                  Designed a tool for retrieving and storing statistics about
                  Twitch streamers, particularly viewers per hour. Valuable for
                  use in data analytics studies.
                  <div className="font-medium mt-2">Python</div>
                </div>
              </div>
            </div>
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
