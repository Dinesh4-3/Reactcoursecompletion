
import { useState } from "react"

function Colorpicker(){
    const [colors,setcolors] = useState('#111111')

    function updatecolorpicker(e) {
        setcolors(e.target.value)
    }
    return(
        <div className="color-picker">

            <h2 style = {{color:colors}}>Color picker {colors}</h2>
            <input type="color" onChange={updatecolorpicker} />

        </div>
    )

}

export default Colorpicker