const register = document.querySelector(".btn-lg");
register.addEventListener("click", () => {
    registerUser();
});

//validate form
function validateAndGetFormData() {
    const nameVar = document.getElementById("name").value;
    if (nameVar === "") {
        alert("Name Required!");
        document.getElementById("name").focus();
        return "";
    }

    const usernameVar = document.getElementById("username").value;
    if (usernameVar === "") {
        alert("Username Required!");
        document.getElementById("username").focus();
        return "";
    }

    const emailVar = document.getElementById("email").value;
    if (emailVar === "") {
        alert("Email Required!");
        document.getElementById("email").focus();
        return "";
    }

    const passwordVar = document.getElementById("password").value;
    if (passwordVar === "") {
        alert("Password Required!");
        document.getElementById("password").focus();
        return "";
    }
    var jsonStrObj = {
        name: nameVar,
        username: usernameVar,
        email: emailVar,
        password: passwordVar,
    };
    return JSON.stringify(jsonStrObj);
}

//reset form
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("name").focus;
}
function registerUser() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest(
        "90935326|-31948798485501489|90934428",
        jsonStr,
        "SAMPLE",
        "USER-REL"
    );
    //alert(putReqStr);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(
        putReqStr,
        "http://api.login2explore.com:5577",
        "/api/iml"
    );
    //alert(JSON.stringify(resultObj));
    alert("Registration successfull");
    jQuery.ajaxSetup({ async: true });

    resetForm();
}
