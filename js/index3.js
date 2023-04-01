const x1 = 10;
 const x2 = 30;
 const number = 45;

 if (number < x1) {
    console.log(`${number} входить до ${x1} `);
 } else if (number > x1 ) {
    console.log(`${number} не входить до ${x1}`);
 } else if (x1 < number  < x2) {
    console.log(`${number} не входить в ${x1} та входить в ${x2}`);
 } else if (number < x1 || number > x2) {
    console.log(`${number} входить до ${x1} або ${number} не входить ${x1}`);
 };