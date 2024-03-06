// We have to take Iteam

// WE will take all iteam by uising querry selector

const iteam = document.querySelectorAll(".iteam");

console.log(iteam);

// we will run a loop for node list

/* iteam.forEach((iteam) => {
  console.log(iteam.innerHTML); // to watch inner HTML
});
 */

// using another loop MAP  But it will work on  arry not is node list so we have to make ARRy for our iteam

// we will use map for all

const newIteam = Array.from(iteam); // to make it arry

newIteam.map((iteam) => {
  console.log(iteam.innerHTML);

  let count = 0;
  const counterUp = () => {
    count += 1;
    iteam.innerHTML = count;
    console.log(count);

    if (count >= 20) {
      clearInterval(stop);
    }
  };

  const stop = setInterval(() => {
    counterUp();
  }, 100);
});

// let take a function to put value

/* counterUp();
counterUp();
counterUp();
counterUp();
counterUp();
counterUp(); */

// so now we will  use set inter val for counterUP
