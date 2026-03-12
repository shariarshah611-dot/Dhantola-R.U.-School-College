// ১. স্ক্রল করে নির্দিষ্ট সেকশনে যাওয়া
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ২. কন্টাক্ট ফরম সাবমিট হ্যান্ডলার
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if(name && email) {
        alert(`ধন্যবাদ ${name}! আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।`);
        this.reset(); // ফরমটি খালি করে দিবে
    } else {
        alert('দয়া করে সব তথ্য পূরণ করুন।');
    }
});

// ৩. নাবার অ্যানিমেশন
window.onscroll = function() {
    let nav = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
        nav.style.background = "#002d25";
    } else {
        nav.style.background = "#004d40";
    }
};

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    // বর্তমান স্লাইড থেকে active ক্লাস সরিয়ে ফেলা
    slides[currentSlide].classList.remove('active');
    
    // পরের স্লাইড ইনডেক্স সেট করা
    currentSlide = (currentSlide + 1) % slides.length;
    
    // নতুন স্লাইডে active ক্লাস যোগ করা
    slides[currentSlide].classList.add('active');
}

// প্রতি ৩ সেকেন্ড (৩০০০ মিলি-সেকেন্ড) পর পর স্লাইড পরিবর্তন হবে
setInterval(showNextSlide, 3000);

// শিক্ষকের প্রোফাইল খোলার ফাংশন
function openTeacherProfile(name, rank, experience, bio) {
    const modal = document.getElementById('teacherModal');
    const details = document.getElementById('modalDetails');
    
    details.innerHTML = `
        <i class="fas fa-user-circle fa-5x" style="color:#00796b; margin-bottom:15px;"></i>
        <h2>${name}</h2>
        <p><strong>পদবী:</strong> ${rank}</p>
        <p class="exp-text">অভিজ্ঞতা: ${experience}</p>
        <hr style="margin:15px 0; border:0; border-top:1px solid #eee;">
        <p style="text-align:center; color:#666; line-height:1.8;">${bio}</p>
    `;
    
    modal.style.display = "block";
}

// পপ-আপ বন্ধ করার ফাংশন
function closeModal() {
    document.getElementById('teacherModal').style.display = "none";
}

// পপ-আপের বাইরে ক্লিক করলে যেন বন্ধ হয়ে যায়
window.onclick = function(event) {
    const modal = document.getElementById('teacherModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// শিক্ষকের প্রোফাইল খোলার ফাংশন (ছবি সহ)
function openTeacherProfile(name, rank, experience, bio, photoUrl) {
    const modal = document.getElementById('teacherModal');
    const details = document.getElementById('modalDetails');
    
    // ছবি না থাকলে একটি ডিফল্ট ছবি দেখাবে
    let displayPhoto = photoUrl ? photoUrl : 'https://via.placeholder.com/150/00796b/ffffff?text=No+Photo';

    details.innerHTML = `
        <div class="modal-profile-header">
            <div class="modal-photo-container">
                <img src="${displayPhoto}" alt="${name}" class="modal-img">
            </div>
            <h2>${name}</h2>
            <p class="modal-rank"><strong>${rank}</strong></p>
        </div>
        <div class="modal-body-content">
            <p class="exp-badge">অভিজ্ঞতা: ${experience}</p>
            <hr>
            <p class="bio-text">${bio}</p>
        </div>
    `;
    
    modal.style.display = "block";
}