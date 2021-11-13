import React, {useEffect, useState} from 'react';
import './App.css';
import communityTiles from "./communitytiles.json"
import feedSponsorships from "./feedsponsorships.json"

function App() {
    const [list, setList] = useState([]);

    const createList=()=>{
        return list.map((item,i)=>{
            if(item.categoryType==="community"){
                return <a key={item.id} href={item.url}>
                    <img  alt={item.mediaImageUri} src={item.mediaImageUri} className={"item__image"}/>
                </a>
            }else{
                return <img key={item.sponsorshipId} alt={item.coverTileUri} src={item.coverTileUri} className={"item__image"}/>
            }
        });
    };

    useEffect(() => {
        setList([...communityTiles,...feedSponsorships])
    }, []);

    return (
        <div className="container">
            {createList()}
        </div>
    );
}

export default App;
