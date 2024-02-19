export interface DataProps {
  slug: { current: string }
  date: string
  title: string
  description: string
  cover: {
    asset: {
      url: string
      metadata: {
        lqip: string
      }
    }
  }
  tags: string[]
  url: string
  body?: any
}

export interface ProjectCardProps {
  data: DataProps,
  priority?: boolean,
}
