document.addEventListener("DOMContentLoaded", () => {
    let openedTabs = []; 
    
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
 
    function appendToConsole(text) {
        const consoleElement = document.getElementById("console");
        const newLine = document.createElement("div");
        newLine.textContent = text;
        consoleElement.appendChild(newLine);
        consoleElement.scrollTop = consoleElement.scrollHeight; 
    }

    function closeAllTabs() {
        const otherTabsClosed = window.open('', '_self');
        otherTabsClosed.close();
    }

    function addBlinkingDots() {
        const consoleElement = document.getElementById("console");
        const dots = document.createElement("span");
        dots.className = "blinking-dots";
        dots.textContent = "....";
        consoleElement.appendChild(dots);
    }

    function clearScreen() {
        document.body.innerHTML = ""; 
        document.body.style.backgroundColor = "#32CD32"; 
        const consoleElement = document.createElement("div");
        consoleElement.id = "console";
        consoleElement.style.display = "block";
        document.body.appendChild(consoleElement);
    }

    function showInitialContent() {
        setTimeout(() => {
            const para = document.getElementById("para");
            para.style.display = "block"; 

            setTimeout(() => {
                const image = document.getElementById("image");
                image.style.display = "block"; 

                
                setTimeout(() => {
                    document.body.style.backgroundColor = "#00ff00"; 
                    document.body.innerHTML = ""; 

                    
                    clearScreen();
                    hacked();
                }, 1500); 
            }, 2000); 
        }, 3000); 
    }

    function closeAllOpenedTabs() {
        openedTabs.forEach(tab => {
            if (tab && !tab.closed) {
                tab.close(); 
            }
        });
    }
    
    async function hacked() {
        await delay(1000);
        appendToConsole("Initializing Hacking...");
        addBlinkingDots();

        await delay(2000);
        appendToConsole("Reading Your Files...");
        addBlinkingDots();

        await delay(4000);
        appendToConsole("Password Files Detected...");
        addBlinkingDots();

        await delay(2000);
        appendToConsole("Sending all Files to server...");
        addBlinkingDots();

        await delay(6000);
        appendToConsole("Sending all Passwords to server...");
        addBlinkingDots();

        await delay(3000);
        appendToConsole("Cleaning Up...");
        addBlinkingDots();

        await delay(4000);
        appendToConsole("Process Completed\nSystem Hacked Successfully.");
 
        closeAllOpenedTabs();
    }

    function openSomeTabs() {
        openedTabs.push(window.open("https://www.hackerone.com/", "_blank"));
        openedTabs.push(window.open("https://www.fortinet.com/resources/cyberglossary/what-is-hacking", "_blank"));
    }

    closeAllOpenedTabs();

    openSomeTabs();

    showInitialContent();
    
});
