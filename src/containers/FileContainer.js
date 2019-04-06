import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import *as fileActions from '../store/modules/file'
import File from '../components/FIle'

class FileContainer extends Component{
  render(){
    return(
        <File/>
    )
  }
}

export default connect(

)(FileContainer)