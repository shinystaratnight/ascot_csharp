export const formatCurrency = (amount) => {
    return (parseInt(amount)).toLocaleString('en-US', {
        style: 'currency',
        currency: 'GBP',
      })
}
