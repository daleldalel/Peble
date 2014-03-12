console.log('Simply.js demo!');

var count = parseInt(localStorage.getItem('count')) || 0;

simply.on('singleClick', function(e) {
  if (e.button === 'up') {
    ajax({ url: 'http://rezner.homeftp.net:8202/?G0' }, function(data){
    simply.subtitle(++count);
    simply.subtitle('pozar');
    });
  } else if (e.button === 'down') {
    simply.subtitle(--count);
  }
  localStorage.setItem('count', count);
});

simply.text({ title: 'Counter', subtitle: count });

simply.on('longClick', function(e) {
  console.log(util2.format('long clicked $button!', e));
  simply.vibe();
  simply.scrollable(e.button !== 'select');
});

simply.on('accelTap', function(e) {
  console.log(util2.format('tapped accel axis $axis $direction!', e));
  simply.subtitle('Tapped ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
});

simply.setText({
  title: 'Test Demo!',
  body: 'Moj test!',
}, true);
