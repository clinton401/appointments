import React from "react";

export const Tile = ({value}) => {
  const array = Object.values(value);
  return (
    <div className="tile-container">

      {array.map( (data, index) => {
        if (index === 0 ) {
          return <p className="tile-title" key={index}>{data}</p>;
        }
          return <p className="tile" key={index}>{data}</p>;
        })
      }
    
    </div>
  );
};
// import React from "react";

// export const Tile = ({ tile }) => {
//   return (
//     <div className="tile-container">
//       {Object.values(tile).map((value, index) => (
//         <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>
//           {value}
//         </p>
//       ))}
//     </div>
//   );
// };
