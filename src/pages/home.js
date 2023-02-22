import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header"
import Favourites from "../components/Favourites";
import { useEffect, useState } from "../lib"
import ProjectsPage from "@/components/Projects";
import Category from "@/components/Category";


const HomePage = () => {

    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }, []);

    const onHandleClick = (id) => {
        fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
            .then((response) => response.json())
            .then((data) => setProjects(data.projects));
    };

    return   /*html */ `
        <div class="bg-black text-white">
            ${Header()}
            ${Favourites()}
            ${About()} 
            ${Category({ categories, onClick: onHandleClick })}
            ${ProjectsPage({ projects })}
            ${Footer()}
        </div>
        `
}

export default HomePage;