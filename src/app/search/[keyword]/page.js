import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { notFound } from "next/navigation";

const Page = async ({ params }) => {
  const { keyword } = await params
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  const searchAnime = await response.json();

  if (searchAnime.data.length === 0) {
    notFound();
  }

  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${keyword}`} />
        <AnimeList api={searchAnime}/>
      </section>
    </>
  );
};

export default Page
