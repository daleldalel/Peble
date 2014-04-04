console.log('Simply.js demo!');

var count1 = parseInt(localStorage.getItem('count1')) || 0;
var swich=['lounge','kids','bedroom','micro','hifi','backdoor','safety'];
var state=new Array;
state[3]=parseInt(localStorage.getItem('micro')) || 0;
state[4]=parseInt(localStorage.getItem('hifi')) || 0;
state[5]=parseInt(localStorage.getItem('backdoor')) || 0;
state[6]=parseInt(localStorage.getItem('safety')) || 0;

simply.on('singleClick', function(e) {
  if (e.button === 'up') {
    //ajax({ url: 'http://rezner.homeftp.net:8202/?G0' }, function(data){
  
    //simply.subtitle('pozar');
    if (++count1>6) {
      count1=0;
    }
    }
  else if (e.button === 'down') {
 
    if (--count1 <0){
      count1=6;
    }
  }
  else if (e.button === 'select') {
    switch (count1){
      case 0:
        ajax({ url: 'http://rezner.homeftp.net:8202/?L44' }, function(data){});
        break;
      case 1:
        ajax({ url: 'http://rezner.homeftp.net:8202/?L00' }, function(data){});
        break;
      case 2:
        ajax({ url: 'http://rezner.homeftp.net:8202/?L14' }, function(data){});
        break;
      case 3:
        if (state[3]) {
          ajax({ url: 'http://rezner.homeftp.net:8202/?S01' }, function(data){});
        }
        else {ajax({ url: 'http://rezner.homeftp.net:8202/?S11' }, function(data){});}
        state[3]=! state[3];
        localStorage.setItem('micro', state[3]);
        break;
      case 4:
        if (state[4]) {
          ajax({ url: 'http://rezner.homeftp.net:8202/?S41' }, function(data){});
        }
        else {ajax({ url: 'http://rezner.homeftp.net:8202/?S51' }, function(data){});}
        state[4]=! state[4];
        localStorage.setItem('hifi', state[4]);
        break;
      case 5:
        if (state[5]) {
          ajax({ url: 'http://rezner.homeftp.net:8202/?W100' }, function(data){});
        }
        else {ajax({ url: 'http://rezner.homeftp.net:8202/?W110' }, function(data){});}
        state[5]=! state[5];
        localStorage.setItem('backdoor', state[5]);
        break;
      case 6:
        if (state[6]) {
          ajax({ url: 'http://rezner.homeftp.net:8200/?S50' }, function(data){});
        }
        else {ajax({ url: 'http://rezner.homeftp.net:8200/?S51' }, function(data){});}
        state[6]=! state[6];
        localStorage.setItem('safety', state[6]);
        break;
    }
  };
  localStorage.setItem('count1', count1);
  simply.text(
    { title: 'Control', subtitle: swich[count1] });
});

simply.text(
 
  { title: 'Control', subtitle: swich[count1] });

/*simply.on('longClick', function(e) {
  console.log(util2.format('long clicked $button!', e));
  simply.vibe();
  simply.scrollable(e.button !== 'select');
});

simply.on('accelTap', function(e) {
  console.log(util2.format('tapped accel axis $axis $direction!', e));
  simply.subtitle('Tapped ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
});

simply.setText({
  title: 'control:',
  //body: 'Moj test!',
}, true);*/
