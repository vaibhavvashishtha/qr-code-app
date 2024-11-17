const qrCodeScanner = (elementId, resultElementId) => {
    const html5QrCode = new Html5Qrcode(elementId);
  
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      document.getElementById(resultElementId).textContent = `Result: ${decodedText}`;
      html5QrCode.stop();
    };
  
    html5QrCode.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      qrCodeSuccessCallback
    ).catch((err) => {
      console.error("Unable to start scanning", err);
    });
  };
  
  export default qrCodeScanner;
  