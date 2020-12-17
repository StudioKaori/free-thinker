import React,{Component} from 'react'; 
import axios from 'axios'; 

// ========================================================================
// Upload File component
class FileUpload extends Component { 

	state = { 
    // setAssignmentIsValid, setNothingIsPicked
	// Initially, no file is selected 
	selectedFile: null
	}; 
	
	// On file select (from the pop up) 
	onFileChange = event => { 
	
	// Update the state 
	this.setState({ selectedFile: event.target.files[0] }); 
	
	}; 
	
	// On file upload (click the upload button) 
	onFileUpload = () => { 
	
	// Create an object of formData 
    const formData = new FormData(); 
	
	// Update the formData object 
	formData.append( 
		"myFile", 
		this.state.selectedFile, 
		this.state.selectedFile.name 
    ); 
    
    // Add it to assignment object
    const newAssign = { ...this.props.assignmentObj };
    newAssign.type = "File"
    newAssign.assignment = JSON.stringify(formData); // Not that easy

    this.props.setAssignmentObj(newAssign);
    
    // Form display: close and valid.
    this.props.setAssignmentIsValid(true);
    this.props.setNothingIsPicked(false);
    this.props.close();
	
	// Details of the uploaded file 
    console.log(formData); 
    console.log(newAssign)
	
	// Request made to the backend api 
	// Send formData object 
	//axios.post("api/uploadfile", formData); 
	};  
	
	render() { 
        return ( 
            
            <div className="dropdown-item" data-toggle="dropdown-menu">  
                <div  > 
                    <input type="file" onChange={this.onFileChange} /> 
                    <button onClick={this.onFileUpload}> 
                        Upload 
                    </button> 
                </div>  
            </div> 
        ); 
	} 
} 

export default FileUpload; 
