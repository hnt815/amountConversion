export default function yuantofen(){
    let newNum = num + '';
    if (newNum.indexOf('.') > -1) {
      let str1 = newNum.substring(0, newNum.indexOf('.'));
      let str2 = newNum.substring(newNum.lastIndexOf('.') + 1);
      if (str2.length === 1) {
        return Number(str1 + str2 + '0');
      } else if (str2.length === 2) {
        return Number(str1 + str2);
      } else {
        let str3 = str2.substring(0, 2);
        let str4 = str2.substring(2);
        return Number(str1 + str3 + '.' + str4).toFixed(2);
      }
    } else {
      return Number(newNum + '00');
    }
}