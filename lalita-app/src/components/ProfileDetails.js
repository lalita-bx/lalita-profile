import '../styles/styles.css'
import Details from './Details';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";

const ProfileDetails = () => {
    return (

        <div className="grid grid-cols-6 grid-flow-row px-5 pt-10 md:pt-20 mx-0 xl:mx-20 gap-4" id="section2">
            <div className="self-center justify-self-center lg:col-span-2 col-span-6 w-full h-full">
                <Card className="card h-full">
                    <CardHeader floated={false} className="card-img mx-20 h-50 transition-all duration-500">
                        <img
                            // src="/darwin-confused.png"
                            src="/me-comp.png"
                            alt="img-blur-shadow"
                            className="img-front mx-auto transition-all duration-500"
                        />
                        <img
                            src="/me-heart.png"
                            alt="img-blur-shadow"
                            className="img-back mx-auto transition-all duration-500"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h2" color="blue-gray" className="mb-2">
                            Lalita Yodsri
                        </Typography>
                        <p className="font-semibold">Software Engineer</p>
                        <Typography variant="paragraph" color="blue-gray" className="my-2 italic">
                            3 years of experience in developing, testing<br /> and maintaining enterprise software applications.
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-center gap-7">
                        <Popover placement="bottom">
                            <PopoverHandler>
                                <Typography
                                    as="a"
                                    href="#facebook"
                                    variant="lead"
                                    color="blue"
                                    className="hover:scale-150 transition duration-300 ease-in-out"
                                    textGradient
                                >
                                    <i className="fab fa-facebook" />
                                </Typography>
                            </PopoverHandler>
                            <PopoverContent>
                                Sorry, Please try next social media. <i className="fas fa-heart" />
                            </PopoverContent>
                        </Popover>
                        <Typography
                            as="a"
                            href="https://www.linkedin.com/in/lalita-bibx"
                            variant="lead"
                            color="blue"
                            target="blank"
                            className="hover:scale-150 transition duration-300 ease-in-out"
                            textGradient
                        >
                            <i className="fab fa-linkedin" />
                        </Typography>
                        <Typography
                            as="a"
                            href="https://www.instagram.com/bibx___/"
                            variant="lead"
                            color="purple"
                            target="blank"
                            className="hover:scale-150 transition duration-300 ease-in-out"
                            textGradient
                        >
                            <i className="fab fa-instagram" />
                        </Typography>

                    </CardFooter>
                </Card>
            </div>
            <div className="self-center justify-self-center col-span-6 lg:col-span-4 w-full h-full">
                <Card className="card h-full">
                    <CardBody >
                        <Details />
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default ProfileDetails