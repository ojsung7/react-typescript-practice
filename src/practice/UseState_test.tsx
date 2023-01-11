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
        // member set 하는 방법
        setMember({name: "admin", nickname : "관리자"});
    }, [])

    useEffect(() => {
        // ? 물음표를 붙이면 null, undefined 변수 타입에 대응 가능
        console.log(member?.name);
    }, [member])

    return (
        <div>test</div>
    )
}

export default Usestate_test