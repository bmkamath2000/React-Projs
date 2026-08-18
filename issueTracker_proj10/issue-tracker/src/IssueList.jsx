import React from "react";

class IssueList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { issues: [] };
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    const initialIssues = [
      {
        id: 1,
        title: 'Error in console when clicking Add',
        status: 'Open',
        description: 'Steps to reproduce the error: 1. Click on Add button without entering any data. 2. Observe the console for error messages.',

      }
    ];

    this.setState({ issues: initialIssues });
  }
  render() {
    return (
      <React.Fragment>
        <h1>IssueTracker</h1>
        <h6>This is placeholder for Issue filter</h6>
        <hr />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.issues.map(issue => (
                <tr key={issue.id}>
                  <td>{issue.id}</td>
                  <td>{issue.title}</td>
                  <td>{issue.description}</td>
                  <td>{issue.status}</td>
                </tr>
              ))}

          </tbody>
        </table>
        <hr />
        <h6>This is placeholder for Issue add</h6>
      </React.Fragment>
    );
  }
}
export default IssueList