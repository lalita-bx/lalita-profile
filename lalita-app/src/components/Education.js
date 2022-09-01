import '../styles/styles.css'

const Education = () =>{
    return (

        <div className="grid my-5 pt:10 md:pt-12">
            <div className="self-center justify-self-center">
                <i className="fas fa-graduation-cap fa-2x my-4 animate-bounce" />
                <img
                    src="/grad.jpg"
                    alt="graduate"
                    className="block mx-auto h-48 mb-5 rounded-full hover:opacity-70 transition duration-100 ease-in-out"
                />
                <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
                Bachelor of Science in <br/>
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-900 relative inline-block m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <span className="relative text-white">Computer Science</span>
                </span>
                <br/>Chiang Mai University <br/>2019
                </blockquote>
            </div>
        </div>

        // <div className="card-body flex flex-wrap flex-col items-center justify-center">
        //     {/* <div className="ex1">This div element has width: 500px;</div> */}
        //     {/* <i className=" fas fa-graduation-cap fa-2x mb-10 animate-bounce w-6 h-6" /> */}
            
        //     <div >
        //         <i className="fas fa-graduation-cap fa-2x my-4 animate-bounce" />
        //         <img
        //             src="/grad.jpg"
        //             alt="graduate"
        //             className="block mx-auto h-48 mb-5 rounded-full hover:opacity-70 transition duration-100 ease-in-out"
        //         />
        //         <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
        //         Bachelor of Science in <br/>
        //         <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-900 relative inline-block m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        //             <span className="relative text-white">Computer Science</span>
        //         </span>
        //         <br/>Chiang Mai University <br/>2019
        //         </blockquote>
        //     </div>
        // </div>

    );
}

export default Education
