// Function to find supplier email
function findSupplierEmail() {
  const emailElement = document.querySelector('input[name="supplier-email"]');
  if (emailElement) {
    alert(`Supplier Email: ${emailElement.value}`);
  } else {
    alert("Supplier email not found.");
  }
}

// Function to close a case
function closeCase() {
  const closeCaseButton = document.querySelector('button.close-case');
  if (closeCaseButton) {
    closeCaseButton.click();
    alert("Case closed successfully.");
  } else {
    alert("Close case button not found.");
  }
}

// Function to amend voucher (placeholder for custom logic)
function amendVoucher() {
  alert("Amend Voucher functionality is not implemented yet.");
}

// Attach event listeners to buttons
document.getElementById("findEmail").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: findSupplierEmail,
    });
  });
});

document.getElementById("closeCase").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: closeCase,
    });
  });
});

document.getElementById("amendVoucher").addEventListener("click", () => {
  amendVoucher();
});
