infiniteScroll is a jQuery plugin that supports continuous scrolling of its contents, one item at a time.
Dependencies
============
You will need to include jQuery in your page in order to use this plugin.
Usage
=====
The Markup
----------
Your markup must contain an element with a *page* class. This should be the element that encompasses all of the content that you want to scroll. The height of the *page* element must be greater than the height of the element to which the plugin is applied (in the sample code below, the plugin is being applied to the *scrollContainer* element). If not, the plugin will assume that all of the content is viewable and that scrolling is not required.

Also, you must indicate which elements will be scrolled by assigning a class of *item* to them.

Here is a sample layout that scrolls the rows of a table:

<div id="scrollContainer">
     <table class="page">
        <tbody>
            <tr class="item">
                <td>Sample Text</td>
		<td>Sample Text</td>
		<td>Sample Text</td>
            </tr>
            <tr class="item">
                <td>Sample Text</td>
		<td>Sample Text</td>
		<td>Sample Text</td>
            </tr>
        </tbody>
    </table>
</div>

The Code
--------
To use the plugin, call the *infiniteScroll* function on the element to which you want the functionality to be applied. For example:

`$("#scrollContainer").infiniteScroll();`

*infiniteScroll* takes the following parameters:
* direction - "up" or "down". Default is "up".
* duration - time in milliseconds between scrolls. Default is 10000 (10 seconds).

The following is an example of a non-default implementation:

`$("#scrollContainer").infiniteScroll({`
    `direction: "down",`
    `duration: 5000`
`});`

Once initialized, you can start the scrolling behaviour with the following code:

`$("#scrollContainer").infiniteScroll.start();`

You can also pause scrolling:

`$("#scrollContainer").infiniteScroll.pause();`
License
=======
(The MIT License)

Copyright (c) 2011 Donna Murphy

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.