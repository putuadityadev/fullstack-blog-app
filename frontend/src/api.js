import axios from "axios";
const URL = "https://fullstack-blog-app-backend.onrender.com"

export async function getPosts() {
  try {
    const token = sessionStorage.getItem('User')
    const response = await axios.get(`${URL}/posts`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    const posts = response.data

    // Fetch images for each post
    for (let post of posts) {
      if (post.imageId) {
        try {
          const imageResponse = await axios.get(`${URL}/images/${post.imageId}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          post.image = imageResponse.data
        } catch (error) {
          console.error("Error fetching image for post:", post._id, error)
          post.image = null
        }
      }
    }

    return posts
  } catch (error) {
    console.error("Error getting posts:", error.response?.data || error.message)
    throw error
  }
}

export async function getPost(id) {
  try {
    const token = sessionStorage.getItem('User')
    const response = await axios.get(`${URL}/posts/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    const post = response.data
    console.log("Post before image:", post) // Debug

    if (post.imageId) {
      try {
        const imageResponse = await axios.get(`${URL}/images/${post.imageId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        console.log("Image response:", imageResponse) // Debug
        post.image = imageResponse.data
      } catch (error) {
        console.error("Error fetching image:", error.response?.data || error.message)
        post.image = null
      }
    }
    
    console.log("Final post with image:", post) // Debug
    return post
  } catch (error) {
    console.error("Error getting post:", error.response?.data || error.message)
    throw error
  }
}

export async function createPost(post) {
  const imageResponse = await createImage(post.file)
  
  if (imageResponse) {
    const postData = {
      ...post,
      imageId: post.file.name
    }
    delete postData.file
    
    const response = await axios.post(`${URL}/posts`, postData)
    return response.data
  }
}

export async function updatePost(id, post) {
  const response = await axios.put(`${URL}/posts/${id}`, post)

  return response
}

export async function deletePost(id) {
  const response = await axios.delete(`${URL}/posts/${id}`)

  return response
}

//user
export async function getUser(id) {
  const response = await axios.get(`${URL}/users/${id}`)

  if (response.status === 200) {
    return response.data
  } else {
    return
  }
}

export async function createUser(user) {
  const response = await axios.post(`${URL}/users`, user)

  return response
}

export async function updateUser(id, user) {
  const response = await axios.put(`${URL}/users/${id}`, user)

  return response
}

export async function verifyLogin(user) {
  const response = await axios.post(`${URL}/users/login`, user)

  if(response.data.success) {
    return response.data.token
  } else {
    return
  }
}

export async function createImage(file) {
  const formData = new FormData()
  formData.append('file', file)
  
  const response = await axios.post(`${URL}/images`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response
}

export async function getImage(id) {
  const token = sessionStorage.getItem('User')
  if (!id) {
    throw new Error("Image ID is required")
  }
  const response = await axios.get(`${URL}/images/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return response.data
}