import { deleteFavourite, getFavourites } from "@/api/favourite";
import { useEffect, useState } from "@/lib"

const AdminFavouritePage = () => {

    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        getFavourites().then(({ data }) => setFavourites(data));
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                deleteFavourite(id).then(() => {
                    const newFavourites = favourites.filter((favourite) => favourite.id !== +id);
                    setFavourites(newFavourites);
                });
            });
        }
    });

    return /*html*/`<div id="" class="">
    <h1 class="text-center text-[25px] font-medium my-4">Quản lý sở thích</h1>
    <table class="max-w-7xl items-center mx-auto table table-bordered table-auto border-collapse border-spacing-2 border border-slate-400">
        <thead>
            <tr>
                <th class="border border-slate-300">Id</th>
                <th class="border border-slate-300">Favourites </th>
                <th class="border border-slate-300 w-[30%]">Image</th>
                <th class="w-[30%]">Content</th>
                <th class="border border-slate-300"></th>
            </tr>
        </thead>
    <tbody class=""> 
            
            ${favourites
            .map(
                (favourite, index) => `
                    <tr class="text-center">
                        <td class="border border-slate-300">${index + 1}</td>
                        <td class="border border-slate-300">${favourite.name}</td>
                        <td class="border py-4 border-slate-300"><img src="${favourite.image}" width="50%" class="inline items-center"></td>
                        <td class="border border-slate-300">${favourite.content}</td>
                        <td class="border border-slate-300">
                    <button data-id="${favourite.id
                    }" class="btn btn-remove bg-red-500 text-white px-3 py-1 rounded-lg hover:opacity-50">Delete</button>
                    <a class="bg-blue-500 text-white px-3 py-1 rounded-lg hover:opacity-50" href="/admin/favourites/${favourite.id}/edit">Edit</a>
                </td>
            </tr>
                `
            )
            .join("")}
    </tbody>
</div>`

}

export default AdminFavouritePage