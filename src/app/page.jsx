import Header from "../components/AnimeList/Header";
import Banner from "../components/Utilities/Banner"
import AnimeList from "../components/AnimeList";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../services/api-services";

const Page = async () => {
  
  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 4)
  const randomAnimeResponse = await getAnimeResponse("random/anime", "");
  const randomAnime = { data: [randomAnimeResponse.data] };

  return (
    <>
      <section>
        {/* <Banner data={topAnime.data[0]} /> */}
        <Header title="Most Popular" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
      <section>
        <Header title="Random" />
        <AnimeList api={randomAnime} />
      </section>
    </>
  );
};

export default Page;
