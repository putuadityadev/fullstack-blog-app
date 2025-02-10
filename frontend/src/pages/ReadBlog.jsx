import { useParams, useNavigate } from "react-router-dom"
import { getPost } from "../api"
import { useState, useEffect } from "react"
import { Typography, Button } from "@material-tailwind/react"

const SkeletonBlog = () => {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="h-10 w-40 bg-gray-300 rounded-xl mb-20" />
      <div className="h-12 w-3/4 bg-gray-300 rounded-full mb-4" />
      <div className="h-96 w-full bg-gray-300 rounded-lg mb-4" />
      <div className="h-8 w-2/3 bg-gray-300 rounded-full mb-8" />
      <div className="space-y-3 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-2 w-full bg-gray-300 rounded-full" />
        ))}
      </div>
      <div className="h-8 w-48 bg-gray-300 rounded-full mb-2" />
      <div className="h-6 w-32 bg-gray-300 rounded-full" />
    </div>
  )
}

const ReadBlog = () => {
  let params = useParams()
  let id = params.id
  const navigate = useNavigate()
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadBlogData() {
      try {
        setLoading(true)
        let blogData = await getPost(id)
        setPost(blogData)
      } catch (error) {
        console.error("Error loading blog:", error)
      } finally {
        setLoading(false)
      }
    }
    loadBlogData()
  }, [id])

  if (loading) {
    return (
      <div className="max-w-[70%] mx-auto py-8">
        <SkeletonBlog />
      </div>
    )
  }

  return (
    <div className="max-w-[70%] mx-auto py-12">
      <Button
        onClick={() => navigate(-1)}
        className="mb-12 flex items-center gap-2"
        variant="text"
        color="gray"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back
      </Button>

      <article className="prose prose-lg max-w-none">
        <Typography variant="h1" color="blue-gray" className="text-5xl font-bold mb-8">
          {post.title}
        </Typography>

        <Typography variant="lead" color="gray" className="text-xl mb-12">
          {post.description}
        </Typography>

        {post.image && (
          <img
            src={post.image.data}
            alt={post.title}
            className="w-full h-[600px] object-cover rounded-lg mb-12"
          />
        )}

        <Typography className="text-lg leading-relaxed mb-12 whitespace-pre-wrap">
          {post.content}
        </Typography>

        <footer className="border-t pt-6">
          <Typography variant="h6" className="text-gray-900 mb-2">
            Written by {post.author}
          </Typography>

          <Typography variant="small" className="text-gray-600">
            Published on {new Date(post.dateCreated).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </Typography>
        </footer>
      </article>
    </div>
  )
}

export default ReadBlog