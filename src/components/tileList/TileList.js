import React from "react";
import {Tile} from '../tile/Tile';


export const TileList = (props) => {
    const objArr = props.objArr;
    const maps = () => {
    return objArr.map((value, index) => (
      <Tile value={value} key={index}/>
      ))}
 
  return (
    <div>
     {maps()}
       {/* {tiles.map((value, index) => (
        <Tile key={index} value={value} />
      ))} */}
      
     
    </div>
  );
};

// import React from "react";

// import { Tile } from "../tile/Tile";

// export const TileList = ({ tiles }) => {
//   return (
//     <div>
//       {tiles.map((tile, index) => (
//         <Tile key={index} tile={tile} />
//       ))}
//     </div>
//   );
// };
