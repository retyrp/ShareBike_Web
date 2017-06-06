
/**
 * Javascript functions utilised by the client area templates.
 *
 * @file WHMCS Six Theme Javascript Library
 * @copyright Copyright 2015 WHMCS Limited
 */

jQuery(document).ready(function () {

    // Language chooser popover
    jQuery('#languageChooser').popover({
        container: 'body',
        placement: 'bottom',
        template: '<div class="popover language-popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>',
        html: true,
        content: function () {
            return jQuery("#languageChooserContent").html();
        },
    });

    // Login or register popover
    jQuery('#loginOrRegister').popover({
        container: 'body',
        placement: 'bottom',
        template: '<div class="popover login-popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>',
        html: true,
        content: function () {
            return jQuery("#loginOrRegisterContent").html();
        },
    });

    // Account notifications popover
    jQuery("#accountNotifications").popover({
        container: 'body',
        placement: 'bottom',
        template: '<div class="popover popover-user-notifications" role="tooltip"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>',
        html: true,
        content: function () {
            return jQuery("#accountNotificationsContent").html();
        },
    });

    // Default catch for all other popovers
    jQuery('[data-toggle="popover"]').popover({
        html: true
    });

    // Enable tooltips
    //jQuery('[data-toggle="tooltip"]').tooltip();

    // Logic to dismiss popovers on click outside
    jQuery('body').on('click', function (e) {
        jQuery('[data-toggle="popover"]').each(function () {
            if (!jQuery(this).is(e.target) && jQuery(this).has(e.target).length === 0 && jQuery('.popover').has(e.target).length === 0) {
                jQuery(this).popover('hide');
            }
        });
    });

    // Sidebar active class toggle
    jQuery(".list-group-tab-nav a").click(function () {
        if (jQuery(this).hasClass('disabled')) {
            return false;
        }
        jQuery(".list-group-tab-nav a").removeClass('active');
        jQuery(this).addClass('active');
        var urlFragment = this.href.split('#')[1];
        if (urlFragment) {
            // set the fragment in the URL bar for bookmarking and such.
            window.location.hash = '#' + urlFragment;
        }
    });

    // Internal page tab selection handling via location hash
    if (jQuery(location).attr('hash').substr(1) != "") {
        var activeTab = jQuery(location).attr('hash');
        jQuery(".tab-pane").removeClass('active');
        jQuery(activeTab).removeClass('fade').addClass('active');
        jQuery(".list-group-tab-nav a").removeClass('active');
        jQuery('a[href="' + activeTab + '"]').addClass('active');
        setTimeout(function () {
            // Browsers automatically scroll on page load with a fragment.
            // This scrolls back to the top right after page complete, but
            // just before render (no perceptible scroll).
            window.scrollTo(0, 0);
        }, 1);
    }

    // Enable Switches for Checkboxes
    if (jQuery.prototype.bootstrapSwitch) {
        jQuery(".toggle-switch-success").bootstrapSwitch({
            onColor: 'success'
        });
    }

    // Collapsable Panels
    jQuery(".panel-collapsable .panel-heading").click(function (e) {
        var $this = jQuery(this);
        if (!$this.parents('.panel').hasClass('panel-collapsed')) {
            $this.parents('.panel').addClass('panel-collapsed').find('.panel-body').slideUp();
            $this.find('.collapse-icon i').removeClass('fa-minus').addClass('fa-plus');
        } else {
            $this.parents('.panel').removeClass('panel-collapsed').find('.panel-body').slideDown();
            $this.find('.collapse-icon i').removeClass('fa-plus').addClass('fa-minus');
        }
    });

    // Two-Factor Authentication Auto Focus Rules
    if (("#frmLogin").length > 0) {
        jQuery("#frmLogin input:text:visible:first").focus();
    }
    if (("#twofaactivation").length > 0) {
        jQuery("#twofaactivation input:text:visible:first,#twofaactivation input:password:visible:first").focus();
    }

    // Sub-Account Activation Toggle
    jQuery("#inputSubaccountActivate").click(function () {
        if (jQuery("#inputSubaccountActivate:checked").val() != null) {
            jQuery("#subacct-container").removeClass('hidden');
        } else {
            jQuery("#subacct-container").addClass('hidden');
        }
    });

    // Mass Domain Management Bulk Action Handling
    jQuery(".setBulkAction").click(function (event) {
        event.preventDefault();
        var id = jQuery(this).attr('id').replace("Link", "");
        if (jQuery("#" + id).length != 0) {
            var action = jQuery("#domainForm").attr("action");
            jQuery("#domainForm").attr("action", action + "#" + id);
        }
        jQuery("#bulkaction").val(id);
        jQuery("#domainForm").submit();
    });

    // Stop events on objects with this class from bubbling up the dom
    jQuery('.stopEventBubble').click(function (event) {
        event.stopPropagation();
    });

    // Tab Control Link handling for tab switching via regular links
    jQuery('.tabControlLink').on(
        'click',
        function (event) {
            event.preventDefault();
            var id = jQuery(this).attr('href');
            jQuery("a[href='/" + id + "']").click();
        }
    );

    // Ticket Rating Click Handler
    jQuery('.ticket-reply .rating span.star').click(function (event) {
        window.location = 'viewticket.php?tid='
            + jQuery(this).parent('.rating').attr("ticketid")
            + '&c=' + jQuery(this).parent('.rating').attr("ticketkey")
            + '&rating=rate' + jQuery(this).parent('.rating').attr("ticketreplyid")
            + '_' + jQuery(this).attr("rate");
    });

    // Prevent malicious window.opener activity from auto-linked URLs
    jQuery('a.autoLinked').click(function (e) {
        e.preventDefault();

        var child = window.open();
        child.opener = null;
        child.location = e.target.href;
    });

    // Handle Single Sign-On Toggle Setting
    jQuery("#inputAllowSso").on('switchChange.bootstrapSwitch', function (event, isChecked) {
        if (isChecked) {
            jQuery("#ssoStatusTextEnabled").removeClass('hidden').show();
            jQuery("#ssoStatusTextDisabled").hide();
        } else {
            jQuery("#ssoStatusTextDisabled").removeClass('hidden').show();
            jQuery("#ssoStatusTextEnabled").hide();
        }
        jQuery.post("clientarea.php", jQuery("#frmSingleSignOn").serialize());
    });

    /**
     * Code will loop through each element that has the class markdown-editor and
     * enable the Markdown editor.
     */
    var count = 0,
        editorName = 'clientMDE',
        counter = 0;
    jQuery(".markdown-editor").each(function (index) {
        count++;
        var autoSaveName = jQuery(this).data('auto-save-name'),
            footerId = jQuery(this).attr('id') + '-footer';
        if (typeof autoSaveName == "undefined") {
            autoSaveName = 'client_area';
        }
        window[editorName + count.toString()] = jQuery(this).markdown(
            {
                footer: '<div id="' + footerId + '" class="markdown-editor-status"></div>',
                autofocus: false,
                savable: false,
                resize: 'vertical',
                iconlibrary: 'fa',
                language: locale,
                onShow: function (e) {
                    var content = '',
                        save_enabled = false;
                    if (typeof (Storage) !== "undefined") {
                        // Code for localStorage/sessionStorage.
                        content = localStorage.getItem(autoSaveName);
                        save_enabled = true;
                        if (content && typeof (content) !== "undefined") {
                            e.setContent(content);
                        }
                    }
                    jQuery("#" + footerId).html(parseMdeFooter(content, save_enabled, saved));
                },
                onChange: function (e) {
                    var content = e.getContent(),
                        save_enabled = false;
                    if (typeof (Storage) !== "undefined") {
                        counter = 3;
                        save_enabled = true;
                        localStorage.setItem(autoSaveName, content);
                        doCountdown();
                    }
                    jQuery("#" + footerId).html(parseMdeFooter(content, save_enabled));
                },
                onPreview: function (e) {
                    var originalContent = e.getContent(),
                        parsedContent;

                    jQuery.ajax({
                        url: 'clientarea.php',
                        async: false,
                        data: { token: csrfToken, action: 'parseMarkdown', content: originalContent },
                        dataType: 'json',
                        success: function (data) {
                            parsedContent = data;
                        }
                    });

                    return parsedContent.body ? parsedContent.body : '';
                },
                additionalButtons: [
                    [{
                        name: "groupCustom",
                        data: [{
                            name: "cmdHelp",
                            title: "Help",
                            hotkey: "Ctrl+F1",
                            btnClass: "btn open-modal",
                            href: "submitticket.php?action=markdown",
                            icon: {
                                glyph: 'glyphicons glyphicons-question-sign',
                                fa: 'fa fa-question-circle',
                                'fa-3': 'icon-question-sign'
                            },
                            callback: function (e) {
                                e.$editor.removeClass("md-fullscreen-mode");
                            },
                            additionalAttr: [
                                {
                                    name: 'data-modal-title',
                                    value: markdownGuide
                                }
                            ]
                        }]
                    }]
                ]
            });

        jQuery(this).closest("form").bind({
            submit: function () {
                if (typeof (Storage) !== "undefined") {
                    localStorage.removeItem(autoSaveName);
                }
            }
        });
    });

    // Email verification
    jQuery('#btnResendVerificationEmail').click(function () {
        jQuery.post('clientarea.php',
            {
                'token': csrfToken,
                'action': 'resendVerificationEmail'
            }).done(function (data) {
                jQuery('#btnResendVerificationEmail').prop('disabled', true);
            });
    });

    /**
     * Parse the content to populate the markdown editor footer.
     *
     * @param {string} content
     * @param {bool} auto_save
     * @param {string} [saveText]
     * @returns {string}
     */
    function parseMdeFooter(content, auto_save, saveText) {
        saveText = saveText || saving;
        var pattern = /[^\s]+/g,
            m = [],
            word_count = 0,
            line_count = 0;
        if (content) {
            m = content.match(pattern);
            line_count = content.split(/\\r\\n|\\r|\\n/).length;
        }
        if (m) {
            for (var i = 0; i < m.length; i++) {
                if (m[i].charCodeAt(0) >= 0x4E00) {
                    word_count += m[i].length;
                } else {
                    word_count += 1;
                }
            }
        }
        return '<div class="small-font">lines: ' + line_count
            + '&nbsp;&nbsp;&nbsp;words: ' + word_count + ''
            + (auto_save ? '&nbsp;&nbsp;&nbsp;<span class="markdown-save">' + saveText + '</span>' : '')
            + '</div>';
    }

    /**
     * Countdown the save timeout. When zero, the span will update to show saved.
     */
    function doCountdown() {
        if (counter >= 0) {
            if (counter == 0) {
                jQuery("span.markdown-save").html(saved);
            }
            counter--;
            setTimeout(doCountdown, 1000);
        }
    }

    // Two-Factor Activation Process Modal Handler.
    var frmTwoFactorActivation = jQuery('input[name=2fasetup]').parent('form');
    frmTwoFactorActivation.submit(function (e) {
        e.preventDefault();
        openModal(frmTwoFactorActivation.attr('action'), frmTwoFactorActivation.serialize(), 'Loading...');
    });
});

/**
 * Check all checkboxes with a given class.
 *
 * @param {string} className         Common class name.
 * @param {domElement} masterControl Parent checkbox to which the other checkboxes should mirror.
 */
function checkAll(className, masterControl) {
    if (className[0] != '.') {
        className = '.' + className;
    }
    // In jQuery, if you set the checked attribute directly, the dom
    // element is changed, but browsers don't show the check box as
    // checked.  Using the click event will properly display.
    jQuery(className).removeAttr('checked');
    if (jQuery(masterControl).is(":checked")) {
        jQuery(className).click();
    }
}

/**
 * Redirect on click if an element is not a button or link.
 *
 * Where table rows are clickable, we only want to redirect if the row
 * itself is clicked. If a button or link within the row is clicked,
 * the event tied to that object should be executed. This function
 * stops the standard JS event bubbling required to make that happen.
 *
 * @param {object} clickEvent jQuery click event
 * @param {string} target     Redirect location
 * @param {bool} newWindow    Open link in new window
 */
function clickableSafeRedirect(clickEvent, target, newWindow) {
    var eventSource = clickEvent.target.tagName.toLowerCase();
    var eventParent = clickEvent.target.parentNode.tagName.toLowerCase();
    var eventTable = clickEvent.target.parentNode.parentNode.parentNode;
    if (jQuery(eventTable).hasClass('collapsed')) {
        // This is a mobile device sized display, and datatables has triggered folding
        return false;
    }
    if (eventSource != 'button' && eventSource != 'a') {
        if (eventParent != 'button' && eventParent != 'a') {
            if (newWindow) {
                window.open(target);
            } else {
                window.location.href = target;
            }
        }
    }
}

/**
 * Open a centered popup window.
 *
 * @param {string} addr     The URL to navigate to
 * @param {string} popname  The name to assign the window
 * @param {number} w        The width
 * @param {number} h        The height
 * @param {string} features Any additional settings to apply
 */
function popupWindow(addr, popname, w, h, features) {
    var winl = (screen.width - w) / 2;
    var wint = (screen.height - h) / 2;
    if (winl < 0) winl = 0;
    if (wint < 0) wint = 0;
    var settings = 'height=' + h + ',';
    settings += 'width=' + w + ',';
    settings += 'top=' + wint + ',';
    settings += 'left=' + winl + ',';
    settings += features;
    win = window.open(addr, popname, settings);
    win.window.focus();
}

/**
 * Add domain renewal to shopping cart.
 *
 * @param {number} renewalID    The domain ID to be added
 * @param {domElement} selfThis The object triggering the add
 */
function addRenewalToCart(renewalID, selfThis) {
    jQuery("#domainRow" + renewalID).attr('disabled', 'disabled');
    jQuery("#domainRow" + renewalID).find("select,button").attr("disabled", "disabled");
    jQuery(selfThis).html('<span class="glyphicon glyphicon-shopping-cart"></span> Adding...');
    var renewalPeriod = jQuery("#renewalPeriod" + renewalID).val();
    jQuery.post(
        "clientarea.php",
        "addRenewalToCart=1&token=" + csrfToken + "&renewID=" + renewalID + "&period=" + renewalPeriod,
        function (data) {
            jQuery("#cartItemCount").html(((jQuery("#cartItemCount").html() * 1) + 1));
            jQuery(selfThis).html('<span class="glyphicon glyphicon-shopping-cart"></span> Added');
            jQuery("#btnCheckout").fadeIn();
        }
    );
}

/**
 * Navigate to a page on dropdown change.
 *
 * This is implemented onblur() for a dropdown.  When the dropdown
 * changes state, the value is pulled and the browser navigated to
 * the selected page.
 *
 * @param {domElement} select The dropdown triggering the event
 */
function selectChangeNavigate(select) {
    window.location.href = $(select).val();
}

/**
 * Append additional file upload input field.
 */
function extraTicketAttachment() {
    jQuery("#fileUploadsContainer").append('<input type="file" name="attachments[]" class="form-control" />');
}

/**
 * Fetch load and uptime for a given server.
 *
 * @param {number} num Server Id
 */
function getStats(num) {
    jQuery.post('serverstatus.php', 'getstats=1&num=' + num, function (data) {
        jQuery("#load" + num).html(data.load);
        jQuery("#uptime" + num).html(data.uptime);
    }, 'json');
}

/**
 * Determine status of a given port for a given server.
 *
 * @param {number} num  Server Id
 * @param {number} port Port Number
 */
function checkPort(num, port) {
    jQuery.post('serverstatus.php', 'ping=1&num=' + num + '&port=' + port, function (data) {
        jQuery("#port" + port + "_" + num).html(data);
    });
}

/**
 * Fetch automated knowledgebase suggestions for ticket content.
 */
function getticketsuggestions() {
    currentcheckcontent = jQuery("#message").val();
    if (currentcheckcontent != lastcheckcontent && currentcheckcontent != "") {
        jQuery.post("submitticket.php", { action: "getkbarticles", text: currentcheckcontent },
            function (data) {
                if (data) {
                    jQuery("#searchresults").html(data);
                    jQuery("#searchresults").hide().removeClass('hidden').slideDown();
                }
            });
        lastcheckcontent = currentcheckcontent;
    }
    setTimeout('getticketsuggestions();', 3000);
}

/**
 * Update custom fields upon department change.
 *
 * @param {domElement} input The department selector dropdown object
 */
function refreshCustomFields(input) {
    jQuery("#customFieldsContainer").load(
        "submitticket.php",
        { action: "getcustomfields", deptid: $(input).val() }
    );
}

/**
 * Submit the first form that exists within a given container.
 *
 * @param {string} containerId The ID name of the container
 */
function autoSubmitFormByContainer(containerId) {
    jQuery("#" + containerId).find("form:first").submit();
}

/**
 * Submit default whois info and disable custom fields.
 *
 * @param {string} regType The contact registration type
 */
function useDefaultWhois(regType) {
    jQuery("." + regType.substr(0, regType.length - 1) + "customwhois").attr("disabled", true);
    jQuery("." + regType.substr(0, regType.length - 1) + "defaultwhois").attr("disabled", false);
    jQuery('#' + regType.substr(0, regType.length - 1) + '1').attr("checked", "checked");
}

/**
 * Submit custom fields and disable default whois info.
 *
 * @param {string} regType The contact registration type
 */
function useCustomWhois(regType) {
    jQuery("." + regType.substr(0, regType.length - 1) + "customwhois").attr("disabled", false);
    jQuery("." + regType.substr(0, regType.length - 1) + "defaultwhois").attr("disabled", true);
    jQuery('#' + regType.substr(0, regType.length - 1) + '2').attr("checked", "checked");
}

/**
 * Used to toggle display of editable billing address fields.
 */
function editBillingAddress() {
    jQuery("#billingAddressSummary").hide();
    jQuery(".cc-billing-address").hide().removeClass('hidden').fadeIn();
}

/**
 * Show new credit card input fields.
 */
function showNewCardInputFields() {
    if (jQuery(".cc-details").hasClass("hidden")) {
        jQuery(".cc-details").hide().removeClass("hidden");
    }
    jQuery(".cc-details").slideDown();
    jQuery("#btnEditBillingAddress").removeAttr("disabled");
}

/**
 * Hide new credit card input fields.
 */
function hideNewCardInputFields() {
    jQuery(".cc-billing-address").slideUp();
    jQuery(".cc-details").slideUp();
    jQuery("#btnEditBillingAddress").attr("disabled", "disabled");
    if (jQuery("#billingAddressSummary").hasClass('hidden')) {
        jQuery("#billingAddressSummary").hide().removeClass('hidden').slideDown();
    } else {
        jQuery("#billingAddressSummary").slideDown();
    }
}

/**
 * Get automatic knowledgebase suggestions for support ticket message.
 */
var lastTicketMsg;
function getTicketSuggestions() {
    var userMsg = jQuery("#inputMessage").val();
    if (userMsg != lastTicketMsg && userMsg != '') {
        jQuery.post("submitticket.php", { action: "getkbarticles", text: userMsg },
            function (data) {
                if (data) {
                    jQuery("#autoAnswerSuggestions").html(data);
                    if (!jQuery("#autoAnswerSuggestions").is(":visible")) {
                        jQuery("#autoAnswerSuggestions").hide().removeClass('hidden').slideDown();
                    }
                }
            });
        lastTicketMsg = userMsg;
    }
    setTimeout('getTicketSuggestions()', 3000);
}

/**
 * Confirm that the contact should be deleted and redirect.
 *
 * @param {string} confirmQuestion
 * @param {int} contactId
 */
function deleteContact(confirmQuestion, contactId) {
    if (confirm(confirmQuestion)) {
        window.location = 'clientarea.php?action=contacts&delete=true&id=' + contactId + '&token=' + csrfToken;
    }
}
$(document).ready(function () {
    /*jQuery('.owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 10,
        autoHeight: true,
        loop: true,
        autoplay: true,
        mouseDrag: false,
        autoplayTimeout: 8000,
        autoplayHoverPause: true
    }); */
    var $body = $('body');
    
    $(".site-menu .site-menu-item").click(function () {
        
        var havsub = $(this).is('.has-sub');
        var $sub = $(this).children('.site-menu-sub');
        $(this).addClass('hover');
        if (!$(this).hasClass("open")) {
            $("ul", $(this).parents("ul:first")).slideUp(350);
            jQuery(this).siblings().removeClass("open");
            jQuery(this).find("ul").slideDown(350);
            jQuery(this).addClass("open");
        } else if (jQuery(this).hasClass("open")) {
            jQuery("ul", jQuery(this).parents("ul:first")).slideUp(350);
            jQuery(this).removeClass("open");
        }
    });
    /*$("[data-toggle='tooltip']").ggtooltip();
    $("#listqr #qrss").each(function () {
        $(this).click(function () {
            var ssqr = $(this).children('.qr').attr('rel');
            var qrcode = new QRCode(document.getElementById("ssqrss"), {
                width: 400,
                height: 400
            });
            ssqr = window.btoa(ssqr);
            ssqr = 'ss://' + ssqr;
            qrcode.makeCode(ssqr);
            $('.sscode-modal-sm').modal('show');
            $('.sscode-modal-sm').on('hidden.bs.modal', function (e) {
                $("#ssqrss").html('');
            });
        });
    })
    /*$('#listqr .fynodes').each(function () {
        $(this).click(function () {
            var port = $(this).attr("data-port"), node = $(this).attr("data-node"), key = $(this).attr("data-key");
            var cld = "#fynode-" + key;
            $(cld + " .user-band").html(' ');
            if (!$(cld).hasClass("in")) {
                $.ajax({
                    type: 'get',
                    data: { 'port': port, 'node': node },
                    dataType: 'html',
                    url: './index.php?m=fyshadow&getaction=get_ss_day_logs',
                    beforeSend: function () {
                        $(cld + " .user-band").html('璇诲彇涓�...........');
                    },
                    success: function (data) {
                        $(cld + " .user-band").html(data);
                    }
                });
            }
        });
    });
    $('#listqr .fynodespeed').each(function () {
        $(this).click(function () {
            var port = $(this).attr("data-port"), node = $(this).attr("data-node"), key = $(this).attr("data-key");
            var cld = "#fynodespeed-" + key;
            $(cld + " .user-band").html(' ');
            if (!$(cld).hasClass("in")) {
                $.ajax({
                    type: 'get',
                    data: { 'port': port, 'node': node },
                    dataType: 'html',
                    url: './index.php?m=fyshadow&getaction=get_ss_node_speed',
                    beforeSend: function () {
                        $(cld + " .user-band").html('璇诲彇涓�...........');
                    },
                    success: function (data) {
                        $(cld + " .user-band").html(data);
                    }
                });
            }
        });
    });
    $('#listqr .fynodeclient').each(function () {
        $(this).click(function () {
            var port = $(this).attr("data-port"), node = $(this).attr("data-node"), key = $(this).attr("data-key");
            var cld = "#fynodeclient-" + key;
            $(cld + " .user-band").html(' ');
            if (!$(cld).hasClass("in")) {
                $.ajax({
                    type: 'get',
                    data: { 'port': port, 'node': node },
                    dataType: 'html',
                    url: './index.php?m=fyshadow&getaction=get_ss_client',
                    beforeSend: function () {
                        $(cld + " .user-band").html('璇诲彇涓�...........');
                    },
                    success: function (data) {
                        $(cld + " .user-band").html(data);
                    }
                });
            }
        });
    });
    $("#support").click(function () {
        $('#myModal').modal('show');
    })

    $('#modal-emails').on('hidden.bs.modal', function (event) {
        $("#modal-emails").find('.modal-title').text('');
        $("#modal-emails").find('.modal-body').html('<i class="fa fa-spinner fa-spin fa-3x"></i>');
    })
    $('#modal-emails').on('show.bs.modal', function (event) {
        var models = $(event.relatedTarget);
        var email = models.data('href');
        var subject = models.data('subject');
        var date = models.data('date');
        $("#modal-emails").find('.modal-title').html(subject + '<br>' + date);
        $("#modal-emails").find('.modal-body').load('viewemail.php?id=' + email + '&internal=yes');
    })

    var client = $("#clientonline").attr('data-port');
    //console.log('ddddd222');
    if (client) {
        //console.log('ddddd');
        //$("#clientonline").spin("small");
        var port = $("#clientonline").attr('data-port');
        $.ajax({
            type: 'get',
            data: { 'port': port },
            dataType: 'html',
            url: './index.php?m=fyshadow&getaction=get_ss_clientonline',
            beforeSend: function () {
                //$("#clientonline").val(0);
            },
            success: function (data) {
                $("#clientonline").addClass("label label-primary");
                $("#clientonline").html(data);
                //$("#clientonline").spin(false);
            }
        });
    }*/
});
/*! function ($) {

    "use strict"; // jshint ;_;

    var ggTooltip = function (element, options) {
        this.init('ggtooltip', element, options)
    }

    ggTooltip.prototype = {
        constructor: ggTooltip,

        init: function (type, element, options) {
            var eventIn, eventOut;

            this.type = type;
            this.$element = $(element);
            this.options = this.getOptions(options);
            this.enabled = true;

            if (this.options.trigger == 'click') {
                this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
            } else if (this.options.trigger != 'manual') {
                eventIn = this.options.trigger == 'hover' ? 'mouseenter' : 'focus';
                eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur';
                this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));;
            }

            this.options.selector ?
                (this._options = $.extend({}, this.options, {
                    trigger: 'manual',
                    selector: ''
                })) :
                this.fixTitle();
        },

        getOptions: function (options) {
            options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data());

            if (options.delay && typeof options.delay == 'number') {
                options.delay = {
                    show: options.delay,
                    hide: options.delay
                };
            }

            return options;
        },

        enter: function (e) {
            var self = $(e.currentTarget)[this.type](this._options).data(this.type);

            if (!self.options.delay || !self.options.delay.show) return self.show();

            clearTimeout(this.timeout);
            self.hoverState = 'in';
            this.timeout = setTimeout(function () {
                if (self.hoverState == 'in') self.show();
            }, self.options.delay.show);
        },

        leave: function (e) {
            var self = $(e.currentTarget)[this.type](this._options).data(this.type);

            if (this.timeout) clearTimeout(this.timeout);
            if (!self.options.delay || !self.options.delay.hide) return self.hide();

            self.hoverState = 'out';
            this.timeout = setTimeout(function () {
                if (self.hoverState == 'out') self.hide();
            }, self.options.delay.hide);
        },

        show: function () {
            var $tip, inside, pos, actualWidth, actualHeight, placement, tp;

            if (this.hasContent() && this.enabled) {
                $tip = this.tip();
                this.setContent();

                if (this.options.animation) {
                    $tip.addClass('fade');
                }

                placement = typeof this.options.placement == 'function' ?
                    this.options.placement.call(this, $tip[0], this.$element[0]) :
                    this.options.placement;

                inside = /in/.test(placement);

                $tip
                    .detach()
                    .css({
                        top: 0,
                        left: 0,
                        display: 'block'
                    })
                    .insertAfter(this.$element);

                pos = this.getPosition(inside);

                actualWidth = $tip[0].offsetWidth;
                actualHeight = $tip[0].offsetHeight;

                switch (inside ? placement.split(' ')[1] : placement) {
                    case 'bottom':
                        tp = {
                            top: pos.top + pos.height,
                            left: pos.left + pos.width / 2 - actualWidth / 2
                        }
                        break;
                    case 'top':
                        tp = {
                            top: pos.top - actualHeight,
                            left: pos.left + pos.width / 2 - actualWidth / 2
                        }
                        break;
                    case 'left':
                        tp = {
                            top: pos.top + pos.height / 2 - actualHeight / 2,
                            left: pos.left - actualWidth
                        }
                        break;
                    case 'right':
                        tp = {
                            top: pos.top + pos.height / 2 - actualHeight / 2,
                            left: pos.left + pos.width
                        }
                        break;
                }

                $tip
                    .offset(tp)
                    .addClass(placement)
                    .addClass('in');
            }
        },

        setContent: function () {
            var $tip = this.tip(),
                title = this.getTitle();

            $tip.find('.ggtooltip-inner').css({
                'background': this.options.backcolor,
                'color': this.options.textcolor,
                'border-color': this.options.bordercolor
            });
            $tip.find('.ggtooltip-arrow').css('border-' + this.options.placement + '-color', this.options.backcolor);
            $tip.find('.ggtooltip-arrow-shadow').css('border-' + this.options.placement + '-color', this.options.bordercolor);
            $tip.find('.ggtooltip-inner')[this.options.html ? 'html' : 'text'](title);
            $tip.removeClass('fade in top bottom left right');
        },

        hide: function () {
            var that = this,
                $tip = this.tip();

            $tip.removeClass('in');

            function removeWithAnimation() {
                var timeout = setTimeout(function () {
                    $tip.off($.support.transition.end).detach();
                }, 500);

                $tip.one($.support.transition.end, function () {
                    clearTimeout(timeout);
                    $tip.detach();
                });
            }

            $.support.transition && this.$tip.hasClass('fade') ?
                removeWithAnimation() :
                $tip.detach();

            return this;
        },

        fixTitle: function () {
            var $e = this.$element;
            if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
                $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title');
            }
        },

        hasContent: function () {
            return this.getTitle();
        },

        getPosition: function (inside) {
            return $.extend({}, (inside ? {
                top: 0,
                left: 0
            } : this.$element.offset()), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
        },

        getTitle: function () {
            var title, $e = this.$element,
                o = this.options;

            title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);

            return title;
        },

        tip: function () {
            return this.$tip = this.$tip || $(this.options.template);
        },

        validate: function () {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },

        enable: function () {
            this.enabled = true;
        },

        disable: function () {
            this.enabled = false;
        },

        toggleEnabled: function () {
            this.enabled = !this.enabled;
        },

        toggle: function (e) {
            var self = $(e.currentTarget)[this.type](this._options).data(this.type);
            self[self.tip().hasClass('in') ? 'hide' : 'show']();
        },

        destroy: function () {
            this.hide().$element.off('.' + this.type).removeData(this.type);
        }
    }

    var old = $.fn.ggtooltip;

    $.fn.ggtooltip = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('ggtooltip'),
                options = typeof option == 'object' && option
            if (!data) $this.data('ggtooltip', (data = new ggTooltip(this, options)))
            if (typeof option == 'string') data[option]()
        });
    }

    $.fn.ggtooltip.Constructor = ggTooltip;

    $.fn.ggtooltip.defaults = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="ggtooltip"><div class="ggtooltip-arrow-shadow"></div><div class="ggtooltip-arrow"></div><div class="ggtooltip-inner"></div></div>',
        trigger: 'hover',
        title: '',
        delay: 0,
        html: false,
        backcolor: '#000000',
        textcolor: '#ffffff',
        bordercolor: '#ffffff'
    }


    $.fn.ggtooltip.noConflict = function () {
        $.fn.ggtooltip = old;
        return this;
    }

}(window.jQuery);*/
/*----------------------------------------------------*/
/*  Mobile Navigation
/*----------------------------------------------------*/

var jPanelMenu = {};
$(function () {
    var $body = $('body');
    $body.addClass('site-menubar-hide site-menubar-unfold');
    $("#barmenu").click(function () {
        if ($body.hasClass('site-menubar-hide')) {
            $body.removeClass('site-menubar-hide').addClass('site-menubar-open site-menubar-unfold');
            $('#barmenu').removeClass('hided');
        } else {
            $body.removeClass('site-menubar-open').addClass('site-menubar-hide site-menubar-unfold');
            $('#barmenu').addClass('hided');
        }
    });
});

