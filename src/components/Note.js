import React from "react";
import ClearIcon from '@mui/icons-material/Clear';
import Pdf from "react-to-pdf";

function Note(props) {

const ref = React.createRef();

    function handleClick(){
        props.onDelete(props.id);
    }




    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p ref={ref}>{props.content}</p>
            <Pdf targetRef={ref} filename="my-notes.pdf">
           {({ toPdf }) => <button onClick={toPdf}>Pdf</button>}
            </Pdf>
            <button onClick={handleClick}><ClearIcon /></button>
        </div>
    );
}


export default Note;