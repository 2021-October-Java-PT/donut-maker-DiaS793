class DonutMaker{
    constructor(donutCount, autoClickerCount){
        this.donutCount=donutCount;
        this.autoClickerCount=autoClickerCount;
        // this.donutMulti=donutMulti;
    }

    addDonut() {
        this.donutCount+=1;
      }

      addAutoClickerCount(){
          this.autoClickerCount +=0.1;
      }
    // addAutoClicker(){
    //     this.autoClicker += 0.1;
    // }

    // takeAwayDonut(){
    //     this.autoClicker += 0.1;
    //     this.donutCount -= 0.1;
    // }

    // addDonutMulti(){
    //     this.addDonutMulti+= 1;
    // }

    // multiplyByDonutMulti(){
    //     Math.pow(1.2, DonutMultiplierCount)
    // }

    

    
  
  
}

export default DonutMaker;