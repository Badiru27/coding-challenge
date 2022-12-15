/**
 * Write code to move the first letter of a word to first letter of the next word
 * If you get to the last word, set it it's first letter to the first letter of the first word
 *
 * Do thee same for the last letters
 *
 * Bonus points
 *
 */

/**
 * Examples
 *
 * code is fun -> fode cs iun  -> fods cn iue
 *
 *
 */

 function scrambleGame(sentence){
    const words = sentence.split(' ');
    const result = [];

    for(let i =0; i< words.length; i++){

        if(words.length === result.length){
            result[0] = `${words[words.length-1].charAt(0)}${result[0].substring(1,result[0].length)}`;
            result[i] = `${result[i].substring(0, result[i].length-1)}${words[0].charAt(words[0].length-1)}`;
            break;
        }

        if(i ===0){
            result.push(`${words[i].substring(0, words[i].length - 1)}${words[i+1].charAt(words[i+1].length-1)}`);
            result.push(`${words[i].charAt(0)}${words[i+1].substring(1,words[i+1].length)}`);
            continue;
        }


        result[i] = `${result[i].substring(0, result[i].length-1)}${words[i+1].charAt(words[i].length)}`;
        result.push(`${words[i].charAt(0)}${words[i+1].substring(1, words[i+1].length)}`);

    }

    console.log(result);

}

scrambleGame('code is fun you');  