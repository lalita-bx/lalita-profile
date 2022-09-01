import { 
    Tooltip, 
} from "@material-tailwind/react";

const Skills = () =>{
    return (
        <div>
            <div className="grid grid-cols-3 grid-flow-row py-5">
                <div className="self-center justify-self-center col-span-3 pt-16 md:pt-10">
                    <Tooltip content="Basic Frontend" placement="left-start">
                        <img className="block mx-auto h-36 hover:scale-110 transition duration-300 ease-in-out" src="/logo-basic.png" alt="basic frontend"/>
                    </Tooltip>
                </div>
       
                <div className="self-end justify-self-end">
                    <Tooltip content="Salesforce" placement="left-end">
                        <img src="/logo-salesforce.png" alt="salesforce" className="inline-block m-auto max-h-28 hover:scale-110 transition duration-300 ease-in-out"/>
                    </Tooltip>
                </div>

                <div className="self-center justify-self-center">
                    <Tooltip content="React" placement="right-end">
                        <img src="/logo-react.png" alt="react" className="inline-block max-h-36 m-auto hover:scale-110 transition duration-300 ease-in-out"/>
                    </Tooltip>
                </div>

                <div className="self-end justify-self-start">
                    <Tooltip content="Python" placement="right-end">
                        <img src="/logo-python.png" alt="python" className="inline-block m-auto max-h-20 md:max-h-28 hover:scale-110 transition duration-300 ease-in-out"/>
                    </Tooltip>
                </div>

                <div className="grid grid-cols-5 col-span-3 pt-5">
                    <div className="self-end justify-self-end col-start-2">
                        <Tooltip content="Github" placement="bottom">
                            <img src="/logo-github.png" alt="github" className="inline-block m-auto max-h-28 hover:scale-110 transition duration-300 ease-in-out"/>
                        </Tooltip>
                    </div>

                    <div className="self-center justify-self-center">
                        <Tooltip content="Gitlab" placement="bottom">
                            <img src="/logo-gitlab.png" alt="gitlab" className="inline-block m-auto max-h-28 hover:scale-110 transition duration-300 ease-in-out"/>
                        </Tooltip>
                    </div>

                    <div className="self-end justify-self-start">
                        <Tooltip content="SourceTree" placement="bottom">
                            <img src="/logo-sourcetree.png" alt="sourcetree" className="inline-block m-auto max-h-28 hover:scale-110 transition duration-300 ease-in-out"/>
                        </Tooltip>
                    </div>
                </div>

                <div className="self-center justify-self-center col-span-3 pt-10 pb-5 font-bold cursor-pointer hover:scale-110 transition duration-100 ease-in-out">
                    <Tooltip content="Vue.JS, Flask, Postman, Illustrator" placement="bottom">
                        .etc
                    </Tooltip>
                </div>
             
            </div>
        </div>
    );
}

export default Skills
