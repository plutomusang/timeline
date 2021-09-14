import {Component} from 'react';
import './timenode.css';
class Timenode extends Component{
    constructor(){ 
      super() 
      this.state = { 
          opened:true
      }
    }
    
    render(){
        let statusColor = this.props.documentStatus ? "circle" : "circle-alarm";
        
        function EmptyButton() {
            return  <div class="buttons">
                        <a></a>  
                    </div>
        }
        function ShowTagAsComplete() {
            return  <div class="buttons">
                        <a>Tag as Complete</a>  
                    </div>
        }
        function LastItem() {
            return  <div class="tl-status-last">
                        <div class="circle-cross"></div>
                        <div class ="circliner"> </div> 
                    </div>
          }
        
        function IfDocumentStatus(props) {
            const isDone = props.isDone;
            if (!isDone)  return <ShowTagAsComplete />
            else return <EmptyButton />

              return "";
        }
        
        function IfLastItem(props) {
            const isLast = props.isLast;
            if (isLast) {
              return <LastItem />
            }
            return "";
        }          
      return(
        <div class="timeline-container">
            <div class="timeline">
            
                <div class="tl-date"> 
                    <a> {this.props.timeRecieved}</a>
                </div>

                <div class="tl-status">
                    <div class ={statusColor}> </div> 
                    <div class ="circliner"> </div> 
                </div>
                <div class="tl-info">{this.props.personName} </div>
                <IfDocumentStatus isDone={this.props.documentStatus}/>
                
                <div class="tl-date-rel"> 
                    <a>{this.props.timeReleased}</a>
                </div>
                    <div class="vliner-container"> <div class="vliner"></div> </div>
                <div class="infoclass">
                    {this.props.description}
                </div>
                <div class="buttons">
                    <a></a>  
                </div>  
                <IfLastItem isLast={this.props.isLastItem} />
            </div>            
        </div>
      )
    }
  }

export default Timenode;