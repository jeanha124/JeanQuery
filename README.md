# JeanQuery

JeanQuery is a JavaScript DOM library created based on jQuery and Vanilla JavaScript.

You can use JeanQuery by placing the script tag into the head of your html document file.

`<script src="https://"`

[ToDoList]("https://github.com/jeanha124/ToDoList"), is one of the examples using this library.

$j(selector)

The $j variable is a global variable which is used with the selector in order to call on the DOM library.

### html(string)

The html(html) method sets the inner html of the selector.

### empty()

The empty() method resets the inner html to an empty string "".

### append(children)

The append(children) method attaches the children to the selected element.

### attr(string)

The attr(string) method changes the attribute of the selected element.

### addClass(string)

The addClass(string) method adds the class name to the selected element.

### removeClass(string)

The removeClass(string) method removes the class name from the selected element.

### children()

The children() method returns the children nodes of the selected element.

### parent()

The parent() method returns the parent nodes of the selected element.

### find(string)

The find(string) method will return all the strings of the selected element tags.

### remove(badNode)

The remove(badNode) method will return all the nodes called as a badNode.

### on(string, cb)

The on(string, cb) method is an event handler that uses the cb to turn the string on.

### off(string, cb)

The off(string, cb) method is an event handler that uses the cb to turn the string off.
