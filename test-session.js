const axios = require('axios');
(async () => {
  try {
    const res1 = await axios.post('http://localhost:8080/login', 
      'username=testuser1&password=password', 
      { maxRedirects: 0, validateStatus: null, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
    const cookie = res1.headers['set-cookie'][0].split(';')[0];
    const res2 = await axios.get('http://localhost:8080/listings/new', { headers: { Cookie: cookie }, validateStatus: null });
    console.log("STATUS:", res2.status);
    console.log("HTML has currUser (via login links):", res2.data.includes('/signup'));
  } catch (err) { console.error(err); }
})();
