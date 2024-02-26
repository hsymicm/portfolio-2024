import Header from "@/components/Header";
import TechStack from "@/components/TechStack";
import Work from "@/components/Work";
import { DataProps } from "@/types/WorkTypes";
import { getAllWorks } from "@/libs/getter";

export const revalidate = 3600;

export default async function Home() {
  const limit = 4;

  const datas: DataProps[] = await getAllWorks(limit)

  return (
    <>
      <Header />
      <main>
        <TechStack />
        <Work limit={limit} datas={datas}/>
      </main>
    </>
  );
}
