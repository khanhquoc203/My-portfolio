// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = document.querySelector("#container");

import AddAboutPage from "@/pages/admin/about/abouts";
import AdminFavouritePage from "@/pages/admin/favourite/favourites";
import AdminFavouriteAddPage from "@/pages/admin/favourite/favourites-add";
import FavouriteEdit from "@/pages/admin/favourite/favourites-edit";
import { render, router } from "./src/lib";
import AdminProjectPage from "./src/pages/admin/projects/projects";
import AdminProjectAddPage from "./src/pages/admin/projects/projects-add";
import AdminProjectEditPage from "./src/pages/admin/projects/projects-edit";
import HomePage from "./src/pages/home";
// import ProjectsPage from "./src/pages/projects";

router.on("/", () => render(HomePage, app));
// router.on("/", () => render(ProjectsPage))

//project admin
router.on("/admin/projects", () => render(AdminProjectPage, app));
router.on("/admin/projects/add", () => render(AdminProjectAddPage, app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => (AdminProjectEditPage)(data), app));

//favourite admin
router.on("/admin/favourites", () => render(AdminFavouritePage, app));
router.on("/admin/favourites/add", () => render(AdminFavouriteAddPage, app));
router.on("/admin/favourites/:id/edit", ({ data }) => render(() => (FavouriteEdit)(data), app));

//about admin
router.on("/admin/abouts", () => render(AddAboutPage, app));


router.notFound(() => console.log("not found page"));
router.resolve();