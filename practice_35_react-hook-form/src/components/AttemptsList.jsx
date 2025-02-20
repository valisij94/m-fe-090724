import React from "react";

function AttemptsList( { attempts, dropAttempt } ) {

  console.log('Render attepts list');
  return (
    attempts && <div>
      {attempts.map( attempt => <p onClick={() => dropAttempt(attempt.key)} key={attempt.key}>Attempt time: {attempt.value}</p>) }
    </div>
  )
};

export default React.memo(AttemptsList);