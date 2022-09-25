# makeDropDown
A person node package that turns a specific HTML element structure into an animated drop down menu.

## How to use ##
1. Make sure to import the makeDropDown function from makeDropDown.js using either require() or import().
2. In your Javascript file, query the html document for the drop down menu element.
    1. Your drop down menu element must have this structure:
    ```html
    <div class="dropdown">
        <button class="dropbtn">Drop Button Title</button>
        <div class="dropdown-content">
            <ul>
                <li></li>
                <li></li>
                ...
            </ul>
        </div>
    ```
3. Call makeDropDown() passing the queried drop down element in as its parameter. For example, assuming you've stored the drop down element in a variable called "dropDownElement", you would call the function like this:
```javascript
const makeDropDown = require('makeDropDown');
const dropDownElement = document.querySelector('div.dropdown');
makeDropDown(dropDownElement);
```