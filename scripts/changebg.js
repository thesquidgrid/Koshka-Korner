function changeTabColor() {
    console.log("Changing tab color...");
    $(".ui-tabs-panel").css("background-color", "");

    var activeTabId = $(".ui-tabs-panel:not(.ui-tabs-hide)").attr('id');
    
    var activeTabIndex = parseInt(activeTabId.split('-')[1], 10);

    console.log("Active tab index: " + activeTabIndex);  

    var colors = ["#ff000d", "#ff9100", "#eeff00", "#1eff00", "#795bff", "#ca42ff", "#ff00aa"];
    
    $(".ui-tabs-panel").eq(activeTabIndex - 1).css("background-color", colors[activeTabIndex - 1]);
}

$(document).ready(function() {
    $("#tabsbar a").click(function() {
        $("#tabsbar li").removeClass("ui-state-active");
        $(this).parent().addClass("ui-state-active");

        changeTabColor();
    });

    changeTabColor();
});
