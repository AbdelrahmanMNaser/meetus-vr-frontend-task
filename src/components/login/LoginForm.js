import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, setError, setLoading } from '../../store/authSlice';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from './Button';
import TextInput from './TextInput';
import { MdMailOutline } from "react-icons/md";
import { LuLockKeyhole } from "react-icons/lu";


const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector(state => state.auth);
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [fieldErrors, setFieldErrors] = useState({
    email: '',
    password: ''
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    if (name === 'email') {
      if (!value) {
        setFieldErrors(prev => ({ ...prev, email: 'Email is required' }));
      } else if (!validateEmail(value)) {
        setFieldErrors(prev => ({ ...prev, email: 'Please enter a valid email' }));
      } else {
        setFieldErrors(prev => ({ ...prev, email: '' }));
      }
    }

    if (name === 'password') {
      if (!value) {
        setFieldErrors(prev => ({ ...prev, password: 'Password is required' }));
      } else if (value.length < 6) {
        setFieldErrors(prev => ({ ...prev, password: 'Password must be at least 6 characters' }));
      } else {
        setFieldErrors(prev => ({ ...prev, password: '' }));
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear field-level errors when user starts typing
    setFieldErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const validateForm = () => {
    return validateEmail(formData.email) && 
           formData.password.length >= 6 && 
           !fieldErrors.email && 
           !fieldErrors.password;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    handleBlur({ target: { name: 'email', value: formData.email }});
    handleBlur({ target: { name: 'password', value: formData.password }});

    if (!validateForm()) return;

    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const response = await fetch('https://api-yeshtery.dev.meetusvr.com/v1/yeshtery/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: formData.email, 
          password: formData.password,
          isEmployee: true 
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      dispatch(loginSuccess(data));
      router.push('/dashboard');
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-normal text-black mb-4">Welcome back</h2>
      <form className="space-y-3" onSubmit={handleLogin}>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
            {error}
          </div>
        )}
        
        <TextInput
          type="email"
          placeholder="Email"
          icon= {<MdMailOutline className="text-gray-400 mr-2" />}
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          error={fieldErrors.email}
        />
        
        <TextInput
          type="password"
          placeholder="Password"
          icon= {<LuLockKeyhole className="text-gray-400 mr-2" />}
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          error={fieldErrors.password}
        />
        
        <Button 
          text={loading ? 'Logging in...' : 'Login'} 
          onClick={handleLogin} 
          disabled={!validateForm() || loading}
          className={`w-full py-2 rounded-lg transition-colors ${
            !validateForm() || loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700'
          } text-white font-medium`}
        />
      </form>
    </div>
  );
};

export default LoginForm;