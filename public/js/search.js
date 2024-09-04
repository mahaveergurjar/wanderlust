// Function to handle the search logic
function searchText(event) {
  event.preventDefault(); // Prevent form submission
  clearHighlights(); // Clear any previous highlights

  let input = document.getElementById('search-input').value.toLowerCase();
  if (input === "") return; // Return if input is empty

  let paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => {
    let innerHTML = p.innerHTML.toLowerCase();
    let index = innerHTML.indexOf(input);
    if (index !== -1) {
      let originalText = p.innerHTML;
      let regex = new RegExp(input, 'gi');
      let highlightedText = originalText.replace(regex, match => `<span class="highlight">${match}</span>`);
      p.innerHTML = highlightedText;
    }
  });
}

// Function to clear any previous highlights
function clearHighlights() {
  let highlights = document.querySelectorAll('.highlight');
  highlights.forEach(span => {
    span.classList.remove('highlight');
    let textNode = document.createTextNode(span.innerText);
    span.parentNode.replaceChild(textNode, span);
  });
}

// Attach the search function to the form's submit event
document.getElementById('search-form').addEventListener('submit', searchText);
