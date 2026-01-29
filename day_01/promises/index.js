const myPromise = new Promise((resolve, reject) => {
  let marks = 31;
  if (marks >= 33) {
    resolve("You passed the exam!");
  } else reject("You failed the exam!");
});
myPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log("some error",error);
});