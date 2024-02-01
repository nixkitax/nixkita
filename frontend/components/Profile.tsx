"use client";
import Image from "next/image";
import Link from "next/link";
import siteMetadata from "@/data/siteMetaData"; // Remove duplicates
import { RoughNotation } from "react-rough-notation";
import ProjectCard from "./ProjectCard";
import EducationCard from "./EducationCard";
import { motion, useScroll, useSpring } from "framer-motion";

const Profile = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="flex justify-center w-full m-auto h-screen">
      <motion.div className="progress-bar bg-black" style={{ scaleX }} />

      <div className="p-8 w-full max-w-xl ">
        <div className="flex mb-4 justfy-center mt-8 sm:mb-0">
          <Link href="/" aria-label={siteMetadata.nickname}>
            <div className="flex justify-center  items-center sm:justify-between">
              {typeof siteMetadata.headerTitle === "string" ? (
                <div className="flex justify-center text-center sm:text-left text-lg sm:text-2xl font-mono">
                  <RoughNotation
                    type="underline"
                    show={true}
                    animationDelay={1000}
                  >
                    <div className="flex justify-center text-center">
                      {siteMetadata.nickname}
                    </div>
                  </RoughNotation>
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>
        <div className="flex items-center mt-8">
          <div className="rounded-full overflow-hidden mr-4">
            <Image
              src="/static/images/avatar.png"
              alt="avatar"
              width={100}
              height={100}
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
            My name is Nicol, and I am a passionate technology enthusiast
            currently pursuing my Master's degree in Computer Science at the
            University of Milano-Bicocca. I was born in Rome, and I continued my
            studies in Milan, Italy. From a young age, I have had a natural
            inclination towards the world of technology and computers. My
            hobbies include playing esports online.
          </p>
        </div>
        <div>
          <h1 className="pt-10 font-medium"> Projects </h1>
          <div>
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
              title="Full Stack Development - Wine Catalog Application"
              link="/"
              description="Developed and deployed a comprehensive wine catalog application using Docker, featuring advanced search functionalities for wine enthusiasts. The project utilized Flask for the frontend and FastAPI for the backend, ensuring a seamless and responsive user experience."
              stack="Flask • Docker • FastAPI"
            />
          </div>
        </div>
        <div>
          <h1 className="pt-10 font-medium"> Education </h1>
          <EducationCard
            year="2023 - present"
            istitute="Università degli Studi di Milano - Bicocca"
            link="/"
            description="Master’s Degree in Computer Science"
            stack="Machine Learning • Theory of Computation • Concurrent Models • Software Development Process"
          />
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
