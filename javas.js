function openMenu() {
  if (document.getElementById("mopen").title === "menuclose") {
    document.getElementById("sideMenu").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.getElementById("main").style.marginLeft = "-250px";
    document.getElementById("mopen").src = "media/close.png";
    document.getElementById("mopen").title = "menuopen";
  }
  else {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("mopen").src = "media/menu.png";
    document.getElementById("mopen").title = "menuclose";
  }
}