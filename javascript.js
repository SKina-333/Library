// Get the modal
var modal = document.getElementById("myModal");
var modalContainer = document.getElementsByClassName("modal-content");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

var libraryArray = [];

function Library(author, title, page) {
  this.author = author;
  this.title = title;
  this.pageCount = page;
}

function addToArray() {
  var author = document.getElementById("authorName").value;
  var title = document.getElementById("bookTitle").value;
  var pageNumber = document.getElementById("count").value;

  const newBook = new Library(author,title,pageNumber);
  libraryArray.push(newBook);

  displayBook();

  modal.style.display = "none";
  document.getElementById('bookForm').reset();
}


function displayBook() {
  const contentBox = document.getElementById("content");

  contentBox.innerHTML = "";

  libraryArray.forEach((book, index) => {
    const boxDiv = document.createElement("div");
    boxDiv.className = 'box';

    const leftSideDiv = document.createElement("div");
    leftSideDiv.className = 'left-side';
    const authorP = document.createElement('p');
    authorP.className = 'author';
    authorP.textContent = book.author;
    leftSideDiv.appendChild(authorP);

    const rightSideDiv = document.createElement('div');
    rightSideDiv.className = 'right-side';
    
    const topDiv = document.createElement('div');
    topDiv.className = 'top';
    const titleP = document.createElement('p');
    titleP.className = 'title';
    titleP.textContent = book.title;

    const topRow = document.createElement('div');
    topRow.className = 'top-row';
    const closeSpan = document.createElement('span');
    closeSpan.className = 'close';
    closeSpan.innerHTML = '&times;';

    closeSpan.addEventListener('click', () => {
      
      libraryArray.splice(index, 1);
      
      displayBook();
    });

    topRow.appendChild(titleP);
    topRow.appendChild(closeSpan);

    const switchLabel = document.createElement('label');
    switchLabel.className = 'switch';
    switchLabel.innerHTML = `
        <input type="checkbox">
        <span class="slider"></span>
    `;

    


    topDiv.appendChild(topRow);
    topDiv.appendChild(switchLabel);

    const bottomDiv = document.createElement('div');
    bottomDiv.className = 'bottom';
    const pageCountP = document.createElement('p');
    pageCountP.className = 'page-count';
    pageCountP.textContent = book.pageCount;
    bottomDiv.appendChild(pageCountP);
    
    rightSideDiv.appendChild(topDiv);
    rightSideDiv.appendChild(bottomDiv);
    
    boxDiv.appendChild(leftSideDiv);
    boxDiv.appendChild(rightSideDiv);

    contentBox.appendChild(boxDiv);
  });

}

