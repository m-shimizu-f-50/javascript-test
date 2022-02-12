/**
 * const ,letなどの変数宣言
 */
// var var1 = "var変数";
// console.log(var1);

// //  var変数は上書き可能
// var1 = "var変数を上書き";
// console.log(var1);

// // var変数は再宣言可能
// var var1 = "var変数を再宣言";
// console.log(var1)

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を更新";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言"

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// // val3 = "const変数の更新";
// // console.log(val3);

// const val3 = "const変数の再宣言";
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "真斗",
//   age: 26
// };

// val4.age = 12;
// val4.address = "Yamanashi";

// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "rabbit";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "真斗";
// const age = 28;

// // 「私の名前は真斗です。年齢は28歳です」という表示にしたい
// const test = `私の名前は${name}です。年齢は${age}歳です`;
// console.log(test)

/**
 * アロー関数
 */

//  従来の関数
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "masato",
//   age: 26
// };

// const message = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message);

// const { name, age } = myProfile;

// const message = `名前は${name}です。年齢は${age}歳です`;
// console.log(message);

// const myProfile = ["ジャケ", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message4)

/**
 * デフォルト値、引数など
 */
// const seyHello = (name = "ゲスト") => console.log(`こんにちは${name}`);

// seyHello('masato')
// seyHello();

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;

// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7)

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);
