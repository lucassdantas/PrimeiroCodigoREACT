function Welcome (props){
  return <h1> Louvado seja nosso senhor {props.name} </h1> ;
   
}
function App() {
  return (
  <div>
      <Welcome name = "Jesus Cristo "/>
  </div>
      );
}
ReactDOM.render(
<App />,
 document.querySelector("#root")
               );
