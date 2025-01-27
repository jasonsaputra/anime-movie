import Header from "../components/AnimeList/Header";
import Banner from "../components/Utilities/Banner"
import AnimeList from "../components/AnimeList";
import SidebarAnimeList from "../components/AnimeList/SidebarAnimeList"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../services/api-services";

const date = new Date();
const fullDay = date.toLocaleDateString("en-US", { weekday: "long" });

const Page = async () => {
  
  // get top anime
  const topAnime = await getAnimeResponse("top/anime", "limit=12");

  // get recommended anime
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 4)

  //get random anime
  const randomAnimeResponse = await getAnimeResponse("random/anime", "");
  const randomAnime = { data: [randomAnimeResponse.data] };

  // get side anime list
  const sidebarAnime = await getAnimeResponse(
    "schedules",
    `filter=${fullDay}&sfw=true`
  );

  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-6">
      {/* Left */}
      <div>
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
      </div>

      {/* Right */}
      <aside className="w-full lg:max-w-[350px] flex-shrink-0">
        <section>
          <Header title="Airing Today" />
          <SidebarAnimeList api={sidebarAnime} />
        </section>
      </aside>
    </div>
  );
};

export default Page;
