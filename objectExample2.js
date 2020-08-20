let curtains = {

  colour: 'red',
  material: 'cloth', 
  isOpen: false, 

  open: function() {
    if (curtains.isOpen) {
      console.log('The curtains are already open')
    } else {
      curtains.isOpen = true;
      console.log('you just opened the curtains')
    }
  },

}

console.log(curtains.isOpen);

curtains.open();

console.log(curtains.isOpen);

curtains.open()
