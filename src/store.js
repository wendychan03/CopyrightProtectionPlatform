
// localStorage只能存储字符串，非字符串的数据在存储之前会被转换成字符串。在存储一些复杂数据类型时可能有些麻烦
// 下面方法是先使用JSON.stringfy()方法将其转换为字符串后存储,读取时使用JSON.parse()方法进行还原。

const UserName = 'UserName';  //定义常量保存键值
 
export default {
  saveUserName(data){
    window.localStorage.setItem(UserName,JSON.stringify(data)); 
  },
  fetchUserName(){
    return JSON.parse(window.localStorage.getItem(UserName) || '[]');
  }
}

