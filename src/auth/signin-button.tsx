import { signIn } from "./authHlelper";

export function SignIn() {
  return (
    <form
      action={async (formData) => {
        await signIn();
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  );
}
