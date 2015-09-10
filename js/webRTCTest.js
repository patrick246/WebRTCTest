/**
 * Created by Patrick on 10.09.2015.
 */
var webRTCTest = {
    currentPageID: "",
    currentOverlays: [],
    onDocumentLoad: function()
    {
        var this_ = this;

        $('.page:not(.start-page)').hide();
        this.currentPageID = $('.start-page')[0].id;

        $('.overlay:not([data-overlay-state="opened"])').hide();
        var openOverlays = $('.overlay[data-overlay-state="opened"]');
        openOverlays.each(function (index, element) {
           this_.currentOverlays.push(element.id);
        });
        $(document).on('click', '.overlay .btn-close', function (e) {
            this_.closeOverlay();
        });

        $('#login-btn').on('click', function (e) {
           this_.openOverlay('overlay-login');
        });
    },
    switchPage: function(to)
    {
        $('#' + this.currentPageID).fadeOut(function () {
            console.log("Hi");
            $('#page-' + to).fadeIn();
        })
    },
    openOverlay: function(overlay_name)
    {
        this.currentOverlays.push(overlay_name);
        $('#' + overlay_name).fadeIn();
    },
    closeOverlay: function()
    {
        if(this.currentOverlays.length === 0)
            return;
        $('#' + this.currentOverlays.slice(-1)[0]).fadeOut();
        this.currentOverlays.pop();
    }
};

$(function () {
    webRTCTest.onDocumentLoad();
});