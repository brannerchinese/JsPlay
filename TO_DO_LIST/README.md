## To-do List

Purpose: to study jQuery by constructing a to-do list with various interesting features.

### Versions

 * v. 6, 20140515:
   * To-do and done lists are in left and right halves of page (use table, `{width: 100%; table-layout: fixed;}`). 
   * Input box and field are now part of "To-do" heading but slightly smaller than headings (use `span` and make heading part of `<form id='form'>` but not part of `<span id=inputs>`). 
   * Lists of items are vertically aligned under headings (use `td {vertical-align: top;}`).
   * Some separation between table and browser-window edges, and between the two lists in the window (`table {border-spacing: 10px} td {padding: 10px}`).
 * v. 5, 20140515: Double-click item to move it to (or from) list of done items (use object to allow toggling between two IDs).
 * v. 4, 20140515: Click item to mark it done.
 * v. 3, 20140515: Manually sortable list of items (using `sortable()`, from jQuery UI; note the temporary additional element-number assigned to the element being moved until it is put in place and the whole list is then renumbered).
 * v. 2, 20140514: Text-field that submits either on carriage-return or when adjacent button is clicked (single treatment of both). 
 * v. 1, 20140514: 
   * Menu that becomes visible only on mouse-over.
   * List-items that are entered by user.

### Things learned (this list incomplete)

      * Calling named functions. 
      * Use of HTML forms with either `button` or `submit` in `input` element.

[end]
