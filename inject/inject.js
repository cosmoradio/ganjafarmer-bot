//injected_main();
var login_us = ""
var login_pw = ""

var last = null;
var timer = 6000

function injected_main(){
   __loger('injected!');
   __add_exp_proc()
   if(__control())main_loop();

}

function log_in(){
  let n = document.querySelector("[name='nick']");
  n.value = login_us
  let p = document.querySelector("[name='password']");
  p.value = login_pw
  last = "login";
  document.querySelector("[value='войти']").click();
}



function main_loop(){
  // тут,потому что иногда на других страницах появляються повторные ссылки и скрипт уходит в рекурсию
  if (__chk_link("?page=login_page")) {  log_in()  }
  //else if (((__get_el_by_txt(" Озеро").getElementsByTagName("span")[0]).innerHTML == "(+)") != undefined) {
  else if ((__get_el_by_txt(" Озеро").getElementsByTagName("span")[0]) != undefined && window.location.search != "?page=fishing2") {
    __goto_page("http://ganjafarm.ru/?page=fishing2")
  }
  if (__chk_link("?page=fishing")) { check_fishing()}
  else if (__chk_link("?page=blocks")) { check_plants()}
  else if (__chk_link("?page=labs"))  {  check_labs()}
  else if (__chk_link("?page=labplant")){check_labplant()}
  else if (__chk_link("?page=kopt") )  { check_kopt()}
  else if (window.location.href == "http://ganjafarm.ru/")  {check_award()}
  else if (__chk_link("?page=ruletka")) {__loger("casino");check_ruletka()}
  else if (__chk_link("?page=dquests")){__loger("awards");check_award_2()}
  else if (__chk_link("?page=mypets")){__loger("pets");check_my_pets()}
  else if (__chk_link("?page=hunting")){__loger("hunting");check_hunting()}
  //if (window.location.href == "http://ganjafarm.ru/?page=hreward") check_award()
  __loger("set timer")

  localStorage["ganjafarm_bot_id_timer"] = setTimeout(__goto_page, timer, "http://ganjafarm.ru/?page=fishing2");
  _find_valtake();

}

function check_fishing(){
  if(__get_el_by_txt(" Закинуть удочку "))__get_el_by_txt(" Закинуть удочку ").click() // if we need cutch da fish
  if(__get_el_by_txt(" Тянуть ")) __get_el_by_txt(" Тянуть ").click()
  let t = "Вы закинули удочку и теперь сидите, ждете, когда же рыба клюнет."
  if(__get_el_by_txt(t,"div")){
    __goto_page("http://ganjafarm.ru/?page=blocks")
  }
  return false;
}

function check_plants(){

  if(__get_el_by_txt(" Полить всё")) { __get_el_by_txt(" Полить всё").click() }
  else if(__get_el_by_txt(" Собрать всё")) { __get_el_by_txt(" Собрать всё").click() }
  else if(__get_el_by_txt(" Вскопать всё")) { __get_el_by_txt(" Вскопать всё").click() }
  else if(__get_el_by_txt("Удобрить всё:","div")){
    __get_el_by_txt("Удобрить всё:","div").getElementsByTagName('a')[0].click()
  }
  else if(__get_el_by_txt("Засеять всё:","div")){
    __get_el_by_txt("Засеять всё:","div").getElementsByTagName('a')[0].click()
  }
  else { __goto_page("http://ganjafarm.ru/?page=labs") }
}

function check_labs(){

  if(__get_el_by_txt(" Завершить всё")) { __get_el_by_txt(" Завершить всё").click() }
  else if(__get_el_by_txt(" Помыть всё")) { __get_el_by_txt(" Помыть всё").click() }
  else if(__get_el_by_txt(" Взболтать всё")) { __get_el_by_txt(" Взболтать всё").click() }
  else if(__get_el_by_txt(" Поместить на все столы")) { __get_el_by_txt(" Поместить на все столы").click() }
  else { __goto_page("http://ganjafarm.ru/?page=kopt") }

}

function check_labplant(){

  if (__get_el_by_txt(" Выбрать ")) { __get_el_by_txt(" Выбрать ").click() }
  else if (__get_el_by_txt("Растение помещено в лабораторию.", "div")){
    __goto_page("http://ganjafarm.ru/?page=kopt")
  }
}

function check_award(){
  if(__get_el_by_txt(" Получить награду за онлайн ")){
    __get_el_by_txt(" Получить награду за онлайн ").click()
  }
  else{ __goto_page("http://ganjafarm.ru/?page=ruletka")}
  return false;
}

function check_kopt(){
  if(__get_el_by_txt(" Помыть всё")) { __get_el_by_txt(" Помыть всё").click() }
  else if(__get_el_by_txt(" Завершить всё")) { __get_el_by_txt(" Завершить всё").click() }
  else if(__get_el_by_txt(" Перевернуть")) { __get_el_by_txt(" Перевернуть").click() }
  else if(__get_el_by_txt(" Поместить во все коптильни")) { __get_el_by_txt(" Поместить во все коптильни").click() }
  else if(__get_el_by_txt("Выбор рыбы для копчения","h1")) {
    if (__get_el_by_txt(" Выбрать ")) { __get_el_by_txt(" Выбрать ").click() }
  }
  else { __goto_page("http://ganjafarm.ru/") }
  return false;
}

function check_ruletka(){
  //"http://ganjafarm.ru/?page=ruletka"
  if (__get_el_by_txt("Да не то слово!")) { __get_el_by_txt("Да не то слово!").click() }
  else { __goto_page("http://ganjafarm.ru/?page=dquests") }
}

function check_award_2(){
  if(__get_el_by_txt(" Забрать награду ")){
    __get_el_by_txt(" Забрать награду ").click()
  }
  else{ __goto_page("http://ganjafarm.ru/?page=mypets") }
}

function check_my_pets(){

  if(__get_el_by_txt(" Покормить ")){
    __get_el_by_txt(" Покормить ").click()
  }
  else if (__get_el_by_txt(" Поиграть")){
    __get_el_by_txt(" Поиграть").click()
  }
  else if (__get_el_by_txt(" Собрать ")){
    __get_el_by_txt(" Собрать ").click()
  }
  else{ __goto_page("http://ganjafarm.ru/?page=hunting") }
}
function check_hunting(){

  if(__get_el_by_txt(" Начать охоту ")){
    __get_el_by_txt(" Начать охоту ").click()
  }
  else if (__get_el_by_txt(" Стрелять ")){
    __get_el_by_txt(" Стрелять ").click()
  }
  //else if (__get_el_by_txt(" Бродить ")){}
}



function _find_valtake(){
  let z = document.getElementsByTagName("a")
  for (var y = 0;y<z.length;y++){
    if((z[y].href).indexOf("valtake=") != -1 & z[y].parentElement.style.display != "none"){
      if( (z[y].getElementsByTagName("img")[0].src).indexOf("icons/leaf")){

        z[y].click()
      }
    }
  }
}


function __chk_link(l){
  return ((window.location.search).indexOf(l) == -1)? false : true; // ternar operatin!
}

function __get_el_by_txt(t, el='a'){
  var xpath = "//"+el+"[text()='"+t+"']";
  return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function __goto_page(l){
  __loger("go to link "+l)
  window.location = l
}

function __loger(t){
  console.log("[ganjafarm_bot] : "+t)
}

function __add_exp_proc(){
  if(!document.getElementsByClassName("expline")[0])return true
  let e = document.getElementsByClassName("expline")[0].style.width
  let p = document.querySelector("[src='images/icons/m.png']").parentElement
  p.innerHTML += " ("+e+") "
  let s = (__control())?"checked" : ""
  p.innerHTML += '<input type="checkbox" onchange="__control(true)" id="accept" style="margin:0;padding:0;width:auto;height:auto" '+s+'> Ganjafarm_bot'
}

function __control(i=false){
  //document.getElementById("accept").checked = __mem_r(k)
  let k = "ganjafarm_bot_work"
  if(i){
    let m = localStorage[k]
    if(localStorage[k] == 0 | localStorage[k] == undefined){
      localStorage[k] = 1
      main_loop();
    }else{
      localStorage[k] = 0;
      clearTimeout(localStorage["ganjafarm_bot_id_timer"])
    }
    let n = localStorage[k]
    document.getElementById("accept").checked = !!Number(localStorage[k])
  }
  return !!Number(localStorage[k])
}
