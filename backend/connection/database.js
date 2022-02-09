const {Pool} = require('pg')

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'lib',
    password:'123Zulfi',
    port:5432
});
module.exports = {
    qurey:(text,params) =>pool.query(text,params),
};