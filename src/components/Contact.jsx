import { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/components/contact.sass'

const Contact = () => {
  const [name, Setname] = useState('')
  const [email, Setemail] = useState('')
  const [message, Setmessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name : name,
      message : message,
      email: email
    }

    emailjs.send("service_9746pmh", "template_tg1we1e", templateParams, "JbwzkJeaee4aM1vNU" )
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      Setname('')
      Setemail('')
      Setmessage('')


    }, (err) => {
      console.log("erro:" , err)
    })
  }

  return (
    <div className="container">
      <h2>Entrar em Contato</h2>
      <form onSubmit={sendEmail}>

        <input 
        className="input" 
        type="text" 
        placeholder="Digite seu nome" 
        onChange={(e) => Setname(e.target.value)}
        value={name}
        />

        <input 
        className="input" 
        type="email" 
        placeholder="Digite seu email" 
        onChange={(e) => Setemail(e.target.value)}
        value={email}
        />

        <textarea 
        className="textarea" 
        placeholder="Digite sua mensagem" 
        onChange={(e) => Setmessage(e.target.value)}
        value={message}
        >
        </textarea>

        <input value="Enviar" className="button" type="submit"/>

      </form>

    </div>
  )
}

export default Contact