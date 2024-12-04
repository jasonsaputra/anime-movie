import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { notFound } from "next/navigation";

const Page = async ({ params }) => {
  const { keyword } = await params
  const decodedKeyword = decodeURI(keyword)

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`);
  const searchAnime = await response.json();

  if (searchAnime.data.length === 0) {
    notFound();
  }

  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${decodedKeyword}`} />
        <AnimeList api={searchAnime}/>
      </section>
    </>
  );
};

export default Page
