import { connect } from 'react-redux'
import UserRegister from '../components/UserRegister'
import keepNewInfo from '../actions'


function mapStateToProps(state) {
    return {
      name: state.name
    };
  }
  
function mapDispatchToProps(dispatch) {
    return {
        onClick(name){
            dispatch(keepNewInfo(name));
        }
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserRegister)