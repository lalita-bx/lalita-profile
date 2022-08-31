import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import '../styles/styles.css'
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
          label: "Experience",
          value: "experience"
        },
        {
          label: "Skills",
          value: "skills"
        },
        {
          label: "Education",
          value: "education"
        },
        {
          label: "Contact",
          value: "contact"
        },
      ];

    return (
        <Tabs value="experience">
          <TabsHeader className="overflow-y-auto">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                <p className="text-lg font-semibold">
                {label}
                </p>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
              {data.map(({ value }) => (
                <TabPanel key={value} value={value} className="p-0">
                  {
                      value==="experience" ? <Experience/>
                      : value==="contact" ? <Contact/>
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
  