(function(){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs || jade.attrs;escape=escape || jade.escape;rethrow=rethrow || jade.rethrow;merge=merge || jade.merge;var buf=[];with (locals ||{}){var interp;var __indent=[];buf.push('<!DOCTYPE html>\n<html lang="en">\n <head>\n <meta charset="utf-8">\n <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n <meta http-equiv="X-FRAME-OPTIONS" content="DENY">\n <meta name="viewport" content="width=device-width,initial-scale=1.0">\n <meta name="description" content="">\n <meta name="author" content="">\n <title ng-bind="$state.current.name">hack.g0v.tw</title>\n <link rel="stylesheet" href="/css/app.css"><!--[if lte IE 7]>\n <script src="http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js"></script><![endif]--><!--[if lte IE 8]>\n <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n <script>\n window.brunch=window.brunch ||{};\n window.brunch[\'auto-reload\'] ={\n enabled:true\n};\n </script>\n <script src="/js/vendor.js"></script>\n <script src="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>\n <script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui/0.4.0/angular-ui.min.js"></script>\n <script src="/js/app.js"></script>\n </head>\n <body ng-controller="AppCtrl" data-spy="scroll"><a href="https://github.com/g0v/hack.g0v.tw"><img style="position: absolute; top: 0; right: 0; border: 0; z-index: 9999;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png" alt="Fork me on GitHub"></a>\n <div class="wrapper">\n <div class="navbar navbar-inverse navbar-fixed-top">\n <div class="navbar-inner">\n <div class="container"><a data-toggle="collapse" data-target=".nav-collapse" class="btn btn-navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></a>\n <div id="brand" class="brand"><img src="img/g0v-icon-invert.png"></div>\n <div class="nav-collapse">\n <div ng-include="\'/partials/app/nav.html\'"></div>\n </div>\n </div>\n </div>\n </div>\n <div class="main-content">\n <div ui-view></div>\n </div>\n <div class="push"></div>\n </div>\n </body>\n</html>')}return buf.join("")}}).call(this);(function(){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs || jade.attrs;escape=escape || jade.escape;rethrow=rethrow || jade.rethrow;merge=merge || jade.merge;var buf=[];with (locals ||{}){var interp;var __indent=[];buf.push('\n<div class="about">\n <h1>This is pre-alpha!</h1>\n</div>')}return buf.join("")}}).call(this);(function(){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs || jade.attrs;escape=escape || jade.escape;rethrow=rethrow || jade.rethrow;merge=merge || jade.merge;var buf=[];with (locals ||{}){var interp;var __indent=[];buf.push('\n<div resize="resize" ng-cloak="ng-cloak" class="hackfolder">\n <div ng-class="{collapsed:collapsed}" ng-click="collapsed=!collapsed" class="index">\n <div class="hackid"><i class="icon-home"></i>&nbsp;<a ng-href="http://ethercalc.org/{{hackId}}" target="_blank" ngx-final="ngx-final" class="indexlink expanded-content">{{HackFolder.folderTitle || hackId}}</a><small><a ng-click="reload(hackId)" ngx-noclick="ngx-noclick" class="reload">&#x21BA;</a></small></div>\n <ul ui-sortable="sortableOptions" ng-model="tree">\n <li ng-repeat="doc in tree" ng-title="{{doc.title || doc.id}}" ngx-noclick="ngx-noclick" ng-class="{active:doc.id==docId}">\n <div class="entry"><span ui-if="doc.type == \'dummy\'"><span class="expanded-content">{{doc.title || doc.id}}</span></span><a ng-href="/#/{{hackId}}/{{doc.id}}" ngx-final="ngx-final" ui-if="doc.type != \'dummy\'" class="link"><img ng-src="{{doc.icon}}" title="{{doc.title || doc.id}}"/><span class="expanded-content">{{doc.title || doc.id}}</span></a><span ng-repeat="tag in doc.tags" class="label label-{{tag.class}}">{{tag.content}}</span><span ui-if="doc.children" ng-class="{collapsed:!doc.expand}" ng-click="doc.expand=!doc.expand" class="collapser">{{{"true":"&#x25B8;","false":"&#x25BE;"}[!doc.expand] }}</span></div>\n <ul ui-if="doc.children &amp;&amp; doc.expand" ui-sortable="sortableOptions" ng-model="doc.children">\n <li ng-repeat="doc in doc.children" ng-title="{{doc.title || doc.id}}" ngx-noclick="ngx-noclick" ng-class="{active:doc.id==docId}">\n <div class="entry"><span ui-if="doc.type == \'dummy\'"><span class="expanded-content">{{doc.title || doc.id}}</span></span><a ng-href="/#/{{hackId}}/{{doc.id}}" ngx-final="ngx-final" ui-if="doc.type != \'dummy\'" class="link"><img ng-src="{{doc.icon}}" title="{{doc.title || doc.id}}"/><span class="expanded-content">{{doc.title || doc.id}}</span></a><span ng-repeat="tag in doc.tags" class="label label-{{tag.class}}">{{tag.content}}</span></div>\n </li>\n </ul>\n </li>\n </ul>\n </div>\n <div ng-style="{height:height-49}" class="pad-container">\n <article ng-repeat="(key,iframe) in iframes" ng-show="docId == key" class="pad"><span ng-show="hasViewMode(iframe.doc.type) &amp;&amp; iframe.mode != \'edit\'" ng-click="activate(iframe.doc.id,true)" class="docmode">edit</span>\n <div ui-if="iframe.doc.noiframe" class="noiframe">This site does not appear to allow iframe. Open the link in new window: <br/><span class="link"><img ng-src="{{iframe.doc.icon}}" title="{{iframe.doc.title || iframe.doc.id}}"/><a ng-href="{{iframe.src}}" target="{{iframe.doc.id}}">{{iframe.src}}</a></span></div>\n <iframe ng-show="!iframe.doc.noiframe" ng-src="{{iframe.src}}" ngx-iframe="iframeCallback(iframe.doc)" class="embed"></iframe>\n </article>\n </div>\n</div>')}return buf.join("")}}).call(this);(function(){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs || jade.attrs;escape=escape || jade.escape;rethrow=rethrow || jade.rethrow;merge=merge || jade.merge;var buf=[];with (locals ||{}){var interp;var __indent=[];buf.push('\n<div class="about">\n <h1>This is pre-alpha!</h1>\n</div>\n<h2>Icon attributions</h2>\n<ul class="attribution">\n <li><a href="http://thenounproject.com/noun/judge/#icon-No3953" target="_blank">Judge</a>designed by<a href="http://thenounproject.com/Luis" target="_blank">Luis Prado</a>from The Noun Project</li>\n <li><a href="http://thenounproject.com/noun/antenna/#icon-No10279" target="_blank">Antenna</a>designed by<a href="http://thenounproject.com/rocavence" target="_blank">Roca Chang</a>from The Noun Project</li>\n <li><a href="http://thenounproject.com/noun/earth/#icon-No4570" target="_blank">Earth</a>designed by<a href="http://thenounproject.com/thibault.geffroy" target="_blank">Thibault Geffroy</a>from The Noun Project</li>\n <li><a href="http://thenounproject.com/noun/institution/#icon-No1564" target="_blank">Institution</a>designed by<a href="http://thenounproject.com/thibault.geffroy" target="_blank">Thibault Geffroy</a>from The Noun Project</li>\n</ul>')}return buf.join("")}}).call(this);(function(){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs || jade.attrs;escape=escape || jade.escape;rethrow=rethrow || jade.rethrow;merge=merge || jade.merge;var buf=[];with (locals ||{}){var interp;var __indent=[];buf.push('\n<ul class="nav">\n <li><a ng-href="/">首頁</a></li>\n <li><a ng-href="#/g0v-hackath2n">九大建設</a></li>\n</ul>\n<ul class="nav pull-right">\n <li ng-class="{ active:$state.includes(\'about\')}"><a ng-href="#/about">關於</a></li>\n</ul>')}return buf.join("")}}).call(this);