import React from 'react'
import { withSiteData } from 'react-static'
//

export default withSiteData(() => (
  <div className="hero">
    <h1 style={{ textAlign: 'center' }}>READ. ANYTIME.</h1>
    <h2 style={{ textAlign: 'center' }}>You don't have all day,<br />so read during those 'moments'.</h2>
    <p style={{ textAlign: 'center' }}>Serialized mystery stories delivered so you can read anytime, anywhere … 5 – 30 min installments!</p>
    <div style={{ textAlign: 'center' }}>
      <button>Join $1 Mystery Club</button>
    </div>
  </div>
))
