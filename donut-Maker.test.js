import DonutMaker from "./DonutMaker";

describe('DonutMaker', ()=> {

    test ('store Donut', () => {
        const underTest = new DonutMaker();
        expect(typeof underTest.donutCount).toMatch('number');
    });

    test('add Donut', ()=>{
        const underTest = new DonutMaker();
        underTest.addDonut();
        expect(underTest.donutCount).toEqual(1);
    });

    test('add autoClickerCount', ()=> {
        const underTest = new DonutMaker();
        underTest.addAutoClickerCount();
        expect(underTest.autoClickerCount).toEqual(1);
    });

    test('add autoClickerPrice', ()=> {
        const underTest = new DonutMaker();
        underTest.addAutoClickerCount();
        expect(underTest.autoClickerPrice).toEqual(110);
    });

    test('add donutMultiCount', ()=> {
        const underTest = new DonutMaker();
        underTest.addDonutMultiCount();
    
        expect(underTest.donutMultiCount).toEqual(1);
    });

    test('add donutMultiPrice', () => {
        const underTest = new DonutMaker();
        underTest. addDonutMultiCount();
        expect(underTest.donutMultiPrice).toEqual(11);
    });

    
});