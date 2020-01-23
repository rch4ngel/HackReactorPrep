// Problem      :   Print n Steps
// Description  :   Given a number n print out steps.

function steps(number) {
    let step = '#';
    let steps = '';
    for(let i = 0; i < number; i++) {
        steps += step.repeat(i+1) + '\n';
    }
    return steps;
}

module.exports = steps;