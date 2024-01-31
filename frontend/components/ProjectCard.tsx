// ProjectCard.js

import LinkingArrow from "./icons/LinkingArrow";

// Define prop types for ProjectCard
type ProjectCardProps = {
  year: string;
  title: string;
  link: string;
  description: string;
  stack: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  year,
  title,
  link,
  description,
  stack,
}) => {
  return (
    <div className="pt-7">
      <div className="flex pb-2">
        <div className="font-medium text-gray-600 w-32 flex-shrink-0">
          {year}
        </div>
        <div className="flex-col">
          <div className="flex w-100 group ">
            <div className="flex mr-1 ">
              <a href={link} className="font-medium group-hover:underline">
                {title}
              </a>
            </div>
            <LinkingArrow />
          </div>
          <div className="mt-2.5 font-light">{description}</div>
          <div className="font-medium mt-2">{stack}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
