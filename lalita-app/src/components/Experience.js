
const Experience = () =>{

    const data = [
        {
          label: "Bank of Ayudhya Public Co., Ltd.",
          time: `November 2021 – Present`,
          desc: `Krungsri Smart Experience: Maintaining and developing project by Visualforce Page, AngularJS, Aura Component, Apex language and Python language.`,
        },

        {
          label: "I&I Group Public Co., Ltd.",
          time: `April 2020 – November 2021`,
          desc: `Salesforces Project: Create custom component (Lightning Web Component and Aura Component),
           triggers, test class, connect REST API to Salesforce, create changes set to deploy to another org and proof of concept to find possibility to develop. 
           Developed controller by Apex language.`,
        },
     
        {
          label: "Internet Thailand Public Co., Ltd.",
          time: `September 2019 - April 2020`,
          desc: `Alumni Web Application: Design system structure from requirement. 
          Developed Web API by Python language with Flask Web Framework. Support Front-End developed by Vue.JS. Use Git to coordinate with the team.`,
        },

        {
          label: "C.S.I. (Thailand) Co., Ltd.",
          time: `June 2018 - November 2018`,
          desc: `Localization Software: Studied from the source code examples of subprogram within the program. 
          The development is based on Microsoft Visual Studio 2010 with Visual Basic language and Oracle database through PL/SQL program to make the project has been completed successfully.`,
        },
     
    ];

    return (
        <div class="flex text-left my-5">
            <ol class="relative border-l border-gray-200 dark:border-gray-700">   
                {data.map(({ label, time, desc }) => (
                    <li key={label} value={desc} class="mb-8 ml-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{time}</time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{label}</h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{desc}</p>
                        {/* <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                    </li>
                ))}
            </ol>
        </div>

    );
}

export default Experience
