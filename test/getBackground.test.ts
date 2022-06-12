// @ts-ignore
import photo from './assets/photo.jpg';

const getBackground = (() => {}) as any;

const rgbRegExp = new RegExp(/rgb\((?:([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5]),? ?){3}\)/g);

function solidBackgroundTest() {
    describe('-- generating solid color backgrounds', () => {
        it('returns background-color', () => {
            const background = getBackground(photo);
            expect(background).toContain('background-color:');
            expect(background).toHaveProperty('css');
            expect(background.css).toMatch(rgbRegExp);
            expect(background).toHaveProperty('channels');
            expect(background.channels).toContainAllKeys(['r', 'g', 'b']);
        });
    });
}

describe('Testing the background generation functionality', () => {
    solidBackgroundTest();
});