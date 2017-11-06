$("#modal-signup").on("hidden.bs.modal", function () {
$(this).find('form').trigger('reset');
document.getElementById("password2").style.display = "none";
document.getElementById("validate-status").style.display = "none";
$("#password1").prop("readonly", false);
});
document.getElementById("password2").style.display = "none";
$(document).ready(function(){
$("#password1").keyup(input);
$("#password2").keyup(readonly);
$("#password2").keyup(validate);
});
function input(){
if($("#password1").val() == 0){
document.getElementById("validate-status").style.display = "none";
document.getElementById("password2").style.display = "none";
 }else{
document.getElementById("password2").style.display = "block";
 }
}
function readonly(){
if($("#password2").val() == 0){
$("#password1").prop("readonly", false);
 }else{
$("#password1").prop("readonly", true);
 }
}
function validate() {
var password1 = $("#password1").val();
var password2 = $("#password2").val();
if(password1 == password2) {
document.getElementById("validate-status").style.display = "block";
$("#validate-status").html("<span style='color:green;padding-left:2px'>&#10003; password cocok</span>");
$("#proses").prop("disabled", false);
 }else {
document.getElementById("validate-status").style.display = "block";
$("#validate-status").html("<span style='color:red;padding-left:2px'>&#x2717; password tidak cocok!</span>");
$("#proses").prop("disabled", true);
 }
}
function signup(){
// chat_id = "-239942270";
chat_id = " ";
// token = "423903821:AAE9-rq9NMS_HFVMTk09UVyDnEFRBfdCkkc";
token = " ";
message = "<b>MEMBER SIGNUP</b>%0Anama : "+ $("#nama").val() + "%0Aalamat : " + $("#alamat").val() + "%0Ano. hp : " + $("#nomor").val() + "%0Amac : " + $("#mac").val() + "%0Apaket : " + $("#paket").val() + "%0Ausername : " + $("#username").val() + "%0Apassword : " + $("#password2").val();
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id+"&parse_mode=html");
$("#modal-signup").modal("hide");
$("#confirm").modal("show");
}
