(function(b, a) {
    if ("function" === typeof define) { define("", ["$"], function(c) { a(c) }) } else { a(b.jQuery) }
})(this, function(jQuery) {

    var server_url = "/",
        winLocalStorage = typeof window.localStorage != "undefined";
    (function() {
        var isIE = function(ver) {
            var b = document.createElement("b");
            b.innerHTML = "<!--[if IE " + ver + "]><i></i><![endif]-->";
            return b.getElementsByTagName("i").length === 1
        };
        if (typeof JSON == "undefined" || !JSON || isIE(8)) {
            if (isIE(8)) { window.JSON = undefined }
            var jsonScript = document.createElement("script");
            jsonScript.src = "/js/comment/json2.v.1.0.js";
            document.getElementsByTagName("head")[0].appendChild(jsonScript)
        }
    })();

    function sugTemplate() {}

    if ((window.navigator.appName.toUpperCase().indexOf("MICROSOFT") >= 0) && (document.execCommand)) { try { document.execCommand("BackgroundImageCache", false, true) } catch (e) {} }
    sugTemplate.prototype.getSuggCdnImgLink = function(imgSrc) {
    //     if (!imgSrc) { return "" }
    //
    //     function hashCode(str) {
    //         var hash = 0;
    //         if (str.length == 0) { return hash }
    //         var hashChar;
    //         for (var i = 0; i < str.length; i++) {
    //             hashChar = str.charCodeAt(i);
    //             hash = ((hash << 5) - hash) + hashChar;
    //             hash = hash & hash
    //         }
    //         return hash
    //     }
    //     var isHttps = location.protocol.toLowerCase() == "https:";
    //     if (!isHttps || (imgSrc.indexOf("http://") == -1 && imgSrc.indexOf("https://") == -1) || (imgSrc.indexOf("https://") == 0 && imgSrc.indexOf(".store.sogou.com") == -1)) { return imgSrc }
    //     var cycle = Math.abs(hashCode(imgSrc) % 4) + 1;
    //     var cdnHost = "https://img0" + cycle + ".sogoucdn.com",
    //         regex1 = /^\s*http:\/\/www\.sogou\.com/g,
    //         regex2 = /^\s*http:\/\/img\d*\.sogoucdn\.com/g,
    //         regex3 = /^\s*http:\/\/img\d*\.store\.sogou\.com/g,
    //         regex4 = /^\s*http:\/\/imgstore\d*\.cdn\.sogou\.com/g,
    //         regex5 = /^\s*http:\/\/cmc\.imgstore\.cdn\.sogou\.com/g,
    //         regex6 = /^\s*http:\/\/pic\d*\.sogoucdn\.com/g,
    //         regex7 = /^\s*https:\/\/img\d*\.store\.sogou\.com/g;
    //     if (regex1.test(imgSrc)) { return imgSrc.replace(regex1, "") } else { if (regex2.test(imgSrc)) { return imgSrc.replace(regex2, cdnHost) } else { if (regex3.test(imgSrc)) { return imgSrc.replace(regex3, cdnHost) } else { if (regex4.test(imgSrc)) { return imgSrc.replace(regex4, cdnHost) } else { if (regex5.test(imgSrc)) { return imgSrc.replace(regex5, cdnHost) } else { if (regex6.test(imgSrc)) { return imgSrc.replace(regex6, cdnHost) } else { if (regex7.test(imgSrc)) { return imgSrc.replace(regex7, cdnHost) } else { return cdnHost + "/v2/thumb?t=2&url=" + encodeURIComponent(imgSrc) + "&appid=200580" } } } } } } }
    };
    sugTemplate.prototype.vmap = { "21": ".v.3", "60": ".v.5", "69": ".v.2", "89": ".v.1", "91": ".v.2", "95": ".v.1", "97": ".v.5", "113": ".v.3", "117": ".v.3", "123": ".v.1", "125": ".v.3", "131": ".v.1", "137": ".v.2", "145": ".v.5", "163": ".v.3", "164": ".v.3", "165": ".v.1", "166": ".v.3", "186": ".v.1", "191": ".v.5", "201": ".v.1", "206": ".v.2", "208": ".v.1", "210": ".v.4", "244": ".v.6", "262": ".v.1", "266": ".v.1", "273": ".v.1", "312": ".v.4", "317": ".v.3", "320": ".v.5", "328": ".v.2", "330": ".v.1", "338": ".v.1", "344": ".v.2", "349": ".v.1", "376": ".v.7", "322": ".v.2", "330": ".v.1", "336": ".v.2", "349": ".v.2", "400": ".v.1", "406": ".v.2", "411": ".v.2", "446": ".v.2", "478": ".v.1", "697": ".v.1", "698": ".v.1", "2040": ".v.3", "2140": ".v.2", "2185": ".v.2", "2098": ".v.5", "2226": ".v.2", "3005": ".v.4", "3072": ".v.1", "4871": ".v.1", "10001": ".v.5", "10002": ".v.5", "10003": ".v.3", "10004": ".v.4", "10005": ".v.4", "70050101": ".v.1", "70065600": ".v.1", "70065000": ".v.1", "70065200": ".v.1", "70089401": ".v.1", "ad1": ".v.4" };
    sugTemplate.prototype.cutTitle = function(div, oText) {
        var isIe6 = navigator.userAgent.indexOf("MSIE 6") != -1 && !window.opera,
            appended = "...",
            mat = /^(.*?)(<b>(.*?)<\/b>)?(<span><\/span>)?$/i.exec(oText),
            txt = [mat[1], mat[3], mat[4] ? mat[4] : ""],
            i = txt[0].length + (txt[1] ? txt[1].length : 0),
            oneLineHeight;
        if (isIe6) { div.style.height = null }
        div.innerHTML = "我";
        oneLineHeight = div.offsetHeight;
        div.innerHTML = oText;
        while (div.offsetHeight > oneLineHeight * 5 / 4 && div.className.indexOf("js-top-line-sugg") == -1) {
            div.innerHTML = txt[0].substring(0, i) + (i > txt[0].length ? "<b>" + txt[1].substring(0, i - txt[0].length) + appended + "</b>" : appended) + txt[2];
            i--
        }
        if (isIe6) { div.style.height = "27px" }
    };
    sugTemplate.prototype.cutAllTitle = function(suggLis, suggOText) { for (var i = 0; i < suggLis.length; i++) { this.cutTitle(suggLis[i], suggOText[i]) } };
    sugTemplate.prototype.revertAllTitle = function(suggLis, suggOText) { for (var i = 0; i < suggLis.length; i++) { suggLis[i].innerHTML = suggOText[i] } };
    sugTemplate.prototype.len = function(str) { return str && str.replace ? str.replace(/\[\/?em\]/g, "").replace(/[^\x00-\xff]/g, "rr").length : "" };
    sugTemplate.prototype.cutLength = function(str, maxLen, appended, appendLength) {
        appended = appended || "...";
        appendLength = appendLength || 3;
        if (this.len(str) > maxLen) { do { if (str.lastIndexOf("[em]") == str.length - 4) { str = str.substring(0, str.length - 4) } else { if (str.lastIndexOf("[/em]") == str.length - 5) { str = str.substring(0, str.length - 5) } else { str = str.substring(0, str.length - 1) } } } while (str && (this.len(str) + appendLength > maxLen)); if (str.lastIndexOf("[/em]") < str.lastIndexOf("[em]")) { str = str.substring(0, str.lastIndexOf("[em]")) + str.substring(str.lastIndexOf("[em]") + 4) } return str + appended }
        return str
    };
    sugTemplate.prototype.$c = function(tag_name, obj, cname) { var tmp = document.createElement(tag_name); if (obj) { obj.appendChild(tmp) } if (cname) { tmp.className = cname } return tmp };
    sugTemplate.prototype.$ = function(id) { return document.getElementById(id) };
    sugTemplate.prototype.parseXML = function(data) {
        if (window.DOMParser) {
            tmp = new DOMParser();
            xml = tmp.parseFromString(data, "text/xml")
        } else {
            xml = new ActiveXObject("Microsoft.XMLDOM");
            xml.async = "false";
            xml.loadXML(data)
        }
        console.info(data);
        console.info('xml.do..', xml.documentElement);
        return xml.documentElement
    };
    sugTemplate.prototype.selectNodes = function(node, path) {
        function getChildren(nodes, name) { var ret = []; for (var i = 0; i < nodes.length; i++) { for (var j = 0; j < nodes[i].childNodes.length; j++) { if (nodes[i].childNodes[j].nodeName == name) { ret[ret.length] = nodes[i].childNodes[j] } } } return ret }
        var ret = [];
        var nodes = [node];
        var paths = path.split("/");
        for (var i = 0; i < paths.length; i++) { nodes = getChildren(nodes, paths[i]); if (nodes == null) { return [] } }
        return nodes
    };
    sugTemplate.prototype.buildTitle = function(div, data, url, title, cname, maxLength) {
        console.info('buildTitleFunction');
        var tmp = this.$c("h3", div, cname || "sugtype");
        maxLength = maxLength || 44;
        tmp.innerHTML = ['<a id="sgtitle" onfocus="this.blur();" href="', url ? (url + '" target="_blank') : ("/search?ie=utf8&query=" + data.query), '">', this.cutLength(title ? title : decodeURIComponent(data.query), maxLength), "</a>"].join("");
        return tmp
    };
    sugTemplate.prototype.buildMoreHint = function(div, data) {
        var morehint = this.$c("div", div, "morehint");
        var ahint = this.$c("a", morehint);
        ahint.innerHTML = "更多相关结果&gt;&gt;";
        ahint.href = "/search?query=" + data.query;
        ahint.target = "_blank";
        ahint.setAttribute("hideFocus", "hidefocus")
    };
    sugTemplate.prototype.markRed = function(str, red_start, red_end) {
        red_start = red_start || "<em>";
        red_end = red_end || "</em>";
        if (str.indexOf(red_start) > 0) { return str }
        if (str.indexOf("[em]") >= 0) { str = str.replace(/\[em\]/g, red_start).replace(/\[\/em\]/g, red_end) }
        return str
    };
    sugTemplate.prototype.escape = function(str) { return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") };
    sugTemplate.prototype.cutRed = function(str) { return str.replace(/\[\/?em\]/g, "") };
    sugTemplate.prototype.buildVRTitle = function(li, doc, length) {
        var tmp = this.$c("a", this.$c("h3", li, "se_embed_title"));
        var title = doc.title;
        title = this.cutLength(title, length);
        title = this.escape(title);
        title = this.cutRed(title);
        tmp.href = doc.url;
        tmp.target = "_blank";
        tmp.title = this.cutRed(doc.title);
        tmp.innerHTML = title;
        return tmp
    };
    sugTemplate.prototype.buildContent = function(div, data) {
        console.info('build content: ', data);
        var querylist = this.$c("div", div, "querylist");
        for (var i = 0; i < 2; i++) {
            var qitem = this.$c("a", querylist, "qitem");
            qitem.target = "_blank";
            qitem.href = data.docs[i].url;
            qitem.onfocus = function() { this.blur() };
            var qtitle = this.$c("strong", qitem, "qtitle");
            var siteco = this.$c("span", qtitle, "siteico");
            if (data.docs[i].favicon) { siteco.style.background = "url(" + data.docs[i].favicon + ") no-repeat scroll 6px 50% transparent" }
            siteco.innerHTML = this.cutLength(data.docs[i].title, 54);
            if (data.docs[i].content) {
                var qsummary = this.$c("span", qitem, "qsummary");
                qsummary.innerHTML = this.cutLength(this.escape(data.docs[i].content), 106)
            }
            var qcite = this.$c("span", qitem, "qcite");
            if (data.docs[i]["url"] && data.docs[i]["url"].indexOf("://") > 0) { qcite.innerHTML = decodeURIComponent(data.docs[i]["url"].split("://")[1].split("/")[0]) } else { qcite.innerHTML = "" }
        }
        this.buildMoreHint(div, data)
    };
    sugTemplate.prototype.build = function(div, data, jsonData, goTongjiId, vrFlag, userInputString, suguuid) {
        console.info('build: ', data, jsonData, goTongjiId, vrFlag, userInputString, suguuid);
        if (!data) { return false }
        var that = this,
            pos = -1,
            i = 0;
        for (; i < jsonData.length; i++) { if (jsonData[i] == decodeURIComponent(data.query)) { pos = i; break } }
        goTongjiId[pos] = data.type || "-1";
        if (!data.doc_num || !data.docs) { return false }
        div.onclick = function(evt) {
            if ((evt && (evt.button != 0)) || ((!evt) && (window.event.button != 0))) { return }
            try {
                evt = evt || window.event;
                var srcElem = ((evt.target) ? evt.target : evt.srcElement),
                    tag;
                while (srcElem && srcElem.tagName) {
                    tag = srcElem.tagName.toUpperCase();
                    if (tag == "A") { }
                    if (tag == "DIV") { break }
                    srcElem = srcElem.parentNode
                }
            } catch (E) {}
        };
        if (!data.type || data.type == 100) {
            div.innerHTML = "";
            this.buildTitle(div, data);
            this.buildContent(div, data)
        } else {
            if (data.type == 10000) {
                try {
                    var xml = this.parseXML(data.docs[0].xml);
                    var qaType = xml.getAttribute("type");
                    data.qaType = parseInt(qaType);
                    data.type = 10000 + data.qaType;
                    data.qaTag = vrFlag[decodeURIComponent(data.query)].tupu_key
                } catch (e) {}
            }
            if (!this["build" + data.type]) {
                if ((data.type == "317" || data.type == "60") && !that.curtime) {
                    if (window.standardtime) {
                        var tmpfunc = window.standardtime;
                        window.standardtime = function(i, j) { that.curtime = i; return tmpfunc(i, j) }
                    } else { window.standardtime = function(i, j) { that.curtime = i } }
                    var spt = document.createElement("script");
                    spt.charset = "gb2312";
                    spt.src = "websearch/features/standardtimeadjust.jsp?a=" + Math.random();
                    document.body.appendChild(spt)
                }
                var bldspt = document.createElement("script");
                bldspt.charset = "gb2312";
                bldspt.src = server_url + "js/sugtemp/build" + data.type + (this.vmap[data.type] || "") + ".js";
                document.body.appendChild(bldspt)
            }
            this.buildVR(div, data, 0)
        }
        return true
    };

    sugTemplate.prototype.buildVR = function(div, data, trys) {

        if (typeof this["build" + data.type] == "function") {
            try {
                var dataarr = data.docs,
                    pdata = dataarr[0];
                var xml = dataarr[0].xml;
                if (xml) {
                    if (location.protocol.toLowerCase() == "https:") {
                        xml = xml.replace(/http:\/\/www\.sogou\.com/g, "");
                        xml = xml.replace(/http:\/\/img\d+\.sogoucdn\.com/g, "https://img.store.sogou.com");
                        xml = xml.replace(/http:\/\/img\d+\.store\.sogou\.com/g, "https://img.store.sogou.com");
                        xml = xml.replace(/http:\/\/imgstore\.cdn\.sogou\.com/g, "https://img.store.sogou.com")
                    }
                    xml = this.parseXML(xml)
                }
                try { pdata.url = this.selectNodes(xml, "url")[0].firstChild.nodeValue } catch (e) {}
                try { pdata.title = this.selectNodes(xml, "title")[0].firstChild.nodeValue } catch (e) {}
                try { pdata.domain = pdata["url"].split("://")[1].split("/")[0] } catch (e) {}
                div.innerHTML = "";
                this["build" + data.type](div, data, pdata, xml)
            } catch (E) {}
        } else {
            if (trys <= 10) {
                var that = this;
                setTimeout(function() { that.buildVR(div, data, trys + 1) }, 30)
            } else {
                div.innerHTML = "";
                this.buildTitle(div, data);
                this.buildContent(div, data)
            }
        }
    };

    sugTemplate.prototype.reg = new RegExp("{{(.*?)}}", "g");
    sugTemplate.prototype.tongji = { suggDivReqCount: 0, suggDivShowCount: 0, suggHotShowCount: 0, suggHisShowCount: 0, sugHisClk: 0, sugVrWordCount: 0, totalSugCount: 0, totalCommonSugCount: 0, totalHistorySugCount: 0, inputEmptyHisDivCount: 0, inputEmptyHisWordCount: 0 };
    sugTemplate.prototype.resetTongji = function() {
        this.tongji.suggDivReqCount = 0;
        this.tongji.suggDivShowCount = 0;
        this.tongji.suggHisShowCount = 0;
        this.tongji.sugHisClk = 0;
        this.tongji.sugVrWordCount = 0;
        this.tongji.totalSugCount = 0;
        this.tongji.totalCommonSugCount = 0;
        this.tongji.totalHistorySugCount = 0;
        this.tongji.suggHotShowCount = 0;
        this.tongji.inputEmptyHisDivCount = 0;
        this.tongji.inputEmptyHisWordCount = 0
    };

    sugTemplate.prototype.abtestId = (function() {
        function getUrlParamVal(name) { var x = location.search.split(name + "="); if (x.length > 1) { return x[1].split("&")[0] } return null }

        function getSuggCookie(name) { var urlAbtest = getUrlParamVal("abtestid"); if (urlAbtest) { return urlAbtest } var dc = document.cookie; var prefix = name + "="; var begin = dc.indexOf("; " + prefix); if (begin == -1) { begin = dc.indexOf(prefix); if (begin != 0) { return null } } else { begin += 2 } var end = document.cookie.indexOf(";", begin); if (end == -1) { end = dc.length } return unescape(dc.substring(begin + prefix.length, end)) }
        return getSuggCookie("ABTEST") && getSuggCookie("ABTEST").split("|").length > 0 ? getSuggCookie("ABTEST").split("|")[0] : ""
    })();
    sugTemplate.prototype.buildTemplate = function(template, xml) {
        var that = this;

        function findReplacement(a, obj) { obj = obj.split("@"); var nodes = that.selectNodes(xml, "" + obj[0]); if (nodes.length > 0) { if (obj.length > 1) { return nodes[0].getAttribute(obj[1]) } else { return nodes[0].firstChild.nodeValue.replace(/\ue40a/g, "").replace(/\ue40b/g, "") } } return "" }
        return template.replace(this.reg, findReplacement)
    };

    function sogouSugg(newPara) {
        if (typeof SugPara != "object") { SugPara = {} }

        function getSuggCookie(name) { var dc = document.cookie; var prefix = name + "="; var begin = dc.indexOf("; " + prefix); if (begin == -1) { begin = dc.indexOf(prefix); if (begin != 0) { return null } } else { begin += 2 } var end = document.cookie.indexOf(";", begin); if (end == -1) { end = dc.length } return unescape(dc.substring(begin + prefix.length, end)) }

        function getAbtestId() { var urlAbtest = getUrlParamVal("abtestid"); if (urlAbtest) { return urlAbtest } return getSuggCookie("ABTEST") && getSuggCookie("ABTEST").split("|").length > 0 ? getSuggCookie("ABTEST").split("|")[0] : "" }
        var isIe = navigator.userAgent.indexOf("MSIE") != -1 && !window.opera;
        var isIe8 = navigator.userAgent.indexOf("MSIE 8") != -1 && !window.opera;
        var that = this,
            tophint, MAX_RETRY_FETCH_SITE = 3,
            handleRetry = MAX_RETRY_FETCH_SITE - 1,
            template = new sugTemplate(),
            myPara = newPara || SugPara,
            on = newPara ? 0 : 1,
            d = document,
            inputid = myPara["inputid"] || "query",
            sugType = myPara["sugType"] || "web",
            bigsize = myPara["bigsize"] || false,
            productId = myPara["productId"] || sugType,
            postFix = myPara["postFix"] || "",
            preFix = myPara["preFix"] || "",
            revsd = myPara["revsd"] || 0,
            suggestRid = myPara["suggestRid"] || "",
            normalRid = myPara["normalRid"] || "",
            enableSug = true,
            useParent = myPara["useParent"] || 0,
            abtestid = myPara["abtestid"] || getAbtestId(),
            ipn = myPara["ipn"] || "",
            domain = myPara["domain"] || "",
            uri = myPara["uri"] || "/sugg/ajaj_json.jsp", // FIXME
            invokeSuggLocation = myPara["sugglocation"] || "result",
            suggUri = "/suggnew/word_completion",
            firstRun = 1,
            suggDiv, suggIfm = null,
            suggLis = [],
            suggOText = [],
            input_elem, input_form, mousedown_ontr = 0,
            noneed_query = "",
            lastinput_query = "",
            sending_timer = 0,
            highlight_li = -1,
            jsonData = [],
            jsonDataTongji = [],
            jsonDataTongji0 = [],
            jsonDataTongji1 = [],
            jsonDataTongji2 = [],
            goTongjiId = [],
            hasPersonal = 0,
            hasPersonal1 = 0,
            userInputString = "",
            cache = {},
            sitecache = {},
            ajaj = null,
            ajaj2 = null,
            ajajPinyin = null,
            originalQuery = "",
            suggestWordId = -1,
            input_time = 0,
            oldfunc = function() {},
            oldfunc2 = function() {},
            contentDiv, siteTimer, setTimer1, setTimer2, setTimer3, hideTimer, $c = sugTemplate.prototype.$c,
            handleFlag = handleRetry,
            vrFlag = {},
            sugData = {},
            cur_li = -1,
            isKeyTime = false,
            mouseTime_li = -1,
            timeOutTimer, loadingTimer, suguuid = null,
            suglabId, prevQuery = "",
            curr_query = "",
            suggShowTime = 0,
            newHisQuery = "",
            getNewHisLen = 0,
            badSuggMap = {},
            hoverClassReg = new RegExp("\\bover\\b"),
            suggData = true,
            suggTopWords = false,
            isIE7 = navigator.userAgent.toLocaleUpperCase().indexOf("MSIE 7") > 0,
            showVr = typeof(myPara["showVr"]) != "undefined" ? myPara["showVr"] : true,
            showHotwords = typeof(myPara["showHotwords"]) != "undefined" ? myPara["showHotwords"] : true,
            suv = getCookieVal("cookietest") || "";
        var version = "1.0",
            sogouSearchSugPinyinN = "sogouSearchSugPinyin@" + version;
        var sugUigs = { "uigs_productid": "suggweb", "type": "sugg", "sugtype": sugType, "source": invokeSuggLocation, "pvuuid": generateUUID(), "abtest": uigs_para.abtestid, "iploc": getIpLoc(), "userid": suv, "login_uid": uigs_para.puid, "resolution": uigs_para.scrnwi + "*" + uigs_para.scrnhi, "suguuid": generateUUID(), "query": "", "pid": uigs_para.pid != "" ? uigs_para.pid : "" },
            sugUigsPosCom = { "act": "show_pos", "qingqiu": 0, "show": 0, "hotword": 0, "history": 0, "result_his": 0, "result_ad": 0, "result_star": 0, "result_end": 0, "hisspecil_star": 0, "hisspecil_end": 0, "result_url": 0, "sugvr": 0, "sugvrtype": "", "sugvrid": "", "history_more": 0, "history_clearall": 0, "noresult": 0, "submit": 0, "querylength": 0, "clktype": "", "clkpos": "", "clkquery": "" },
            sugUigsQueryCom = { "act": "show_query" },
            sugUigsPos, sugUigsQuery;
        ResetSuggUigs();

        function ResetSuggUigs() {
            sugUigs.query = "";
            sugUigsPos = jQuery.extend({}, sugUigsPosCom);
            sugUigsQuery = jQuery.extend({}, sugUigsQueryCom)
        }

        function uigsSend(reportType, obj) {
            // var url = "//pb.sogou.com",
            // imgurl = url + "/" + reportType + ".gif?";
            // (new Image()).src = imgurl + jQuery.param(obj) + "&_t=" + (new Date()).getTime()
        }

        function localStorageMap() { if (!winLocalStorage) { return } var storage = window.localStorage; for (var i = 0; i < storage.length; i++) { var key = storage.key(i); if (key.indexOf("sogouSearchSugPinyin") >= 0) { var arr = key.split("@"); if (!arr[1] || arr[1] != version) { localStorage.removeItem(key) } } } }
        localStorageMap();
        that.sw = function(kw, sw) {
            if (!sw) { try { handleData(["", []]) } catch (E) {} }
            on = sw || false;
            noneed_query = kw || "";
            showtop = true;
            if (suggDiv) { hideDiv() }
        };
        that.sugTypeChange = function(_sugType) {
            sugType = _sugType;
            cache = {}
        };

        function $(elemid) { return d.getElementById(elemid) }

        function bind(elem, evt, func) { if (elem) { return elem.addEventListener ? elem.addEventListener(evt, func, false) : elem.attachEvent("on" + evt, func) } }

        function getElesByClass(class_name, parent) {
            var aEle = parent.getElementsByTagName("*"),
                re = new RegExp("\\b" + class_name + "\\b"),
                aResult = [];
            for (var i = 0; i < aEle.length; i++) { if (re.test(aEle[i].className)) { aResult.push(aEle[i]) } }
            return aResult
        }

        function removeClass(node, cls) {
            if (node) {
                var className = node.className,
                    re = new RegExp("\\b" + cls + "\\b");
                className = className.replace(re, "");
                node.className = className
            }
        }

        function addClass(node, cls) {
            if (node) {
                var className = node.className,
                    re = new RegExp("\\b" + cls + "\\b");
                if (re.test(node.className)) { return }
                className = className + " " + cls;
                node.className = className
            }
        }

        function pingback(action_name, suguuid) {
            // var now = new Date();
            // var uigs_t = (now.getTime()) * 1000 + Math.round(Math.random() * 1000);
            // var uigs_productid = "";
            // if (sugType != "") { uigs_productid = "sugg" + sugType }
            // var url1 = [(location.protocol.toLowerCase() == "https:" ? "https://pb.sogou.com/" : "http://pb.sogou.com/") + "pv.gif", "?uigs_productid=", encodeURIComponent(uigs_productid), "&uigs_t=", uigs_t, "&w=", encodeURIComponent(input_elem.value), "&k=", encodeURIComponent(userInputString), "&s="];
            // url1.push((suggestWordId != -1) ? "t" : "f");
            // if (userInputString) { url1.push("&istrlen=" + userInputString.length) }
            // if (action_name == "del_his_item" || action_name == "clear_history" || action_name == "more_history" || action_name == "input_fast_drop" || action_name == "drop_by_his") {
            //     url1.push("&act=" + action_name);
            //     url1.push("&abtestid=" + abtestid);
            //     if (suguuid) { url1.push("&suguuid=" + suguuid) }(new Image()).src = url1.join("");
            //     return
            // }
            // if (suggestWordId != -1) {
            //     url1.push("&stj0=" + jsonDataTongji0[suggestWordId]);
            //     url1.push("&stj1=" + jsonDataTongji1[suggestWordId]);
            //     url1.push("&stj2=" + jsonDataTongji2[suggestWordId])
            // }
            // url1.push("&hp=" + hasPersonal);
            // url1.push("&hp1=" + hasPersonal1);
            // if (suggestWordId != -1) {
            //     url1.push("&cline=");
            //     url1.push(suggestWordId)
            // }
            // if (action_name == "sb") {
            //     url1.push("&s_req=" + template.tongji.suggDivReqCount);
            //     url1.push("&s_div_show=" + template.tongji.suggDivShowCount);
            //     url1.push("&s_h_show=" + template.tongji.suggHisShowCount);
            //     if (template.tongji.suggHisShowCount > 0) { url1.push("&s_h_clk=" + template.tongji.sugHisClk) }
            //     url1.push("&s_vr_word=" + template.tongji.sugVrWordCount);
            //     url1.push("&s_word=" + template.tongji.totalSugCount);
            //     url1.push("&s_common_word=" + template.tongji.totalCommonSugCount);
            //     url1.push("&s_h_word=" + template.tongji.totalHistorySugCount);
            //     url1.push("&s_hot_word=" + template.tongji.suggHotShowCount);
            //     url1.push("&s_emptyinput_h_word=" + template.tongji.inputEmptyHisWordCount);
            //     url1.push("&s_emptyinput_h_div=" + template.tongji.inputEmptyHisDivCount);
            //     template.resetTongji()
            // }
            // if (action_name) {
            //     url1.push("&act=");
            //     url1.push(encodeURIComponent(action_name))
            // }
            // url1.push("&r=" + now.getSeconds());
            // url1.push("&abtestid=" + encodeURIComponent(abtestid));
            // if (typeof(puid) != "undefined" && puid) { url1.push("&puid=" + puid) }
            // url1.push("&uk=" + (useKey ? 1 : 0));
            // url1.push("&sbby=" + (submitby));
            // (new Image()).src = url1.join("")
        }

        function init() {
            if (!$(inputid)) { setTimeout(init, 50); return }
            initStyle();
            input_elem = $(inputid);
            input_form = input_elem.parentNode;
            while (input_form && input_form.tagName.toLowerCase() != "form") { input_form = input_form.parentNode }
            if (!input_form) { return }
            if (myPara.reset) { input_form.reset() }
            input_elem.setAttribute("autocomplete", "off");
            bind(input_elem, "mousedown", mousedown);
            bind(input_elem, "keydown", keydown);
            noneed_query = input_elem.value;
            checkQuery();
            if (winLocalStorage && window.JSON) { var oq = trimStr(getQuery()); if (oq && oq.length < 40) { var py = getLocalStoragePinyin(oq); if (py) { localStoragePinyin(oq, py) } else { httpRequestPinyin(oq) } } }
        }

        function mousedown() {
            if (firstRun) { start() }
            if (myPara.oms) {
                noneed_query = "";
                lastinput_query = ""
            }
            showtop = false
        }

        function positionDiv() {
            var inputBox = getPositionAndSize(useParent ? input_elem.parentNode : input_elem);
            var isIndex = (location.href.indexOf("query=") > 0) ? false : (bigsize ? false : true);
            var suggDivTop = (inputBox[1] + inputBox[3] + (isIndex ? -1 : 0));
            var suggDivLeft = (inputBox[0] + (isIndex ? 0 : -1));
            if (isIe8 && useParent) {
                suggDivTop = suggDivTop - 1;
                suggDivLeft = suggDivLeft - 1
            }
            suggDiv.style.top = suggDivTop + "px";
            suggDiv.style.left = suggDivLeft + "px"
        }

        function getPositionAndSize(ele) {
            var x = 0,
                y = 0,
                w = ele.offsetWidth,
                h = ele.offsetHeight;
            if (ele) {
                x += ele.offsetLeft;
                y += ele.offsetTop;
                ele = ele.offsetParent
            }
            return [x, y, 578, h]
        }

        function getQuery() { return input_elem.value }

        function checkQuery() {
            if (getQuery() != noneed_query) {
                showtop = false;
                start();
                return
            }
            setTimeout(checkQuery, 10)
        }

        function checkQuery2() {
            curr_query = getQuery();
            sugUigs["query"] = curr_query;
            if (curr_query && noneed_query != curr_query && lastinput_query == curr_query) {
                if (!sending_timer) {
                    sending_timer = setTimeout(function() {
                        noneed_query = "";
                        suggestWordId = -1;
                        getElesByClass("sug-history", suggDiv)[0].style.display = "none";
                        needData(curr_query)
                    }, 100)
                }
            } else {
                clearTimeout(sending_timer);
                sending_timer = 0;
                if (!curr_query) {
                    sugUigs["pvuuid"] = generateUUID();
                    if (!showtop) {
                        if (getSuggCookie("ppinf") && typeof(userSec) != "undefined" && userSec && !isIE7) {
                            if (suggData) {
                                suggData = false;
                                showtop = true;
                                getData("/sugg/history?queryPlatform=sugg&queryFrom=web&sec=" + userSec + "&op=mine&tags=all::SEARCH_HISTORY::0::10::0::asc&t=" + Math.random(), function(data) { data = JSON.parse(data); if (data && data[0].status == "ok" && data[0].subitem.length > 0) { showHistory(data[0].subitem, true) } else { showLocHisAndHot() } }, showLocHisAndHot, true)
                            }
                        } else { showLocHisAndHot() }
                    }
                }
                lastinput_query = curr_query
            }
            if (curr_query) { showtop = false }
            // if (getNewHisLen == 0) { getlasthistory() }
            setTimeout(checkQuery2, 10)
        }

        function getData(url, fnSucc, fnFaild, async) {
            var oAjax = null;
            if (window.XMLHttpRequest) { oAjax = new XMLHttpRequest() } else { oAjax = new ActiveXObject("Microsoft.XMLHTTP") }
            oAjax.open("GET", url, async);
            oAjax.send();
            oAjax.onreadystatechange = function() { if (oAjax.readyState == 4) { if (oAjax.status == 200) { if (fnSucc) { fnSucc(oAjax.responseText); console.info(oAjax.responseText); } } else { if (fnFaild) { fnFaild() } } } }
        }

        function getlasthistory() {
            console.info('禁止 history');
            return;
            if (getSuggCookie("ppinf") && typeof(userSec) != "undefined" && userSec && !isIE7) {
                getData("/sugg/history?queryPlatform=sugg&queryFrom=web&sec=" + userSec + "&op=mine&tags=all::SEARCH_HISTORY::0::10::0::asc&t=" + Math.random(), function(data) {
                    data = JSON.parse(data);
                    if (data && data[0].status == "ok" && data[0].subitem.length > 0) {
                        var hisQ = data[0].subitem;
                        newHisQuery = encodeURIComponent(hisQ[hisQ.length - 1]["query_string"])
                    } else {
                        if (winLocalStorage && localStorage.getItem(sogouSearchSugPinyinN) && JSON.parse(localStorage.getItem(sogouSearchSugPinyinN)).length > 0) {
                            var hisQ = JSON.parse(localStorage.getItem(sogouSearchSugPinyinN));
                            newHisQuery = encodeURIComponent(hisQ[hisQ.length - 1]["oq"])
                        }
                    }
                }, function() {
                    if (winLocalStorage && localStorage.getItem(sogouSearchSugPinyinN) && JSON.parse(localStorage.getItem(sogouSearchSugPinyinN)).length > 0) {
                        var hisQ = JSON.parse(localStorage.getItem(sogouSearchSugPinyinN));
                        newHisQuery = encodeURIComponent(hisQ[hisQ.length - 1]["oq"])
                    }
                }, true)
            } else {
                if (winLocalStorage && localStorage.getItem(sogouSearchSugPinyinN) && JSON.parse(localStorage.getItem(sogouSearchSugPinyinN)).length > 0) {
                    var hisQ = JSON.parse(localStorage.getItem(sogouSearchSugPinyinN));
                    newHisQuery = encodeURIComponent(hisQ[hisQ.length - 1]["oq"])
                }
            }
            getNewHisLen++
        }

        function showLocHisAndHot() {
            if (winLocalStorage && localStorage.getItem(sogouSearchSugPinyinN) && JSON.parse(localStorage.getItem(sogouSearchSugPinyinN)).length > 0) { showHistory(JSON.parse(localStorage.getItem(sogouSearchSugPinyinN))) } else {
                if (showHotwords) {
                    suggData = true;
                    showTopWord()
                } else { hideDiv() }
            }
        }

        function showHistory(obj, isInterface) {
            var timer;
            clearTimeout(timer);
            timer = setTimeout(function() {
                suggTopWords = false;
                suggData = true;
                showtop = true;
                suggLis = [];
                suggOText = [];
                jsonData = [];
                suggShowTime++;
                var suggList = suggDiv.getElementsByTagName("ul")[0],
                    tmpLi, objLength, sugLength, hisLen = 0;
                while (suggList.childNodes.length > 0) { suggList.removeChild(suggList.childNodes[0]) }
                objLength = obj.length;
                sugLength = objLength > 10 ? objLength - 10 : 0;
                var oq = isInterface ? "query_string" : "oq";
                for (var i = objLength - 1, j = 0; i >= sugLength; i--, j++) {
                    hisLen++;
                    tmpLi = d.createElement("li");
                    tmpLi.style.color = "rgb(122, 119, 200)";
                    tmpLi.setAttribute("history", "1");
                    tmpLi.setAttribute("origin_sugg_query", encodeURIComponent(obj[i][oq]));
                    tmpLi.onmouseover = mouseOver;
                    tmpLi.onmouseout = mouseOut;
                    tmpLi.onmousedown = mouseDown;
                    tmpLi.onclick = mouseClick;
                    tmpLi.setAttribute("lid", j);
                    tmpLi.setAttribute("type", "history");
                    tmpLi.innerHTML = escapeForSpecialChars(obj[i][oq]);
                    var objFlag = obj[i].arr2 ? obj[i].arr2.split(";")[2] : "0";
                    if ((objFlag && objFlag == 1 || objFlag == 2) && showVr) {
                        tmpLi.innerHTML += "<span></span>";
                        template.tongji.sugVrWordCount++
                    }
                    suggLis.push(tmpLi);
                    suggOText.push(tmpLi.innerHTML);
                    suggList.appendChild(tmpLi);
                    jsonData[j] = obj[i][oq];
                    vrFlag[obj[i][oq]] = { "type": objFlag };
                    sugUigsQuery["history" + (i + 1)] = escapeForSpecialChars(obj[i][oq])
                }
                sugUigsPos["history"] = hisLen;
                positionDiv();
                showDiv(isShowing());
                template.cutAllTitle(suggLis, suggOText);
                template.tongji.totalSugCount += suggLis.length;
                template.tongji.totalHistorySugCount += suggLis.length;
                template.tongji.inputEmptyHisWordCount += suggLis.length;
                if (suggLis.length > 0) {
                    template.tongji.suggHisShowCount++;
                    template.tongji.inputEmptyHisDivCount++;
                    userInputString = ""
                }
                if (contentDiv) {
                    contentDiv.style.display = "none";
                    suggDiv.className = "suggestion nobg"
                }
                if (obj.length > 3) {
                    getElesByClass("sug-history", suggDiv)[0].style.display = "block";
                    if (window.suggestionPersonalCenterSwitch == "on") {
                        sugUigsPos["history_more"] = 1;
                        sugUigsPos["history_clearall"] = 1;
                        $("more-history").onclick = function() {
                            sugUigsPos["clktype"] = "history_more";
                            uigsSend("cl", jQuery.extend({}, sugUigs, sugUigsPos));
                            ResetSuggUigs()
                        }
                    } else {
                        sugUigsPos["history_clearall"] = 1;
                        uigsSend("cl", jQuery.extend({}, sugUigs, sugUigsPos));
                        ResetSuggUigs()
                    }
                    $("clear-history").onclick = function() {
                        if (getSuggCookie("ppinf") && typeof(userSec) != "undefined" && userSec && !isIE7) { getData("/sugg/history?queryPlatform=sugg&queryFrom=web&sec=" + userSec + "&op=delete&tags=all::SEARCH_HISTORY::::::::&t=" + Math.random(), false, false, true) }
                        removeAllLocalStoragePy();
                        getElesByClass("sug-history", suggDiv)[0].style.display = "none";
                        sugUigsPos["clktype"] = "history_clearall";
                        uigsSend("cl", jQuery.extend({}, sugUigs, sugUigsPos));
                        ResetSuggUigs()
                    }
                }
            }, 10)
        }

        function deleteDuplicate(arr) {
            var result = [],
                len = arr.length,
                i, j;
            for (i = len - 1; i > -1; i--) {
                j = i - 1;
                while (j > -1) {
                    if (arr[i] === arr[j]) { j = --i }
                    j--
                }
                result.push(arr[i])
            }
            return result.reverse()
        }
        var sctop, toptimer, showtop = false;

        function showTopWord() {
            if (!suggData) { return }
            clearTimeout(toptimer);
            if (typeof top_words == "undefined") {
                if (!sctop) {
                    sctop = d.createElement("script");
                    sctop.charset = "gb2312";
                    sctop.src = "/suggnew/hotwords?v=" + ((new Date()).getTime());
                    d.body.appendChild(sctop)
                }
                toptimer = setTimeout(showTopWord, 50);
                return
            }
            if (!getQuery()) {
                if (!top_words.length) { hideDiv(); return }
                top_words = deleteDuplicate(top_words);
                suggTopWords = true;
                showtop = true;
                suggShowTime++;
                userInputString = "";
                var suggList = suggDiv.getElementsByTagName("ul")[0],
                    tmpLi, hotLen = 0;
                while (suggList.childNodes.length > 0) { suggList.removeChild(suggList.childNodes[0]) }
                suggLis = [];
                suggOText = [];
                jsonData = top_words;
                var protocol = location.protocol.toLowerCase();
                for (var i = 0; i < jsonData.length && i < 10; i++) {
                    hotLen++;
                    tmpLi = d.createElement("li");
                    tmpLi.style.height = "27px";
                    tmpLi.onmouseover = mouseOver;
                    tmpLi.onmouseout = mouseOut;
                    tmpLi.onmousedown = mouseDown;
                    tmpLi.onclick = mouseClick;
                    tmpLi.setAttribute("lid", i);
                    tmpLi.setAttribute("type", "hotword");
                    tmpLi.innerHTML = "<em class='n0' style='background:url(" + "/static/sug/images/n_" + (i + 1) + ".gif) no-repeat;'></em>" + jsonData[i] + (i == 0 ? ' <img src="/static/sug/images/new2.gif" align="absmiddle" />' : "");
                    vrFlag[jsonData[i]] = { "type": 0, "tupu_key": "" };
                    suggLis.push(tmpLi);
                    suggOText.push(tmpLi.innerHTML);
                    suggList.appendChild(tmpLi);
                    sugUigsQuery["hotword" + (i + 1)] = jsonData[i]
                }
                sugUigsPos["hotword"] = hotLen;
                positionDiv();
                showDiv(isShowing());
                tophint.style.display = "";
                if (contentDiv) {
                    contentDiv.style.display = "none";
                    suggDiv.className = "suggestion nobg"
                }
                template.tongji.totalSugCount += suggLis.length;
                if (suggLis.length > 0) { template.tongji.suggHotShowCount++ }
            }
        }

        function generateUUID() {
            var d = new Date().getTime();
            var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == "x" ? r : (r & 3 | 8)).toString(16)
            });
            return uuid
        }

        function getCookieVal(name) { var dc = document.cookie; var prefix = name + "="; var begin = dc.indexOf("; " + prefix); if (begin == -1) { begin = dc.indexOf(prefix); if (begin != 0) { return null } } else { begin += 2 } var end = document.cookie.indexOf(";", begin); if (end == -1) { end = dc.length } return unescape(dc.substring(begin + prefix.length, end)) }

        function getIpLoc() { var iploc = getCookieVal("IPLOC"); if (iploc) { if (!/CN[0-9]{4,6}/.exec(iploc)) { iploc = "CN110000" } while (iploc.length < 6) { iploc += "0" } } if (iploc && iploc.length > 2) { return iploc.substring(2) } return "" }

        function getUrlParamVal(name) { var x = location.search.split("&" + name + "="); if (x.length > 1) { return x[1].split("&")[0] } var y = location.search.split("?" + name + "="); if (y.length > 1) { return y[1].split("&")[0] } return null }

        function getProtocol() { var protocol = location.protocol; return protocol.substring(0, protocol.length - 1) }

        function generateUrlParams() {
            function getPolicyno() { if (typeof(ad_policy_no) != "undefined" && ad_policy_no) { return ad_policy_no } return null }

            function isFromIndexPage() { return inputid == "query" ? 1 : 0 }

            function getPid() { var urlPid = getUrlParamVal("pid"); return urlPid ? urlPid : "pid123" }

            function getIp() { if (typeof(lead_ip) != "undefined" && lead_ip) { return lead_ip } return "" }
            var params = "&ip=" + getIp() + "&iploc=" + getIpLoc() + "&suid=" + getCookieVal("SUID") + "&yyid=" + getCookieVal("YYID");
            params += "&pid=" + getPid() + "&policyno=" + getPolicyno() + "&mfp=" + getUrlParamVal("mfp") + "&hs=" + getProtocol() + "&mp=" + isFromIndexPage();
            return params
        }

        function needData(query) {
            if (!input_time) { input_time = new Date().getTime() }
            if (cache[query] && typeof cache[query] != "function") { handleData(cache[query]) } else {
                var EEE;
                try { d.body.removeChild(ajaj) } catch (EEE) {}
                suguuid = generateUUID();
                sugUigsPos["suguuid"] = suguuid;
                ajaj = d.createElement("script");
                ajaj.charset = "gb2312";
                ajaj.src = suggUri + "?key=" + encodeURIComponent(query) + "&type=" + sugType + "&ori=yes&pr=" + productId + "&abtestid=" + abtestid + "&ipn=" + ipn + "&t=" + input_time + "&suguuid=" + suguuid + generateUrlParams() + "&prereq_a=" + newHisQuery + "&sugsuv=" + suv + "&sugtime=" + new Date().getTime();
                d.body.appendChild(ajaj);
                sugUigsPos["qingqiu"] = 1
            }
        }
        if (typeof window.sogou != "object" || window.sogou == null) { window.sogou = {} }
        if (typeof window.sogou.sug != "undefined") { oldfunc = window.sogou.sug }
        window.sogou.sug = function(result_array) {
            try { oldfunc(result_array) } catch (E) {}
            badSuggMap = {};
            if (result_array[0] != getQuery()) {
                hideDiv();
                template.tongji.suggDivReqCount++;
                // pingback("input_fast_drop", suguuid);
                suguuid = null;
                return
            }
            if (result_array.length > 1 && result_array[1].length > 0) {
                result_array.push(suguuid);
                suguuid = null;
                cache[result_array[0]] = result_array
            } else {
                sugUigsPos["noresult"] = 1;
                uigsSend("pv", jQuery.extend({}, sugUigs, sugUigsPos));
                ResetSuggUigs()
            }
            if (typeof result_array[6] == "string") { suglabId = result_array[6] }
            handleData(result_array)
        };



        if (typeof window.sogou.site != "undefined") { oldfunc2 = window.sogou.site }
        window.sogou.site = function(result_array) {
            console.info('result_array:', result_array);
            clearTimeout(setTimer1);
            clearTimeout(setTimer2);
            clearTimeout(setTimer3);
            try { oldfunc2(result_array) } catch (E) {}
            if (result_array) {
                if (result_array.doc_num != 0) {
                    handleFlag = handleRetry;
                    sitecache[decodeURIComponent(result_array.query)] = result_array;
                    if (result_array.vrtype == "ad") { result_array.type = "ad" + result_array.type }
                    handleSiteData(result_array)
                } else {
                    var cur_query = null;
                    for (var i = 0; i < suggLis.length; i++) { if (hoverClassReg.test(suggLis[i].className)) { cur_query = jsonData[i] } }
                    if (handleFlag > 0 && cur_query == decodeURIComponent(result_array.query)) {
                        handleFlag--;
                        handleSiteData(result_array, handleFlag)
                    }
                }
            }
        };

        function escapeForSpecialChars(input) { if (input != null) { return input.replace(/&/g, "&amp;").replace(/ /g, "&nbsp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") } else { return "" } }

        function bold(data, input) { var ret = data; if (data.indexOf(input) == 0) { ret = input + "<b>" + data.substr(input.length) + "</b>" } return ret }

        function unbold(data) { return data.replace("<b>", "").replace("</b>", "") }

        function handleData(results) {
            if (firstRun) { return }
            if (!getQuery()) { return }
            userInputString = results[0] || userInputString;
            var showHistoryLen, hisStartIndex;
            if (winLocalStorage && window.JSON) {
                var oqArr = getLocalStorageOq(results[0]);
                try { showHistoryLen = oqArr.length } catch (E) {}
                results = JSON.parse(JSON.stringify(results));
                if (showVr) { insertTopAd(results) }
                hisStartIndex = reorganizeResults(results, oqArr)
            }
            console.info('handleData: ',results);
            // results = [query, Array for word completion, ]
            jsonData = results[1];
            if (results.length > 2) {
                jsonDataTongji = results[2];
                if (getParam("sugdbg", "off") == "on") { jsonDataTongji[0] = "0;0;1;0" }
                jsonDataTongji0 = [];
                jsonDataTongji1 = [];
                jsonDataTongji2 = [];
                goTongjiId = [];
                for (var k = 0; k < jsonDataTongji.length; ++k) {
                    var tempTongji = jsonDataTongji[k].split(";");
                    console.info(tempTongji);
                    tempTongji[2] = '1'; // FIXME
                    vrFlag[results[1][k]] = { "type": tempTongji[2], "tupu_key": results[3][k] };
                    sugData[results[1][k]] = { "arr2": results[2][k], "arr3": results[3][k] };
                    if (tempTongji != null && tempTongji.length >= 3) {
                        jsonDataTongji0.push(tempTongji[0]);
                        jsonDataTongji1.push(tempTongji[1]);
                        jsonDataTongji2.push(tempTongji[2])
                    } else {
                        jsonDataTongji0.push(-1);
                        jsonDataTongji1.push(0);
                        jsonDataTongji2.push("1");//FIXME:
                    }
                    goTongjiId.push(0)
                }
            }
            if (results.length > 3) { hasPersonal1 = results[3][0] }
            clearHighlight();
            highlight_li = -1;
            positionDiv();
            var show = isShowing();
            var suggList = suggDiv.getElementsByTagName("ul")[0],
                tmpLi;
            while (suggList.childNodes.length > 0) { suggList.removeChild(suggList.childNodes[0]) }
            suggLis = [];
            suggOText = [];
            var sugListUigs = "&act=show_rows";
            var hisLen = 0,
                hisSplShow = false,
                hisSplStar = 0,
                hisSplEnd = 0,
                resultShow = false,
                resultStar = 0,
                resultEnd = 0,
                type = "common",
                thisHtml = "";
            for (var i = 0; i < jsonData.length && i < 10; i++) {
                var X = i + 1;
                sugListUigs += "&row" + i + "=" + jsonData[i];
                tmpLi = d.createElement("li");
                var isHis = false;
                if (showHistoryLen && i >= hisStartIndex && i < (showHistoryLen + hisStartIndex)) {
                    tmpLi.style.color = "rgb(122, 119, 200)";
                    tmpLi.setAttribute("history", "1");
                    tmpLi.setAttribute("origin_sugg_query", encodeURIComponent(jsonData[i]));
                    isHis = true;
                    type = "result_his";
                    hisLen++
                }
                tmpLi.onmouseover = mouseOver;
                tmpLi.onmouseout = mouseOut;
                tmpLi.onmousedown = mouseDown;
                tmpLi.onclick = mouseClick;
                tmpLi.setAttribute("lid", i);
                if (cache[userInputString] && cache[userInputString][7]) { suguuid = cache[userInputString][7] }
                if (i == 0 && results[2] && (jsonDataTongji2[0] == "9" || jsonDataTongji2[0] == "10") && results[5] && showVr) {
                    sugListUigs += "&has_top_ad=yes";
                    var guanwangIcon = "/images/icon-offb.gif";
                    if (results[5].icon) { guanwangIcon = template.getSuggCdnImgLink(results[5].icon) }
                    tmpLi.innerHTML += '<img height="16px" src="' + guanwangIcon + '"><b>' + results[5].title + "</b><em>" + results[5].show_url + '</em><span id="top_ad_tip" class="tg-txt">广告</span>';
                    tmpLi.className = "sugad-off js-top-line-sugg";
                    tmpLi.id = "top_li";
                    tmpLi.setAttribute("data-href", results[5].jump_url);
                    type = "result_ad";
                    thisHtml = results[5].title;
                    sugUigsPos["result_ad"] = X
                } else {
                    if (i == 0 && results[2] && jsonDataTongji2[0] == "11" && results[5] && showVr) {
                        var suggWebSiteHtml = results[5].title + '<span class="web-adr">' + results[5].show_url + '</span><img class="im-r" height="16px" src="/images/icon-offb.gif">';
                        if (results[5].icon) { suggWebSiteHtml = '<img height="16px" src="' + template.getSuggCdnImgLink(results[5].icon) + '">' + suggWebSiteHtml }
                        tmpLi.innerHTML += suggWebSiteHtml;
                        tmpLi.className = "sug-loc js-top-line-sugg";
                        tmpLi.id = "top_li";
                        tmpLi.setAttribute("data-href", results[5].jump_url);
                        type = "result_url";
                        thisHtml = results[5].title;
                        sugUigsPos["result_url"] = X
                    } else {
                        tmpLi.innerHTML = bold(escapeForSpecialChars(jsonData[i]), escapeForSpecialChars(userInputString));
                        thisHtml = jsonData[i];
                        if (!isHis) { template.tongji.totalCommonSugCount++ }
                        if (jsonDataTongji1[i] == 20) {
                            if (!hisSplShow) {
                                hisSplStar = X;
                                hisSplShow = true
                            }
                            hisSplEnd = X;
                            type = "hisspecil"
                        } else {
                            if (!resultShow && X > hisLen) {
                                resultStar = X;
                                resultShow = true
                            }
                            resultEnd = X;
                            if (X > hisLen) { type = "result" }
                        }
                    }
                }
                tmpLi.setAttribute("type", type);
                if (i == 0 && jsonDataTongji2[0] == "3") { tmpLi.innerHTML = '<strong style="color:red">您是否要找：</strong>' + "<strong>" + tmpLi.innerHTML + "</strong>" }
                if (vrFlag[jsonData[i]] && (vrFlag[jsonData[i]].type == 1 || vrFlag[jsonData[i]].type == 2 || vrFlag[jsonData[i]].type == 8 || vrFlag[jsonData[i]].type == 10) && showVr) {
                    tmpLi.innerHTML += "<span></span>";
                    template.tongji.sugVrWordCount++
                }
                suggLis.push(tmpLi);
                suggOText.push(tmpLi.innerHTML);
                suggList.appendChild(tmpLi);
                sugTemplate.prototype.cutTitle(tmpLi, tmpLi.innerHTML);
                sugUigsQuery[type + X] = thisHtml
            }
            sugUigsPos["result_his"] = hisLen;
            sugUigsPos["hisspecil_star"] = hisSplStar;
            sugUigsPos["hisspecil_end"] = hisSplEnd;
            sugUigsPos["result_star"] = resultStar;
            sugUigsPos["result_end"] = resultEnd;
            hideDiv();
            if ((jsonData.length > 0 || newPara) && on && suggLis.length > 0) {
                addClass(suggLis[0], "first");
                positionDiv();
                showDiv(show);
                suggShowTime = 0;
                template.tongji.suggDivShowCount++;
                if (showHistoryLen && showHistoryLen > 0) {
                    template.tongji.suggHisShowCount++;
                    template.tongji.totalHistorySugCount += showHistoryLen
                }
                template.tongji.totalSugCount += jsonData.length;

                handleFlag = handleRetry;
                selectItem(0)
            }
            template.tongji.suggDivReqCount++;
            suggTopWords = false;
            if (jsonData.length == 0 || !on) { hideDiv() }
        }

        function getParam(name, defaultValue) {
            var href = location.href,
                pos = href.indexOf("?");
            if (pos != -1) {
                var queryString = href.substring(pos + 1),
                    params = queryString.split("&"),
                    len = params.length,
                    index = 0;
                for (; index < len; index++) {
                    var oneParam = params[index],
                        kv = oneParam.split("=");
                    if (kv.length < 2) { continue }
                    var key = kv[0],
                        value = kv[1];
                    if (key != name) { continue }
                    return value
                }
                if (index == len) { return defaultValue }
            } else { return defaultValue }
        }

        function stopEvent(evt) {
            if (evt.preventDefault) { evt.preventDefault() }
            evt.cancelBubble = true;
            return evt.returnValue = false
        }
        var useKey = false,
            submitby = "default";

        function keydown(evt) {
            evt = evt || window.event;
            if (firstRun) {
                if (evt.keyCode == 27) { return }
                start()
            }
            if (!input_time) { input_time = new Date().getTime() }
            if (evt.keyCode == 27) {
                if (isShowing()) {
                    hideDiv();
                    noneed_query = input_elem.value;
                    setTimeout(function() { noneed_query = input_elem.value }, 1)
                }
            } else {
                if (evt.keyCode == 13) {
                    hideDiv();
                    submitby = "enter";
                    try { if (input_form.enter) { input_form.enter.value = "1" } } catch (e) {}
                    input_form.onsubmit && input_form.onsubmit() == false || timeoutSubmit();
                    return stopEvent(evt)
                } else {
                    if (isShowing()) {
                        if (evt.keyCode == 38) {
                            useKey = true;
                            upKey(evt);
                            return stopEvent(evt)
                        } else {
                            if (evt.keyCode == 9 || evt.keyCode == 40) {
                                useKey = true;
                                downKey(evt);
                                return stopEvent(evt)
                            }
                        }
                    } else {
                        if ((evt.keyCode == 38) || (evt.keyCode == 40)) {
                            useKey = true;
                            getQuery() && needData(getQuery())
                        }
                    }
                }
            }
        }

        function timeoutSubmit() {
            setTimeout(function() {
                sugUigsPos["submit"] = 1;
                sugUigsPos["querylength"] = getQuery().length;
                // uigsSend("cl", jQuery.extend({}, sugUigs, sugUigsPos));
                ResetSuggUigs();
                input_form.submit()
            }, 100)
        }

        function trimStr(x) { return x.replace(/^\s+|\s+$/gm, "") }

        function downKey(evt) {
            if (!suggDiv.onmousemove) { suggDiv.onmousemove = mouseMove }
            isKeyTime = true;
            clearTimeout(setTimer3);
            if (needRemoveHistoryCloseIcon(suggLis[highlight_li], evt)) { removeHistoryCloseIcon(suggLis[highlight_li]) }
            highlight_li++;
            if (highlight_li == Math.min(jsonData.length, 10)) { highlight_li = -1 }
            highlight(evt)
        }

        function upKey(evt) {
            if (!suggDiv.onmousemove) { suggDiv.onmousemove = mouseMove }
            isKeyTime = true;
            clearTimeout(setTimer3);
            clearHighlight();
            if (needRemoveHistoryCloseIcon(suggLis[highlight_li], evt)) { removeHistoryCloseIcon(suggLis[highlight_li]) }
            highlight_li--;
            if (highlight_li == -2) { highlight_li = Math.min(jsonData.length, 10) - 1 }
            highlight(evt)
        }

        function highlight(evt) {
            clearHighlight();
            if (highlight_li >= 0) {
                addClass(suggLis[highlight_li], "over");
                input_elem.value = unbold(jsonData[highlight_li]);
                handleFlag = handleRetry;
                selectItem(highlight_li);
                if (needAddHistoryCloseIcon(suggLis[highlight_li], evt)) { addHistoryCloseIcon(suggLis[highlight_li]) }
            } else { input_elem.value = userInputString }
            suggestWordId = highlight_li;
            noneed_query = input_elem.value
        }

        function listHighlight() { clearHighlight(); if (highlight_li >= 0) { addClass(suggLis[highlight_li], "over") } }

        function clearHighlight() { for (var i = 0; i < suggLis.length; i++) { removeClass(suggLis[i], "over") } }

        function mouseMove() {
            suggDiv.onmousemove = null;
            isKeyTime = false;
            clearTimeout(hideTimer);
            hideTimer = setTimeout(function() {
                var li = null;
                if (mouseTime_li >= 0 && (li = suggLis[mouseTime_li])) {
                    clearHighlight();
                    addClass(li, "over");
                    highlight_li = mouseTime_li;
                    handleFlag = handleRetry;
                    selectItem(highlight_li)
                }
                mouseTime_li = -1
            }, 50)
        }

        function mouseOut(evt) {
            evt = evt || window.event;
            if (needRemoveHistoryCloseIcon(this, evt)) { removeHistoryCloseIcon(this) }
            clearTimeout(hideTimer)
        }

        function mouseOver(evt) {
            evt = evt || window.event;
            mouseTime_li = parseInt(this.getAttribute("lid"));
            if (isKeyTime) { return }
            clearHighlight();
            addClass(this, "over");
            clearTimeout(setTimer3);
            clearTimeout(hideTimer);
            var needAddHisCloseIcon = needAddHistoryCloseIcon(this, evt);
            var that = this;
            hideTimer = setTimeout(function() {
                clearHighlight();
                addClass(that, "over");
                highlight_li = parseInt(that.getAttribute("lid"));
                handleFlag = handleRetry;
                selectItem(highlight_li);
                if (needAddHisCloseIcon) { addHistoryCloseIcon(that) }
            }, 100)
        }

        function mouseDown(event) {
            if (event && event.stopPropagation) { event.stopPropagation() }
            mousedown_ontr = 1;
            return false
        }

        function mouseClick() {
            suggestWordId = parseInt(this.getAttribute("lid"));
            input_elem.value = jsonData[suggestWordId];
            noneed_query = input_elem.value;
            hideDiv();
            submitby = "mouse";
            if (this.getAttribute("history") == "1") { template.tongji.sugHisClk = 1 }
            sugUigsPos["clktype"] = this.getAttribute("type");
            sugUigsPos["clkpos"] = suggestWordId + 1;
            sugUigsPos["clkquery"] = this.innerText;
            if (sugUigsPos["clktype"] == "result_url") {
                // uigsSend("cl", jQuery.extend({}, sugUigs, sugUigsPos));
                ResetSuggUigs()
            }
            input_form.onsubmit && input_form.onsubmit() == false || timeoutSubmit()
        }

        function needAddHistoryCloseIcon(src, evt) { var e = evt.relatedTarget || evt.fromElement; if (!e || e.parentNode == src || e == src) { var aEs = src.getElementsByTagName("a"); if (evt.keyCode != 9 && evt.keyCode != 38 && evt.keyCode != 40 && aEs.length == 1) { return false } } return true }

        function addHistoryCloseIcon(src) {
            if (!winLocalStorage) { return }
            if (!src) { return }
            var isHistory = src.getAttribute("history");
            if (isHistory) {
                var aE = d.createElement("a");
                aE.href = "javascript:void(0);";
                aE.onclick = function(e) {
                    e = e || window.event;
                    stopEvent(e);
                    var oq = decodeURIComponent(src.getAttribute("origin_sugg_query"));
                    removeLocalStoragePy(oq);
                    if (src.parentNode.childNodes.length > 1) { src.parentNode.removeChild(src) } else {
                        var x = src.parentNode.parentNode.parentNode;
                        x.parentNode.removeChild(x)
                    }
                    if (getSuggCookie("ppinf") && typeof(userSec) != "undefined" && userSec && !isIE7) { getData("/sugg/history?queryPlatform=sugg&queryFrom=web&sec=" + userSec + "&op=delete&query=" + encodeURIComponent(oq) + "&tags=all::SEARCH_HISTORY::::::::&t=" + Math.random(), false, false, true) }
                    if (getElesByClass("suglist", suggDiv)[0].getElementsByTagName("li").length <= 3) { getElesByClass("sug-history", suggDiv)[0].style.display = "none" }
                    // pingback("del_his_item");
                    sugUigsPos["clktype"] = "history_clearonce";
                    sugUigsPos["clkpos"] = this.parentNode.getAttribute("lid");
                    sugUigsPos["clkquery"] = this.parentNode.innerText;
                    uigsSend("cl", jQuery.extend({}, sugUigs, sugUigsPos));
                    ResetSuggUigs()
                };
                aE.setAttribute("class", "close");
                src.appendChild(aE)
            }
        }

        function needRemoveHistoryCloseIcon(src, evt) { var e = evt.relatedTarget || evt.toElement; if (!e || e.parentNode == src || e == src) { if (evt.keyCode != 9 && evt.keyCode != 38 && evt.keyCode != 40) { return false } } return true }

        function removeHistoryCloseIcon(src) { if (!winLocalStorage) { return } if (!src) { return } var isHistory = src.getAttribute("history"); if (isHistory) { var aEs = src.getElementsByTagName("a"); if (aEs && aEs[0]) { src.removeChild(aEs[0]) } } }

        function isShowing() { return (suggDiv && (suggDiv.style.display == "block")) }

        function showDiv(showOrNot, pvSwitch) {
            if (!showOrNot) { }
            tophint.style.display = "none";
            suggDiv.style.display = "block";
            if (suggIfm) { suggIfm.style.display = "block" }
            try {
                if (!useParent) {
                    input_elem.offsetParent.appendChild(suggDiv);
                    input_elem.offsetParent.appendChild(suggIfm)
                } else {
                    input_elem.parentNode.offsetParent.appendChild(suggDiv);
                    input_elem.parentNode.offsetParent.appendChild(suggIfm)
                }
            } catch (e) {}
            sugUigsPos["show"] = 1;
            // uigsSend("pv", jQuery.extend({}, sugUigs, sugUigsPos));
            // uigsSend("pv", jQuery.extend({}, sugUigs, sugUigsQuery));
            ResetSuggUigs();
            if (!pvSwitch) { prevQuery = curr_query }
        }

        function selectItem(lino) {
            clearTimeout(timeOutTimer);
            clearTimeout(loadingTimer);
            if (!showVr) { return }
            setThroughResult(false);
            var isIe6 = navigator.userAgent.indexOf("MSIE 6") != -1 && !window.opera,
                topAdTip = document.getElementById("top_ad_tip"),
                topLi = document.getElementById("top_li");
            if (!vrFlag[jsonData[lino]] || vrFlag[jsonData[lino]].type == 0 || vrFlag[jsonData[lino]].type == 9 || (vrFlag[jsonData[lino]].type == 10 && lino == 0)) {
                if (topLi) {
                    if (isIe6) { suggLis[0].style.width = null }
                    if (topAdTip) { topAdTip.style.display = "" }
                    suggOText[0] = topLi.innerHTML
                }
                if (contentDiv.style.display != "none") {
                    contentDiv.style.display = "none";
                    suggDiv.className = "suggestion nobg";
                    template.cutAllTitle(suggLis, suggOText)
                }
            } else {
                if (vrFlag[jsonData[lino]].type == 1 || vrFlag[jsonData[lino]].type == 2 || vrFlag[jsonData[lino]].type == 8 || vrFlag[jsonData[lino]].type == 10) {
                    if (topLi) {
                        if (isIe6) { suggLis[0].style.width = "202px" }
                        if (topAdTip) { topAdTip.style.display = "none" }
                        suggOText[0] = topLi.innerHTML
                    }
                    getSiteData(jsonData[lino], lino)
                }
            }
        }

        function hideDiv() {
            suggDiv.style.display = "none";
            if (suggIfm) { suggIfm.style.display = "none" }
            try {
                if (!useParent) {
                    input_elem.offsetParent.removeChild(suggDiv);
                    input_elem.offsetParent.removeChild(suggIfm)
                } else {
                    input_elem.parentNode.offsetParent.removeChild(suggDiv);
                    input_elem.parentNode.offsetParent.removeChild(suggIfm)
                }
            } catch (e) {}
            suggShowTime = 0
        }

        function initStyle() {
            var fileref = $c("link"),
                cssname = "suggestion.min";
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", server_url + "static/sug/css/" + cssname + ".v.3.css");

            d.getElementsByTagName("head")[0].appendChild(fileref)
        }

        function computePersonal() {
            var num = 0;
            if (jsonDataTongji1 == null || jsonDataTongji1.length < 1) { return 0 }
            for (var i = 0; i < jsonDataTongji1.length; ++i) {
                var tongji = parseInt(jsonDataTongji1[i]);
                num += tongji
            }
            return num
        }

        function start() {
            if (!firstRun) { return }
            firstRun = 0;
            noneed_query = input_elem.value;
            normalRid = normalRid || ((input_form.w && input_form.w.value) ? input_form.w.value : normalRid);

            function getParam(name, defaultValue) {
                var href = location.href,
                    pos = href.indexOf("?");
                if (pos != -1) {
                    var queryString = href.substring(pos + 1),
                        params = queryString.split("&"),
                        len = params.length,
                        index = 0;
                    for (; index < len; index++) {
                        var oneParam = params[index],
                            kv = oneParam.split("=");
                        if (kv.length < 2) { continue }
                        var key = kv[0],
                            value = kv[1];
                        if (key != name) { continue }
                        return value
                    }
                    if (index == len) { return defaultValue }
                } else { return defaultValue }
            }

            function clkBtnFormSubmit(e) {
                e = e || window.event;
                if (e && e.type == "submit") {
                    setTimeout(function() {
                        sugUigsPos["submit"] = 1;
                        sugUigsPos["clktype"] = "submitbtn";
                        sugUigsPos["querylength"] = getQuery().length;
                        // uigsSend("cl", jQuery.extend({}, sugUigs, sugUigsPos));
                        ResetSuggUigs();
                        input_form.onsubmit() == false || input_form.submit()
                    }, 100);
                    return false
                }
                return true
            }
            input_form.onsubmit = clkBtnFormSubmit;
            var old_submit = input_form.onsubmit || function() {};

            function form_submit(a, b, c) {
                if ((typeof old_submit) == "function") { if (old_submit(a, b, c) == false) { return false } }
                increaseSct();
                hasPersonal = computePersonal();
                var query_inputs = { "w": normalRid };
                var goSuggAttr;
                if (cache[userInputString] && cache[userInputString][7]) { suguuid = cache[userInputString][7] }
                if (suggestWordId != -1) {
                    query_inputs = { "w": suggestRid, "oq": userInputString, "ri": suggestWordId, "sourceid": "sugg", "suguuid": suguuid };
                    if (jsonDataTongji.length > 0) {
                        goSuggAttr = jsonDataTongji[suggestWordId];
                        if (goSuggAttr && goSuggAttr.indexOf("8") == 4) { jsonDataTongji[suggestWordId] = goSuggAttr.substring(0, 4) + "0" + goSuggAttr.substring(5) }
                        query_inputs = { "w": suggestRid, "oq": userInputString, "ri": suggestWordId, "sourceid": "sugg", "suguuid": suguuid, "stj": jsonDataTongji[suggestWordId], "stj2": goTongjiId[suggestWordId], "stj0": jsonDataTongji0[suggestWordId], "stj1": jsonDataTongji1[suggestWordId], "hp": hasPersonal, "hp1": hasPersonal1 };
                        if (suglabId) { query_inputs["suglabid"] = suglabId }
                    }
                }
                query_inputs.sut = (input_time ? (new Date().getTime() - input_time) : 0);
                query_inputs.sst0 = new Date().getTime();
                query_inputs.lkt = keypressNum_lead + "," + time1_lead + "," + time2_lead;
                query_inputs.sugsuv = suv;
                query_inputs.sugtime = new Date().getTime();
                if (showtop) { query_inputs.p = normalRid == "01019900" ? "40040108" : "40240100"; if (invokeSuggLocation == "index" && suggTopWords) { query_inputs.pid = "sogou-wsse-af5baf594e9197b4-0001" } }
                var isFromIndex = (location.href.indexOf("query=") > 0) ? false : (bigsize ? false : true);
                if (isFromIndex) { var pid = getParam("pid", ""); if (pid.length > 0) { query_inputs.pid = pid } }
                var form_inputs = input_form.getElementsByTagName("input"),
                    i, tmp_input;
                for (var inputName in query_inputs) {
                    for (i = 0; i < form_inputs.length; i++) { if (form_inputs[i].getAttribute("name") == inputName) { form_inputs[i].value = query_inputs[inputName]; break } }
                    if (i == form_inputs.length) {
                        tmp_input = d.createElement("input");
                        tmp_input.type = "hidden";
                        tmp_input.name = inputName;
                        tmp_input.value = query_inputs[inputName];
                        input_form.appendChild(tmp_input)
                    }
                }
                if (winLocalStorage && window.JSON) { var oq = trimStr(getQuery()); if (oq && oq.length < 40) { var py = getLocalStoragePinyin(oq); if (py) { localStoragePinyin(oq, py) } else { httpRequestPinyin(oq) } } }
                if (goSuggAttr && (goSuggAttr.indexOf("9") == 4 || goSuggAttr.indexOf("10") == 4)) {
                    if (cache[userInputString] && cache[userInputString][5]) {
                        newTab(cache[userInputString][5].jump_url);
                         suggestWordId = -1
                    }
                    return false
                }
                if (goSuggAttr && goSuggAttr.indexOf("11") == 4) {
                    if (cache[userInputString] && cache[userInputString][5]) {
                        newTab(cache[userInputString][5].jump_url);
                         suggestWordId = -1
                    }
                    return false
                }
                // pingback("sb");
                return true
            }
            input_form.onsubmit = form_submit;

            function newTab(url) {
                if (!url) { return }
                var win = window.open(url, "_blank");
                win.focus()
            }

            function createDiv() {
                if (isIe) {
                    var tmp = input_elem.offsetParent;
                    while (tmp) {
                        if (!(parseInt(tmp.currentStyle["zIndex"]))) { tmp.style.zIndex = "2000" }
                        tmp = tmp.offsetParent
                    }
                }
                suggDiv = $c("div", null, "suggestion nobg");
                suggDiv.id = "vl";
                var tmpLi, innerDiv = $c("div", suggDiv, "suginner"),
                    tt = $c("p", innerDiv, "s_title"),
                    suggList = $c("ul", innerDiv, "suglist"),
                    historyDiv = $c("div", suggDiv, "sug-history");
                tophint = tt;
                tophint.innerHTML = "Hot Words";
                tophint.style.display = "none";
                tophint.style.margin = "0";
                suggLis = [];
                for (var i = 0; i < 10; i++) {
                    tmpLi = d.createElement("li");
                    tmpLi.onmouseover = mouseOver;
                    tmpLi.onmouseout = mouseOut;
                    tmpLi.onmousedown = mouseDown;
                    tmpLi.onclick = mouseClick;
                    tmpLi.setAttribute("lid", i);
                    suggLis.push(tmpLi);
                    suggList.appendChild(tmpLi)
                }
                contentDiv = $c("div", innerDiv, "sugc");
                contentDiv.id = "sugc";
                contentDiv.onmouseover = function() { mouseTime_li = -1 };
                contentDiv.style.display = "none";
                suggList.onmouseout = listHighlight;
                historyDiv.style.display = "none";
                if (window.suggestionPersonalCenterSwitch == "on") { historyDiv.innerHTML = '<a href="javascript:void(0)" id="clear-history">清空历史</a><span>|</span><a href="/ihome/history" id="more-history" target="_blank">查看更多</a>' } else { historyDiv.innerHTML = '<a href="javascript:void(0)" id="clear-history">清空历史</a>' }
            }
            createDiv();
            bind(d, "click", function(evt) {
                evt = evt || window.event;
                var ele = evt.srcElement || evt.target;
                while (ele) {
                    if (ele == contentDiv || ele == input_elem) { return }
                    ele = ele.parentNode
                }
                hideDiv()
            });
            bind(input_elem, "beforedeactivate", function() {
                if (mousedown_ontr) {
                    window.event.cancelBubble = true;
                    window.event.returnValue = false;
                    mousedown_ontr = 0
                }
            });
            checkQuery2()
        }

        function getCookie() { var dc = d.cookie; var prefix = "sct="; var begin = dc.indexOf("; " + prefix); if (begin == -1) { begin = dc.indexOf(prefix); if (begin != 0) { return null } } else { begin += 2 } var end = dc.indexOf(";", begin); if (end == -1) { end = dc.length } return dc.substring(begin + prefix.length, end) }

        function increaseSct() {
            var sct = parseInt(getCookie() || 0) || 0;
            document.cookie = "sct=" + (sct + 1) + "; expires=Thu, 21-Jul-2020 00:00:00 GMT; path=/"
        }
        var oldclick = d.onclick || function() {};
        d.onclick = function(evt) {
            var ret = oldclick(evt);
            page_click(evt);
            return ret
        };

        function page_click(evt) {
            if ((evt && (evt.button != 0)) || ((!evt) && (window.event.button != 0))) { return }
            evt = evt || window.event;
            var srcElem = ((evt.target) ? evt.target : evt.srcElement),
                h;
            while (srcElem && srcElem.tagName) {
                if (srcElem.tagName.toUpperCase() == "A") { h = srcElem.href || ""; if (h.indexOf("query=") > 0) { increaseSct() } return }
                srcElem = srcElem.parentNode
            }
        }

        function setThroughResult(isLoading) {
            var suggList = getElesByClass("suglist", suggDiv)[0],
                span = suggList.getElementsByTagName("span"),
                curItem = getElesByClass("over", suggList)[0] || suggList.getElementsByTagName("li")[0],
                curSpan = curItem.getElementsByTagName("span")[0],
                i = 0,
                spanLength = span.length;
            if (curItem.className.indexOf("js-top-line-sugg") > -1) { return }
            for (; i < spanLength; i++) { if (span[i].className === "sugg-loading") { span[i].className = "" } }
            if (!curSpan) { return }
            if (isLoading) { curSpan.className = "sugg-loading" } else { curSpan.className = "" }
            return curSpan
        }

        function getSiteData(txt, pos, cnt) {
            console.info(txt);
            txt = unbold(txt || "");
            cnt = cnt || 0;
            if (!txt || badSuggMap[pos]) { return }
            var isCache = sitecache[txt];
            clearTimeout(loadingTimer);
            clearTimeout(timeOutTimer);
            loadingTimer = setTimeout(function() {
                clearTimeout(loadingTimer);
                setThroughResult(true)
            }, 100);
            timeOutTimer = setTimeout(function() {
                clearTimeout(timeOutTimer);
                var span = setThroughResult(false);
                if (span) { span.parentNode.removeChild(span) }
                suggOText[pos] = suggOText[pos].replace("<span></span>", "")
            }, 3000);
            if (contentDiv) { contentDiv.className = "sugc"; if (cnt == 0) { contentDiv.innerHTML = "" } }
            if (isCache) { handleSiteData(sitecache[txt]) } else {
                var type = vrFlag[txt].type == 2 ? 1 : 0;
                txt = encodeURIComponent(txt);
                try { d.body.removeChild(ajaj2) } catch (EEE) {}
                ajaj2 = d.createElement("script");
                if (vrFlag && vrFlag[jsonData[pos]] && (vrFlag[jsonData[pos]].type == "8" || vrFlag[jsonData[pos]].type == "10")) {
                    console.info('come here adsugg');
                    var querySug = [{ "qk": decodeURIComponent(txt), "pos": pos }];
                    querySug = encodeURIComponent(JSON.stringify(querySug));
                    var suguuid = null;
                    if (cache[userInputString] && cache[userInputString][7]) { suguuid = cache[userInputString][7] }
                    ajaj2.charset = "utf-8";
                     ajaj2.src = "/suggnew/adsugg?query=" + querySug + generateUrlParams() + "&type=2&cb=window.sogou.site&suguuid=" + suguuid + "&abtest=" + abtestid
                } else {
                    var iploc = null;
                    if (document.cookie.length > 0 && document.cookie.indexOf("IPLOC=") >= 0) {
                        var c_start = document.cookie.indexOf("IPLOC=") + 6,
                            c_end = document.cookie.indexOf(";", c_start) == -1 ? document.cookie.length : document.cookie.indexOf(";", c_start);
                        iploc = document.cookie.substring(c_start, c_end)
                    }
                    if (!/CN[0-9]{4,6}/.exec(iploc)) { iploc = "CN110000" }
                    while (iploc.length < 6) { iploc += "0" }
                    ajaj2.charset = "gb2312";
                    var zhidaUrl = "/suggnew/gosugg";
                    if (getParam("sugdbg", "off") == "on" && getParam("zhidaHost", "") && getParam("zhidaPort", "")) { zhidaUrl = "http://" + getParam("zhidaHost", "") + ":" + getParam("zhidaPort", "") + "/" }
                    ajaj2.src = [zhidaUrl, "?",'qt=', (new Date().getTime()), "&rid=", (txt.toLowerCase().charCodeAt(txt.length - 1) % 6), "&IPLOC=", iploc, "&type=", type, "&query=",txt].join("")
                }
                d.body.appendChild(ajaj2)
            }
        }

        function httpRequestPinyin(oq) {
            ajajPinyin = d.createElement("script");
            ajajPinyin.charset = "gb2312";
            ajajPinyin.src = "/suggnew/word_completion/?type=getpinyin&key=" + encodeURIComponent(oq);
            d.body.appendChild(ajajPinyin)
        }

        function sleep(milliSeconds) { var start = +new Date(); while (true) { if ((+new Date()) - start > milliSeconds) { break } } }
        window.sogou.sugpy = function(result_array) {
            var key = result_array[0];
            key = key.replace(/^\s+|\s+$/g, "");
            if (/^\?+\?$/.test(key)) { return }
            var val = result_array[1][0];
            localStoragePinyin(key, val)
        };

        function getLocalStorageOq(str) { str = trimStr(str); if (!winLocalStorage) { return } if (!str || !localStorage.getItem(sogouSearchSugPinyinN)) { return false } var oqArr = []; var pinyinJsonArr = JSON.parse(localStorage.getItem(sogouSearchSugPinyinN)); for (var i = pinyinJsonArr.length - 1; i > -1; i--) { var pinyinJson = pinyinJsonArr[i]; if (pinyinJson.py.indexOf(str) == 0) { oqArr.push(pinyinJson) } else { if (pinyinJson.oq.indexOf(str) == 0) { oqArr.push(pinyinJson) } } if (oqArr.length > 1) { break } } return oqArr }

        function reorganizeResults(results, history) {
            console.info('reorganizeResults: ', results, history);
            if (!history || history.length == 0) { console.info('reorg...返回'); return results }
            var nature = results[1];
            var jdTongji = results[2];
            var psTongji = results[3];
            var hisStartIndex = jdTongji && jdTongji[0] == "0;0;9;0" || jdTongji && jdTongji[0] == "0;0;10;0" ? 1 : 0;
            var firstItemIsRightAd = jdTongji && jdTongji[0] == "0;0;8;0" ? true : false;
            for (var i = 0; i < history.length; i++) {
                var h = history[i];
                var isRepeated = false;
                var natureCopy = nature.slice(0);
                for (var j = 0; j < natureCopy.length; j++) {
                    var n = natureCopy[j];
                    if (n == h.oq) {
                        var goSuggAttr = jdTongji[j];
                        if (goSuggAttr && (goSuggAttr.indexOf("9") == 4 || goSuggAttr.indexOf("10") == 4)) { continue }
                        isRepeated = true;
                        nature.splice(j, 1);
                        nature.splice(hisStartIndex, 0, h.oq);
                        jdTongji.splice(j, 1);
                        jdTongji.splice(hisStartIndex, 0, goSuggAttr);
                        psTongji.splice(j, 1);
                        psTongji.splice(hisStartIndex, 0, h.arr3);
                        break
                    }
                }
                if (!isRepeated) {
                    nature.splice(hisStartIndex, 0, h.oq);
                    jdTongji.splice(hisStartIndex, 0, h.arr2);
                    psTongji.splice(hisStartIndex, 0, h.arr3)
                }
            }
            while (nature.length > 10) {
                nature.pop();
                jdTongji.pop();
                psTongji.pop()
            }
            var afterHandleFirstItemIsNotRightAd = false;
            if (jdTongji && jdTongji[0]) { var zhidaAttrArray = jdTongji[0].split(";"); if (zhidaAttrArray[2] && zhidaAttrArray[2] != "8") { afterHandleFirstItemIsNotRightAd = true } }
            if (firstItemIsRightAd && afterHandleFirstItemIsNotRightAd) {  }
            return hisStartIndex
        }

        function insertTopAd(results) {
            console.info('insertTopAd');
            var nature = results[1];
            var jdTongji = results[2];
            var psTongji = results[3];
            if (jdTongji && (jdTongji[0] == "0;0;9;0" || jdTongji[0] == "0;0;10;0")) {
                var num;
                nature.splice(0, 0, nature[0]);
                jdTongji.splice(0, 0, jdTongji[0]);
                psTongji.splice(0, 0, psTongji[0]);
                num = jdTongji[0] == "0;0;9;0" ? "0" + jdTongji[1].substring(5) : "10" + jdTongji[1].substring(6);
                jdTongji[1] = jdTongji[1].substring(0, 4) + num;
                var i = 0;
                while (i < jdTongji.length) {
                    jdTongji[i] = i + jdTongji[i].substring(1);
                    i++
                }
            }
        }

        function getLocalStoragePinyin(oq) { try { if (!winLocalStorage) { return } if (!oq || !localStorage.getItem(sogouSearchSugPinyinN)) { return false } var pinyinJsonArr = JSON.parse(localStorage.getItem(sogouSearchSugPinyinN)); for (var i = 0; i < pinyinJsonArr.length; i++) { var tmp = pinyinJsonArr[i]; if (tmp.oq == oq) { return tmp.py } } return false } catch (i) {} }

        function localStoragePinyin(oq, py) {
            if (!oq || !py) { return false }
            var pinyinJsonArr, pinyinJson = {};
            if (!winLocalStorage) { return }
            if (!localStorage.getItem(sogouSearchSugPinyinN)) { pinyinJsonArr = [] } else { pinyinJsonArr = JSON.parse(localStorage.getItem(sogouSearchSugPinyinN)) }
            for (var i = 0; i < pinyinJsonArr.length; i++) { var pj = pinyinJsonArr[i]; if (pj.oq == oq) { pinyinJsonArr.splice(i, 1) } }
            pinyinJson.oq = oq;
            pinyinJson.py = py;
            var sugOriginData = sugData[oq];
            pinyinJson.arr2 = sugOriginData ? sugOriginData.arr2 : "0;0;0;0";
            pinyinJson.arr3 = sugOriginData ? sugOriginData.arr3 : "";
            if (sugOriginData && sugOriginData.arr2 && (sugOriginData.arr2.indexOf("9") == 4 || sugOriginData.arr2.indexOf("8") == 4)) {
                var goSuggAttr = sugOriginData.arr2;
                pinyinJson.arr2 = goSuggAttr.substring(0, 4) + "0" + goSuggAttr.substring(5)
            }
            pinyinJsonArr.push(pinyinJson);
            while (pinyinJsonArr.length > 100) { pinyinJsonArr.shift() }
            localStorage.setItem(sogouSearchSugPinyinN, JSON.stringify(pinyinJsonArr));
            return true
        }

        function removeLocalStoragePy(oq) {
            oq = trimStr(oq);
            if (!winLocalStorage) { return }
            if (!oq || !localStorage.getItem(sogouSearchSugPinyinN)) { return false }
            var pinyinJsonArr = JSON.parse(localStorage.getItem(sogouSearchSugPinyinN));
            for (var i = 0; i < pinyinJsonArr.length; i++) { var pj = pinyinJsonArr[i]; if (pj.oq == oq) { pinyinJsonArr.splice(i, 1); break } }
            localStorage.setItem(sogouSearchSugPinyinN, JSON.stringify(pinyinJsonArr));
            return true
        }

        function removeAllLocalStoragePy() {
            if (!winLocalStorage) { return }
            if (!localStorage.getItem(sogouSearchSugPinyinN)) { return false }
            localStorage.removeItem(sogouSearchSugPinyinN)
        }

        function handleSiteData(data, _cnt) {
            var isBuildSuccess, pos = -1,
                cnt = _cnt || 0;
            if (contentDiv) {
                if (cnt == 0) { contentDiv.innerHTML = "" }
                if (cache[userInputString] && cache[userInputString][7]) { suguuid = cache[userInputString][7] }
                isBuildSuccess = template.build(contentDiv, data, jsonData, goTongjiId, vrFlag, userInputString, suguuid);
                if (isBuildSuccess) {
                    clearTimeout(timeOutTimer);
                    clearTimeout(loadingTimer);
                    setThroughResult(false);
                    suggDiv.className = "suggestion";
                    if (contentDiv.style.display == "none") {
                        contentDiv.style.display = "";
                        template.cutAllTitle(suggLis, suggOText)
                    } else { contentDiv.style.display = "" }
                } else {
                    suggDiv.className = "suggestion nobg";
                    contentDiv.style.display = "none";
                    clearTimeout(setTimer1);
                    clearTimeout(setTimer3);
                    if (data.query) {
                        for (var i = 0; i < jsonData.length; i++) {
                            if (jsonData[i] == decodeURIComponent(data.query)) {
                                pos = i;
                                if (_cnt === 0) {
                                    badSuggMap[pos] = true;
                                    var span = setThroughResult(false);
                                    if (span) { span.parentNode.removeChild(span) }
                                    suggOText[pos] = suggOText[pos].replace("<span></span>", "")
                                }
                                break
                            }
                        }
                        setTimer3 = setTimeout(function() { getSiteData(decodeURIComponent(data.query), pos, MAX_RETRY_FETCH_SITE - 1) }, 500)
                    }
                }
            }
        }
        template.getSiteData = getSiteData;
        init();
        sugTemplate.prototype.buildZhiDaLoopSection = function(context, tempCode) {
            var loopPtn = /<!--\s*LOOP\s+SET=\$\{(.*?)\}.*?-->/,
                endPtn = /<!--\s*ENDLOOP\s*-->/,
                loopMat = null,
                endMat = null;
            while (loopMat = loopPtn.exec(tempCode)) {
                var leftContent = RegExp.leftContext;
                var setCode = loopMat[1];
                endMat = endPtn.exec(tempCode);
                var rightContent = RegExp.rightContext;
                var loopCode = tempCode.substring(loopMat.index + loopMat[0].length, endMat.index);
                var loopContent = "";
                with(context) { var setVar = eval(setCode) }
                for (var i = 0; i < setVar.length; i++) {
                    var item = setVar[i];
                    context.item = item;
                    context.i = i;
                    loopContent += this.replaceZhidaTemp(loopCode, context)
                }
                tempCode = leftContent + loopContent + rightContent
            }
            return tempCode
        };
        sugTemplate.prototype.replaceZhidaTemp = function(code, context) {
            var varPtn = /\$\{(.*?)\}|\$%7B(.*?)%7D/g;
            var varMat = null;
            var head = 0,
                tail = 0;
            var k = 0;
            var content = "";
            while (varMat = varPtn.exec(code)) {
                tail = varMat.index;
                content += code.substring(head, tail);
                with(context) { content += eval((varMat[1] ? varMat[1] : varMat[2])) }
                head = tail + varMat[0].length
            }
            content += code.substring(head, code.length);
            return content
        };
        sugTemplate.prototype.buildZhiDaHtml = function(context, tempCode) { tempCode = this.buildZhiDaLoopSection(context, tempCode); return this.replaceZhidaTemp(tempCode, context) };
        sugTemplate.prototype.buildZhiDa = function(div, context, tempCode) { div.innerHTML = this.buildZhiDaHtml(context, tempCode) }
    }
    var smugg = new sogouSugg();

    function sugg_go_imgresize(obj, wsize, hsize) {
        var w = obj.width || 0;
        var h = obj.height || 0;
        var iebug = false;
        if (w == 0 || h == 0) {
            iebug = true;
            var clone = obj.cloneNode(true);
            clone.style.visibility = "hidden";
            document.body.appendChild(clone);
            w = clone.width;
            h = clone.height;
            document.body.removeChild(clone)
        }
        if (w > wsize && h > hsize) {
            if (w / h <= wsize / hsize) {
                obj.style.width = wsize + "px";
                obj.style.height = "auto"
            } else {
                obj.style.height = hsize + "px";
                obj.style.width = "auto"
            }
        }
    }
    var keypressNum_lead = 0,
        time1_lead = 0,
        time2_lead = 0;
    (function() {
        // var BROWER_NAME = "browerV";
        // var OS_NAME = "osV";
        // var lead_ua = (function() {
        //     var ua_text = window.navigator.userAgent.toLowerCase();
        //     var ua = {};
        //     if (window.opera) { ua["opera"] = true } else {
        //         if (ua_text.indexOf("msie") != -1) { ua["ie"] = true; var ie_version = /msie\s+(.)/.exec(ua_text); if (ie_version) { ua["ie" + ie_version[1]] = true } } else {
        //             if (ua_text.indexOf("webkit") != -1) {
        //                 ua["webkit"] = true;
        //                 if (ua_text.indexOf("chrome") != -1) { ua["chrome"] = true } else {
        //                     if (ua_text.indexOf("ipad") != -1) {
        //                         ua["ipad"] = true;
        //                         ua["ios"] = true
        //                     } else { if (ua_text.indexOf("safari") != -1) { ua["safari"] = true } }
        //                 }
        //             } else { if (ua_text.indexOf("gecko") != -1) { ua["gecko"] = true; if (ua_text.indexOf("firefox") != -1) { ua["firefox"] = true } } else { if (window.openDatabase) { ua["safari"] = true } } }
        //         }
        //     }
        //     if (ua_text.indexOf("se 2.x") != -1) { ua["se"] = true }
        //     if (ua_text.indexOf("360ee") != -1) { ua["s60ee"] = true } else { if (ua_text.indexOf("360se") != -1) { ua["s60se"] = true } else { if (ua_text.indexOf("aoyou") != -1 || ua_text.indexOf("maxthon") != -1) { ua["aoyou"] = true } else { if (ua_text.indexOf("theworld") != -1) { ua["world"] = true } else { if (ua_text.indexOf("worldchrome") != -1) { ua["worldchrome"] = true } else { if (ua_text.indexOf("greenbrowser") != -1) { ua["greenbrowser"] = true } else { if (ua_text.indexOf("qqbrowser") != -1) { ua["qqbrowser"] = true } else { if (ua_text.indexOf("baidu") != -1 || ua_text.indexOf("bidu") != -1) { ua["baidu"] = true } else { if (ua_text.indexOf("ucweb") != -1) { ua["ucweb"] = true } } } } } } } } }
        //     return ua
        // })();
        // var lead_os = (function() { var os_text = window.navigator.userAgent.toLowerCase(); var os = {}; if (os_text.indexOf("windows") != -1) { os["window"] = true } else { if (os_text.indexOf("mac") != -1) { os["mac"] = true } else { if (os_text.indexOf("linux") != -1) { os["linux"] = true } else { if (os_text.indexOf("x11") != -1) { os["unix"] = true } else { if (os_text.indexOf("solaris") != -1) { os["solaris"] = true } } } } } if (!!os_text.match(/AppleWebKit.*Mobile.*/) || !!os_text.match(/AppleWebKit/)) { os["mobile"] = true } else { if (os_text.indexOf("ios") != -1) { os["mobile"] = true } else { if (os_text.indexOf("ipad") != -1) { os["ipad"] = true } else { if (os_text.indexOf("android") != -1) { os["android"] = true } else { if (os_text.indexOf("iphone") != -1) { os["iphone"] = true } } } } } return os })();

        // function setBrowerAndOs() {
        //     var brower = getCookie(BROWER_NAME);
        //     var os = getCookie(OS_NAME);
        //     var brower1, os1;
        //     brower1 = getBrowerValue(lead_ua);
        //     setCookie(BROWER_NAME, brower1, 365 * 24 * 3600 * 30, "/", "");
        //     os1 = getOsValue(lead_os);
        //     setCookie(OS_NAME, os1, 365 * 24 * 3600 * 30, "/", "")
        // }

        //function getBrowerValue(bowerObj) { if (bowerObj) { if (bowerObj.s60ee) { return 6 } if (bowerObj.s60se) { return 7 } if (bowerObj.aoyou) { return 9 } if (bowerObj.world) { return 10 } if (bowerObj.worldchrome) { return 11 } if (bowerObj.greenbrowser) { return 12 } if (bowerObj.qqbrowser) { return 13 } if (bowerObj.baidu) { return 14 } if (bowerObj.se) { return 8 } if (bowerObj.opera) { return 4 } if (bowerObj.chrome) { return 3 } if (bowerObj.safari) { return 5 } if (bowerObj.ie) { return 1 } if (bowerObj.firefox) { return 2 } } return 0 }

        //function getOsValue(osObj) { if (osObj) { if (osObj.mobile) { return 6 } if (osObj.android) { return 7 } if (osObj.iphone) { return 8 } if (osObj.ipad) { return 9 } if (osObj.window) { return 1 } if (osObj.linux) { return 3 } if (osObj.solaris) { return 4 } if (osObj.unix) { return 5 } if (osObj.mac) { return 2 } } return 0 }

        function setCookie(name, value, expires, path, domain, secure) {
            var today = new Date();
            today.setTime(today.getTime());
            var expires_date = new Date(today.getTime() + (expires));
            document.cookie = name + "=" + (value) + ((expires) ? "; expires=" + expires_date.toGMTString() : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : "")
        }

        function getCookie(name) { var dc = document.cookie; var prefix = name + "="; var begin = dc.indexOf("; " + prefix); if (begin == -1) { begin = dc.indexOf(prefix); if (begin != 0) { return null } } else { begin += 2 } var end = document.cookie.indexOf(";", begin); if (end == -1) { end = dc.length } return unescape(dc.substring(begin + prefix.length, end)) }
        //setBrowerAndOs();
        var query_form_inputs = document.getElementsByTagName("input");
        for (var query_input in query_form_inputs) {
            for (i = 0; i < query_form_inputs.length; i++) {
                if (query_form_inputs[i].name == "query") {
                    query_form_inputs[i].onkeypress = function() {
                        keypressNum_lead++;
                        if (time1_lead == 0) { time1_lead = new Date().getTime() }
                        time2_lead = new Date().getTime()
                    }
                }
            }
        }
        window.sugTemplate = sugTemplate
    })()
});