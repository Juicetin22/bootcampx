const { Pool } = require('pg');

const pool = new Pool({
  user: 'juicetin',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect(() => {
  console.log("connected");
});

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM assistance_requests
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  JOIN teachers ON teachers.id = teacher_id
  WHERE cohorts.name = '${process.argv[2]}'
  ORDER BY teachers.name;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`)
  })
})
.catch(err => console.error('query error', err.stack));