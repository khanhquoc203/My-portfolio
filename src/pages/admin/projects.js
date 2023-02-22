// import { projects } from "@/data";
import axios from "axios";
import { deleteProject, getProjects } from "../../api/project";
import { useEffect, useState } from "../../lib";
const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects().then(({ data }) => setProjects(data));
    }, []); // điều kiện để gọi lại useEffect


    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                deleteProject(id).then(() => {
                    const newProjects = projects.filter((project) => project.id !== +id);
                    setProjects(newProjects);
                });
            });
        }
    });
    // 2
    return /*html */`<div id="work" class="">
        <h1 class="text-center text-[25px] font-medium my-4">Quản lý dự án</h1>
        <table class="max-w-7xl items-center mx-auto table table-bordered table-auto border-collapse border-spacing-2 border border-slate-400">
            <thead>
                <tr>
                    <th class="border border-slate-300">Id</th>
                    <th class="border border-slate-300">Tên dự án</th>
                    <th class="border border-slate-300 w-[30%]">Image</th>
                    <th class="w-[30%]">Content</th>
                    <th class="border border-slate-300"></th>
                </tr>
            </thead>
        <tbody class="">
            ${projects
            .map(
                (project, index) => `
                <tr class="text-center">
                    <td class="border border-slate-300">${index + 1}</td>
                    <td class="border border-slate-300">${project.name}</td>
                    <td class="border border-slate-300 "><img src="${project.image}" width="50%" class="inline items-center"></td>
                    <td class="border border-slate-300">${project.content}</td>
                    <td class="border border-slate-300">
                        <button data-id="${project.id
                    }" class="btn btn-remove bg-red-500 text-white px-3 py-1 rounded-lg hover:opacity-50">Xóa</button>
                        <a class="bg-blue-500 text-white px-3 py-1 rounded-lg hover:opacity-50" href="/admin/projects/${project.id}/edit">Sửa</a>
                    </td>
                </tr>
            `
            )
            .join("")}
            
        </tbody>
    </div>`
};

export default ProjectsPage;