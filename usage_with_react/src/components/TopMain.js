import React from 'react';
import karaoke001 from '../image/karaoke001.jpeg';
import './TopMain.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// for material-ui
const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });


const TopMain = (props) => {
    const { classes } = props;

    return (
        <div className="title">
            <img src={karaoke001} alt="karaoke001" />
            <div className="filter"></div>
            <div className="string">
                <p>OKERU。</p>
            </div>
            <div className="border"></div>
            <div className="little_string">
                <p>〜カラオケ好きな仲間を見つけよう〜</p>
            </div>

            <div className="buttons">
                <Button variant="contained" color="primary" size="large" className={classes.button}>
                    新規登録
                </Button>
                <Button variant="contained" color="secondary" size="large" className={classes.button}>
                    ログイン
                </Button>
            </div>
        </div>
    )
}

TopMain.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopMain);