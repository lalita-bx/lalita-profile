const Skills = () =>{
    return (
        <div>
            <div class="flex flex-wrap flex-col items-center justify-center">
                <div class="col-span-3 justify-center"><img class="h-48 mt-10 hover:scale-110 transition duration-300 ease-in-out" src="/logo-basic.png" alt="basic frontend"></img></div>
            </div>
            <div class="grid grid-cols-3 gap-4">
                <div class="self-end justify-self-end"><img src="/logo-salesforce.png" alt="salesforce" className="h-40 hover:scale-110 transition duration-300 ease-in-out"></img></div>
                <div class="self-center justify-self-center"><img src="/logo512.png" alt="react" className="h-44 hover:scale-110 transition duration-300 ease-in-out"></img></div>
                <div class="self-end justify-self-start"><img src="/logo-vue.png" alt="vue" className="h-40 hover:scale-110 transition duration-300 ease-in-out"></img></div>
                <div class="self-center justify-self-center col-span-3"><img src="/logo-python.png" alt="python" className="h-40 hover:scale-110 transition duration-300 ease-in-out"></img></div>
            </div>
        </div>
    );
}

export default Skills
