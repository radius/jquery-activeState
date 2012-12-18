# jquery.activeState

All this plugin does is add a class to a selector and then remove the class after a set period of time. All options are configurable through a settings object.

## Installation

You need to have jQuery 1.7 or higher. Include the script *after* the jQuery library

    <script src="/path/to/jquery.activeState.js"></script>

## Usage

Apply the plugin to an element. By default, the plugin will bind to child ```li``` elements and add a class called ```active``` to the ```li``` on ```touchstart mousedown``` event, so using the default settings it makes sense to bind to a ```ul```.

    $('ul').activeState();

Completely configured use case

    $('#foo .thing ul').activeState({
    	selector: 'li',
    	activeClass: 'active',
    	trigger: 'touchstart mousedown',
    	delay: 3000    
    });
## Configuration Options

### selector
	
	selector: 'li'
This should be a child selector of the selector you've bound to activeState. The most common use case is the default ```li``` element, but you can pass any valid selector.

### activeClass

    activeClass: 'active'

This is the class name that will be assigned to the selector you specified above. 

### trigger

    trigger: 'touchstart mousedown'

These are the events that will trigger the activeState behavior. Remember to separate multiple events with spaces NOT commas.

### delay

    delay: 3000

The time, in milliseconds, when the active class should be removed

## Tests

You're kidding me, right?

## Author

[Darius Daftary](https://github.com/radius)