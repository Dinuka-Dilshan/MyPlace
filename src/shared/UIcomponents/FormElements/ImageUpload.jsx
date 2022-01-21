import { useEffect, useRef } from "react";
import React from "react";
import "./ImageUpload.css";
import Button from "../Button";
import { useState } from "react";

const ImageUpload = (props) => {
  const uploaderRef = useRef();
  const [file,setFile] = useState(null);
  const [image,setImage] = useState(null);
  const [isValid,setIsValid] = useState(false);

  const clickHandler = () => {
    uploaderRef.current.click();
  };

  const changeHandler = (event) => {

    let isFileValid = isValid;
    let pickedFile = null;

    if(event.target.files && event.target.files.length === 1){
        setFile(event.target.files[0]);
        pickedFile = event.target.files[0];
        setIsValid(true);
        isFileValid = true;
    }else{
        setIsValid(false);
        isFileValid = false;
    }

    props.onInput(props.id,pickedFile,isFileValid);
  };


  useEffect(()=>{

    if(file){
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            setImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }
    

  },[file])


  return (
    <div className="image-upload-wrapper">
      <div className="image-upload-label">{props.title}</div>
      <input
        type="file"
        accept=".jpg, .jpeg,.png"
        ref={uploaderRef}
        style={{ display: "none" }}
        onChange={changeHandler}
      />
      {image && <img src={image} alt='' className="image-upload-preview"/>}
      <Button type={'button'} styles={{marginLeft:'0.3rem'}} onClick={clickHandler}>{image?'Change Image':'Browse Files'}</Button>
    </div>
  );
};

export default ImageUpload;
