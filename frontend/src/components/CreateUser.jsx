import { createUser } from "../api"
import { useState } from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react"


const CreateUser = ({view}) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  async function handleSubmit(e) {
    e.preventDefault()
    let response = await createUser(user)

    if (response.status !== 200) {
      alert("User account could not be created :(")
    }
  }

  function handleChange(e) {
    setUser({...user, [e.target.name]: e.target.value})
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Input 
              label="Name" 
              size="lg"
              name="name"
              onChange={handleChange}
              maxLength={40}
            />
            <Input 
              label="Email" 
              size="lg"
              name="email"
              type="email"
              onChange={handleChange}
              maxLength={40}
            />
            <Input 
              label="Password" 
              size="lg"
              name="password"
              type="password"
              onChange={handleChange}
              maxLength={20}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" fullWidth>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <button
                onClick={view}
                className="ml-1 font-bold text-gray-900"
              >
                Sign In
              </button>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default CreateUser