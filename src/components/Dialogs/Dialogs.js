import React from 'react'
import { newMessageBodyCreator, sendMessageCreator } from '../../redux/state'
import { Dialog } from './Dialog/Dialog'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'

export const Dialogs = (props) => {
  const dialogData = props.state.dialogs.map((d) => (
    <Dialog name={d.name} id={d.id} />
  ))

  const messageData = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} likes={m.likesCount} />
  ))
  ///////////////

  const clickHandler = () => {
    props.dispatch(sendMessageCreator())
  }
  const changeHandler = (e) => {
    let text = e.target.value
    props.dispatch(newMessageBodyCreator(text))
  }

  /////////////////
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogData}</div>
      <div className={s.dialogs_messages}>{messageData}</div>
      <div>
        <textarea value={props.state.newMessageBody} onChange={changeHandler} />
        <button onClick={clickHandler}>Add</button>
      </div>
    </div>
  )
}
