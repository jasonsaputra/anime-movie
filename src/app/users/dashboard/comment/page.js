import Header from '@/components/Dashboard/Header'
import { authUserSession } from '@/services/auth-services'
import prisma from '@/services/prisma'
import Link from 'next/link'
import React from 'react'

const Page = async () => {

    const user = await authUserSession()
    const comments = await prisma.comment.findMany({ where: { user_email: user.email } })

    return (
        <section className="mt-4 px-4 w-full">
            <Header title={"My Comment"} />
            {
                comments.length > 0 ? (
                    <div className='grid grid-cols-1 py-2 gap-4'>
                        {
                            comments.map(comment => {
                                return (
                                    <Link
                                        href={`/anime/${comment.anime_mal_id}`}
                                        key={comment.id}
                                        className='text-color-dark bg-color-primary p-4'
                                    >
                                        <p className='text-sm'>{comment.anime_title}</p>
                                        <p className='italic'>{comment.comment}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                ) : (
                    <div className="flex items-center justify-center mt-48">
                        <div className="text-center p-4 bg-color-black rounded w-128">
                            <p className="text-color-accent">Anda belum memiliki komentar. Silakan menambahkan komentar pada anime favorit Anda!</p>
                        </div>
                    </div>
                    

                )
            }

        </section>
        
    )
}

export default Page