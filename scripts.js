const donation = document.getElementById("donation-btn");
const history = document.getElementById('history-btn');
const donationBox = document.getElementById('donation-box');

let balance = document.getElementById('balance').innerText;
balance = parseInt(balance);



function swtichToDonation(){
    donation.classList.add('bg-[#B4F461]');
    history.classList.remove('bg-[#B4F461]');
    history.classList.add("bg-[#FFFFFF]");
    donationBox.classList.remove('hidden');
}

function swtichToHistory(){
    donation.classList.remove("bg-[#B4F461]");
    history.classList.add("bg-[#B4F461]");
    donation.classList.add("bg-[#FFFFFF]");
    donationBox.classList.add('hidden');
}

//modal functions and variables
const openModalButton = document.getElementById('quotaDonation-btn');
const modalOverlay = document.getElementById('bonus-modal');
const closeModalButton = document.getElementById('close-modal');

function openBonusModal(){
    modalOverlay.classList.remove('hidden'); 
    document.getElementById('balance').innerText = balance;
};

closeModalButton.addEventListener('click', function(){
    modalOverlay.classList.add('hidden'); 
});

//make donation function
function makeDonation(amount){
    if(balance >= amount && amount > 0){
        balance -= amount;
        document.getElementById('balance').innerText = balance;
        openBonusModal();

        return true;
    }
    else{
        window.alert("Not Enough Balance or Invalid Amount!");

        return false;
    }
}

//noahkhaliDonation
document.getElementById('noahkhaliDonation-btn').addEventListener('click', function(){
    let amount = document.getElementById('noakhaliDonation').value;
    amount = parseInt(amount);

    let isSuccessful = makeDonation(amount);  

    if (isSuccessful) {
        let funds = document.getElementById('noahkhali-funds').innerText;
        funds = parseInt(funds);  
        document.getElementById('noahkhali-funds').innerText = funds + amount; 
    }
});


//feniDonation
function feniDonation(){
    let amount = document.getElementById('feniDonation').value;
    amount = parseInt(amount);
    console.log(amount);

    let isSuccessful = makeDonation(amount);
    console.log(isSuccessful);
    if(isSuccessful){
        funds = document.getElementById('feni-funds').innerText;
        document.getElementById('feni-funds').innerText = funds + amount;
    }
}

//QuotaDonation
function feniDonation(){
    let amount = document.getElementById('quotaDonation').value;
    amount = parseInt(amount);
    console.log(typeof amount);
    console.log(amount);

    let isSuccessful = makeDonation(amount);
    if(isSuccessful){
        funds = document.getElementById('quota-funds').innerText;
        document.getElementById('quota-funds').innerText = funds + amount;
    }
}

// files connection
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './blog.html'; 
});

function home(){
    window.location.href = './index.html'; 
};
