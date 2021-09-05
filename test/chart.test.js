const app = require("../server");
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = require('chai');
const should = chai.should();

describe('Chart', () => {
    describe('/GET chart', () => {
        it('it should GET all the data', (done) => {
            chai.request(app)
                .get('/chart')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    })

    describe('/GET bar chart', () => {
        it('it should GET bar chart data', (done) => {
            chai.request(app)
                .get('/bar')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    })

    describe('/GET pie chart', () => {
        it('it should GET pie chart data', (done) => {
            chai.request(app)
                .get('/pie')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    })

    describe('/POST chart', () => {
        const chart = {
            "Name": "Test User",
            "Age": 32,
            "Gender": "M"
        }
        it('it should POST the record', (done) => {
            chai.request(app)
                .post('/chart')
                .send(chart)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    })
})