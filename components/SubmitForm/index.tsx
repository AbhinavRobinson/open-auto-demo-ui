import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styles from './index.module.scss'

const SubmitForm = () => (
  <Formik
    initialValues={{ email: '', name: '' }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false)
      }, 500)
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required('Please provide your email.'),
      name: Yup.string().required('Please provide your full name.'),
    })}
  >
    {(props) => {
      const {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props
      return (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.input}>
            <input
              name='name'
              type='name'
              placeholder='Enter Your Name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && styles.error}
            />
          </div>
          <div className={styles.input}>
            <input
              name='email'
              type='text'
              placeholder='Enter Your Email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && styles.error}
            />
          </div>
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )
    }}
  </Formik>
)

export default SubmitForm
