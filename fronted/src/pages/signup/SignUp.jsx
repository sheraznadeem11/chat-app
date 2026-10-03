const SignUp = () => {
  return (
    <div className="flex min-w-96 mx-auto items-center justify-center">
      <div className="w-full rounded-lg border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-lg">
        <h1 className="text-center text-3xl font-semibold text-gray-300">
          SignUp <span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="john Doe"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="john_doe"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          {/* GENDER CHECKBOX GOES HERE */}
          <a className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"href="#">
            Already have an account?
                  </a>
                  <div>
                      <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign up</button>
                  </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
