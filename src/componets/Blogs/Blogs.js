import React from "react";

const Blogs = () => {
  return (
    <div>
      <h4 className="common-color mt-3">Question Answer Session:</h4>
      <div className="text-start container">
        <h4>Q.1 : Difference between javascript and node.js</h4>
        <p>
          <b>Answer :</b>
          1. Javascript is a programming language,node.js is the run time
          environment for javascript. <br />
          2. Javascript itself can only be run in the browser,but with the help
          of node.js javascript can run outsite of the browser. <br />
          3. Javascript run in the client site mostly,but node.js run in the
          server site mostly. <br />
          4. Javascript is capable enough to add HTML and play with the DOM,but
          node.js does not have capability to add HTML tags.
        </p>
        <br />
        <h4>
          Q.2 : When should you use nodejs and when should you use mongodb?
        </h4>
        <p>
          <b>Answer: </b>
          NodeJS is a JavaScript runtime environment. It's actually helps
          JavaScript to run outside of server. It's used in server side
          development.MongoDB is NoSQL database which is document oriented. It
          represents data as of JSON documents. It's used for store data. So we
          should use MongoDB for storing data like database where we can store
          data and should use node.js to connect our client site to database by
          it's server site.
        </p>
        <br />
        <h4>Q.3 : What is the differences between sql and nosql databases?</h4>
        <p>
          <b>Answer: </b>
          1. SQL is the relational database,where NOSQL is distributed database.{" "}
          <br />
          2. SQL is table based,NOSQL is document based. <br />
          3. SQL update and insert synchronusly,but NOSQL update and insert
          asynchronusly.
        </p>
        <br />
        <h4>Q.4 : What is the purpose of jwt and how does it works?</h4>
        <p>
          <b>Answer: </b>
          The purpose of jwt is to secure API.If anyone wish to know my api data
          he can easily get it.But we use jwt token it ensure the secured API.
          When a user log in to the website,a token generates.Server send this
          token to client.Client store the token to local storage or browser
          cookies.Next time when the client makes a request, a copy of token is
          send to the server for authorization.Server verifies the JWT signature
          before giving the authorization.Server responds to the client request.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
