"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    ;
}
const max = new Person('Maxim');
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    console.log('Click');
});
function logInfo(data) {
    console.log(data);
}
;
logInfo('Some data');
//# sourceMappingURL=app.js.map