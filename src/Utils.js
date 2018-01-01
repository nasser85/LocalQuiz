export default class Utils {
    static randomize(arr) {
        var newArr = [];
        while (arr.length) {
            newArr.push(arr.splice(Math.floor(arr.length*Math.random()), 1)[0]);
        }
        return newArr;
    }
}
