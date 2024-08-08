const formatCurrency = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'decimal', 
      minimumFractionDigits: 0,
      maximumFractionDigits: 2  
    }).format(number);
  }
  
  export default formatCurrency
