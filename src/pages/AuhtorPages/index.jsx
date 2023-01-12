import React, {useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import ButtonAppBar from '../../components/Header';

const AuhtorPage = () => {
    const [todo, setTodo] = useState(0);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const response = await (
        await fetch("https://fakerapi.it/api/v1/texts?_quantity=2&_characters=150")
      ).json();
      setTodo(response);
    };

    return (
      <>
        <ButtonAppBar />
        <table className="table table-bordered">
          <tr>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Content</th>
          </tr>

          {todo.data?.map((item, index) => (
            <tr data-index={index}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.content}</td>
            </tr>
          ))}
        </table>
      </>
    )
};

export default AuhtorPage;

// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0);
//   const [count1, setCount2] = useState(10);
//   const [user, setUser] = useState();
//   const [todo, setTodo] = useState(0);

//   // Funcao anonima - useEffect utilizacao
//   useEffect(() => {
//     console.log("Roda a cada renderização")
//   });

//   // Array de dependencias - Esse useEffect só roda quando o count for alterado
//   useEffect(() => {
//     console.log("INCREMENTA")
//   }, [count]);

//   // Array de dependencias vazio - Só é executado quando a pagina é carregada, utilizado pra chamada de API`s
//   useEffect(() => {
//     console.log("EXECUTA UMA VEZ")
//   }, []);

//   // Clean up function, limpa a memoria
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       console.log(`INCREMENT FOI ALTERADO ${count} VEZES`)
//     }, 2000);
    
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [count]);

//   // fetch API com useEffect - Realizado apenas no loading da pagina e não inumeras vezes
//   useEffect(() => {
//     fetch('https://api.github.com/users/devgrolli')
//       .then((res) => res.json())
//       .then((json) => setUser(json));
//   }, []);

//   const myVariable = {
//     product: "UAHEUAHE",
//     price: 1243
//   }

//   useEffect(() => {
//       fetchData();
//     }, []);

//   const fetchData = async () => {
//       let response = await (
//         await fetch("https://fakerapi.it/api/v1/texts?_quantity=2&_characters=150")
//       ).json();
//       setTodo(response);
//     };

//   return (
//     <div className='App'>
//       <div>
//         <table className="table table-bordered">
//           <tr>
//             <th>Titulo</th>
//             <th>Autor</th>
//             <th>Content</th>
//           </tr>

//           {todo.data?.map((item, index) => (
//             <tr data-index={index}>
//               <td>{item.title}</td>
//               <td>{item.author}</td>
//               <td>{item.content}</td>
//             </tr>
//           ))}
//         </table>
//       </div>
      
//       <div>
//         <button onClick={() => setCount((prevCount) => prevCount + 1 )}>
//           Renderizar 1
//         </button>
//         <p>{count}</p>
//       </div>

//       <div>
//         <button onClick={() => setCount2((prevCount) => prevCount + 1 )}>
//           Renderizar 2
//         </button>
//         <p>{count1}</p>
//       </div>

//       {user && (
//         <div>
//           <p>Dados do usuário:</p>
//           <h1>Nome: {user.name}</h1>
//           <p>
//             Site: <a href={user.blog}>{user.blog}</a>
//           </p>
//           <img src={user.avatar_url}></img>
//         </div>
//       )}
//     </div>
//   )
// }

// export default App
