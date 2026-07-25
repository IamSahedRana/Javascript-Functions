function chowdurify(name) {
     const fullName = name + ' ' + 'Chowdhury';
     return fullName;

}

const robinChow = chowdurify('Robin');
console.log(robinChow);

const sahedChow = chowdurify('Sahed');
console.log(sahedChow);

const tinaChow = chowdurify('Tina');
console.log(tinaChow);

// Make first element doubled using array

function makeItDoubled(num){
     console.log('we got the num: ', num);
     const firstNum = num[0];
     const doubled = firstNum * 2;
     return doubled;
}

const enterNum = [30,40,50,60,70,80]
const double = makeItDoubled(enterNum);
console.log('the first doubled is :', double);