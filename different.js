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

// use object in function 

const student = {
     name : 'Sahed',
     subject : 'Physics',
     Marks : 95
}

function isAPlus(student){
     console.log('Get the Object', student);
     const hisMarks = student.Marks;
     if (hisMarks > 80){
          console.log('He got A Plus');
     }
     else {
          console.log('He got this: ', hisMarks);
     }

}

const num = isAPlus(student);