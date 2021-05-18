// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

// Make sure you register your service worker here too

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      let x = 1;
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        newPost.addEventListener("click", () => { router.setState("entry", entry ) });
        document.querySelector('main').appendChild(newPost);
        entry.num = x++;
      });
    });
    router.setState("home",null);
});
window.addEventListener('popstate', () => {
  window.history.back()
});
//console.log(document.body.getElementsByTagName('header')[0]);
document.body.getElementsByTagName('header')[0].getElementsByTagName('img')[0].addEventListener("click", () => {
  router.setState("history",  null);
});
document.body.getElementsByTagName('header')[0].getElementsByTagName('h1')[0].addEventListener("click", () => {
  router.setState("home",  null);
});