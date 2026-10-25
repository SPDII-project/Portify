// Auth Controller for Portify
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // Team note: Hook up JWT token generation and password verification with User model here
    res.status(200).json({
      success: true,
      message: 'Login successful (team stub)',
      data: {
        token: 'sample-jwt-token-portify',
        user: { id: 'usr_001', name: 'Demo Admin', email: email || 'admin@portify.com', role: 'admin' },
      },
    });
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    res.status(201).json({
      success: true,
      message: 'User registered successfully (team stub)',
      data: {
        user: { id: 'usr_002', name: name || 'New User', email, role: 'user' },
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: {
        user: { id: 'usr_001', name: 'Portify Lead', email: 'admin@portify.io', role: 'admin' },
      },
    });
  } catch (error) {
    next(error);
  }
};
