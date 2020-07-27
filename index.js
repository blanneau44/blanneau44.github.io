let requestButton = document.getElementById('request-hid-device');
requestButton.addEventListener('click', async () => {

  /*let device;
  try {
    device = await navigator.hid.requestDevice({ filters: [{
        vendorId: 0x0925,
        productId: 0x1458
        //usagePage: 0x0C,
        //usage: 0x01
    }]});
  } catch (error) {
    console.log('No device was selected.');
  }

  if (device !== undefined) {
    console.log('HID: ${device.productName}');
  }*/
  
  /*/
  test de permission OK
  navigator.permissions.query({name:'geolocation'}).then(function(p) {
  switch (p.state) {
    case 'denied':
      //showTopRestaurants();
      console.log("denied");
      break;
    case 'granted':
      console.log("granted");
      break;
    case 'prompt':
      console.log("prompt");
  }*/
  
  
  
  var port = 0;
var endpoint = 0x01;
var device = { vendorId: 0x0925, productId: 0x1458};

var connect = function(callback) {
  chrome.permissions.getAll(function(p) {
    if (p.permissions.indexOf('usb') >= 0) {

      //construct permission object for our device
      var obj = { usbDevices: [device] };

      //now request the permissions
      chrome.permissions.request({ permissions: [obj] }, function(granted) {
        if (granted) {
          chrome.usb.findDevices(device, function(devices) {
            if (devices && devices.length > 0) {
              //use the first found device
              var foundDevice = devices[0];
              //now lets reset the device
              chrome.usb.resetDevice(foundDevice, function() {
                //perform some error checking to make sure we reset the device
                if ( ! chrome.runtime.lastError) {
                  //now claim the interface using the port we specified
                  chrome.usb.claimInterface(foundDevice, port, function() {
                    if ( ! chrome.runtime.lastError) {
                      callback(foundDevice);
                    } else {
                      throw chrome.runtime.lastError.message;    
                    } 
                  })
                } else {
                  throw chrome.runtime.lastError.message;
                }
              });

            } else {
              console.warn("Device not found!");
            }
          });
        } else {
          console.warn("USB Permission not granted.")
        }
      });

    } else {
      console.warn("No USB permissions granted.");
    }
  });
}
  
  
  
});
});
/*document.getElementById('bouton01').addEventListener('click', function(event) {
  // Permissions must be requested from inside a user gesture, like a button's
  // click handler.
  chrome.permissions.request({
    permissions: ['usb'],
    origins: ['https://blanneau44.github.io/']
  }, function(granted) {
    // The callback argument will be true if the user granted the permissions.
    if (granted) {
     console.log("OK");
    } else {
      console.log("KO");
    }
  });
});*/


/*const permissionsToRequest = {
  permissions: ["bookmarks", "history"],
  origins: ["https://developer.mozilla.org/"]
}

function requestPermissions() {

  function onResponse(response) {
    if (response) {
      console.log("Permission was granted");
    } else {
      console.log("Permission was refused");
    }
    return navigator.permissions.getAll();  
  }

  navigator.permissions.request(permissionsToRequest)
    .then(onResponse)
    .then((currentPermissions) => {
    console.log(`Current permissions:`, currentPermissions);
  });
}*/

//document.getElementById('request-hid-device').addEventListener("click", requestPermissions);


