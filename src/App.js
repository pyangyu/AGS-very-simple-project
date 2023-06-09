import axios from 'axios';
  
import React,{Component} from 'react';
import Clock from './components/clock';
  
class App extends Component {
   
    state = {
      // Initially, no file is selected
      selectedFile: null,
      selectedFile2: null
    };
     
    // On file select (from the pop up)
    onFileChange = event => {
      // Update the state
      this.setState({ selectedFile: event.target.files[0] }
        // , () => console.log("321")
      );
     
    };

    onFileChange2 = event => {
      // Update the state
      this.setState({ selectedFile2: event.target.files[0] });
     
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
     
      // Details of the uploaded file
      console.log(this.state.selectedFile);
     
      // Request made to the backend api
      // Send formData object
      axios.post("api/uploadfile", formData);
    };

    onFileUpload2 = () => {
     
      // Create an object of formData
      const formData = new FormData();
     
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile2,
        this.state.selectedFile2.name
      );
     
      // Details of the uploaded file
      console.log(this.state.selectedFile2);
     
      // Request made to the backend api
      // Send formData object
      axios.post("api/uploadfile", formData);
    };
     
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
     
      if (this.state.selectedFile && this.state.selectedFile2) {
          
        return (
          <React.Fragment>
            <div><h1>SpeedX Helping Website</h1></div>
          <div>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
  
            <p>File Type: {this.state.selectedFile.type}</p>
  
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
          </div>
          <div>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile2.name}</p>
  
            <p>File Type: {this.state.selectedFile2.type}</p>
  
            <p>
              Last Modified:{" "}
              {this.state.selectedFile2.lastModifiedDate.toDateString()}
            </p>
  
          </div>
          </React.Fragment>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };
    
     
    render() {
      return (
        <div>
            <Clock />
            <h1>
              SpeedX
            </h1>
            <h3>
              File Upload using React!
            </h3>
            <div>
                <input type="file" onChange={this.onFileChange2} />
                <button onClick={this.onFileUpload2}>
                  Upload the second!
                </button>
            </div>
            <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload} />
                  Upload the first!
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
        </div>
      );
    }
  }
  
  export default App;