const apiKey = '05524f44edee4de38cdd357b0e4a4233';
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const newsResults = document.getElementById('news-results');

searchButton.addEventListener('click', performSearch);

function performSearch() {
const searchTerm = searchInput.value;

// Clear previous results
newsResults.innerHTML = '';

// Make API request
fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`)
.then(response => response.json())
.then(data => displayResults(data.articles))
.catch(error => console.error(error));
}

function displayResults(articles) {
articles.forEach(article => {
const articleDiv = document.createElement('div');

const title = document.createElement('h3');
title.textContent = article.title;

const description = document.createElement('p');
description.textContent = article.description;

const source = document.createElement('p');
source.textContent = `Source: ${article.source.name}`;

const publishedAt = document.createElement('p');
publishedAt.textContent = `Published At: ${new Date(article.publishedAt).toLocaleString()}`;

const url = document.createElement('a');
url.href = article.url;
url.textContent = 'Read More';

articleDiv.appendChild(title);
articleDiv.appendChild(description);
articleDiv.appendChild(source);
articleDiv.appendChild(publishedAt);
articleDiv.appendChild(url);

newsResults.appendChild(articleDiv);
});
}
