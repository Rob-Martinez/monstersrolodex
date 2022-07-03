// import { Component } from "react";
import Card from '../card/card.component.jsx';
import './card-list.styles.css';


const CardList = ({ monsters }) => {
    return(
        <div className='card-list' >
            {monsters.map((monster) => {
                return(
                    <div key={monster.id}>
                        <Card monster={monster}/>
                    </div>
                );
            })}
        </div>
    );
}

// class CardList extends Component {

//     render() {
//         const { monsters } = this.props;
        
        
//         return(
//         <div className="card-list">
//             {monsters.map((monster) => {
//             return (
//                 <div key={monster.id}>
//                     <Card monster={monster}/>
//                 </div>
                
//                 )}
//             )}
//         </div>
//         );
//     }
// }

export default CardList;