$('.sw').click(function(e){
    var show = $(this).attr("data-show-id");
    var hide = $(this).attr("data-hide-id");
    
    $(show).css(
        {
            'display': "block",
            'position': "static"
        }
    );
    $(hide).css(
        {
            'display': "none",
            'position': "absolute"
        }
    );
});
