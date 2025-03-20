let arr = [1, 2, 3, 4];

function check(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000); // 3-second delay as per requirement
  });
}

check(arr)
  .then((res) => {
    // First Transformation: Filter Even Numbers
    return new Promise((resolve) => {
      setTimeout(() => {
        let filteredArr = res.filter((num) => num % 2 === 0);
        document.getElementById("output").innerText = `Filtered: ${filteredArr}`;
        console.log("Filtered:", filteredArr);
        resolve(filteredArr);
      }, 1000); // 1-second delay
    });
  })
  .then((filteredArr) => {
    // Second Transformation: Multiply by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        let multipliedArr = filteredArr.map((num) => num * 2);
        document.getElementById("output").innerText = `Final: ${multipliedArr}`;
        console.log("Final:", multipliedArr);
        resolve(multipliedArr);
      }, 2000); // 2-second delay
    });
  });
