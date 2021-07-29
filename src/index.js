import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PeopleList from './components/PeopleList';

// class PeopleList extends React.Component{
//   constructor(props){
//       super(props);
//      let d=JSON.parse(localStorage.getItem('data'));
//      if(d)
//      {
//          this.state = {
//              data: d,
//              expense: '',
//              price: '',
//              total: '',
//          }
//      }else{
//          this.state = {
//              data:[],
//              expense: '',
//              price: '',
//              total:'',
//          }
//      }
     
//       this.add=this.add.bind(this);
//       this.update=this.update.bind(this);
//       this.delete = this.delete.bind(this);
//       this.total = this.total.bind(this);
//   }
//   add(e){
//       e.preventDefault();
//       let data=this.state.data;
//       // console.log('data: ',data);
//       let expense=this.state.expense;
//       let price = this.state.price;
//       if (price && expense){
//           data.push({ expense: expense, price: price, delete: false });
//           console.log("updated data: ",data);
//           this.setState({ data: data, expense: '', price: '' });
//           localStorage.setItem('data', JSON.stringify(data));
//           this.total();
//       }
     
//   }
//   update(event){
//       let price=this.state.price;
//       let expense = this.state.expense;
//       event.target.id == 'expense' ? (this.setState({ expense : event.target.value })) : (this.setState({ price : event.target.value})) ;
//      let check=this.state;
//       // console.log('check:',check);
//   }
//   delete(index){
//       console.log(index);
//       let data=this.state.data;
//       data.splice(index,1);
//       this.setState({data});
//       localStorage.setItem('data', JSON.stringify(data));
//       this.total();
//   }
//   total(){
//       let data=this.state.data;
//       if(data)
//       {
//           let result = 0;
//           data.forEach(element => {
//               console.log('total:', element);
//               result += parseFloat(element.price);
//           });
//           console.log('result', result);
//           this.setState({ total: result });
//       }
   
//   }
//   componentDidMount(){
//       this.total();
//   }
// render(){    
//   return(
     
//       <div className="wrapper">
//       <div className="userinput">
//       <div><h1>List of Expense</h1></div>
//       <h3>Add Your Expense</h3>
//       <form>
//               <input type="text" className="myInput" onChange={this.update} id="expense" placeholder="Expense:" value={this.state.expense}/>
//               <input type="number" className="myInput" onChange={this.update} id="price" placeholder="Price:" value={this.state.price}/>
//               <button type="submit" className="add" onClick={this.add}>+</button>
//       </form>
//       </div>
//           <div className="ListShow">
//       <ul>
//           {this.state.data.map((data,index)=>{
//               // console.log('map: ',data);
//                      return <ListShow data={data} index={index} key={index} delete={this.delete}/>
//           })}
//       </ul>
//       </div>
//           <Total total={this.state.total}/>
//       </div>
//   )
// }
// }

// class ListShow extends React.Component{
//   render(){
//       return(
          
//           <li><span className="expenses">{this.props.data.expense}</span><span className="price">{this.props.data.price}</span><button className="delete" onClick={(e)=>{
//               e.stopPropagation();  
//               this.props.delete(this.props.index)}}>-</button></li>
  
//       )
//   }
// }

// const Total=(props)=>{
// return(
//   <div className="total">
//       Total: {props.total}
//       </div>
// )
// }
class App extends React.Component{
  render(){
      return (<wrapper><PeopleList/>
          </wrapper>)
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
