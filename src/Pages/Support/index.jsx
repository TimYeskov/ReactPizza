import React from 'react'
import styles from "./Support.module.scss"
const Support = () => {
  return (
    <div className='container'>
      <div className={styles.support}>
        <h1>Поддержка</h1>
        <div className={styles.form__support}>
            <form acction="" method='post'>
                <textarea name='' id='' cols='30' rows='30' placeholder='Напишите сообщение...'></textarea>
                <button type='submit'>Отправить</button>
            </form>
        </div>

      </div>
    </div>
  )
}

export default Support
