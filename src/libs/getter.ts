import { client } from "@/libs/client"

const getAllWorks = async (limit?: number) => {
  const query: string = `*[_type == "project"]{
      slug{
        current
      },
      date,
      title,
      description,
      cover {
        asset -> {
          url,
          metadata {
            lqip
          }
        }
      },
      tags,
      url
    } | order(date desc)${limit ? ` [0...${limit}]` : ""}`

  return await client.fetch(query)
}

const getWorkDetail = async (slug: string) => {
  const query: string = `*[_type == "project" && slug.current == "${slug}"]{
      date,
      title,
      description,
      cover {
        asset -> {
          url,
          metadata {
            lqip
          }
        }
      },
      tags,
      url,
      body
    }[0]`

  return await client.fetch(query)
}

const getWorkShortDetail = async (slug: string) => {
  const query: string = `*[_type == "project" && slug.current == "${slug}"]{
      title,
      description
    }[0]`

  return await client.fetch(query)
}

export { getAllWorks, getWorkDetail, getWorkShortDetail }
