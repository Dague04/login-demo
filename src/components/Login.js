import React, { useState } from 'react'
import { Col, Container, Form, Input, Row, Button, FormGroup, FormText, FormFeedback } from 'reactstrap'
import './login.css'
import logo from '../../src/logo.svg'
import usePasswordValidator from 'react-use-password-validator'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [isUsernameValid, setIsUsernameValid] = usePasswordValidator({
        min: 3,
        max: 8,
        lowercase: true,
        spaces: false
    })

    const [isPasseValid, setIsPassValid] = usePasswordValidator({
        min: 3,
        max: 30,
        lowercase: true,
        uppercase: false,
        symbols: false,
        spaces: false
    })

    const showUsernameSpan = `${isUsernameValid ? 'login__error-text isVisible' : 'login__error-text'}`
    const showPassSpan = `${isPasseValid ? 'login__error-text text-block isVisible' : 'login__error-text text-block'}`

    const userAndPassSpan = `${isUsernameValid && isPasseValid ? 'login__error-text isVisible' : 'login__error-text'}`

    return (
        <div className='login-container'>
            <Row>
                <Col className='login__header'>
                    <img src={logo} alt='pixelgram logo' className='login__header-image' /> |
                    <h2 className='login__header-title'>Login</h2>
                </Col>
            </Row>
            <Form className='login__form'>
                <FormGroup className='login__form-group'>
                    <Input type='text' name='username' placeholder='Username' value={username} onChange={(e) => {
                        setUsername(e.target.value)
                        setIsUsernameValid(e.target.value)
                    }} />

                    <span className={showUsernameSpan}> * Username is required</span>
                </FormGroup>
                <FormGroup style={{ marginBottom: '11px' }}>
                    <Input type='password' name='password' placeholder='Password' value={password} onChange={(e) => {
                        setPassword(e.target.value)
                        setIsPassValid(e.target.value)
                    }} />
                    <span className={showPassSpan}> * Password is required</span>
                    <span className={userAndPassSpan}> * Username or password incorrect</span>
                </FormGroup>
                <Row>
                    <Col style={{ display: 'flex', justifyContent: 'end' }}>
                        <Button color='white' className='login-button'>Register</Button>
                        <Button color='primary' className='login-button' style={{ marginLeft: '10px' }}>Login</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}


// export default function Login() {
//     return (
//         <div className='login-container'>
//             <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '98px', marginTop: '64px' }}>
//                 <img src={logo} alt='' style={{ width: '53px', height: '53px' }} /> |
//                 <h1>Login</h1>
//             </div>
//             <Form className='login-form'>
//                 <FormGroup className='login__form-group' style={{ marginBottom: '19px' }}>
//                     <Input type='text' name='username' placeholder='Username' className='login-input' />
//                     <FormText> * Username is required</FormText>
//                 </FormGroup>
//                 <FormGroup>
//                     <Input type='password' name='password' placeholder='Password' className='login-input' />
//                     <FormText> * Password is required</FormText>
//                 </FormGroup>
//                 <Row>
//                     <Col style={{ display: 'flex', justifyContent: 'end' }}>
//                         <Button color='primary' className='login-button'>Login</Button>
//                     </Col>
//                 </Row>

//             </Form>
//         </div>
//     )
// }


