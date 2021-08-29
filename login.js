
document.getElementById('btn').disabled = true;


// jo12sf@fdsf-sdfsd@yahoo.com
function mail() {
    let email = document.getElementById('mail').value;
    let btn = document.getElementById('btn');
    let err = document.getElementById('err_email');
    code = /^[A-Za-z]+([0-9]*)([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    check = code.test(email);
    if (check) { // true
        err.style.display = "none";
        btn.disabled = false;
    } else {
        btn.disabled = true;
        err.style.display = "block";
    }
}


function password() {
    let pass=document.getElementById('pass').value;
    let btn = document.getElementById('btn');
    let err=document.getElementById('err_pass');
    code=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\._+=@#$%^&*(){}/~!-]).{8,16}$/i;
    check=code.test(pass);
    if (check) { // true
        err.style.display = "none";
        btn.disabled = false;
    } else {
        btn.disabled = true;
        err.style.display = "block";
    }




}
