import { SimpleParagraph } from "./SimpleParagraph";

export default function LoginForm() {

  return (
    <form>
      <SimpleParagraph />
      <label htmlFor="login">Login</label>
      <input id="login" type="text" placeholder="Login"/>
      <label htmlFor="passwd">Password</label>
      <input id="passwd" type="password" placeholder="Password"/>
      <button>Submit</button>
    </form>
  )
}