
const test = require('tape');
const request = require('supertest');
const app = require('./../app');



test('Testing for main page on redirect ',(t) => {
request(app)
.get('/')
.expect(302)
.end((err, res) => {
t.error(err)
t.equal(res.headers.location, '/signup', 'Should redirect to signup');
t.end();

});
});
test('Testing for main page on code state ',(t) => {
request(app)
.get('/')
.expect(302)
.end((err, res) => {
t.error(err)
t.equal(res.statusCode, 302, 'Should return 200');
t.end();

});
});
test('Testing for main page on code state ',(t) => {
request(app)
.get('/profile/1')
.expect(302)
.end((err, res) => {
t.error(err)
t.equal(res.statusCode,302, 'Should return 200');
t.end();

});
});

test.onFinish(() => process.exit(0));
