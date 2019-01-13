import React, { Component } from 'react';
import './MailList.scss'

class MailList extends Component {
    state = {
        openedMsg: []
    }
    togleMsg = (item)=>{
        let temple = this.state.openedMsg;

        if (temple.includes(item.id)){
            temple.splice(temple.indexOf(item.id), 1);
        }else {
            if(!item.status){
                this.props.readMail(item.id)
            }
            temple.push(item.id);
        }
        this.setState({
            openedMsg: temple
        })
    }
    getStatus = (item) => {
        let opnMsg = this.state.openedMsg;
        let status = opnMsg.includes(item) ? null : 'hidden';

        return status;
    }
    render() {
        let mailList = this.props.mails.map((item) => {
            return (<li
                key={item.id}
                onClick={()=> this.togleMsg(item)}
               className={item.status ? null : 'active-letter'}>
                {item.from} - {item.subject}
                <p className={this.getStatus(item.id)}>{item.text}</p>
            </li>)
        })
        return (
            <div className="mail-list">
                <ul>
                    {mailList}
                </ul>
            </div>
        );
    }
}

export default MailList;