import {Base64String} from "../models";

function base64ToCanvas(base64Image: Base64String): Promise<HTMLCanvasElement> {
    return new Promise(resolve => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const img = new Image();
        img.onload = () => {
            console.log('wow in onload')
            canvas.width = img.width;
            canvas.height = img.height;
            ctx?.drawImage(img, 0, 0);

            resolve(canvas);
        }
        console.log(img)

        img.src = base64Image;

        console.log(img.src);
    })
}

export default base64ToCanvas;