// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"xui_ui_buttonviews3")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "Home",
                        "imageClass" : "xui-icon-xui"
                    },
                    {
                        "id" : "b",
                        "caption" : "Penal Code"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3"
                    },
                    {
                        "id" : "d",
                        "caption" : "page4",
                        "closeBtn" : true,
                        "optBtn" : "xui-uicmd-opt",
                        "popBtn" : true
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarSize("10.666666666666666em")
                .setValue("a")
            );
            
            host.xui_ui_buttonviews3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div19")
                .setLeft("-10.666666666666666em")
                .setTop("1.5238095238095237em")
                .setWidth("53.333333333333336em")
                .setHeight("43.50476190476191em")
                .setPosition("relative"),
                "a"
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Element")
                .setHost(host,"xui_ui_element1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("52.95238095238095em")
                .setHeight("45.180952380952384em")
                .setHtml("https://usdojrpc.bubbleapps.io/")
            );
            
            host.xui_ui_buttonviews3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1")
                .setDock("top")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("42.05714285714286em")
                .setCaption("United States Department Of Justice CAD|MDT")
                .setHAlign("left")
                .setFontColor("#FFFFFF"),
                "a"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});