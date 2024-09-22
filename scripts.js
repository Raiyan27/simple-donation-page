const donation = document.getElementById("donation-btn");
const history = document.getElementById('history-btn');
const donationBox = document.getElementById('donation-box');

let balance = document.getElementById('balance').innerText;

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

const openModalButton = document.getElementById('quotaDonation-btn');
const modalOverlay = document.getElementById('bonus-modal');
const closeModalButton = document.getElementById('close-modal');

function openBonusModal(){
    modalOverlay.classList.remove('hidden'); 
};

closeModalButton.addEventListener('click', function(){
    modalOverlay.classList.add('hidden'); 
});

function makeDonation(){
    const noakhaliDonation = document.getElementById("noakhaliDonation").value;
    noakhaliDonation = Number(noakhaliDonation);


    if(balance >= noakhaliDonation){
        balance -= noakhaliDonation;
        openBonusModal();
    }
    else{
        window.alert("Not Enough Balance!");
    }
}

document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './blog.html'; 
});

document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './blog.html'; 
});
