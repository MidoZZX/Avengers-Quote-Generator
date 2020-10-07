window.onload = init;

const QUOTES = [
{
  quote: "I am Iron Man.",
  author: "Tony Stark" },

{
  quote: "Hulk smash!",
  author: "Bruce Banner" },

{
  quote: "Don’t do anything I would do, and definitely don’t do anything I wouldn’t do. There’s a little gray area in there, and that’s where you operate.",
  author: "Tony Stark" },
{
  quote: "I do anything and everything that Mr. Stark requires — including occasionally taking out the trash.",
  author: "Pepper Pots" },

{
  quote: "Sir, I’m going to have to ask you to exit the donut.",
  author: "Nick Fury" },

{
  quote: "Look, it’s me, I’m here, deal with it. Let’s move on.",
  author: "James Rhodes" },
{
  quote: "This drink, I like it. Another!",
  author: "Thor" },

{
  quote: "Mew-mew? What’s mew-mew?",
  author: "Darcy Lewis" },

{
  quote: "I don’t want to kill anyone. I don’t like bullies. I don’t care where they’re from.",
  author: "Steve Rogers" },
{
  quote: "I can do this all day.",
  author: "Steve Rogers" }];



function init() {
  generateQuote();
  tweetQuote();
}

function generateQuote() {
  let random = Math.floor(Math.random() * QUOTES.length);
  document.getElementById("text").innerText = QUOTES[random].quote;
  document.getElementById("author").innerText = QUOTES[random].author;
}

function tweetQuote() {
  let quote = document.getElementById("text").innerText;
  let author = document.getElementById("author").innerText;
  document.getElementById("tweet-quote").setAttribute("href", "https://twitter.com/intent/tweet?text=\"" + quote + "\" " + author);
}