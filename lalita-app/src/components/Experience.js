import { useEffect, useState } from "react";
import GlobalService from "../service/Global.service";

const Experience = () => {
    const [expData, setExp] = useState();

    useEffect(() => {
        const getExperienceService = async () => {
            let exp = await GlobalService.getExperience();
            if (exp.status === 200) {
                console.log(exp.data);
                setExp(exp.data);
            } else {
                console.log(exp);
            }
        };
        getExperienceService();
    }, []);

    return (
        <div className="flex text-left mt-5 md:mt-10 mx-0 md:mx-5 card-exp overflow-auto">
            <ol className="relative h-fit border-l border-gray-300 dark:border-gray-700">
                {expData
                    ? expData.map(({ label, time, desc }) => (
                        <li key={label} value={desc} className="mb-8 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-2 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-700">
                                {time}
                            </time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {label}
                            </h3>
                            <p className="mb-3 text-base font-normal text-left md:text-justify text-gray-700 dark:text-gray-400">
                                {desc}
                            </p>
                        </li>
                    ))
                    : ""}
            </ol>
        </div>
    );
};

export default Experience;
