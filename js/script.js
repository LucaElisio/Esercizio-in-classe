//TEST
// alert('ciao')

const userWord1 = prompt("Dimmi una parola"); // string | null
console.log(userWord1);

const userWord2 = prompt("Dimmi un'altra parola"); // string | null
console.log(userWord2);

const word1Len = userWord1.length; //number
console.log(word1Len, typeof word1Len);

const word2Len = userWord2.length; //number
console.log(word2Len);

let result = "";

if (word1Len > word2Len){
    result = "la prima è più lunga";
} else if (word1Len === word2Len) {
    result = "le lunghezze sono uguali";
} else {
    result = "la seconda è più lunga";
}

console.log(result);

document.getElementById("result").innerHTML = result;
