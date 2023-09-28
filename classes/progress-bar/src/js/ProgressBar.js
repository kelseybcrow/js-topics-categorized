export class ProgressBar {
  constructor(value, gradient, minValue, maxValue, element) {
    this.value = 0;
    this.gradient = 1;
    this.minValue = 0;
    this.maxValue = 10;
    this.element = document.createElement('div');
    this.refreshElement();
  }

  refreshElement() {
    this.element.innerHTML = `
      <div class="label">
        ${this.value}/${this.maxValue}
      </div>
      <div class="progress">
         <div class="btn-minus"></div>
         <div class="bar">
           <div style="width: ${
             (this.value / this.maxValue) * 100
           }%" class="knob"></div>
         </div>
         <div class="btn-plus"></div>
      </div>
    `;

    const plusBtn = this.element.querySelector('.btn-plus');
    plusBtn.addEventListener('click', () => {
      this.value = Math.min(this.maxValue, this.value + this.gradient);
      this.refreshElement();
    });

    const minusBtn = this.element.querySelector('.btn-minus');
    minusBtn.addEventListener('click', () => {
      this.value = Math.max(this.minValue, this.value - this.gradient);
      this.refreshElement();
    });
  }
}
