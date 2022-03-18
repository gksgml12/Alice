// 영어 단어가 들어있는 리스트입니다.
var words = ['i', 'have', 'a', 'pen', 'i', 'have', 'pineapple', 'i', 'have', 'an', 'apple', 'pen'];
// [ 'i', 'have', 'a', 'pen', 'pineapple', 'apple', 'pen' ]
words.splice(4,2)
words.splice(5,3)

var lyrics = words.join(' ');
var rs= lyrics.match(/p/g).length

// 지시사항을 참고하여 코드를 작성하세요.
console.log(lyrics);
console.log(rs);