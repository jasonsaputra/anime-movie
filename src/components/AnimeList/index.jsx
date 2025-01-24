import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  console.log(api.data)
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime, index) => {
        return(
          <Link key={index} href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
            <Image
              src={anime.images.webp.large_image_url}
              alt="..."
              width={350}
              height={350}
              className="object-cover rounded-lg aspect-[3/4]"
              priority
            />
            <div className="flex justify-between items-center p-2 md:text-xs text-xs text-color-disabled">
              <p>{anime.score}</p>
              <p>{anime.type}</p>
            </div>
            <h3 className="font-bold md:text-md text-md px-2">{anime.title}</h3>
          </Link>
        )
      })}
    </div>
  );
};

export default AnimeList;
