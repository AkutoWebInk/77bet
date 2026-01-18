// Helpers
export function formatValue(value){
  const number = value.replace(/\D/g,"").replace(/^0+/,"");

  const cents = (Number(number)/100).toFixed(2);
  return 'R$ ' + cents.replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}