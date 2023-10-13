import { supabase } from "../../supabaseClient"

function Register() {
    const handleSubmit = async (e) => {
        e.preventDefault()
        // const email = e.target.email.value
        // const password = e.target.password.value

        const { data, error } = await supabase.auth.signUp({
            email: e.target.email.value,
            password: e.target.password.value
          })
        
        console.log(error.message, data);
    }

    

    return (
        <>
            <form 
                onSubmit={ handleSubmit }
            >
                <label>Email</label>

                <input 
                    id='email'
                />

                <label>Password</label>

                <input 
                    id='password'
                />

                <button>Sign Up</button>
            </form>
        </>
    )
}

export default Register