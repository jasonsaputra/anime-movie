"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {

    const [comment, setComment] = useState();
    const [isCreated, setIsCreated] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const router = useRouter();

    const handleInput = (event) => {
        setComment(event.target.value)
    }

    const handlePosting = async (event) => {
        event.preventDefault();

        // Validasi minimal 3 karakter
        if (comment.length < 3) {
            setErrorMessage("Komentar harus memiliki minimal 3 karakter.");
            return;
        }

        const data = { anime_mal_id, user_email, comment, username, anime_title };

        try {
            const response = await fetch("/api/v1/comment", {
                method: "POST",
                body: JSON.stringify(data),
            });

            const postComment = await response.json();
            if (postComment.isCreated) {
                setIsCreated(true);
                setComment("");
                setErrorMessage("");
                router.refresh();

                setTimeout(() => {
                    setIsCreated(false);
                }, 3000);
            }
        } catch (error) {
            setErrorMessage("Gagal memposting komentar. Silakan coba lagi.");
        }
    }

    return (
        <div className="flex flex-col gap-2">
            {
                isCreated && <p className="text-color-primary">Postingan terkirim...</p>
            }
            {
                errorMessage && <p className="text-color-error">{errorMessage}</p>
            }
            <textarea
                onChange={handleInput}
                value={comment}
                className="w-full h-32 text-cl p-4 rounded"
            />
            <button onClick={handlePosting} className="w-52 py-2 px-3 bg-color-accent rounded">Posting Komentar</button>
        </div>
    )
}

export default CommentInput