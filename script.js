function calculateAge() {
    let birthDateInput = document.getElementById("birthDate").value;
    let resultDiv = document.getElementById("result");

    if (!birthDateInput) {
        alert("Please select your birth date!");
        return;
    }

    let birthDate = new Date(birthDateInput);
    let currentDate = new Date();

    if (birthDate > currentDate) {
        alert("Birth date cannot be in the future!");
        return;
    }

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    // Adjust negative days and months
    if (days < 0) {
        months--;
        let prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    
    let totalDays = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));
    let totalWeeks = Math.floor(totalDays / 7);


    document.getElementById("years").textContent = years + " Years";
    document.getElementById("months").textContent = months + " Months";
    document.getElementById("days").textContent = days + " Days";
    

    resultDiv.classList.remove("hidden");
    setTimeout(() => resultDiv.classList.add("show"), 100);

    
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

function resetAge() {
    document.getElementById("birthDate").value = "";
    document.getElementById("years").textContent = "0 Years";
    document.getElementById("months").textContent = "0 Months";
    document.getElementById("days").textContent = "0 Days";
    document.getElementById("extra").textContent = "";
    let resultDiv = document.getElementById("result");
    resultDiv.classList.remove("show");
    setTimeout(() => resultDiv.classList.add("hidden"), 300);
}
