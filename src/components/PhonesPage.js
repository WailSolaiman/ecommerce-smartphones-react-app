import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { fetchPhones } from '../actions/phones';
import TobBar from './HomePageComponents/TopBar';
import PhonesRenderer from './HomePageComponents/PhonesRenderer';
import LoadingPage from './LoadingPage';
import Sidebar from './Sidebar';

class PhonesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasRendered: true
        };
    }

    componentDidMount() {
        this.props.fetchPhones();
    }

    render() {
        if (this.state.hasRendered) {
            setTimeout(() => {
                this.setState(() => ({ hasRendered: false }))
            }, 1000);
            return <LoadingPage />
        }   
        return (
            <Container className="my-5">    
                <TobBar />
                <PhonesRenderer />
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPhones() {
        dispatch(fetchPhones())
    }
});

export default connect(null, mapDispatchToProps)(PhonesPage);