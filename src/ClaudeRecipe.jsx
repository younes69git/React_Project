import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
const ClaudeRecipe = (props) => {
  return ( 
    <section>
      <h2>Chef Claude Recommends:</h2>
      <p><ReactMarkdown>{props.recipe}</ReactMarkdown></p>
    </section>
  );
}
export default ClaudeRecipe;