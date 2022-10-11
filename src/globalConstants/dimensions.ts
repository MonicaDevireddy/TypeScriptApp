import { Dimensions, Platform, PixelRatio } from "react-native";

const { width, height, fontScale } = Dimensions.get('window');

export function widthDp(size: number) {
    return size * width / 100;
}

export function heightDp(size: number) {
    return size * height / 100;
}

export function fontSize(size: number) {
    return size / fontScale;
}

const scale = width / 320;

export function normalize(size: number) {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}