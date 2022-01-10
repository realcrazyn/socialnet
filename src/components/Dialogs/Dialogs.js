import React from 'react'
import { Navigate } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min'

import { Dialog } from './Dialog/Dialog'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'

export const Dialogs = (props) => {
  const dialogData = props.state.dialogs.map((d, i) => (
    <Dialog key={i} name={d.name} id={d.id} />
  ))

  const messageData = props.state.messages.map((m, i) => (
    <Message key={i} message={m.message} id={m.id} likes={m.likesCount} />
  ))

  const clickHandler = () => {
    props.onSendMessage()
  }
  const changeHandler = (e) => {
    let text = e.target.value
    props.onChangeMessage(text)
  }

  if (!props.isAuth) {
    return (
      <div>
        <Navigate to={'/login'} />
      </div>
    )
  }

  return (
    <Fragment>
      <div className={s.dialogs}>
        <div className={s.dialogs_items}>{dialogData}</div>
        <div className={s.dialogs_messages}>{messageData}</div>
      </div>

      <div className={s.dialogs_add}>
        <textarea
          className={s.dialogs_add__text}
          value={props.state.newMessageBody}
          onChange={changeHandler}
        />
        <button className={s.dialogs_add__btn} onClick={clickHandler}>
          Add
        </button>
      </div>
    </Fragment>
  )
}
