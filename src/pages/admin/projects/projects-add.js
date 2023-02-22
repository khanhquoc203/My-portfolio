import { router, useEffect } from "@/lib";
// import { projects } from "../../data";
import axios from "axios";
import { addProject } from "@/api/project";

const ProjectAdd = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectContent = document.querySelector("#project-content");
        const projectImages = document.getElementById("project-images");


        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const urls = await uploadFiles(projectImages.files);
            addProject({
                name: projectName.value,
                content: projectContent.value,
                image: urls,
            })
                .then(() => router.navigate("/admin/projects"))
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
                <label for="">Tên dự án</label>
                <input type="text" id="project-name" class="border-2"/>
            </div>
            <div class="form-group items-center my-3">
                <label for="">Content</label>
                <input type="text" id="project-content" class="border-2"/>
            </div>
            <div class="form-group my-3">
                <label for="">Ảnh</label>
                <input type="file" id="project-images" multiple class="border-2" />
            </div>
            <div class="form-group">
                <button class ="btn bg-green-500 text-white px-2 py-1 rounded-lg hover:opacity-50">Thêm</button>
            </div>
        </form>
    </div>`;
};

export default ProjectAdd;


