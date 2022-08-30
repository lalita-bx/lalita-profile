const Skills = () =>{
    return (
        <div>
            <div className="grid grid-cols-3 grid-flow-row auto-rows-max gap-4">
                <div className="self-center justify-self-center col-span-3"><img className="h-48 mt-10 hover:scale-110 transition duration-300 ease-in-out" src="/logo-basic.png" alt="basic frontend"></img></div>
                <div className="self-end justify-self-end"><img src="/logo-salesforce.png" alt="salesforce" className="h-auto md:h-40 hover:scale-110 transition duration-300 ease-in-out"></img></div>
                <div className="self-center justify-self-center"><img src="/logo512.png" alt="react" className="h-auto md:h-48 hover:scale-110 transition duration-300 ease-in-out"></img></div>
                <div className="self-end justify-self-start"><img src="/logo-vue.png" alt="vue" className="h-auto md:h-40 hover:scale-110 transition duration-300 ease-in-out"></img></div>
                <div className="self-center justify-self-center col-span-3"><img src="/logo-python.png" alt="python" className="h-20 md:h-40 hover:scale-110 transition duration-300 ease-in-out"></img></div>
            </div>
        </div>
    );
}

export default Skills
