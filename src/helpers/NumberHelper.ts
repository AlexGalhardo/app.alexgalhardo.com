export default class NumberHelper {
    static toFloat(number: string): number {
        return (number / 100).toFixed(2);
    }
}
