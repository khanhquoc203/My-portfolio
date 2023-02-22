// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = document.querySelector("#container");

import { render, router } from "./src/lib";
import AdminProjectPage from "./src/pages/admin/projects";
import AdminProjectAddPage from "./src/pages/admin/projects-add";
import AdminProjectEditPage from "./src/pages/admin/projects-edit";
import HomePage from "./src/pages/home";
// import ProjectsPage from "./src/pages/projects";

router.on("/", () => render(HomePage, app));
// router.on("/", () => render(ProjectsPage))

router.on("/admin/projects", () => render(AdminProjectPage, app));
router.on("/admin/projects/add", () => render(AdminProjectAddPage, app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => (AdminProjectEditPage)(data), app));

router.notFound(() => console.log("not found page"));
router.resolve();