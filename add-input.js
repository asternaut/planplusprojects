function showEmail() {
    input = document.getElementById('showE');
    input.style.display = "block";
}

function showTel() {
    input = document.getElementById('showTSelect');
    input.style.display = "block";
}

$(document).ready(function () {
    $("#telNumber").change(function () {
        $("#area").append("<div><input class='field' type='tel' value='" + $(this).val() + "'/><span class='remove'> <strong> -</strong></span></div>");
        $(this).find("option:selected").remove();
    });
    $("#area").on("click", ".remove", function () {
        var val = $(this).parent().find("input").val();
        $("#telNumber").append("<option value='" + val + "'>" + val + "</option>");
        $(this).parent().remove();
    });
});
