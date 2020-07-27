let requestButton = document.getElementById('request-hid-device');
requestButton.addEventListener('click', async () => {
  //requestPermissions();
  let device;
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
  }
  
});/*
document.getElementById('bouton01').addEventListener('click', function(event) {
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


