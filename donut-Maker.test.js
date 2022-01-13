import DonutMaker from "./DonutMaker";

describe('DonuteMaker', ()=> {

    test ('store Donut', () => {
        const underTest = new DonutMaker(0);
        expect(typeof underTest.donutCount).toMatch('number');
    });

    test('add Donut', ()=> {
        const underTest = new DonutMaker(0);
        underTest.addDonut();
        expect(underTest.donutCount).toEqual(1);
    });

    

})