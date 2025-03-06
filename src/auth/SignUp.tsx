export const SignUp = () => {
  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary">
      <main className="form-signin w-25 m-auto shadow-lg p-5">
        <form>
          <h1 className="h3 mt-5 mb-3 fw-normal">Please sign up</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control mt-4"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control mt-4"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control mt-4"
              id="floatingPassword2"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword2">Repeat password</label>
          </div>

          <button className="btn btn-primary w-100 py-2 mt-5" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2025</p>
        </form>
      </main>
    </div>
  );
};
