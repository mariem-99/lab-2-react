import { useState } from 'react';

export default function SignupFormWithValidation() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [touched, setTouched] = useState({ email: false, password: false, confirm: false });
  const [submitted, setSubmitted] = useState(false);

  const errors = {
    email: !email.includes('@') ? 'Please enter a valid email' : '',
    password: password.length < 6 ? 'Password must be at least 6 characters' : '',
    confirm: password !== confirmPassword ? "Passwords don't match" : '',
  };

  const isValid = !errors.email && !errors.password && !errors.confirm && email && password && confirmPassword;
  const handleBlur = (field) => setTouched({ ...touched, [field]: true });

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); if (isValid) setSubmitted(true); }}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => handleBlur('email')} />
          {touched.email && errors.email && <p className="error">❌ {errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={() => handleBlur('password')} />
          {touched.password && errors.password && <p className="error">❌ {errors.password}</p>}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onBlur={() => handleBlur('confirm')} />
          {touched.confirm && errors.confirm && <p className="error">❌ {errors.confirm}</p>}
        </div>
        <button type="submit" disabled={!isValid}>Submit</button>
      </form>
      {submitted && <div className="success">✅ Account created successfully!</div>}
    </div>
  );
}