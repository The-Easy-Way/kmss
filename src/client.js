import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "41vjc7q7",
    dataset: "production",
    apiVersion: '2021-08-31',
    useCdn: true,
})