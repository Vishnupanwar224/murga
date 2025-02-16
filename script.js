let consoleText = document.getElementById('console');
let steps = [
    'Initializing backdoor... please wait...',
    'Bypassing firewall...',
    'Accessing system files...',
    'Decrypting data...',
    'Breaking encryption...',
    'Hacking complete. User credentials acquired...',
    'Opening backdoor to remote system...',
    'Data breach detected! Initiating self-destruct...',
    'Security breach. Locking system...',
    'Rebooting.... Hack successful installed in your device!'
];

function startHack() {
    let step = 0;
    let interval = setInterval(() => {
        consoleText.innerText += `\n${steps[step]}`;
        step++;
        if (step >= steps.length) {
            clearInterval(interval);
        }
    }, 1000);
}
