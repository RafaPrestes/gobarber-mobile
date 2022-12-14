import styled from 'styled-components/native'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

export const Container = styled.SafeAreaView`
    flex: 1;
`

export const Title = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    align-self: center;
    margin-top: 50px;
`

export const Separator = styled.View`
    height: 1px;
    background: rgba(255,255,255, 0.2);
    margin: 20px 0 30px;
`

export const Form = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {padding: 30}
})`
    align-self: stretch;
`
export const FormInput = styled(Input)`
    margin-bottom: 10px;
`
export const SubmitButton = styled(Button)`
    margin-top: 5px;
    height: 46;
    background: #3b9eff;
    border-radius: 4;
    justify-content: center;
    align-items: center;
`

export const LogoutButton = styled(Button)`
    margin-top: 10px;
    height: 46;
    background: #f64c75;
    border-radius: 4; 
    justify-content: center;
    align-items: center;
`

