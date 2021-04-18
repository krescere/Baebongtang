const urlUos = "https://www.uos.ac.kr";
const urlDomitory = "https://dormitory.uos.ac.kr/";
const urlPortal = "https://portal.uos.ac.kr/";
const urlEverytime = "https://everytime.kr/";
const urlUosTime = "https://uostime.herokuapp.com/";
const urlUosCalendar = "https://www.uos.ac.kr/korCalendarYear/list.do?list_id=CA1&epTicket=LOG";
const urlGeneralNotice = "https://www.uos.ac.kr/korNotice/list.do?list_id=FA1&epTicket=LOG";
const urlAcademicNotice = "https://www.uos.ac.kr/korNotice/list.do?list_id=FA2&epTicket=LOG";
const urlSuggestion = "https://open.kakao.com/o/syYpoL8c";

function openUrl(url) {
    whale.tabs.create({ url });
}

document.getElementById('clickUos').addEventListener('click', () => { openUrl(urlUos) }, false);
document.getElementById('clickDomitory').addEventListener('click', () => { openUrl(urlDomitory) }, false);
document.getElementById('clickPortal').addEventListener('click', () => { openUrl(urlPortal) }, false);
document.getElementById('clickEverytime').addEventListener('click', () => { openUrl(urlEverytime) }, false);
document.getElementById('clickUosTime').addEventListener('click', () => { openUrl(urlUosTime) }, false);
document.getElementById('clickUosCalendar').addEventListener('click', () => { openUrl(urlUosCalendar) }, false);
document.getElementById('clickGeneralNotice').addEventListener('click', () => { openUrl(urlGeneralNotice) }, false);
document.getElementById('clickAcademicNotice').addEventListener('click', () => { openUrl(urlAcademicNotice) }, false);
document.getElementById('clickSuggestion').addEventListener('click', () => { openUrl(urlSuggestion) }, false);