export class Rating {
  constructor(properties) {
    this.element = document.createElement('div');
    this.element.classList.add('rating');
    this.headline = properties.headline;
    this.ratingValue = properties.ratingValue;
    this.stars = null;
    this.renderWidget();
  }

  renderWidget = () => {
    this.element.innerHTML = `
      <div class="rating__value">${this.ratingValue}</div>
      <div class="rating__stars">
        <div class="rating__star"></div>
        <div class="rating__star"></div>
        <div class="rating__star"></div>
        <div class="rating__star"></div>
        <div class="rating__star"></div>
      </div>
    `;

    this.stars = this.element.querySelectorAll('.rating__star');
    console.log(this.stars);
    this.stars.forEach((star, index) => {
      index < this.ratingValue && star.classList.add('rating__star--on');
      star.addEventListener('click', () => {
        this.setRating(index);
      });
    });
  };

  setRating = async (index) => {
    this.ratingValue = index + 1;
    const response = await this.postRating();
    console.log(response);
    this.renderWidget();
  };

  postRating = async () => {
    const url = 'https://test-api.codingbootcamp.cz/api/77a4c2e8/ratings';
    const ratingObj = {
      rating_subject: this.headline,
      rating_value: this.ratingValue,
    };
    const postResponse = await fetch(url, {
      method: 'Post',
      body: JSON.stringify(ratingObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const readablePostResponse = await postResponse.json();
    console.log(readablePostResponse);
  };
}
