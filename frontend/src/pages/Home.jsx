import { getPosts } from "../api"
import { useState, useEffect } from "react"
import BlogCard from "../components/BlogCard"
import {  Card } from "@material-tailwind/react"

const SkeletonCard = () => {
  return (
    <Card className="w-full flex-row">
      <div className="w-2/5 shrink-0 m-0 rounded-r-none bg-gray-300 h-[300px]">
        <div className="h-full grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-12 w-12 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="h-8 w-3/4 bg-gray-300 rounded-lg animate-pulse" />
          <div className="h-4 w-1/2 bg-gray-300 rounded-lg animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded-lg animate-pulse" />
            <div className="h-4 w-full bg-gray-300 rounded-lg animate-pulse" />
          </div>
        </div>
        <div className="mt-4">
          <div className="h-8 w-24 bg-gray-300 rounded-lg animate-pulse" />
        </div>
      </div>
    </Card>
  )
}

const Home = () => {
  const [dataPosts, setDataPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadDataBlog() {
      try {
        setLoading(true)
        let data = await getPosts()
        setDataPosts(data)
      } catch (error) {
        console.error("Error loading posts:", error)
      } finally {
        setLoading(false)
      }
    }
    loadDataBlog()
  }, [])

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-[84%] py-8">
      {loading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        dataPosts.map((post, i) => <BlogCard post={post} key={i} />)
      )}
    </section>
  )
}

export default Home