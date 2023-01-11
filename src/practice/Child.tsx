import React, { useEffect } from 'react'
import { UserData } from './Parent'

// userData를 Parent에 선언한 UserData interface type으로 불러옴
const Child = (userData: UserData) => {
    useEffect(() => {
        console.log(userData.id);
    }, [])
    return (
        <div>Child</div>
    )
}

export default Child