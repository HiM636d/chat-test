
/**
 * 
 * @param {database object as props} 
 * @returns an object in a styled div
 */
export default function Message({ message }) {
    
    return (
        <div style={{position:'relative',
                    display:'block',
                    textAlign:'right'}}>
          <h5 style={{color:'white',
                      fontSize:'30',
                      backgroundColor:'rgba(81,188,87,1)',
                      padding:'3px auto',
                      display:'inline',
                      borderRadius:'15px',
                      padding:"10px",
                      float:'right'}}>
            {message.Text}
            </h5>
          <br></br>
          <br></br>
          <h6 style={{color:'white',
                      backgroundColor:'rgba(100,100,100,1)',
                      fontSize:'14',
                      display:'inline',
                      float:'left'
                      }}>
            {message.Date}
            </h6>  
        </div>
    )
}

