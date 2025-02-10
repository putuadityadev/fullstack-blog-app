import { useState, useRef } from "react"
import { createPost } from "../api"
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";

const CreateBlog = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [content, setContent] = useState("")
  const [file, setFile] = useState(null)
  const inputFile = useRef(null)

  const MAX_FILE_SIZE = 15000000

  const handleFileInput = (e) => {
    const file = e.target.files[0]
    const fileExtension = file.name.substring(file.name.lastIndexOf("."))
    if (fileExtension != ".jpg" && fileExtension != ".jpeg" && fileExtension != ".png") {
        alert("Files must be jpg or png")
        inputFile.current.value = ""
        inputFile.current.type = "file"
        return
    }
    if (file.size > MAX_FILE_SIZE) {
        alert("File size exceeds the limit (15 Mb)")
        inputFile.current.value = ""
        inputFile.current.type = "file"
        return
    }
    setFile(file)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    
    let submitObject = {
      title: title,
      description: desc,
      content: content,
      author: null,
      dateCreated: new Date(),
      file: file
    }

    console.log("Submitting object", submitObject)
    const result = await createPost(submitObject)
    
    if(result){
      setTitle("")
      setDesc("")
      setContent("")
      setFile(null)
      if (inputFile.current) {
        inputFile.current.value = ""
      }
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <Card color="transparent" shadow={false} className="w-full max-w-xl p-8">
        <Typography variant="h4" color="blue-gray" className="mb-4">
          Create New Blog Post
        </Typography>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input
            size="lg"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={100}
            required
          />
          
          <Input
            size="lg"
            label="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            maxLength={40}
            required
          />
          
          <Textarea
            size="lg"
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            required
          />
          
          <div className="relative border rounded-lg p-2">
            <input
              type="file"
              ref={inputFile}
              onChange={handleFileInput}
              accept="image/*"
              required
              className="relative z-10 opacity-0 w-full h-full cursor-pointer"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
              <Typography color="gray" className="text-sm">
                Click to upload image
              </Typography>
            </div>
          </div>

          <Button type="submit" className="mt-2" fullWidth>
            Create Post
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default CreateBlog