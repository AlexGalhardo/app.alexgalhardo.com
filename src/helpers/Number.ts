export default class Number {
    static toFloat(intNumber: number): number {
        return parseFloat(intNumber / 100).toFixed(2);
    }
}
