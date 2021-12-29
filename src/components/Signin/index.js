import React from 'react'
import{Container,FormWrap,Icon,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,Text}from'./SigninElements'

function SignIn() {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>여행가자2</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>로그인</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='Email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='Password' required/>
                            <FormButton type='submit'>로그인</FormButton>
                            <Text>패스워드 를 잊으셨습니까?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            
        </>
    )
}

export default SignIn
