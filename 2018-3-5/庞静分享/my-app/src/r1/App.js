import React,{Component} from 'react';
import './App.css';
import Todo_list from './todo-list'
import FootM from './foot'
import HeadM from './head'

class App extends Component {
    constructor(){
      super();
      this.state={
       arr:[
         {
           id:0,
           txt:'多多对对对',
           checked:false,
           display:'block'
         }
       ],
       val:'',
       selected:'alla'
      }
    }
    changeTxx =(txt,id)=>{
      let {arr}=this.state;
      arr.forEach((e,i)=>{
        if(e.id==id){
          e.txt=txt
        }   
      })
      this.setState({
        arr
      })
    }
    addData =(data) => {
      let {arr} = this.state;
      let arr2 = arr.concat();
      arr2.unshift(data);
      this.setState({
        arr:arr2,
      })
    }

    changebox = (id) => {
      let {arr} = this.state;  
      arr.forEach((e,i)=>{
        if(e.id==id){
          e.checked=!e.checked
        }   
      })
      this.setState({
        arr,
      });
    }

    click = (id) =>{
      let {arr} = this.state; 
      arr.forEach((e,i)=>{
        if(e.id==id){
          arr.splice(i,1)         
          arr.forEach((e,i)=>{
            e.id=arr.length-1-i
          })
        }   
      })   
      this.setState({
        arr,
      });
    }

    changeb =(ev) =>{
      let {arr} = this.state;    
      arr.forEach((e,i)=>{
        e.checked=ev.target.checked
      })
      this.setState({
        arr
      });
    }
    showli =(n)=>{
      let {selected} = this.state;
      
      selected=n
      this.setState({
        selected
      });
    }

    render(){  
      let {arr,selected}=this.state
      switch(selected){
        case 'alla':
          arr.forEach(e=>{
            e.display='block'
          })
        break;
        case 'Activea':
          arr.forEach(e=>{
            if(e.checked){e.display='block'}else{e.display='none'}
          })
        break;
        case 'Completeda':
          arr.forEach(e=>{
            if(!e.checked){e.display='block'}else{e.display='none'}          
        })
        break;
      } 
      let checkb=arr.length?arr.every((e)=>e.checked):false
      let num=arr.length
      let li_list=this.state.arr.map((e,i)=>{
        if(e.checked)num--
          let obj={
            display:e.display,
            index0:e.id,
            checked:e.checked,
            changebox:this.changebox,
            click:this.click,
            txt:e.txt,
            changeTxx:this.changeTxx
          }        
          return <Todo_list {...obj} key={i}/>
        })
        return (
            <section className="todoapp">
                <div>
                    <HeadM addData={this.addData}/>
                    <section className="main">
                        <input 
                            className="toggle-all" 
                            type="checkbox" 
                            checked={checkb}
                            onChange={this.changeb} 
                        />                       
                        <ul className="todo-list">
                            {li_list}
                        </ul>
                    </section>
                    <FootM num={num} arr={arr} click={this.click} showli={this.showli}/>                   
                </div>
            </section>
        )
    }
}

export default App