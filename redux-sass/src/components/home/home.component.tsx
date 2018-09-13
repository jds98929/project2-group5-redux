import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import NflLogo1 from '../../assets/logo1.png';
export class HomeComponent extends React.Component<any, any> {
    public render() {
        return (
            <div className="w-100">
                <div className="jumbotron">
                    <img className="logo1 float-left" src={NflLogo1} alt="Logo 1" height="180px" width="140px" />
                    <h1 className="display-4 d-flex justify-content-center">Welcome username!</h1>
                    <p className="lead d-flex justify-content-center">Homepage</p>
                </div> 
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h5>Games(by Week)</h5>
                            <nav aria-label="Weekly navigation">
                                <ul className="pagination pagination-sm">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div className="col-2">
                            <h5>View Teams</h5>
                            <p>Description </p>
                            <Link to="/" className=""><button className="btn btn-secondary" role="button">View Table</button></Link>
                        </div>
                        <div className="col-2">
                            <h5>Placeholder</h5>
                            <p>Description</p>
                            <Link to="/" className=""><button className="btn btn-secondary" role="button">Create New Ticket</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}