import React from 'react'

const Quote = ({quote}) =>
  <div className="tile" key = {quote.id}>
    <p>
        {quote.quote}
    </p>
    <h3>
        {quote.source}
    </h3>
    <h4>
        {quote.context}
    </h4>
    <h5>
        {quote.theme}
    </h5>
  </div>

export default Quote