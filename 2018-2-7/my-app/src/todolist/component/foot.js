import React,{Component} from 'react';
export class Foot extends Component{
    constructor(){
        super();
        this.state = {
            list:[
                {
                    route:'/all',
                    txt:'全部'
                },
                {
                    route:'/active',
                    txt:'未完成'
                },
                {
                    route:'/completed',
                    txt:'已完成'
                }
            ],
            active:'/all'
        }
    }
    click = (route) => {
        let {changeRoute} = this.props;
        changeRoute(route);
        this.setState({
            active:route
        });
    }
    allRm = () => {
        this.props.allRm();
    }
    render(){
        let {num} = this.props;
        let {list,active} = this.state;
        let listArr = list.map((e,i)=>{
            return (
                <li key={i}>
                    <a 
                        href={`#${e.route}`} 
                        className={e.route == active?'selected':''}
                        onClick={this.click.bind(this,e.route)}
                    >{e.txt}</a>
                </li>
            )
        })
    
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{num}</strong>
                    <span>条未选中</span>
                </span>
                <ul className="filters">
                    {listArr}
                </ul> 
                <button 
                    className="clear-completed"
                    onClick={this.allRm}
                >
                    清除完成项
                </button>
            </footer>
        )
    }
  
}

export default Foot;


