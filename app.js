const express = require('express');
const app = express();
const { DateTime } = require('luxon');
// Create a new Date object for the current UTC time
const currentUTCDate = new Date();

// Format the date as a string in UTC format ('YYYY-MM-DDTHH:MM:SSZ')
const options = { 
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit', 
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
  timeZoneName: 'short' 
};
const utcTimeStr = new Intl.DateTimeFormat('en-US', options).format(currentUTCDate);

console.log("UTC Time:", utcTimeStr);


const GITHUB_REPO_URL = 'https://github.com/olawuwo-abideen/hngtaskone';

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name || 'olawuwo abideen';
  const track = req.query.track || 'backend';
  const now = DateTime.now();
  
  const response = {
    slack_name: slackName,
    current_day: now.toFormat('cccc'),
    utc_time: utcTimeStr,
    //new Date().toUTCString(),
      //Math.floor((new Date()).getTime() / 1000)
    // utc_time: now.toUTC().toISO(),
    track: track,
    github_file_url: 'https://github.com/olawuwo-abideen/hngtaskone/blob/main/app.js',
    github_repo_url: GITHUB_REPO_URL,
    status_code: 200,
  };

  res.json(response);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
