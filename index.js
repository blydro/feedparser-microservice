const cors = require('micro-cors')();
const fetch = require('node-fetch');
const feedparser = require('feedparser-promised');

const handler = async (req, res) => {
  const url = req.url.substr(1);
  feedparser.parse(url).then((items) => {
    res.end(JSON.stringify(items));
  }).catch((err) => {
    res.end(JSON.stringify(err));
  });
};

module.exports = cors(handler);

