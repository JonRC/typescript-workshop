import * as yup from 'yup'
import moment from 'moment'

const userSchema = yup.object().shape({
  name: yup.string().min(2).required(),

  email: yup.string().email().required(),

  birth: yup.string().test('birth', 'Birth must to be YYYY-MM-DD format', (birth => {
    return moment(birth, 'YYYY-MM-DD').isValid()
  })),

  address: yup.object().shape({
    country: yup.string(),
    state: yup.string(),
    city: yup.string()
  })
})

export { userSchema }