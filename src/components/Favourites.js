import { useState, useEffect } from "@/lib"

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/favourites")
            .then((response) => response.json())
            .then((favourites) => setFavourites(favourites));
    }, []);
    return /*html */`
        <section id="" class="px-20 mt-5 max-w-7xl mx-auto relavtive overflow-x-hidden">
            <div>
            <h2 class="text-center my-10 text-[30px] text-purple-400 uppercase font-medium ">My Favourites</h2>
                ${favourites.map((favourite) => `

                <div id="" class="border-2 rounded-xl mx-4 md:flex gap-10 items-center m-0 my-[50px]">
                    <img class="rounded-l-lg md:w-[30%] md:pb-0 " src="${favourite.image}" alt="">
                    <div id="" class="text-center mr-5 md:justify-start md:text-initial">
                        <h3 class="text-[20px]">${favourite.name}</h3>
                        <p class="max-w-[600px] text-justify">${favourite.content}</p>
                    </div>
                </div>
                `
    ).join("")
        }
                
            </div>
        </section>
        `
}

export default Favourites
