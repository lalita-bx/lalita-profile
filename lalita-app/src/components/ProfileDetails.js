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
        
        // <div className="profile-body">
        //     Body
        // </div>
        // bg-gradient-to-r from-pink-200 via-pink-100 to-pink-50 
        // <div class="profile-body flex flex-wrap w-auto gap-4 justify-center items-center px-10 py-10">

        <div class="profile-body flex flex-wrap items-center justify-center gap">
            {/* <div class="flex flex-wrap items-center justify-center"> */}
                <div class="basis-96 h-auto md:basis-1/4 md:card">
                {/* className="card" */}
                        {/* hover:animate-bounce hover:opacity-50 cursor-pointer */}
                    <Card className="card mx-1 md:ml-10 md:mr-5">
                        <CardHeader floated={false} className="relative h-50 hover:opacity-80 cursor-pointer">
                            <img
                                src="/darwin-confused.png"
                                alt="img-blur-shadow"
                                className="h-full w-full"
                            />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h2" color="blue-gray" className="mb-2">
                            Darwin Watterson
                            </Typography>
                            <Typography variant="lead" color="blue-gray" textGradient>
                            Software Engineer
                            </Typography>
                        </CardBody>
                        <CardFooter className="flex justify-center gap-7">
                            <Tooltip content="Like">
                            <Typography
                                as="a"
                                href="#facebook"
                                variant="lead"
                                color="blue"
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
                                textGradient
                            >
                                <i className="fab fa-instagram" />
                            </Typography>
                            </Tooltip>
                            
                        </CardFooter>
                    </Card>
                </div>
                <div class="basis-96 h-auto md:basis-3/4 md:card">
                {/* className="max-w-4xl min-w-4xl" */}
                    <Card className="card mx-1 my-6 md:mr-10" >
                        <CardBody>
                            <Details />
                        </CardBody>
                    </Card>
                </div>

            {/* </div> */}
        </div>
    );
}

export default ProfileDetails