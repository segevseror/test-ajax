import React, { Component, useState } from "react";


const SetSession = () => {

    const [sessionText , setSessionText] = useState();
    const [res , setRes] = useState();
    const testSession = (e) =>{
        setSessionText(e.target.value);
    }

    const saveSession  = (e) => {
        var formData = new FormData();
        formData.append('setSession', sessionText);

        const checkUserReq = {
            method: 'POST',
            credentials: 'same-origin',
            body:formData
        };

        fetch('http://localhost/test-api/set.php', checkUserReq)
        .then(response => response.json())
        .then(data => {
            setRes(data.msg);
            setTimeout(function(){
                setRes('');
            },1500)
        });
    }

    return (
        <div>
            <input type="text" onChange={testSession} /> <input type="button" value="save Session" onClick={saveSession}  />
    <div>{res}</div>
        </div>
    )
};

export default SetSession;