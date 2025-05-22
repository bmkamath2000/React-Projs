import React from 'react';
class IssueAdd extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const form = document.forms.issueAdd;
        const issue ={
            owner: form.owner.value, title: form.title.value, status: "New",
        }
        this.props.createIssue(issue);
        form.owner.value = "";
        form.title.value = "";
        console.log("Submitted")
    }
    render(){
        return (
            <form name="issueAdd" onSubmit={this.handleSubmit}>
                <input type="text" name="owner" placeholder="Owner"/>
                <input type="text" name="title" placeholder="Title"/>
                <button >Add</button>
            </form>
        );
    }
}
export default IssueAdd;