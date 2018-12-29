function FirstReverse(str) {
    const letters = str.split("");

    for(i = 0; i < str.length / 2; ++i) {
        const temp = str[i];
        letters.splice(i, 1, str[str.length -1 - i]);
        letters.splice(str.length -1 - i, 1, temp);
        str = letters.join("");
    }
    // code goes here
    return str;
}

FirstReverse("hello");