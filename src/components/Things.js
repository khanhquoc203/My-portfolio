
const Things = () => {
    return (
        `
        <section id="things" class="px-20 mt-5 max-w-7xl mx-auto relavtive overflow-x-hidden">
            <div>
                <h2 class="text-center my-10 text-[30px] text-purple-400 uppercase font-medium">Things i do</h2>
                <div id="things__item" class="mx-4 md:flex justify-between items-center m-0">
                    <img class=" md:w-[30%] md:pb-0 " src="./src/image/4.jpg" alt="">
                    <div id="things__item-heading" class="text-center md:text-initial">
                        <h3 class="text-[20px]">Lorem ipsum</h3>
                        <p class="max-w-[600px] text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit vero commodi architecto magnam
                            officia ab debitis dolorem reiciendis necessitatibus voluptates ullam mollitia eius eligendi accusantium,
                            corrupti optio odit? Quisquam, veniam?</p>
                    </div>
                </div>
                <div id="things__item" class="mx-4 my-10 md:flex justify-between items-center m-0">
                    <img class=" md:w-[30%] md:pb-0 md:odd:order-2" src="./src/image/5.jpg" alt="">
                    <div id="things__item-heading" class="text-center md:text-initial">
                        <h3 class="text-[20px]">Lorem ipsum</h3>
                        <p class="max-w-[600px] text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit vero commodi architecto magnam
                            officia ab debitis dolorem reiciendis necessitatibus voluptates ullam mollitia eius eligendi accusantium,
                            corrupti optio odit? Quisquam, veniam?</p>
                    </div>
                </div>
                <div id="things__item" class="mx-4 md:flex justify-between items-center m-0">
                    <img class=" md:w-[30%] md:pb-0 " src="./src/image/6.jpg" alt="">
                    <div id="things__item-heading" class="text-center md:text-initial">
                        <h3 class="text-[20px]">Lorem ipsum</h3>
                        <p class="max-w-[600px] text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit vero commodi architecto magnam
                            officia ab debitis dolorem reiciendis necessitatibus voluptates ullam mollitia eius eligendi accusantium,
                            corrupti optio odit? Quisquam, veniam?</p>
                    </div>
                </div>
                
            </div>
        </section>
        `
    )
}

export default Things