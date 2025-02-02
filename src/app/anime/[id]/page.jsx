import { getAnimeResponse } from "@/services/api-services";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton"
import { authUserSession } from "@/services/auth-services";
import prisma from "@/services/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { email: user?.user_email, anime_mal_id: id }
  })

  return (
    <>
      <div className="pt-3 px-4">
        <h3 className="text-color-primary text-2xl">
          {anime.data.title} - {anime.data.year}
        </h3>
        {
          !collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.large_image_url} anime_title={anime.data.title} />
        }
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Rank</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Score</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Anggota</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={anime.data.images.jpg.large_image_url}
          alt="..."
          width={250}
          height={250}
          className="object-cover rounded-lg aspect-[3/4]"
          priority 
        />
        <p className="text-justify test-xl">{anime.data.synopsis}</p>
      </div>
      <div className="p-4">
        <h3 className="text-color-primary text-2xl gap-4 mb-2">Komentar Penonton</h3>
        <CommentBox anime_mal_id={id} />

        {
          user && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title} />
        }
        
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
