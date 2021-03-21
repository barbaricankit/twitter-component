
let inputArea = document.querySelector(".tweet-text");
const tweetBtn = document.querySelector(".main-content .tweet-btn");
let tweets = document.querySelector(".tweets");
const tweet = () => {
  const inputTweet = inputArea.value;
  console.log(inputArea);
  tweets.innerText = inputTweet;
};
tweetBtn.addEventListener("click", tweet);