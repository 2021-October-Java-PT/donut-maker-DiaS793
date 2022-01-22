class DonutMaker {
  constructor() {
    this.donutCount = 0;
    this.autoClickerCount = 0;
    this.autoClickerPrice = 100;
    this.donutMultiCount = 0;
    this.donutMultiPrice = 10;
  }

  addDonut() {
    this.donutCount += 1;
  }

  getDonutCount() {
    return this.donutCount;
  }

  getAutoClickerCount() {
    return this.autoClickerCount;
  }

  getAutoClickerPrice() {
    return this.autoClickerPrice;
  }

  getDonutMultiCount() {
    return this.donutMultiCount;
  }

  getDonutMultiPrice() {
    return this.donutMultiPrice;
  }

  buyAutoClicker() {
    if (this.donutCount >= this.autoClickerPrice) {
      this.donutCount -= this.autoClickerPrice;
      this.autoClickerCount += 1;
      let price = 0.1 * this.autoClickerPrice;
      this.autoClickerPrice += price;
      console.log(this.autoClickerCount);
    }
    if (this.autoClickerCount >= 1) {
      setInterval(() => {
        console.log(this.donutCount);
        this.donutCount += this.autoClickerCount;
        const count = document.querySelector('#donutCount');
        count.innerText = this.donutCount;
      }, 1000);
    }
  }

  buyDonutMultiClicker() {
    if (this.donutCount >= this.donutMultiPrice) {
      this.donutCount -= this.donutMultiPrice;
      this.donutMultiCount += 1;
      let price = 0.1 * this.donutMultiPrice;
      this.donutMultiPrice += price;
      this.donutCount += Math.pow(1.2, 1);
      this.donutCount += this.donutMultiCount;
      const donutMulti = document.querySelector('#donutCount');
      donutMulti.innerText = this.donutCount;
      if (this.autoClickerCount >= 1) {
        this.donutCount += Math.pow(1.2, 1);
        this.autoClickerCount += this.donutMultiCount;
        const multiAuto = document.querySelector('#donutCount');
        multiAuto.innerText = autoClickerCount;
      }
    }
  }

  resetGame() {
    location.reload();
  }
}

export default DonutMaker;
