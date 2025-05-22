import React from 'react';
import IssueTable from './IssueTable.jsx';
import IssueAdd from './IssueAdd.jsx';
function IssueFilter(){
    return (
        <h6>This is placeholder for Issue filter</h6>
    );
}
class IssueList extends React.Component{
    
    constructor(props){
        super(props);
        this.state={issues:[]}
        this.createIssue = this.createIssue.bind(this);
    }
    componentDidMount(){
        this.LoadData();
    }
    LoadData(){
        let initialIssues=[];
        setTimeout(()=>{
            this.setState({issues:initialIssues})
        },1000);
    }
    createIssue(issue){
        issue.id = this.state.issues.length + 1;
        issue.created = new Date();
        const newIssueList = this.state.issues.slice();
        newIssueList.push(issue);
        this.setState({issues:newIssueList})
    }
    render(){
        return (
        <React.Fragment>
            <h1>Issue Tracker</h1>
            <IssueFilter/>
            <hr/>
            <IssueTable issues={this.state.issues}/>
            <hr/>
            <IssueAdd createIssue={this.createIssue} />
        </React.Fragment>
        );
    }
}
export default IssueList;