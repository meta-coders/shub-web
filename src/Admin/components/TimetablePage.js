import React from 'react';
import axios, { post } from 'axios';

class TimetablePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then((response) => {
      console.log(response.data);
    });
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  fileUpload(file) {
    const url = 'http://10.1.49.131:3000/admin/uploadTimetable';
    const formData = new FormData();
    formData.append('sessionId', 'ee2193db5839bdd821f25caf173a5f07');
    formData.append('table', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    return post(url, formData, config).then((response) => {
      alert(response.data.length1); // ex.: { user: 'Your User'}
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>Timetable Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default TimetablePage;
