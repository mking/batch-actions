import * as classNames from "classnames";
import * as Immutable from "immutable";
import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { populateUsers } from "../actions/userActions";
import { usersSelector } from "../selectors/userSelectors";
 
interface IProps {
    className?: string;
    populateUsers?: any;
    users?: Immutable.List<any>;
}

export class Example extends React.Component<IProps> {
    public handlePopulateUsers = () => {
        this.props.populateUsers();
    }

    public render() {
        const { className, users } = this.props;

        return (
            <div className={classNames("container", className)}>
                <form>
                    <div className="form-group">
                        <button
                            className="btn btn-primary"
                            onClick={this.handlePopulateUsers}
                            type="button"
                        >
                            Populate users
                        </button>
                    </div>
                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: Immutable.Map<string, any>) => (
                            <tr key={user.get("id")}>
                                <td>
                                    {user.get("name")}
                                </td>
                                <td>
                                    {user.get("email")}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect<any, IProps, IProps>(
    createStructuredSelector({
        users: usersSelector,        
    }),
    {
        populateUsers,
    },
)(Example);
