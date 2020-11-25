document.querySelector('#input-form').addEventListener("submit", async function(e){
    e.preventDefault();
    var fullUrl = document.querySelector('#main-url').value;
    $.ajax({
        url: '/',
        type: 'POST',
        data: {
            fullUrl: fullUrl
        }
    }).done(function(result){
        document.querySelector('#copy-field').value = window.location.origin + '/' + result.data.short;
        document.querySelector('#copy-field').select();
    }).fail(function () {
        console.log('Failed To Load Data from Server.');
    });
});

document.querySelector('#copy-btn').addEventListener("click", function(e){
    var copyText = document.getElementById("copy-field");
    if(copyText.value != ""){
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        document.execCommand("copy");
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied"
    }
});

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy url";
}