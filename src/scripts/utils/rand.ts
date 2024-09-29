const rand = {
    code: (prefix = '', postfix = '', n = 8): string => {
        // n자리 난수 키 생성
        var key = "";
        for (var i = 0; i < n; i++) {
            key += rand.minmax(0, 9);
        }
        return prefix + key + postfix;
    },
    minmax: (min: number, max: number): number => {
        // min ~ max 난수 생성
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
}
export default rand