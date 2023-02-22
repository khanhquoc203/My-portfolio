import Nav from "./Nav"

const Header = () => {



  return /*html */`
        <div id="" class="bg-gradient-to-r from-indigo-500 to-pink-500 font-medium flex justify-between px-20 py-3 items-center  sticky z-2 top-0 ">
          <h2 class="text-[20px] md:text-[25px] cursor-pointer">Portfolio</h2>
          ${Nav()}
        </div>
    
        <div id="header" class=" flex justify-evenly  p-10  items-center">
          <div class="hidden md:inline">
            <h1 class=" md:text-[25px]">Hi there ! </h1>
            <h2 class="md:text-[35px]">
              I am a <span class="text-purple-300">Web Developer</span>
            </h2>
            <p class="py-4 ">Creative Web Developer Offering 1+ Years Of Experience Providing High-Impact Web
              Solutions
              For
              Many Different
              Organizations.</p>
            <button id="" class="border border-purple-500 px-2 py-1 text-purple-300 hover:bg-purple-400 hover:text-white">About
              Me</button>
          </div>
          <div class="">
            <img class=" rounded-full" src="../src/image/7.png" alt="">
          </div>
        </div>
    `
}

export default Header