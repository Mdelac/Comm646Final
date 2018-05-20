/*eslint-env browser*/
$(document).ready(function () {
    $tabMenu = $('.tabbed-menu');
    $tabList = $('.tabs li');
    $content = $('.content').hide();

    var selected = $tabList.filter('.selected').attr('id');

    $content.filter('#' + selected).show();

    $tabList.click(function (event) {
        selected = $tabList.filter('.selected').attr('id');
        $target = $(event.target);
        $tabList.removeClass('selected');
        $target.addClass('selected');
        var selectionId = $target.attr('id');

        var sameContent = (selectionId == selected) ? true : false;

        if (!sameContent) {
            $content.fadeOut("slow");
            // can put below line into anonymous function within fadeOut()
            $content.filter('#' + selectionId).fadeIn("slow");
            //$content.filter('#'+selectionId).css("display","block");
        }
    });
});