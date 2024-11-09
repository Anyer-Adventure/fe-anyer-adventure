export const convertPriceToRupiah = (price, withPrefix = true, actions = false, isToFixed = false) => {
  if (price === null || price === undefined || actions) {
    return
  }
  const stringPrice = price.toString()

  if (isToFixed) {
    if (stringPrice.includes('.')) {
      const splittedPrice = stringPrice.split('.')
      return withPrefix ? 'Rp' + splittedPrice[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + splittedPrice[1] : splittedPrice[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + splittedPrice[1]
    }
    return withPrefix ? 'Rp' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  if (stringPrice.includes('.')) {
    const formattedPrice = price.toFixed(2)
    const splittedPrice = formattedPrice.split('.')
    return withPrefix ? 'Rp' + splittedPrice[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + splittedPrice[1] : splittedPrice[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + splittedPrice[1]
  }

  return withPrefix ? 'Rp' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}