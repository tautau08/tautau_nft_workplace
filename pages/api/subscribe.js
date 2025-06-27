export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  // Basic validation
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Log the subscription (you can save to database here)
  try {
    console.log('📧 New subscriber:', email);

    // Note: Email is sent via EmailJS on the client-side
    res.status(200).json({
      success: true,
      message: 'Email validated successfully!',
      email,
    });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({
      error: 'Failed to process subscription',
    });
  }
}
