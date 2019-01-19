import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

// 本体が一文である場合、ブロックを表す{...}を省略できます。
// また、文の戻り値がそのまま戻り値とみなされるので、return命令も省略できます。
// オブジェクトリテラルを返すときは、波括弧がオブジェクトを表すのか処理内容のブロックを表すのかわからなくなるので、
// ステートメントの方に「()」をつけて書きます

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return { active: ownProps.filter === state.visibilityFilter }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)