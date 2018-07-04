const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = 'postgresql://job:password@localhost:5432/jobportal';

router.get('/', (req, res, next) => {
  res.sendFile(path.join(
    __dirname, '..', '..', 'client', 'views', 'index.html'));
});

router.get('/api/v1/todos', (req, res, next) => {
  const results = [];
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM public.person;');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});


router.get('/api/v1/getjdsummary', (req, res, next) => {
  const results = [];
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query('SELECT jobid, jobname, jobdescription, jobposition, minexperience, maxexperience, joblocation FROM job.tbljobprofile;');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});


router.get('/api/v1/getjddetailsbyid/:jobid', (req, res, next) => {
  const results = [];
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    const jobid = req.params.jobid;
    const query2 = {
      text: 'SELECT J.jobid, jobname, jobposition, openpositions, jobdescription, jobfunctionalarea, employeetype, minexperience, maxexperience, joblocation, portfolio, hiringmanagerid, hiringteam,       jobprimaryskills, jobsecondaryskills, jobcreationdate, jobclosedate, jobstatus, isactive, CAST(CASE WHEN c.jobid IS NULL THEN 0 ELSE 1 END AS BIT) as isApplied   FROM job.tbljobprofile J      LEFT JOIN job.tblapplications c      on J.jobid = c.jobid where J.jobid = $1;',
      values: [jobid]
    }
    // SQL Query > Select Data
    const query = client.query(query2);
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

router.get('/api/v1/getcandidateinfobyid/:id', (req, res, next) => {
  const results = [];
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    const id = req.params.id;
    const query2 = {
      text: 'SELECT candidateid, candidate, experience, qualification, skillset, dob, contact, email  FROM job.tblcandidate where candidateid = $1;',
      values: [id]
    }
    // SQL Query > Select Data
    const query = client.query(query2);
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

router.get('/api/v1/getcandidatedetailsbyid/:id', (req, res, next) => {
  const results = [];
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    const id = req.params.id;
    const query2 = {
      text: 'SELECT c.candidateid, candidate, experience, qualification, skillset, dob, contact, email, jobid FROM job.tblcandidate c LEFT JOIN job.tblapplications a ON a.candidateid = c.candidateid WHERE c.candidateid = $1;',
      values: [id]
    }
    // SQL Query > Select Data
    const query = client.query(query2);
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

router.post('/api/v1/insertapplication', (req, res, next) => {
  const results = [];
  // Grab data from http request
  const data = {applicationid: 'A' + Math.random().toString(36).substr(2, 4),candidateid: req.body.candidateid, jobid : req.body.jobid, candidatestatus : 'applied',comments:'' };
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Insert Data 

     const querydata = {
      text: 'INSERT INTO job.tblapplications(applicationid, candidateid, jobid, candidatestatus, comments) VALUES($1, $2, $3, $4, $5) RETURNING applicationid',
      values: [data.applicationid, data.candidateid, data.jobid, data.candidatestatus, data.comments]
    } 
    var query = client.query(querydata.text, querydata.values); 
    query.on('row', (row) => {
      results.push(row);
    }); 
    query.on('end', () => {
      done();
      return res.json(results);
    });     
    
    
  });
});

router.get('/api/v1/getinterviewscheduledetailsbyid/:id', (req, res, next) => {
  const results = [];
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    const id = req.params.id;
    const query2 = {
      text: 'SELECT candidateid, interviewdate, roundnumber, interviewerid, feedback, isshortlisted FROM job.tblinterviewschedule WHERE candidateid = $1;',
      values: [id]
    }
    // SQL Query > Select Data
    const query = client.query(query2);
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});


router.post('/api/v1/todos', (req, res, next) => {
  const results = [];
  // Grab data from http request
  const data = {name: req.body.name,age: req.body.age};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Insert Data 

     const query2 = {
      text: 'INSERT INTO public.person(name, age) VALUES($1, $2)',
      values: [data.name, data.age]
    }
    
    // callback
    client.query(query2, (err, res) => {
      if (err) {
        console.log(err.stack)
      } else {
        console.log(res.rows[0])
      }
    })   
     
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM public.person;');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

router.put('/api/v1/todos/:todo_id', (req, res, next) => {
  const results = [];
  // Grab data from the URL parameters
  const id = req.params.todo_id;
  // Grab data from http request
  const data = {text: req.body.text, complete: req.body.complete};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Update Data
    client.query('UPDATE items SET text=($1), complete=($2) WHERE id=($3)',
    [data.text, data.complete, id]);
    // SQL Query > Select Data
    const query = client.query("SELECT * FROM items ORDER BY id ASC");
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', function() {
      done();
      return res.json(results);
    });
  });
});

router.delete('/api/v1/todos/:todo_id', (req, res, next) => {
  const results = [];
  // Grab data from the URL parameters
  const id = req.params.todo_id;
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Delete Data
    client.query('DELETE FROM items WHERE id=($1)', [id]);
    // SQL Query > Select Data
    var query = client.query('SELECT * FROM items ORDER BY id ASC');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

module.exports = router;
