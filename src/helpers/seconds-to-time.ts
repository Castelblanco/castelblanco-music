export const secondsToTime = (seconds: number, delimiter = ':'): string => {
    return [
        Math.floor(seconds / 60 / 60),
        Math.floor((seconds / 60) % 60),
        Math.floor(seconds % 60),
    ]
        .join(delimiter)
        .replace(/\b(\d)\b/g, '0$1')
        .replace(/^00\:/, '');
};
