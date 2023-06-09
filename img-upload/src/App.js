import React from "react";
import ReactDOM from "react-dom";

// import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Upload Image</h1>
      <ul className="mw400 center" style={{ textAlign: "left" }}>
        <li>
          <span>Upload Image -</span> 
          <UploadPreview />
        </li>
      </ul>
    </div>
  );
}

class UploadPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
  }
  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.onChange} />
        <img style={{ width: "100%" }} src={this.state.file} />        
        {this.state.file && (
          <div style={{ textAlign: "center" }}>
            <button onClick={this.resetFile}>Remove File</button>
          </div>
        )}
      </div>
    );
  }
}

export default App
