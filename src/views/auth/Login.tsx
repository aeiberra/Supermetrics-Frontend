import React, { useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { login } from '../../services/auth.service'
import { LoginDataInterface } from '../../types/types'

const Login: React.FC<{}> = () => {
  const navigate: NavigateFunction = useNavigate()

  const [loading, setLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const initialValues: LoginDataInterface = {
    name: '',
    email: '',
    client_id: ''
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required!'),
    email: Yup.string().required('This field is required!'),
    client_id: Yup.string().required('This field is required!')
  })

  const handleLogin = (formValue: LoginDataInterface): void => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { name, email, client_id }: LoginDataInterface = formValue

    setMessage('')
    setLoading(true)

    login(name, email, client_id).then(
      () => {
        navigate('/profile')
        window.location.reload()
      },
      (error) => {
        const resMessage =
          ((Boolean(error.response)) &&
            (Boolean(error.response.data)) &&
            (Boolean(error.response.data.message))) ||
          (Boolean(error.message)) ||
          error.toString()

        setLoading(false)
        setMessage(resMessage)
      }
    )
  }

  return (
    <div className='col-md-12'>
      <div className='card card-container'>
        <img
          src='//ssl.gstatic.com/accounts/ui/avatar_2x.png'
          alt='profile-img'
          className='profile-img-card'
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <Field name='name' type='text' className='form-control' id='name' />
              <ErrorMessage
                name='name'
                component='div'
                className='alert alert-danger'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <Field name='email' type='text' className='form-control' id='email' />
              <ErrorMessage
                name='email'
                component='div'
                className='alert alert-danger'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='client_id'>Client ID</label>
              <Field name='client_id' type='text' className='form-control' id='client_id' />
              <ErrorMessage
                name='client_id'
                component='div'
                className='alert alert-danger'
              />
            </div>

            <div className='form-group'>
              <button type='submit' className='btn btn-primary btn-block' disabled={loading}>
                {loading && (
                  <span className='spinner-border spinner-border-sm' />
                )}
                <span>Login</span>
              </button>
            </div>

            {(message !== '') && (
              <div className='form-group'>
                <div className='alert alert-danger' role='alert'>
                  {message}
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Login
