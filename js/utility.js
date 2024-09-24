function getInputValueById(id){
  const moneyDonate =document.getElementById(id).value;
  const moneyDonateNumber =parseFloat(moneyDonate)
  return moneyDonateNumber
}

function getTextValueById(id){
  const noakhaliDonateMoney =document.getElementById(id).innerText;
  const noakhaliDonatTotalNumber =parseFloat(noakhaliDonateMoney)
  return noakhaliDonatTotalNumber
}

