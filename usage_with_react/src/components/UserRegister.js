import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import classNames from 'classnames';
// import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
});


class UserRegister extends React.Component {
    state = {
        name: 'Cat in the Hat',
    };

    handleChange = name => event => {
        event.preventDefault()
        console.log(event)
        this.setState({
          [name]: event.target.value,
        });
    };
    // onChange={this.handleChange('name')}
    
    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="苗字"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                    
                />
            </form>

        )
    } 

}



UserRegister.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserRegister);