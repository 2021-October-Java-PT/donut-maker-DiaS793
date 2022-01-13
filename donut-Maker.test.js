import DonutMaker from "./DonutMaker";

describe('DonutMaker', ()=> {

    test ('store Donut', () => {
        const underTest = new DonutMaker(0);
        expect(typeof underTest.donutCount).toMatch('number');
    });

    test('add Donut', () => {
        const underTest = new DonutMaker(0,0);
        underTest.addDonut(0);
        expect( underTest.donutCount).toEqual(1);
    });

    test('store autoClicker', () => {
        const underTest = new DonutMaker(0,0);
        expect(typeof underTest.autoClickerCount).toMatch('number');
    });

    test('add autoClicker', ()=> {
        const underTest = new DonutMaker(1,0);
        underTest.addAutoClickerCount(0);
        expect( underTest.autoClickerCount).toEqual(0.1);
    });


    // test ('add Donut', () => {
    //     const underTest = new DonutMaker(0);
    //     expect(typeof underTest.donutCount).toEqual(1);
    // });

    // test ('store AutoClick', ()=> {
    //     const underTest = new donutCount(1,0);
    //     underTest.addAutoClicker();
    //     expect(typeof underTest.donutCount).toMatch('number');
    // });

    

  

    // test('store AutoClick', () => {
    // const underTest = new AutoClicker(0);
    // underTest.addAutoClicker();
    // expect(typeof underTest.autoClicker).toMatch('number');
    // });

    // test('add AutoClick', () => {
    // const underTest = new AutoClicker(0);
    // underTest.addAutoClicker();
    // expect(underTest.autoClicker).toEqual(1);

    // });

    // test ('Auto Click should take away from donut Counter', () => {
    // const underTest = new AutoClicker(1);
    // const underTest = new DonutMaker(1);
    // underTest.takeAwayDonuts();
    // expect(uderTest)
    // });

});