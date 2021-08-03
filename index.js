const employee = {
    name: "Sam",
    streetAddress: "123 Elm Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]: value});
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee, {[key]: value});
};

function deleteFromEmployeeByKey(employee, key){
    var newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
};