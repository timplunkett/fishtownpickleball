const fs = require('fs');

const url = 'https://cplsecureapiproxy.azurewebsites.net/api/CPLSecureApiProxy/local/v0/api/divisions/3e9b6a58-8823-46d9-8f00-81d53e63f0eb/matchups';

async function getMatchups() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Ensure the _data directory exists
    if (!fs.existsSync('_data')) {
      fs.mkdirSync('_data');
    }

    // Save the data as JSON inside Jekyll's data folder
    fs.writeFileSync('_data/matchups.json', JSON.stringify(data, null, 2));
    console.log('Successfully updated matchups.json!');
  } catch (error) {
    console.error('Failed to fetch data:', error);
    process.exit(1); // Fail the GitHub action if the fetch fails
  }
}

getMatchups();
