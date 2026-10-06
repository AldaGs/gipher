"object"!=typeof JSON&&(JSON={}),function(){"use strict";var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;r<u;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;r<u;r+=1)"string"==typeof rep[r]&&(o=str(n=rep[r],i))&&f.push(quote(n)+(gap?": ":":")+o);else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i))&&f.push(quote(n)+(gap?": ":":")+o);return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(indent=gap="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if((rep=e)&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(t,e,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();
{
var folderClosed_PNG = createPNG("folderClosed.png","\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x00\u008D\x00\x00\x00\u008D\x01\u00C6f\u00F7\u00A4\x00\x00\x00\u00DBIDATH\u0089\u00ED\u0095\u00B1\r\u00830\x10E\x7F\u0090\x0Bd\u0090\u008DDA\u00E9\x15\u00B2\bR6 #\u00A4b\bWY\u0081M\u00B2\u008A\x07@J\u0081\x10\u00A2\x00D\x14!\u009C\u0080\t!\u00A4\u0081_Zw\u00F7\u00EE\u009F\u00EC\u00F3\u00A1\u00AEk\u00AC-ku\u00C2\x0E\u0099+\u00D2\u008F\u0097R\x1E\x01\u00DC\x00\u00F0\u0091:I\x1C\u00C7\u00E7\u00A5NN\x06@\u00ABh\u00B1\u00930\f=J\u00A91A)5u\u00E7\x13!\u0084\u00E6VsB)\u00BD\u00CF\u00EF\u00F3M\u0091R\u00EA2\n\u00F9\u00A1\u00BC\x7F@4\u00ED\u0090\u008DB\u00C8T\x00c\f\u00965\u00DEKY\u0096\u00C8\u00F3\u00FC{\u0088\u00EF\u00FBp]\x17EQ\f'\x13\x02\u00CE9\u00D24E\u0096e\x1FC\u00BA\x17o\u00DB\u00F6\x03`*\u00D0:\f\u0082\x00\u008E\u00E3\u00BC\u00C6h\u009BC\u009B\u0083\x10\u00E2\u00DA\u00EE\u009E\u00FE\u0099\u00A9\u00C3\u00AA\u00AA\u0086F\u0095<\u00EBt\u00DA\u00FF\u00F8-B\x004l\u00A4<\u0094\u00CAe^\x10\x00\x00\x00\x00IEND\u00AEB`\u0082",getUserDataFolder()+"\\"+"Icons");
var folderOpen_PNG = createPNG("folderOpen.png","\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x00\u008D\x00\x00\x00\u008D\x01\u00C6f\u00F7\u00A4\x00\x00\x01yIDATH\u0089\u00ED\u0096=K\u00C3P\x14\u0086\u009F\u00B4\u00E9GH\u00AB\u00A5\u008AB+\u00AD\u009B\u0083 \u00E2/\u00A8\u009Bt\u00D1\u00C9\u00CD\u00A1\u00BF\u00C0\u008EBgww\x07\u00FB\x03\x1C\u00DA\u00ADcq\x15\u00A1\u00BAjE\u00F0\x03\x07\u0095.\u00A5\"\u00B5Wncj\u00D2\u00D4\x06b\n\"\x1E\b\u009C{\u00F2\u00E6>\u00F7\u009C{\u00EE%\u008A\x10\u0082I[`\u00E2\u0084?\x05QMG)\u00D5\x0E\u0080\u00D51\u00DA\u00A2\u00D8\u00DFhx\u0086(\u00A5Z\x11\u00D8u\u00D1\u00CAE\u00E4\u00BC@\u00FA\u00DD\u00A5\u0094j\x15\u0097,\u00A4=\x025\x17MeT\u00B6&\u00E4\u00AB\u008FC\x1A\u00A8\u009A\u0097\x05\u00CB\u00E9\u00DAL\u00A5\u008B\u00C4SW\u009F\u0081\u0086(\u00D0R\x1D\u00BA\u00E9EHd=B\u00D0\u0081C\u00CB\u00B8\nl9\u00BB+6\u00E7\x150\u00CA6\u0095#rv\u00C8\u008FJ\u00F5\u00AD5\u00EC\x10}\u00DEo@U\u00EE\u0089\x1D\u00A2%\u00FD\u0086\u00C8\u00AE\x1D:\u00F1\u00BA\u00AF\u00FB!\u00ADn\u0087\u00F8_\u00AAsQ\u00E0\u00C6\x0E\u00F1\u00BFTe\u00D3\u0099$\u00A4b:\u00C6a\u0094\u00AD\x1B\u0089\u00DB\x14\x0B:\u00AC\u00CC\u00BA\u00CFt\u00F1\x04wmGxP*\x06\u0099\fe\u0091\u00CF\u00C2\u00DE\u009A\x01B\u008C~\u00B4 \u00E43\u00B0\u00B3\x04\u009A\u00F3\u00DE([\x07\u00C6k5\u00FA\x00\u00A4\u00A4;\x135>>\u00BE\u0086\u00FA\u00BD{&\u00EB\u00E9\u00A1@\u00AF\u00FBL@\u00ADXC\x06\u00E4\u00A5\u00B9L(vFXOf\u00A6C\u00A1f+\x1C\u00B9l\x05\u0082i}<\u00E0\u00ED]\u00F4Nn\u00BB\u00DDN\u00FB\u00B5\u00D3\x0F\u0088\u00DE)\u00D1\u00C4\u00B6<\u0080V\u00DD\u00FF\u008F\u00C4/\u0083\x00\x1F\u0085\u00F8a\u00A9?\u008A\x0E\u00CF\x00\x00\x00\x00IEND\u00AEB`\u0082",getUserDataFolder()+"\\"+"Icons");
var iconsSize = [0,0,25,25];
var templateCollapse = createPNG ("templateCollapse.png","\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x00F\x00\x00\x00F\x01\u0095G\x17V\x00\x00\x00\u00C0IDAT8\u008D\u00E5\u0095\u00C1\r\u00C20\fE_P\x07\u00E8\bl\x00\x1B\u00C0(d\x036\u00A0l\u00D0\r\u00D2M\u0080\r`\u0083\u008E\u00D0\r\u0082\\\tT\x05WND\u00C5\u0085\x7F\u00B3\u00E3\u00BC\u00D8\u00B1\u00E2\u00B8\x18#K\u00AA\u009A\u00B2\\`\x0B\u00D4\u0085\u00FC!z\u00EE/\u00A3J\x16[`W\b\u00BC\x01\u00FB9\u00A0\u00E8\x01\x1C3am\u00EA\u00D0\u0080R\u00C25\u0087\u00E6\x02C\x0EP\x02\x1B\u00E0d\u00F0\u00CE\u009AS\x05F?\x02\u009B\u008C\f?*\u00F9M\u0086@\x07\u00E6=\u00F6\u00D3\u00EEZ\u00C0\u00B5\x16\u009CH=\u00F0\x1B`\u009F\r\u008C~,\u00B93\u0080r\u00D7\u0087\u00D4\u00B7\u00B26\u0095\u00EA\x0F\u0081ZSj\x17\u00CC\x0E\u00BFc\u00E5\u00ED[\u00C0\rp)HJ\u00C6\u00D7,P\u00C6V\u00F1\u0080\u009D\x1A\u00CB~\x01\u00C0\x13\u00EB\u0095(\rs\u00FF-w\x00\x00\x00\x00IEND\u00AEB`\u0082" , getUserDataFolder()+"\\" + "Icons");
var templateOpen = createPNG ("templateOpen.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x00F\x00\x00\x00F\x01\u0095G\x17V\x00\x00\x00\u00C1IDAT8\u008D\u00E5\u0095\u00C1\r\u00C20\fE\x1F\u00A8\x03t\x03\u00B3\x01l\x00\u00A30\x02\x1BP6\u00E8\b\u00DD\x04\u00D8\x006\u00A87\u00E8\x06A\u0096\u00A0\u008ABJ\x12Qq\u00E1\u00DF\x1C;/v\u00AC8\x0B\u00E7\x1Cs\u00AA\u00F2Y\u00AA\u00BA\x01\u00EAB\u00FE \"\u00B7\u0097Q\x05\u00CE\x16\u00D8\x16\x02\u00AF\u00C0n\nh\u00BA\x03\u0087LX\x1B.\u00C4\u0080V\u00C2%\u0087\u00A6\u00AAC\x0E\u00D0\x02\x1B\u00E0\u0098\u00E0\u009Db\u008BQ\u00A0\u0088\x18\u00B0\u00C9\u00C8\u00F0\u00AD\u0092\u00DFd\bt@\u00EA\x1E{\u00BF\u00BB)\u00E0*\x16\x1C(z\u00E07\u00C0>\x1B(\"\u00DD\u00B3\u00EC\u008FR\u00D5}\u00E8_\u00A66\u0095\u00EA\x0F\u0081\u00B1\u00A6\u00D4\u00AA\u009A\u00EA\u00F0\x18ko?\x05\\\x03\u00E7\u0082\u00A4l|M\x02ml\x15\x0FX\u00DF\u0098\u00F7\x0B\x00\x1E\x14\u00A62\x16\u00D6\\)\u00C7\x00\x00\x00\x00IEND\u00AEB`\u0082" , getUserDataFolder()+"\\" + "Icons");
var qualityCollapse = createPNG ("qualityCollapse.png","\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x00F\x00\x00\x00F\x01\u0095G\x17V\x00\x00\x00\u00EAIDAT8\u008D\u00CD\u0094\u00D1\r\u0082@\x10D\u00DF\x1A\u00FF\u00B5\x03\u00B5\x02\u00E8@\u00AD@K\u0090\x0E(\u00C1\x12\u00A8\u00C0\u00B3\x13-\u00C1\x0E\u00D4\x0E\u00B4\u00823g\x16\x05\u0084\u00E3@?\u009C\u00E4\u00C2\x05v\x1F\u00B3\f \u00D6Z~\u00A9\u00C1Oi\u00A1@1\u00C4n\u0085\u00D4\x0E\x03o\u009C\u00E9q\u00D1V\u00D8\u00EAP\f\x1B`\u00EE\u0096\u00EE\u00FD\u00F5\u00BEP\u00C40\x06.\u00C0HO\u00DD\u0081\u00A9M\u00B8\u00F5u\u0098\x15`\u00E8>\u00F3\u00D47;\x14\u00F3|^\u0087\u0086\u00BE\u00A5M8vu\u00E8s\u00D2x\u00AD\x16(\u0086-\x10y\u0080\u0091\u00D6|\u00F6VG\x16\u00C3\x148U\u009E]\u009D\\@\u00B1M\u009E\u00A1y\x1DV\u0083hRm@%\u00A0\x18\u00D6\u00C0*\x00\u0096k\u00A5=oF>\u00B2\u00BEsn\u00D4I\x07\u00A0\u00D3UG\u00BFU\x1D\u00A6=`hOZr\u00A8A\u009C{\u00C0\u008A\u009A\u00B9\u0080r\u0087\u00FB/a/\u0086\u00B0\u00B3\u00CE]\u00EBG\x1F\n\u00FD\u00F3?6\u00F0\x00\u00DD\u00EC>\u00CF\u008D}\x19\u009C\x00\x00\x00\x00IEND\u00AEB`\u0082" , getUserDataFolder()+"\\" + "Icons");
var qualityOpen = createPNG ("qualityOpen.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x00F\x00\x00\x00F\x01\u0095G\x17V\x00\x00\x00\u00E6IDAT8\u008D\u00CD\u0094\u00DD\r\u0082@\x10\u0084\x07\u00E3\u00BBv\u00B0X\x01t\u00A0V\u0080%X\x02%X\x02%\u00D8\u0089\u0096`\x07\u00DEt\u0080\x15`\u00CE,\u0084\u00DF\u00BB\x03}p\u0092\x0B\x17\u00D8\u00FD\u0098e\u0080\u00A8\u00AA*\u00FCR\u00AB\u009F\u00D2B\u0081$S\u00BBBj\u00D7\u00817.\u00F4x\u00F0\x15z\x1D\u0092<\x03\u00D8\u00DB\u00A5{\u00A7\u009C\u00A1\u0090\u00DC\x020\x006z\u00EA\x05 \x16\u0091r\u00A9\u00C3\u00A2\x05\u0083\u00EE\x0BG\u00FD\u00B4C\u0092\u00F6y\u00DD&\u00FA\u008E\"r\u009F\u00EB\u00D0\u00E5d\u00F2\u00DA(\u0090\u00E4\x05@\u00E2\x00&Z3\u00D0`d\u00921\u0080G\u00EF\u00D9\u008D\u00C9\x06\u0094\u008A\u0088\u00F19\u00EC\x071\u00A5\u00D1\u0080:@\u0092'\x00Y\x00\u00ACV\u00A6=\u008D\u009A\u0091\u00F5\u009D\u00B3\u00A3\u00CA\f\u00E0\u00A7UG/\u00FB\x0E\u00F3\x050hO\u00DEq\u00A8A<\x17\u00C0\u00DA\u00DA\u00D9\u0080j\u0087\u00D7/a\r#2\u00C6Xw\u00DE\u008F>\x14\u00FA\u00E7\x7Fl\x00o2AT\u00EA5/\x16\u00B0\x00\x00\x00\x00IEND\u00AEB`\u0082" , getUserDataFolder()+"\\" + "Icons");
var resizeCollapse = createPNG ("resizseCollapse.png","\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x00F\x00\x00\x00F\x01\u0095G\x17V\x00\x00\x00\u00D6IDAT8\u008D\u00CD\u00D4\u00DD\x11\u00820\f\x07\u00F0\x7F=\u00DFu\x046\u0080\r\u00EC\x06\u00BA\u0081t\x03Ga\x03d\x047`\x04\u00D9\x04'\u0088\u00973\u00B9\u0083\u00DAJ{\u00D7\x07\u00F3\x02\u00A5\u00F0K?R\f\x11\u00A1d\u00EC\u008Aj\x00\u00F6zcz\u008C\u0091wfr\u00B8d\u0083\x00N\u0081\u00FE\x17\x00\u009B3\u00C2\u00AD)\u008F\u00E4\u00F0,\t\u009EM\u008F{I\u0090\u00E3\u009A\u0083\u00FA \u00AF\u00D9\x14Ao\u00B9\u00A0n\u0080\r\u00A0\x039t\u00B9`\u00C3\x1B@\x0E\u00B3\u00872\u00D6\u00E2SZG\u009E>_c`\u00F4\u00A4\u00C8G\u00AD\u008EL\u00DA\\\u00AB\u00B5$\u00B3\u0092<\r\f\u00E0\u008AiL\u008B\x1A\u00E5\u00F2j\u00E0\x15\u00F6\u00AF\u00E8<\f\u00D2\u00E6$\x15\u0080\u0083>L:\u00CB\u00B2\u0086C\u00A0\u00AB^b\u00C9\u00E0\x06\u00BA\u008A\u00AC\u00BF\u008D\u00A0\u008Fb\u00A0lNU\f\f\u00EC\u00F4w\u00D2\u00FF\u00FEc\x03x\x03:(B\u00802\u00D8\u00CE\u00A6\x00\x00\x00\x00IEND\u00AEB`\u0082" , getUserDataFolder()+"\\" + "Icons");
var resizeOpen = createPNG ("resizeOpen.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x00F\x00\x00\x00F\x01\u0095G\x17V\x00\x00\x00\u00E1IDAT8\u008D\u00CD\u0094\u00E1\r\u00820\x10\u0085\u009F\u00C6\u00FF\u00BA\u00C1s\x03\u00D8@Fp\x04Fp\x04Gp\x04\u00DD@7\u00C0\r`\x03o\x03\u009C\x00Ss\u0097`S\u00A0M\u00FA\u00C3\u00974P\n_\u00EF\u00DD\u00D1[\r\u00C3\u0080\u009CZg\u00A5\x01\u00D8\u00D8\u008D\u0088\u00F8\u00A1>\u00F5\u00DA\u0093<&\x03\x03:\x00x\x03\u00A8R\"\\\u00B2\u00FC\u00D2\u0091\rX\x00hDd\u0097\x0B\u0098\f\u00F5\u0081.g\u00DD\x04\u00B4N\x05Z\x01\u00AA\x00\u00F4F\u00F2\u0092\n,I\u00B6${\x0F\u00EA`\u00DF\u00E8\u009Cm\x11\u00B9\u00CE\u00D9\u009F<)\u00FAQm\u0091\u00E9\u00BCQ\u00FBn\u00B3J7\u008F\x03\x06\u00E0\x063u\u00EA\u00C4\u00AD\u00DDI\u0096X\u00F8\u00B1\u00C7:y0X\u00F5\x01\u00EC\x01l\u00EDa\u00D4Y&yv\u00B9\f,\x15cX4P\u00A1\u00F5\x04\u00F4GI\u00DDF\u00A1\u008Fl@-\u00CEl\u00B3\u0088-\u008A\u00C9\u00E5\u00B2\u009D{\u00E1\u00CF;6\u0080\x0F\u0080yK\x00N\u00C7\rU\x00\x00\x00\x00IEND\u00AEB`\u0082" , getUserDataFolder()+"\\" + "Icons");
var optionsCollapse = createPNG ("optionsCollapse.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x00F\x00\x00\x00F\x01\u0095G\x17V\x00\x00\x00\u00D2IDAT8\u008D\u00ED\u0094\u00C1\r\u00C20\fE_P\x17(#\u00C0\n\u008CPF(\u00F7\\`\x04\x18\u0081\u00AE\u00C0%w:\x02\x1D\u0081\u00AE\u00D0\x11\u00E8\bF\t\u00B5\x14\"@*\u00EA\t\u00F1O\u00F6\u008F\u00F3\u00F3cG1\"\u00C2\u0094\u0098M\u00AA\u00F6\x17\u009C\x04\u0099\x171\u008EW\u00A3^\x03\u0097\u0084k\u0081J,\u00B5q,\u0080#P\fk\u009E\u00AF\u00C2\u00B3\x19!\u00A8X%b\x1E\u00BDX\u00E6YR\u00D8\x01\u00A7(V4\u00C0\x01\u00B8\x0Ey\u0091\u0088-\u0081\u00DC8\u00F2w=\u00F4\u00A7u\t\u0097\u00E6U\x14\u00EF\u00C5\u00D2\u008A\u00A5O\x05\u00B5/e\u00C2{7\u00B7(\u00AF\u00C5\x06\u00C7z\u009B\u00ADqa\u00DF\u00E8)\u00D7Co}\u00DFK\u00B1\u00EC\u00FCm\u00D4%:\u00E5\b\u008D\u00D8\u00C7\u0086O\u00BCq\u00C1\u00F1\u00D9\u00B8\u00E7\u009Ao\x1C*:\x15\u0088\x06\u00B9\t\u0087\u00FD\x7F\u009B_\x17\x04\u00EE\u00B0F?o\n\u00DB\x06\u00BC\x00\x00\x00\x00IEND\u00AEB`\u0082" , getUserDataFolder()+"\\" + "Icons");
var optionsOpen = createPNG ("optionsOpen.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x00F\x00\x00\x00F\x01\u0095G\x17V\x00\x00\x00\u00C3IDAT8\u008D\u00EDT\u00ED\t\u00C20\x14\u00BC\u008A{\x1C\u00B8B\x1DAGp\u0085:B3B;\u0082\u008E\u00A0#\u00B4+\u00B8B\u00E1M\u0090\x11\")/\x10cZ\u00A8\u00F4\u009F}\u0090\u00F0>/\u00F7\u00EEG\n\u00E7\x1C\u00D6\u00B4\u00DD\u00AAh\u00FF\t\u00B8\u00F7\u0097\u0088\u00D4\x00\u009A\u00A4v\x06\u00D0%\u00B9\x1E\u0080\x010h\x7F\u00A5\u00F9\u0096\u00A4\u00F9E\u00C3\x13\u0080ZO\x15\u00E5/\x1F\f3\u00CC\u00BC\u00BD\u00A2\\`\u00F5\u00D0\u00E1>\u00E9\u00B7!\u0098dH\u00D2N\u00D5\x00\u00DC#\u00DF\u00CBR\u00CE\x01v\x19\u00ED\x1Ae7\u0082\u0091|\x02\u00B8F\u00F5\u009B\u0088\x1Cf\x19f\u00CC*3\u00A3\u00C3~\u00EDc\u00D46\u00EA\u00F8\u00A5!\u00C9\"\x03fH\u00B6!\x10\u00912\u00B3\u0085]\u00CA0\x1D\x1E\"\u00DF?8\u00EA\u00BA}\x0E\x1B\u00E0R\x03\u00F0\x06\u00EE\u00C21\u00C0&\u0089[\u00F3\x00\x00\x00\x00IEND\u00AEB`\u0082", getUserDataFolder()+"\\" + "Icons");
var outputCollapse = createPNG ("outputCollapse.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x00F\x00\x00\x00F\x01\u0095G\x17V\x00\x00\x014IDAT8\u008D\u00E5\u0094OJ\u00C3@\x14\u0087\u00BF\u00D4\u00948\u0089\x7Fj\x16\x11\x1A\u00B1\u00A7p\u00AF;q#\u00DE\u00C0\\\u00A0\u0088\u00DBnD\x10\u00DD\u00E9\r\u00BCB\u0097]\x06\u0097\nZ<\u0081\u00A5\nn\u00D4Z\x10Z\x04G\u00A6I\u00E9\u00C4\u00DAPM\\\u00F9`\u0086\u00C0{\u00F3\u00E5\u00F7\u00E3\u00BD\x19CJI\u009EQ\u00C8\u0095\u00F6\x17@SmF\u00AD\u00B1\x07\u0094&\u00D4\u009C\u00C9\u00A3\u00CD\u00CE\u008F\u0080\u00C0iJM\x18\u00AF\u00A9b\u00D0\x14\u00A3\u00D6\u00B8K)~\x04z\x13rJ\u00F9\u00AE\u00EE`\u00A8\u00B02\u00D8\x17|\u0098\u00F7\u00BF\x1E\u00AA\u00A4{\u009Cm\x1A\u00E7(A\x072 4\x13I\x05\x13\u00EE\u00B4\u00EE\u00F4\x1F\u00AAUW}\x18u\u00B9P\u00FC\rL\u008F&\u0089\u00B1\u00C9\x06#V\u00A8\x01\u00E7\u00BC\u00AC\u00C0\u0090\x1C\x15\u00B6d\u00A0[.\n0E\x16`}\u00F8\x11\x01\u009D\u00E5,0\u00F4\u00C1\u008F\u00C6F\u00B3\u00BB\u00E1\u00C3\u00D6*\u00DC\u00BF\u008D\u009Fr-\u00B0M8\u00B9\u0081'm\u00D4e0R\x18\x01c\u00BB+\x0E\u00AC\u0097\u00E1\u00F8\x1A\u009E\u00FB\u00E3@a\u00C2\u00E1\x1A\u00F8\u008E\x06\u00EC\u00BF^\u00C1\"I`\u00B7\u00BD\u008Fp\u00B7\u0097l\u00ABt\u00D1\x16\u009Eg\u00CD\u00D8\u009E\u00F5\u00BD\u00B7\u00CB\u0087\u00F7\u00CEm\u00AB\x1B]U\u00F9\u00F1\"\u00AB\u00E5\x1D=\u00FF\u00DF\x1EX\u00E0\x13@yH\u00D7\u00BB\u00C2\u00A7=\x00\x00\x00\x00IEND\u00AEB`\u0082" , getUserDataFolder()+"\\" + "Icons");
var outputOpen = createPNG ("outputOpen.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x00F\x00\x00\x00F\x01\u0095G\x17V\x00\x00\x00\u00CDIDAT8\u008D\u00ED\u00941\n\u00830\x14\u0086\x7F\u008B\nA\u0085b\x16\u00B7x\u0084^\u00A57\u00E9\u00E4!\\z\x15\x0F\u00E0!<\u0082\u008ENv\n\u00C1\u00C1\u0094\x17,\u00B4\u00B5\u008DR2t\u00F0\x1F\x12x\u00F9\u00F3=\u0092\x07\u00BF\u00A7\u00B5\u0086K\x1D\u009C\u00D2\x00\u00F8\u00B4\u0094ey\x01p\u00B4\u00F8\u00AA\u00A2(\u009A\u00CD@\x00\u00D7\r\u00DEM@\u00F3\u0087u]\u00B76S\u0092$M\u0096ek\u00C0F\bQ\x19`\u00D7uN&#\u0084\u00F0\u009C\x0Fe\x07\u00EE\u00C0\x1F\u00E4\u00BF_\u0089\u00E3\x18\u009C\u00F3U\u00D28\u008E\u00E8\u00FB\x1E\u00D34\u00BD\u00D4\x17\u00C0(\u008A\u008Cy\x18\u0086\u00AF\u00B0 \b\u0090\u00A6)\u00C20\u0084R\u00CA\x0E$I)\x17\u00C6g\u00D1\x19\x01?\u00E9\x01<\x038\u00CDO\u00A1=g\u008C\u00D9\u00E2\u008C\u009A\u00B6Zk\n\u008C\u00DB\\2\u00E1\u00F1\u00E7\u0089\r\u00E0\x0E%nE\u00C0\u00DE+\u0082\u00BB\x00\x00\x00\x00IEND\u00AEB`\u0082" , getUserDataFolder()+"\\" + "Icons");
var afterCollapse = createPNG ("afterCollapse.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x00F\x00\x00\x00F\x01\u0095G\x17V\x00\x00\x01{IDAT8\u008D\u00ADU\u00C1Q\u00C3@\f\\\u00BB\u0081\u00B8\x03\u00DCAR\x00\u008Ft@\u00F8\u00F2\u00C1\u00F7\u00E1\u00ED\x0EH\ta\u0086\u00B7m>|I\t\u00A1\u0083\u00A4\u0083\u0094\u0090T F\u00F6\u00CAh\u008C\u00C7\u00E7\x014\u00E3\u00B1\u00EF$\u00AD\u00A4\u0095\u00EE\u009C\u0088\bb\u0092\u00D4\u00C8\u00D5D\x02\u00CEQ\u00DB1\u00C0\u00A4F\x06\u00A0\x04\u00B0\x01\u00B0\x1C\u00A8O\x00\u00F6\x00v\x12p\u0089\x02&u\x0B\u00D2\x00X8gs\u00CC\\\u0090+\u0080BB\u00AB\u00FF\x16\x05\u00B4\x07\u0095\x14\u00A8DP\u00C9\x05\u0095\u0094^7\u00B0+i\u00A3\u00B6\u0085\u00D7\u00F5\x192\u00B3\x0Ff\u00B5\u0089\u00F1\u0095\u00D4\u00B8\x05\u00F0\u00CAl\u00EF-\u00D3\x16\u0090\u009C\x19\u00C0j\x06\u00D8\u0096\x1C?\x00x\u00E7v\u00AE\u009C\u00A6\\\u0094\u00E4l;\x03\u00AC\x00\u00F0L\u00FB'\u00F5\u00E1w\u00E93<\u00A2\x1B\u008BU\x04L\u00F5\x07\u00D7\u00B0\u00B5f\u00E5\u00FD-\u00C3%\u00BB9\x05\u0096;\u00B0+y\u00B6\u00EE\u00EFm\u00BCRF\u0085\x1B\runX\u009A\u00AD3:-\u00B8\u00B5\x1EPs\u00B1\u00A0\u00A9\x07\u00E2\u00A6r\u00F1\b\u00A0v\u00A0\u008D\x1B\u00F0 \u00A1+qLR\x17)s\u00CE'~+\u00A8\u00EA\u00EF\u00B8~\u0091\u00D0\u00EA\u0087\u0092\u0091\u00C3\u00B3qx\u00E2\t\x00yY;\u00D0\x1B\u00BE\u00DF$t\u009D\x1C\u0091\u008D\u00D9\x1B`K*\u00CB\u00F5\u00A0\u009F.\u00E0(\x18}\u00FA\u00A6F\x07;\u00A9\u00B1\u00E3|\u00FE\u00BC\b\u00BA\u00CE\x1B\u009F\u00ED`\u00FF\u00E5\u00E8\u00E5n\\\u00FA\u00A3g%\u0083\x1B\u0081\x06G+\x7F\u00A2\u00CC#m\u00B5\u00EB\u00FD\f\u00FF\u00FB\u00F5\u00F5\u00DB\x0BV\x036\u00B3.\u00D8\t\u00BE\u00E2\u00BF\x00\x00_\x00{\u00ED\u00FD(e\u00A2\u00ED\x00\x00\x00\x00IEND\u00AEB`\u0082" , getUserDataFolder()+"\\" + "Icons");
var afterOpen = createPNG ("afterOpen.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x00F\x00\x00\x00F\x01\u0095G\x17V\x00\x00\x01}IDAT8\u008D\u00AD\u0095\u00C1Q\u00C3@\fE?n \u00EE@\u00EE )\u0080C: \\\u00B9\u00E0\\8\u00BB\x03RB\u0098\u00E1\u008E\u00B9p%%@\x07N\x07\u00AB\x0E\u0092\n\u00CC\u00C8|yD\b\u00D9\f\u0090\u0099L\u00EC]\u00E9I\u00FA\u00D2n.\u00FA\u00BEG\u00EE\u00A3\u00AA\u0095\u0099\u0088H\u00CA\u00D9\x1E\x05\u00AAj\t\u00A0\x01\u00B0\x000=\u00D8\u00DE\x02\u00D8\x00X\u008B\u00C8.\x0BTU\u0083\u00B4\x00&\u00C1\u00D9\x1D\u00CB\x10d\x0F\u00A0\x16\u0091\u00CD\x17\u0080\x01\u00FD\u009BR\u00AASJ}Ji\u0097Rj\u00E2\u00DE\u0081]C\x1B\u00B3\u00AD\u00E3\u00DE\u0098!3{eV\u008B\u009C^\u00AAz\t\u00E0\u0091\u00D9^{\u00A6\x03\u0090\u009A9`v\x06lE\u008Do\x00\u00BCp\u00B92M\x0B\u00BE4\u00D4lu\x06\u00AC\x06pO\u00FB;\u00F3\u00E1s\x133\u00EC\u00F09\x16\u00B3\f\u00CC\u00F6\u00DFB\u00C3\u00E6\u0096U\u00F4\u00F7\f\u00A7\u00EC\u00E6)X\x15`{\u00EA\u00EC\u00DD\u00DF\u00F8x\x15\u008C\u008A0\x1A\u00E6\u00DC\u00B24\x7F/\u00E94\u00E1\u00D2\u00FC@\u009A\u009D\x07-\"\u0088\u008B\u00A6\u00C5-\u0080\u00A7\x00m\u00C3\u0080/E\u00A4\u00FB\u00A9\u0092\"D*\u0083\u00F3\u0096\u00CF\x06\u00B5\u00FD+\u00BE?\u0088H{\u00843\u00F8\x1A\u00CB5\u00DC\u00F2\x04\u0080\u00BA\u00CC\x03T\u00F8\u00FB,\"\u00CD\x0F\u0089-\u00DC\u00DE\u0081\u0083\u00A8,7B\u00DFC\u00C0\u00A30\u00FA\u008CM\u00CD\x0E\u00B6\u00AA\u00AE9\u009F\u00DF.\x02v\u00DE\u00F5\x1C\x06\u00FB/G\u00AF\n\u00E32\x1E=/\x19\\X\u00D2\u00A0\u00F3\u00F2O\u0094\u00D9\u00D1\u00D6\u00BA>\u00CE\u00F0\u00BF__\u00BF\u00BD`-`{\u00D6\x05{B\u00AF\u00FC_\x00\u0080\x0F\u0099l\x18*\u00A4ih\x7F\x00\x00\x00\x00IEND\u00AEB`\u0082" , getUserDataFolder()+"\\" + "Icons");
var testCollapse = createPNG ("testCollapse.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x00F\x00\x00\x00F\x01\u0095G\x17V\x00\x00\x01%IDAT8\u008D\u00AD\u0095\u00C1Q\u00C30\x10E\u009Fr\u00C8\u0095t\x00\x1D@\x07q\x07\u00B8\x03P\x07)!%\u00A4\x03\u00A5\u0084\u0094`*\x00:\u0080\x0E\u00CC\u0095\u008B\u0098\u00D5|\u00CF(\u00C1\u0092\u00EDL\u00F6\u00E8Y=\u00FD\u00DD\u00FDZ\u00BB\x18#\u00B7\u008CU\u008D\u00E5\x02\u008D\x0B<-\u00B9\u00EF\u009FB\u0083\x00{`\u009B}\u00FE\x01N\u00C0.z\u00FA\u00D9@\x17x\x05\u0082\x00G\u00A0\x036@\x0B<\u00EB{\x13=\x1F\u0093@\u0095\u00F6\x0E|\u00EA\u00D0\u0099\x12)7\u0095}\u00F4<\u0094\u0080y\x0F\u00F7R\u00D0\u008E\u0095\x15}R\u00BB\x03\u00EEU\u00C9$\u00D0J:E\u00CFW)9\u00FA\u00D4\u0086o\u0098\x00f\u0093\u00ECJ\u0089Y\x14/\u00CC\x15\x0EI\u00C5\u00DE\u00CC\u008D\u0095J\u00E9\u0087\t\u00D6\u00CE\u00B9\u0090&\u00BE\u00AD\u00A9\u00CC{x\u00B0\u00E4Z\u00C3\u0095\u0083,5\x0Bh\u0096\t.\u00A4i\u009E)s!Y\u00E6\x05\u00F85\u00EB\x14\u00AB\u00B80\u00F6F\u0083yT\x0B\x06\x03\x0F\u00AF\u00C6`\u00EB\u009A\u00C1G\u0097\u0083\u00CAn\u00F5JP\u00CF\u008ERf\x17\u00DE\u0095\u00A0\u008B\u00B7\u008D,V\u0084V\u00B7\u00CDX\u00E8p#\u0098A\u00BB|#-\x062\x01\u00BD\nX\u0080\u00DA.\u00B8\x1Ex\x01}\x1B\u00DE\u00F7m\x7F\x01\u00C0\x1FLVx\u0092\u0080E\t\u0080\x00\x00\x00\x00IEND\u00AEB`\u0082" , getUserDataFolder()+"\\" + "Icons");
var testOpen = createPNG ("testOpen.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x00F\x00\x00\x00F\x01\u0095G\x17V\x00\x00\x01%IDAT8\u008D\u00AD\u0095\u00C1Q\u00C3@\fE\x1F9p\u00C5\x1D\u0088\x0E\u00A0\x03\u00DC\x01\u00EE\x00Jp\t)\u0081\x0E\u0092\x12R\u0082\u00A9\x00\u00E8\x00u`\u00AE\u00B9\u0098\u00D1\u00CC\u00F7\u00CCb\u00BCk;\x13\u009D<;\u00DA\u00B7_\u00DA\u00BF\u00F2\u00CD0\f\\3v%\u0096\u00BB\u00D7\u00EE\u00FE\u00B8\u00E5\u00BC\x7F\n\x03\x02\u00EC\u0081\u00A7d\u00F9\x078\x01\u00AD\u0099\u00F5\u00AB\u0081\u00EE\u00FE\n\x1C\x048\x02\x1DP\x01\r\u00F0\u00AC\u00F5\u00DA\u00CC>\x17\u0081*\u00ED\x03\u00F8\u00D2\u00A6?J\u00A4<T\u00F6fv\u009F\x03\u00A6=\u00DCKA3W\u0096\u0099\u0085\u00DA6>U\u00C9\"0J:\u0099\u00D9w.\u00D9\u00CC\u00A2\r\x0E\u0094\u0081\u00C9Mv\u00B9\u00C4$\u00B2\x07\u00A6\n\u00C7\u00A4lo\u00D6\u00C6N\u00A5\u00F4\u00E3\r\u0096\u00F6\u00B9{%;eU\u00A6=|\u008B\u00E4R\u00C3\u0095\u0083,\u00B5\n\x18\u00969\u00B8{;U\u00E6\u00EEa\u0099\x17\u00E0\x1C\u00D6\u00C9\x01\u00A7\u00C6\u00AEt1\x0Fj\u00C1h\u00E0\u00F1\u00D5\x04\u00EC\u00B6d\u00F0\u00D9\u00E1\u00A0\u00B2\x1B\u00BD\x12\u00D4\u00B3\u00A3\u0094\u00C5\u0081w9\u00E8\u00E6i#\u008Be\u00A1\u00C5i3\x17\u00DA\\\x0B\x16\u00D0.\u009DH\u009B\u0081,@/\x02f\u00A01\x0B.\x07N\u00A0\u00EF\u00E3\u00FB\u00BE\u00EE/\x00\u00F8\x05\u00FFg\u008C\u0098\u00D3\x02f\x7F\x00\x00\x00\x00IEND\u00AEB`\u0082" , getUserDataFolder()+"\\" + "Icons");

var alertNetworkDisabled = "Network access disabled.\nTo allow, go to:\nPreferences > Scriptting and Expressions\nAnd check off\nAllow Scripts to Write Files and Access Network";
var scriptName = "GIPHER";
var version = "BETA-1.22b";
var gitHubURL = "https://github.com/AldaGs/After-Effects-Scripts#after-effects-scripts";

var scriptSettings = getJSONFile(File(getUserDataFolder()+ "\\" + "Settings"+ "\\" + "settings.json"));
var logFile = createFile(getUserDataFolder()+ "\\" + "Log"+ "\\" + "log.log")

var gifski= File(getExtrasFolder().fsName+ "\\" + "gifski.exe");
var ffmpeg= File(getExtrasFolder().fsName+ "\\" + "ffmpeg.exe");

var executablesFolder = Folder(getUserDataFolder() + "\\" + "Excutables");
var temp =  Folder(getUserDataFolder() + "\\" + "Temp");

var subFolder = new Folder;
var renderedComp = new File;

var margins = 0;
var spacing = 2;

var progressInConsole = (File(scriptSettings).exists && getSetting(scriptSettings,"console") != null) ? getSetting(scriptSettings,"console") : false;
var gifFrameRate;
var gifQuality;
var gifWidth;
var gifOutput = new Folder;
var gifLoop;
var outputTemplates = [["Gipher_RGBA_PNG","GIPHER_RGBA_PNG"] , ["Gipher_RGB_PNG","GIPHER_RGB_PNG"] , ["Gipher_ProRes_444_Alpha","GIPHER_RGBA_ProRes"] , ["Gipher_ProRes_422","GIPHER_RGB_ProRes"]];
  
    function script(thisObj){
        function buildUI(thisObj){
            
            var mainWindow = (thisObj instanceof Panel) ? thisObj : new Window("palette", scriptName+" - "+version, undefined,{resizeable:true});
            mainWindow.margins = margins;
            mainWindow.spacing = 0;
            mainWindow.alignment = "center"
            
            var mainGroup =  mainWindow.add("group");
            mainGroup.margins = margins;
            mainGroup.spacing = 0;
            mainGroup.orientation = "column";
            mainGroup.alignment = "center";
            mainGroup.alignChildren = ["fill","fill"];

            var collapsableButtonsGroup = mainGroup.add("group");
            collapsableButtonsGroup.margins = margins;
            collapsableButtonsGroup.spacing = spacing+2;
            collapsableButtonsGroup.orientation = "row";
            collapsableButtonsGroup.alignment = "center"
            collapsableButtonsGroup.alignChildren = ["fill","fill"];

            var scriptMainGroup = mainGroup.add("group");
            scriptMainGroup.margins = margins;
            scriptMainGroup.spacing = spacing+5;
            scriptMainGroup.orientation = "column";
            scriptMainGroup.alignment= "center";
            
            var exportGroup = scriptMainGroup.add("group");
            exportGroup.margins = margins;
            exportGroup.spacing = spacing;
            exportGroup.alignment = "center";
            
            var editOptionsGroup = scriptMainGroup.add("group");
            editOptionsGroup.orientation = "stack";
            editOptionsGroup.margins = margins;
            editOptionsGroup.spacing = spacing;
            editOptionsGroup.alignment = "center";

            var templateGroup = editOptionsGroup.add("group");
            templateGroup.orientation = "row";
            templateGroup.margins = margins;
            templateGroup.hide();
//~             templateGroup.visible = false;
            templateGroup.maximumSize.height = (templateGroup.visible) ? 30 +margins : 0;
            
            var templateList =  templateGroup.add("dropdownlist",[0,0,180,30],["PNG RGB+A","PNG RGB","ProRes RGB+A","ProRes RGB"]);
            templateList.selection = (File(scriptSettings).exists && getSetting(scriptSettings,"template") != null) ? getSetting(scriptSettings,"template") : 2;
            setSetting (scriptSettings, "template", parseInt(templateList.selection));

            templateList.onChange = function(){
                setSetting (scriptSettings, "template", parseInt(templateList.selection));
                newLogEntry(logFile , "Template: " + parseInt(templateList.selection));
                };

            var qualityGroup = editOptionsGroup.add("group"); 
            qualityGroup.orientation = "row";
            qualityGroup.margins = margins;
            qualityGroup.spacing = spacing;
            qualityGroup.hide();
//~             qualityGroup.visible = false;
            qualityGroup.maximumSize.height = (qualityGroup.visible) ? 15 +margins : 0;
            
            var qualityText = qualityGroup.add("statictext",undefined,"Quality");
            var qualitySlider = qualityGroup.add("slider",[0,0,100,15]);
            qualitySlider.minValue = 1;
            qualitySlider.maxValue = 100;
            qualitySlider.value = (File(scriptSettings).exists && getSetting(scriptSettings,"quality") != null) ? getSetting(scriptSettings,"quality") : 70;
            setSetting (scriptSettings, "quality", parseInt(qualitySlider.value));
            
            var qualityValue = qualityGroup.add("edittext {justify:'center'}",[0,0,45,25]);
            qualityValue.text = (qualitySlider.value).toString();
            qualityValue.characters = 3;
            
            qualitySlider.onChanging = function(){
                    qualityValue.text = qualitySlider.value.toFixed();
                };
            qualityValue.onChanging = function(){
                qualitySlider.value = parseInt(qualityValue.text);
                };
            qualitySlider.onChange = function(){
                setSetting (scriptSettings, "quality", parseInt((qualitySlider.value)));
                newLogEntry(logFile , "Quality Slider: " + parseInt((qualitySlider.value)));
                };
            qualityValue.onChange = function(){
                this.text = String(Math.abs(this.text)).match(/^\d+$/)
                this.text = (this.text == "null") ? "1" : this.text;
                setSetting (scriptSettings, "quality", parseInt((qualitySlider.value)));
                newLogEntry(logFile , "Quality Text: " + parseInt((qualitySlider.value)));
                };
            
            var resizeGroup = editOptionsGroup.add("group");
            resizeGroup.orientation = "row";
            resizeGroup.margins = margins;
            resizeGroup.spacing = spacing;
            resizeGroup.hide();
//~             resizeGroup.visible = false;
            resizeGroup.maximumSize.height = (resizeGroup.visible) ? 25 +margins : 0;
            
            var checkResize = resizeGroup.add("checkbox",undefined,"Resize by Width");
            var resizeValue = resizeGroup.add("edittext {justify:'center'}",[0,0,55,25]);
            resizeValue.text = (File(scriptSettings.exists) && getSetting(scriptSettings,"width") != null) ? getSetting(scriptSettings,"width") : 540;
            checkResize.alignment = "bottom";
            checkResize.value = (File(scriptSettings).exists) ? getSetting(scriptSettings,"resize") : false;
            resizeValue.enabled = (checkResize.value) ? true : false;
            setSetting (scriptSettings, "resize", checkResize.value);
            setSetting (scriptSettings, "width", parseInt(resizeValue.text));
            
            checkResize.onClick = function(){
                    resizeValue.enabled = (checkResize.value) ? true : false;
                    if(checkResize.value){
                        setSetting (scriptSettings, "width", parseInt(resizeValue.text));
                        };
                    setSetting (scriptSettings, "resize", checkResize.value);
                    newLogEntry(logFile , "Check Resize: " + checkResize.value);
                };
            resizeValue.onChange = function(){
                this.text = String(Math.abs(this.text)).match(/^\d+$/)
                this.text = (this.text == "null") ? "100" : this.text;
                setSetting (scriptSettings, "width", parseInt(resizeValue.text));
                newLogEntry(logFile , "Width: " + parseInt(resizeValue.text));
                };
            
            var optionsGroup = editOptionsGroup.add("group");
            optionsGroup.hide();
//~             optionsGroup.visible = false;
            optionsGroup.maximumSize.height = (optionsGroup.visible) ? (15 + margins + spacing) * 3 +margins : 0;

            var rateGroup = optionsGroup.add("group");
            rateGroup.orientation = "row"
            rateGroup.alignChildren = "bottom";
            rateGroup.margins = margins;
            rateGroup.spacing = spacing;
            
            var checkRateAsComp = rateGroup.add("radiobutton",undefined,"As Comp");
            checkRateAsComp.value = (File(scriptSettings).exists && getSetting(scriptSettings,"frameRate") != null) ?  getSetting(scriptSettings,"frameRate") : true;
            setSetting (scriptSettings, "frameRate", checkRateAsComp.value);
            
            var checkRateCustom = rateGroup.add("radiobutton",undefined,"Custom");
            var rateCustomValue = rateGroup.add("edittext",[0,0,35,25],(File(scriptSettings.exists) && getSetting(scriptSettings,"fps") != null) ? getSetting(scriptSettings,"fps") : 12);
            checkRateCustom.value = (File(scriptSettings).exists && getSetting(scriptSettings,"frameRate") != null) ?  !(getSetting(scriptSettings,"frameRate")) : false;
            rateCustomValue.enabled = (checkRateCustom.value) ? true :  false;
            setSetting (scriptSettings, "fps", parseInt(rateCustomValue.text));
            
            checkRateAsComp.onClick = function(){
                    rateCustomValue.enabled = (checkRateCustom.value) ? true : false;
                    if(checkRateAsComp.value){
                        setSetting (scriptSettings, "frameRate", true);
                    };
                    if(checkRateCustom.value){
                        setSetting (scriptSettings, "frameRate", false);
                        setSetting (scriptSettings, "fps", parseInt(rateCustomValue.text));
                    };
                newLogEntry(logFile , "Check fps As Comp: " + checkRateAsComp.value);
                newLogEntry(logFile , "Check Custom Frame Rate: " + checkRateCustom.value);
                newLogEntry(logFile , "FPS text: " + parseInt(rateCustomValue.text));
                };
            checkRateCustom.onClick = function(){
                    rateCustomValue.enabled = (checkRateCustom.value) ? true : false;
                    if(checkRateAsComp.value){
                        setSetting (scriptSettings, "frameRate", true);
                    };
                    if(checkRateCustom.value){
                        setSetting (scriptSettings, "frameRate", false);
                        setSetting (scriptSettings, "fps", parseInt(rateCustomValue.text));
                    };
                newLogEntry(logFile , "Check fps As Comp: " + checkRateAsComp.value);
                newLogEntry(logFile , "Check Custom Frame Rate: " + rateCustomValue.value);
                newLogEntry(logFile , "FPS text: " + parseInt(rateCustomValue.text));
                };
            rateCustomValue.onChange = function(){
                this.text = String(Math.abs(this.text)).match(/^\d+$/)
                this.text = (this.text == "null") ? "1" : this.text;
                setSetting (scriptSettings, "fps", parseInt(rateCustomValue.text));
                newLogEntry(logFile , "FPS text: " + parseInt(rateCustomValue.text));
                };
            
            var outputGroup = editOptionsGroup.add("group");
            outputGroup.orientation = "column";
            outputGroup.alignChildren = "left";
            outputGroup.margins = margins;
            outputGroup.spacing = spacing;
            outputGroup.hide();
//~             outputGroup.visible = false;    
            outputGroup.maximumSize.height = (outputGroup.visible) ? (15 + margins + spacing) * 3 +margins : 0;
            
            var customPathGroup = outputGroup.add("group");
            var customOutputButton = customPathGroup.add("iconbutton",[0,0,25,25], folderClosed_PNG,{style:"toolbutton"});
            customOutputButton.addEventListener("mouseover", function(){this.icon = folderOpen_PNG;});
            customOutputButton.addEventListener("mouseout", function(){this.icon = folderClosed_PNG;});
            
            var customOutputPath = customPathGroup.add("edittext",[0,0,190,35], "" , {readonly:true});
            customPathGroup.margins = margins;
            customPathGroup.spacing = spacing;
            customOutputPath.text = (File(scriptSettings).exists && getSetting(scriptSettings,"folderOutputPath") != null)  ? getSetting(scriptSettings,"folderOutputPath") : "PATH";
            setSetting (scriptSettings, "folderOutputPath", customOutputPath.text);

            customOutputButton.onClick = function(){
                var customOutputFolder = Folder.desktop.selectDlg("Output Folder");
                customOutputPath.text = (customOutputFolder != null) ? customOutputFolder.fsName : customOutputPath.text;
                setSetting (scriptSettings, "folderOutputPath", customOutputPath.text);
                newLogEntry(logFile , "New Path Set: " + customOutputPath.text);
                };
            
            customOutputPath.onChange = function(){
                this.text = (Folder(this.text).exists) ? this.text : "Invalid Path";
                };
            
            var convertButton = exportGroup.add("button",[0,0,100,40],"Convert To GIF");
            convertButton.alignment = ["left","top"];
            convertButton.enabled = (File(scriptSettings).exists && getSetting(scriptSettings,"TestConvert") != null) ?  getSetting(scriptSettings,"TestConvert") : false;
            convertButton.visible = convertButton.enabled;

            convertButton.onClick = function(){
                gifQuality = String(qualityValue.text);
                gifWidth = String(resizeValue.text);
                gifFrameRate = String(rateCustomValue.text);
                gifLoop = "0";
                try{ convertVideoToGif(checkResize.value,!checkRateAsComp.value,checkOpenFinished.value,checkPlayFinished.value,checkKeepFiles.value); }
                catch(e){ gipherError("Unexpected error while converting:\n" + e.toString() + "\n(line " + e.line + ")"); };
                newLogEntry(logFile , "Convert Button: " + checkResize.value  + "||" +!checkRateAsComp.value);
                };
            
            var exportButton = exportGroup.add("button",[0,0,190,40],"Export GIF");
            exportButton.alignment = ["left","bottom"];
            exportButton.size.width = (convertButton.enabled) ? 100 : 190;
            
            exportButton.onClick = exportOnClick;
            
            var groupAfterSettings = editOptionsGroup.add("group");
            groupAfterSettings.orientation = "row";
            groupAfterSettings.alignment = "left";
            groupAfterSettings.margins = margins;
            groupAfterSettings.spacing = spacing;
            groupAfterSettings.hide();
//~             groupAfterSettings.visible = false;
            groupAfterSettings.maximumSize.height = (outputGroup.visible) ? 80 +margins : 0;
            
            var checkOpenFinished = groupAfterSettings.add("checkbox",undefined,"Open Folder");
            checkOpenFinished.value = (File(scriptSettings.exists) && getSetting(scriptSettings,"openFolderFinished") != null) ?  getSetting(scriptSettings,"openFolderFinished") : false;
            setSetting (scriptSettings, "openFolderFinished", checkOpenFinished.value);
            
            var checkPlayFinished = groupAfterSettings.add("checkbox",undefined,"Play Gif");
            checkPlayFinished.value = (File(scriptSettings.exists) && getSetting(scriptSettings,"playGIF") != null) ?  getSetting(scriptSettings,"playGIF") : true;
            setSetting (scriptSettings, "playGIF", checkPlayFinished.value);
            
            var checkKeepFiles = groupAfterSettings.add("checkbox",undefined,"Keep Files");
            checkKeepFiles.value = (File(scriptSettings.exists) && getSetting(scriptSettings,"keepFiles") != null) ?  getSetting(scriptSettings,"keepFiles") : false;
            setSetting (scriptSettings, "keepFiles", checkKeepFiles.value);
            
            checkOpenFinished.onClick = function(){
                setSetting (scriptSettings, "openFolderFinished", checkOpenFinished.value);
                newLogEntry(logFile , "Check Open When Finished: " + checkOpenFinished.value);
                };
            
            checkPlayFinished.onClick = function(){
                setSetting (scriptSettings, "playGIF", checkPlayFinished.value);
                newLogEntry(logFile , "Check Play When Finished: " + checkPlayFinished.value);
                };
            
            checkKeepFiles.onClick = function(){
                setSetting (scriptSettings, "keepFiles", checkKeepFiles.value);
                newLogEntry(logFile , "Check Keep Files: " + checkKeepFiles.value);
                };

            var testGroup = editOptionsGroup.add("group", undefined,"Test Options");
            testGroup.alignment = "fill";
            testGroup.hide();
//~             testGroup.visible = false;
            testGroup.maximumSize.height = (outputGroup.visible) ? 30 +margins : 0;

            var testConvertFuncion = testGroup.add("checkbox",undefined, "Convert To GIF");
            testConvertFuncion.helpTip = "Enable Convert Funcion\rAllows Convert Any (mov,avi,mp4,gif) video to GIF";
            testConvertFuncion.value = (File(scriptSettings.exists) && getSetting(scriptSettings,"TestConvert") != null) ?  getSetting(scriptSettings,"TestConvert") : false;
            setSetting (scriptSettings, "TestConvert", testConvertFuncion.value);
            convertButton.size.width = (testConvertFuncion.value) ? 100 : 0;
            
            testConvertFuncion.onClick = function(){
                if(this.value){
                    convertButton.enabled = true;
                    convertButton.size.width = 100;
                    exportButton.size.width = 100;
                    convertButton.visible = true;
                    };
                 if(!this.value){
                    convertButton.enabled = false;
                    convertButton.size.width = 0;
                    exportButton.size.width = 190;
                    convertButton.visible = false;
                    };
                
                mainWindow.layout.resize();
                mainWindow.layout.layout(true);
                
                setSetting (scriptSettings, "TestConvert", testConvertFuncion.value);
                newLogEntry(logFile , "Test Convert Function: " + testConvertFuncion.value);
                };
            
            var testWatchProgress = testGroup.add("checkbox",undefined, "Progress in Cosole");
            testWatchProgress.helpTip = "Watch Gif Creations in Windows Console";
            testWatchProgress.value = progressInConsole;
            
            testWatchProgress.onClick =function(){
                setSetting (scriptSettings, "console", this.value);
                progressInConsole = this.value;
                };
            
            var groups = [templateGroup, qualityGroup, resizeGroup, optionsGroup, outputGroup , groupAfterSettings, testGroup];
        
            function exportOnClick(){
                try{ exportActiveComp(); }
                catch(e){ gipherError("Unexpected error while exporting:\n" + e.toString() + "\n(line " + e.line + ")"); };
                };

            function exportActiveComp(){
                hideGroups(groups);
                var isPNG = templateList.selection.text.indexOf("PNG") != -1;
                if(!securityPref()) return gipherError(alertNetworkDisabled);
                if(!getComp()) return gipherError("No active composition.\nSelect a composition in the Project panel or open it in the timeline, then try again.");
                if(!getExtrasFolder().exists) return gipherError("The (AG-Extras) folder was not found.\nIt must be in the same folder as GIPHER.jsx:\n" + getExtrasFolder().fsName);
                if(!gifski.exists) return gipherError("gifski.exe was not found in:\n" + getExtrasFolder().fsName);
                if(!isPNG && !ffmpeg.exists) return gipherError("ffmpeg.exe was not found in:\n" + getExtrasFolder().fsName);
                if(!checkRateAsComp.value && !(parseFloat(rateCustomValue.text) > 0)) return gipherError("Custom frame rate is invalid: " + rateCustomValue.text);
                if(checkResize.value && !(parseInt(resizeValue.text) > 0)) return gipherError("Resize width is invalid: " + resizeValue.text);
                if(app.project.renderQueue.rendering) return gipherError("The Render Queue is already rendering. Wait for it to finish and try again.");

                gifFrameRate = (checkRateAsComp.value) ? String(getComp().frameRate) : String(rateCustomValue.text);
                gifQuality = String(qualityValue.text);
                gifWidth = (checkResize.value) ? String(resizeValue.text) : String(getComp().width);
                gifOutput = String(Folder(customOutputPath.text).fsName) ;
                gifLoop = "0";
                
                if(!(Folder(gifOutput).exists)){
                    return gipherError("Output path is invalid or doesn't exist:\n" + customOutputPath.text);
                    };

                clearRenderQueue(getRenderQueue());
                subFolder = createSubFolder (File(gifOutput), "\\" +"GIPHERrender")
                if(!subFolder.exists) return gipherError("Couldn't create the render folder (check write permissions):\n" + subFolder.fsName);
                var renderedPath = renderActiveComp(subFolder,outputTemplates[templateList.selection.index][0],outputTemplates[templateList.selection.index][1]);
                if(!renderedPath) return;
                renderedComp = File(renderedPath);
                newLogEntry(logFile , "Exported :" +  " || " + gifFrameRate+" || " +gifQuality+" || " +gifWidth+" || " +gifOutput+" || " +gifLoop+" || " +String(renderedComp.fsName)+" || " + parseInt(templateList.selection));
                
                if(isPNG){
                    exportGIF_PNG(checkOpenFinished.value,checkPlayFinished.value,checkKeepFiles.value);
                    }
                else{
                    exportGIF_ProRes(checkOpenFinished.value,checkPlayFinished.value,checkKeepFiles.value);
                    }
                $.line = 50;
                };
            
            var buttonCollapseTemplate = collapsableButtonsGroup.add("iconbutton", iconsSize ,templateCollapse,{style: "toolbutton", toggle: 0});
            buttonCollapseTemplate.helpTip = "Templates Options";
            
            var buttonCollapseQuality = collapsableButtonsGroup.add("iconbutton", iconsSize , qualityCollapse,{style: "toolbutton", toggle: 0});
            buttonCollapseQuality.helpTip = "Quality Options";
            
            var buttonCollapseRezise = collapsableButtonsGroup.add("iconbutton", iconsSize , resizeCollapse,{style: "toolbutton", toggle: 0});
            buttonCollapseRezise.helpTip = "Resize Options";
            
            var buttonCollapseOptions = collapsableButtonsGroup.add("iconbutton", iconsSize ,optionsCollapse,{style: "toolbutton", toggle: 0});
            buttonCollapseOptions.helpTip = "FPS Options";
            
            var buttonCollapseOutput= collapsableButtonsGroup.add("iconbutton", iconsSize , outputCollapse,{style: "toolbutton", toggle: 0});
            buttonCollapseOutput.helpTip = "Output Options";
            
            var buttonCollapseAfter= collapsableButtonsGroup.add("iconbutton", iconsSize , afterCollapse,{style: "toolbutton", toggle: 0});
            buttonCollapseAfter.helpTip = "After Finished Options";
            
            var buttonCollapseTest= collapsableButtonsGroup.add("iconbutton", iconsSize , testCollapse,{style: "toolbutton", toggle: 0});
            buttonCollapseTest.helpTip = "Test Options";
            
            
            buttonCollapseTemplate.onClick = function(){
                if(!groups[0].visible){
                    hideGroups(groups,0);
                    groups[0].visible = true;
                    groups[0].maximumSize.height = 40;
                    this.icon = templateOpen;
                    
                    
                    };
                else{
                    groups[0].hide();
                    groups[0].maximumSize.height = 0;
                    this.icon = templateCollapse;
                    };
                
                buttonCollapseQuality.icon =  qualityCollapse;
                buttonCollapseRezise.icon = resizeCollapse;
                buttonCollapseOptions.icon = optionsCollapse;
                buttonCollapseOutput.icon = outputCollapse;
                buttonCollapseAfter.icon = afterCollapse;
                buttonCollapseTest.icon = testCollapse;
                
                mainWindow.layout.layout(true);
                };
            buttonCollapseQuality.onClick = function(){
                if(!groups[1].visible){
                    hideGroups(groups,1);
                    groups[1].visible = true;
                    groups[1].maximumSize.height = 40;
                    this.icon = qualityOpen;
                    
                    };
                else{
                    groups[1].hide();
                    groups[1].maximumSize.height = 0;
                    this.icon = qualityCollapse;
                    };
                
                buttonCollapseTemplate.icon =  templateCollapse;
                buttonCollapseRezise.icon = resizeCollapse;
                buttonCollapseOptions.icon = optionsCollapse;
                buttonCollapseOutput.icon = outputCollapse;
                buttonCollapseAfter.icon = afterCollapse;
                buttonCollapseTest.icon = testCollapse;
                
                mainWindow.layout.layout(true);
                };
            buttonCollapseRezise.onClick = function(){
                if(!groups[2].visible){
                    hideGroups(groups,2);
                    groups[2].visible = true;
                    groups[2].maximumSize.height = 40;
                    this.icon = resizeOpen;
                    
                    };
                else{
                    groups[2].hide();
                    groups[2].maximumSize.height = 0;
                    this.icon = resizeCollapse;
                    };
                
                buttonCollapseTemplate.icon =  templateCollapse;
                buttonCollapseQuality.icon =  qualityCollapse;
                buttonCollapseOptions.icon = optionsCollapse;
                buttonCollapseOutput.icon = outputCollapse;
                buttonCollapseAfter.icon = afterCollapse;
                buttonCollapseTest.icon = testCollapse;
                
                mainWindow.layout.layout(true);
                
                };
            buttonCollapseOptions.onClick = function(){
                if(!groups[3].visible){
                    hideGroups(groups,3);
                    groups[3].visible = true;
                    groups[3].maximumSize.height = 40;
                    this.icon = optionsOpen;
                    
                    };
                else{
                    groups[3].hide();
                    groups[3].maximumSize.height = 0;
                    this.icon = optionsCollapse;
                    };
                
                buttonCollapseTemplate.icon =  templateCollapse;
                buttonCollapseQuality.icon =  qualityCollapse;
                buttonCollapseRezise.icon = resizeCollapse;
                buttonCollapseOutput.icon = outputCollapse;
                buttonCollapseAfter.icon = afterCollapse;
                buttonCollapseTest.icon = testCollapse;
                
                mainWindow.layout.layout(true);
                };
            buttonCollapseOutput.onClick = function(){
                if(!groups[4].visible){
                    hideGroups(groups,4);
                    groups[4].visible = true;
                    groups[4].maximumSize.height = 40;
                    this.icon = outputOpen;
                    };
                else{
                    groups[4].hide();
                    groups[4].maximumSize.height = 0;
                    this.icon = outputCollapse;
                    };
                
                buttonCollapseTemplate.icon =  templateCollapse;
                buttonCollapseQuality.icon =  qualityCollapse;
                buttonCollapseRezise.icon = resizeCollapse;
                buttonCollapseOptions.icon = optionsCollapse;
                buttonCollapseAfter.icon = afterCollapse;
                buttonCollapseTest.icon = testCollapse;
                
                mainWindow.layout.layout(true);
                };
            
            buttonCollapseAfter.onClick = function(){
                if(!groups[5].visible){
                    hideGroups(groups,5);
                    groups[5].show();
                    groups[5].maximumSize.height = 40;
                    this.icon = afterOpen;
                    
                    };
                else{
                    groups[5].hide();
                    groups[5].maximumSize.height = 0;
                    this.icon = afterCollapse;
                    };
                
                buttonCollapseTemplate.icon =  templateCollapse;
                buttonCollapseQuality.icon =  qualityCollapse;
                buttonCollapseRezise.icon = resizeCollapse;
                buttonCollapseOptions.icon = optionsCollapse;
                buttonCollapseOutput.icon = outputCollapse;
                buttonCollapseTest.icon = testCollapse;
                
                mainWindow.layout.layout(true);
                
                };
            
            buttonCollapseTest.onClick = function(){
                if(!groups[6].visible){
                    hideGroups(groups,6);
                    groups[6].maximumSize.height = 40;
                    groups[6].show();                    
                    this.icon = testOpen;
                    };
                else{
                    groups[6].maximumSize.height = 0;
                    groups[6].hide();
                    this.icon = testCollapse;
                    };
                
                buttonCollapseTemplate.icon =  templateCollapse;
                buttonCollapseQuality.icon =  qualityCollapse;
                buttonCollapseRezise.icon = resizeCollapse;
                buttonCollapseOptions.icon = optionsCollapse;
                buttonCollapseOutput.icon = outputCollapse;
                buttonCollapseAfter.icon = afterCollapse;
                
                mainWindow.layout.layout(true);
                };
           
            mainWindow.layout.layout(true);
            return mainWindow;
        }    
            var palette =  buildUI(thisObj);
            if(palette != null && palette instanceof Window){
                palette.show();
                }
    }
    script(this);
    
function hideGroups(groups,index){
    for(var i = 0 ; i < groups.length ; i++){
        if(i != index || index === undefined){
            groups[i].maximumSize.height = 0;
            groups[i].hide();
            };
        };                
    };

function exportGIF_PNG(open,play,keep){
    var tmpGIFPath = gifOutput+"\\"+String(getComp().name).replace(/\s/g,"")+".gif ";
    tmpGIFPath = tmpGIFPath.replace(/\\/g, "/");
    var gifName = incrementName(tmpGIFPath,".gif");
    var command_gifski = ("\"" +gifski.fsName + "\"" +" -r "+ gifFrameRate + " -W "+ gifWidth +" -Q " + gifQuality + " --repeat " + gifLoop +" -o " +"\"" +gifOutput +"\\"+gifName + "\"" +" "+ fixWhitespacePath (String(renderedComp.fsName))+"_*.png");
    
    newLogEntry(logFile , "Gif Name :" + gifName);
    newLogEntry(logFile , "Gifski Command :" +command_gifski);
    
    if(!executablesFolder.exists) executablesFolder.create();
    
    var batFile = File(executablesFolder.fsName + "/batExport.bat");
    batFile.remove();
    
    var vbsFile = File(executablesFolder.fsName + "/vbsExport.vbs");
    vbsFile.remove();
    
    var executeFile = generateExecutableFiles(batFile,vbsFile,
    [batFailCheck(command_gifski,"gifski"),
    (open) ? ("%SystemRoot%"+"\\"+"explorer.exe "+"\"" +gifOutput +"\"") : "",
    (play) ? ("\"" + gifOutput + "\\"+gifName + "\"") : "",
    (!keep) ? ("del /S /Q "+ "\"" + gifOutput + "\""+"\\"+"GIPHERrender") : "",
    (!keep) ? ("rmdir /s /q " + "\"" +gifOutput + "\"" +"\\"+"GIPHERrender") : "",
    ("del /S /Q " + "\"" + vbsFile.fsName + "\""),
    ("del /S /Q %0")
    ]);
    
    if(!executeFile.execute()) gipherError("Couldn't start the GIF conversion:\n" + executeFile.fsName);
    };

function exportGIF_ProRes(open,play,keep){
    if(!temp.exists) temp.create();
    var command_ffmpeg = ("\""+ffmpeg.fsName + "\""+ " -i " + "\""+String(renderedComp.fsName)+".mov" + "\""+" -vf scale="+gifWidth+":-1,fps="+gifFrameRate + " "+ "\""+temp.fsName+"\\"+String(getComp().name).replace(/\s/g,"")+"_%%d.png"+"\"");
    newLogEntry(logFile , "ffmpeg Command :" +command_ffmpeg);
    
    var tmpGIFPath = gifOutput+"\\"+String(getComp().name).replace(/\s/g,"")+".gif ";
    tmpGIFPath = tmpGIFPath.replace(/\\/g, "/");
    
    var gifName = incrementName(tmpGIFPath,".gif");
    var command_gifski = ( "\"" + gifski.fsName+ "\"" + " -r "+ gifFrameRate + " -W "+ gifWidth +" -Q " + gifQuality + " --repeat " + gifLoop + " -o " + "\""+ gifOutput +"\\"+gifName + "\""+" " + fixWhitespacePath (temp.fsName+"\\"+String(getComp().name).replace(/\s/g,"")) +"_*.png");
    newLogEntry(logFile , "Gif Name :" + gifName);
    newLogEntry(logFile , "Gifski Command :" +command_gifski);
    
    if(!executablesFolder.exists) executablesFolder.create();
    
    var batFile = File(executablesFolder.fsName + "/batExport.bat");
    batFile.remove();
    
    var vbsFile = File(executablesFolder.fsName + "/vbsExport.vbs");
    vbsFile.remove();
    
    var executeFile = generateExecutableFiles(batFile,vbsFile,
    [batFailCheck(command_ffmpeg,"ffmpeg"),
    batFailCheck(command_gifski,"gifski"),
    (open) ? ("%SystemRoot%"+"\\"+"explorer.exe "+"\"" +gifOutput +"\"") : "",
    (play) ? ("\"" + gifOutput + "\\"+gifName + "\"") : "",
    ("del /S /Q "+ "\"" + temp.fsName + "\""),
    (!keep) ? ("del /S /Q "+ "\"" + gifOutput + "\""+"\\"+"GIPHERrender") : "",
    (!keep) ? ("rmdir /s /q " + "\"" +gifOutput + "\"" +"\\"+"GIPHERrender") : "",
    ("del /S /Q " + "\"" + vbsFile.fsName + "\""),
    ("del /S /Q %0")
    ]);
    
    if(!executeFile.execute()) gipherError("Couldn't start the GIF conversion:\n" + executeFile.fsName);
    };

function convertVideoToGif(resize,changeRate,open,play,keep){
    var files = File.openDialog("Select Video Files", "*.mov;*.avi;*.mp4;*.gif", true);
    if(!files) return;
    if(!securityPref()) return gipherError(alertNetworkDisabled);
    if(!gifski.exists || !ffmpeg.exists) return gipherError("gifski.exe and ffmpeg.exe must be in the (AG-Extras) folder:\n" + getExtrasFolder().fsName);

    var width = new Array;
    var frameRate = new Array;
    
    for(var i = 0; i < files.length;i++){ 
        if(resize){
            width.push(gifWidth);
            };
        if(changeRate){
            frameRate.push(gifFrameRate);
            };
        if(!resize || !changeRate){
            var videoMeta = getVideoInfo(files[i]);
            if(!videoMeta) return gipherError("Couldn't read the video info (width / frame rate) of:\n" + files[i].fsName);
            if(!resize){
                width.push(videoMeta[0]);
                };
            if(!changeRate){
                frameRate.push(videoMeta[1]);
                };
            };
        };
    
    var tempFolder= createSubFolder(Folder(files[0].parent),"\\"+"GIPHERrender");
    
    if(!executablesFolder.exists) executablesFolder.create();
    
    var batFile = File(executablesFolder.fsName + "/batExport.bat");
    batFile.remove();
    
    var vbsFile = File(executablesFolder.fsName + "/vbsExport.vbs");
    vbsFile.remove();
    
    var commands = new Array;
    var executeFile = new File;
    
    if(open){commands.push("%SystemRoot%"+"\\"+"explorer.exe "+"\"" +Folder(files[0].parent).fsName +"\"")}

    for(var i = 0; i < files.length;i++){
        var fileName = String(files[i].displayName).split(".")[0];
        fileName = fileName.replace (/\s/g, "");
        var command_ffmpeg = ("\"" +ffmpeg.fsName + "\"" + " -i " + "\""+ files[i].fsName + "\""+ " -vf scale="+width[i]+":-1,fps="+frameRate[i]+" "+"\""+tempFolder.fsName+"\\"+fileName+"_%%d.png"+"\"");
        newLogEntry(logFile , "ffmpeg Command :" +command_ffmpeg);

        var outputGIF = File(Folder(files[i].parent).fsName + "\\" + fileName + ".gif ");
        var gifName = Folder(files[i].parent).fsName + "\\" + incrementName(outputGIF.fsName,".gif" );
        var command_gifski = ("\"" +gifski.fsName + "\"" + " -r "+ frameRate[i] + " -W "+ width[i] +" -Q " + gifQuality + " --repeat " + gifLoop + " --fast" +" -o " + "\"" + gifName + "\"" +" "+ "\"" + tempFolder.fsName + "\"" +"\\"+ fileName+"_*.png");
        
        newLogEntry(logFile , "Gif Name :" + gifName);
        newLogEntry(logFile , "Gifski Command :" +command_gifski);
        
        commands.push(batFailCheck(command_ffmpeg,"ffmpeg"),batFailCheck(command_gifski,"gifski"),
        (play) ? ("\""+gifName+"\"") : "");        
        };
    commands.push((!keep) ? "del /S /Q "+"\""+tempFolder.fsName+"\"" : "");
    commands.push((!keep) ? "rmdir /s /q "+"\""+tempFolder.fsName+"\"" : "");
    commands.push("del /S /Q " + "\"" + vbsFile.fsName + "\"");
    commands.push("del /S /Q %0");
    executeFile = generateExecutableFiles(batFile,vbsFile,commands);
    if(!executeFile.execute()) gipherError("Couldn't start the GIF conversion:\n" + executeFile.fsName);
    };

// On failure, shows a message box from the hidden batch and stops it (render files are kept for debugging).
function batFailCheck(command,label){
    if(!temp.exists) temp.create();
    var msgFile = temp.fsName + "\gipher_error.vbs";
    return command + ' || (echo MsgBox "' + scriptName + ': ' + label + ' failed while creating the GIF. Enable Progress in Console to see the details.",16,"' + scriptName + '" > "' + msgFile + '" & wscript "' + msgFile + '" & exit /b 1)';
    };

function generateExecutableFiles(batFile,vbsFile,commandLines){
    var vbsCommand = ('Set oShell = CreateObject ("Wscript.Shell")\r' + 'Dim strArgs\r' + 'strArgs = "cmd /c ' + "\"" + "\"" + batFile.fsName + "\"" + "\"" + "\"" +"\r"+'oShell.Run strArgs, 0, false');//batFile.fsName
    
    vbsFile.open("w")
//~     vbsFile.hidden = true;
    vbsFile.writeln(vbsCommand);
    vbsFile.close();
    
    batFile.open("w")
//~     batFile.hidden = true;
    
    for(var i = 0; i<commandLines.length; i++){
        batFile.writeln(commandLines[i]);
        }
    batFile.close();

    return (progressInConsole) ? batFile : vbsFile;
    };

function getVideoInfo(filePath){
    var file = File(filePath);
    if(!file.exists) return false;
    
    app.beginUndoGroup("Get File Info")
    var project = app.project;
    var tempFolder = project.items.addFolder("TempFolder");
    try{
        var tempItem = project.importFile(new ImportOptions(file));
    }catch(e){
        tempFolder.remove();
        app.endUndoGroup();
        return false;
        };
    tempItem.parent = tempFolder;

    var width = tempItem.width
    var frameRate = tempItem.frameRate;
    var hasVideo = tempItem.hasVideo;

    tempItem.remove()
    tempFolder.remove()
    if(!hasVideo){
        app.endUndoGroup();
        return false;
        };
    
    app.endUndoGroup();
    app.executeCommand(16);
    
    return [width,frameRate];
    };

function fixWhitespacePath(path){
    var splitedPath = path.split ("\\");
    var tempName = "\"";
    for(var i = 0 ; i < splitedPath.length  ; i++){
        tempName += splitedPath[i]; 
        if(i == splitedPath.length -2 ) tempName += "\"";
        if(i < splitedPath.length -1) tempName += "\\";
        };
    return tempName;
    };

function readTxt(file){
    if(!file) return;
    var currLine;
    var txtArr = [];
    file.open('r');
    while(!file.eof){
        currLine = file.readln();
        txtArr.push(currLine);
        }
    file.close();
    return txtArr;
    };

function renderActiveComp(outputFolder,template_Name,index){
    var comp = getComp();
    if(!comp) return gipherError("No active composition.");
    if(!outputFolder.exists) return gipherError("Render folder doesn't exist:\n" + outputFolder.fsName);
    
    var ext = (template_Name.indexOf("PNG") != -1) ? ".png" : ".mov";
    
    var outputFile = new File(outputFolder.fsName +"\\"+String(comp.name).replace(/\s/g,"") + ext);   
    outputFile =File(outputFolder.fsName +"\\" +  incrementName (outputFile.fsName, ext))
    var renderQueue = getRenderQueue();
    if(!renderQueue) return gipherError("Couldn't access the Render Queue.");
    var compQueue = renderQueue.items.add(comp);
    var module = compQueue.outputModule(1);
    module.file = outputFile;
    
    var templateName = template_Name;
    var outputTemplate = (isTemplate(module,templateName,index))? templateName : importTemplateProject(templateName,index);
    
    if(!outputTemplate || !isTemplate(module,templateName)){
        compQueue.remove();
        if(outputTemplate) gipherError("Output module template \"" + templateName + "\" was saved but After Effects doesn't list it.\nTry restarting After Effects.");
        return;
        };
    try{
        module.applyTemplate(outputTemplate);
    }catch(e){
        compQueue.remove();
        return gipherError("Couldn't apply output module template \"" + templateName + "\":\n" + e.toString());
        };
    
    var base = outputFile.fsName.slice(0, -ext.length);
    try{
        renderQueue.render();
    }catch(e){
        return gipherError("Render failed:\n" + e.toString());
        };
    
    if(compQueue.status != RQItemStatus.DONE) return gipherError("Render did not finish (status: " + compQueue.status + ").\nIt may have been stopped, or After Effects reported an error. Check the Render Queue panel.");
    var rendered = (ext == ".png") ? outputFolder.getFiles(File(base).displayName + "*.png") : [File(base + ".mov")];
    if(!rendered.length || !File(rendered[0]).exists) return gipherError("Render finished but no output file was found in:\n" + outputFolder.fsName);
    
    return base;
    };

function getRenderQueue(){
    var renderQueue = app.project.renderQueue;
    return (renderQueue && renderQueue instanceof RenderQueue) ? renderQueue : false;
    };

function importTemplateProject(template_Name,index){
    var project = app.project;
    var renderQueue = project.renderQueue;
    if(!renderQueue) return gipherError("Couldn't access the Render Queue.");
    
    var templateName = template_Name;
    var templateFile= File(getExtrasFolder().fsName+"\\"+"gipher_templates.aepx")
    if(!templateFile.exists) return gipherError("Template project not found:\n" + templateFile.fsName + "\n\nCopy the whole (AG-Extras) folder next to GIPHER.jsx.");
    try{
        var alphaTemplate = project.importFile(new ImportOptions(templateFile));
    }catch(e){
        return gipherError("Couldn't import the template project:\n" + templateFile.fsName + "\n\n" + e.toString());
        };
    var itemIndex = getRenderItem(renderQueue,index);
    if(!itemIndex){
        alphaTemplate.remove();
        return gipherError("The template project has no render queue item for \"" + index + "\".\nThe gipher_templates.aepx file may be damaged or outdated.");
        };
    var module = renderQueue.item(itemIndex).outputModule(1);
    if(isTemplate(module,templateName)){
        alphaTemplate.remove();
        return templateName;
        };
    try{
        module.saveAsTemplate(templateName);
    }catch(e){
        alphaTemplate.remove();
        return gipherError("Couldn't save output module template \"" + templateName + "\":\n" + e.toString());
        };
    alphaTemplate.remove();
    return templateName;
    };

function gipherError(message){
    try{ newLogEntry(logFile , "ERROR: " + message); }catch(e){};
    alert(scriptName + " " + version + "\n\n" + message, scriptName, true);
    return false;
    };

function isTemplate(module,template){
    for(var i = 0; i< module.templates.length;i++){
        if(module.templates[i] == template)
            return true;
        };
    return false;
    };

function getRenderItem(renderQueue,item){
    for(var i = 1;i <= renderQueue.numItems; i++){
        if(renderQueue.item(i).comp.name == item){
            return i;
            };
        };
    return false;
    };

function clearRenderQueue(queue){
    for(var i = queue.numItems; i >= 1; i--){
        queue.item(i).remove();
        };
    };

function incrementName(filePath,extension){
    var file = File(filePath.replace(/\\/g,"/"));
    var folder  = Folder(file.parent);
    var fileExists = (file.exists) ? true : false ;
    var fileName = file.displayName;
    var increment = 1;
    
    while(fileExists){
        var name = getFileName(file.displayName,extension);
        
        if(!isIncrement(name)){
             fileName = name + "-" + increment + extension;
             file =  File(folder.fsName + "\\" + fileName);
            }else{
            increment = getIncrement(name);
            file =  File(folder.fsName + "\\" + name.slice(0,-(String(increment).length)) + (parseInt(increment)+1) + extension);
            };
        if(!file.exists){
            fileName = file.displayName;
            fileExists = false;
            };
        };

    return fileName;
    };

function getFileName(displayName,extension){
     return displayName.slice(0,displayName.length-extension.length);
    };

function isIncrement(name){
    return !isNaN(name.split("-").pop());
    };

function getIncrement(name){
    return name.split("-").pop();
    };

function getExtrasFolder(){
    return Folder((File($.fileName).parent).fsName + "\\"+"(AG-Extras)");
    };

function createHiddenFile(file){
    file = File (file.fsName+".mov");
    if(!file.exists){
        file.open("w");
        file.write(" ");
        file.close();
//~         file.hidden = true;
        };
    return file.fsName;
    };

function createSubFolder(parent,name){
    var newSubFolder = Folder(parent.fsName + name);
    if(!newSubFolder.exists){
        newSubFolder.create();
        return Folder(newSubFolder);
        };
    return Folder(newSubFolder);
    };
function removeFolder(folder){
    var files = folder.getFiles();
    for(var i = 0; i < files.length; i++){
        File(files[i]).remove();
        };
    folder.remove();
    };

function getComp(){
    var comp = app.project.activeItem;
    return (comp && comp instanceof CompItem) ? comp : false;
    };

function getFolderAeFile(check){
    if(check){
        if(app.project.file == null){
            return "Project Unsaved";
            };
        if(app.project.file != null){
            return app.project.file.parent.fsName;
            };
        };
    return null;
    };

function getUserDataFolder() {
        if (!securityPref()) {
                app.executeCommand(2359);
            if (!securityPref()) {
                return null;
            }
        }   
        var userDataFolder = Folder.userData;
        var scriptFolder = new Folder(userDataFolder.fsName + "\\" + "AGS-Scripts"+"\\" +scriptName);
        
        if (!scriptFolder.exists) {
            scriptFolder.create();
            if (!scriptFolder.exists) {
                alert("Error creating " + scriptName + " \nCouldn't create folder " + scriptName + " in " + userDataFolder.fsName);
                scriptFolder = Folder.temp;
                return scriptFolder.fsName;
                }
            return scriptFolder.fsName;
            }
        scriptFolder = new Folder(scriptFolder.fsName);
        if (!scriptFolder.exists) {
            scriptFolder.create();
            }
        return scriptFolder.fsName;
    };
function createPNG(iconName, iconBinary, scriptIconsFolder) {
        if (!securityPref()) {
                app.executeCommand(2359);
            if (!securityPref()) {
                return null;
            };
        };
        var iconsFolder = Folder(scriptIconsFolder);
        
        if (!iconsFolder.exists) {
            iconsFolder.create();
            };
        var iconPNG =  File(iconsFolder.fsName+ "\\" + iconName);

        if (!iconPNG.exists) {
            iconPNG.encoding = "BINARY";
            iconPNG.open("w");
            iconPNG.write(iconBinary);
            iconPNG.close();
            };
        return iconPNG;
    };
function getJSONFile(file){
    file = File(file);
    var parentFolder = Folder(file.parent);
    if(!parentFolder.exists){
        parentFolder.create();
        }
    if(!file.exists){
        var empty = {};
        file.open("a");
        file.write(JSON.stringify(empty,undefined,"\t"));
        file.close();
        return file.fsName;
        };
    return file.fsName
    };

function getSetting(settingsJSON,name){
    settingsJSON = File(getJSONFile(File(settingsJSON)));
    settingsJSON.open("r");
    var data = settingsJSON.read();
    settingsJSON.close();
    data = JSON.parse(data);
//~     if(!data[name]){
//~         return null;
//~         };
    return data[name];
    };

function setSetting(settingsJSON,name,value){
    settingsJSON = File(getJSONFile(File(settingsJSON)));
    settingsJSON.open("r");
    var data = settingsJSON.read();
    settingsJSON.close();
    data = JSON.parse(data);
    data[name] = value;
    settingsJSON.open("w");
    settingsJSON.write(JSON.stringify(data,undefined,"\t"));
    settingsJSON.close();
    };

function newLogEntry(logFile,logLine){
    var file = File(logFile);
    if(!file.exists){
        createFile(file.fsName);
        };
    var date = new Date();
    file.open("a");
    file.writeln (date.toString() + " || "+ logLine);
    file.close();
    };

function createFile(filePath){
    var file = File(filePath);
    var parentFolder = Folder(file.parent);
    if(!parentFolder.exists){
        parentFolder.create();
        }
    if(file.exists){
        return file;
        };
    file.open("w");
    file.write("")
    file.close()
    return file;
    };

function securityPref() {
    try {
        var securityNetworkSetting = app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
        return Boolean(securityNetworkSetting);
    } catch (err) {
        return false;
    }
}
function openURL(url) {
    if (!securityPref()) {
        alert(alertNetworkDisabled);
        return;
        }
    system.callSystem("cmd /c start \"q\" \"" + url + "\"");
    };

}
