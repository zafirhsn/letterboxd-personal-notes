// Get id of div below where textarea element will go
const tabbedContent = document.getElementById("tabbed-content");
const reviewTemplateString = 
  `<script src="https://cdn.tailwindcss.com"></script>
  <textarea name='personalNotes' class='personal-notes '></textarea>
  <br>
  <button class='bg-orange-600'>Save</button>
  `;

// Insert textarea before elem
tabbedContent.insertAdjacentHTML("beforebegin", reviewTemplateString);
console.log(tabbedContent);

// Grab data from storage.sync
// 




