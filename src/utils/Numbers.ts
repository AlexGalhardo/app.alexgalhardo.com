export default class Numbers {
    static toFloat(number: any): number {
        return Number((number / 100).toFixed(2));
    }
}
