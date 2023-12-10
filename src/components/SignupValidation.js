function SignupValidation(values){
    const { fname, lname, email, password } = values;

    let error = {}

    let email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(email === '') {
        error.email = 'email should not be empty';
    }
    else if(!email_pattern.test(email)){
        error.email = 'Email is not valid';
    }


    if(password === ''){
        error.password = 'Password should not be empty';
    }

    return error;
}

export default SignupValidation;