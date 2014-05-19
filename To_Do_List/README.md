## An In-Browser To-Do List

Purpose: to study jQuery by constructing a to-do list with various interesting features.

To play with it: see it on line at https://brannerchinese.com/code/JsPlay/To_Do_List/to_do.html. Or access it locally, after cloning this repository, with

    cd JsPlay/To_Do_List
    python3 -m http.server

And point your browser to http://127.0.0.1:8000/to_do.html.

The rest should be self-explanatory. This has been tested on Chrome, Firefox, and Safari.

### Versions (top-most is current)

 * v. 7, 20140517: Uses Bootstrap modal (overlay that can be summoned or dismissed).
 * v. 6, 20140515: Numerous design refinements.
 * v. 5, 20140515: Double-click item to move it to (or from) list of done items (use object to allow toggling between two IDs).
 * v. 4, 20140515: Click item to mark it done.
 * v. 3, 20140515: Manually sortable list of items (using `sortable()`, from jQuery UI).
 * v. 2, 20140514: Text-field that submits either on carriage-return or when adjacent button is clicked (single treatment of both). 
 * v. 1, 20140514: 
   * Menu that becomes visible only on mouse-over.
   * List-items that are entered by user.

[end]
