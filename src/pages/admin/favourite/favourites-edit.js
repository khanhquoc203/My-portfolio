import { getFavourite, updateFavourite } from "@/api/favourite";
import { router, useEffect, useState } from "@/lib";
import { data } from "autoprefixer";

const FavouriteEdit = ({ id }) => {

    const [favourite, setFavourites] = useState([]);
    useEffect(() => {
        getFavourite(id).then(({ data }) => setFavourites(data));
    }, []);

    useEffect(() => {
        const formUpdate = document.querySelector('#form-update');
        const nameUpdate = document.querySelector('#favourite-name');
        const contentUpdate = document.querySelector('#favourite-content');
        const favourite_img = document.querySelector('#img');
        const imgOld = favourite.image;
        formUpdate.addEventListener('submit', async (e) => {
            (e).preventDefault();
            const urls = await upLoadFiles(favourite_img.files);
            var newFavourite = {};
            if (favourite_img.files.length > 0) {
                newFavourite = {
                    id: id,
                    name: nameUpdate.value,
                    content: contentUpdate.value,
                    image: urls
                }
            } else {
                newFavourite = {
                    id: id,
                    name: nameUpdate.value,
                    content: contentUpdate.value,
                    image: imgOld
                }
            }
            updateFavourite(newFavourite)
                .then(() => router.navigate(`/admin/favourites`));
        })
    });

    const upLoadFiles = async (files) => {
        if (files.length > 0) {
            const CLOUD_NAME = "dplklfwqn";
            const PRESET_NAME = "upload"
            const FOLDER_NAME = "ECMA";
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
            const formData = new FormData();
            formData.append("upload_preset", PRESET_NAME);
            formData.append("folder", FOLDER_NAME);

            for (const file of files) {
                formData.append("file", file);
                const response = await axios.post(api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                urls.push(response.data.secure_url)
                // console.log(urls);
            }
            return urls;
        }


    }

    return /*html*/`
    <div>
    
    <form id="form-update" class="max-w-4xl mx-auto text-[20px]">
    <div class="form-group items-center mt-3">
        <label for="" class="">Name</label>
        <input type="text" id="favourite-name" class="form-control border px-2 py-1" id=""  value = "${favourite.name}" >
    </div>
    <div class="form-group items-center my-3">
        <label for="">Content</label>
        <input type="text" id="favourite-content" class="form-control border px-2 py-1" id=""  value = "${favourite.content}" >
    </div>
    
    <div class="custom-file mb-3">
        <input type="file" id="img" class="" id=""  multiple  >
        <label class="custom-file-label" for=""></label>
    </div>
    <button type="submit" class="btn bg-blue-500 rounded-lg text-white px-2 py-1 hover:opacity-50" id="" >Sửa</button>

</form>
    
    </div>`
}

export default FavouriteEdit;