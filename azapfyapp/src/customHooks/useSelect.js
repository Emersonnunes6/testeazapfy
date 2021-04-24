import {useContext, useState} from 'react'
import GlobalStateContext from '../globalState/globalStateContext'

const useValorSelect = () => {

    const {requests} = useContext(GlobalStateContext)

   const [valorSelect, setValorSelect] = useState('')
    const onChangeSelect = (event) => {
        setValorSelect(event.target.value)
    }
   
    return [valorSelect, onChangeSelect]

}

export default useValorSelect