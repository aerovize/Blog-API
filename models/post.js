const admin = require("firebase-admin");

const serviceAccount = require("../firebase/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

class Post {
  constructor(id, title, imUrl, content) {
    this.id = id,
      this.title = title,
      this.imageUrl = imUrl,
      this.content = content
  }

  async create() {
    const created = await db.collection('posts').doc(this.id).create({
      id: this.id,
      title: this.title,
      imUrl: this.imageUrl,
      content: this.content
    })
    if (created) {
      console.log('Created!!')
      return created
      
    }
  }

  static async getPost(id) {
    const snapshot = await db.collection('posts').doc(id).get();
    if (snapshot) {
      return snapshot
    }
  }

  static async getAll() {
    const snapshot = await db.collection('posts').get()

    if (snapshot) {
      const allPosts = []
      snapshot.forEach((post) => {
        const data = post.data()
        allPosts.push(data)
        
        
      })
      console.log(allPosts)
      return allPosts

    }
  }

  async update() {
    const updated = await db.collection('posts').doc(this.id).update({
      title: this.title,
      imUrl: this.imageUrl,
      content: this.content
    })
    if (updated) {
      console.log('Updated!!!')
      console.log(updated)
      return updated
    }
  }

  static async delete(id) {
    const deleted = await db.collection('posts').doc(id).delete()
    if (deleted) {
      console.log(deleted)
      return deleted
    }
  }
}
module.exports = Post;