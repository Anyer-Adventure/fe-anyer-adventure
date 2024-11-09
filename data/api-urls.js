export default {
  general: {
    all: {
      entity: '/general/all/entity'
    },
    explore: '/general/explore'
  },
  banner: {
    all: '/banner/all'
  },
  lodge: (uuid) => `/lodge/${encodeURIComponent(uuid)}`,
  transaction: {
    create: '/transaction/create'
  }
}