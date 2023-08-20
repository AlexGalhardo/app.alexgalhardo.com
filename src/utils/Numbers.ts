export default class Numbers {
    static toFloat(number: string): number {
        return Number((number / 100).toFixed(2));
    }
}
