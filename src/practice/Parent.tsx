import React, { useState } from 'react'
import Child from './Child';

// UserData interface로 선언
export interface UserData {
    id: String;
    name: String
}
const Parent = () => {
    // userData 변수 초기화
    const [userData, setUserData] = useState<UserData>({
        id: "user",
        name: "유저"
    })
    return (
        // Child component로 userData 변수 전달
        <Child {...userData}/>
    )
}

export default Parent