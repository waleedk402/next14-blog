import React from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
const SinglePost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} alt='' src="/avatar" width={50} height={50}></Image>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>George RR Martin</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>01.01.24</span>
        </div>
        </div>
        <div className={styles.content}>
          lorem15

        </div>
      </div>
    </div>
  )
}

export default SinglePost