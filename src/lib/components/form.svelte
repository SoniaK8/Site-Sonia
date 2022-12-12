
<script>
	import { supabase } from '$lib/supabaseClient'

    let nom = ''
  let email = ''
  let message = ''

	const handleClick = async () => {
        const { data, error } = await supabase
      .from('Contact_User')
      .insert([
        { nom: nom, email: email, message:message },
      ])
		console.log("error")
	}
</script>

<div class="contactform">
    <h3>Envoyer un message</h3>
    <div class="inputboite">
        
        <label for="nom">Nom</label>
        <input type="text" id="nom" name="nom" placeholder="Votre nom..." bind:value={nom}>
    </div>
    <div class="inputboite">
         <label for="email">E-mail</label>
      <input type="text" id="email" name="email" placeholder="Votre e-mail..." bind:value={email}>
    </div>
    <div class="inputboite"> 
      <label for="message">Message</label>
      <textarea type="textarea" id="message" name="message" placeholder="Inscrivez votre message ici..." bind:value={message}></textarea>
    </div>
    <div class="inputboite">
        <button on:click={handleClick}>envoyer</button>
    </div>

   
</div>





<style>

.contact{
    background-image: url(./images/img-form.jpg);
    background-size: cover;
    box-shadow: 2px 2px 12px rgba(0,0,0, 0.8);
    width: 100%;
    background-position: unset;
}

.contactform{
    padding: 75px 50px;
    background: #fff;
    box-shadow: 5px 15px 50px rgba(0,0,0, 0.8);
    max-width: 500px;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    margin-left: 38%;
}

.contactform .inputboite{
    position: relative;
    width: 100%;
    margin-bottom: 20px;
}

.contactform h3{
    color: #111;
    font-size: 1.2em;
    margin-bottom: 20px;
}

.contactform .inputboite input,
.contactform .inputboite textarea{
    width: 100%;
    border: 1px solid #555;
    padding: 10px;
    color: #111;
    outline: none;
    font-size: 16px;
    font-weight: 300;
    resize: none;
}

.contactform .inputboite input[type="submit"]{
    font-size: 1em;
    font-weight: 700;
    color: #ffff;
    background: #fb911f;
    display: inline-block;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    outline: none;
    border: none;
    transition: 0.5s;
    max-width: 120px;
    align-items: center;
    justify-content: center;
}

</style>