const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

const output = fs.writeFileSync('outpuut.txt', input);
