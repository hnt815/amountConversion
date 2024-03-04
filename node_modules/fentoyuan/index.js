export default function fentoyuan(num){
    let newNum = num + '';
    if (newNum.indexOf('.') > -1) { //有小数点
      let str1 = newNum.substring(0, newNum.indexOf('.'));
      let str2 = newNum.substring(newNum.lastIndexOf('.') + 1);
      if (str1.length === 1) { //1.2
        newNum = Number('0.0' + str1 + str2);
        return newNum;
      } else if (str1.length === 2) { //11.2
        newNum = Number('0.' + str1 + str2);
        return newNum;
      } else { //123.2   1236.3   12345.3.。。。。
        let str3 = str1.slice(-2);
        let str4 = str1.substring(0, str1.length - 2);
        return Number(str4 + '.' + str3 + str2);
      }
    } else { //没有小数点
      if (newNum.length === 1) {
        return Number('0.0' + newNum);
      } else if (newNum.length === 2) {
        return Number('0.' + newNum);
      } else {
        let str1 = newNum.slice(-2);
        let str2 = newNum.substring(0, newNum.length - 2)
        return Number(str2 + '.' + str1);
      }
    }
}