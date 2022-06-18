const CreateList = document.getElementById('listlist');
const updateImg = document.getElementById('img');
const refresh = document.getElementById('btn')

function getListName(){
    fetch('https://some-random-apis.herokuapp.com/images/')
    .then(res => res.json())
    .then(data => console.log(data))
}


function addLi(){
   var ListNode = document.getElementById('listlist');
   ListNode = document.createElement('li');

   ListNode.appendChild(ListNode);
}