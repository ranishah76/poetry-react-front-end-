import React from 'react';

const Poem = props => (

  <div className="outer">
    <div class="text-block">
      <h4>{props.poem.title}</h4>
      <p>{props.poem.lines.join('\n')}</p>
    </div>
  </div>
);

export default Poem
