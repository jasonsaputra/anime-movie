import Image from "next/image";
import Link from "next/link";

const SidebarAnimeList = ({ api }) => {

  return (
    <div className="h-max w-full shrink-0 flex flex-col gap-3 pl-4">
      {api.data?.map((anime, index) => {
        console.log(api.data)
        const airedYear = anime.aired.from ? new Date(anime.aired.from).getFullYear() : '';
        return(
          <Link key={index} href={`/anime/${anime.mal_id}`} className="flex cursor-pointer text-color-primary hover:text-color-accent transition-all">
            <Image
              src={anime.images.webp.large_image_url}
              alt={anime.images.jpg.large_image_url}
              width={64}
              height={100}
              className="object-cover rounded-lg aspect-[3/4]"
            />
            <section className="flex flex-col px-2 w-full">
                <div className="flex justify-between items-center p-2 md:text-xs text-xs text-color-disabled">
                    {airedYear}
                </div>
                <p className="font-medium text-md px-2 line-clamp-1">{anime.title}</p>
            </section>
          </Link>
        )
      })}
    </div>
  );
};

export default SidebarAnimeList;
