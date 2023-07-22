import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
`
export const RegisterSection = styled.div`
  display: flex;
  align-items: center;
`
export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  width: 270px;
`
export const Fhead = styled.h1`
  font-size: 45px;
  color: #334155;
  font-weight: 500;
`
export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #7b8794;
  margin-bottom: 10px;
`
export const NameInput = styled.input`
  font-size: 13px;
  height: 34px;
  padding: 7px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  margin-bottom: 16px;
  outline: none;
`
export const OptionsSection = styled.select`
  height: 34px;
  border: 1px solid #cbd5e1;
  padding: 0px 7px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  outline: none;
`
export const TopicOption = styled.option`
  font-size: 20px;
`
export const RegisterImage = styled.img`
  width: 400px;
`
export const RegisterNow = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  margin-top: 20px;
  border-width: 0px;
  align-self: flex-start;
  height: 36px;
  padding: 0px 20px;
  border-radius: 7px;
`

export const Error = styled.p`
  color: #ff0b37;
  margin: 0;
  padding: 0;
`
