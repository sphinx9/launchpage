/* 
*   Links array
*   
*   "Title:"url"
*   Icons should be placed in folder, named like <Title>.png
*/

links = {
    "Messenger"     : "https://messenger.com",
    "Telegram"      : "https://web.telegram.org",
    "WhatsApp"      : "https://web.whatsapp.com",
    "Skype"         : "https://web.skype.com"
};

linksMarkup = "<ul>";
for (var key in links) {
    var linkTitle = key,
       linkIcon  = key+'.png',
       linkURL   = links[key];
    linksMarkup += "<li id='"+linkTitle+"'><a href='"+linkURL+"'><img src='img/icons/"+linkIcon+"'/></a></li>";
}
linksMarkup += "</ul>";
document.getElementById('links').innerHTML = linksMarkup;