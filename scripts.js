const donation = document.getElementById("donation-btn");
const history = document.getElementById('history-btn');
const donationBox = document.getElementById('donation-box');
const historyBox = document.getElementById('history-box');
const footer = document.getElementById('footer');

let balance = document.getElementById('balance').innerText;
balance = parseInt(balance);

function swtichToDonation(){
    donation.classList.add('bg-green-600');
    history.classList.remove('bg-green-600');
    history.classList.add("bg-[#FFFFFF]");
    donationBox.classList.remove('hidden');
    historyBox.classList.add("hidden");
    footer.classList.remove('hidden');
}

function swtichToHistory(){
    donation.classList.remove("bg-green-600");
    history.classList.add("bg-green-600");
    donation.classList.add("bg-[#FFFFFF]");
    donationBox.classList.add('hidden');
    historyBox.classList.remove("hidden");
    footer.classList.add('hidden');
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
    if(balance < amount){
        window.alert("Not Enough Balance!");
        return false;
    }
    else if(amount <= 0 || isNaN(amount)){
        window.alert("Enter a valid amount!");
        return false;
    }
    else{
        balance -= amount;
        document.getElementById('balance').innerText = balance;
        openBonusModal();

        return true;
    }
}

//noahkhaliDonation
document.getElementById('noahkhaliDonation-btn').addEventListener('click', function(){
    let amount = document.getElementById('noakhaliDonation').value;
    amount = parseInt(amount);

    let isSuccessful = makeDonation(amount);  

    if (isSuccessful) {
        donationHistory(amount, "NoahKhali");
        let funds = document.getElementById('noahkhali-funds').innerText;
        funds = parseInt(funds);  
        document.getElementById('noahkhali-funds').innerText = funds + amount; 
    }
});


//feniDonation
document.getElementById('feniDonation-btn').addEventListener('click', function(){
    let amount = document.getElementById('feniDonation').value;
    amount = parseInt(amount);

    let isSuccessful = makeDonation(amount);  

    if (isSuccessful) {
        donationHistory(amount, "Feni");
        let funds = document.getElementById('feni-funds').innerText;
        funds = parseInt(funds);  
        document.getElementById('feni-funds').innerText = funds + amount; 
    }
});

//QuotaDonation
document.getElementById('quotaDonation-btn').addEventListener('click', function(){
    let amount = document.getElementById('quotaDonation').value;
    amount = parseInt(amount);

    let isSuccessful = makeDonation(amount);  

    if (isSuccessful) {
        donationHistory(amount, "Quota");
        let funds = document.getElementById('quota-funds').innerText;
        funds = parseInt(funds);  
        document.getElementById('quota-funds').innerText = funds + amount; 
    }
});

// files connection
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './blog.html'; 
});

function home(){
    window.location.href = './index.html'; 
};

//history box
function getDate() {
    const date = new Date();
    return date.toString(); 
}

function donationHistory(amount, donationType) {
    const container = document.getElementById('history-box');

    const noHistoryCard = document.getElementById('no-history-card');
    if (noHistoryCard) {
        container.removeChild(noHistoryCard); 
    }

    const currentDate = getDate();

    const card = document.createElement('div');
    card.className = 'card p-4 bg-white shadow-md rounded-md my-2 border';

    const title = document.createElement('h1');
    title.className = 'text-xl font-bold mb-2';
    if(donationType === 'NoahKhali'){
        title.innerText = amount + " Taka is donated for flood relief in Noahkhali";
    }
    else if(donationType === 'Feni'){
        title.innerText = amount + " Taka is donated for famine-2024 at Feni";
    }
    else{
        title.innerText = amount + " Taka is donated for Aid to Injured in the Quota Movement Bangladesh";
    }

    const dateTime = document.createElement('p');
    dateTime.className = 'text-sm text-gray-500';
    dateTime.textContent = "Date: " + currentDate;

    card.appendChild(title);
    card.appendChild(dateTime);

    container.appendChild(card);
}







