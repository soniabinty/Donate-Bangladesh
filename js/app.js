
document.getElementById('donate-clicker').addEventListener('click',function(){
  const money = getInputValueById('money-donate')
  const balance =getTextValueById('increase-money')
  const mainBalance = getTextValueById('main-balance')
if(isNaN(money)|| money<0 || money>mainBalance){


   alert('Invalid Donate Amount')
  
}
else{  const increaseMoney = money + balance
  document.getElementById('increase-money').innerText = increaseMoney

const newMainBalance = mainBalance - money
document.getElementById('main-balance').innerText = newMainBalance


 const div = document.createElement('div')
 
div.className ='border-2 border-gray-300 rounded-lg lg:p-8 lg:m-12 space-y-2 p-4 m-6'
div.innerHTML =`  <p class='lg:text-3xl text-xl font-bold'>${money} Taka Is Donated For Donate for Flood at Noakhali, Bangladesh.</p>
  <p class='lg:text-lg font-bold'>Time : ${new Date().toString()}</p>`

const container =document.getElementById('transection-contain')
container.insertBefore(div , container.firstChild)
  
}
 
 

})

document.getElementById('feni-donate').addEventListener('click',function(){

 const money = getInputValueById('feni-money')
  const balance =getTextValueById('feni-balance')
  const mainBalance = getTextValueById('main-balance')
  if(isNaN(money)|| money<0|| money>mainBalance){


    alert('Invalid Donate Amount')
   
 }
  else{
  
  const increaseMoney = money + balance
document.getElementById('feni-balance').innerText = increaseMoney

const newMainBalance = mainBalance - money
document.getElementById('main-balance').innerText = newMainBalance

  const div = document.createElement('div')
 
div.className ='border-2 border-gray-300 rounded-lg lg:p-8 lg:m-12 space-y-2 p-4 m-6'
div.innerHTML =`  <p class='lg:text-3xl text-xl font-bold'>${money} Taka Is Donated For Donate for Flood Relief in Feni,Bangladesh.</p>
  <p class='lg:text-lg font-bold'>Time : ${new Date().toString()}</p>`

const container =document.getElementById('transection-contain')
  container.insertBefore(div , container.firstChild)
    
}

})



document.getElementById('quota-donate').addEventListener('click',function(){

  const money = getInputValueById('quota-money')
  const balance =getTextValueById('quata-balance')
  const mainBalance = getTextValueById('main-balance')


  if(isNaN(money)|| money<0 || money>mainBalance){


    alert('Invalid Donate Amount')
   
 }
 else{

  const increaseMoney = money + balance
document.getElementById('quata-balance').innerText = increaseMoney

const newMainBalance = mainBalance - money
document.getElementById('main-balance').innerText = newMainBalance


const div = document.createElement('div')
 
div.className ='border-2 border-gray-300 rounded-lg lg:p-8 lg:m-12 space-y-2 p-4 m-6'
div.innerHTML =`  <p class='lg:text-3xl text-xl font-bold'>${money} Aid for Injured in the Quota Movement.</p>
  <p class='lg:text-lg font-bold'>Time : ${new Date().toString()}</p>`

const container =document.getElementById('transection-contain')
container.insertBefore(div , container.firstChild)
}
  
 
 
 })

//  button work
const  historyBtn = document.getElementById('history-btn')
const donationBtn = document.getElementById('donation-btn')
historyBtn.addEventListener('click', function(){
  
 
  historyBtn.classList.remove('border-2', 'border-gray-200', 'text-textColour','hover:bg-gray-300')
  historyBtn.classList.add('bg-btnPrimary')
  donationBtn.classList.remove('hover:bg-green-400', 'bg-btnPrimary')
  donationBtn.classList.add('border-2', 'border-gray-200', 'text-textColour')
  document.getElementById('transection').classList.remove('hidden')
  document.getElementById('main-index').classList.add('hidden')

})

donationBtn.addEventListener('click', function(){

  
  historyBtn.classList.add('border-2', 'border-gray-200', 'text-textColour','hover:bg-gray-300')
  historyBtn.classList.remove('bg-btnPrimary')
  donationBtn.classList.add('hover:bg-green-400', 'bg-btnPrimary')
  donationBtn.classList.remove('border-2', 'border-gray-200', 'text-textColour')
 
  document.getElementById('main-index').classList.remove('hidden')
  document.getElementById('transection').classList.add('hidden')

})