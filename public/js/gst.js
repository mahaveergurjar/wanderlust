document.addEventListener("DOMContentLoaded", function () {
      let taxSwitch = document.getElementById("flexSwitchCheckDefault");

      taxSwitch.addEventListener("change", function () {
        let taxInfo = document.querySelectorAll(".tax-info");
        let priceElements = document.querySelectorAll(".price");

        if (taxSwitch.checked) {
          // Show GST info and update price with GST
          taxInfo.forEach((info) => (info.style.display = "inline"));

          priceElements.forEach((priceElem) => {
            let originalPrice = parseFloat(
              priceElem.dataset.originalPrice.replace(/[^0-9.]/g, "")
            );
            let priceWithTax = originalPrice * 1.18; // Add 18% GST
            priceElem.innerHTML = `&#8377; ${priceWithTax.toLocaleString(
              "en-IN"
            )} / night`;
          });
        } else {
          // Hide GST info and revert to original price
          taxInfo.forEach((info) => (info.style.display = "none"));

          priceElements.forEach((priceElem) => {
            let originalPrice = priceElem.dataset.originalPrice;
            priceElem.innerHTML = `&#8377; ${originalPrice} / night`;
          });
        }
      });
    });