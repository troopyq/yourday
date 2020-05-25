 const vpc = new ViewportChecker('.pop', {
    classToAdd: 'animate__animated animate__zoomIn',
    
 });
const story = new ViewportChecker('.music-btn', {
    classToAdd: 'animate__animated animate__zoomIn',
     callbackFunction: function(elem, action){},
 });
const story_image = new ViewportChecker('.story_image', {
    classToAdd: 'animate__animated animate__zoomIn',
     offset: 100,
     repeat: true,
     callbackFunction: function(elem, action){},
 });

document.addEventListener('DOMContentLoaded', () => {vpc.attach(); story.attach();story_image.attach()});