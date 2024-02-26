import Work from "@/components/Work"
import { getAllWorks } from "@/libs/getter";
import { DataProps } from "@/types/WorkTypes";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Previous Work - Portfolio",
  description: "Explore a collection of my work that reflects the diverse challenges I've taken on and the solutions I've developed."
}

export default async function Page() {
  const datas: DataProps[] = await getAllWorks()

  return (
    <main>
      <Work datas={datas} />
    </main>
  )
}
