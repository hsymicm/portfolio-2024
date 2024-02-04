import { FC } from "react";
import Image from "next/image";
import Button from "@/components/Button";

interface Data {
  id: number;
  uid: string;
  image: string | any;
  title: string;
  date: string;
  body: string;
}

interface ProjectCardProps {
  data: Data;
}

const ProjectCard: FC<ProjectCardProps> = ({ data }) => {
  return (
    <article className="flex flex-col overflow-hidden bg-primary/50 rounded-2xl border-[1px] border-white/20 backdrop-blur-lg backdrop-brightness-75">
      <Image className="" src={data.image} alt="Dummy Image" />
      <section className="p-6">
        <h2 className="text-2xl font-serif text-white mb-[2px]">
          {data.title}
        </h2>
        <p className="text-sm font-thin text-white/60 mb-3">{data.date}</p>
        <p className="text-sm font-thin text-white/80 leading-5">{data.body}</p>
        <section className="flex justify-between gap-4 mt-5">
          <Button className="flex gap-2 items-center" variant="outline" size="small" includeIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width={18}
              height={18}
            >
              <path
                fillRule="evenodd"
                d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                clipRule="evenodd"
              />
            </svg>
            Visit
          </Button>
          <Button size="small" includeIcon>Read More</Button>
        </section>
      </section>
    </article>
  );
};

export default ProjectCard;
