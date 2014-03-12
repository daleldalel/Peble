console.log('Simply.js demo!');

var count = parseInt(localStorage.getItem('count')) || 0;

simply.on('singleClick', function(e) {
  if (e.button === 'up') {
    ajax({ url: 'https://api.ninja.is/rest/v0/device/WEBHOOK_0_0_108/subdevice/SvkqV/tickle/e6ecc2ec1cad9c11022a18cb02068a589a36fe23' }, function(data){
      var headline = data.match(/<h1>(.*?)<\/h1>/)[1];
      simply.title(headline);
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
