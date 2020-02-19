// http://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options

class Person {
    constructor(private name: string){

    };
}
const max = new Person('Maxim');

const btn: Element = document.querySelector('#btn')!;
btn.addEventListener('click', () => {
    console.log('Click');    
});    

function logInfo(data: string){
    console.log(data);    
};

logInfo('Some data');

