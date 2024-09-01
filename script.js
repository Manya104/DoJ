const responses = {
    "pocso cases": "The Fast Track Courts are dedicated to handling cases involving sensitive matters such as rape and those under the Protection of Children from Sexual Offences (POCSO) Act. For more information on POCSO cases and the cumulative disposal statistics, visit:\n\
[Fast Track Special Court](https://dashboard.doj.gov.in/fast-track-special-court/cumulative_disposal)",

    "e filing": "E-filing allows you to submit legal documents electronically, making the process more efficient. For details on how to e-file documents, please visit:\n\
[E-filing Procedure](https://filing.ecourts.gov.in/pdedev/)",

    "pending cases": "To monitor pending cases at different court levels, you can check the National Judicial Data Grid (NJDG). Here are the links for different courts:\n\
- [District Court](https://njdg.ecourts.gov.in/njdgnew/index.php)\n\
- [Supreme Court](https://njdg.ecourts.gov.in/scnjdg/)\n\
- [High Court](https://njdg.ecourts.gov.in/hcnjdgnew/)",

    "fast track courts": "Fast Track Courts are designed to expedite the trial process for sensitive cases, including sexual offences and POCSO cases. For more information about these courts, visit:\n\
[Fast Track Courts](https://dashboard.doj.gov.in/fast-track-special-court/)",

    "critical cases": "Fast Track Courts are designed to expedite the trial process for sensitive cases, including sexual offences and POCSO cases. For more information about these courts, visit:\n\
[Fast Track Courts](https://dashboard.doj.gov.in/fast-track-special-court/)",

    "rape case": "Fast Track Courts are designed to expedite the trial process for sensitive cases, including sexual offences and POCSO cases. For more information about these courts, visit:\n\
[Fast Track Courts](https://dashboard.doj.gov.in/fast-track-special-court/)",

    "vacancy": "Current vacancy positions in the judiciary, including the Supreme Court, High Courts, and District Courts, can be checked here:\n\
[Vacancy Positions](https://doj.gov.in/vacancy-position/)",

    "vacancies": "Current vacancy positions in the judiciary, including the Supreme Court, High Courts, and District Courts, can be checked here:\n\
[Vacancies Positions](https://doj.gov.in/vacancy-position/)",

    "number of judges": "Information on the number of judges appointed across various courts, including the Supreme Court, High Courts, and District Courts, is available here:\n\
[Number of Judges](https://newdelhi.dcourts.gov.in/list-of-judges/)",

    "live streaming": "Live streaming of court cases promotes transparency. You can view live streams of ongoing court cases at:\n\
[Live Streaming](https://doj.gov.in/live-streaming/)",

    "tele law services": "Tele Law services provide remote access to legal aid. For more information on how to avail these services, visit:\n\
[Tele Law Services](https://www.tele-law.in/)",

    "e court services": "eCourt Services provide digital access to court-related processes, including case filings, status tracking, and court schedules, enhancing convenience and efficiency for users. Visit:\n\
[eCourt Services](https://services.ecourts.gov.in/ecourtindia_v6/)",

    "e challan": "e-Challan is an online system for issuing and paying traffic violation fines, facilitating digital transactions and record management. For more details, visit:\n\
[e-Challan](https://echallan.parivahan.gov.in/index/accused-challan)",

    "e challan procedure": "The e-Challan procedure allows users to electronically pay fines and penalties for traffic violations through an online portal. For detailed procedural information, visit:\n\
[e-Challan Procedure](https://www.bankbazaar.com/driving-licence/e-challan.html)",

    "case status": "To check the status of specific court cases, use the following link:\n\
[Case Status](https://services.ecourts.gov.in/ecourtindia_v6/)"
};

// Function to handle user input
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    addMessage(userInput, 'user');

    // Determine bot response
    let botResponse = "I'm sorry, I didn't understand that. Please ask about specific topics related to the Department of Justice.";

    // Loop through the responses and check for matches using regular expressions
    for (let key in responses) {
        const pattern = new RegExp(`\\b${key}\\b`, 'i'); // \b ensures whole word match, 'i' for case-insensitive
        if (pattern.test(userInput)) {
            botResponse = responses[key];
            break;
        }
    }

    // Display bot response
    addMessage(botResponse, 'bot');
    document.getElementById("user-input").value = ""; // Clear input
}

// Function to add a message to the chat body
function addMessage(message, sender) {
    const chatBody = document.getElementById("chat-body");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerHTML = message.replace(/\n/g, "<br>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
}

// Function to display initial message
function displayInitialMessage() {
    const initialMessage = "How can I help you?";
    addMessage(initialMessage, 'bot');
}

// Function to check for Enter key press
document.getElementById("user-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
        e.preventDefault(); // Prevent the default form submission if in a form
    }
});

// Display the initial message on page load
window.onload = function() {
    displayInitialMessage();
};



