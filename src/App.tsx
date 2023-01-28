import {Container, Typography} from '@mui/material';
import React from 'react';
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";


const textStyle: SxProps<Theme> = {
    color: '#000000',
    fontFamily: "'Roboto', sans-serif",
}
const links = ['https://oaidalleapiprodscus.blob.core.windows.net/private/org-2HEcrfwifeCoeYEzwqDuejRa/user-f1kSUVBzS2c7EqWIMxMaIS9f/img-NTUmPnpOgxzp45AA4UOllBN4.png?st=2023-01-28T13%3A25%3A46Z&se=2023-01-28T15%3A25%3A46Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-27T23%3A33%3A33Z&ske=2023-01-28T23%3A33%3A33Z&sks=b&skv=2021-08-06&sig=G3Gmed6EaHON8qUNH9NrSSbwZh0dIO0PelZDIygzr8Q%3D',
    'https://oaidalleapiprodscus.blob.core.windows.net/private/org-2HEcrfwifeCoeYEzwqDuejRa/user-f1kSUVBzS2c7EqWIMxMaIS9f/img-tdFjnnohmsr8pJMW3NmPXsqb.png?st=2023-01-28T13%3A25%3A46Z&se=2023-01-28T15%3A25%3A46Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-27T23%3A33%3A33Z&ske=2023-01-28T23%3A33%3A33Z&sks=b&skv=2021-08-06&sig=/lq9lcFiHlNrW889qySjVg0eyseQe63uvOmzTPg4wnI%3D',
    'https://oaidalleapiprodscus.blob.core.windows.net/private/org-2HEcrfwifeCoeYEzwqDuejRa/user-f1kSUVBzS2c7EqWIMxMaIS9f/img-eD7yOvaeK4amyrhTaKfzCkj5.png?st=2023-01-28T13%3A25%3A46Z&se=2023-01-28T15%3A25%3A46Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-27T23%3A33%3A33Z&ske=2023-01-28T23%3A33%3A33Z&sks=b&skv=2021-08-06&sig=Q1%2BwmMsUbmWEeGq%2BZ/jPVFa%2BH0m5fLy1oR937xrhduI%3D',
    'https://oaidalleapiprodscus.blob.core.windows.net/private/org-2HEcrfwifeCoeYEzwqDuejRa/user-f1kSUVBzS2c7EqWIMxMaIS9f/img-kKwk73PEZ89f3L6zoZEDX92s.png?st=2023-01-28T13%3A25%3A46Z&se=2023-01-28T15%3A25%3A46Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-27T23%3A33%3A33Z&ske=2023-01-28T23%3A33%3A33Z&sks=b&skv=2021-08-06&sig=AOi4gFpbRYzHQ7JbrlyJ9O2m3bncirQ8TnT5oSfKQcI%3D',
    'https://oaidalleapiprodscus.blob.core.windows.net/private/org-2HEcrfwifeCoeYEzwqDuejRa/user-f1kSUVBzS2c7EqWIMxMaIS9f/img-yCcfCWcNOxUdfIn8GBfh3Win.png?st=2023-01-28T13%3A25%3A46Z&se=2023-01-28T15%3A25%3A46Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-27T23%3A33%3A33Z&ske=2023-01-28T23%3A33%3A33Z&sks=b&skv=2021-08-06&sig=cdTwzwqKfz7wE30X1Pk4j7CxFrLaoAUnDYh0/wTweyI%3D',
    'https://oaidalleapiprodscus.blob.core.windows.net/private/org-2HEcrfwifeCoeYEzwqDuejRa/user-f1kSUVBzS2c7EqWIMxMaIS9f/img-ccQ8Le8SRHOiPrmnHT8k74Jh.png?st=2023-01-28T13%3A25%3A46Z&se=2023-01-28T15%3A25%3A46Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-27T23%3A33%3A33Z&ske=2023-01-28T23%3A33%3A33Z&sks=b&skv=2021-08-06&sig=ihJ2zniJcVVQgpYBhcX2phpBNhuJYJWK6d66LEDSpJI%3D',
    'https://oaidalleapiprodscus.blob.core.windows.net/private/org-2HEcrfwifeCoeYEzwqDuejRa/user-f1kSUVBzS2c7EqWIMxMaIS9f/img-pmriWLg3CyKMhW9kmUNTn7et.png?st=2023-01-28T13%3A25%3A46Z&se=2023-01-28T15%3A25%3A46Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-27T23%3A33%3A33Z&ske=2023-01-28T23%3A33%3A33Z&sks=b&skv=2021-08-06&sig=Hgp%2Bl77KbcsO9fCa42TQna4mpIT%2BkWIccvI3p/Czqic%3D',
    'https://oaidalleapiprodscus.blob.core.windows.net/private/org-2HEcrfwifeCoeYEzwqDuejRa/user-f1kSUVBzS2c7EqWIMxMaIS9f/img-q7hIqDlaz7KrBKdSoyp728Zc.png?st=2023-01-28T13%3A25%3A46Z&se=2023-01-28T15%3A25%3A46Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-27T23%3A33%3A33Z&ske=2023-01-28T23%3A33%3A33Z&sks=b&skv=2021-08-06&sig=ZOIzecCYpuVPzT%2Bk72wZZovV7axBqVYVFAqg5ZMDQq0%3D',
    'https://oaidalleapiprodscus.blob.core.windows.net/private/org-2HEcrfwifeCoeYEzwqDuejRa/user-f1kSUVBzS2c7EqWIMxMaIS9f/img-O0xNgOmOXDHbW9hH1IQEOGTu.png?st=2023-01-28T13%3A25%3A46Z&se=2023-01-28T15%3A25%3A46Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-27T23%3A33%3A33Z&ske=2023-01-28T23%3A33%3A33Z&sks=b&skv=2021-08-06&sig=l715qT3IePGXODS1vYdCuUNCvNH5G5kb5eQcR8UyEkM%3D',
    'https://oaidalleapiprodscus.blob.core.windows.net/private/org-2HEcrfwifeCoeYEzwqDuejRa/user-f1kSUVBzS2c7EqWIMxMaIS9f/img-vuMh5vkmuGZOaqjQajeYCCFQ.png?st=2023-01-28T13%3A25%3A46Z&se=2023-01-28T15%3A25%3A46Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-27T23%3A33%3A33Z&ske=2023-01-28T23%3A33%3A33Z&sks=b&skv=2021-08-06&sig=6JBaXlaEH9kLmwrq7Timl7/vmpug6qrPzPMj9EpwXw8%3D']

const noSelect = 'noselect';

function App() {
    return (
        <div className="App">
            <Container>
                {
                    links.map((image, index) => {
                        return (
                            <div key={index} className={noSelect}>
                                <Typography variant="h4" component="h2" gutterBottom>{index}</Typography>
                                <img src={image}/>
                            </div>
                        )
                    })
                }
            </Container>

        </div>
    );
}

export default App;
