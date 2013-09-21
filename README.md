APIproject1
===========
My favourite Music Style
------------------------
    My project 1 shows some statistics for the English songs I have heard in last week.(Data provided 
    by douban.fm) And by showing that list, it finds my favourite music style.
    All the showed data come from JSON, or worked JSON data.
    
    During the process of presenting data in the browser, I manipulated them by DOM: to get the HTML 
    node, append child node, change the inner HTML or other attributes. 
    
    At first, I didn't use jquery or high-order function. Just try to finish it with DOM and javascript.
    However, after seen others' work, I decided to use jquery and high-order function.
    
    I packaged scripts in HTML to a js file. And choose jquery to do the query work.
    What's more, I replaced switch with $.each(obj, function(key, value)), to finish the process of 
    traverse.
    
    Having know the sort() method in class, I change the original way of getting the favourite style. I
    put the style and frequency together in an object. Then sort the frequency(value) to get the name 
    of style(key).
     
