// import React from 'react'
// import styled from 'styled-components'

// const Input = ({ placeholder, handleChange, name, type,required }) => {
//     return (
//         <InputContainer>
//             <input
//                 placeholder={placeholder}
//                 onChange={handleChange}
//                 name={name}
//                 type={type}
//                 required={required}
                
//             />
//         </InputContainer>
//     )
// }

// export default Input

// const InputContainer = styled.div`
// input {
//      padding: 15px 20px;
//     padding-right: 100px;
//     width: 55%;
//     border: none;
//     border-bottom: 1px solid lightblue;
//     outline: none;
//     margin-top: 20px;
//     text-align: left;
//     box-shadow: 1px 1px 3px #0000003d;
// }
// input:focus {
//     border: none;
//     box-shadow: 1px 1px 4px black;
//     border-bottom: 2px solid blue;
// }

// `











// Input.jsx

import React from 'react';
import styled from 'styled-components';

const Input = ({ placeholder, handleChange, name, type, required, pattern }) => {
  return (
    <InputContainer>
      <input
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        type={type}
        required={required}
        pattern={pattern}
      />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  input {
    padding: 15px 20px;
    padding-right: 100px;
    width: 55%;
    border: none;
    border-bottom: 1px solid lightblue;
    outline: none;
    margin-top: 20px;
    text-align: left;
    box-shadow: 1px 1px 3px #0000003d;
  }

  input:focus {
    border: none;
    box-shadow: 1px 1px 4px black;
    border-bottom: 2px solid blue;
  }
`;
