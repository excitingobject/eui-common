export default {
    padding: (n: number, digit: number, pad: string, dir: 'left' | 'right' = 'left'): string => {
        let result = n.toString();
        const pCount = digit - result.toString().length
        if (pCount > 0) {
            const p = pad.substring(0, 1);
            for (let i = 0; i < pCount; i++) {
                if (dir == 'left') {
                    result = p + result;
                } else {
                    result += p;
                }
            }
        }
        return result;
    },
    arrayToStr: (arr: any[], sep: string = ',') => {
        if(arr.length > 0) {
            let sSet = new Set(); // 중복 제거
            arr.map(item => {
                if(item != undefined && item != null) {
                    sSet.add(item.toString())
                }
            });
            return Array.from(sSet).join(sep);
        }
        return '';
    },
    
    limitLength: (str?: string, max: number = 50, ellipsis: string = '...') => {
        if(str == undefined || str == null) return ''
        return str.length < max ? str :  str.substring(0, max) + ellipsis
    }
}