import { router, useEffect } from "@/lib";
// import { projects } from "../../data";
import axios from "axios";
import { addFavourite } from "@/api/favourite";

const FavouriteAdd = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const favouriteTilte = document.querySelector("#favourite-tilte");
        const favouriteContent = document.querySelector("#favourite-content");
        const favouriteImages = document.getElementById("favourite-images");


        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const urls = await uploadFiles(favouriteImages.files);
            addFavourite({
                name: favouriteTilte.value,
                content: favouriteContent.value,
                image: urls,
            })
                .then(() => router.navigate("/admin/favourites"))
                .catch((error) => console.log(error));
        });
    });
    const uploadFiles = async (files) => {
        if (files) {
            const CLOUD_NAME = "dplklfwqn";
            const PRESET_NAME = "upload";
            const FOLDER_NAME = "ECMA";
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

            const formData = new FormData();//key : value

            formData.append("upload_preset", PRESET_NAME);
            formData.append("folder", FOLDER_NAME);

            for (const file of files) {
                formData.append("file", file);

                const response = await axios.post(api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                });
                urls.push(response.data.secure_url);
                // console.log(urls);

            }
            return urls;
        }

    };

    return /*html*/`<div>
        <form id="form-add" class=" max-w-4xl mx-auto text-[20px]">
            <div class="form-group items-center mt-3">
                <label for="">Tên sở thích</label>
                <input type="text" id="favourite-tilte" class="border-2"/>
            </div>
            <div class="form-group items-center my-3">
                <label for="">Content</label>
                <input type="text" id="favourite-content" class="border-2"/>
            </div>
            <div class="form-group my-3">
                <label for="">Ảnh</label>
                <input type="file" id="favourite-images" multiple class="border-2" />
            </div>
            <div class="form-group">
                <button class ="btn bg-green-500 text-white px-2 py-1 rounded-lg hover:opacity-50">Thêm</button>
            </div>
        </form>
    </div>`;
};

export default FavouriteAdd;


