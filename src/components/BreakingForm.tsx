import { useDispatch} from 'react-redux'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import { breakifyName } from '../store/breakifySlice'

const BreakingSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
})

const initialValues ={
  firstName: '',
  lastName: '',
}

export const BreakingForm = () => {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BreakingSchema}
      onSubmit={(values) => {
        dispatch(breakifyName(values))
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="flex gap-4">
            <div className="mb-6">
              <label htmlFor="success" className="block mb-2 text-base font-medium text-white">First name</label>
              <Field name="firstName" className="border bg-white text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed " />
              {errors.firstName && touched.firstName
                ? (
                  <div className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.firstName}</div>
                )
                : null}
            </div>
            <div className="mb-6">
              <label htmlFor="success" className="block mb-2 text-base font-medium text-white">Last name</label>
              <Field name="lastName" className="border bg-white text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed " />
              {errors.lastName && touched.lastName
                ? (
                  <div className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.lastName}</div>
                )
                : null}
            </div>
          </div>
          <button className="w-full bg-primary text-white rounded-md py-2" type="submit">Breakify</button>
        </Form>
      )}
    </Formik>
  )
}
