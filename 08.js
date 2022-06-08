function charCount(myChar, str) {
	
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === myChar) {
            count++;
        }
    }
    return count;
}

console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));
console.log(charCount("g", "Give me giant gators to Google"));