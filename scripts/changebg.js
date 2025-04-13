function changeTabColor() {
    console.log("Changing tab color...");  
    $(".ui-tabs-panel").css("background-color", "");

    var activeTab = 1;
    console.log("Active tab index: " + activeTab);  

    var colors = ["#ff000d", "#ff9100", "#eeff00", "#1eff00", "#795bff", "#ca42ff", "#ff00aa"];
    
    $(".ui-tabs-panel").eq(activeTab).css("background-color", colors[activeTab]);
  }

  // When a tab is clicked, update the color
  $(document).ready(function() {
    // Attach the event to tab clicks
    $("#tabsbar a").click(function() {
      $("#tabsbar li").removeClass("ui-state-active");
      $(this).parent().addClass("ui-state-active");

      changeTabColor();
    });
  });