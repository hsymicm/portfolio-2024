import { FC } from "react"
import Image from "next/image"
import Button from "@/components/Button"
import RouterButton from "@/components/RouterButton"
import { urlFor } from "@/libs/imageUrlBuilder"
import { cn } from "@/libs/cn"

import { formatDate } from "@/libs/formatDate"
import { ProjectCardProps } from "@/types/WorkTypes"

const ProjectCard: FC<ProjectCardProps> = ({ data, priority = false }) => {
  return (
    <article
      className={cn(
        priority ? "flex-col sm:flex-row sm:col-span-2 sm:min-h-[350px]" : "flex-col",
        "flex overflow-hidden bg-primary/50 rounded-2xl border-[1px] border-white/20 backdrop-blur-lg backdrop-brightness-75"
      )}
    >
      <div className={cn(priority ? "w-full sm:w-1/2 sm:max-h-min" : "w-full")}>
        <Image
        className="w-full h-full object-cover object-center"
          width={1440}
          height={900}
          src={priority ? urlFor(data?.cover).fit("fill").url() : urlFor(data?.cover).width(1440).height(900).fit("fill").url()}
          alt={`${data?.title} Image`}
          placeholder="blur"
          blurDataURL={data?.cover.asset.metadata.lqip}
        />
      </div>
      <section className={cn("p-6 flex flex-col justify-between h-full gap-8", priority ? "w-full sm:w-1/2" : "w-full")}>
        <div>
          <h2 className="text-2xl font-serif text-white mb-2">{data?.title}</h2>
          <p className="text-sm font-thin text-white/80 mb-3">
            {formatDate(data.date)}
          </p>
          <p className="font-light text-white/80">{data?.description}</p>
          <ul
            id="tags"
            className="flex gap-2 flex-wrap font-light text-sm text-white/80 mt-3"
          >
            {data?.tags &&
              data.tags.map((tag) => (
                <li key={tag} className="bg-primary-light rounded-lg py-2 px-3">
                  {tag}
                </li>
              ))}
          </ul>
        </div>
        <div className="flex justify-between gap-4">
          {data?.url && (
            <Button
              href={data.url}
              className="flex gap-2 items-center h-10"
              variant="outline"
              size="small"
              includeIcon
              newTab
            >
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
          )}
          <RouterButton
            size="small"
            className="ml-auto flex items-center h-10"
            includeIcon
            path={`/work/${data?.slug.current}`}
          >
            Read More
          </RouterButton>
        </div>
      </section>
    </article>
  )
}

export default ProjectCard
