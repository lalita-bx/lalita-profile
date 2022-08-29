import '../App.css';

const Education = () =>{
    return (
        <div>
            {/* <div class="ex1">This div element has width: 500px;</div> */}
            <div><i className="fas fa-graduation-cap fa-2x mb-10 animate-bounce w-6 h-6" /></div>
            <div>
                <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
                Bachelor of Science in <br/>
                <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-900 relative inline-block m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <span class="relative text-white">Computer Science</span>
                </span>
                <br/>Chiang Mai University <br/>2019
                </blockquote>
            </div>
        </div>

    );
}

export default Education
