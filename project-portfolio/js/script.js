// Interactive Greeting
document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.querySelector('h1');
    const hours = new Date().getHours();
    let greeting = "Welcome";

    if (hours < 12) {
        greeting = "Good Morning";
    } else if (hours < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    welcomeMessage.textContent = `${greeting}!`;
});

// Highlight Skills on Hover
document.querySelector('#skills').addEventListener('mouseover', () => {
    document.querySelector('#skills').style.backgroundColor = '#007bff';
    document.querySelector('#skills').style.color = '#fff';
});

document.querySelector('#skills').addEventListener('mouseout', () => {
    document.querySelector('#skills').style.backgroundColor = '';
    document.querySelector('#skills').style.color = '';
});

// Change Profile Picture on Click
document.querySelector('#profile_pic').addEventListener('click', () => {
    const profilePic = document.querySelector('#profile_pic');
    profilePic.src = profilePic.src.includes('IMG_1132')
        ? 'C:\\Users\\samwa\\Pictures\\alternate-image.JPEG'
        : 'C:\\Users\\samwa\\Pictures\\iCloud Photos\\Photos\\IMG_1132.JPEG';
});

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = "Toggle Dark Mode";
    document.body.prepend(toggleButton);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

// Add CSS for Dark Mode Dynamically
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background-color: #2c3e50;
        color: #ecf0f1;
    }
    .dark-mode a {
        color: #3498db;
    }
`;
document.head.appendChild(style);
