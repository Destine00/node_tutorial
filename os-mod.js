const os = require("os");

const userDetails = {
  info: os.userInfo(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  release: os.release(),
  name: os.type(),
  machine: os.machine(),
  platform: os.platform(),
  hostname: os.hostname(),
  uptime: os.uptime(),
  version: os.version(),
};
console.log(userDetails);
