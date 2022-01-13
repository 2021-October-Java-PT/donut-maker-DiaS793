import AutoClicker from "./autoClicker";

test('store AutoClick', () => {
    const underTest = new AutoClicker(0);
    underTest.addAutoClicker();
    expect(typeof underTest.autoClicker).toMatch('number');
});

test('store AutoClick', () => {
    const underTest = new AutoClicker(0);
    underTest.addAutoClicker();
    expect(underTest.autoClicker).toEqual(1);

});

