import { Map, List, fromJS } from 'immutable'
import { handleActions, createAction } from 'redux-actions'

//action type
const SET_PREVIEW = 'file/SET_PREVIEW'
const DELETE_PREVIEW = 'file/DELETE_PREVIEW'

//action creators
export const setPreview = createAction(SET_PREVIEW)
export const deletePreview = createAction(DELETE_PREVIEW)

//initialState
const initialState = Map({
  myInput : List()
})

//reducer

export default handleActions({
  [SET_PREVIEW] : (state,action) => {
    const { payload : { inputName, fileList}} = action
    return state.set(inputName, fromJS(fileList))
  },
  [DELETE_PREVIEW] : (state, action) => {
    const { payload : { inputName, id} } = action
    return state.deleteIn([inputName, id])
  }
}, initialState)
