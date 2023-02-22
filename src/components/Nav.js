

const Nav = () => {
  return/*html*/ ` 
            <nav class=" md:text-[20px]">
                  <ul class="flex justify-evenly gap-5">
                      <li class="hover:text-purple-300"><a href="/#header">Home</a></li>
                      <li class="hover:text-purple-300"><a href="/#about">About</a></li>
                      <li class="hover:text-purple-300"><a href="/#work">Work</a></li>
                      <li class="hover:text-purple-300"><a href="/#footer">Contacts</a></li>
                  </ul>
            </nav>
`
}

export default Nav;

// <li class="hover:text-purple-300"><a href="#">Home</a></li>
//               <li class="hover:text-purple-300"><a href="#about">About</a></li>
//               <li class="hover:text-purple-300"><a href="#works">Work</a></li>
//               <li class="hover:text-purple-300"><a href="#">Contacts</a></li>

// ${menus.map((menu) => `<a class="hover:text-purple-300 mx-3" href="/#${menu.link}">${menu.name}</a>`).join("")}