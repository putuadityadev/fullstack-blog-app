import {
  Card,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <Card className="w-full p-8 shadow-lg bg-white">
        <div className="text-center mb-8">
          <Typography variant="h2" className="text-gray-900 mb-4">
            Get in Touch
          </Typography>
          <Typography variant="lead" className="text-gray-700">
            Let&apos;s Connect and Create Something Amazing Together
          </Typography>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Personal Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 ml-1">
              <UserIcon className="w-12 h- text-gray-700 mt-1" />
              <div>
                <Typography variant="h6" className="text-gray-900 mb-1">
                  About Me
                </Typography>
                <Typography className="text-gray-700">
                  I&apos;m Putu Aditya, a Computer Science student at Primakara University, 
                  majoring in Information Systems. Passionate about web development 
                  and currently focusing on Full-stack JS Development.
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPinIcon className="w-6 h-6 text-gray-700 mt-1" />
              <div>
                <Typography variant="h6" className="text-gray-900 mb-1">
                  Location
                </Typography>
                <Typography className="text-gray-700">
                  Bali, Indonesia
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <EnvelopeIcon className="w-6 h-6 text-gray-700 mt-1" />
              <div>
                <Typography variant="h6" className="text-gray-900 mb-1">
                  Email
                </Typography>
                <Typography className="text-gray-700">
                  putuaditya.dev@gmail.com
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <GlobeAltIcon className="w-6 h-6 text-gray-700 mt-1" />
              <div>
                <Typography variant="h6" className="text-gray-900 mb-1">
                  Online Presence
                </Typography>
                <div className="space-y-2">
                  <Typography className="text-gray-700">
                    Portfolio: putuadityadev.github.io/portofolio-next
                  </Typography>
                  <Typography className="text-gray-700">
                    GitHub: github.com/putuadityadev
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          {/* Connect Buttons */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <Typography variant="h5" className="text-gray-900 mb-4">
              Connect With Me
            </Typography>
            <div className="space-y-4">
              <a 
                href="https://github.com/putuadityadev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  size="lg" 
                  variant="outlined"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Follow on GitHub
                </Button>
              </a>
              <a 
                href="https://putuadityadev.github.io/portofolio-next/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  size="lg" 
                  variant="outlined"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <GlobeAltIcon className="h-5 w-5" />
                  Visit Portfolio
                </Button>
              </a>
              <Button 
                size="lg"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => window.location.href = 'mailto:putuaditya.dev@gmail.com'}
              >
                <EnvelopeIcon className="h-5 w-5" />
                Send Email
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Typography variant="paragraph" className="text-gray-600 italic">
            Always eager to collaborate on exciting projects and learn new technologies
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default Contact;