
const spin = function(line, delay) {
  setTimeout(() => {
    process.stdout.write(`\r${line}   `);
  }, delay);
};


const spinner2 = function() {
  let time = 100;
  let spinLine = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

  for (const frame of spinLine) {
    spin(frame, time);
    time += 200;
  }
};
spinner2();