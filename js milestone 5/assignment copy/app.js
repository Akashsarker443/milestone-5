const playerArray = [];

function selectPlayer(player){

   const playerName = player.parentNode.children[1].innerText;
   const listContainer = document.getElementById('list-container');
   const li = document.createElement('li');

   li.innerText = playerName;
   
   playerArray.push(playerName);
  
   if( playerArray.length <= 5){
      listContainer.appendChild(li);
      
   }
   else if(playerArray.length > 5){
      alert("You've already selected five players");
      return;  
   }

   const disabledPlayerButton = player;
   disabledPlayerButton.setAttribute('disabled', true);
   disabledPlayerButton.style.backgroundColor = 'gray';
   
}


document.getElementById('calculate-btn').addEventListener('click', function(){
  const listContainer =  document.getElementById('list-container');
  const childcount = listContainer.childElementCount;

  const perPlayerCost = getInputFieldValueById('per-player-cost');

  if(isNaN(perPlayerCost)){
   alert('You must enter a valid number');
  }   
  
  const totalPlayerCost = childcount * perPlayerCost;
  setElementValueById('total-player-expenses', totalPlayerCost);

})

function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
 
    // inputField.value = '';
 
    return inputFieldValue;
 }


 function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue; 
 }
 

 

function setElementValueById(elementId, newElementValue){
    const element = document.getElementById(elementId);
    element.innerText = newElementValue;
 }
 




document.getElementById('total-calculate-btn').addEventListener('click', function(){
      const previousPlayerExpense = getTextElementValueById('total-player-expenses');

      const managerCost = getInputFieldValueById('manager-cost');
      if(isNaN(managerCost)){
         alert('Please provide your manager cost');
        } 

      const coachCost = getInputFieldValueById('coach-cost');
      if(isNaN(coachCost)){
         alert('Please provide your coach cost');
        } 

      const finalTotalCost = previousPlayerExpense + managerCost + coachCost;

   
      setElementValueById('final-total', finalTotalCost);
})












