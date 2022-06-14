#include <stdio.h>
#include <emscripten/emscripten.h>

#ifdef __cplusplus
extern "C" {
#endif

// TODO the calculations can be much faster if done in parallel
EMSCRIPTEN_KEEPALIVE int* getAvgColor(int* imageData, int dataLength) {
    int rgbaColorBufferLength = 4;
    int dataPoints = dataLength / rgbaColorBufferLength;

    int r = 0, g = 0, b = 0;
    for(int i = 0; i<dataLength; i = i + rgbaColorBufferLength) {
        r += imageData[i];
        g += imageData[i+1];
        b += imageData[i+2];
    }

    r = r / dataPoints;
    g = g / dataPoints;
    b = b / dataPoints;

    static int avgRGB[] = { r, g, b };

    return avgRGB;
}

#ifdef __cplusplus
}
#endif