import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404 - <Link to="/phones">Go home</Link>
  </div>
);

export default NotFoundPage;
