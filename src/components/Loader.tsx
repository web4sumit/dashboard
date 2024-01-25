import React from 'react'

const Loader = () => {

  const sxStyle = {
   width:'100%',
   height:'100vh',
   display:'grid',
   placeItems:'center',
  }
  return (
    <div style={sxStyle}>
        <section className='loader'>
          <div></div>
        </section>
        </div>
  )
}

export default Loader;