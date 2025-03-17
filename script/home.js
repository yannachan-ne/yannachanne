const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
let currentDate = new Date();

function renderCalendar(date) {
    calendarDays.innerHTML = "";
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    monthYear.textContent = date.toLocaleString("default", { month: "long", year: "numeric" });
    
    for (let i = 0; i < firstDay; i++) {
        calendarDays.innerHTML += `<div></div>`;
    }
    
    for (let i = 1; i <= lastDate; i++) {
        let dayDiv = document.createElement("div");
        dayDiv.textContent = i;
        if (
            i === new Date().getDate() && 
            date.getMonth() === new Date().getMonth() &&
            date.getFullYear() === new Date().getFullYear()
        ) {
            dayDiv.classList.add("current-day");
        }
        calendarDays.appendChild(dayDiv);
    }
}

prevMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

renderCalendar(currentDate);


// phat nhac
const audio = document.getElementById("audio-player");

// Tùy chọn: Tự động phát khi trang tải xong
// audio.play();
