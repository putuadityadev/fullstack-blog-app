import {
  Card,
  Typography,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
import {
  CodeBracketIcon,
  CommandLineIcon,
  RocketLaunchIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <Card className="w-full p-8 shadow-lg bg-white">
        <div className="mb-8 text-center">
          <Typography variant="h2" className="mb-4 text-gray-900">
            About aBlogs
          </Typography>
          <Typography variant="lead" className="text-gray-700">
            A MERN Stack Side Project for Learning and Development
          </Typography>
        </div>

        <div className="mb-12">
          <Typography variant="paragraph" className="mb-4 text-gray-700">
            aBlogs is a personal side project developed to explore and master the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project serves as a practical learning ground for implementing modern web development practices and technologies.
          </Typography>
        </div>

        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <CommandLineIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-gray-900">
                Frontend Development
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography className="text-gray-700">
                Built with React.js, utilizing modern hooks and state management. Styled using Material Tailwind for a clean, responsive design.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <ServerIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-gray-900">
                Backend Development
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography className="text-gray-700">
                Powered by Node.js and Express.js, implementing RESTful API principles and secure authentication systems.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <CodeBracketIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-gray-900">
                Database Integration
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography className="text-gray-700">
                MongoDB for flexible and scalable data storage, with Mongoose ODM for elegant data modeling.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <RocketLaunchIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-gray-900">
                Key Features
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography className="text-gray-700">
                User authentication, blog post creation and management, image uploads, and responsive design for all devices.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>

        <div className="mt-12 text-center">
          <Typography variant="paragraph" className="text-gray-600 italic">
            This project represents my journey in learning full-stack development, combining both technical skills and creative design thinking.
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default About;