let requestButton = document.getElementById('request-hid-device');
requestButton.addEventListener('click', async () => {
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
});
      document.getElementById('bouton01').addEventListener('click', function(event) {
        console.log("OK");
        // Permissions must be requested from inside a user gesture, like a button's
        // click handler.
        chrome.permissions.request({
          permissions: ['usb'],
          origins: ['https://blanneau44.github.io/']
        }, function(granted) {
          // The callback argument will be true if the user granted the permissions.
          if (granted) {
            console.log("OK1");
          } else {
            console.log("KO");
          }
        });
      });
