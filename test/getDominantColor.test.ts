import base64ToCanvas from "../src/utils/base64ToCanvas";
import getDominantColor from "../src/utils/getDominantColor";

const base64Img = 'data:image/png;base64,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';

describe('Get the dominant color of an image', () => {
    it('returns the dominant color in RGB form', async () => {
        const canvas = await base64ToCanvas(base64Img);
        const dominantColor = getDominantColor(canvas);
        expect(dominantColor).toBeTruthy();
        expect(dominantColor).toContainAllKeys(['r', 'g', 'b']);
        Object.keys(dominantColor).forEach(colorChannel => expect(colorChannel).toBeWithin(0, 256));
    });
});