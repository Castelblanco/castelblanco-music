export const structureClone = <T>(obj: T) => {
    return JSON.parse(JSON.stringify(obj)) as T;
};
