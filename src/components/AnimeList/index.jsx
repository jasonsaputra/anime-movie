import Image from "next/image";
import Link from "next/link";
import { Star } from "@phosphor-icons/react/dist/ssr";

const AnimeList = ({ api }) => {

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-4">
      {api.data?.map((anime, index) => {
        return(
          <Link key={index} href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
            <Image
              src={anime.images.webp.large_image_url}
              alt="..."
              width={350}
              height={350}
              className="object-cover rounded-lg aspect-[3/4]"
            />
            <div className="flex justify-between items-center p-2 md:text-xs text-xs text-color-disabled">
              {anime.score ? (
                <p className="flex gap-1">
                  <Star size={14} />
                  {anime.score}
                </p>
              ) : (
                <p></p>
              )}
              <p>{anime.type}</p>
            </div>
            <h3 className="font-medium md:text-md text-md px-2 line-clamp-2">{anime.title}</h3>
          </Link>
        )
      })}
    </div>
  );
};

export default AnimeList;
