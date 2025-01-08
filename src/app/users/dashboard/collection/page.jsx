import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/services/auth-services";
import prisma from "@/services/prisma";

const Page = async () => {
  const user = await authUserSession;
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Collection"} />
      {
        collection.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {
              collection.map((collect, index) => {
                return (
                  <Link
                    key={index}
                    href={`/anime/${collect.anime_mal_id}`}
                    className="relative"
                  >
                    <Image
                      src={collect.anime_image}
                      alt={collect.anime_image}
                      width={350}
                      height={350}
                      className="w-full"
                      priority
                    />
                    <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
                      <h5 className="text-xl text-center">{collect.anime_title}</h5>
                    </div>
                  </Link>
                );
              })
            }
          </div>
        ) : (
          <div className="flex items-center justify-center mt-48">
          <div className="text-center p-4 bg-color-black rounded w-128">
            <p className="text-color-accent">Anda belum memiliki collection. Silakan tambahkan anime ke collection Anda!</p>
          </div>
        </div>
        )
      }
      
    </section>
  );
};

export default Page;
