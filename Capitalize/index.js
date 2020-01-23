// Problem      :         Capitalize
// Description  :         Take a string in as an argument and capitalize the first letter


function capitalize(string) {
    let words = [];
    for(let word of string.split(' ')) {
        words.push(capitalizeFirstLetter(word))
    }

    return words.join(' ')

}

function capitalizeFirstLetter(string) {
   return(string[0].toUpperCase() + string.slice(1));
}

module.exports = capitalize;