import {Component} from 'react';
import './timenode.css';
class Timenode extends Component{
    constructor(){ 
      super() 
      this.state = { 
          personName:"Arthur Bryan Santos" ,
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis scelerisque odio sit amet dictum. Etiam eget pharetra ligula. Vestibulum eget faucibus nisl. Sed in eros ornare, dapibus erat eu, commodo orci, Pellentesque." ,
          timeRecieved: "08-08 Tue 3PM",
          timeReleased: "4 PM",
          documentStatus:true
      }
    }
    
    render(){
        let statusColor = this.props.documentStatus ? "circle" : "circle-alarm";
        let html = "<div> Hello there </div>";
        function LastItem(props) {
            return  <div class="tl-status-last">
                        <div class="circle-cross"></div>
                        <div class ="circliner"> </div> 
                    </div>;
          }
                 
        function IfLastItem(props) {
            const isLast = props.isLast;
            if (isLast) {
              return <LastItem />;
            }
            return "";
        }          
      return(
        <div className="timeline-container">
            <div className="timeline">
            
                <div className="tl-date"> 
                    <a> {this.props.timeRecieved}</a>
                </div>

                <div className="tl-status">
                    <div className ={statusColor}> </div> 
                    <div className ="circliner"> </div> 
                </div>
                <div className="tl-info">{this.props.personName} </div>
                <div className="buttons">
                    <a>Tag as Complete</a>  
                </div>
                
                <div className="tl-date-rel"> 
                    <a>{this.props.timeReleased}</a>
                </div>
                    <div className="vliner-container"> <div className="vliner"></div> </div>
                <div className="infoclass">
                    {this.props.description}
                </div>
                <div className="buttons">
                    <a></a>  
                </div>  
                <IfLastItem isLast={this.props.isLastItem} />
            </div>            
        </div>
      )
    }
  }

export default Timenode;