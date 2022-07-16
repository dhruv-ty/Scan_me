import logo from './logo.svg';
import './App.css';

function App() {
  
  const generate=()=>{
  const t=document.getElementById("txt");
  const b=document.getElementById("btn1");
  const toast = document.querySelector('#toast');
    if(t.value=="")
    alert("Please Enter some text before clicking Generate");
    else{
      b.style="opacity: 0.4;";
      t.style="pointer-events: none;";
      b.disabled=true;  
    const input = document.querySelector('.input');
    const data = input.value;
    const code = document.querySelector('.code');
	const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
	code.src = URL;

  toast.className = "show";
	setTimeout(function() {
		toast.className = toast.className.replace("show", "");
	}, 2000)

  }
  }
  const edit=()=>{
    const t=document.getElementById("txt");
    const b=document.getElementById("btn1");
    b.disabled=false;
    t.style="pointer-events: all;";
    b.style="pointer-events: all;";

    t.focus();
  }

  return (
    <div className="App">
      <h1>QR CODE GENERATOR</h1>
	<div class="main">
    <button className="edit" id="btne" onClick={edit} >Edit</button>
		<input type="text" name="" id="txt" class="input" placeholder="Enter text here..."></input>
		<button className="btn" id="btn1" onClick={generate}>Generate</button>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdnbx19IIBKvSAwARaGMfbl06_CnXNcV63g&usqp=CAU" alt="qrcode" class="code"></img>
  </div>
  <div id="toast">Successfully Generated</div>
    </div>
  );
}

export default App;
