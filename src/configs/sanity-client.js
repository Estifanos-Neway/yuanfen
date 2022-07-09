import sanityClient from '@sanity/client'
export default sanityClient({
  projectId: 'lvtoy6ny',
  dataset: 'content',
  apiVersion: '2022-06-09',
  useCdn: true
})
