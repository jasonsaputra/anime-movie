import { getAnimeResponse } from "@/services/api-services";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { notFound } from "next/navigation";

const Page = async ({ params }) => {
  const { keyword } = await params;
  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);
  if (searchAnime.data.length === 0) {
    notFound();
  }

  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${decodedKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
