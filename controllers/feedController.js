
const Post = require('../models/post')
const createId = require('../helper')

exports.getAllPosts = async (req, res, next) => {
  try {
    const allPosts = await Post.getAll()
    if (allPosts) {
      console.log(allPosts)
      res.status(200).json({ allPosts })
    }

  } catch (error) {
    console.log(error)
  }


}

exports.getPost = async (req, res, next) => {
  const postId = req.params.id;
  try {
    let data = await Post.getPost(postId)
    data = data.data()
    if (data) {
      const post = new Post(data.id, data.title, data.imUrl, data.content)
      console.log(post)
      res.status(200).json({ post })
    }
  } catch (error) {
    console.log(error)
  }
  // res.send('Hello, a post')
}

exports.createPost = async (req, res, next) => {
  const postId = createId()

  const newPost = new Post(postId, req.body.title, req.body.imUrl, req.body.content)

  try {
    const postCreated = await newPost.create()
    if (postCreated) {
      res.status(200).json({
        message: ` New Post: ${newPost.title}, was Created!`,
        id: postId,
        postCreated
      })
      
    }
  } catch (error) {
    console.log(error)
  }

}

exports.updatePost = async (req, res, next) => {
  const postId = req.params.id;
  const updatedPost = new Post(postId, req.body.title, req.body.imUrl, req.body.content)
  try {
    const update = await updatedPost.update()

    if (update) {
      res.status(200).json({
        message: `Post: ${updatedPost.title}, was updated!`,
        id: updatedPost.id,
        update
      })
    }

  } catch (error) {
    console.log(error)
  }

}

exports.deletePost = async (req, res, next) => {
  const postId = req.params.id
  try {
    const postDeleted = await Post.delete(postId)
    if (postDeleted) {
      res.status(200).json(
        {
          message: "Bye Bye, Post Deleted",
          id: postId,
          time: postDeleted
        })
    }

  } catch (error) {
    error
  }

}