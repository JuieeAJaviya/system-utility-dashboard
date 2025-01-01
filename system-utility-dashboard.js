const os = require('os');
const fs = require('fs');
const path = require('path');

function getSystemInfo() {
    console.log("Fetching system information..."); // Debug
    const osType = os.type();
    const totalMemory = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
    const freeMemory = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
    const cpus = os.cpus().map(cpu => cpu.model).join(', ');
    const cpuCount = os.cpus().length;

    return `
System Information:
-------------------
OS Type       : ${osType}
Total Memory  : ${totalMemory}
Free Memory   : ${freeMemory}
CPU Details   : ${cpus}
CPU Count     : ${cpuCount}
    `;
}

function saveSystemInfoToFile(info) {
    console.log("Saving system information to file..."); // Debug
    const logDir = path.join(__dirname, 'logs');
    const logFile = path.join(logDir, 'system-info.txt');

    if (!fs.existsSync(logDir)) {
        console.log("Creating logs directory..."); // Debug
        fs.mkdirSync(logDir);
    }

    fs.writeFileSync(logFile, info);
    console.log(`System information saved to ${logFile}`);
}

// Main execution
console.log("Starting the System Utility Dashboard..."); // Debug
const systemInfo = getSystemInfo();
console.log(systemInfo); // Display system information
saveSystemInfoToFile(systemInfo); // Save to file
