class HashTable {
    keyMap: any[];
    constructor(size = 4) {
        this.keyMap = new Array(size);
    }
    private hash(key: string) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key: string, value: any) {
        const index = this.hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        let dupilicateKeyFlag = false;
        for (let v of this.keyMap[index]) {
            if (v[0] === key) {
                v[1] = value;
                dupilicateKeyFlag = true;
            }
        }
        if (!dupilicateKeyFlag) {
            this.keyMap[index].push([key, value]);
        }
        return index;
    }

    get(key: string) {
        const index = this.hash(key);
        if (!this.keyMap[index]) {
            return null;
        }
        for (let v of this.keyMap[index]) {
            if (v[0] === key) {
                return v[1];
            }
        }
        return null;
    }

    values() {
        const valueList = this.keyMap
            .filter((v) => v)
            .reduce((pre, cur) => {
                cur.forEach((val: any[]) => {
                    if (!pre.includes(val[1])) {
                        pre.push(val[1]);
                    }
                });
                return pre;
            }, []);
        return valueList;
    }

    keys() {
        const keyList = this.keyMap
            .filter((v) => v)
            .reduce((pre, cur) => {
                cur.forEach((val: any[]) => {
                    if (!pre.includes(val[0])) {
                        pre.push(val[0]);
                    }
                });
                return pre;
            }, []);
        return keyList;
    }
}
