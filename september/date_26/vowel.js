function isVowel(char){
    let result ;
    let vowels_arr = ["a","e","i","o","u"];
    if (vowels_arr.includes(char) || vowels_arr.includes(char.toLowerCase())){
        result = "This Character is a Vowel"
    }
    else{
        result = "This Character is a consonant"
    }
    return result;
}
let char = "b";