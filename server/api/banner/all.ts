export default defineEventHandler(async (event) => {
  console.log('real api')
  // const repo = await $fetch('https://jsonplaceholder.typicode.com/todos/3')
  // const repo = await $fetch('https://google.com')
  //
  // return repo

  return [
    {
        "id": 1,
        "name": "packingadmin@edenfarm.id",
        "slug": "sayurwortel",
        "imageUrl": "https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/PTV-India-Cover-Final.png",
        "videoUrl": "tjjp",
        "pdpUrl": "http"
    },
    {
        "id": 2,
        "name": "packingadmin@edenfarm.id",
        "slug": "sayurwortel",
        "imageUrl": "https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/PTV-India-Cover-Final.png",
        "videoUrl": "tjjp",
        "pdpUrl": "http"
    }
  ]
})
