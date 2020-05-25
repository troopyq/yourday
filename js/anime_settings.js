 const vpc = new ViewportChecker('.col-12', {
    classToAdd: 'animate__animated animate__slideInUp',
     offset: 200,
     // removeClassAfterAnimation: true,
     callbackFunction: function(elem, action){},
 });
document.addEventListener('DOMContentLoaded', () => vpc.attach());