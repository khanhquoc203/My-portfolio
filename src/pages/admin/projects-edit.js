import { router, useEffect, useState } from "../../lib";
import { getProject, updateProject } from "../../api/project";
import axios from "axios";

const ProjectEdit = ({ id }) => {
    const [project, setProjects] = useState([]);
    useEffect(() => {
        getProject(id).then(({ data }) => setProjects(data))
    }, []);

    useEffect(() => {
        const formUpdate = document.querySelector('#form-update');
        const nameUpdate = document.querySelector('#project-name');
        const contentUpdate = document.querySelector('#project-content');
        const project_img = document.querySelector('#img');
        const imgOld = project.image;
        formUpdate.addEventListener('submit', async (e) => {
            // console.log(imgOld);
            // console.log(project_img.files)
            e.preventDefault();
            const urls = await upLoadFiles(project_img.files);
            var newProject = {}
            if (project_img.files.length > 0) {
                newProject = {
                    id: id,
                    name: nameUpdate.value,
                    content: contentUpdate.value,
                    image: urls
                }
            } else {
                newProject = {
                    id: id,
                    name: nameUpdate.value,
                    content: contentUpdate.value,
                    image: imgOld
                }
            }

            updateProject(newProject)
                .then(() => router.navigate(`/admin/projects`));
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
<form id="form-update" class="max-w-4xl mx-auto text-[20px]">
    <div class="form-group items-center mt-3">
        <label for="" class="">Name</label>
        <input type="text" id="project-name" class="form-control border px-2 py-1" id=""  value = "${project.name}" >
    </div>
    <div class="form-group items-center my-3">
        <label for="">Content</label>
        <input type="text" id="project-content" class="form-control border px-2 py-1" id=""  value = "${project.content}" >
    </div>
    
    <div class="custom-file mb-3">
        <input type="file" id="img" class="" id=""  multiple  >
        <label class="custom-file-label" for=""></label>
    </div>
    <button type="submit" class="btn bg-blue-500 rounded-lg text-white px-2 py-1 hover:opacity-50" id="" >Sửa dự án</button>

</form>
    `
}

export default ProjectEdit;
