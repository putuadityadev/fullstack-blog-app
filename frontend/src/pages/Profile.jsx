import { useState, useEffect } from "react"
import { getPosts } from "../api"
import BlogCard from "../components/BlogCard"
import * as jwt_decode from "jwt-decode"
import {
  Card,
  Typography,
  Avatar,
} from "@material-tailwind/react"
import {
  EnvelopeIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline"

const Profile = () => {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    async function loadUserData() {
      const token = sessionStorage.getItem("User")
      const decodeUser = jwt_decode.jwtDecode(token)
      const allPost = await getPosts()
      const filteredPost = allPost.filter((post) => post.author === decodeUser._id)
      setPosts(filteredPost)
      setUser(decodeUser)
    }

    loadUserData()
  }, [])

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <Card className="mb-8 p-8 shadow-lg bg-white">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-col items-center">
            <Avatar
              size="xxl"
              variant="circular"
              className="h-40 w-40 mb-4 bg-gray-100"
              alt="avatar"
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            />
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
              <UserCircleIcon className="h-6 w-6 text-gray-700" />
              <div>
                <Typography variant="small" className="font-semibold uppercase tracking-wider text-gray-600">
                  Name
                </Typography>
                <Typography variant="h5" className="text-gray-900">
                  {user.name}
                </Typography>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <EnvelopeIcon className="h-6 w-6 text-gray-700" />
              <div>
                <Typography variant="small" className="font-semibold uppercase tracking-wider text-gray-600">
                  Email
                </Typography>
                <Typography className="text-gray-800">
                  {user.email}
                </Typography>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDaysIcon className="h-6 w-6 text-gray-700" />
              <div>
                <Typography variant="small" className="font-semibold uppercase tracking-wider text-gray-600">
                  Join Date
                </Typography>
                <Typography className="text-gray-800">
                  {new Date(user.joinDate).toLocaleDateString()}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <DocumentTextIcon className="h-7 w-7 text-gray-700" />
          <Typography variant="h4" className="text-gray-900">
            My Posts ({posts.length})
          </Typography>
        </div>
        
        <div className="flex flex-col gap-10">
          {posts.map((post, i) => (
            <BlogCard key={i} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile