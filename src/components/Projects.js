import { useEffect, useState } from "../lib";
// import Header from "../components/Header";


const ProjectsPage = ({ projects }) => {

    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3000/projects")
    //         .then((response) => response.json())
    //         .then((projects) => setProjects(projects));
    // }, []);
    return /*html*/ `
    <section id="work" class="w-full mx-auto px-10 overflow-x-hidden mb-10 md:flex md:justify-evenly">

        ${projects.map((project) => {

        return `
                <div class="my-5  md:gap-10 mx-auto">
                    <div class="md:w-[50%] mx-auto my-10 cursor-pointer my-4 my-4 rounded-xl bg-[#252740] transition ease-in-out delay-200 hover:-translate-1 hover:scale-110 duration-400">
                        <a target="_blank" href="https://github.com/khanhquoc203/xshop">
                        <img class="" src="${project.image}" width="100%" alt="">
                        <h2 class="text-start pl-3 text-[23px] py-1">${project.name}</h2>
                        <p class="text-justify px-3 py-1">${project.content}</p>
                        <div class="text-center py-2 bg-[#475569]">View in github</div>
                        </a>
                    </div>
                </div>
        
         `
    }).join("")
        }
        </section>
    `;
};
export default ProjectsPage;
