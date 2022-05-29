import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styles from './index.module.scss'
import toast from 'react-hot-toast'
import { Data } from '../../pages/api/submit'

const SubmitForm = () => (
  <Formik
    initialValues={{ email: '', name: '' }}
    onSubmit={async (values, { setSubmitting }) => {
      try {
        const res = await fetch('/api/submit', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
        const data = (await res.json()) as Data
        console.log(data)
        if (!res.ok) {
          throw data.message
        }
        toast.success(data.message)
      } catch (error: any) {
        toast.error(error)
      }
      setTimeout(() => {
        setSubmitting(false)
      }, 1500)
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
