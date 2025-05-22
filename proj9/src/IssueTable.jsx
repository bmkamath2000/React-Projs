import React from 'react'
function IssueRow(props){
    const issue = props.issue;
    return (
        <tr>
            <td>{issue.id}</td>
            <td>{issue.status}</td>
            <td>{issue.owner}</td>
            <td>{issue.created.toDateString()}</td>
            <td>{issue.effort}</td>
            <td>{issue.due ? issue.due.toDateString(): ''}</td>
            <td>{issue.title}</td>
        </tr>
    );
}
class IssueTable extends React.Component{
    render(){
        const issueRows=this.props.issues.map(issue=>
            <IssueRow key={issue.id} issue={issue}/>
        );
        return (
            <table className="bordered-table">
             <thead>
                <tr>
                    <th>ID</th>
                    <th>Status</th>
                    <th>Owner</th>
                    <th>Created</th>
                    <th>Effort</th>
                    <th>DueDate</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                    {issueRows}
                </tbody>   
            </table>
        );
    }
}
export default IssueTable;