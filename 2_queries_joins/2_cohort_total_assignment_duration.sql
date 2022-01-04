SELECT sum(assignment_submissions.duration) as total_duration
  FROM students
  JOIN assignment_submissions ON students.id = student_id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name = 'FEB12';

/*Can start from any table, able to grab anything from any table after joining
SELECT sum(assignment_submissions.duration) as total_duration
  FROM assignment_submissions
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name = 'FEB12';
*/
