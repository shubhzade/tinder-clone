import Reeact, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./Tindercard.css";
import database from "./firebase"


const TinderCards = () => {
    const [people, setpeople] = useState([]);

    useEffect(() => {
        //this where the code run

        const unsubscribe= database.collection('people').onSnapshot(snapshot => (
            setpeople( snapshot.docs.map(doc => doc.data())   )
            
        ))
        return ()=>{
            unsubscribe();
        }

    }, [])



    // push to array i react 
    // people.push=[] 
    // setpeople([...people,"shubh","zade"])


    return (<>
        <div className="cardContaner">
            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>

    </>)
};


export default TinderCards;




// {
//     name: "Elon Musk",
//     url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
// },
// {
//     name: "steve jobs",
//     url: "https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
// }