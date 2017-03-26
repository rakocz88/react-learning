const validationMethods = {
    validateTaskDetails: (task) => {
        let valid = true;
        console.log(task);
        if (task.name == undefined || task.name == "") {
            valid = false;
        }
        console.log("Validation return");
        console.log(valid);
        return valid;
    }
}

export default validationMethods;