// JavaScript code for the Clock and Dark Mode Toggle functionality
window.onload = function () {
    const hourNeedle = document.querySelector('.needle.hour');
    const minuteNeedle = document.querySelector('.needle.minute');
    const secondNeedle = document.querySelector('.needle.second');
    const timeDisplay = document.querySelector('.time');
    const dateDisplay = document.querySelector('.date');
    const toggleButton = document.querySelector('.toggle');
    let isDarkMode = false;

    // Function to update the clock needles
    function updateClock() {
        const now = new Date();

        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondsDegrees = (seconds / 60) * 360;
        const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
        const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

        secondNeedle.style.transform = `translate(-50%, -100%) rotate(${secondsDegrees}deg)`;
        minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${minutesDegrees}deg)`;
        hourNeedle.style.transform = `translate(-50%, -100%) rotate(${hoursDegrees}deg)`;

        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        timeDisplay.textContent = formattedTime;

        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', options);
        const [weekday, month, day] = formattedDate.split(' ');
        dateDisplay.innerHTML = `${weekday} ${month} <span class="circle">${day}</span>`;
    }

    // Function to toggle between dark and light mode
    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            toggleButton.textContent = "Dark Mode";
        } else {
            document.documentElement.classList.remove('dark');
            toggleButton.textContent = "Light Mode";
        }
    }

    // Attach event listener to toggle button
    toggleButton.addEventListener('click', toggleDarkMode);

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initial update of the clock
    updateClock();
};
