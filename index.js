const apiKey = 'api_key=pifKwyONHCAUk3tc1aUf9s4GJ4szL5hjkaihBNSm';

function main() {
  $('form').submit(function () {
    event.preventDefault();
    let search = $('#state').val();
    let number = $('#number').val();
    let url = `https://developer.nps.gov/api/v1/parks?${apiKey}&stateCode=${search}&limit=${number},`;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        render(jsonData);
      });
  });
}

function render(jsonData) {
  let htmlTemplate = [];
  for (let i = 0; i < jsonData.data.length; i++) {
    let fullName = jsonData.data[i].fullName;
    let description = jsonData.data[i].description;
    let parkUrl = jsonData.data[i].url;
    htmlTemplate.push(`
    <h2>${fullName}</h2><br>
    <p>${description}</p>
    <a href='${parkUrl}'>${parkUrl}</a>
    `);
  }
  $('.parks').html(htmlTemplate);
}

/* 

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function displayResults(responseJson, maxResults) {
  // if there are previous results, remove them
  console.log(responseJson);
  $('#results-list').empty();
  // iterate through the articles array, stopping at the max number of results
  for (let i = 0; i < responseJson.value.length & i<maxResults ; i++){
    // for each video object in the articles
    //array, add a list item to the results 
    //list with the article title, source, author,
    //description, and image
    $('#results-list').append(
      `<li><h3><a href="${responseJson.value[i].url}">${responseJson.value[i].title}</a></h3>
      <p>${responseJson.value[i].description}</p>
      <p>By ${responseJson.value[i].body}</p>
      </li>`
    )};
  //display the results section  
  $('#results').removeClass('hidden');
};

function getNews(query, maxResults=10) {
  const params = {
    q: query,
    pageSize: maxResults
  };
  const queryString = formatQueryParams(params)
  const url = searchURL + '?' + queryString;

  console.log(url);

  const options = {
    headers: new Headers({
      "x-rapidapi-key": apiKey})
  };

  fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson, maxResults))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    const maxResults = $('#js-max-results').val();
    getNews(searchTerm, maxResults);
  });
}

$(watchForm); */

/*Assignment
Your team is working on an app that will help folks plan a vacation. You've been assigned to work on one feature for the app - to display a list of national parks in an area.

Review The National Parks Services API documentation and create an API key.
Review the API Guide on Authentication for ways to pass your API key as part of the request.
Review the /parks endpoint and data model to understand how it works.
Create a new app and push it to GitHub.
When you're done, submit the link to your GitHub repo at the bottom of the page.
Requirements:
The user must be able to search for parks in one or more states.
The user must be able to set the max number of results, with a default of 10.
The search must trigger a call to NPS's API.
The parks in the given state must be displayed on the page. Include at least:
Full name
Description
Website URL
The user must be able to make multiple searches and see only the results for the current search.
As a stretch goal, try adding the park's address to the results.*/

$(main);
