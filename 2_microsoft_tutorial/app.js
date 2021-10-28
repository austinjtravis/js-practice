// Following https://docs.microsoft.com/en-us/learn/modules/build-simple-website/3-html-basics
'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == 'light-theme')
    {
        this.textContext = 'Dark';
    }
    else
    {
        this.textContext = 'Light';
    }

    console.log('current class name: ' + className);
});
