function SignupValidation(values){
    const { fname, lname, email, password } = values;

    let error = {}
    const email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(email === "") error.email = "Name should not be empty";
    else if(!email_pattern.test(email)){
        error.email = "Email is not valid";
    }
    else {
        error.email = "";
    }

    if(password === ""){
        error.password = "Password should not be empty";
    }
    else {
        error.password = "";
    }
    return error;
}

export default SignupValidation;