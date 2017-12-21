function getQueryString(name) {
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if(r!=null)return  decodeURI(r[2]); return null;
}

export function getLocalValue(key) {
    let lang = getQueryString("lang") || "CN";
    if (lang === "EN") {
        return window.EN[key];
    }
    return window.CN[key];
}