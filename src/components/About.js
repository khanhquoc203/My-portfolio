
const About = () => {
  return /*html */ `<section id="about" class="my-32 max-w-7xl mx-auto px-20 border-double border-4  border-purple-500">
        <div class=" md:flex gap-5 py-5">
            <div class="md:w-1/3">
            <img class=" rounded-xl " src="./src/image/7.png" width="100%" alt="">
            </div>
            <div class="md:w-2/3">
            <h1 class="text-[30px] text-center uppercase">About me</h1>
            <p class="border-b-2 text-[20px] py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In officia at
                molestiae
                eius
                nesciunt accusamus
                cumque eligendi. Quasi mollitia placeat atque reiciendis nihil distinctio qui blanditiis magni optio ullam,
                modi quod nemo neque alias praesentium
                voluptates quaerat facilis suscipit?</p>
            <div>
            <h2 class="text-[30px] pb-2"> </h2>
            <ul class="grid grid-cols-2 gap-y-2">
              <li>
                <span>Education : </span>
                <span>FPT Polytechnic</span>
              </li>
              <li>
                <span>Phone :</span>
                <span>0969264285</span>
              </li>
              <li>
                <span>
                  Email :
                </span>
                <span>khanhpqph28508@fpt.edu.vn</span>
              </li>
              <li>
                <span>Address :</span>
                <span>Ha Noi</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
  </section>
    `
}

export default About