export default function authHeader (): { sl_token: string } {
  const userStr = localStorage.getItem('user')
  let user = null
  if (userStr != null) { user = JSON.parse(userStr) }

  if (user?.sl_token != null) {
    // return { Authorization: 'Bearer ' + user.sl_token }; // for Spring Boot back-end
    return { sl_token: user.sl_token }
  } else {
    // return { Authorization: '' }; // for Spring Boot back-end
    return { sl_token: '' }
  }
}
