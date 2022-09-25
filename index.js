exports.makeDropDown = function(divDropDown) {
    const dropBtn = divDropDown.children[0];
    const divDropDownContent = divDropDown.children[1];
    const ulDropDown = divDropDownContent.children[0];
    const listItemArray = ulDropDown.children;

    ulDropDown.style.listStyleType = "none";
    divDropDownContent.style.display = "none";
}