/**@description Function that estimates the reading time of a text and returns a promisse.
 * 
 * @param {String} text the text to estimate the reading time
 * @param {Number} wordspminute The number of words read per minute. If no value is passed, 
 * the default value of 160 words per minute is used.
 * 
 * @returns {Object} Returns a object contain the time estimator in minutes, in seconds and the number of words from the text.
 */
const ReadingTime = (text, wordspminute) => {
    let wpm = wordspminute || 160;

    return new Promise((resolve, reject) => {
        if (text) {
            let wordsCounted = WordCount(text)
            let minutesTime = wordsCounted / wpm
            let response = {
                "inMinutes": parseInt(minutesTime),
                "inSeconds": Math.round(minutesTime*60),
                wordsCounted
            }
            resolve(response)
        } else {
            reject(new Error("Text not found!"))
        }
    })
}

function WordCount(str) {
    return str.split(' ')
        .filter(function (n) { return n != '' })
        .length;
}

module.exports = ReadingTime
