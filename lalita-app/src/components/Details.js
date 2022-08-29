import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import '../App.css';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

const Details = () =>{

    const data = [
        {
          label: "About",
          value: "about",
          desc: `Software Engineer with 3 years of experience in developing, testing and maintaining enterprise software applications.`,
        },

        {
          label: "Education",
          value: "education",
          desc: `Chiang Mai University\n
          Bachelor of Science in\n 
          Computer Science\n
          2019
          .`,
        },
     
        {
          label: "Skills",
          value: "skills",
          desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },

        {
          label: "Experience",
          value: "experience",
          desc: "",
        },
     
      ];

    return (
        <Tabs value="about">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                <p class="text-lg font-semibold">
                {label}
                </p>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {
                      value==="experience" ? <Experience/>
                      : value==="about" ? <p class="text-xl">{desc}</p> 
                      : value==="skills" ? <Skills/> 
                      : <Education/>
                  }
                </TabPanel>
              ))}
          </TabsBody>
        </Tabs>
      );


}

export default Details
  