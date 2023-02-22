import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header"
import Things from "../components/Things";
import { useEffect, useState } from "../lib"
import ProjectsPage from "./projects";

const HomePage = () => {

    return (
        `
        <div class="bg-black text-white">
        ${Header()}
        ${Things()}
        ${About()}     
        ${ProjectsPage()}
        ${Footer()}
        </div>
        `
    )
}

export default HomePage;