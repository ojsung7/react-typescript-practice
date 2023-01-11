import React, { useEffect, useState } from 'react'

// Member type 지정
type Member = {
    name: String;
    nickname: String;
}

const Usestate_test = () => {
    // member 변수를 앞에 선언한 Member 타입으로 선언
    const [member, setMember] = useState<Member | null>();
    
    useEffect(() => {
        setMember({name: "admin", nickname : "관리자"});
    }, [])

    useEffect(() => {
        console.log(member?.name);
    }, [member])

    return (
        <div>test</div>
    )
}

export default Usestate_test