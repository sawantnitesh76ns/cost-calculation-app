import { Component } from "react";
import './Table.css'
// import one from './one.jpg'
// import two from './two.png'
// import three from './three.png'
// import four from './four.png'
//  import five from './five.jpg'


class Table extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[{length:8,height:8,one:60,count:1},{length:12,height:12,one:85,count:2},{length:12,height:16,one:115,two:140,count:3},
            {length:16,height:20,one:150,two:175,three:200,count:4},
            {length:18,height:24,one:195,two:225,three:255,four:285,count:5},
            {length:20,height:30,one:150,two:175,three:200,four:255,five:255,count:6},
            {length:24,height:36,one:150,two:175,three:200,four:255,five:255,additional:30,count:7},
            {length:30,height:40,one:150,two:175,three:200,four:255,five:255,additional:30,count:8},
            {length:"0",height:"0",one:"0",two:"0",three:"0",four:"0",five:"0",additional:"0",count:9}
            
        
        ],
        beforeSubmit:true,
        afterSubmit:false
        
        }
        this.handleChangesInHight=this.handleChangesInHight.bind(this);
        this.handleChangesInLength=this.handleChangesInLength.bind(this);
        this.tbody=this.tbody.bind(this);
        this.handleOptionChange=this.handleOptionChange.bind(this);

    }
    

    handleViewPort(){
        var w = window.innerWidth;
        
        document.getElementsByTagName("table").style.width=w-100
    }

    handleChangesInLength(event){
        var data=this.state.data
        data[8].length=event.target.value
        this.setState({data:data})
        console.log(this.state.data[8].length)
    }

    handleChangesInHight(event){
        var data=this.state.data
        data[8].height=event.target.value
        this.setState({data:data})
        console.log(this.state.data[8].height)
    }

    

    calculateValues(length,height,count){
        var perInchValue=0.9375

        if(typeof(length)==="string" && typeof(height)==="string"){
            length=parseInt(length)
            height=parseInt(height)
        }
        var result=0;

        console.log(typeof(length))

        var cost= length*height*perInchValue
        var sizeOfImage=length*height
        
        switch(true){
            
            case (sizeOfImage<=150 && sizeOfImage>0):
                switch(true){
                    case (count===1):
                        
                        result= cost
                        break;
                    default:
                        result= 0;
                        break;
                }
                break;
            
            case (sizeOfImage<=250 && sizeOfImage>=150):
                switch(true){
                    case (count===1):
                        result= cost
                        break;
                    case (count===2):
                        result= cost+25*count
                        break;
                    default:
                        result= 0;
                        break;
                }
                break;
                
            case (sizeOfImage<=350 && sizeOfImage>=251):
                switch(true){
                    case (count===1):
                        result= cost
                        break;
                    case (count===2 || count===3):
                        result= cost+25*count
                        break;
                        
                    default:
                        result= 0;
                        break;
                }
                break;
            case (sizeOfImage<=480 && sizeOfImage>=351):
                switch(true){
                    case (count===1):
                        result= cost
                        break;
                    case (count===2 || count===3 || count===4):
                        result= cost+25*count
                        break;
                    default:
                        result= 0;
                        break;
                }
                break;
            case (sizeOfImage<=100000 && sizeOfImage>=481):
                switch(true){
                    case (count===1):
                        result= cost
                        break;
                    case (count===2 || count===3 || count===4 ||count===5):
                        result= cost+25*count
                        break;
                    default:
                        result= 0;
                        break;
                }
                break;

            default:
                result= 0;
                break;

        }

        console.log(result)

        return result

        


        // if (count===1){
        //     return cost
        // }

        // else if(cost!==0){
        //     return cost+25*count
        // }
        // else{
        //     return 0;
        // }

    }

    

    handleOptionChange(event){
        console.log(document.getElementById("default").value=event.target.value)
        document.getElementById("default").innerHTML=event.target.value
        var data=this.state.data
        var minInch=600
        var option=parseInt(event.target.value)
        for (var i = 0; i < data.length; i++) {
            var length=data[i].length
            var height=data[i].height
            if(typeof(length)==="string" && typeof(height)==="string"){
                length=parseInt(length)
                height=parseInt(height)
            }
            if(length*height>minInch){
                data[i].additional=30*option
            }
        }

        this.setState({data:data})


    }

    tbody(){
        return(
            this.state.data.map(
                data=>
                <tr key={data.count}>
                    <td>{data.count!==9 && <div>{data.length}<span>"</span><span>X</span>{data.height}<span>"</span></div>}
                    {data.count===9 && 
                    <div>
                        <form>
                        <input type="text" maxLength="4" size="4" onChange={this.handleChangesInLength}/>
                        <span>"</span>
                        <span>X</span>
                        <input type="text" maxLength="4" size="4" onChange={this.handleChangesInHight}/>
                        <span>"</span>
                        

                        </form>
                        
                    </div>}
                    </td>
                    
                    <td>{data.one && <div><span>$</span>{this.calculateValues(data.length,data.height,1)}</div>}</td>
                    <td>{data.two && <div><span>$</span>{this.calculateValues(data.length,data.height,2)}</div>}</td>
                    <td>{data.three && <div><span>$</span>{this.calculateValues(data.length,data.height,3)}</div>}</td>
                    <td>{data.four && <div><span>$</span>{this.calculateValues(data.length,data.height,4)}</div>}</td>
                    <td>{data.five && <div><span>$</span>{this.calculateValues(data.length,data.height,5)}</div>}</td>
                    <td>{data.additional && <div><span>+$</span>{data.additional}</div>}</td>
                    
                </tr>
            )


        )
    }

    

    render(){
        // var tableBody;
        // if (this.state.beforeSubmit) {
        //     tableBody = <LogoutButton />;
        // } else {
        //     loginButton = <LoginButton />;
        // }
        return(
            <div className="container">
                <div>
                    <h1 className='text-center'>COST CALCULATION</h1>
                </div>
                

                <div>
                <table cellSpacing="0">
                        <thead>
                            <tr cellSpacing="0">
                                <th>SIZE</th>
                                <th>ONE</th>
                                <th>TWO</th>
                                
                                <th>THREE</th>
                                <th>FOUR</th>
                                <th>FIVE</th>
                                <th>For Each Additional Subject<br></br>
                                <select  id="personOptions" value="1" onChange={this.handleOptionChange} >
                                    <option id="default" value="none" selected>Select an no of additional Subject </option>
                                    
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    
                                    
                                </select>
                                </th>
                                
                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.tbody() 
                                

                                
                            }

                        </tbody>
                    </table>

                    
                    
                </div>
                

            </div>
            
            
        )
    }
}

export default Table;