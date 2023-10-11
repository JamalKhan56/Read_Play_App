import React,{useState} from 'react'


export default function TextForm(props) {
    const [textValue,setText]= useState('');

    const handleonclick = () =>{
        /*let newText = textValue.toUpperCase();
        setText(newText);*/
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(textValue);
        synth.speak(utterance);

    }
    const handleonchange = (event) =>{
        setText(event.target.value);
           
    }
   
    

  return (
    <div>
      <div className='form-container '>
        <h2>{props.heading}</h2>
      <textarea
        rows={4}
        value={textValue}
        onChange={handleonchange}
        placeholder="Enter your text here"
      />
      <br />
      <button className='submit' onClick={handleonclick}>Record</button>
      </div>
    
  </div>
  )
}
