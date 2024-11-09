

export default defineEventHandler(async (event) => {
  // const repo = await $fetch('https://jsonplaceholder.typicode.com/todos/3')
  const repo = await $fetch('https://sea-lion-app-e7gsg.ondigitalocean.app/api/general/all/bedtype')
  //
  // return repo

  return [
    'LODGE',
    'TRIP',
    'ATTRACTION'
  ]
})
