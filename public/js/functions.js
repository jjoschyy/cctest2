/* jQuery Erweiterungen / Automaisierung */
$.extend({
    //changeElementType
    changeElementType: function (newType) {
        var attrs = {};

        $.each(this[0].attributes, function (idx, attr) {
            attrs[attr.nodeName] = attr.nodeValue;
        });

        this.replaceWith(function () {
            return $("<" + newType + "/>", attrs).append($(this).contents());
        });
    },
    /**
     * Multiselect Plus for jQuery
     */
    multiSelectPlus: function (options) {
        var $this = $(this);
        var $parent = $this.parent();
        $this.hide();
        switch (options.type) {
            case 'group':
                $parent.append(productionBoard.templates.multiSelectPlus).find(".msp_search_area").hide();
                var refGroupList = new Array();
                $this.find("option").each(function () {
                    var refGroupFind = $(this).attr("ref");
                    var valGroupFind = $(this).attr("refval");
                    var refFind = $(this).val();
                    var valFind = $(this).html();
                    var statusFind = $(this).is(':selected');
                    if (refGroupList.indexOf(refGroupFind) === -1) {
                        refGroupList.push(refGroupFind);
                        $parent.find(".msp_filter_input").append('<option value="' + refGroupFind + '" >' + valGroupFind + '</option>');
                    }
                    if (statusFind) {
                        $parent.find(".msp_activ_area").append('<div class="item" refgroup="' + refGroupFind + '" ref="' + refFind + '">' + valFind + '</div>');
                        $parent.find(".msp_inactiv_area").append('<div class="item" refgroup="' + refGroupFind + '" ref="' + refFind + '" style="display:none;">' + valFind + '</div>');
                    } else {
                        $parent.find(".msp_activ_area").append('<div class="item" refgroup="' + refGroupFind + '" ref="' + refFind + '" style="display:none;">' + valFind + '</div>');
                        $parent.find(".msp_inactiv_area").append('<div class="item" refgroup="' + refGroupFind + '" ref="' + refFind + '">' + valFind + '</div>');
                    }
                });
                $parent.find(".msp_body .item").on("click", function () {
                    if ($(this).parent().hasClass('msp_inactiv_area')) {
                        $parent.find(' .msp_activ_area .item[ref=' + $(this).attr("ref") + ']').show();
                        $(this).hide();
                        $this.find('option[value="' + $(this).attr("ref") + '"]').attr("selected", "selected");
                    } else {
                        $parent.find(' .msp_inactiv_area .item[ref=' + $(this).attr("ref") + ']').show();
                        $(this).hide();
                        $this.find('option[value="' + $(this).attr("ref") + '"]').removeAttr("selected");
                    }
                });
                $parent.find(".msp_filter_input").on("change", function () {
                    var FilterValue = $(this).val();
                    var ActiveArea = new Array();
                    $('#WorkstepListToQualificationCourse option:selected').each(function () {
                        ActiveArea.push($(this).val());
                    });
                    $parent.find(".msp_inactiv_area .item").each(function () {
                        if (!FilterValue || $(this).attr("refgroup") === FilterValue) {
                            if ($.inArray($(this).attr('ref'), ActiveArea) === -1) {
                                $(this).show();
                            } else {
                                $(this).hide();
                            }
                        } else {
                            $(this).hide();
                        }
                    });
                });
                break;
            case 'search':
                $parent.append(productionBoard.templates.multiSelectPlus).find(".msp_filter_area").hide();
                var refGroupList = new Array();
                $this.find("option").each(function () {
                    var refSearch = $(this).attr("ref");
                    var refFind = $(this).val();
                    var valFind = $(this).html();
                    var statusFind = $(this).is(':selected');
                    if (statusFind) {
                        $parent.find(".msp_activ_area").append('<div class="item" refsearch=\'' + refSearch + '\' ref="' + refFind + '">' + valFind + '</div>');
                        $parent.find(".msp_inactiv_area").append('<div class="item" refsearch=\'' + refSearch + '\' ref="' + refFind + '" style="display:none;">' + valFind + '</div>');
                    } else {
                        $parent.find(".msp_activ_area").append('<div class="item" refsearch=\'' + refSearch + '\' ref="' + refFind + '" style="display:none;">' + valFind + '</div>');
                        $parent.find(".msp_inactiv_area").append('<div class="item" refsearch=\'' + refSearch + '\' ref="' + refFind + '">' + valFind + '</div>');
                    }
                });
                $parent.find(".msp_body .item").on("click", function () {
                    if ($(this).parent().hasClass('msp_inactiv_area')) {
                        $parent.find(' .msp_activ_area .item[ref=' + $(this).attr("ref") + ']').show();
                        $(this).hide();
                        $this.find('option[value="' + $(this).attr("ref") + '"]').attr("selected", "selected");
                    } else {
                        $parent.find(' .msp_inactiv_area .item[ref=' + $(this).attr("ref") + ']').show();
                        $(this).hide();
                        $this.find('option[value="' + $(this).attr("ref") + '"]').removeAttr("selected");
                    }
                });
                $parent.find(".msp_search_input").on("keyup", function () {
                    var searchFieldVal = $(this).val();
                    searchFieldVal = searchFieldVal.toLowerCase();
                    $parent.find(".msp_inactiv_area .item").each(function () {
                        var areaItem = $(this);
                        var searchList = $.parseJSON($(this).attr("refsearch"));
                        var showMe = false;
                        $(searchList).each(function (key, sitem) {
                            sitem = sitem.toString();
                            if (sitem.indexOf(searchFieldVal) !== -1 || !searchFieldVal) {
                                showMe = true;
                            }
                        });
                        if (showMe === true) {
                            areaItem.show();
                        } else {
                            areaItem.hide();
                        }

                    });
                });
                break;
            default:
                $parent.append(productionBoard.templates.multiSelectPlus).find(".msp_head").hide();
                $this.find("option").each(function () {
                    var refFind = $(this).val();
                    var valFind = $(this).html();
                    var statusFind = $(this).is(':selected');
                    if (statusFind) {
                        $parent.find(".msp_activ_area").append('<div class="item"  ref="' + refFind + '">' + valFind + '</div>');
                        $parent.find(".msp_inactiv_area").append('<div class="item" ref="' + refFind + '" style="display:none;">' + valFind + '</div>');
                    } else {
                        $parent.find(".msp_activ_area").append('<div class="item"  ref="' + refFind + '" style="display:none;">' + valFind + '</div>');
                        $parent.find(".msp_inactiv_area").append('<div class="item" ref="' + refFind + '">' + valFind + '</div>');
                    }
                });
                $parent.find(".msp_body .item").on("click", function () {
                    if ($(this).parent().hasClass('msp_inactiv_area')) {
                        $parent.find(' .msp_activ_area .item[ref=' + $(this).attr("ref") + ']').show();
                        $(this).hide();
                        $this.find('option[value="' + $(this).attr("ref") + '"]').attr("selected", "selected");
                    } else {
                        $parent.find(' .msp_inactiv_area .item[ref=' + $(this).attr("ref") + ']').show();
                        $(this).hide();
                        $this.find('option[value="' + $(this).attr("ref") + '"]').removeAttr("selected");
                    }
                });
                break;
        }
        $parent.find(".msp_arrows").on("click", function (e) {
            e.preventDefault();
            if ($(this).attr("href") === "#allright") {
                $parent.find(".msp_inactiv_area .item").each(function () {
                    if ($(this).css('display') != 'none') {
                        $parent.find(' .msp_activ_area .item[ref=' + $(this).attr("ref") + ']').show();
                        $(this).hide();
                        $this.find('option[value="' + $(this).attr("ref") + '"]').attr("selected", "selected");
                    }
                });
            } else if ($(this).attr("href") === "#allleft") {
                var FilterValue = $(".msp_filter_input").val();
                $parent.find(".msp_activ_area .item").each(function () {
                    if ($(this).css('display') != 'none') {
                        if (!FilterValue || $(this).attr("refgroup") === FilterValue) {
                            $parent.find(' .msp_inactiv_area .item[ref=' + $(this).attr("ref") + ']').show();
                        }
                        $(this).hide();
                        $this.find('option[value="' + $(this).attr("ref") + '"]').removeAttr("selected");
                    }
                });
            }
        });
        if (options.height) {
            options.height = parseInt(options.height);
            $parent.find(".msp_body").css("height", (options.height + 5) + "px");
            $parent.find(".msp_inactiv_area, .msp_action_area, .msp_activ_area").css("height", options.height + "px");
            $parent.find(".msp_action_area").css("padding-top", ((options.height - 100) / 2) + "px");
        }
    },
    /**
     * Multiselect Plus for jQuery
     */
    selectPlus: function (options) {
        var $this = $(this);
        var $parent = $this.parent();
        switch (options.type) {
            case 'group':
                $parent.prepend(productionBoard.templates.selectPlus).find(".msp_search_area").hide();
                var refGroupList = new Array();
                $this.find("option").each(function () {
                    var refGroupFind = $(this).attr("refId");
                    var valGroupFind = $(this).attr("ref");
                    if (refGroupFind) {
                        if (refGroupList.indexOf(refGroupFind) === -1) {
                            refGroupList.push(refGroupFind);
                            $parent.find(".msp_filter_input").append('<option value="' + refGroupFind + '" >' + valGroupFind + '</option>');
                        }
                    }
                });
                $parent.find(".msp_filter_input").on("change", function () {
                    var selectedItem = $(this);
                    $this.find("option").each(function () {
                        if ($(this).attr("refId") === selectedItem.val() || !selectedItem.val()) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    });
                });
                break;
            case 'search':
                $parent.append(productionBoard.templates.multiSelectPlus).find(".msp_filter_area").hide();
                var refGroupList = new Array();
                $this.find("option").each(function () {
                    var refSearch = $(this).attr("ref");
                    var refFind = $(this).val();
                    var valFind = $(this).html();
                    var statusFind = $(this).is(':selected');
                    if (statusFind) {
                        $parent.find(".msp_activ_area").append('<div class="item" refsearch=\'' + refSearch + '\' ref="' + refFind + '">' + valFind + '</div>');
                        $parent.find(".msp_inactiv_area").append('<div class="item" refsearch=\'' + refSearch + '\' ref="' + refFind + '" style="display:none;">' + valFind + '</div>');
                    } else {
                        $parent.find(".msp_activ_area").append('<div class="item" refsearch=\'' + refSearch + '\' ref="' + refFind + '" style="display:none;">' + valFind + '</div>');
                        $parent.find(".msp_inactiv_area").append('<div class="item" refsearch=\'' + refSearch + '\' ref="' + refFind + '">' + valFind + '</div>');
                    }
                });
                $parent.find(".msp_body .item").on("click", function () {
                    if ($(this).parent().hasClass('msp_inactiv_area')) {
                        $parent.find(' .msp_activ_area .item[ref=' + $(this).attr("ref") + ']').show();
                        $(this).hide();
                        $this.find('option[value="' + $(this).attr("ref") + '"]').attr("selected", "selected");
                    } else {
                        $parent.find(' .msp_inactiv_area .item[ref=' + $(this).attr("ref") + ']').show();
                        $(this).hide();
                        $this.find('option[value="' + $(this).attr("ref") + '"]').removeAttr("selected");
                    }
                });
                $parent.find(".msp_search_input").on("keyup", function () {
                    var searchFieldVal = $(this).val();
                    searchFieldVal = searchFieldVal.toLowerCase();
                    $parent.find(".msp_inactiv_area .item").each(function () {
                        var areaItem = $(this);
                        var searchList = $.parseJSON($(this).attr("refsearch"));
                        var showMe = false;
                        $(searchList).each(function (key, sitem) {
                            sitem = sitem.toString();
                            if (sitem.indexOf(searchFieldVal) !== -1 || !searchFieldVal) {
                                showMe = true;
                            }
                        });
                        if (showMe === true) {
                            areaItem.show();
                        } else {
                            areaItem.hide();
                        }

                    });
                });
                break;
            default:
                $parent.append(productionBoard.templates.multiSelectPlus).find(".msp_head").hide();
                $this.find("option").each(function () {
                    var refFind = $(this).val();
                    var valFind = $(this).html();
                    var statusFind = $(this).is(':selected');
                    if (statusFind) {
                        $parent.find(".msp_activ_area").append('<div class="item"  ref="' + refFind + '">' + valFind + '</div>');
                        $parent.find(".msp_inactiv_area").append('<div class="item" ref="' + refFind + '" style="display:none;">' + valFind + '</div>');
                    } else {
                        $parent.find(".msp_activ_area").append('<div class="item"  ref="' + refFind + '" style="display:none;">' + valFind + '</div>');
                        $parent.find(".msp_inactiv_area").append('<div class="item" ref="' + refFind + '">' + valFind + '</div>');
                    }
                });
                $parent.find(".msp_body .item").on("click", function () {
                    if ($(this).parent().hasClass('msp_inactiv_area')) {
                        $parent.find(' .msp_activ_area .item[ref=' + $(this).attr("ref") + ']').show();
                        $(this).hide();
                        $this.find('option[value="' + $(this).attr("ref") + '"]').attr("selected", "selected");
                    } else {
                        $parent.find(' .msp_inactiv_area .item[ref=' + $(this).attr("ref") + ']').show();
                        $(this).hide();
                        $this.find('option[value="' + $(this).attr("ref") + '"]').removeAttr("selected");
                    }
                });
                break;
        }
    },
    getUrlVars: function () {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            if (hashes[i].indexOf('#') !== -1) {
                hashes[i] = hashes[i].slice(0, hashes[i].indexOf('#'));
            }
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name) {
        return $.getUrlVars()[name];
    },
    /*
     * Definiert eine Inputfeld als Filterfeld
     * 
     * in dem Input feld muss ein attribut mit search-for sein welches
     * die Klasse der durchzusuchenden tabellen enthalten.
     * 
     * wenn ein einzener TR Tag nicht mit gefiltert werden soll muss er die Klasse "noUnhideIfSearch" enthalten
     * 
     * @param {string} selector jQuery Selector Class (Example "tablesWithData")
     * @returns {undefined}
     */
    filterInput: function (selector) {
        $(selector).on("keyup", function () {
            var sf = $(this).attr("search-for");
            var search = $(this).val();
            $("." + sf + " tr").each(function () {
                if ($(this).hasClass("noUnhideIfSearch") === false) {
                    $(this).css("display", "");
                    var si = $(this).text().toUpperCase();
                    if (si.indexOf(search.toUpperCase()) === -1 && $(this).find("th").length === 0) {
                        $(this).css("display", "none");
                    }
                }

            });
        })
    },
    /*
     * autocompleteMe läd nach den erste 3 Zeichen alle Datenbankeinträge und schlägt  die wahrscheinlichsten 3 vor
     * Aus ALT-System übernommen und muss noch PHP Technisch übernommen werden !!!!!
     */
    autocompleteMe: function (selector) {
        $(selector).each(function () {
            var id = $(this).prop("id");
            var parentObj = $(this);
            var modelInfo = $(this).attr("id");
            $.ajax({
                data: {
                    modelinfo: modelInfo,
                },
                type: 'POST',
                url: '/application/Ajax/JSFunctions/autocompleteMe.php',
            }).done(function (data) {
                var data = $.parseJSON(data);
                if (data.status == true) {
                    parentObj.attr("data-source", JSON.stringify(data.data));
                    parentObj.attr("autocomplete", "off");
                    parentObj.attr("data-items", "5");
                    parentObj.attr("data-provide", "typeahead");
                }
            }).fail(function (textStatus) {
                alert("Error");
                console.log(textStatus);
            });
        });
    }
});


// Base Funtions

htmlEntities = function (str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos');
}

checkPwd = function (selector) {
    var ref = $(selector).attr("pwdref");
    var pb = $("#" + ref + " div:first");
    $(selector).on("keyup", function () {
        var pswd = $(selector).val();
        var lvl = 0;
        if (pswd.length >= 8)
            lvl++;
        if (pswd.match(/[A-z]/))
            lvl++;
        if (pswd.match(/[A-Z]/))
            lvl++;
        if (pswd.match(/\d/))
            lvl++;
        var lvl_p = 100 / 4 * lvl;
        pb.css("width", lvl_p + "%").prop("aria-valuenow", lvl_p);
        pb.removeClass("bg-danger").removeClass("bg-warning").removeClass("bg-success");
        if (lvl == 1) {
            pb.addClass("bg-danger");
        } else if (lvl == 2) {
            pb.addClass("bg-warning");
        } else if (lvl == 3) {
            pb.addClass("bg-warning");
        } else if (lvl == 4) {
            pb.addClass("bg-success");
        }

    });
}

/*
 * Language File Access
 * 
 * @param {string} name
 * @returns {string}
 */
LD = function (name) {
    return langData[name];
}

/**
 * Alternative zur Bootstrap NAV-Bar da diese bei verschachtelung nicht funktioniert
 * 
 * 
 * @param {jQuery Selector} e
 */
navbarAlternate = {
    init: function (jqElement) {
        jqElement.find(".nav-button").on("click", function (e) {
            e.preventDefault();
            navbarAlternate.setActiv($(this));
        });
    },
    setActiv: function (jqElement) {
        jqElement.parent().parent().find("a").each(function () {
            $($(this).removeClass("active").attr("href")).removeClass("in show active").hide();
        });
        $(jqElement.addClass("active").attr("href")).addClass("in show active").show();
    }
}

/**
 * Fix MDB DataTable Bug
 * @param {string} id
 */
FixedDataTable = function (id) {
    $("#" + id + '_wrapper select').addClass('mdb-select colorful-select dropdown-primary');
    $("#" + id + '_wrapper .mdb-select').material_select();
    $("#" + id + "_length>label:first").changeElementType("div");
    $("#" + id + "_length .mdb-select ").css("width", "40px").css("border", "0").css("margin", "0");
    $("#" + id + "_length .mdb-select span.caret").css("top", "6px");
    $("#" + id + "_length .mdb-select input.select-dropdown").css("height", "1rem");
    $("#" + id + "_length>div:first").css("font-weight", "400");

};

/**
 * Set MDB tables: notSortable, lengthMenu, pageLength
 * @param {string} id, {string} cssClass, {array} options
 */
DataTableParams = function (id, cssClass, options) {
    $("#" + id + "." + cssClass).DataTable(options);
};