import { getWorkDetail, getWorkShortDetail } from "@/libs/getter"
import { DataProps } from "@/types/WorkTypes"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { cn } from "@/libs/cn"
import { urlFor } from "@/libs/imageUrlBuilder"
import { formatDate } from "@/libs/formatDate"
import { Metadata } from "next"

import BackgroundWrapper from "@/components/Wrapper/BackgroundWrapper"
import ForegroundWrapper from "@/components/Wrapper/ForegroundWrapper"
import ShinyStar from "@/components/Background/ShinyStar"

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const { title, description } = await getWorkShortDetail(slug)

  return {
    title: `${title} - Portfolio`,
    description,
  }
}

export default async function Page({ params }: Props) {
  const data: DataProps = await getWorkDetail(params.slug)

  return (
    <main className="px-[6%] md:px-[10%] xl:px-[16%] py-32 md:py-36 xl:py-44 text-white">
      <article
        className={cn(
          "mx-auto max-w-5xl md:mb-24",
          "prose prose-neutral prose-invert",
          "prose-md xl:prose-lg",
          "prose-h1:font-serif prose-h1:font-normal prose-h1:text-5xl md:prose-h1:text-6xl prose-h1:mb-2 prose-h1:leading-[128%]",
          "prose-h2:font-serif prose-h2:font-normal",
          "prose-h3:font-serif prose-h3:font-normal",
          "prose-blockquote:not-italic",
          "prose-img:rounded-2xl prose-img:mb-6 md:prose-img:mb-12 prose-img:border-[1px] prose-img:border-white/20"
        )}
      >
        <h1>{data?.title}</h1>
        <section className="flex flex-col-reverse gap-2 mt-4 mb-8 md:mb-14">
          <ul
              id="tags"
              className="not-prose flex gap-2 flex-wrap font-light text-sm text-white/80"
            >
              {data?.tags &&
                data.tags.map((tag) => (
                  <li key={tag} className="bg-primary-light rounded-lg py-2 px-3">
                    {tag}
                  </li>
                ))}
            </ul>
          <p className="not-prose italic font-light my-0">{`Developed in ${formatDate(
            data.date
          )}`}</p>
        </section>
        <Image
          className="w-full h-full object-cover object-center"
          width={800}
          height={800}
          src={urlFor(data?.cover).url()}
          alt={`${data?.title} Image`}
          placeholder="blur"
          blurDataURL={data?.cover.asset.metadata.lqip}
        />
        <PortableText value={data?.body} />
      </article>
      <ForegroundWrapper>
        <div className="absolute top-1/3 -left-[240px] w-[420px] bg-white/60 aspect-square rounded-full blur-[300px]" />
      </ForegroundWrapper>
      <BackgroundWrapper>
        <ShinyStar className="absolute -top-8 -right-2 md:right-36" size="md" />
        <ShinyStar className="absolute top-48 -right-10 md:right-12" size="sm" />
        <ShinyStar className="absolute top-1/4 left-4 md:left-12" size="sm" />
        <ShinyStar className="absolute top-1/2 left-12 md:left-24" size="sm" />
        <ShinyStar className="absolute top-1/3 right-12 md:right-24" size="sm" />
        <ShinyStar className="absolute top-2/3 -right-4 md:right-12" size="sm" />
        <div className="absolute -top-[240px] -right-[240px] w-[420px] bg-white/50 aspect-square rounded-full blur-[300px]" />
      </BackgroundWrapper>
    </main>
  )
}
