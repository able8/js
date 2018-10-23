'use strict';
// es6 特性：基于块作用域的 let 声明
const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' },
];

// es6 特性：对象解构
function say({ subject, verb, object }) {
    // es6 特性：模版字符串
    console.log('${subject} ${verb} ${object}');
}

// es6 特性：for..of
for (let s of sentences) {
    say(s);
}