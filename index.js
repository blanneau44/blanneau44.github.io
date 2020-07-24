/*
document.getElementById('arduinoButton').addEventListener('click', function () {
  if (chrome.hid) {
    talkToArduino();
    console.log('web HID not supported.');
  } else {
    console.log('WebUSB not supported.');
  }
});

async function talkToArduino() {
  console.log("GO");
  try {
    chrome.hid.getDevices()
    .then(devices => {
      console.log("Total devices: " + devices.length);
      devices.forEach(device => {
        console.log("Product name: " + device.productName + ", serial number " + device.serialNumber);
      });
    });
  } catch (error) {
    document.getElementById('target').innerHTML = "-->"+error;
  }
}
*/

/*const consentButton = document.getElementById('consent-button');

const deviceFilters = [{ }];

consentButton.addEventListener('click', async () => {
  let device;

  let devices = await navigator.hid.getDevices();
  devices.forEach(device => {
    console.log('HID: ${device.productName}');
  });
  */


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





  /*
  try {
    const devices = await navigator.hid.requestDevice({ filters: deviceFilters });
    device = devices[0];
  } catch (error) {
    console.warn('No device access granted', error);
    return;
  }
  */
});
