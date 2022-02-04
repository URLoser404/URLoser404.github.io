(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{533:function(t,s,a){"use strict";a.r(s);var e=a(7),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"esp32webserivce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp32webserivce"}},[t._v("#")]),t._v(" Esp32WebSerivce")]),t._v(" "),a("p",[t._v("所有的網址\n沒意外的話是在外網永遠存在\nwebservices 也可以使用\n下為"),a("a",{attrs:{href:"https://esp32-webservice.herokuapp.com/api/esp32-webservice",target:"_blank",rel:"noopener noreferrer"}},[t._v("網址"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("開源程式碼"),a("a",{attrs:{href:"https://github.com/Owen-l4/esp32-webservice",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"webservice-building"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webservice-building"}},[t._v("#")]),t._v(" webservice building")]),t._v(" "),a("p",[t._v("這裡主要為建置webservice的環節\n以便之後到學校與esp32作為接口對接")]),t._v(" "),a("h3",{attrs:{id:"使用heroku建置新伺服器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用heroku建置新伺服器"}},[t._v("#")]),t._v(" 使用heroku建置新伺服器")]),t._v(" "),a("p",[t._v("使用免費方案即可\n"),a("img",{attrs:{src:"https://i.imgur.com/SDNwhcA.jpg",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"api基礎架構"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api基礎架構"}},[t._v("#")]),t._v(" api基礎架構")]),t._v(" "),a("p",[t._v("接著使用flask建置api的基礎架構\nflask加heroku的組合我個人挺喜歡的\n此方法也可以拿來架設網站在外網\n如此網站為我接下來個人部落格的施工預定地\nhttps://test-pants-blog.herokuapp.com")]),t._v(" "),a("p",[t._v("因為在初步建置環節\n所以現在只有實作GET method\n使用RESTful api作為整體架構\n以下為程式碼")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" flask \n\napp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("flask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Flask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/esp32-webservice"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testing"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"heroku-必要設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heroku-必要設定"}},[t._v("#")]),t._v(" heroku 必要設定")]),t._v(" "),a("p",[t._v("接著加入heroku server的必要文件")]),t._v(" "),a("h4",{attrs:{id:"requirements-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements-txt"}},[t._v("#")]),t._v(" requirements.txt")]),t._v(" "),a("blockquote",[a("p",[t._v("為伺服器所需安裝的檔案清單\n如未寫入此清單不可使用")])]),t._v(" "),a("p",[t._v("如下")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Flask\ngunicorn\n")])])]),a("h4",{attrs:{id:"runtime-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runtime-txt"}},[t._v("#")]),t._v(" runtime.txt")]),t._v(" "),a("blockquote",[a("p",[t._v("為伺服器所需使用的語言架構")])]),t._v(" "),a("p",[t._v("如下")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("python-3.8.5\n")])])]),a("h4",{attrs:{id:"procfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#procfile"}},[t._v("#")]),t._v(" Procfile")]),t._v(" "),a("blockquote",[a("p",[t._v("為heroku的參數檔\n用來決定此伺服器的用途")])]),t._v(" "),a("p",[t._v("如下")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("web gunicorn 主程式名稱:app變數名稱\n")])])]),a("h3",{attrs:{id:"運行至heroku"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#運行至heroku"}},[t._v("#")]),t._v(" 運行至heroku")]),t._v(" "),a("p",[t._v("接著在本地端使用git工具以及heroku CLI將架構上傳")]),t._v(" "),a("p",[t._v("git工具以及heroku CLI我皆已安裝\n在這裡不再演示")]),t._v(" "),a("p",[t._v("直接在git工具裡面使用git bash\n可以直接使用linux command很方便\n還可以直接用vim寫README.md之類的普通文檔\n雖然我都亂寫")]),t._v(" "),a("p",[t._v("初次上傳使用下列指令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#初始化git")]),t._v("\nheroku login\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#登入heroku")]),t._v("\nheroku git:remote -a esp32-webservice\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#初始化git路徑")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"upload"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push heroku master\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#上傳至heroku伺服器")]),t._v("\n")])])]),a("p",[t._v("如之後須更新使用下列指令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"upload"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push heroku master\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#上傳至heroku伺服器")]),t._v("\n")])])]),a("h3",{attrs:{id:"api基礎架構最終結果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api基礎架構最終結果"}},[t._v("#")]),t._v(" api基礎架構最終結果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/1LTWCzC.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"雲端sql-server建置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#雲端sql-server建置"}},[t._v("#")]),t._v(" 雲端sql server建置")]),t._v(" "),a("p",[t._v("因我的主機無法當作資料庫的server\n所以在這裡使用heroku的addons\n叫做"),a("code",[t._v("postgresql")]),t._v("\n也是sql server的一種\n可以用一般的sql語法來進行CRUD\n但如果用免費版的只能夠儲存大約1000筆資料\n所以這次的資料庫正規化我並不想做到3級\n避免資料庫肥大")]),t._v(" "),a("p",[t._v("首先在終端機裡輸入指令\n來加入heroku的postgresql addons\n並創建資料庫")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("heroku addons:create heroku-postgresql:app名稱\n")])])]),a("p",[t._v("之後在終端機裡輸入指令來查詢資料庫的連線字串")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("heroku config:get DATABASE_URL -a app名稱\n")])])]),a("p",[t._v("雲端伺服器無法使用圖形介面建置資料庫\n所以這裡使用T-SQL直接在資料庫裡CREATE_TABLE\n這裡我用google colab來當作資料庫的調適工具")]),t._v(" "),a("p",[t._v("待續，我好懶")]),t._v(" "),a("h2",{attrs:{id:"esp32-connect-to-webservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp32-connect-to-webservice"}},[t._v("#")]),t._v(" esp32 connect to webservice")]),t._v(" "),a("p",[t._v("待開學後與webservice對接")]),t._v(" "),a("h2",{attrs:{id:"phone-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phone-app"}},[t._v("#")]),t._v(" phone app")]),t._v(" "),a("p",[t._v("我懶了 交給下禮拜的我")])])}),[],!1,null,null,null);s.default=r.exports}}]);