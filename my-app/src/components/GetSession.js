import React, { Component, useState } from "react";

const GetSession = () =>{
    const [ resText , setResText] = useState();
    const hendaleGet = (e) =>{
        const checkUserReq = {
            method: 'GET',
            credentials: 'same-origin',
        };

        fetch('http://localhost/test-api/get.php', checkUserReq)
        .then(response => response.json())
        .then(data => {
            setResText( data['test']);
        });
    }

    return (
        <div style={{marginTop: '10px'}}>
            <input type="button" onClick={hendaleGet} value="The Session is saved"/>
    <div>{resText}</div>
        </div>
    )
}

export default GetSession;