function LoginValidation(values) {
    let error = {}
    const email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    if(values.email === "") error.email = "Name should not be empty";
    else if(!email_pattern.test(values.email)){
        error.email = "Email is not valid";
    }
    else {
        error.email = "";
    }

    if(values.password === ""){
        error.password = "Password should not be empty";
    }
    else {
        error.password = "";
    }
    return error;
}

export default LoginValidation;