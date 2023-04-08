import { projectFirestore } from '@/firebase/config'
import { ref } from 'vue'

const addPost = (post) => {
  const error = ref(null)

  const load = async (post) => {
    try {
      const res = await projectFirestore.collection('posts').add(post)
      console.log(res)
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { load }
}

export default addPost
