import NavBar from "./NavBar";
import {useRef} from 'react'


export default function ContactUs()
{

    const userFirstName = useRef('');
    const userLastName = useRef('');
    const userEmail = useRef('');
    const userComments = useRef('');

    let warningMsg = 'Make sure all required fields are filled out.'

    const formSubmit = (event) =>
    {
        event.preventDefault();
        
        if(userFirstName.current.valueOf == null | userFirstName.current.valueOf.trim90.length == 0)
            {
                return 0;
            }
        if(userEmail.current.valueOf == null | userEmail.current.valueOf.trim90.length == 0)
            {
                return 0;
            }
        if(userComments.current.valueOf == null | userComments.current.valueOf.trim90.length == 0)
            {
                return 0;
            }
    }

    return(
        <>
            <NavBar />
            <br/>
            <h1>Contact Us</h1>
            <form className='contactForm'>
                <div>
                <span className='formLable'>First Name:</span><input className='formInput' type='text' maxLength={25} placeholder='Required' required ref={userFirstName}/> <br/>
                <span className='formLable'>Last Name:</span><input className='formInput' type='text' maxLength={25} ref={userLastName}/> <br/>
                <span className='formLable'>Email:</span><input className='formInput' type='text' maxLength={35} placeholder='Required' required ref={userEmail}/> <br/>
                <span className='formLable'>Comments:</span><textarea  className='formInput' maxLength={125} placeholder='Required' required rows={3} cols={45}ref={userComments}/> <br/>
                <button className='subBtn taskBtn' onClick={(e) => formSubmit(e)}>Send</button>
                </div>
            </form>
        </>
    )

}


// first    last    email   comments

// <button onClick={(e) => btnHandleFormValidation(e)}>submit</button>