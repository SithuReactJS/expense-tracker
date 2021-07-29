import React from "react";
import ListShow from "./ListShow";
import Total from "./Total";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn , TableHeaderColumnProps } from "react-bootstrap-table";
import 'react-bootstrap-table/css/react-bootstrap-table.css';


const MainDivWrapper = styled.div`{
    background: #e2dbde;
}`;

class PeopleList extends React.Component{
    constructor(props){
        super(props);
       let d=JSON.parse(localStorage.getItem('data'));
       if(d)
       {
           this.state = {
               data: d,
               expense: '',
               price: '',
               total: '',
           }
       }else{
           this.state = {
               data:[],
               expense: '',
               price: '',
               total:'',
           }
       }
       
        this.add=this.add.bind(this);
        this.update=this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.total = this.total.bind(this);
        this.remove = this.remove.bind(this);
        this.clear = this.clear.bind(this);
    }
    add(e){
        e.preventDefault();
        let data=this.state.data;
        // console.log('data: ',data);
        // let expense=this.state.expense;
        let nowDate = new Date().toLocaleDateString();
        let price = this.state.price;
        if (price){
            data.push({ nowDate : nowDate, price: price, status: "Added" });
            console.log("updated data: ",data);
            this.setState({ data: data, price: '' });
            localStorage.setItem('data', JSON.stringify(data));
            this.total();
        }
       
    }
    remove(e){
        e.preventDefault();
        let data=this.state.data;
        // console.log('data: ',data);
        // let expense=this.state.expense;        
        let nowDate = new Date().toLocaleDateString();
        let price = this.state.price;
        // if (price && expense){
        if (price){        
            // data.push({ expense: expense, price: price, delete: true });
            data.push({ nowDate: nowDate, price: price, status: "Removed" });
            console.log("updated data: ",data);
            this.setState({ data: data, price: '' });
            localStorage.setItem('data', JSON.stringify(data));
            this.total();
        }
       
    }
    update(event){
        let price=this.state.price;
        let expense = this.state.expense;
        event.target.id === 'expense' ? (this.setState({ expense : event.target.value })) : (this.setState({ price : event.target.value})) ;
       let check=this.state;
        // console.log('check:',check);
    }
    clear(){
        this.setState({total : 0});
        // localStorage.setItem('data','');
        localStorage.removeItem('data');
        console.log("in clear() this.state.data is : ", this.state.data);
        this.setState({data : []});
    }
    delete(index){
        console.log(index);
        let data=this.state.data;
        // data.splice(index,1);
        let recentTotal = this.state.total ;
        recentTotal = recentTotal - parseInt(this.state.price);
        this.setState({total:recentTotal});
        this.setState({data});
        localStorage.setItem('data', JSON.stringify(data));
        this.total();
    }
    total(){
        let data=this.state.data;
        if(data)
        {
            let result = 0;
            console.log("this.state is : ", this.state);
            data.forEach(element => {
                console.log('total:', element);
                if(element.status === "Removed"){
                    result -= parseInt(element.price);
                }else{
                    result += parseInt(element.price);
                }
            });
            console.log('result', result);
            this.setState({ total: result });
        }
     
    }
    componentDidMount(){
        this.total();
    }
  render(){    
    return(
       
        <div className="wrapper">
        <div className="userinput">
        {/* <div><h1>Expense Tracker - Basic</h1></div> */}
        <MainDivWrapper>
        <Container>
        <Row style={{margin: '10px', backgroundColor: 'skyblue',borderRadius:"2rem", height: '100%', maxHeight: '100%', position: 'fixed', width: '80%'}} className="expenseRow1">
        <h1>Expense Tracker - Basic</h1>
        <Col style={{backgroundColor: 'silver',}} className="expenseRow">
        <h3>Total Balance is : {this.state.total || 0} </h3>
        <form>
                {/* <input type="text" className="myInput" onChange={this.update} id="expense" placeholder="Expense:" value={this.state.expense}/> */}
                <input type="number" className="myInput" onChange={this.update} id="price" placeholder="Price:" value={this.state.price}/>
                
        </form>    
        <button type="submit" className="add" onClick={this.add}>Add</button><button type="submit" className="remove" onClick={this.remove}>Remove</button><button type="submit" className="clear" onClick={this.clear}>Clear</button>    
        </Col>
        { <Row style={{backgroundColor:"white",maxHeight:"50%",height:'50%',}} className="expenseRow">
            <Col>
            <div className="ListShow">
                {this.state.total !== 0 && 
                <div style={{display: 'flex'}}>
                    <p>Transactions Details: </p>
                </div>
                }
                {  this.state.total !== 0 &&                   
                    <BootstrapTable data={this.state.data} height='170'  striped
                    hover
                    condensed                                    
                    search
                    tableStyle={{borderColor: 'cyan', borderRadius: '1rem',  borderWidth: '4px'}}
                    trStyle={{backgroundColor: 'cornflowerblue'}}
                    >
                        <TableHeaderColumn isKey dataField='nowDate' thStyle={{backgroundColor: 'green',}}>Date</TableHeaderColumn>
                        <TableHeaderColumn dataField='price' thStyle={{backgroundColor: 'green'}}>Amount</TableHeaderColumn>
                        <TableHeaderColumn dataField='status' thStyle={{backgroundColor: 'green'}}>Status</TableHeaderColumn>
                    </BootstrapTable>
                }
                {this.state.total === 0 && 
                <div>
                    <p>No Transactions details available : </p>
                </div>
                }
                {/* <ul>
                    {this.state.data.map((data,index)=>{
                        // console.log('map: ',data);
                            return <ListShow data={data} index={index} key={index} delete={this.delete}/>
                    })}
                </ul> */}
            </div>
            </Col>            
        </Row> }
        </Row>
        </Container>
        </MainDivWrapper>
        </div>
            {/* <Total total={this.state.total}/> */}
        </div>
    )
  }
  }
  export default PeopleList;