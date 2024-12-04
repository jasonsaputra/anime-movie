const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center text-2xl text-color-primary py-4 px-2 gap-4">
            { page <= 1 ? null :
                <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Prev</button>
            }
            <p>{page} of {lastPage}</p>
            { page >= lastPage ? null :
                <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
            }
        </div>
    )
}

export default Pagination