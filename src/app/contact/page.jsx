import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
const ContactPage = () => {
  return (
    <div className={styles.container}>
  <div className={styles.imgContainer}>
    <Image src="/contact.png" alt="" fill className={styles.img} />
  </div>
  <div className={styles.formContainer}>
    <form action='' className={styles.form}>
    <input type="text" placeholder="Name and Surname" className={styles.input}/>
    <input type="email" placeholder="Email Address" className={styles.input}/>
    <input type="number" placeholder="Phone Number (Optional)" className={styles.input}/>
    <textarea name="" id="" cols="30" rows="10" placeholder="Message" className={styles.input}></textarea>
    <button type='submit' className={styles.button}>Send</button>
    </form>
  </div>
    </div>
  )
}

export default ContactPage