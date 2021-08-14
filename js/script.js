/* Task 1
(১. নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে index.html এর সাথে কানেক্ট করতে পারো কিনা?) */

/* Task 2
২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। */
const allH2 = document.querySelectorAll('h2');
for(const h2 of allH2){
    h2.style.color = 'lightblue';
}

/* Task 3
৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। */
document.getElementById('backpack').style.backgroundColor = 'tomato';

/* Task 4
৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা */
const allCard = document.getElementsByClassName('card');
for(const card of allCard){
    card.style.borderRadius = '30px';
}

/* Task 5
৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো  */
function button() {
    console.log('I am console log');
}

/* Task 6
৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। */
const allButton = document.getElementsByClassName('panda-btn-buy-now');
for(const button of allButton){
    button.addEventListener('click',function(event){
        event.target.parentNode.removeChild(event.target);
    })
}

/* Task 7
৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।  */
const deleteConfirm = document.getElementById('delete-confirm');
deleteConfirm.addEventListener('keyup', function(event){
    const deleteBtn = document.getElementById('delete');
    if(event.target.value == 'delete') {
        deleteBtn.removeAttribute('disabled');
    }
    else {
        deleteBtn.setAttribute('disabled', true);
    }
})
deleteConfirm.value = '';
/* Task 8
৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে।  */
var image = document.getElementById("image");

//Now, we need to add an Event Listener to listen when the image gets mouse over.

image.addEventListener('mouseenter', function(){
  image.src = "images/shoes/shoe-3.png"
});
image.addEventListener('mouseout', function(){
    image.src = "images/shoes/shoe-1.png"
  });

/* Task 9
৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে।  */
document.getElementById('subscribe').addEventListener('dblclick', function(){
    document.getElementById('subscribe').style.backgroundColor = 'green';
    document.getElementById('subscribe').style.color = 'white';
});