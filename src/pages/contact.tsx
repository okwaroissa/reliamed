import React from 'react'
const Contact = () => {
    const submitform = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }
    return (
        <div className='reliamed-page'>
            <div className='container contact-us-form'>
                <p className='contact-instructions'>Feel free to send us a message. Just submit the form below, and we will get back at the earliest opportunity.</p>
                <form action="#" className='form-horizontal' onSubmit={()=>submitform}>
                    <div className='form-data-fields'>
                        <div className='form-group row'>
                            <div className='col-md-12 no-padding-margin'>
                                <input type="text" id='name' className='form-control' placeholder='Enter name'/>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col-md-12 no-padding-margin'>
                                <input type="text" id='email' className='form-control' placeholder='Enter email address'/>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col-md-12 no-padding-margin'>
                                <input type="text" id='phone' className='form-control' placeholder='Enter phone number'/>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col-md-12 no-padding-margin'>
                                <textarea id='message' className='form-control' rows={8} placeholder='Enter your message here'/>
                            </div>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-md-12 no-padding-margin'>
                            <button className='btn contact-submit' type='submit' onClick={()=>submitform}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Contact