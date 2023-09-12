const express = require('express');
const app = express();
const { DateTime } = require('luxon');

const GITHUB_REPO_URL = 'https://github.com/olawuwo-abideen/HNG';

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name || 'olawuwo abideen';
  const track = req.query.track || 'backend';
  const now = DateTime.now();
  
  const response = {
    slack_name: slackName,
    current_day: now.toFormat('cccc'),
    utc_time: now.toUTC().toISO(),
    track: track,
    github_file_url: 'https://github.com/olawuwo-abideen/HNG/blob/main/task_one/app.js',
    github_repo_url: GITHUB_REPO_URL,
    status_code: 200,
  };

  res.json(response);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
