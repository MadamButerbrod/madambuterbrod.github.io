/**UI*/
// Hide / unhide operation selection depending on role 
function changeVisability(condition_target, condition_value, target) {
    if ($(condition_target).val() == condition_value) {
        $(target).show()
    } else {
        $(target).hide()
    }
}
changeVisability("#u_role_select", 'desk', "#user_operation");
$("#u_role_select").on("change", function() {
    return changeVisability("#u_role_select", 'desk', "#user_operation"
)})

/**Fetching*/
// Submit new user data to backend
$("#sub_user").on("click", function(){
    data = {
        email: $("#u_email_input").val(),
        role: {
            "role_name": $("#u_role_select").val(),
        },
        operation: {
            operation_name: $("#u_operation_select").val(),
        },
    }
    data = JSON.stringify(data);
    $.post("http://localhost:8080/user", data, function(res){console.log(res);}, "json")
})
