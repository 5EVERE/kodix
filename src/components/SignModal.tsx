import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Typography,
} from '@mui/material';

interface SignModalProps {
  handleClose: () => void;
  open: boolean;
  onSignIn: (email: string) => void;
}

const SignInModal: React.FC<SignModalProps> = ({
  handleClose,
  open,
  onSignIn,
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleSignIn = (): void | null => {
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    }
    if (password.length < 6) {
      setPasswordError(true);
      return;
    }
    onSignIn(email);
  };

  const validateEmail = (email: string): void => {
    setEmailError(!emailRegex.test(email));
  };

  const validatePassword = (password: string): void => {
    setPasswordError(password.length < 6);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const isFormValid: boolean | string =
    !emailError && !passwordError && email && password;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '20px',
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: 'center',
          color: 'black',
          fontSize: '3rem',
          fontWeight: 'bold',
        }}
      >
        Sign In
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ alignSelf: 'flex-start', marginLeft: '25px' }}
        >
          Email
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          placeholder="example@example.com"
          sx={{
            marginBottom: '20px',
            width: '360px',
            height: '60px',
            borderRadius: '50px',
          }}
          InputProps={{
            sx: {
              borderRadius: '20px',
            },
          }}
          error={emailError}
          helperText={emailError ? 'Invalid email format' : ''}
        />
        <Typography
          variant="subtitle1"
          sx={{ alignSelf: 'flex-start', marginLeft: '25px' }}
        >
          Password
        </Typography>
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          placeholder="********"
          sx={{
            marginBottom: '30px',
            width: '360px',
            height: '60px',
            borderRadius: '10px',
          }}
          InputProps={{
            sx: {
              borderRadius: '20px',
            },
          }}
          error={passwordError}
          helperText={
            passwordError ? 'Password must be at least 6 characters' : ''
          }
        />
        <Button
          variant="contained"
          onClick={handleSignIn}
          sx={{
            width: '265px',
            height: '60px',
            backgroundColor: '#6BE4FF',
            borderRadius: '20px',
            fontSize: '1rem',
            color: 'white',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
          disabled={!isFormValid}
        >
          Sign In
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
