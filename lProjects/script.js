$(document).ready(function() {
    $("#input-name").bind("keydown", function(e){
        let keyCode = e.which;
        let isStandart = (keyCode > 47 && keyCode < 58);
        if(isStandart){
            return true;
        } else {
            return false;
        }
    });
});