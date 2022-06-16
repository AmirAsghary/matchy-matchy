import {RGBChannels} from "../models";
import avgImageData from "./avgImageData";

function getDominantColor(canvas: HTMLCanvasElement): RGBChannels {
    const canvasData = canvas.getContext('2d')?.getImageData(0, 0, canvas.width, canvas.height)?.data;

    if(!canvasData)
        throw new Error('Canvas imageData not available');

    const rgbChannels = avgImageData(canvasData);

    return {
        r: rgbChannels[0],
        g: rgbChannels[1],
        b: rgbChannels[2]
    }
}

export default getDominantColor;