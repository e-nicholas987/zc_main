const { createJwt } = require('../lib/jwtHelper')
const { existingUser, extraData } = require('../data/dummyData')

exports.register = (req, res, _) => {
  const { email, fullName } = req.body
  //simulate a database check for existing user
  if (email === existingUser.email) {
    return res.status(409).json({
      status: false,
      reason: `${email} is already been taken, why not try ${email}331 or ${email}231`
    })
  }
  //Create a token for the user and cookie the user
  const token = createJwt(extraData.id)
  //send user data back to the user
  newData = {
    displayName: fullName,
    email: email
  }
  res.status(201).json({
    status: true,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    message: 'registration successful',
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======

    message: 'registration successful',
=======
 main
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
=======
    message: 'registration successful',
>>>>>>> cd31f1ca8a6f76c450829ee975c4dd186c10cf51
    data: {
      user: { ...newData, ...extraData },
      token
    }
  })
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234

=======
>>>>>>> cd31f1ca8a6f76c450829ee975c4dd186c10cf51
exports.handleRegister = (_, res) => {
  const user = {
    id: 1,
    fullname: 'Mark Essien',
    firstname: 'Mark',
    lastname: 'Essien',
    email: 'markessien@gmail.com',
    verified: false,
    profileImageUrl:
      'https://techpoint.africa/wp-content/uploads/2020/01/mark-essien-e1580122566517.jpg',
    status: 'Hi, I am new here',
    phoneNumber: '',
    occupation: 'CEO',
    bio: 'CEOing',
    facebookUrl: '',
    twitterUrl: 'https://twitter.com/markessien?t=2nvvnl2hKj5563cEDk-vrA&s=09'
  }
  const token = createJwt(user.id)
  res.status(200).json({
    status: true,
    message: 'registration successful',
    data: {
      user: user,
      token
    }
  })
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======


>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
=======
>>>>>>> cd31f1ca8a6f76c450829ee975c4dd186c10cf51
