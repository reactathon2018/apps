import React from 'react'

class FileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]});
    let file = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload=(e)=>{console.warn("data files", e.target.result);}
    
  }
  fileUpload(file){
    const url = 'C:\Users\Administrator\Downloads';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
   
   
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>  
      <b>Important Note:</b> Upload you resume in Filename format <b>"JobID_UserName.docx"</b><br/><br/>
        <input type="file" name="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
        
      </form>
   )
  }
}



export default FileUpload