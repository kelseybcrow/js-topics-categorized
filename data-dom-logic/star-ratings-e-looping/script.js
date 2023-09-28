const textRating = document.querySelector('.rating__value');
const stars = document.querySelectorAll('.rating__star');
// stars is a nodelist

stars.forEach((star, index) => {
  star.addEventListener('click', (e) => {
    console.log(index);
    textRating.innerHTML = index + 1;
    stars.forEach((innerStar, innerIndex) => {
      innerStar.classList.remove('rating__star--on');
      if (innerIndex <= index) innerStar.classList.add('rating__star--on');
    });
  });
});

// loop over the stars UNTIL THE CURRENT INDEX to add on class
// for (let i = 0; i < index + 1; i++) {
//   stars[i].classList.add('rating__star--on');
// }
// // loop over stars AFTER CURRENT INDEX to remove on class
// for (let i = index + 1; i < stars.length; i++) {
//   console.log(stars[i]);
//   stars[i].classList.remove('rating__star--on');
// }
