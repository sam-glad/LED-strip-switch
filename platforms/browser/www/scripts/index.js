function onDeviceReady() {
  var serverRootUrl = 'http://192.168.1.94:3000';

  var powerDiv = document.getElementById('power');
  var powerOffButton = document.getElementById('powerOff');
  var powerOnButton = document.getElementById('powerOn');

  getLedState();

  powerDiv.onclick = function() {
    toggleLed();
  };

  function showPowerButton(power) {
    if (!power) {
      throw new Error('Power not provided');
    } else if (parseInt(power) === 1) {
      powerOffButton.style.display = 'none';
      powerOnButton.style.display = 'inline';
    } else {
      powerOffButton.style.display = 'inline';
      powerOnButton.style.display = 'none';
    }
  }

  function toggleLed() {
    makeRequest('GET', serverRootUrl + '/toggle', showPowerButton);
  };

  function makeRequest(type, url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(this.response);
      }
    };
    xhttp.open(type, url, true);
    xhttp.send();
  }

  function getLedState() {
    makeRequest('GET', serverRootUrl + '/status', showPowerButton);
  }
}

document.addEventListener('deviceready', onDeviceReady, false);
