const os = require("os");
console.log(os);
console.log(os.homedir());//C:\Users\DELL
console.log(os.hostname());//DESKTOP-6J0M3JM
console.log(os.platform());//win32 -blackform
console.log(os.release());//10.0.22631
console.log(os.userInfo());//

console.log(os.totalmem());//8311836672
const totalMemoryGB = os.totalmem()/(1024 * 1024 * 1024);
console.log(totalMemoryGB);

console.log(os.type());//Windows_NT
console.log(os.freemem());//1224851456
console.log(os.userInfo());

