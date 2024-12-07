let novels = []; // Store uploaded novels

// Handle login
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login successful!");
});

// Handle novel upload
document.getElementById("upload-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const file = document.getElementById("file").files[0];

  if (file) {
    novels.push({ title, author, genre, file });
    alert(`${title} by ${author} uploaded successfully!`);
  }
});

// Generate genres dynamically
const genres = ["Fantasy", "Romance", "Sci-Fi", "Mystery"];
const genreList = document.getElementById("genre-list");
genres.forEach((genre) => {
  const button = document.createElement("button");
  button.innerText = genre;
  button.onclick = () => filterByGenre(genre);
  genreList.appendChild(button);
});

function filterByGenre(genre) {
  const results = novels.filter((novel) => novel.genre === genre);
  displaySearchResults(results);
}

// Search novels by title or author
function searchNovel() {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const results = novels.filter(
    (novel) =>
      novel.title.toLowerCase().includes(query) ||
      novel.author.toLowerCase().includes(query)
  );
  displaySearchResults(results);
}

function displaySearchResults(results) {
  const resultsDiv = document.getElementById("search-results");
  resultsDiv.innerHTML = ""; // Clear previous results
  results.forEach((novel) => {
    const novelDiv = document.createElement("div");
    novelDiv.innerHTML = `
      <h3>${novel.title}</h3>
      <p>Author: ${novel.author}</p>
      <p>Genre: ${novel.genre}</p>
      <button onclick="initiatePayment('${novel.title}')">Buy</button>
    `;
    resultsDiv.appendChild(novelDiv);
  });
}

// Handle payment process
function initiatePayment(title) {
  alert(`You are buying: ${title}`);
  document.getElementById("payment").style.display = "block";
}

function confirmPayment() {
  document.getElementById("payment").style.display = "none";
  document.getElementById("download").style.display = "block";
  document.getElementById("download-link").href = "#"; // Replace with actual file URL
}￼Enter
