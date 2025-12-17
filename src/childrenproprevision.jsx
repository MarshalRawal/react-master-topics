export default function Box({children}){
    return <div className="Box">{children}</div>
}
// function App() 
// { const [text, setText] = useState("");
//  return ( <> 
//  <Input text={text} setText={setText} /> 
//  <Preview text={text} />
//   </> ); }
//    function Input({ text, setText }) 
//    { return <input value={text} onChange={e => setText(e.target.value)} />;
//  } 
//  function Preview({ text }) 
//  { return <p>{text}</p>; }