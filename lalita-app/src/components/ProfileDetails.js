// import './ProfileDetails.css';
import '../App.css';
import Details from './Details';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    // Avatar 
} from "@material-tailwind/react";

const ProfileDetails = () =>{
    return (
        <div className="flex flex-wrap items-center justify-center" id="section2">
            <div className="basis-96 h-auto md:basis-2/5 md:card">
                <Card className="card mx-1 mt-5 md:mt-0 md:ml-32 md:mr-5">
                    <CardHeader floated={false} className="card-img mx-20 mt-16 h-50 transition-all duration-500">
                        <img
                            // src="/darwin-confused.png"
                            src="/me-hi-02.png"
                            alt="img-blur-shadow"
                            className="img-front mx-auto transition-all duration-500"
                        />
                        <img
                            src="/me-call.png"
                            alt="img-blur-shadow"
                            className="img-back mx-auto transition-all duration-500"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h2" color="blue-gray" className="mb-2">
                        Lalita Yodsri
                        </Typography>
                        {/* <Typography variant="lead" color="blue-gray" textGradient>
                        Software Engineer
                        </Typography> */}
                        <p className="font-semibold">Software Engineer</p>
                        <p className="mx-16 italic">3 years of experience in developing, testing<br/> and maintaining enterprise software applications.</p>
                    </CardBody>
                    <CardFooter className="flex justify-center gap-7">
                        <Tooltip content="Like">
                        <Typography
                            as="a"
                            href="#facebook"
                            variant="lead"
                            color="blue"
                            className="hover:scale-150 transition delay-150 duration-300 ease-in-out"
                            textGradient
                        >
                            <i className="fab fa-facebook" />
                        </Typography>
                        </Tooltip>
                        <Tooltip content="Follow">
                        <Typography
                            as="a"
                            href="#twitter"
                            variant="lead"
                            color="light-blue"
                            className="hover:scale-150 transition delay-150 duration-300 ease-in-out"
                            textGradient
                        >
                            <i className="fab fa-twitter" />
                        </Typography>
                        </Tooltip>
                        <Tooltip content="Follow">
                        <Typography
                            as="a"
                            href="https://www.instagram.com/bibx___/"
                            variant="lead"
                            color="purple"
                            target="blank"
                            className="hover:scale-150 transition delay-150 duration-300 ease-in-out"
                            textGradient
                        >
                            <i className="fab fa-instagram" />
                        </Typography>
                        </Tooltip>
                        
                    </CardFooter>
                </Card>
            </div>
            <div className="basis-96 h-auto md:basis-3/5 md:card">
                <Card className="card mx-1 my-6 md:mr-32" >
                    <CardBody>
                        <Details />
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default ProfileDetails