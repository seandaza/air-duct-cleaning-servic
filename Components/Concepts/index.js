import React from 'react'
import style from './style.module.css'
import emailjs from '@emailjs/browser'

export default function Concepts() {
  
  const name = (e) => {
    var nombre = e.target.value;
    console.log(nombre)
    return nombre
  }

  const form = React.createRef()

  const sendEmail = (event) =>{
    var nombre = document.getElementById("name").value;
                          //service_ua04by9 , template_nhn5a27', 1Uhdp2pwqr9r5y5qe
                          //'service_x45naua', 'template_qce5p7i', event.target, '-K4V0gv4hAuRlBlB3'
    event.preventDefault();
    emailjs.sendForm('service_x45naua', 'template_qce5p7i', event.target, '-K4V0gv4hAuRlBlB3')
      .then(response =>{
        console.log('SUCCESS!', response.status, response.text);
        //agradecer al usuario pasando la varible nombre
        alert(`Thank you ${nombre} for your interest in our services!. We will contact you shortly.`)
      })
      .catch(err =>{
        console.log('FAILED...', err);
        alert('Sorry, something went wrong. Please try again later.')
      }
    );
    // recargar la misma pagina
    /* window.location.reload(); */
    //resetear el formulario
    form.current.reset();
    
  }


  return (
    <div className={style.concept} id="contact us">
        <h1>“THE BEST INVESTMENT YOU´VE EVER MAKE IS YOUR OWN HEALTH” <br/>REQUEST QUOTE</h1>
        <div className={style.email_box}>
          <form ref={form} className={style.form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder='Your Name' id='name' onChange={name} required className={style.input}/><br/>
            <br/>

            <input type="email" name="user_email" placeholder='Your Email' required className={style.input}/><br/>
            <br/>

            <input type="number" name="user_phone" placeholder='Your Phone' required className={style.input}/><br/>
            <br/>

            <select name="user_selection" className={style.input}>
              <option value="Air duct cleaning services">Air Duct Cleaning - Sanitization</option>
              <option value="Dryer vent cleaning services">Dryer Vent Cleaning</option>
              <option value="Chimney Sweep">Chimney Sweep</option>
            </select><br/><br/>

            <input type="number" name="user_number" placeholder='Total air conditioning systems' required className={style.input}/><br/>
            <br/>

            <select name="user_area" className={style.input}> 
              <option value="New York">New York</option>
              <option value="New Jersey">New Jersey</option>
              <option value="Connecticut">Connecticut</option>
            </select><br/><br/>

            <input type="number" name="zip_code" placeholder='Zip Code' required className={style.input}/><br/><br/>

            <textarea name="user_message" placeholder='Address | Comments . . .' required className={style.input}/><br/>
            
            <button className={style.button}>Send</button>
          </form>
        </div>
    </div>
  )
}

