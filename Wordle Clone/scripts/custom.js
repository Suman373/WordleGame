const _0x13075c=_0x5ccd;(function(_0x20e935,_0xe3ff62){const _0x595e57=_0x5ccd,_0x140de1=_0x20e935();while(!![]){try{const _0x576286=parseInt(_0x595e57(0x13d))/0x1+-parseInt(_0x595e57(0x119))/0x2+-parseInt(_0x595e57(0x128))/0x3+-parseInt(_0x595e57(0x13a))/0x4+parseInt(_0x595e57(0x132))/0x5+-parseInt(_0x595e57(0x12a))/0x6*(parseInt(_0x595e57(0x149))/0x7)+parseInt(_0x595e57(0x115))/0x8;if(_0x576286===_0xe3ff62)break;else _0x140de1['push'](_0x140de1['shift']());}catch(_0x2e02ae){_0x140de1['push'](_0x140de1['shift']());}}}(_0x41f5,0xd1357));const tileContainer=document[_0x13075c(0x123)](_0x13075c(0x136)),keyContainer=document[_0x13075c(0x123)](_0x13075c(0x11d)),guessRows=[['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']];guessRows[_0x13075c(0x12f)]((_0x31d379,_0x316ed3)=>{const _0x421ff1=_0x13075c,_0x2deaa8=document[_0x421ff1(0x130)](_0x421ff1(0x120));_0x2deaa8[_0x421ff1(0x124)]('id','row-'+_0x316ed3),_0x31d379[_0x421ff1(0x12f)]((_0x363855,_0x4a4569)=>{const _0xe98c8e=_0x421ff1,_0x307284=document['createElement'](_0xe98c8e(0x120));_0x307284[_0xe98c8e(0x124)]('id',_0xe98c8e(0x144)+_0x316ed3+_0xe98c8e(0x122)+_0x4a4569),_0x307284['classList'][_0xe98c8e(0x12d)]('tiles-style'),_0x2deaa8[_0xe98c8e(0x127)](_0x307284);}),tileContainer[_0x421ff1(0x127)](_0x2deaa8);});const keys=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L',_0x13075c(0x13f),'Z','X','C','V','B','N','M','<<'];keys[_0x13075c(0x12f)](_0x36e00d=>{const _0x2ffdc8=_0x13075c,_0x3a2732=document[_0x2ffdc8(0x130)](_0x2ffdc8(0x14a));_0x3a2732[_0x2ffdc8(0x124)]('id',_0x36e00d),_0x3a2732['innerHTML']=_0x2ffdc8(0x12e)+_0x36e00d+_0x2ffdc8(0x148),_0x3a2732[_0x2ffdc8(0x11e)](_0x2ffdc8(0x143),()=>handleClick(_0x36e00d)),keyContainer['append'](_0x3a2732);});const handleClick=_0x263828=>{addLetter(_0x263828);};let message=document[_0x13075c(0x11b)]('suitablemsg');message[_0x13075c(0x125)]='Start\x20guessing\x20the\x20word!';let row=0x0,column=0x0,deleteLetter,wordArray=[];function _0x5ccd(_0x4fc63e,_0x1ee8f6){const _0x41f59d=_0x41f5();return _0x5ccd=function(_0x5ccdd7,_0x4672c7){_0x5ccdd7=_0x5ccdd7-0x114;let _0x1dc6c3=_0x41f59d[_0x5ccdd7];return _0x1dc6c3;},_0x5ccd(_0x4fc63e,_0x1ee8f6);}const addLetter=_0x27849a=>{const _0x221696=_0x13075c;if(column>=0x0&&column<0x5&&_0x27849a!=='<<'&&_0x27849a!=='Enter'){const _0x55aa08=document['getElementById']('row-'+row+_0x221696(0x122)+column);_0x55aa08[_0x221696(0x125)]=''+_0x27849a,wordArray[_0x221696(0x134)](_0x27849a),column++;}column>0x0&&column<0x5&&_0x27849a==='<<'&&(deleteLetter=document[_0x221696(0x11b)](_0x221696(0x144)+row+_0x221696(0x122)+--column),deleteLetter[_0x221696(0x117)]='',wordArray[_0x221696(0x13c)](deleteLetter),message[_0x221696(0x125)]=_0x221696(0x145),setTimeout(()=>{message['textContent']='';},0x258));_0x27849a===_0x221696(0x13f)&&(message[_0x221696(0x125)]='Fill\x20your\x20word\x20first\x20');column>0x4&&(_0x27849a==='<<'&&(deleteLetter=document[_0x221696(0x11b)](_0x221696(0x144)+row+_0x221696(0x122)+--column),wordArray[_0x221696(0x13c)](deleteLetter),deleteLetter[_0x221696(0x117)]=''),message[_0x221696(0x125)]=_0x221696(0x126));;if(column===0x5&&_0x27849a==_0x221696(0x13f)){let _0x12775d=wordArray[_0x221696(0x116)]('');console[_0x221696(0x12c)](_0x221696(0x131),_0x12775d),message['textContent']='Your\x20Word:\x20'+_0x12775d,checkarray(_0x12775d,row),wordArray=[],column=0x0,row++;}row>0x5&&(message[_0x221696(0x140)]['color']=_0x221696(0x13b),message[_0x221696(0x117)]='You\x20chances\x20are\x20over',setTimeout(()=>{const _0xdda1f9=_0x221696;message[_0xdda1f9(0x117)]=_0xdda1f9(0x139)+wordle;},0x7d0),playornot(0xfa0));};let mystring=_0x13075c(0x137);mystring=mystring[_0x13075c(0x142)](),console[_0x13075c(0x12c)](mystring);function _0x41f5(){const _0x58045f=['4992010jbOZoO','#808080','push','https://whydidntyouplay','.tiles-container','speak\x20stage\x20brain\x20where\x20alter\x20sleep\x20peter\x20group\x20fruit\x20might\x20brown\x20proof\x20point\x20crown\x20cable','#257028','The\x20word\x20was:\x20','530516EQwntj','red','pop','663029ZvluNC','.loading-container','Enter','style','.game-container','toUpperCase','click','row-','Erasing\x20letter!','background','sexy-tiles','</p>','7WqhamM','button','Wordlastic!You\x20have\x20won!!!','classList','reload','includes','13791456nUAxxb','join','innerText','location','1311530qNNsyA','#ebbd34','getElementById','random','.key-container','addEventListener','display','div','block','-tile-','querySelector','setAttribute','textContent','Click\x20enter\x20to\x20confirm!','append','3729864LoDqdq','split','2980572haoJah','footer','log','add','<p>','forEach','createElement','String\x20is'];_0x41f5=function(){return _0x58045f;};return _0x41f5();}let wordleArray=mystring[_0x13075c(0x129)]('\x20');const wordle=wordleArray[Math['floor'](Math[_0x13075c(0x11c)]()*0xf)];let count=0x0;const checkarray=(_0x5a4862,_0x5250e2)=>{const _0x101861=_0x13075c;let _0x3efefd,_0x2cfca;for(let _0x200fdb=0x0;_0x200fdb<0x5;_0x200fdb++){if(wordle[_0x200fdb]===_0x5a4862[_0x200fdb])_0x3efefd=document[_0x101861(0x11b)](_0x101861(0x144)+_0x5250e2+_0x101861(0x122)+_0x200fdb),_0x2cfca=document[_0x101861(0x11b)](''+wordle[_0x200fdb]),count++,_0x3efefd[_0x101861(0x14c)][_0x101861(0x12d)](_0x101861(0x147)),_0x2cfca['style'][_0x101861(0x146)]=_0x101861(0x138),_0x3efefd[_0x101861(0x140)][_0x101861(0x146)]=_0x101861(0x138);else wordle[_0x101861(0x114)](_0x5a4862[_0x200fdb])?(_0x3efefd=document[_0x101861(0x11b)](_0x101861(0x144)+_0x5250e2+_0x101861(0x122)+_0x200fdb),_0x2cfca=document[_0x101861(0x11b)](''+_0x5a4862[_0x200fdb]),_0x3efefd[_0x101861(0x14c)][_0x101861(0x12d)](_0x101861(0x147)),_0x2cfca[_0x101861(0x140)]['background']=_0x101861(0x11a),_0x3efefd[_0x101861(0x140)]['background']=_0x101861(0x11a)):(_0x3efefd=document['getElementById'](_0x101861(0x144)+_0x5250e2+'-tile-'+_0x200fdb),_0x3efefd['classList'][_0x101861(0x12d)](_0x101861(0x147)),_0x3efefd['style']['background']=_0x101861(0x133));}_0x5a4862='';if(count===0x5)message[_0x101861(0x117)]=_0x101861(0x14b),playornot(0xfa0),count=0x0,_0x5250e2=0x0,column=0x0;else count<0x5&&(count=0x0);},playornot=_0x40858a=>{setTimeout(_0x16cde0=>{const _0x2f5543=_0x5ccd;let _0x1f3d39=confirm('Do\x20you\x20want\x20to\x20play\x20again?');if(_0x1f3d39)window[_0x2f5543(0x118)][_0x2f5543(0x14d)]();else{if(!_0x1f3d39)window[_0x2f5543(0x118)]['replace'](_0x2f5543(0x135));}},_0x40858a);},mainScreen=document[_0x13075c(0x123)](_0x13075c(0x141)),loadScreen=document[_0x13075c(0x123)](_0x13075c(0x13e)),footer=document[_0x13075c(0x123)](_0x13075c(0x12b));setTimeout(()=>{const _0x191427=_0x13075c;loadScreen[_0x191427(0x140)][_0x191427(0x11f)]='none',mainScreen[_0x191427(0x140)][_0x191427(0x11f)]=_0x191427(0x121),footer['style'][_0x191427(0x11f)]='block';},0x1388);