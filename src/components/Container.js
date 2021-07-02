import Header from './Header'
import Window from './Window'
import Input from './Input'

/**
 * 
 * @returns div containing all other components
 */
const Container = () => {


    return (
        <div style={{backgroundColor:'rgba(100,100,100,1)',
                    textAlign:'center',
                    position:'relative',
                    verticalAlign:'center',
                    width:'80%',
                    margin:'auto',
                    borderColor:'green',
                    borderStyle:'solid',
                    }}>
            <Header />
            <Window />
            <Input />
        </div>
    )
}

export default Container
