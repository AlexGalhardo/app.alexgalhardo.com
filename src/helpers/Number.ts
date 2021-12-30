class Number {
    static toFloat(intNumber: number): number {
        return parseFloat(intNumber / 100).toFixed(2);
    }
}

export default Number;
