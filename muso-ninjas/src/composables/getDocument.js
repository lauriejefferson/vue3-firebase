import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getDocument = (collection, id) => {
  const document = ref(null)
  const error = ref(null)

  // register the firestore collection reference
  let documentRef = projectFirestore.collection(collection).doc(id)

  const unsub = documentRef.onSnapshot(
    // need to make sure the doc exists & has data
    (doc) => {
      if (doc.data()) {
        document.value = { ...doc.data(), id: doc.id }
        console.log(document)
        error.value = null
      } else {
        error.value = 'that document does not exist'
      }
    },
    (err) => {
      console.log(err.message)
      error.value = 'could not fetch the document'
    }
  )

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })

  return { error, document }
}

export default getDocument
